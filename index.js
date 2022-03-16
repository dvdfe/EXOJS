//SELECTEURS
//document.querySelector("h4").style.background = "red"
//const baliseHtml = document.querySelector("h4")
//baliseHtml.style.background = "yellow"; 

//Click event

const questionContainer = document.querySelector(".click-event");
const goodResponse = document.querySelector("#btn-1");
const wrongResponse = document.querySelector("#btn-2");
const response = document.querySelector('p')

//questionContainer.style.borderRadius = "150px"
//questionContainer.addEventListener("click", () => {questionContainer.classList.toggle('question-click')}) 

goodResponse.addEventListener("click", () => {
    questionContainer.classList.toggle('good')
    response.style.visibility = 'visible'

});


wrongResponse.addEventListener("click", () => {
    questionContainer.classList.toggle("wrong")
    response.style.visibility = 'visible'
});

//div < #id < class < balise html
//-------------------------------------------------------------
// Mouse Events

const mousemouve = document.querySelector(".mousemove")

window.addEventListener('mousemove', (e) => {
    mousemouve.style.left = e.pageX + "px";
    mousemouve.style.top = e.pageY + "px";
})
