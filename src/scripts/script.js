// Whatsapp Number
const whatsappNumber = "+55 (42) XXXXX-XXXX"; 
// Formated Number
const formattedWhatsappNumber = whatsappNumber.replace(/\D/g, "");
// Message
const message = "Olá! Gostaria de saber mais sobre os produtos da Espaço WS.";
// Group Link
const groupLink = "https://chat.whatsapp.com/SEU-LINK-DO-GRUPO";
// Whatsapp API number
const whatsappApi = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(message)}`;
// Instagram Link
const instagramLink = "https://www.instagram.com/espaco_ws/";
// CNPJ
const cnpjNumber = "43.230.031/0001-41";
const cnpj = `CNPJ<br>${cnpjNumber}`;

// CNPJ 
document.getElementById("cnpj").innerHTML = cnpj;

// WhatsApp Link API
[
    "contact-whatsapp-hero",
    "contact-whatsapp-new",
    "contact-whatsapp-section",
    "contact-whatsapp-featured",
    "contact-whatsapp-svg",
    "contact-whatsapp-footer"
].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.href = whatsappApi;
    }
});

// WhatsApp Group Link
[
    "contact-whatsapp-group",
    "contact-whatsapp-group-footer"
].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.href = groupLink;
    }
});

// Instagram
[
    "contact-instagram-section",
    "contact-instagram-svg",
    "contact-instagram-footer"
].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.href = instagramLink;
    }
});