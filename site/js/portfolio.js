const changeAvatar = document.querySelector("#avatar");

changeAvatar.addEventListener('click', function () {
    changeAvatar.src = "image/avatar.svg";
});

const changeText = document.querySelector(".button");
const changeName = document.querySelector("#name");


changeText.addEventListener("click", function() {
    changeName.style.color = "white";
    const myName = prompt("Entrez votre prénom");

  }); 

  