loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')
load = 0
int = setInterval(blurring, 100)
function blurring() {
    load++
    loadText.innerText = `${load}%`
    loadText.style.opacity = 1
    bg.style.filter = "blur(30px)"
}