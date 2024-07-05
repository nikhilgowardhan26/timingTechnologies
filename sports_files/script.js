const mediaQuery = window.matchMedia("(min-width: 769px) and (max-width: 2500px)");

// Function to handle intersection observer logic
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Intersection")
        } else {
            entry.target.classList.remove('slide-up');
        }
    });
}

function initializeObserver() {
    const _box = document.querySelectorAll("._box");
    const observerSlideUp = new IntersectionObserver(handleIntersection);
    _box.forEach(box => observerSlideUp.observe(box));
}

// Function to check media query and initialize observer if it matches
function checkMediaQuery(e) {
    if (e.matches) {
        initializeObserver();
    }
}
checkMediaQuery(mediaQuery);
mediaQuery.addEventListener('change', checkMediaQuery);



















const _box = document.querySelectorAll("._box");
const observerSlideUp = new IntersectionObserver((enteries)=>{
    enteries.forEach(enter=>{
        if(enter.isIntersecting){
            // document.querySelector(".passion").classList.add("slideUp")
        }
    })
})

_box.forEach(box => observerSlideUp.observe(box));