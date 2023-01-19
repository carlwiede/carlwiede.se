window.onload = function() {   

    // Pointers to section and toggle elements
    const sec = document.querySelector('.sec');
    const toggle = document.querySelector('.toggle');
    
    // Dark mode toggler
    toggle.addEventListener("click", function (){
        sec.classList.toggle('dark');
        if (sec.classList.contains('dark')) {
            localStorage.setItem('darkMode', 'on');
        } else {
            localStorage.setItem('darkMode', 'off');
        }
    });

    // Check if there should be light
    isDark = localStorage.getItem('darkMode');
    if (isDark === null) {
        // First visit on site, let there be darkness
        localStorage.setItem('darkMode', 'on');
    } else if (isDark === 'off') {
        // Turn the light on if darkMode is off
        sec.classList.toggle('dark');
    }

}