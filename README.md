CrossFire PH — Safe Static Clone (Demo)

What this package contains:
- index.html : Main static page (placeholder content).
- style.css  : Extracted styling for the page.
- scripts.js : Safe client-side scripts (no telemetry, no camera/IP exfiltration).
- README.md  : This file.

Important security & ethics notes:
- This package intentionally omits any code that captures IPs, camera images, geolocation remotely, or sends data to third parties.
- Do NOT add telemetry, camera capture, or secret tokens into the code unless you have explicit, informed consent from the users and a lawful purpose.
- For consent-based features (e.g., location sharing), implement server-side storage with authentication and explicit consent flows, encryption, and a privacy policy.

How to run locally:
1. Extract the ZIP and open index.html in a browser for a static preview.
2. For a local webserver preview (recommended), run: python -m http.server 8000
   and visit http://localhost:8000 in your browser.

If you want, I can help:
- Add optional, consent-based location sharing that POSTs data to a server you control (with example Flask endpoint).
- Build a small admin UI for managing news cards and content (no telemetry).
- Package alternative themes or icons for the site.
