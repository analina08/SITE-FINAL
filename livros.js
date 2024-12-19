window.onscroll = function() 
{
    const scroll = document.getElementById("scroll")

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
    {
        scroll .style.display = "block";
        
    }
    else{
        scroll .style.display = "none";
    }
};
document.getElementById("scroll").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.onpassar1 = function(){

    const carousel = document.querySelector('.carousel');
    const passar1 = document.getElementById('passar1');
    const passar2 = document.getElementById('passar2');

    let index = 0;

    function updateCarousel() {
        const width = document.querySelector('.book1').offsetWidth;
        carousel.style.transform = `translateX(${ -width * index } px)`;
    }


    passar2.addEventListener('click', () => {
        if (index < carousel.children.length - 1) {
            index++;
        } else {
            index = 0;
        }
        updateCarousel();
    });

    passar1.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = carousel.children.length - 1;
        }
        updateCarousel();
    });

};