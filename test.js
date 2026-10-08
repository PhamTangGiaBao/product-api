const http = require("http");

const options = {
    hostname: "localhost",
    port: 3000,
    path: "/health",
    method: "GET"
};

const req = http.request(options, (res) => {
    if (res.statusCode === 200) {
        console.log("Health check test: PASSED");
        process.exit(0);
    } else {
        console.error("CI/CD Health check test: FAILED");
        process.exit(1);
    }
});

req.on("error", (error) => {
    console.error("API test failed:", error.message);
    process.exit(1);
});

req.end();