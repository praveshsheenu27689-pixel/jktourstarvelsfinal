package com.jktours.service;

import com.jktours.entity.Booking;
import com.jktours.entity.ContactMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    private static final String TO   = "Eurocoretechnologies@gmail.com";
    private static final String FROM = "Eurocoretechnologies@gmail.com";

    public void sendBookingEmail(Booking b) {
        try {
            MimeMessage msg = mailSender.createMimeMessage();
            MimeMessageHelper h = new MimeMessageHelper(msg, true, "UTF-8");
            h.setFrom(FROM);
            h.setTo(TO);
            h.setSubject("New Tour Booking Request - " + b.getName());
            h.setText(buildBookingHtml(b), true);
            mailSender.send(msg);
            System.out.println("[EMAIL] Booking email sent for: " + b.getName());
        } catch (Exception e) {
            System.err.println("[EMAIL ERROR] Booking email failed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void sendContactEmail(ContactMessage m) {
        try {
            MimeMessage msg = mailSender.createMimeMessage();
            MimeMessageHelper h = new MimeMessageHelper(msg, true, "UTF-8");
            h.setFrom(FROM);
            h.setTo(TO);
            h.setSubject("New Contact Message - " + m.getName());
            h.setText(buildContactHtml(m), true);
            mailSender.send(msg);
            System.out.println("[EMAIL] Contact email sent for: " + m.getName());
        } catch (Exception e) {
            System.err.println("[EMAIL ERROR] Contact email failed: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private String buildBookingHtml(Booking b) {
        String customerRows =
            row("Full Name",  b.getName()) +
            row("Email",      b.getEmail()) +
            row("Phone",      b.getPhone());

        String tourRows =
            row("Destination",      b.getDestination()) +
            row("Package",          b.getPackageName()) +
            row("Travel Date",      b.getTravelDate()) +
            row("No. of Travelers", b.getTravelers()) +
            row("Budget / Person",  b.getBudget()) +
            row("Status",           "<span style=\"background:#fff3cd;color:#856404;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:600;\">PENDING</span>");

        String specialNote = (b.getMessage() != null && !b.getMessage().isBlank())
            ? "<div style=\"margin-top:16px;background:#f8f9ff;border-left:4px solid #1E3A5F;padding:12px 16px;border-radius:0 8px 8px 0;\">"
              + "<strong style=\"color:#1E3A5F;font-size:13px;\">Special Requirements:</strong>"
              + "<p style=\"margin:6px 0 0;color:#374151;font-size:13px;line-height:1.6;\">" + b.getMessage() + "</p></div>"
            : "";

        return "<div style=\"font-family:Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #e0e0e0;border-radius:12px;overflow:hidden;\">"
            + "<div style=\"background:linear-gradient(135deg,#1E3A5F,#2a5298);padding:28px 32px;text-align:center;\">"
            + "<h1 style=\"color:#fff;margin:0;font-size:22px;\">New Tour Booking Request</h1>"
            + "<p style=\"color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:14px;\">J K Tours &amp; Travels, Pune</p>"
            + "</div>"
            + "<div style=\"padding:28px 32px;background:#fff;\">"
            + "<table style=\"width:100%;border-collapse:collapse;\">"
            + "<tr><td colspan=\"2\" style=\"padding:0 0 16px;\"><h3 style=\"margin:0;color:#1E3A5F;font-size:16px;border-bottom:2px solid #f0f4ff;padding-bottom:8px;\">Customer Details</h3></td></tr>"
            + customerRows
            + "<tr><td colspan=\"2\" style=\"padding:20px 0 16px;\"><h3 style=\"margin:0;color:#1E3A5F;font-size:16px;border-bottom:2px solid #f0f4ff;padding-bottom:8px;\">Tour Details</h3></td></tr>"
            + tourRows
            + "</table>"
            + specialNote
            + "</div>"
            + "<div style=\"background:#f8f9ff;padding:16px 32px;text-align:center;border-top:1px solid #e0e0e0;\">"
            + "<p style=\"margin:0;color:#6b7280;font-size:12px;\">Submitted via <strong>jktourstravels.in</strong> — Please respond within 2 hours.</p>"
            + "</div>"
            + "</div>";
    }

    private String buildContactHtml(ContactMessage m) {
        String rows =
            row("Name",    m.getName()) +
            row("Email",   m.getEmail()) +
            row("Subject", m.getSubject() != null ? m.getSubject() : "—");

        return "<div style=\"font-family:Arial,sans-serif;max-width:620px;margin:auto;border:1px solid #e0e0e0;border-radius:12px;overflow:hidden;\">"
            + "<div style=\"background:linear-gradient(135deg,#1E3A5F,#2a5298);padding:28px 32px;text-align:center;\">"
            + "<h1 style=\"color:#fff;margin:0;font-size:22px;\">New Contact Message</h1>"
            + "<p style=\"color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:14px;\">J K Tours &amp; Travels, Pune</p>"
            + "</div>"
            + "<div style=\"padding:28px 32px;background:#fff;\">"
            + "<table style=\"width:100%;border-collapse:collapse;\">" + rows + "</table>"
            + "<div style=\"margin-top:20px;background:#f8f9ff;border-left:4px solid #1E3A5F;padding:14px 16px;border-radius:0 8px 8px 0;\">"
            + "<strong style=\"color:#1E3A5F;font-size:13px;\">Message:</strong>"
            + "<p style=\"margin:8px 0 0;color:#374151;font-size:13px;line-height:1.7;\">" + m.getMessage() + "</p>"
            + "</div>"
            + "</div>"
            + "<div style=\"background:#f8f9ff;padding:16px 32px;text-align:center;border-top:1px solid #e0e0e0;\">"
            + "<p style=\"margin:0;color:#6b7280;font-size:12px;\">Submitted via <strong>jktourstravels.in</strong> — Please reply within 24 hours.</p>"
            + "</div>"
            + "</div>";
    }

    private String row(String label, String value) {
        return "<tr>"
            + "<td style=\"padding:8px 0;color:#6b7280;font-size:13px;width:160px;vertical-align:top;\">" + label + "</td>"
            + "<td style=\"padding:8px 0;color:#111827;font-size:13px;font-weight:600;\">" + (value != null ? value : "—") + "</td>"
            + "</tr>";
    }
}
