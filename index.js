function generateQRCode() {
    let text = document.getElementById("text-input").value;
    let qrCodeDiv = document.getElementById("qr-code");
    qrCodeDiv.innerHTML = "";
    
    if (text.trim() === "") {
        alert("Please enter text or URL");
        return;
    }
    
    let qrCode = new Image();
    qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(text)}`;
    qrCodeDiv.appendChild(qrCode);
}