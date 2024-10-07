let title = document.querySelector(".title");
let image = document.querySelector(".image");
let author = document.querySelector(".author");
let change = document.querySelector(".change");
let audio = document.querySelector("audio");
function getMems(){
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        
      title.textContent = data.title;
      image.src = data.url;
      author.textContent =   data.author;
        
    })
}
getMems()
change.addEventListener("click", () =>{
    audio.play();
    getMems()

});
