const changeAvatar = document.querySelector("#avatar");

changeAvatar.addEventListener('click', function () {
    changeAvatar.src = "image/avatar.svg";
});


const changeText = document.querySelector(".button");
const changeName = document.querySelector("#name");
const changeBgColor = document.querySelectorAll(".pink-bg");
const changeColor = document.querySelectorAll("h2.pink-text");

changeText.addEventListener("click", function() {
    const myName = prompt("Entrez votre prénom");
    const myColor = prompt("Chosissez une couleur");
    changeName.style.color = "white";
    changeName.innerHTML =(myName);
    for(let j = 0; j < changeBgColor.length; j ++) {
        changeBgColor[j].style.backgroundColor = myColor;
    }
    for(let i = 0; i < changeColor.length; i ++) {
        changeColor[i].style.color = myColor;
    }
}); 



    
    
