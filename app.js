const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const chapters = [
 ['summer','那个夏天'],['mentors','导师阵容'],['rappers','那些声音'],['guess','听歌猜歌名'],
 ['memories','那些瞬间'],['finale','说唱走进生活'],['after','故事继续'],['closing','夏天还在歌里']
];
const label = (n,t) => `<div class="eyebrow"><i></i> ${String(n).padStart(2,'0')} / ${t}</div>`;
const vinyl = () => '<div class="vinyl" aria-hidden="true"><div class="vinyl-label"><b>2017</b><small>REWIND<br>THE SUMMER</small></div></div>';
const wave = () => `<div class="wave" aria-hidden="true">${Array.from({length:36},(_,i)=>`<i style="--h:${20+(i*37)%80}%;--d:${i*.035}s"></i>`).join('')}</div>`;
const artistDescriptions = artists.map(a=>a.description);
const memories = memoryStories;
$('#story').innerHTML = `
 <section id="home" class="hero story-section">
  <div class="hero-grid grid-texture" aria-hidden="true"></div>
  <div class="hero-inner wrap">
   <div class="hero-copy"><div class="eyebrow light"><i></i> 中文说唱 · 夏日回忆录</div><h1>回到那个<br><em>有嘻哈</em>的夏天<span>。</span></h1><p>从一档综艺，听见一种新的声音。<br>有音乐，有故事，也有你。</p><a href="#summer" class="button primary">沿着音乐，往下走 <span>↓</span></a><span class="hero-small">2017 → 2026 / 一起重温那个夏天</span></div>
   <div class="hero-art" aria-hidden="true"><div class="outline-year">2017</div><div class="photo-strip"><img src="assets/gai.jpg" alt=""><img src="assets/air.jpg" alt=""><img src="assets/pgone.jpg" alt=""></div>${vinyl()}<span class="neon-star">✳</span><span class="art-caption">PRESS PLAY.<br>REWIND THE SUMMER.</span></div>
  </div><a href="#summer" class="scroll-invitation"><span>SCROLL TO EXPLORE</span><i>↓</i></a>
 </section>
 <section id="summer" class="summer story-section wrap">
  <div class="summer-image reveal"><img src="assets/stage.jpg" alt="中国有嘻哈2017年选手合影" loading="lazy"><span>THE SUMMER IT ALL STARTED</span><b>20<br><em>17</em></b></div>
  <div class="summer-copy reveal">${label(1,'时间回到2017')}<div class="date">2017.06.24</div><h2>那个夏天，<br>我们第一次<br><em>这样听说唱。</em></h2><p>《中国有嘻哈》开播。<br>从节目里的舞台，到朋友圈里的话题，中文说唱被更多人听见。</p><div class="conversation">你当年，有没有看过这档节目？ <span>↗</span></div></div>
 </section>
 <div class="flow-divider" aria-hidden="true"><span>FREESTYLE</span><i>✳</i><span>SUMMER 2017</span><i>✳</i><span>KEEP THE MUSIC GOING</span></div>
 <section id="mentors" class="mentors story-section wrap">
  <div class="section-heading reveal">${label(2,'当年的明星制作人')}<h2>四位制作人，<br><em>三组不同视角。</em></h2><p>不同背景的人，坐到同一个舞台面前。</p></div>
  <div class="mentor-list"><article class="reveal"><span>01</span><h3>吴亦凡</h3><small>KRIS WU</small><p>当年的流量与话题</p><blockquote>“你有Freestyle吗？”</blockquote></article><article class="reveal"><span>02</span><h3>潘玮柏</h3><small>WILL PAN</small><p>熟悉的流行音乐面孔</p><blockquote>从《快乐崇拜》到说唱舞台</blockquote></article><article class="reveal"><span>03</span><h3>张震岳 <i>&</i><br>MC HotDog 热狗</h3><small>AYAL KOMOD & MC HOTDOG</small><p>音乐创作与说唱经验</p><blockquote>两位音乐人，一个组合</blockquote></article></div>
 </section>
 <section id="rappers" class="rappers story-section"><div class="wrap">
  <div class="section-heading reveal">${label(3,'那年夏天，我们认识了')}<h2>名字不同，<br><em>声音都很鲜明。</em></h2><p>不用记住他们的生平。<br>先记住一种声音，再慢慢认识一个人。</p></div>
  <div class="artist-gallery">${artists.map((a,i)=>`<article class="artist-card reveal"><div class="artist-photo"><img src="assets/${a.image}" alt="${esc(a.cn)}人物照片" loading="lazy" style="object-position:${a.position}"><span>${a.number} / 06</span><b>${a.name}</b></div><div class="artist-info"><h3>${a.cn}</h3><p>${artistDescriptions[i]}</p><div class="tags">${a.tags.slice(0,2).map(t=>`<span>${t}</span>`).join('')}</div><div class="artist-track"><span>♫</span><small>${a.song}</small></div></div></article>`).join('')}</div>
  <p class="gallery-question reveal">你会用哪个词，形容你最喜欢的那个声音？ <span>↗</span></p>
 </div></section>
 <section id="guess" class="guess story-section"><div class="grid-texture" aria-hidden="true"></div><div class="wrap">
  <div class="guess-heading reveal">${label(4,'把舞台交给大家')}<h2>先别讲了，<em>来听歌！</em></h2><p>15道题，从耳熟能详到进阶挑战。<br>猜对歌名 1 分，歌手再加 1 分，答错不扣分。</p><div class="game-rule"><b>15 <small>题</small></b><span></span><b>15 <small>秒 / 题</small></b><span></span><b>2 <small>组一起玩</small></b></div></div>
  <div class="game-console reveal"><div class="game-top"><span>LISTEN & GUESS</span><span id="gameProgress">01 / 15</span><button data-prepare class="text-button">准备音乐 ↗</button></div><div id="gameRound"></div><div class="game-bottom"><div class="question-selector" id="questionSelector" aria-label="选择猜歌题目"></div><div class="scoreboard"><span>现场记分</span>${['A','B'].map((t,i)=>`<div class="team"><b>${t}组</b><button data-score="${i},-1" aria-label="${t}组减1分">−</button><strong data-team="${i}">0</strong><button data-score="${i},1" aria-label="${t}组加1分">+</button></div>`).join('')}</div></div></div>
  <div class="game-end"><span>从2017年的声音，听到后来新的作品。</span><a href="#memories">继续往下，回到那些名场面 ↓</a></div>
 </div></section>
 <section id="memories" class="memories story-section wrap">
  <div class="memory-intro reveal">${label(5,'有些瞬间，过了很久还记得')}<h2>一档节目，<br><em>留下的不只是歌。</em></h2><p>金链子、60秒、那些大家都会接的梗，<br>还有一个藏在面具背后的名字。</p></div>
  <div class="memory-stories">${memories.map((m,i)=>`<article class="memory-story reveal"><div class="memory-mark mark-${m.event}" aria-hidden="true">${['⛓','60','“','?'][i]}</div><div><span class="small-label">MEMORY ${String(i+1).padStart(2,'0')} / ${m.kicker.split(' / ')[1]}</span><h3>${m.headline.replace('\n','')}</h3><p>${m.copy.replace('\n','')}</p><div class="memory-question">${m.question}</div>${m.event==='mask'?'<button class="button secondary" data-mask>揭开面具 ↗</button><div class="mask-answer" hidden>HipHopMan · <b>欧阳靖 MC JIN</b></div>':''}</div></article>`).join('')}</div>
 </section>
 <section id="finale" class="music-life story-section">
  <div class="life-intro">${label(6,'从舞台，到我们的歌单')}<h2>说唱，也在唱<br><em>我们的生活。</em></h2><p>有的歌陪你出发，有的歌让你放松，<br>有的歌替你说出心里话。</p></div>
  <div class="life-grid"><article><span>01 / 情绪</span><h3>有些感受，<br>被唱了出来。</h3><p>轻松、失落，或是想念。<br>音乐给情绪一个出口。</p><a href="${musicUrl(1751788692)}" target="_blank" rel="noopener noreferrer">♫ 阿司匹林 ↗</a></article><article><span>02 / 陪伴</span><h3>有些心意，<br>藏在歌里。</h3><p>关于爱、陪伴和时间，<br>说唱也有温柔的一面。</p><a href="${musicUrl(1751785993)}" target="_blank" rel="noopener noreferrer">♫ 别怕变老 ↗</a></article><article><span>03 / 自己</span><h3>有些声音，<br>让人想往前走。</h3><p>把生活里的经历，<br>唱成自己的表达。</p><a href="${musicUrl(1688680607)}" target="_blank" rel="noopener noreferrer">♫ Hey KONG ↗</a></article></div>
  <p class="life-question">刚才的15首歌里，<strong>你最想把哪首加入歌单？</strong><span>↗</span></p>
 </section>
 <section id="after" class="after story-section wrap">
  <div class="after-intro reveal">${label(7,'2017之后')}<h2>节目结束了，<br><em>故事还在继续。</em></h2><p>2017，我们开始认识他们。<br>后来，我们在更多舞台，听见他们。</p></div>
  <div class="year-stories">${[['2018','中国新说唱','新面孔，接过麦克风。','艾热 · 那吾克热 · ICE'],['2020','说唱新世代','更多不同的表达，被听见。','姜云升 · 圣代 · 沙一汀 · 于贞'],['2022','中国说唱巅峰对决','熟悉的面孔，再次相聚。','GAI · 艾热 · Tizzy T · 刘聪']].map(a=>`<article class="year-story reveal"><b>${a[0]}</b><div><h3>${a[1]}</h3><p>${a[2]}</p><small>${a[3]}</small></div></article>`).join('')}</div>
 </section>
 <section id="closing" class="closing story-section"><div class="closing-year" aria-hidden="true">2017</div><div class="wrap reveal">${label(8,'回到那个夏天')}<h2>有些夏天，<br>会一直<em>在歌里。</em></h2><p>谢谢你，和我一起回到2017。<br>希望今天，你也记住了一首歌、一个人、一种声音。</p><span class="closing-thanks">THANK YOU <i>✳</i></span><a href="#guess" class="text-button">还想听？回到猜歌区 ↗</a></div></section>`;

let round=0, scores=[0,0], revealed=new Set(), audioFiles={}, audioOffsets={};
let audio=null, interval=null, playing=false, loading=false, generation=0, startedAt=0;
let activeSection='home';
const pad=n=>String(n).padStart(2,'0');
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toast.timeout);toast.timeout=setTimeout(()=>el.classList.remove('visible'),3300);}
function renderGame(){
 const s=songs[round],isRevealed=revealed.has(round);
 $('#gameProgress').textContent=`${pad(round+1)} / 15`;
 $('#gameRound').innerHTML=`<div class="game-disc">${vinyl()}<div class="round-number"><span>ROUND</span><b>${pad(round+1)}</b></div></div><div class="game-content"><div class="round-meta"><span>${s.group}题</span><span class="difficulty" aria-label="难度${s.difficulty}星">${'★'.repeat(s.difficulty)}${'☆'.repeat(4-s.difficulty)}</span></div><div class="question-copy" ${isRevealed?'hidden':''}><h3>这首歌，<br><em>你听出来了吗？</em></h3><p>听到熟悉的旋律，就举手抢答。</p></div><div class="answer-copy" ${isRevealed?'':'hidden'}><span>ANSWER / 答案揭晓</span><h3>《${s.title}》</h3><b>${s.artist}</b><p>${s.hint}</p></div>${wave()}<div class="playback-controls"><button class="button primary" data-play>${audioFiles[round]?'▶ 播放片段':'▶ 开始15秒计时'}</button><button class="button secondary" data-reveal ${isRevealed?'disabled':''}>揭晓答案 <kbd>R</kbd></button><strong class="countdown" aria-label="剩余秒数">15<small>s</small></strong></div><div class="audio-status"><span>${audioFiles[round]?'音频已就绪 · 播放15秒后自动停止':'打开歌曲在线听，或导入本地音频'}</span><a class="song-open" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="打开第${round+1}首歌曲">打开歌曲 ↗</a></div><div class="round-navigation"><button data-prev ${round===0?'disabled':''}>← 上一题</button>${isRevealed?'<button data-reset-round>再猜一次</button>':'<span>歌名 1 分 · 歌手 1 分</span>'}<button data-next ${round===songs.length-1?'disabled':''}>下一题 →</button></div></div>`;
 $('#questionSelector').innerHTML=songs.map((s,i)=>`<button data-round="${i}" aria-label="第${i+1}题" aria-pressed="${i===round}" class="${i===round?'selected':''} ${revealed.has(i)?'answered':''}">${pad(i+1)}</button>`).join('');
 $('#gameRound').classList.toggle('revealed',isRevealed);
}
function stopPlayback(reset=false){generation++;if(audio){audio.pause();audio.src='';audio=null;}clearInterval(interval);interval=null;playing=false;loading=false;$('#gameRound').classList.remove('is-playing');const p=$('[data-play]');if(p)p.textContent=audioFiles[round]?'▶ 播放片段':'▶ 开始15秒计时';if(reset&&$('.countdown'))$('.countdown').innerHTML='15<small>s</small>';}
function setRound(index){if(index<0||index>=songs.length)return;stopPlayback(true);round=index;renderGame();}
function revealAnswer(){stopPlayback();revealed.add(round);renderGame();}
async function playClip(){
 if(playing||loading){stopPlayback(true);return;}
 const token=++generation,selected=round;loading=true;
 $('[data-play]').textContent='准备播放…';$('.countdown').innerHTML='15<small>s</small>';
 if(audioFiles[round]){
  const clip=new Audio(audioFiles[round]);audio=clip;clip.currentTime=audioOffsets[round]||0;
  try{await clip.play();}catch(e){if(token===generation){stopPlayback();toast('这个文件暂时无法播放，请重新导入音频。');}return;}
  if(token!==generation||selected!==round){clip.pause();return;}
  clip.addEventListener('ended',()=>{if(audio===clip)stopPlayback();});
 }else toast('请在外部播放器放歌，15秒计时已开始。');
 if(token!==generation||selected!==round)return;
 loading=false;playing=true;startedAt=performance.now();$('#gameRound').classList.add('is-playing');$('[data-play]').textContent='Ⅱ 暂停';
 interval=setInterval(()=>{const left=Math.max(0,15-(performance.now()-startedAt)/1000);const el=$('.countdown');if(el)el.innerHTML=`${Math.ceil(left)}<small>s</small>`;if(left<=0){stopPlayback();const b=$('[data-play]');if(b)b.textContent=audioFiles[round]?'↻ 再听一次':'↻ 再计时一次';}},100);
}
function assignFile(index,file){if(index===round)stopPlayback(true);if(audioFiles[index])URL.revokeObjectURL(audioFiles[index]);audioFiles[index]=URL.createObjectURL(file);$(`#audioLabel${index}`).textContent='✓ 已导入';$(`#audioLabel${index}`).title=file.name;$('#preparedCount').textContent=`${Object.keys(audioFiles).length} / 15 已导入`;renderGame();}
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g,'');
$('#audioSetup').innerHTML=songs.map((s,i)=>`<div class="audio-row"><span class="setup-number">${pad(i+1)}</span><div class="setup-song"><b>《${s.title}》</b><small>${s.artist}${s.version?' · '+s.version:''}</small><div class="setup-links"><a href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="在线听${s.title}">打开歌曲 ↗</a><a href="https://y.qq.com/n/ryqq/search?w=${encodeURIComponent(s.title)}" target="_blank" rel="noopener noreferrer">QQ音乐搜索 ↗</a></div></div><label class="offset-label">起点 <input type="number" min="0" step="1" value="0" data-offset="${i}" aria-label="${s.title}片段起点秒数"> 秒</label><label class="upload-label"><span id="audioLabel${i}">选择音频</span><input type="file" accept="audio/*,.mp3,.m4a,.wav,.ogg" data-upload="${i}" aria-label="导入${s.title}音频"></label></div>`).join('');
$('#bulkAudio').addEventListener('change',e=>{let matched=0;for(const file of e.target.files){const name=normalize(file.name);const i=songs.findIndex(s=>[s.title,...(s.aliases||[])].some(t=>name.includes(normalize(t))));if(i>=0){assignFile(i,file);matched++;}}toast(matched?`已匹配${matched}首音乐；未匹配的文件可逐首选择。`:'文件名没有匹配到歌名，请逐首导入。');e.target.value='';});
document.addEventListener('change',e=>{if(e.target.matches('[data-upload]')){const file=e.target.files[0];if(file)assignFile(Number(e.target.dataset.upload),file);}if(e.target.matches('[data-offset]'))audioOffsets[e.target.dataset.offset]=Math.max(0,Number(e.target.value)||0);});
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(e){toast('请使用浏览器菜单进入全屏。');}}
$('#chapterList').innerHTML=chapters.map(([id,name],i)=>`<a href="#${id}"><span>${pad(i+1)}</span><b>${name}</b><i>↗</i></a>`).join('');
$('#prepareButton').onclick=()=>$('#prepareDialog').showModal();$('#outlineButton').onclick=()=>$('#outlineDialog').showModal();$('#fullscreenButton').onclick=fullscreen;
document.addEventListener('click',e=>{const t=e.target.closest('button,a');if(!t)return;
 if(t.matches('[data-play]'))playClip();if(t.matches('[data-reveal]'))revealAnswer();if(t.matches('[data-next]'))setRound(round+1);if(t.matches('[data-prev]'))setRound(round-1);if(t.matches('[data-round]'))setRound(Number(t.dataset.round));if(t.matches('[data-reset-round]')){revealed.delete(round);stopPlayback(true);renderGame();}
 if(t.matches('[data-score]')){const [i,d]=t.dataset.score.split(',').map(Number);scores[i]=Math.max(0,scores[i]+d);$(`[data-team="${i}"]`).textContent=scores[i];}
 if(t.matches('[data-prepare]'))$('#prepareDialog').showModal();
 if(t.matches('[data-close]'))document.getElementById(t.dataset.close).close();
 if(t.matches('[data-mask]')){$('.mask-answer').hidden=false;t.hidden=true;}
 if(t.matches('#chapterList a'))$('#outlineDialog').close();
});
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.repeat||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||document.querySelector('dialog[open]'))return;const key=e.key.toLowerCase();if(!$('#blackout').hidden){if(key==='b'||key==='escape')$('#blackout').hidden=true;return;}if(key==='f')fullscreen();if(key==='o')$('#outlineDialog').showModal();if(key==='r'&&activeSection==='guess')revealAnswer();if(key==='b'){stopPlayback();$('#blackout').hidden=false;}});
addEventListener('beforeunload',()=>{stopPlayback();Object.values(audioFiles).forEach(u=>URL.revokeObjectURL(u));});
renderGame();
