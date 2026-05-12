window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
    });




    /*     CORRECT JAVASCRIPT CODE; IT WORKS    */
    
    // window.onscroll= function() {scrollFunction()};

    // function scrollFunction() {
    //     if (document.body.scrollTop >50 || document.documentElement.scrollTop >50) {
    //         document.getElementById('myHeader').style.fontSize = "50%";
    //     } else {
    //         document.getElementById("myHeader").style.fontSize = "100%";
    //     }
    // }