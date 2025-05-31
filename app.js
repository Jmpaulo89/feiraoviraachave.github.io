const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)
const toggles = document.querySelectorAll('.toggle')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const boxes = document.querySelectorAll('.box');

const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    doTheTrick(e.target)

}))

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false
        }

        if (cheap === theClickedOne) {
            good.checked = false
        }
        if (fast === theClickedOne) {
            cheap.checked = false
        }
    }
}


function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



window.addEventListener('scroll', checkBoxes)

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
