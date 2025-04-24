document.addEventListener("DOMContentLoaded", () => {
    // Whatsapp Number
    const whatsappNumber = "+55 (42) XXXXX-XXXX"; 
    // Formated Number
    const formattedWhatsappNumber = whatsappNumber.replace(/\D/g, "");
    // Message
    const message = "Olá! Gostaria de saber mais sobre os produtos da Espaço WS.";
    const messageDiscount = "Olá! Gostaria de saber mais sobre os produtos em promoção da Espaço WS.";
    // Whatsapp API number
    const whatsappApi = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(message)}`;
    const whatsappApiDiscount = `https://wa.me/${formattedWhatsappNumber}?text=${encodeURIComponent(messageDiscount)}`;
    // Whatsapp Group Number
    const whatsappGroupNumber = ""
    // Group Link
    const groupLink = `https://chat.whatsapp.com/${whatsappGroupNumber}`;
    // CNPJ Number
    const cnpjNumber = "43.230.031/0001-41";
    // CNPJ Text
    const cnpj = `CNPJ<br>${cnpjNumber}`;
    // Instagram
    const instagramUsername = "espaco_ws"
    // Instagram Link
    const instagramLink = `https://www.instagram.com/${instagramUsername}/`;
    

    // WhatsApp Link API Replace Default Message
    [
        "contact-whatsapp-hero",
        "contact-whatsapp-new",
        "contact-whatsapp-section",
        "contact-whatsapp-svg",
        "contact-whatsapp-footer",
        "contact-whatsapp-new",
        "contact-whatsapp-new-2",
        "contact-whatsapp-new-3",
        "contact-whatsapp-new-4"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = whatsappApi;
            // Prevents empty clicks on Whatsapp Links
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(whatsappApi, "_blank");
            });
        }
    });

    // WhatsApp Link API Replace Discount Items Message
    [
        "contact-whatsapp-featured"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = whatsappApiDiscount;
            // Prevents empty clicks on Whatsapp Links
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(whatsappApiDiscount, "_blank");
            });
        }
    });

    // WhatsApp Group Link Replace
    [
        "contact-whatsapp-group",
        "contact-whatsapp-group-footer"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = groupLink;
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(groupLink, "_blank");
            });
        }
    });

    // Instagram Replace
    [
        "contact-instagram-section",
        "contact-instagram-svg",
        "contact-instagram-footer"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.href = instagramLink;
            el.addEventListener("click", e => {
                e.preventDefault();
                window.open(instagramLink, "_blank");
            });
        }
    });

    // CNPJ Replace
    document.getElementById("cnpj").innerHTML = cnpj;
});