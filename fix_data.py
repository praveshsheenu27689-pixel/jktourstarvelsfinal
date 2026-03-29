import re

f = r'c:\Users\prave\OneDrive\Desktop\JKTourTravels\src\app\core\services\data.service.ts'

with open(f, 'rb') as fh:
    content = fh.read()

print(f'Size before: {len(content)}')

# Show bytes around position where error is (line 2937)
# Count to line 2937
lines = content.split(b'\n')
print(f'Total lines: {len(lines)}')
for i in range(2932, 2942):
    print(f'{i+1}: {repr(lines[i])}')

# The bad pattern: after '        }' there's an extra '\n      \n        }' before '      ]'
# Fix: remove the extra '\n      \n        }' 
bad = b'\n      \n        }\n      ]'
good = b'\n      ]'

count = content.count(bad)
print(f'Bad pattern count: {count}')

if count > 0:
    fixed = content.replace(bad, good, 1)  # replace only first occurrence
    with open(f, 'wb') as fh:
        fh.write(fixed)
    print(f'Size after: {len(fixed)}')
    print('Fixed!')
else:
    print('Pattern not found, checking alternatives...')
    # Try with different whitespace
    for i in range(2932, 2942):
        print(f'{i+1} bytes: {list(lines[i])}')
