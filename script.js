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

    // Set initial Dark/Light
    isDark = localStorage.getItem('darkMode');
    if (isDark === null) {
        // First visist on site, let there be darkness
        localStorage.setItem('darkMode', 'on');
    } else if (isDark === 'off') {
        sec.classList.toggle('dark');
    }

}