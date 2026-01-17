// navbar //
const icon = document.getElementById("icon");
const links = document.querySelector(".nav-links");

icon.addEventListener("click",()=>{
    links.classList.toggle("active");
})

// theme change 
const theme = document.getElementById("theme");
const changeIcon =theme.querySelector("i");

const body = document.body;

theme.addEventListener("click",()=>{
    body.classList.toggle("light");

    if(body.classList.contains("light")){
        changeIcon.classList.replace("fa-moon","fa-sun");
    }
    else {
        changeIcon.classList.replace("fa-sun","fa-moon")
    }

})

// form 
const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();// page reload nhi hota 

    const name = document.getElementById("Name").value;
    const mail = document.getElementById("mail").value;
    const mess = document.getElementById("mess").value;

      console.log(name,mail,mess);
      alert("mess end demo")


})