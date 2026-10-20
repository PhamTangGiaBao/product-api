set -e
curl -sf localhost:3000/health
curl -sf localhost:3000/products
echo all test passed