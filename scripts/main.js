function hamburger(){
    let button_close = document.getElementById('button-close');
    let button_open = document.getElementById('button-open');
    let hamburger = document.getElementById('hamburger');
    let nav = document.getElementById('nav-links');
    
    // Hamburger State Change
    hamburger.addEventListener('click', () => {
        if(button_open.style.display === 'block'){
            nav.style.display = 'block';
            button_close.style.display = 'block';
            button_open.style.display = 'none';
        }else{
            nav.style.display = 'none';
            button_close.style.display = 'none';
            button_open.style.display = 'block';
        }
    });

    // Reset Media Query
    let mediaQuery = window.matchMedia("(max-width: 1160px)");

    mediaQuery.addEventListener('change', ()=>{
        if (mediaQuery.matches) { // If media query matches
            nav.style.display = 'none';
            button_close.style.display = 'none';
            button_open.style.display = 'block';
        } else {
            nav.style.display = 'block';
            button_close.style.display = 'block';
            button_open.style.display = 'none';
        }
    })
}

hamburger();
