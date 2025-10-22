// scripts.js - safe client-side behaviors (no telemetry/exfiltration)
document.getElementById('year').textContent = new Date().getFullYear();

// Safe geolocation demo: request permission and show to user only.
// This DOES NOT send data anywhere.
async function showGeolocation() {
    if (!navigator.geolocation) {
        alert('Geolocation not supported by your browser.');
        return;
    }
    try {
        const pos = await new Promise((res, rej) => navigator.geolocation.getCurrentPosition(res, rej, {timeout:10000}));
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        alert(`Your location (shown locally only):\nLatitude: ${lat}\nLongitude: ${lng}\nAccuracy: ${pos.coords.accuracy} meters`);
    } catch (e) {
        alert('Could not get location (permission denied or timeout).');
    }
}
// Optional: hook Download Patch button to show a safe modal
document.addEventListener('click', function(e){
    if(e.target && e.target.matches('.btn')){
        const txt = e.target.textContent.trim().toLowerCase();
        if(txt.includes('download')){
            alert('This is a demo "Download Patch" button — in real deployment replace with your signed installer link.');
        }
    }
});
// Expose function for demo (call from console or bind to UI if you want)
window.showGeolocation = showGeolocation;
