#!/usr/bin/env python3

import http.server
import subprocess
import json
from typing import Any


class respond_requests(http.server.BaseHTTPRequestHandler):
    # Writing logs to help with debugging and troubleshooting to files. Retain them as backups later or something
    def log_request(self, code="NULL", size="NULL"):
        with open(file="pyserver-logs/access.log", mode="a") as f:
            f.write(
                f"{self.log_date_time_string()} - {self.address_string()} - {code} - {self.requestline}\n"
            )

    def log_message(self, format: str, *args: Any):
        with open(file="pyserver-logs/access.log", mode="a") as f:
            f.write(f"{self.log_date_time_string()} - {format % args}\n")

    # Probably unneccessary to override this as this uses log_message underneath anyway.
    def log_error(self, format: str, *args: Any):
        with open(file="pyserver-logs/error.log", mode="a") as f:
            f.write(
                f"{self.log_date_time_string()} - {self.address_string()} - {self.client_address} - {self.requestline} - {format % args}\n"
            )

    # gotta override handlers using this format
    def do_POST(self):
        print(self.headers)
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        decoded_data = json.loads(body)
        self.log_message("Message: %s", f"Payload data is {decoded_data}")
        self.log_message("Message: %s", "Received request. Processing...")
        result = subprocess.run(
            ["python3", "update_records.py", "Annapurna_Circuit"], capture_output=True, text=True
        )
        if result.returncode == 0:
            self.log_request(200, "success")
            self.log_message("Message: %s", "Random record increment in database succesful.")
            self.send_response(200, "incremented a random trail counter by 1")
            self.send_header('Content-type', 'text-plain')
#            self.send_header('Cache-control', 'no-store')
#            self.send_header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
#            self.send_header('Content-Security-Policy', 'default-src \'self\'; script-src \'self\'')
#            self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
            self.end_headers()
        else:
            self.log_error("Code: %d, Message: %s", 502, "Failed to increment random trail counter.")
            self.send_error(502, message="Server Error")


if __name__ == "__main__":
    port = 34268
    address = "0.0.0.0"
    server_address = (address, port)
    httpd = http.server.HTTPServer(
        server_address=server_address, RequestHandlerClass=respond_requests
    )
    print(f"Running server on port: {port}")
    httpd.serve_forever()
