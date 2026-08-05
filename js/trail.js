// ===== CYBERPUNK TRAIL + CLICK BURST =====
document.addEventListener("DOMContentLoaded",function(){
  // Trail canvas
  var tc=document.createElement("canvas");
  tc.id="trail-canvas";tc.style.cssText="position:fixed;inset:0;z-index:5;pointer-events:none";
  document.body.appendChild(tc);
  var tctx=tc.getContext("2d"),TW=0,TH=0;
  function resizeT(){TW=tc.width=window.innerWidth;TH=tc.height=window.innerHeight}
  resizeT();window.addEventListener("resize",resizeT);

  var trail=[];
  document.addEventListener("mousemove",function(e){
    trail.push({x:e.clientX,y:e.clientY,t:performance.now()});
    if(trail.length>30)trail.shift();
  });

  function drawT(){
    tctx.clearRect(0,0,TW,TH);
    for(var i=0;i<trail.length;i++){
      var p=trail[i],age=(performance.now()-p.t)/1000;
      var alpha=Math.max(0,0.4-age*2);
      var r=1+(i/trail.length)*4;
      tctx.beginPath();tctx.arc(p.x,p.y,r,0,Math.PI*2);
      tctx.fillStyle="rgba(0,229,255,"+alpha+")";tctx.fill();
      tctx.beginPath();tctx.arc(p.x,p.y,r*3,0,Math.PI*2);
      tctx.fillStyle="rgba(139,47,255,"+alpha*0.15+")";tctx.fill();
    }
    requestAnimationFrame(drawT);
  }
  drawT();

  // Click burst (CSS transitions for reliable cleanup)
  document.addEventListener("click",function(e){
    var colors=["#00e5ff","#8b2fff","#ff1a8c","#36d6e7"];
    for(var i=0;i<12;i++){
      var dot=document.createElement("div");
      dot.style.cssText="position:fixed;width:4px;height:4px;border-radius:50%;pointer-events:none;z-index:9999;transition:all 0.8s ease-out;";
      dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px";
      dot.style.background=colors[Math.floor(Math.random()*colors.length)];
      dot.style.boxShadow="0 0 6px "+colors[0];dot.style.opacity="1";
      document.body.appendChild(dot);
      var angle=(Math.PI*2*i)/12,dist=30+Math.random()*60;
      requestAnimationFrame(function(a,d){
        return function(){dot.style.transform="translate("+Math.cos(a)*d+"px,"+Math.sin(a)*d+"px) scale(0)";dot.style.opacity="0"};
      }(angle,dist));
      setTimeout(function(d){return function(){d.remove()}}(dot),900);
    }
    // Ring
    var ring=document.createElement("div");
    ring.style.cssText="position:fixed;pointer-events:none;z-index:9998;border:2px solid rgba(0,229,255,0.6);border-radius:50%;transition:all 0.6s ease-out;";
    ring.style.left=e.clientX+"px";ring.style.top=e.clientY+"px";
    ring.style.width="6px";ring.style.height="6px";ring.style.transform="translate(-50%,-50%)";ring.style.opacity="1";
    document.body.appendChild(ring);
    requestAnimationFrame(function(r){return function(){
      r.style.width="120px";r.style.height="120px";r.style.opacity="0";r.style.borderColor="rgba(0,229,255,0)";
    }}(ring));
    setTimeout(function(r){return function(){r.remove()}}(ring),700);
  });
});