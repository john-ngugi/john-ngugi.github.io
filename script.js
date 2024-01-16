// var slidingcards = document.getElementById('slidingcards')

var slidingcards = document.querySelectorAll(".services-furnace");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {
        entry.target.classList.toggle("slide-right", entry.isIntersecting)
    }), {
        threshold: 1
    }
    console.log(entries)
})



slidingcards.forEach(card => {
    observer.observe(card)
})


console.log("cards", slidingcards)