let SOUND = document.getElementById("SOUND");
let SOUNDICON = document.getElementById("SOUND-ICON");

SOUNDICON.addEventListener("click", function() {
    if(SOUNDICON.className=="fa-solid fa-volume-high"){
    SOUND.play();
    SOUNDICON.className="fa-solid fa-volume-xmark"
}
    else{
        SOUND.pause();
        SOUNDICON.className="fa-solid fa-volume-high"
    }
});