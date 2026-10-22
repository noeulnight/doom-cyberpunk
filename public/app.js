const mouth=document.getElementById('mouth');
const game=document.getElementById('game');
const start=document.getElementById('start');
const poster=document.getElementById('poster');
let timeout;
new ResizeObserver(()=>{
 game.style.transform=`translate(-50%,-50%) rotate(-13deg) scale(${mouth.clientWidth/320*1.3},${mouth.clientHeight/200*1.3})`;
}).observe(mouth);
function fail(){
 clearTimeout(timeout);
 game.removeAttribute('src');
 game.hidden=true;
 poster.hidden=false;
 start.hidden=false;
 alert('Could not load DOOM. Click the mouth to retry.');
}
function launch(){
 start.hidden=true;
 game.src='game.html';
 timeout=setTimeout(fail,60000);
}
start.addEventListener('click',launch);
window.addEventListener('message',event=>{
 if(event.origin!==location.origin||event.source!==game.contentWindow)return;
 if(event.data.type==='error')fail();
 if(event.data.type==='ready'){
  clearTimeout(timeout);
  game.hidden=false;
  poster.hidden=true;
  game.contentDocument.getElementById('screen').focus();
 }
});

launch();
