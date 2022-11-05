const backstory = document.getElementsByClassName("backstory");
const options = {}
// backstory.classList.remove("fade_in")
const observer = new IntersectionObserver(entry => {
    entry.forEach(entry => {
        console.log(entry);
        entry.target.classList.toggle("fade_in", entry.isIntersecting)
    })
}, 
options)

observer.observe(backstory[0]);