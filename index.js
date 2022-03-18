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
});

window.addEventListener("mousedown", () => {
    mousemouve.style.transform = "scale(2) translate(-25%, -25%)";
}); 

window.addEventListener("mouseup", () => {
    mousemouve.style.transform = "scale(1) translate(-50%, -50%)"; 
    mousemouve.style.border = "2px solid teal";
}); 

questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
})

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(4deg)"
})

//--------------------------------------------------------
//KeyPress event 

const KeyPressContainer = document.querySelector('.keypress');
const key = document.getElementById("key");
const ring =() => {
    const audio = new Audio();
    audio.src = "./punch 1.mp3";
    audio.play();
}

document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if(e.key === "d") {
        KeyPressContainer.style.background = "pink";
        ring();
    } else if (e.key === "j") {
        KeyPressContainer.style.background = "teal";
        ring();
    } else {
        KeyPressContainer.style.background = "red";
    }
})

//--------------------------------------------------------
//Scroll Event

const nav = document.querySelector("nav")

window.addEventListener('scroll', () => {
    if (window.scrollY > 120){
        nav.style.top = 0;
    }
    else{
        nav.style.top = "-50px";
    }
})

//-------------------------------------------------------
//Form Event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select")
const form = document.querySelector("form")

let language= "";
let pseudo = "";

inputName.addEventListener("input", (e) => {
    pseudo= e.target.value;
})

select.addEventListener("input", (e) => {
    language = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (cgv.checked){
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo:${pseudo}</h3>
        <h4>Langage préféré: ${language}</h4>
        `;

    } else {
      alert("Veuillez acceptez les CGV")
    }
})

//----------------------------------------------------
//Load Event
window.addEventListener("load", () => {
    console.log("Document chargé !");
})

//----------------------------------------------------
//ForEach
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});


        

