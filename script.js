const hidden = document.querySelectorAll(".hidden");
//new variable to select element I want observed 
//querySelectorAll creates an array of all elements with that css selector
const options = {}
//this variable is options for the Intersection observer
const observer = new IntersectionObserver(
    entries => {//function passed into intersection observer
    entries.forEach(entry => {
        console.log(entry);
        entry.target.classList.toggle("fade_in", entry.isIntersecting)
    })
}, 
options//calling options which were defined earlier
)

hidden.forEach(elem => {
    observer.observe(elem)
});