const canvas = document.getElementById('js-confetti');
const button = document.getElementById('btn')

const jsConfetti = new JSConfetti();

button.addEventListener('click', () => {
    jsConfetti.addConfetti()
    jsConfetti.addConfetti({
        emojis: ['🎉', '🎂', '🍾', '✨', '🎈', '🎊', '🍰', '💕'],
     })
     })


window.addEventListener('click', ()  => {
    document.getElementById('song').autoplay();
})