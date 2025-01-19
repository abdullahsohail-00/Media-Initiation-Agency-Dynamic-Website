 
document.addEventListener("DOMContentLoaded", function() {
    const desktopLogo = document.getElementById("desktop-logo");
    const mobileLogo = document.getElementById("mobile-logo");

    const originalDesktopSrc = desktopLogo.src;
    const originalMobileSrc = mobileLogo.src;

    const scrolledDesktopSrc = "img/media-Initiation.png"; // Path to the new logo for desktop
    const scrolledMobileSrc = "img/media-Initiation.png"; // Path to the new logo for mobile

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {  
            desktopLogo.src = scrolledDesktopSrc;
            mobileLogo.src = scrolledMobileSrc;
        } else {
            desktopLogo.src = originalDesktopSrc;
            mobileLogo.src = originalMobileSrc;
        }
    });
}); 
