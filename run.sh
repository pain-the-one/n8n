
#!/bin/bash
set -e

# Generate the Fibonacci table
TABLE=$(python3 generate_html.py 100)

# Create a placeholder in the HTML if it doesn't exist
if ! grep -q "<!--FIBONACCI_TABLE-->" index.html; then
  sed -i '/<div class=\\"container/a <!--FIBONACCI_TABLE-->' index.html
fi

# Replace the placeholder with the generated table
sed -i "s|<!--FIBONACCI_TABLE-->|$TABLE|" index.html
