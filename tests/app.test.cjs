const {test}=require('node:test');
const assert=require('node:assert/strict');
const {readFileSync}=require('node:fs');
const vm=require('node:vm');
function load(){
 const handlers={}, canvas={focused:false,focus(){assert.equal(game.hidden,false);this.focused=true;}};
 const mouth={clientWidth:250,clientHeight:186};
 const game={hidden:true,style:{},contentWindow:{},contentDocument:{getElementById:id=>{assert.equal(id,'screen');return canvas;}},removeAttribute(name){delete this[name];}};
 const start={hidden:false,addEventListener:(name,fn)=>handlers[name]=fn};
 const poster={hidden:false};
 const nodes={mouth,game,start,poster};
 const context={document:{getElementById:id=>nodes[id]},window:{addEventListener:(name,fn)=>handlers[name]=fn},location:{origin:'http://localhost'},ResizeObserver:class{constructor(fn){this.fn=fn;}observe(){this.fn();}},setTimeout:()=>1,clearTimeout:()=>{},alert:()=>{}};
 vm.runInNewContext(readFileSync('public/app.js','utf8'),context);
 return {...nodes,canvas,handlers};
}
test('ignore forged ready messages; focus the game canvas only after revealing it',()=>{
 const app=load();app.handlers.click();
 assert.match(app.game.style.transform,/rotate\(-13deg\)/);
 assert.equal(app.game.src,'game.html');
 for(const event of [{origin:'https://example.com',source:app.game.contentWindow},{origin:'http://localhost',source:{}}])app.handlers.message({...event,data:{type:'ready'}});
 assert.equal(app.game.hidden,true);assert.equal(app.canvas.focused,false);
 app.handlers.message({origin:'http://localhost',source:app.game.contentWindow,data:{type:'ready'}});
 assert.equal(app.game.hidden,false);assert.equal(app.poster.hidden,true);assert.equal(app.canvas.focused,true);
});
test('a failed game restores the image and permits retry',()=>{
 const app=load();app.handlers.click();
 app.handlers.message({origin:'http://localhost',source:app.game.contentWindow,data:{type:'error'}});
 assert.equal(app.start.hidden,false);assert.equal(app.poster.hidden,false);assert.equal(app.game.hidden,true);assert.equal(app.game.src,undefined);
 app.handlers.click();assert.equal(app.game.src,'game.html');
});
