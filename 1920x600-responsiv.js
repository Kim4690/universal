(function () {

var clickUrl = "https://www.bygtek.dk";

var sections = [
"Entreprenør",
"VVS",
"El & Belysning",
"Trapper",
"Døre & Vinduer",
"Facader",
"Gulve",
"Tage",
"Værktøj",
"Indeklima",
"Biler",
"Kloak & Afvanding",
"Isolering",
"Nedrivning",
"Træ",
"Arbejdstøj"
];

var banner = document.createElement("div");

banner.style.width = "100%";
banner.style.maxWidth = "1920px";
banner.style.aspectRatio = "1920 / 600";
banner.style.position = "relative";
banner.style.overflow = "hidden";
banner.style.fontFamily = "Arial";
banner.style.cursor = "pointer";
banner.style.margin = "0 auto";

document.currentScript.parentNode.appendChild(banner);

banner.onclick = function(){
window.open(clickUrl,"_blank");
};

/* BAGGRUNDSBILLEDE */

var img = document.createElement("img");

img.src = "https://kim4690.github.io/Bygtek-banner/banner.jpg";
img.style.width = "100%";
img.style.height = "100%";
img.style.objectFit = "cover";
img.style.position = "absolute";
img.style.transition = "filter 3s ease";

banner.appendChild(img);

/* OVERLAY */

var overlay = document.createElement("div");

overlay.style.position = "absolute";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.background =
"linear-gradient(to right, rgba(255,255,255,0.6), rgba(255,255,255,0.85))";
overlay.style.opacity = "0";
overlay.style.transition = "opacity 3s ease";

banner.appendChild(overlay);

/* TEKSTCONTAINER */

var container = document.createElement("div");

container.style.position = "absolute";
container.style.left = "50%";
container.style.top = "50%";
container.style.transform = "translate(-50%, -50%) scale(0.15)";
container.style.textAlign = "center";
container.style.opacity = "0";
container.style.transition =
"transform 2.6s cubic-bezier(.22,.61,.36,1), opacity 1.4s ease";

banner.appendChild(container);

/* SKALERING */

function getScale(){
return banner.offsetWidth / 1920;
}

/* FAGSEKTION LABEL */

var label = document.createElement("div");

label.innerText = "Fagsektion";
label.style.color = "#153F78";

/* ORD */

var word = document.createElement("div");

word.style.fontWeight = "bold";
word.style.whiteSpace = "nowrap";

container.appendChild(label);
container.appendChild(word);

/* JUSTÉR STØRRELSER */

function resizeText(){

var scale = getScale();

label.style.fontSize = (36 * scale) + "px";
word.style.fontSize = (120 * scale) + "px";

}

window.addEventListener("resize", resizeText);

resizeText();

/* ANIMATION */

var index = 0;

function blurBackground(){

img.style.filter = "brightness(2.3) blur(6px) saturate(0.7)";
overlay.style.opacity = "1";

}

function clearBackground(){

img.style.filter = "brightness(1) blur(0)";
overlay.style.opacity = "0";

}

function animateWord(){

if(index >= sections.length){
endCycle();
return;
}

word.innerText = sections[index];

container.style.opacity = "0";
container.style.transform =
"translate(-50%, -50%) scale(0.15)";
word.style.color = "#9bb3d3";

setTimeout(function(){

container.style.opacity = "1";

container.style.transform =
"translate(-50%, -50%) scale(1.6)";

word.style.color = "#153F78";

},400);

setTimeout(function(){

container.style.opacity = "0";

index++;

setTimeout(animateWord,1800);

},3400);

}

function endCycle(){

container.style.opacity = "0";

clearBackground();

setTimeout(function(){

index = 0;

blurBackground();

setTimeout(animateWord,4000);

},7000);

}

function start(){

setTimeout(function(){

blurBackground();

setTimeout(animateWord,4000);

},3000);

}

start();

})();
