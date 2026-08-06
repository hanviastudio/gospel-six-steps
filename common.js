(function(){
"use strict";

/* ============================================================
   SHARED DATA  —  edit content here (metadata used site-wide).
   Detailed per-lesson body for a chapter lives in its own
   content/step-N.js file (loaded by that chapter page) and is
   assigned to window.CHAPTER.  See renderChapter() below.
   ============================================================ */
var SITE = {
"ui":{
  "brand":{"en":"Church of Jesus","ko":"Church of Jesus","zh":"Church of Jesus","es":"Church of Jesus"},
  "contact":{"en":"Contact","ko":"연락처","zh":"联系","es":"Contacto"},
  "overview":{"en":"Overview","ko":"개요","zh":"概述","es":"Resumen"},
  "contents":{"en":"Contents · six steps","ko":"목차 · 여섯 단계","zh":"目录 · 六个阶段","es":"Contenido · seis pasos"},
  "open":{"en":"Click","ko":"클릭","zh":"点击","es":"Clic"},
  "lessons":{"en":"lessons","ko":"과","zh":"课","es":"lecciones"},
  "inStage":{"en":"In this stage","ko":"이 단계에서 배우는 것","zh":"本阶段学习","es":"En esta etapa"},
  "soon":{"en":"Full study content coming soon","ko":"상세 본문은 곧 추가됩니다","zh":"详细内容即将推出","es":"Contenido detallado en preparación"},
  "back":{"en":"Back to contents","ko":"목차로 돌아가기","zh":"返回目录","es":"Volver al contenido"},
  "prev":{"en":"Previous","ko":"이전 단계","zh":"上一阶段","es":"Anterior"},
  "next":{"en":"Next","ko":"다음 단계","zh":"下一阶段","es":"Siguiente"},
  "tapHint":{"en":"Tap a reference to open the text","ko":"성경 구절을 누르면 본문이 열립니다","zh":"点击经文出处即可展开原文","es":"Toca una referencia para abrir el texto"},
  "memory":{"en":"Memory verse","ko":"암송 구절","zh":"背诵经文","es":"Versículo para memorizar"},
  "questions":{"en":"For discussion","ko":"함께 나눌 질문","zh":"讨论问题","es":"Para dialogar"},
  "lesson":{"en":"Lesson","ko":"레슨","zh":"课","es":"Lección"},
  "footer":{
    "en":"A six-part gospel study. Scripture references and study text for each step will be added from the source material. Korean, Chinese, and Spanish renderings are prepared for this study; swap in your preferred translation as needed.",
    "ko":"여섯 과로 이루어진 복음 교재입니다. 각 단계의 성경 본문과 해설은 원자료에서 이어서 채워집니다. 한국어·중국어·스페인어 번역은 이 교재를 위해 준비한 것이며, 원하시는 역본으로 바꾸실 수 있습니다.",
    "zh":"六课福音教材。每一阶段的经文与讲解将依原始资料陆续补充。中韩西译文为本教材所备，可按需替换为您偏好的译本。",
    "es":"Un estudio del evangelio en seis partes. El texto y las referencias bíblicas de cada paso se añadirán a partir del material original. Las versiones en coreano, chino y español se han preparado para este estudio; puede sustituirlas por la traducción que prefiera."
  }
},
"hero":{
  "eyebrow":{"en":"A six-step journey through the gospel","ko":"복음을 여는 여섯 단계","zh":"通往福音的六个阶段","es":"Un recorrido del evangelio en seis pasos"},
  "title":{"en":"Open the Gift","ko":"선물을 열다","zh":"打开礼物","es":"Abre el regalo"},
  "sub":{"en":"The gospel: what Jesus Christ has done, and his word.","ko":"복음: 예수 그리스도가 하신 일과 그의 말씀.","zh":"福音：耶稣基督所成就的事，和他的话语。","es":"El evangelio: lo que Jesucristo ha hecho, y su palabra."},
  "intro":{"en":"When someone gives a gift, the one who receives it only sees the real gift after peeling off the wrapping and opening the box. However good the gift is, if you take no interest and never open it, you can never know what is inside. Through these six steps of the gospel, we set out to see the precious gift God gives — and what he has done.","ko":"선물을 주면 받은 사람은 포장지를 벗기고 상자를 열고 나서야 비로소 그 안의 진짜 선물을 보게 된다. 아무리 좋은 선물이라도 관심이 없고 또 뜯어보지 않는다면 무엇이 그 안에 있는지 알 수 없다. 하나님께서 주시고 하시는 귀한 선물을 복음 여섯 단계를 통하여 알아보고자 한다.","zh":"送礼时，收礼的人只有在拆开包装、打开盒子之后，才能看见里面真正的礼物。无论礼物多么好，若毫不在意、从不打开，就无法知道里面是什么。我们要通过福音的六个阶段，认识神所赐、所成就的宝贵礼物。","es":"Cuando alguien da un regalo, quien lo recibe solo ve el verdadero regalo después de quitar el envoltorio y abrir la caja. Por muy bueno que sea, si no te interesa y nunca lo abres, jamás sabrás qué hay dentro. A través de estos seis pasos del evangelio, queremos ver el precioso regalo que Dios nos da — y lo que él ha hecho."}
},
"intro":{
  "title":{"en":["The Gospel","in Six Stages"],"ko":["복음","여섯 단계"],"zh":["福音","六个阶段"],"es":["El Evangelio","en Seis Etapas"]},
  "overview":{"en":"A six-stage journey through the gospel — from the unseen spiritual world to the faith that opens the gift.","ko":"복음을 여는 여섯 단계 — 보이지 않는 영의 세계에서, 선물을 여는 믿음에 이르기까지.","zh":"通往福音的六个阶段——从看不见的灵界，到那打开礼物的信心。","es":"Un recorrido del evangelio en seis etapas — del mundo espiritual invisible a la fe que abre el regalo."},
  "scroll":{"en":"Scroll","ko":"스크롤","zh":"滚动","es":"Desliza"}
},
"steps":[
 {"id":"step-1","numeral":"01","dot":"#8B9BEC","field":"#262C5C","fg":"#ECECF8","nl":4,"range":"1.1–1.4",
  "title":{"en":"The Spiritual World","ko":"영의 세계","zh":"灵的世界","es":"El mundo espiritual"},
  "sub":{"en":"Spiritual World","ko":"Spiritual World","zh":"Spiritual World","es":"Spiritual World"},
  "teaser":{"en":"There is a reality you cannot see.","ko":"보이지 않는 실재가 있다.","zh":"有一个你看不见的实在。","es":"Hay una realidad que no puedes ver."},
  "points":[
   {"en":"Two worlds — the seen and the unseen","ko":"두 세계 — 보이는 것과 보이지 않는 것","zh":"两个世界——看得见的与看不见的","es":"Dos mundos: lo visible y lo invisible"},
   {"en":"Created, or evolved?","ko":"창조인가, 진화인가?","zh":"是受造，还是进化？","es":"¿Creado o evolucionado?"},
   {"en":"Who is God?","ko":"하나님은 누구신가?","zh":"神是谁？","es":"¿Quién es Dios?"},
   {"en":"The heavens and the spiritual realm","ko":"하늘과 영의 세계","zh":"诸天与灵界","es":"Los cielos y el mundo espiritual"}
  ]},
 {"id":"step-2","numeral":"02","dot":"#5CC2A0","field":"#14615A","fg":"#E9F6F0","nl":4,"range":"2.1–2.4",
  "title":{"en":"The Human Being","ko":"인간","zh":"人","es":"El ser humano"},
  "sub":{"en":"Living Being","ko":"Living Being","zh":"Living Being","es":"Living Being"},
  "teaser":{"en":"You were made to carry the breath of God.","ko":"당신은 하나님의 숨을 담도록 지어졌다.","zh":"你被造，是为了承载神的气息。","es":"Fuiste hecho para llevar el aliento de Dios."},
  "points":[
   {"en":"Who am I, really?","ko":"진짜 ‘나’는 누구인가?","zh":"真正的“我”是谁？","es":"¿Quién soy yo en verdad?"},
   {"en":"Body, soul, and spirit","ko":"몸과 혼과 영","zh":"身体、魂与灵","es":"Cuerpo, alma y espíritu"},
   {"en":"Life after death","ko":"죽음 이후의 삶","zh":"死后的生命","es":"La vida después de la muerte"},
   {"en":"The resurrection","ko":"부활","zh":"复活","es":"La resurrección"}
  ]},
 {"id":"step-3","numeral":"03","dot":"#E28275","field":"#832B2D","fg":"#F8E7E3","nl":4,"range":"3.1–3.4",
  "title":{"en":"Sin","ko":"죄","zh":"罪","es":"El pecado"},
  "sub":{"en":"Sin","ko":"Sin","zh":"Sin","es":"Sin"},
  "teaser":{"en":"One break cut us off from the source.","ko":"한 번의 단절이 근원에서 우리를 끊어 놓았다.","zh":"一次断裂，把我们与源头隔开。","es":"Una ruptura nos separó de la fuente."},
  "points":[
   {"en":"What sin is, and where it began","ko":"죄란 무엇이며 어디서 시작됐나","zh":"罪是什么，从何而来","es":"Qué es el pecado y dónde comenzó"},
   {"en":"The price of sin","ko":"죄의 값","zh":"罪的代价","es":"El precio del pecado"},
   {"en":"The kinds of sin","ko":"죄의 종류","zh":"罪的种类","es":"Las clases de pecado"},
   {"en":"Is sin inherited?","ko":"죄는 유전되는가?","zh":"罪会遗传吗？","es":"¿Se hereda el pecado?"}
  ]},
 {"id":"step-4","numeral":"04","dot":"#DDA457","field":"#6E3F1F","fg":"#F7ECDC","nl":4,"range":"4.1–4.4",
  "title":{"en":"Redemption","ko":"속죄","zh":"救赎","es":"La redención"},
  "sub":{"en":"Redemption","ko":"Redemption","zh":"Redemption","es":"Redemption"},
  "teaser":{"en":"A price was paid to buy you back.","ko":"당신을 되사기 위해 값이 치러졌다.","zh":"有一个代价被付上，把你赎回。","es":"Se pagó un precio para rescatarte."},
  "points":[
   {"en":"What redemption means","ko":"속죄란 무엇인가","zh":"救赎的意义","es":"Qué significa la redención"},
   {"en":"Why and how it was done","ko":"왜, 어떻게 이루어졌나","zh":"为何、如何成就","es":"Por qué y cómo se hizo"},
   {"en":"The cross: it is finished","ko":"십자가 — 다 이루었다","zh":"十字架——成了","es":"La cruz: consumado es"},
   {"en":"Christianity is not a religion","ko":"기독교는 종교가 아니다","zh":"基督教不是宗教","es":"El cristianismo no es una religión"}
  ]},
 {"id":"step-5","numeral":"05","dot":"#E4A0C2","field":"#7C3B60","fg":"#F8E8F1","nl":3,"range":"5.1–5.3",
  "title":{"en":"Grace","ko":"은혜","zh":"恩典","es":"La gracia"},
  "sub":{"en":"Grace","ko":"Grace","zh":"Grace","es":"Grace"},
  "teaser":{"en":"A gift you could never earn.","ko":"결코 스스로 얻을 수 없는 선물.","zh":"一份你永远无法赚得的礼物。","es":"Un regalo que jamás podrías ganar."},
  "points":[
   {"en":"What grace means","ko":"은혜란 무엇인가","zh":"恩典的意义","es":"Qué significa la gracia"},
   {"en":"The content of grace","ko":"은혜의 내용","zh":"恩典的内涵","es":"El contenido de la gracia"},
   {"en":"The purpose of grace","ko":"은혜의 목적","zh":"恩典的目的","es":"El propósito de la gracia"},
   {"en":"Living and testifying grace","ko":"은혜를 살아내고 증거함","zh":"活出并见证恩典","es":"Vivir y testificar la gracia"}
  ]},
 {"id":"step-6","numeral":"06","dot":"#E9C46A","field":"#D9B24A","fg":"#2A2312","nl":4,"range":"6.1–6.4",
  "title":{"en":"Faith","ko":"믿음","zh":"信","es":"La fe"},
  "sub":{"en":"What I Believe","ko":"What I Believe","zh":"What I Believe","es":"What I Believe"},
  "teaser":{"en":"Open the box. Receive it.","ko":"상자를 열라. 받으라.","zh":"打开盒子，领受它。","es":"Abre la caja. Recíbelo."},
  "points":[
   {"en":"What faith is, and where it comes from","ko":"믿음이란 무엇이며 어디서 오는가","zh":"信心是什么，从何而来","es":"Qué es la fe y de dónde viene"},
   {"en":"The kinds of faith","ko":"믿음의 종류","zh":"信心的种类","es":"Las clases de fe"},
   {"en":"The object of faith","ko":"믿음의 대상","zh":"信心的对象","es":"El objeto de la fe"},
   {"en":"Believe and receive","ko":"믿고 받으라","zh":"相信并领受","es":"Cree y recibe"}
  ]}
]
};

/* ---------- language state (persists across pages) ---------- */
var LANGS = ["en","ko","zh","es"];
var LS = "gs_lang";
var lang = "en";
try{ var stored = localStorage.getItem(LS); if(stored && LANGS.indexOf(stored)>=0) lang = stored; }catch(e){}
function setLang(l){ lang = l; try{ localStorage.setItem(LS,l); }catch(e){} }

/* ---------- helpers ---------- */
var esc = function(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); };
var L = function(o){ if(!o) return ""; return o[lang] || o.en || ""; };
var pl = function(s){ return s.replace(/<(path|circle|rect|line|polyline|polygon|ellipse) /g,'<$1 pathLength="1" '); };
var ICONP = {
  "step-1":'<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="2.4"/><path d="M12 3.6v2.4M12 18v2.4M3.6 12H6M18 12h2.4M6.1 6.1l1.7 1.7M16.2 16.2l1.7 1.7M17.9 6.1l-1.7 1.7M7.8 16.2l-1.7 1.7"/>',
  "step-2":'<circle cx="12" cy="6.6" r="3.1"/><path d="M6 20a6 6 0 0 1 12 0"/><path d="M12 9.7v3.1"/>',
  "step-3":'<path d="M11.2 8H8.6a3.6 3.6 0 0 0 0 7h2.6"/><path d="M12.8 8h2.6a3.6 3.6 0 0 1 0 7h-2.6"/><path d="M7.2 6.2l1.5 1.6M16.8 6.2l-1.5 1.6"/>',
  "step-4":'<path d="M12 3v18M7.5 8.5h9"/>',
  "step-5":'<rect x="4" y="9.5" width="16" height="10.5" rx="1"/><path d="M4 13h16M12 9.5V20"/><path d="M12 9.5C10.6 9.5 8.7 9 8.7 7.2 8.7 6 9.6 5.6 10.3 5.6c1.4 0 1.7 1.9 1.7 3.9M12 9.5c1.4 0 3.3-.5 3.3-2.3 0-1.2-.9-1.6-1.6-1.6-1.4 0-1.7 1.9-1.7 3.9"/>',
  "step-6":'<path d="M4.5 12.5V20h15v-7.5"/><path d="M3 12.5l3-2.5h12l3 2.5"/><path d="M12 9.5V3M9.4 5.2 12 2.7l2.6 2.5"/>'
};
var ICON = function(id, solid){
  var p = ICONP[id] || '';
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(solid?p:pl(p))+'</svg>';
};
function stepById(id){ for(var i=0;i<SITE.steps.length;i++){ if(SITE.steps[i].id===id) return SITE.steps[i]; } return null; }
function lessonsLabel(s){ var w=L(SITE.ui.lessons), sep=(lang==="ko"||lang==="zh")?"":" "; return s.nl+sep+w+" · "+s.range; }
function pointsList(s,cls){ var h='<ul class="points'+(cls?" "+cls:"")+'">'; s.points.forEach(function(p){ h+='<li>'+esc(L(p))+'</li>'; }); return h+'</ul>'; }

/* ---------- renderers ---------- */
function cards(){
  var h = '<div class="cards-head reveal">'+esc(L(SITE.ui.contents))+'</div><div class="cards">';
  SITE.steps.forEach(function(s){
    h += '<a class="card" href="'+s.id+'.html" style="--dot:'+s.dot+'">'
       + '<div class="card-top"><span class="card-num">'+s.numeral+'</span><span class="card-ic">'+ICON(s.id)+'</span></div>'
       + '<h3 class="card-title">'+esc(L(s.title))+'</h3>'
       + '<div class="card-rule"></div>'
       + '<p class="card-teaser">'+esc(L(s.teaser))+'</p>'
       + '<div class="card-foot"><span class="card-meta">'+esc(lessonsLabel(s))+'</span>'
       + '<span class="card-go">'+esc(L(SITE.ui.open))+' <span class="arw">&#8594;</span></span></div>'
       + '</a>';
  });
  return h + '</div>';
}

function renderLanding(){
  var h = '<section class="field" id="top"><div class="wrap"><div class="hero-grid">'
     + '<div class="hero-left">'
     + '<p class="eyebrow reveal">'+esc(L(SITE.hero.eyebrow))+'</p>'
     + '<h1 class="reveal">'+esc(L(SITE.hero.title))+'</h1>'
     + '<p class="hero-sub reveal">'+esc(L(SITE.hero.sub))+'</p>'
     + '<p class="hero-intro reveal">'+esc(L(SITE.hero.intro))+'</p>'
     + '</div>'
     + '<div class="hero-right">'+cards()+'</div>'
     + '</div></div></section>';
  document.getElementById("app").innerHTML = h;
}

function navLink(step,dir){
  if(!step) return '<span class="cnav '+dir+' ghost" aria-hidden="true"></span>';
  var label = dir==="prev" ? L(SITE.ui.prev) : L(SITE.ui.next);
  var small = dir==="prev" ? ("&#8592; "+esc(label)) : (esc(label)+" &#8594;");
  return '<a class="cnav '+dir+'" href="'+step.id+'.html" style="--dot:'+step.dot+'">'
       + '<small>'+small+'</small><b>'+esc(L(step.title))+'</b></a>';
}

function renderChapter(id){
  var s = stepById(id); if(!s){ document.getElementById("app").innerHTML=""; return; }
  var idx = SITE.steps.indexOf(s);
  var prev = SITE.steps[idx-1] || null, next = SITE.steps[idx+1] || null;
  var detail = (window.CHAPTER && window.CHAPTER.id===id) ? window.CHAPTER : null;

  var h = '<section class="field" id="'+s.id+'" style="--field:'+s.field+';--fg:'+s.fg+';--dot:'+s.dot+'"><div class="wrap">'
     + '<div class="ch-kicker reveal"><span class="ch-ic">'+ICON(s.id,true)+'</span><b class="ch-num">'+s.numeral+'</b><span class="ch-sep">·</span><span class="ch-sub">'+esc(L(s.sub))+'</span></div>'
     + '<h2 class="reveal">'+esc(L(s.title))+'</h2>'
     + '<p class="lead reveal">'+esc(L(s.teaser))+'</p>'
     + '<div class="stage-meta reveal">'+esc(lessonsLabel(s))+'</div>'
     + '<h3 class="stage-sub reveal">'+esc(L(SITE.ui.inStage))+'</h3>'
     + pointsList(s,"points-lg reveal");

  if(detail && typeof window.renderChapterBody === "function"){
    h += window.renderChapterBody(detail, {L:L, esc:esc, ICON:ICON, pointsList:pointsList});
  } else {
    h += '<div class="soon reveal"><i></i>'+esc(L(SITE.ui.soon))+'</div>';
  }

  h += '<div class="chapter-nav">'
     + navLink(prev,"prev") + navLink(next,"next")
     + '<a class="cnav toc" href="index.html"><small>&#8593; '+esc(L(SITE.ui.back))+'</small></a>'
     + '</div>';

  h += '</div></section>';
  document.getElementById("app").innerHTML = h;
}

/* ---------- study body engine (chapter detail from content/step-N.js) ---------- */
function scripture(ids, verses){
  var h = '<p class="hint">'+esc(L(SITE.ui.tapHint))+'</p><div class="scripture">';
  ids.forEach(function(id){
    var v = verses[id]; if(!v) return;
    h += '<div class="sv" data-open="0">'
       + '<button type="button" aria-expanded="false"><span class="sv-ref">'+esc(L(v.ref))+'</span><span class="sv-plus" aria-hidden="true"></span></button>'
       + '<div class="sv-body"><div class="sv-text">'+esc(L(v.t))+'</div></div></div>';
  });
  return h + '</div>';
}
var DIA = {
  cmp:function(d){
    var h='<div class="cmp">';
    d.heads.forEach(function(hd){ h+='<div class="cmp-head tile">'+esc(L(hd.b))+(hd.s?'<small>'+esc(L(hd.s))+'</small>':'')+'</div>'; });
    d.rows.forEach(function(r){
      if(r.label) h+='<div class="cmp-label">'+esc(L(r.label))+'</div>';
      h+='<div class="cmp-row tile">'+esc(L(r.l))+'</div><div class="cmp-row tile">'+esc(L(r.r))+'</div>';
    });
    return h+'</div>';
  },
  grid:function(d){
    var h='<div class="gridtiles">';
    d.items.forEach(function(it){ h+='<div class="gt tile"><b>'+esc(L(it.b))+'</b><span>'+esc(L(it.s))+'</span>'+(it.e?'<em>'+esc(L(it.e))+'</em>':'')+'</div>'; });
    return h+'</div>';
  },
  eq:function(d){
    var h='<div class="eq">';
    d.items.forEach(function(it){ h+='<div class="eq-term tile"><b>'+esc(L(it.b))+'</b><span>'+esc(L(it.s))+'</span></div>'; if(it.op) h+='<div class="eq-op">'+it.op+'</div>'; });
    return h+'</div>';
  },
  tiers:function(d){
    var h='<div class="tiers">';
    d.items.forEach(function(it){ h+='<div class="tier tile"><i>'+esc(L(it.n))+'</i><div><b>'+esc(L(it.b))+'</b><span>'+esc(L(it.s))+'</span></div></div>'; });
    return h+'</div>';
  },
  fork:function(d){
    var h='<div class="fork">';
    if(d.stem) h+='<div class="fork-stem tile">'+esc(L(d.stem))+'</div>';
    d.items.forEach(function(it){ h+='<div class="fk tile"><b>'+esc(L(it.b))+'</b><span>'+esc(L(it.s))+'</span>'+(it.e?'<em>'+esc(L(it.e))+'</em>':'')+'</div>'; });
    return h+'</div>';
  },
  duo:function(d){
    var IC={
      sun:'<circle cx="12" cy="12" r="4.4"/><path d="M12 2.6v2.5M12 18.9v2.5M2.6 12h2.5M18.9 12h2.5M5.1 5.1l1.8 1.8M17.1 17.1l1.8 1.8M18.9 5.1 17.1 6.9M6.9 17.1 5.1 18.9"/>',
      star:'<path d="M12 3l1.9 5.4L19 10l-5.1 1.6L12 17l-1.9-5.4L5 10l5.1-1.6z"/>'
    };
    var info=d.items.every(function(it){return !it.list;});
    var h='<div class="duo'+(info?' duo--info':'')+'">';
    d.items.forEach(function(it,i){
      h+='<div class="duo-col tile'+(info?(i===0?' is-temp':' is-eter'):'')+'">';
      if(it.ic && IC[it.ic]) h+='<span class="duo-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[it.ic]+'</svg></span>';
      h+='<b class="duo-b">'+esc(L(it.b))+'</b>';
      if(it.s) h+='<span class="duo-s">'+esc(L(it.s))+'</span>';
      if(it.list){ h+='<ul class="duo-list">'; it.list.forEach(function(x){ h+='<li>'+esc(L(x))+'</li>'; }); h+='</ul>'; }
      if(it.tag) h+='<span class="duo-tag'+(info?' duo-tag-lg':'')+'">'+esc(L(it.tag))+'</span>';
      h+='</div>';
    });
    return h+'</div>';
  }
};
function lessonId(n){ return "L"+String(n).replace(/\./g,"-"); }
function blockBody(b, verses){
  if(b.t==="lesson") return '<div class="lesson-mark reveal" id="'+lessonId(b.n)+'"><span class="lm-n">'+esc(L(SITE.ui.lesson))+' '+esc(b.n)+'</span></div>';
  if(b.t==="p") return '<p class="reveal">'+esc(L(b.x))+'</p>';
  if(b.t==="h") return '<h3 class="reveal">'+esc(L(b.x))+'</h3>';
  if(b.t==="callout") return '<div class="callout reveal">'+esc(L(b.x))+'</div>';
  if(b.t==="s") return '<div class="reveal">'+scripture(b.v, verses)+'</div>';
  if(b.t==="dia"){ var t=b.title?'<div class="dia-t">'+esc(L(b.title))+'</div>':''; return '<div class="dia reveal">'+t+(DIA[b.kind]?DIA[b.kind](b):'')+'</div>'; }
  if(b.t==="mem"){ var v=verses[b.ref]; if(!v) return ''; return '<div class="memory reveal"><div class="hint">'+esc(L(SITE.ui.memory))+'</div><q>'+esc(L(v.t))+'</q><cite>'+esc(L(v.ref))+'</cite></div>'; }
  if(b.t==="q"){ var hq='<div class="qs-head reveal">'+esc(L(SITE.ui.questions))+'</div><ul class="qs reveal">'; b.items.forEach(function(q){ hq+='<li>'+esc(L(q))+'</li>'; }); return hq+'</ul>'; }
  if(b.t==="heavens") return heavensBlock(b);
  return '';
}
function heavensBlock(b){
  var shells = b.shells || [];
  var steps = shells.length;
  var at = {}; shells.forEach(function(s,i){ at[s.role] = i; });
  var atSky = at.sky, atUni = at.universe, atSpi = at.spiritual, atGod = (at.god!=null?at.god:steps-1);
  var IC = {
    cloud:'<path d="M6.5 16a3.3 3.3 0 0 1 .4-6.6 4.1 4.1 0 0 1 7.8-1.1A3.5 3.5 0 0 1 17.5 16z"/>',
    bird:'<path d="M3 10c1.7 2 3.3 2 5 0 1.7 2 3.3 2 5 0"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2.3M12 18.7V21M3 12h2.3M18.7 12H21M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/>',
    moon:'<path d="M16 4a7.5 7.5 0 1 0 4 12A6.2 6.2 0 0 1 16 4z"/>',
    star:'<path d="M12 4.5l1.5 4.4 4.5.3-3.6 2.8 1.3 4.4L12 14l-3.7 2.4 1.3-4.4L6 9.2l4.5-.3z"/>',
    planet:'<circle cx="12" cy="12" r="4.6"/><ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-22 12 12)"/>',
    rocket:'<path d="M12 3.5c2.8 1.9 3.9 5.6 3.9 8.6L14 15h-4l-1.9-2.9c0-3 1.1-6.7 3.9-8.6z"/><circle cx="12" cy="9.4" r="1.3"/><path d="M9.5 14.6 7.2 19l3-1M14.5 14.6 16.8 19l-3-1"/>',
    angel:'<path d="M9.1 4.9a3 3 0 0 1 5.8 0"/><circle cx="12" cy="6.7" r="1.7"/><path d="M12 8.6c-2.2 0-3.4 2.7-3.7 7h7.4c-.3-4.3-1.5-7-3.7-7z"/><path d="M8.7 11.4C6.1 9.9 3.6 10.5 2.7 13.1c2.1.5 4.1-.3 5.9-1.7M15.3 11.4c2.6-1.5 5.1-.9 6 1.7-2.1.5-4.1-.3-5.9-1.7"/>'
  };
  function icon(name, cls, r, ang, scale, stepAt, rot){
    var rad = ang*Math.PI/180;
    var x = (50 + r*Math.cos(rad)).toFixed(1), y = (50 + r*Math.sin(rad)).toFixed(1);
    var inner = rot ? '<g transform="rotate('+rot+' 12 12)">'+IC[name]+'</g>' : IC[name];
    return '<span class="heavens-fx heavens-icon '+(cls||'')+'" data-at="'+stepAt+'" style="left:'+x+'%;top:'+y+'%;--sc:'+(scale||1)+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+inner+'</svg></span>';
  }
  var hint = {en:"scroll or tap to unfold",ko:"스크롤하거나 눌러서 펼치기",zh:"滚动或点按逐层展开",es:"desplaza o toca para desplegar"};
  var matLabel = {en:"MATERIAL · 1·2",ko:"물질계 · 1·2",zh:"物质界 · 1·2",es:"MATERIAL · 1·2"};
  var spiLabel = {en:"SPIRITUAL · 3",ko:"영계 · 3",zh:"属灵界 · 3",es:"ESPIRITUAL · 3"};
  var h = '<div class="heavens-scroll" data-steps="'+steps+'" style="--steps:'+steps+'">';
  h += '<div class="heavens-stage">';
  h += '<div class="heavens-head"><span>'+(b.title?esc(L(b.title)):'')+'</span><span class="heavens-count"><b>1</b> / '+steps+'</span></div>';
  h += '<div class="heavens-viz">';
  h += '<span class="heavens-fx heavens-beyond" data-at="'+atGod+'" aria-hidden="true"></span>';
  // rings (outer -> inner)
  h += '<span class="heavens-fx heavens-ring heavens-ring--holy" data-at="'+atSpi+'" style="width:94%;height:94%" aria-hidden="true"><span class="heavens-badge">3</span></span>';
  // universe (2) — its own outer edge IS the moving water boundary
  h += '<span class="heavens-fx heavens-ring heavens-ring--stars heavens-ring--water" data-at="'+atUni+'" style="width:63%;height:63%" aria-hidden="true"><i class="heavens-water-surf" aria-hidden="true"></i><span class="heavens-badge">2</span></span>';
  h += '<span class="heavens-fx heavens-ring" data-at="'+atSky+'" style="width:26%;height:26%" aria-hidden="true"><span class="heavens-badge">1</span></span>';
  // sky icons — birds (clouds are added below as slow orbiters)
  h += icon('bird','',12.5,335,.72,atSky) + icon('bird','',11.5,46,.58,atSky);
  // universe icons — sun, moon, planet, stars (enlarged again)
  h += icon('sun','',24,308,1.9,atUni) + icon('moon','',23,232,1.7,atUni) + icon('planet','',27,196,1.8,atUni) + icon('star','',22,128,1.35,atUni) + icon('rocket','heavens-rocket',22,58,1,atUni) + icon('star','',27,20,1.15,atUni);
  // a body that slowly revolves around the centre, staying upright (angels, clouds)
  function orbiter(diaPct, delay, dur, ccw, inner, stepAt, faceCenter){
    var cc = ccw ? ' heavens-orbit--ccw' : '';
    var ia = 'heavens-orbit-a' + cc + (faceCenter ? ' heavens-orbit-a--radial' : '');
    return '<span class="heavens-fx heavens-orbit'+cc+'" data-at="'+stepAt+'" style="width:'+diaPct+'%;height:'+diaPct+'%;animation-duration:'+dur+'s;animation-delay:'+delay+'s">'
      + '<span class="'+ia+'" style="animation-duration:'+dur+'s;animation-delay:'+delay+'s">'+inner+'</span></span>';
  }
  // angels — the halo angel (enlarged), patrolling the water boundary
  var angSvg = '<svg class="heavens-ang-svg" viewBox="1.5 3 21 14.5" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC.angel+'</svg>';
  h += orbiter(80,0,46,false,angSvg,atSpi) + orbiter(86,-15.3,46,false,angSvg,atSpi) + orbiter(74,-30.6,46,false,angSvg,atSpi);
  // clouds — 3 of them drifting very slowly counter-clockwise in the sky (1st heaven), turned upright
  var cloudSvg = '<svg class="heavens-cloud-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC.cloud+'</svg>';
  h += orbiter(16,0,100,true,cloudSvg,atSky,true) + orbiter(19,-33,100,true,cloudSvg,atSky,true) + orbiter(15,-66,100,true,cloudSvg,atSky,true);
  // material / spiritual key
  h += '<span class="heavens-fx heavens-key heavens-key--mat" data-at="'+atUni+'"><i></i>'+esc(L(matLabel))+'</span>';
  h += '<span class="heavens-fx heavens-key heavens-key--spi" data-at="'+atSpi+'"><i></i>'+esc(L(spiLabel))+'</span>';
  h += '<span class="heavens-fx heavens-earth" data-at="0" aria-hidden="true"></span>';
  h += '<span class="heavens-fx heavens-home" data-at="0">'
     + '<span class="heavens-home-label">Church of Jesus</span>'
     + '<svg class="heavens-church" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
     + '<path d="M12 2.2v3.4M10.3 3.6h3.4"/><path d="M12 6 4.6 12.2h14.8z"/><path d="M6.4 12.2v8.3h11.2v-8.3"/><path d="M10 20.5v-3.4a2 2 0 0 1 4 0v3.4"/>'
     + '</svg></span>';
  h += '</div>';
  h += '<div class="heavens-panel"><div class="heavens-scenes">';
  shells.forEach(function(s){
    h += '<div class="heavens-scene">';
    if(s.k) h += '<div class="heavens-eyebrow">'+esc(L(s.k))+'</div>';
    h += '<h3 class="heavens-name">'+esc(L(s.b))+'</h3>';
    if(s.s) h += '<p class="heavens-desc">'+esc(L(s.s))+'</p>';
    if(s.e) h += '<span class="heavens-cite">'+esc(L(s.e))+'</span>';
    h += '</div>';
  });
  h += '</div></div>';
  h += '<div class="heavens-ctrl"><button class="heavens-arrow heavens-prev" type="button" aria-label="prev">&#8593;</button><div class="heavens-dots">';
  for(var i=0;i<steps;i++){ h += '<button class="heavens-dot" type="button" data-i="'+i+'" aria-label="'+(i+1)+'"></button>'; }
  h += '</div><button class="heavens-arrow heavens-next" type="button" aria-label="next">&#8595;</button></div>';
  h += '<div class="heavens-hint">'+esc(L(hint))+'</div>';
  h += '</div></div>';
  return h;
}
window.renderChapterBody = function(detail){
  var verses = detail.verses || {};
  var h = '<hr class="hairline reveal"><div class="body">';
  (detail.blocks||[]).forEach(function(b){ h += blockBody(b, verses); });
  return h + '</div>';
};
function wireAccordion(){
  document.querySelectorAll(".sv > button").forEach(function(btn){
    if(btn.__wired) return; btn.__wired = true;
    btn.addEventListener("click", function(){
      var sv = btn.parentNode, body = sv.querySelector(".sv-body");
      var open = sv.getAttribute("data-open")==="1";
      sv.setAttribute("data-open", open?"0":"1");
      btn.setAttribute("aria-expanded", open?"false":"true");
      body.style.maxHeight = open ? "0px" : (body.scrollHeight+16)+"px";
    });
  });
}

/* ---------- shared chrome ---------- */
function chapterLessons(page){
  return (window.CHAPTER && window.CHAPTER.id===page && window.CHAPTER.blocks) ? window.CHAPTER.blocks.filter(function(b){return b.t==="lesson";}) : [];
}
function buildRail(page){
  var rail = document.getElementById("rail"); if(!rail) return;
  var lessons = chapterLessons(page);
  if(lessons.length){
    var s = stepById(page), dot = s ? s.dot : "#8B9BEC";
    rail.innerHTML = lessons.map(function(ls){
      var lid = lessonId(ls.n), label = ls.n + (ls.title ? " " + L(ls.title) : "");
      return '<li data-sec="'+lid+'" style="--dot:'+dot+'"><a href="#'+lid+'">'+esc(label)+'</a></li>';
    }).join("");
  } else {
    rail.innerHTML = SITE.steps.map(function(s){
      return '<li data-sec="'+s.id+'"'+(s.id===page?' data-on="1"':'')+' style="--dot:'+s.dot+'"><a href="'+s.id+'.html">'+esc(L(s.title))+'</a></li>';
    }).join("");
  }
}
function applyLangButtons(){
  var btns = document.querySelectorAll(".langs button");
  for(var i=0;i<btns.length;i++){ btns[i].setAttribute("aria-pressed", btns[i].getAttribute("data-lang")===lang ? "true":"false"); }
}
function wireReveal(){
  /* stagger each reveal by its order within its section for a premium cascade */
  document.querySelectorAll("#app section").forEach(function(sec){
    var i = 0;
    sec.querySelectorAll(".reveal").forEach(function(el){
      el.style.transitionDelay = Math.min(i*0.05, 0.3) + "s";
      i++;
    });
  });
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window){
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }); },{threshold:.14});
    document.querySelectorAll(".reveal, .cards, .sec-head").forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll(".reveal, .cards, .sec-head").forEach(function(el){ el.classList.add("in"); });
  }
}
function wireHeavens(){
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".heavens-scroll").forEach(function(sc){
    if(sc.__wired) return; sc.__wired = true;
    var stage = sc.querySelector(".heavens-stage");
    var steps = parseInt(sc.getAttribute("data-steps"),10) || 1;
    var fx = Array.prototype.slice.call(sc.querySelectorAll(".heavens-fx"));
    var scenes = Array.prototype.slice.call(sc.querySelectorAll(".heavens-scene"));
    var dots = Array.prototype.slice.call(sc.querySelectorAll(".heavens-dot"));
    var countB = sc.querySelector(".heavens-count b");
    var prev = sc.querySelector(".heavens-prev"), next = sc.querySelector(".heavens-next");
    var cur = -1;
    function render(i){
      i = Math.max(0, Math.min(steps-1, i));
      if(i === cur) return; cur = i;
      stage.setAttribute("data-step", i);
      fx.forEach(function(el){
        var a = +el.getAttribute("data-at");
        el.classList.toggle("on", i >= a);
        if(el.classList.contains("heavens-ring")) el.classList.toggle("active", i === a);
      });
      scenes.forEach(function(s, idx){ s.classList.toggle("on", idx === i); });
      dots.forEach(function(d, idx){ d.setAttribute("aria-current", idx === i ? "true" : "false"); });
      if(countB) countB.textContent = (i+1);
      if(prev) prev.disabled = i <= 0;
      if(next) next.disabled = i >= steps-1;
    }
    function onScroll(){
      var vh = window.innerHeight;
      var total = sc.offsetHeight - vh;
      var top = sc.getBoundingClientRect().top;
      var scrolled = Math.min(Math.max(-top, 0), total);
      var p = total > 0 ? scrolled/total : 0;
      render(Math.round(p * (steps-1)));
    }
    function goto(i){
      i = Math.max(0, Math.min(steps-1, i));
      render(i);                       // instant visual feedback (independent of scroll)
      var vh = window.innerHeight;
      var total = sc.offsetHeight - vh;
      var absTop = sc.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
      var y = absTop + (steps > 1 ? total * (i/(steps-1)) : 0);
      // keep scroll position in sync so wheel-scrolling continues from this step.
      // (jump instantly — the stage is pinned, so the page does not visibly move.)
      window.scrollTo(0, Math.round(y) + 2);
    }
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("resize", onScroll, {passive:true});
    onScroll();
    if(prev) prev.addEventListener("click", function(e){ e.stopPropagation(); goto(cur-1); });
    if(next) next.addEventListener("click", function(e){ e.stopPropagation(); goto(cur+1); });
    dots.forEach(function(d){ d.addEventListener("click", function(e){ e.stopPropagation(); goto(+d.getAttribute("data-i")); }); });
    stage.addEventListener("click", function(e){
      if(e.target.closest(".heavens-ctrl") || e.target.closest(".heavens-head")) return;
      goto(cur+1);
    });
    window.addEventListener("keydown", function(e){
      var r = stage.getBoundingClientRect();
      if(!(r.top <= 1 && r.bottom >= window.innerHeight - 1)) return;
      if(e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " "){ e.preventDefault(); goto(cur+1); }
      else if(e.key === "ArrowUp" || e.key === "ArrowLeft"){ e.preventDefault(); goto(cur-1); }
    });
  });
}
function wireSpy(page){
  var prog = document.getElementById("prog");
  var curDot = document.getElementById("curDot"), curText = document.getElementById("curText");
  var s = page!=="landing" ? stepById(page) : null;
  if(s){
    if(curDot){ curDot.style.background=s.dot; curDot.style.opacity="1"; }
    if(curText) curText.textContent = s.numeral+" · "+L(s.title);
    if(prog) prog.style.color = s.dot;
  } else {
    if(curDot) curDot.style.opacity="0";
    if(curText) curText.textContent = L(SITE.ui.brand);
    if(prog) prog.style.color = "#8B9BEC";
  }
  var bar = document.querySelector(".bar");
  var lessonEls = chapterLessons(page).length ? Array.prototype.slice.call(document.querySelectorAll(".lesson-mark")) : [];
  var railItems = Array.prototype.slice.call(document.querySelectorAll("#rail li"));
  function onScroll(){
    var y = window.scrollY || window.pageYOffset;
    if(bar) bar.classList.toggle("scrolled", y > 40);
    if(lessonEls.length){
      var active = -1, i, edge = window.innerHeight*0.35;
      for(i=0;i<lessonEls.length;i++){ if(lessonEls[i].getBoundingClientRect().top <= edge) active = i; }
      if(active<0) active = 0;
      for(i=0;i<railItems.length;i++){ railItems[i].setAttribute("data-on", i===active ? "1":"0"); }
    }
    if(!prog) return;
    var docH = document.body.scrollHeight - window.innerHeight;
    prog.style.width = (docH>0 ? Math.min(100,(y/docH)*100) : 0) + "%";
  }
  window.removeEventListener("scroll", window.__spy || function(){});
  window.__spy = onScroll;
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();
}

function paint(page){
  document.documentElement.lang = lang;
  document.documentElement.classList.add("has-js");
  var foot = document.getElementById("foot");
  if(foot) foot.innerHTML = '<b>'+esc(L(SITE.hero.title))+'</b><br>'+esc(L(SITE.ui.footer));
  /* full-screen intro splash (index only) */
  var it = document.getElementById("introTitle");
  if(it){
    var tl = SITE.intro.title[lang] || SITE.intro.title.en;
    it.innerHTML = tl.map(function(t){ return '<span class="line"><span class="rise">'+esc(t)+'</span></span>'; }).join("");
    var isc = document.getElementById("scrollText"); if(isc) isc.textContent = L(SITE.intro.scroll);
    var ov = document.getElementById("introOverview"); if(ov) ov.textContent = L(SITE.intro.overview);
    var ovl = document.getElementById("introOverviewLabel"); if(ovl) ovl.textContent = L(SITE.ui.overview);
  }
  var ct = document.getElementById("navContact");
  if(ct) ct.firstChild.textContent = L(SITE.ui.contact) + " ";
  if(page==="landing") renderLanding(); else renderChapter(page);
  buildRail(page);
  applyLangButtons();
  wireReveal();
  wireAccordion();
  wireHeavens();
  wireSpy(page);
}

/* ---------- cosmic starfield (intro splash background) ---------- */
function cosmos(canvas){
  if(!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var w=0, h=0, dpr=1, stars=[], active=true, raf=0;
  function rand(a,b){ return a + Math.random()*(b-a); }
  function init(){
    var count = Math.round(Math.min(260, (w*h)/6200));
    stars = [];
    for(var i=0;i<count;i++){
      stars.push({
        x:Math.random()*w, y:Math.random()*h, r:rand(0.3,1.7),
        a:rand(0.25,1), tw:rand(0.002,0.02), ph:Math.random()*6.283,
        vx:rand(-0.045,0.045), vy:rand(0.02,0.16),
        hue:(Math.random()<0.16 ? rand(205,262) : 0)
      });
    }
  }
  function resize(){
    dpr = Math.min(window.devicePixelRatio||1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    if(!w||!h) return;
    canvas.width = Math.round(w*dpr); canvas.height = Math.round(h*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    init();
  }
  function draw(t){
    ctx.clearRect(0,0,w,h);
    for(var i=0;i<stars.length;i++){
      var s = stars[i];
      var al = s.a * (0.55 + 0.45*Math.sin(s.ph + t*s.tw));
      if(s.r>1.15){
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r*2.8,0,6.283);
        ctx.fillStyle = "rgba(170,195,255,"+(al*0.09)+")"; ctx.fill();
      }
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,6.283);
      ctx.fillStyle = s.hue ? ("hsla("+s.hue+",85%,82%,"+al+")") : ("rgba(255,248,236,"+al+")");
      ctx.fill();
      if(!reduce){
        s.x += s.vx; s.y += s.vy;
        if(s.y > h+2){ s.y = -2; s.x = Math.random()*w; }
        if(s.x < -2) s.x = w+2; else if(s.x > w+2) s.x = -2;
      }
    }
  }
  function loop(t){ draw(t); if(active) raf = requestAnimationFrame(loop); }
  function vis(){
    var on = window.scrollY < (canvas.clientHeight || window.innerHeight);
    if(on && !active){ active=true; raf=requestAnimationFrame(loop); }
    else if(!on && active){ active=false; if(raf) cancelAnimationFrame(raf); }
  }
  window.addEventListener("resize", resize);
  window.addEventListener("scroll", vis, {passive:true});
  resize();
  if(reduce){ draw(0); } else { raf = requestAnimationFrame(loop); }
}

/* ---------- cinematic intro parallax (fly-through + fade on scroll) ---------- */
function introMotion(){
  var intro = document.getElementById("intro"); if(!intro) return;
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var inner = intro.querySelector(".intro-inner");
  var stars = document.getElementById("stars");
  var neb = intro.querySelector(".intro-neb");
  var foot = intro.querySelector(".intro-foot");
  var guides = intro.querySelector(".intro-guides");
  var ticking = false;
  function upd(){
    ticking = false;
    var vh = window.innerHeight || 1;
    var p = Math.min(1, Math.max(0, (window.scrollY||window.pageYOffset||0) / vh));
    if(inner){ inner.style.transform = "translateY("+(-p*64)+"px)"; inner.style.opacity = String(Math.max(0,1-p*1.28)); }
    if(stars){ stars.style.transform = "scale("+(1+p*0.2)+")"; stars.style.opacity = String(Math.max(0,1-p*0.9)); }
    if(neb){ neb.style.opacity = String(Math.max(0,1-p*0.95)); }
    if(guides){ guides.style.opacity = String(Math.max(0,1-p*1.2)); }
    if(foot){ foot.style.opacity = String(Math.max(0,1-p*1.35)); foot.style.transform = "translateY("+(p*30)+"px)"; }
  }
  window.addEventListener("scroll", function(){ if(!ticking){ ticking=true; requestAnimationFrame(upd); } }, {passive:true});
  window.addEventListener("resize", upd);
  upd();
}

/* ---------- public API ---------- */
window.G = {
  data: SITE,
  cosmos: cosmos,
  init: function(opts){
    var page = (opts && opts.page) || "landing";
    document.querySelectorAll(".langs button").forEach(function(btn){
      btn.addEventListener("click", function(){
        var y = window.scrollY;
        setLang(btn.getAttribute("data-lang"));
        paint(page);
        window.scrollTo(0,y);
      });
    });
    paint(page);
    introMotion();
  }
};
})();
