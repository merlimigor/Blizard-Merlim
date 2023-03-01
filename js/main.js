var c;

const logar=document.querySelector(".login")

const custom_StyleLogin={
    visibility:"visible",
    animation:"loginAn 0.4s"
}
const custom_StyleLogout={
    animation:"logoutAn 0.4s",
    visibility:"hidden",

}
const logar_content=document.querySelector(".login_content")
const custom_StyleLoginC={
    animation:"loginContentAn 0.4s"
}

const custom_StyleLogoutC={
    animation:"logoutContentAn 0.4s"
}

var a;

const jogo=document.getElementById("jogos")

const custom_styleJIn={
    top:"0rem",
    animation:"menuJ 0.4s ",
    opacity: "1"
    
}

const custom_styleJOut={
    animation:"menuJOut 0.4s ",
    top:"-64rem",
    opacity: "0"
}

function show_hideJ(){
    if(a==1){
        Object.assign(jogo.style,custom_styleJOut);
        return a=0 ;
        
    }else if(b==1){
        Object.assign(esporte.style,custom_styleEOut);
        
        
        return b=0
        
    }else{
        Object.assign(jogo.style,custom_styleJIn);
        return a=1
    }
}

var b;

const esporte=document.getElementById("esportes")

const custom_styleEIn={
    top:"0rem",
    animation:"menuE 0.4s",
    opacity: "1"
}
const custom_styleEOut={
    animation:"menuJOut 0.4s ",
    top:"-64rem",
    opacity: "0"
}

function show_hideE(){
    if(b==1){
        
        Object.assign(esporte.style,custom_styleEOut);
        return b=0;
    }
    else if(a==1){
        Object.assign(jogo.style,custom_styleJOut);
        return a=0
    }else{
        Object.assign(esporte.style,custom_styleEIn);
        return b=1
    }
}

function mouseOutE(){
    Object.assign(esporte.style,custom_styleEOut);
    return b=0
}

const progressBar = document.querySelector(".progress");
progressBar.addEventListener("animationend", myEndFunction);



//Slides    
var thumbs = new Swiper ("#slide-thumb",{
    slidesPerView: 5,
    watchSlidesProgress: true,

    
})

var swiper = new Swiper (".swiper", {
    effect: "fade",
    disableOnInteraction: true,
    allowTouchMove: false,
    loop: true,

    autoplay: {
        
        delay: 5500,
        slidesPerView: 5,
        disableOnInteraction: false,
    },
    thumbs:{
        swiper: thumbs,
    },

});


function show_hideLogin(){
    if(c==1){
        Object.assign(logar.style,custom_StyleLogout);
        Object.assign(logar_content.style,custom_StyleLogoutC);
        return c=0;
    }else{
        Object.assign(logar.style,custom_StyleLogin);
        Object.assign(logar_content.style,custom_StyleLoginC);
        return c=1;
    }
}

function myEndFunction() {
    swiper.slideNext();
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Triggers Reflow
    progressBar.style.animation = null;
  }
  // Reset Progress Bar On Slide Change
  
  swiper.on("slideChange", function () {
    progressBar.style.animation = "none";
    void progressBar.offsetWidth; // Triggers Reflow
    progressBar.style.animation = null;
  });

function mouseOutJ(){
    Object.assign(jogo.style,custom_styleJOut);
    Object.assign(seta1.style,custom_styleSetaOut);
    return a=0
}
