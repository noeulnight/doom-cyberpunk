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
 alert('둠을 불러오지 못했습니다. 입을 눌러 다시 실행해 주세요.');
}
start.addEventListener('click',()=>{
 start.hidden=true;
 game.src='game.html';
 timeout=setTimeout(fail,60000);
});
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
