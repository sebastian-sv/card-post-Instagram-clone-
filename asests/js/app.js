let heart = document.querySelector(".heart");

heart.addEventListener("click",cambiarImagenJS)

function cambiarImagenJS(){

let url = "/asests/js/heart_red.png"
  if(heart.src.match('heart.png')){
    heart.src = url;
  }else{
    heart.src = "../asests/img/heart.png";
  }
}

const formPost = document.getElementById("form-post");

formPost.addEventListener("submit",(e)=>{
  e.preventDefault();
  formPost.reset();
});