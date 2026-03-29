package com.jktours.config;

import com.jktours.entity.*;
import com.jktours.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final DestinationRepository destinationRepo;
    private final TourPackageRepository packageRepo;
    private final TestimonialRepository testimonialRepo;

    @Override
    public void run(String... args) {
        seedDestinations();
        seedPackages();
        seedTestimonials();
    }

    private void seedDestinations() {
        if (destinationRepo.count() > 0) return;

        // Domestic
        destinationRepo.save(Destination.builder().name("Andamans").image("https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Goa").image("https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Kerala").image("https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Rajasthan").image("https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Himachal Pradesh").image("https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Kashmir").image("https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Ladakh").image("https://cdn.pixabay.com/photo/2019/09/07/08/54/ladakh-4458588_1280.jpg").type("DOMESTIC").build());
        destinationRepo.save(Destination.builder().name("Uttarakhand").image("https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg").type("DOMESTIC").build());

        // International
        destinationRepo.save(Destination.builder().name("Bali").image("https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Dubai").image("https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Thailand").image("https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Singapore").image("https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Europe").image("https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Maldives").image("https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Malaysia").image("https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Switzerland").image("https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Japan").image("https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg").type("INTERNATIONAL").build());
        destinationRepo.save(Destination.builder().name("Australia").image("https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg").type("INTERNATIONAL").build());
    }

    private void seedPackages() {
        if (packageRepo.count() > 0) return;

        // Domestic
        packageRepo.save(TourPackage.builder().title("Stunning Kerala - Budget").image("https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg").itinerary("Munnar 2N, Thekkady 1N, Kumarakom 1N").price(16562.0).category("Domestic").nights(4).duration("4N/5D").groupSize("2-20").transport("Flight/Train + Cab").accommodation("3★ Hotels + Houseboat").build());
        packageRepo.save(TourPackage.builder().title("Goa 4 Nights 3 Star").image("https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg").itinerary("Goa 4N").price(10272.0).category("Domestic").badge("Bestseller").nights(4).duration("4N/5D").groupSize("2-20").transport("Flight/Train + Cab").accommodation("3★ Hotels").build());
        packageRepo.save(TourPackage.builder().title("Magnificent Tour to Himachal").image("https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg").itinerary("Shimla 2N, Manali 3N, Dharamshala 1N").price(21115.0).category("Domestic").nights(6).duration("6N/7D").groupSize("2-20").transport("Flight/Train + Cab").accommodation("3★ Hotels").build());
        packageRepo.save(TourPackage.builder().title("Ladakh Escape").image("https://cdn.pixabay.com/photo/2019/09/07/08/54/ladakh-4458588_1280.jpg").itinerary("Leh 2N, Pangong 1N, Nubra 1N").price(18500.0).category("Domestic").badge("Bestseller").nights(4).duration("4N/5D").groupSize("2-15").transport("Flight + Cab").accommodation("3★ Hotels/Camps").build());

        // Europe
        packageRepo.save(TourPackage.builder().title("Grand Tour of Europe with All Meals").image("https://cdn.yourholiday.me/static/dynimg/itinerary/55/600x300/2998781-2998780_london-tourism-title.jpg").itinerary("London 3N, Paris 3N, Rotterdam 1N").price(404583.0).category("Europe").badge("Fixed Departure").nights(7).duration("7N/8D").groupSize("2-30").transport("Flight + Coach").accommodation("4★ Hotels").build());
        packageRepo.save(TourPackage.builder().title("Glimpses of Europe").image("https://cdn.yourholiday.me/static/dynimg/itinerary/43/600x300/2993319-2993318_europe.jpg").itinerary("Paris 3N, Eindhoven 1N, Cologne 1N").price(229628.0).category("Europe").nights(5).duration("5N/6D").groupSize("2-30").transport("Flight + Coach").accommodation("4★ Hotels").build());

        // Andaman
        packageRepo.save(TourPackage.builder().title("Andaman Island Delight With Flight").image("https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg").itinerary("Port Blair 1N, Havelock 2N").price(28264.0).category("Andaman").badge("Fixed Departure").nights(3).duration("3N/4D").groupSize("2-20").transport("Flight + Ferry").accommodation("3★ Hotels").build());

        // International
        packageRepo.save(TourPackage.builder().title("Bali Basic for First Timers").image("https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg").itinerary("Ubud, Water Sports, Uluwatu, Tanah Lot").price(12387.0).category("Bali").badge("Bestseller").nights(4).duration("4N/5D").groupSize("2-20").transport("Flight + Coach").accommodation("3★/4★ Hotels").build());
        packageRepo.save(TourPackage.builder().title("Dubai on a Budget").image("https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg").itinerary("Dubai City Tour, Burj Khalifa, Desert Safari, Dhow Cruise").price(28536.0).category("Dubai").badge("Bestseller").nights(4).duration("4N/5D").groupSize("2-20").transport("Flight + Coach").accommodation("3★/4★ Hotels").build());
        packageRepo.save(TourPackage.builder().title("Classic Thailand").image("https://cdn.yourholiday.me/static/dynimg/itinerary/45/600x300/2210729-2210728_thailand-p1.jpg").itinerary("Bangkok 3N, Pattaya 2N").price(28500.0).category("Thailand").badge("Bestseller").nights(5).duration("5N/6D").groupSize("2-20").transport("Flight + Coach").accommodation("3★/4★ Hotels").build());
        packageRepo.save(TourPackage.builder().title("Singapore on a Budget").image("https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg").itinerary("Gardens by the Bay, Universal Studios, Sentosa").price(32500.0).category("Singapore").badge("Bestseller").nights(4).duration("4N/5D").groupSize("2-20").transport("Flight + MRT + Coach").accommodation("3★/4★ Hotels").build());
    }

    private void seedTestimonials() {
        if (testimonialRepo.count() > 0) return;

        testimonialRepo.save(Testimonial.builder().name("Anthony").location("Goa").text("No words! Thanks for making my dream come true. Sabse pyaara Hindustan!").rating(5).build());
        testimonialRepo.save(Testimonial.builder().name("Sagar").location("Belgaum").text("Never could I have imagined the wonderful experiences that awaited me. It was a wonderful experience overall.").rating(5).build());
        testimonialRepo.save(Testimonial.builder().name("Ramya John").location("Rajasthan").text("Thank you so much for a well-organized trip. The weather was awesome, the hotels were nice, thank you for everything!").rating(5).build());
        testimonialRepo.save(Testimonial.builder().name("Priya Sharma").location("Pune").text("J K Tours made our Europe trip absolutely magical. Every detail was perfectly planned. Highly recommend!").rating(5).build());
        testimonialRepo.save(Testimonial.builder().name("Rahul Mehta").location("Mumbai").text("Booked Dubai package for our family. The team was very professional and helpful. Best travel agency in Pune!").rating(5).build());
    }
}
