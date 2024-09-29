


const jsConfetti = new JSConfetti()

const button = document.querySelector('#button');

button.addEventListener('click', () => {
    jsConfetti.addConfetti().then(()=>jsConfetti.addConfetti({
        emojis: ['🎂', '🍾', '✨', '🎊', '🥂', '🎉', '🪅'],
    }).then(() => jsConfetti.addConfetti()))
    
}) 

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    loop: true,
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});