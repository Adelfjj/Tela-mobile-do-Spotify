let play = document.querySelector('.play');
let music = document.querySelector('audio');
let fav = document.querySelector('.fav');

play.addEventListener('click', () => {
    music.paused ?
        start() :
        pause();
});

fav.addEventListener('click', () => {
    if(fav.classList.contains("fa-heart")){
        fav.classList.remove("fa-heart");
        fav.classList.add("fa-heart-o");
        fav.style.color = "white";
    }else{
        fav.classList.remove("fa-heart-o");
        fav.classList.add("fa-heart");
        fav.style.color = "green";
    }
});

const start = () => {
    play.classList.remove("fa-play");
    play.classList.add("fa-pause");
    music.play();
}

const pause = () =>{
    play.classList.remove("fa-pause");
    play.classList.add("fa-play");
    music.pause();
}