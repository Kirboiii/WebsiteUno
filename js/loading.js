loadText = document.querySelector('.loading-text')
bg = document.querySelector('.bg')
load = 0;
loadText.style.opacity = 1
bg.style.filter = "blur(30px)"
function blurring() {
    load++
    loadText.innerText = `${load}%`
}