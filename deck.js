/* One visible page at a time; quiz state remains mounted while presenting. */
(() => {
 const makeSlide=(id,classes,html,note)=>{const el=document.createElement('section');el.id=id;el.className=`story-section ${classes}`;el.dataset.note=note;el.innerHTML=html;return el;};
 const rapperPages=artists.map((a,i)=>{
  const el=makeSlide(i===0?'rappers':`rapper-${i+1}`,'artist-slide wrap',`
   <div class="artist-portrait"><img src="assets/${a.image}" alt="${esc(a.cn)}人物照片" style="object-position:${a.position}"><span>${a.number} / 06 · THOSE VOICES</span><b>${a.name}</b></div>
   <div class="artist-detail">${label(3,`那些声音 / ${a.number}`)}<span class="artist-english">${a.name}</span><h2>${a.cn}</h2><p class="artist-keyword">${a.keyword}</p><p class="artist-description">${artistDescriptions[i]}</p><div class="tags">${a.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="artist-track"><span>♫</span><small>${a.song}</small></div></div>`,3+i);
  el.dataset.artist=i;el.dataset.title=a.cn;return el;
 });
 $('#rappers').replaceWith(...rapperPages);
 const memoryPages=memories.map((m,i)=>{
  const el=makeSlide(i===0?'memories':`memory-${i+1}`,'memory-slide wrap',`
   <div class="memory-art"><span class="memory-orbit"></span><div class="memory-mark mark-${m.event}" aria-hidden="true">${['⛓','60','“','?'][i]}</div><span class="memory-art-label">MEMORY / ${pad(i+1)}</span></div>
   <div class="memory-detail">${label(5,`那些瞬间 / ${pad(i+1)}`)}<span class="small-label">${m.kicker}</span><h2>${m.headline.replace('\n','<br>')}</h2><p>${m.copy.replace('\n','<br>')}</p><div class="memory-question">${m.question}</div>${m.event==='mask'?'<button class="button secondary" data-mask>揭开面具 ↗</button><div class="mask-answer" hidden>HipHopMan · <b>欧阳靖 MC JIN</b></div>':''}</div>`,storyNotes.indexOf(m));
  el.dataset.title=m.kicker.split(' / ')[1];return el;
 });
 $('#memories').replaceWith(...memoryPages);
 document.querySelector('.flow-divider').remove();
 $('.hero-copy .button').innerHTML='翻开那个夏天 <span>→</span>';
 $('.scroll-invitation').innerHTML='<span>TURN THE PAGE</span><i>→</i>';
 $('.game-end a').textContent='下一页，回到那些名场面 →';
 $('.hero-art').style.removeProperty('--parallax');
 const titles={home:'回到2017',summer:'那个夏天',mentors:'制作人阵容',guess:'听歌猜歌名 · 15题',finale:'冠军之争',after:'故事继续',closing:'夏天还在歌里'};
 const slides=[...document.querySelectorAll('#story > .story-section')];
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 let current=-1,transitions=[],wheelTotal=0,wheelDirection=0,wheelTime=0,wheelLock=0,touchStart=null;
 const pageTitle=el=>el.dataset.title||titles[el.id];
 slides.forEach((el,i)=>{el.classList.add('deck-slide');el.hidden=true;el.inert=true;el.tabIndex=-1;el.setAttribute('role','group');el.setAttribute('aria-roledescription','演讲页');el.setAttribute('aria-label',`${i+1} / ${slides.length} · ${pageTitle(el)}`);el.querySelectorAll('.reveal').forEach(node=>node.classList.add('visible'));});
 $('#story').setAttribute('aria-label','回到2017 · 翻页演讲');
 $('#chapterList').innerHTML=slides.map((el,i)=>`<a href="#${el.id}"><span>${pad(i+1)}</span><b>${pageTitle(el)}</b><i>→</i></a>`).join('');
 function indexFromHash(){let id=decodeURIComponent(location.hash.slice(1));if(/^\d+$/.test(id))return Math.max(0,Math.min(slides.length-1,Number(id)-1));const i=slides.findIndex(el=>el.id===id);return i<0?0:i;}
 function finishTransition(){transitions.forEach(animation=>animation.cancel());transitions=[];slides.forEach((el,i)=>{el.hidden=i!==current;el.inert=i!==current;el.style.zIndex='';});}
 function goTo(index,{historyMode='push',animate=true}={}){
  if(index<0||index>=slides.length||index===current)return;
  finishTransition();
  const previous=slides[current],next=slides[index],direction=index>current?1:-1,moveFocus=previous?.contains(document.activeElement);
  if(previous){previous.inert=true;if(previous.id==='guess')stopPlayback(true);}
  current=index;activeSection=next.id;next.hidden=false;next.inert=false;next.scrollTop=0;
  if(previous&&animate&&!motion.matches){
   previous.hidden=false;previous.style.zIndex='1';next.style.zIndex='2';
   const options={duration:480,easing:'cubic-bezier(.22,.8,.25,1)',fill:'both'};
   transitions=[previous.animate([{opacity:1,transform:'translateX(0)'},{opacity:0,transform:`translateX(${-direction*48}px)`}],options),next.animate([{opacity:0,transform:`translateX(${direction*64}px)`},{opacity:1,transform:'translateX(0)'}],options)];
   const incoming=transitions[1];incoming.finished.then(()=>{if(transitions.includes(incoming))finishTransition();}).catch(()=>{});
  }else if(previous)previous.hidden=true;
  if(historyMode==='push')history.pushState(null,'',`#${next.id}`);else if(historyMode==='replace')history.replaceState(null,'',`#${next.id}`);
  $('#pageNumber').innerHTML=`${pad(index+1)} <span>/ ${pad(slides.length)}</span>`;$('#pageTitle').textContent=pageTitle(next);
  $('#prevPage').disabled=index===0;$('#nextPage').disabled=index===slides.length-1;
  $('#progress').style.width=`${(index+1)/slides.length*100}%`;
  document.querySelectorAll('.desktop-nav a,#chapterList a').forEach(a=>{const id=a.hash.slice(1),active=id===next.id||(id==='rappers'&&next.dataset.artist!==undefined)||(id==='memories'&&next.classList.contains('memory-slide'));a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  $('#pageAnnouncement').textContent=`第${index+1}页，共${slides.length}页。${pageTitle(next)}`;
  if(!$('#notes').hidden)updateNotes();if(moveFocus)next.focus({preventScroll:true});
 }
 $('#prevPage').onclick=()=>goTo(current-1);$('#nextPage').onclick=()=>goTo(current+1);
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const i=slides.findIndex(el=>el.id===a.hash.slice(1));if(i<0)return;e.preventDefault();goTo(i);});
 addEventListener('popstate',()=>goTo(indexFromHash(),{historyMode:'none'}));
 addEventListener('hashchange',()=>goTo(indexFromHash(),{historyMode:'none'}));
 const blocked=target=>document.querySelector('dialog[open]')||!$('#blackout').hidden||target.closest('input,textarea,select,[contenteditable],#notes');
 document.addEventListener('keydown',e=>{
  if(e.defaultPrevented||e.ctrlKey||e.altKey||e.metaKey||e.repeat||blocked(e.target))return;
  if(e.code==='Space'&&e.target.closest('button,a'))return;
  let target;
  if(['ArrowRight','PageDown'].includes(e.key)||e.code==='Space')target=current+(e.shiftKey?-1:1);
  if(['ArrowLeft','PageUp'].includes(e.key))target=current-1;
  if(e.key==='ArrowDown'||e.key==='ArrowUp'){const el=slides[current],down=e.key==='ArrowDown';if(el.scrollHeight>el.clientHeight+3&&((down&&el.scrollTop+el.clientHeight<el.scrollHeight-3)||(!down&&el.scrollTop>3)))return;target=current+(down?1:-1);}
  if(e.key==='Home')target=0;if(e.key==='End')target=slides.length-1;
  if(target!==undefined){e.preventDefault();goTo(target);wheelLock=performance.now()+650;}
 });
 $('#story').addEventListener('wheel',e=>{
  if(e.ctrlKey||blocked(e.target)||e.target.closest('button,a'))return;
  const amount=(Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY)*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1),direction=Math.sign(amount),el=slides[current];
  if(!direction)return;
  if(Math.abs(e.deltaY)>=Math.abs(e.deltaX)&&el.scrollHeight>el.clientHeight+3&&((direction>0&&el.scrollTop+el.clientHeight<el.scrollHeight-3)||(direction<0&&el.scrollTop>3)))return;
  e.preventDefault();const now=performance.now(),gap=now-wheelTime;wheelTime=now;
  if(now<wheelLock||gap<160&&wheelTotal===-1)return;
  if(wheelTotal===-1||gap>180||wheelDirection!==direction)wheelTotal=0;
  wheelDirection=direction;wheelTotal+=Math.abs(amount);
  if(wheelTotal>=65){goTo(current+direction);wheelTotal=-1;wheelLock=now+700;}
 },{passive:false});
 $('#story').addEventListener('touchstart',e=>{if(e.touches.length!==1||blocked(e.target)||e.target.closest('button,a')){touchStart=null;return;}const t=e.touches[0];touchStart={x:t.clientX,y:t.clientY,time:performance.now()};},{passive:true});
 $('#story').addEventListener('touchend',e=>{if(!touchStart)return;const start=touchStart;touchStart=null;const t=e.changedTouches[0],dx=t.clientX-start.x,dy=t.clientY-start.y;if(performance.now()-start.time<900&&Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.4)goTo(current+(dx<0?1:-1));},{passive:true});
 goTo(indexFromHash(),{historyMode:'replace',animate:false});
})();
