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
   <div class="hero-art" aria-hidden="true"><div class="outline-year">2017</div><div class="photo-strip"><img src="assets/gai.jpg" alt=""><img src="assets/afterjourney.jpg" alt=""><img src="assets/bridge.jpg" alt=""></div>${vinyl()}<span class="neon-star">✳</span><span class="art-caption">PRESS PLAY.<br>REWIND THE SUMMER.</span></div>
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
  <div class="guess-heading reveal">${label(4,'把舞台交给大家')}<h2>先别讲了，<em>来听歌！</em></h2><p>15道题，从耳熟能详到进阶挑战。<br>猜对歌名 1 分，歌手再加 1 分，答错不扣分。</p><div class="game-rule"><b>15 <small>题</small></b><span></span><b>随时 <small>播放 / 暂停</small></b><span></span><b>2 <small>组一起玩</small></b></div></div>
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
let audio=$('#quizAudio'), playing=false, loading=false, generation=0, hasStarted=false;
let activeSection='home';
const audioRecords=new Map(), savedTracks=new Set();
const pad=n=>String(n).padStart(2,'0');
const formatTime=n=>Number.isFinite(n)?`${Math.floor(n/60)}:${pad(Math.floor(n%60))}`:'0:00';
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g,'');
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toast.timeout);toast.timeout=setTimeout(()=>el.classList.remove('visible'),4500);}
function updatePlaybackUI(){
 const button=$('[data-play]');
 if(button){button.textContent=loading?'准备播放…':playing?'Ⅱ 暂停播放':hasStarted&&!audio.ended?'▶ 继续播放':'▶ 开始播放';button.setAttribute('aria-pressed',String(playing));}
 $('#gameRound').classList.toggle('is-playing',playing);
 const duration=Number.isFinite(audio.duration)?audio.duration:0;
 const seek=$('[data-seek]');
 if(seek){seek.disabled=!audioFiles[round]||!duration;seek.max=String(duration||1);seek.value=String(audio.currentTime||0);}
 if($('[data-elapsed]'))$('[data-elapsed]').textContent=formatTime(audio.currentTime);
 if($('[data-duration]'))$('[data-duration]').textContent=formatTime(duration);
 const status=$('[data-audio-status]');
 if(status)status.textContent=loading?'正在载入音频…':playing?'正在本页播放':audioFiles[round]?(savedTracks.has(round)?'音频已保存 · 刷新后仍可播放':'音频已就绪 · 点击开始播放'):'本题待准备音频 · 支持 MP3 / M4A / FLAC';
}
function prepareCurrentAudio(){
 const source=audioFiles[round];
 if(source&&audio.getAttribute('src')!==source){
  audio.src=source;
  audio.load();
 }
}
function renderGame(){
 const s=songs[round],isRevealed=revealed.has(round);
 $('#gameProgress').textContent=`${pad(round+1)} / 15`;
 $('#gameRound').innerHTML=`<div class="game-disc">${vinyl()}<div class="round-number"><span>ROUND</span><b>${pad(round+1)}</b></div></div><div class="game-content"><div class="round-meta"><span>${s.group}题</span><span class="difficulty" aria-label="难度${s.difficulty}星">${'★'.repeat(s.difficulty)}${'☆'.repeat(4-s.difficulty)}</span></div><div class="question-copy" ${isRevealed?'hidden':''}><h3>这首歌，<br><em>你听出来了吗？</em></h3><p>听到熟悉的旋律，就举手抢答。</p></div><div class="answer-copy" ${isRevealed?'':'hidden'}><span>ANSWER / 答案揭晓</span><h3>《${s.title}》</h3><b>${s.artist}</b><p>${s.hint}</p></div>${wave()}<div class="playback-controls"><button class="button primary" data-play aria-pressed="false">▶ 开始播放</button><button class="button secondary" data-reveal ${isRevealed?'disabled':''}>揭晓答案 <kbd>R</kbd></button><button class="replay-button" data-replay aria-label="从设定起点重新播放" title="重新播放" ${audioFiles[round]?'':'disabled'}>↺</button></div><div class="audio-transport"><span data-elapsed>0:00</span><input type="range" data-seek min="0" max="1" value="0" step="0.1" aria-label="歌曲播放进度" disabled><span data-duration>0:00</span></div><div class="audio-status"><span data-audio-status></span><button data-prepare class="audio-prepare">${audioFiles[round]?'更换音频':'准备音频'}</button></div><div class="round-navigation"><button data-prev ${round===0?'disabled':''}>← 上一题</button>${isRevealed?'<button data-reset-round>再猜一次</button>':'<span>歌名 1 分 · 歌手 1 分</span>'}<button data-next ${round===songs.length-1?'disabled':''}>下一题 →</button></div></div>`;
 $('#questionSelector').innerHTML=songs.map((s,i)=>`<button data-round="${i}" aria-label="第${i+1}题" aria-pressed="${i===round}" class="${i===round?'selected':''} ${revealed.has(i)?'answered':''}">${pad(i+1)}</button>`).join('');
 $('#gameRound').classList.toggle('revealed',isRevealed);
 prepareCurrentAudio();updatePlaybackUI();
}
function stopPlayback(){
 generation++;playing=false;loading=false;hasStarted=false;
 audio.pause();audio.removeAttribute('src');audio.load();
 updatePlaybackUI();
}
function setRound(index){if(index<0||index>=songs.length)return;stopPlayback();round=index;renderGame();}
function revealAnswer(){stopPlayback();revealed.add(round);renderGame();}
async function playClip(){
 if(loading){stopPlayback();return;}
 if(playing){audio.pause();playing=false;updatePlaybackUI();return;}
 if(!audioFiles[round]){
  toast('这首歌还没有可播放音频，请在音乐准备中选择 MP3、M4A 或 FLAC 文件。');
  $('#prepareDialog').showModal();return;
 }
 prepareCurrentAudio();
 if(audio.ended)audio.currentTime=audioOffsets[round]||0;
 const token=++generation;loading=true;updatePlaybackUI();
 try{
  await audio.play();
  if(token!==generation)return;
  loading=false;playing=!audio.paused;hasStarted=true;updatePlaybackUI();
 }catch(error){
  if(token!==generation)return;
  loading=false;playing=false;updatePlaybackUI();
  toast('这个音频无法播放。请换用可正常播放的 MP3、M4A、FLAC 或 WAV 文件。');
 }
}
function updateLibraryUI(){
 songs.forEach((s,i)=>{
  const label=$(`#audioLabel${i}`), state=$(`#audioState${i}`);
  if(label){label.textContent=audioFiles[i]?'更换音频':'选择音频';label.title=audioRecords.get(i)?.name||'';}
  if(state)state.textContent=audioFiles[i]?(savedTracks.has(i)?`✓ 已保存${audioOffsets[i]?' · 起点 '+audioOffsets[i]+' 秒':''}`:'✓ 本次可播放'):'尚未准备';
  const offset=$(`[data-offset="${i}"]`);if(offset)offset.value=audioOffsets[i]||0;
  const remove=$(`[data-remove-audio="${i}"]`);if(remove)remove.disabled=!audioFiles[i];
 });
 $('#preparedCount').textContent=`${Object.keys(audioFiles).length} / 15 可播放`;
}
function showAudioFormatNotice(message){const notice=$('#audioImportNotice');notice.hidden=false;notice.textContent=message;}
async function assignFile(index,file){
 if(/\.(ncm|uc|uc!)$/i.test(file.name)){const message=`检测到网易云加密文件「${file.name}」。这类文件无法在网页中直接播放，请使用音乐平台提供的 MP3、M4A、FLAC 等普通音频。`;showAudioFormatNotice(message);toast('NCM 是加密格式，这个文件没有导入为可播放音频。');return false;}
 if(!file.type.startsWith('audio/')&&!/\.(mp3|m4a|flac|wav|ogg|aac|opus|aiff|aif)$/i.test(file.name)){toast('请选择 MP3、M4A、FLAC、WAV 等音频文件。');return false;}
 stopPlayback();
 if(audioFiles[index])URL.revokeObjectURL(audioFiles[index]);
 audioFiles[index]=URL.createObjectURL(file);
 const record={key:songs[index].url,blob:file,name:file.name,offset:audioOffsets[index]||0};
 audioRecords.set(index,record);savedTracks.delete(index);
 updateLibraryUI();renderGame();
 try{await AudioLibrary.save(record);if(audioRecords.get(index)===record)savedTracks.add(index);}
 catch(error){toast('音频本次可以播放，但浏览器未能保存。下次打开需要重新选择文件。');}
 updateLibraryUI();updatePlaybackUI();return true;
}
$('#audioSetup').innerHTML=songs.map((s,i)=>`<div class="audio-row"><span class="setup-number">${pad(i+1)}</span><div class="setup-song"><b>《${s.title}》</b><small>${s.artist}${s.version?' · '+s.version:''}</small><span class="setup-state" id="audioState${i}">尚未准备</span></div><label class="offset-label">起点 <input type="number" min="0" step="1" value="0" data-offset="${i}" aria-label="${s.title}播放起点秒数"> 秒</label><label class="upload-label"><span id="audioLabel${i}">选择音频</span><input type="file" accept="audio/*,.mp3,.m4a,.flac,.wav,.ogg,.aac,.opus,.ncm" data-upload="${i}" aria-label="导入${s.title}音频"></label><button class="remove-audio" data-remove-audio="${i}" aria-label="移除${s.title}音频" disabled>移除</button></div>`).join('');
async function importFiles(event){
 const files=Array.from(event.target.files);event.target.value='';let matched=0,encrypted=0;$('#audioImportNotice').hidden=true;
 for(const file of files){
  if(/\.(ncm|uc|uc!)$/i.test(file.name)){encrypted++;continue;}
  const name=normalize(file.name);
  const i=songs.findIndex(s=>[s.title,...(s.aliases||[])].some(t=>name.includes(normalize(t))));
  if(i>=0&&await assignFile(i,file))matched++;
 }
 if(encrypted)showAudioFormatNotice(`选到了 ${encrypted} 个网易云加密文件（NCM）。这些文件没有被导入，也不能在网页中直接播放。请使用音乐平台提供的 MP3、M4A、FLAC 等普通音频。`);
 if(matched)toast(`已准备 ${matched} 首音乐，现在可以直接在网页里播放。${encrypted?'加密文件无法导入。':''}`);
 else toast(encrypted?'选中的网易云加密文件无法在网页播放，需要 MP3、M4A、FLAC 等普通音频。':'没有匹配到歌名，请按歌名命名文件，或逐首选择。');
}
$('#bulkAudio').addEventListener('change',importFiles);
$('#audioFolder').addEventListener('change',importFiles);
$('#prepareDialog').addEventListener('close',()=>stopPlayback());
$('#prepareDialog').addEventListener('cancel',()=>stopPlayback());
$('#quizAudio').addEventListener('loadedmetadata',()=>{
 const offset=audioOffsets[round]||0;
 if(offset>0)audio.currentTime=Math.min(offset,Math.max(0,audio.duration-0.1));
 updatePlaybackUI();
});
['timeupdate','durationchange','seeked'].forEach(event=>audio.addEventListener(event,updatePlaybackUI));
audio.addEventListener('ended',()=>{playing=false;loading=false;updatePlaybackUI();});
audio.addEventListener('pause',()=>{playing=false;updatePlaybackUI();});
audio.addEventListener('error',()=>{
 if(!audio.getAttribute('src'))return;
 loading=false;playing=false;updatePlaybackUI();
 if($('[data-audio-status]'))$('[data-audio-status]').textContent='音频无法解码，请更换普通音频文件';
});
async function saveOffset(target){
 const i=Number(target.dataset.offset),value=Math.max(0,Number(target.value)||0);
 audioOffsets[i]=value;
 if(i===round&&audioFiles[i]&&Number.isFinite(audio.duration))audio.currentTime=Math.min(value,Math.max(0,audio.duration-0.1));
 const old=audioRecords.get(i);
 if(old){
  const record={...old,offset:value};audioRecords.set(i,record);
  try{await AudioLibrary.save(record);}
  catch(error){savedTracks.delete(i);toast('播放起点本次生效，但未能保存到浏览器。');}
  updateLibraryUI();
 }
}
document.addEventListener('input',event=>{
 if(event.target.matches('[data-seek]')&&Number.isFinite(audio.duration))audio.currentTime=Number(event.target.value);
 if(event.target.matches('[data-offset]'))saveOffset(event.target);
});
document.addEventListener('change',async event=>{
 if(event.target.matches('[data-upload]')){const file=event.target.files[0];event.target.value='';if(file)await assignFile(Number(event.target.dataset.upload),file);}
 if(event.target.matches('[data-offset]'))saveOffset(event.target);
});
async function removeAudio(index){
 try{await AudioLibrary.remove(songs[index].url);}catch(error){toast('暂时无法更新保存的音乐，请稍后重试。');return;}
 stopPlayback();
 if(audioFiles[index])URL.revokeObjectURL(audioFiles[index]);
 delete audioFiles[index];delete audioOffsets[index];audioRecords.delete(index);savedTracks.delete(index);
 updateLibraryUI();renderGame();toast('已移除此浏览器中的音频，电脑里的原文件保留。');
}
async function restoreAudioLibrary(){
 try{
  const records=await AudioLibrary.all();
  records.forEach(record=>{
   const i=songs.findIndex(song=>song.url===record.key);
   if(i<0||audioFiles[i]||!(record.blob instanceof Blob))return;
   audioFiles[i]=URL.createObjectURL(record.blob);audioOffsets[i]=Math.max(0,Number(record.offset)||0);
   audioRecords.set(i,record);savedTracks.add(i);
  });
  updateLibraryUI();renderGame();
 }catch(error){$('#libraryNotice').textContent='浏览器未开放音乐保存；本次导入后可以播放，关闭后需要重新选择。';}
}
async function fullscreen(){try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch(e){toast('请使用浏览器菜单进入全屏。');}}
$('#chapterList').innerHTML=chapters.map(([id,name],i)=>`<a href="#${id}"><span>${pad(i+1)}</span><b>${name}</b><i>↗</i></a>`).join('');
$('#prepareButton').onclick=()=>$('#prepareDialog').showModal();$('#outlineButton').onclick=()=>$('#outlineDialog').showModal();$('#fullscreenButton').onclick=fullscreen;
document.addEventListener('click',e=>{const t=e.target.closest('button,a');if(!t)return;
 if(t.matches('[data-play]'))playClip();if(t.matches('[data-replay]')){if(audioFiles[round]){prepareCurrentAudio();audio.currentTime=audioOffsets[round]||0;if(!playing)playClip();}}if(t.matches('[data-reveal]'))revealAnswer();if(t.matches('[data-next]'))setRound(round+1);if(t.matches('[data-prev]'))setRound(round-1);if(t.matches('[data-round]'))setRound(Number(t.dataset.round));if(t.matches('[data-reset-round]')){revealed.delete(round);stopPlayback(true);renderGame();}
 if(t.matches('[data-score]')){const [i,d]=t.dataset.score.split(',').map(Number);scores[i]=Math.max(0,scores[i]+d);$(`[data-team="${i}"]`).textContent=scores[i];}
 if(t.matches('[data-remove-audio]'))removeAudio(Number(t.dataset.removeAudio));
 if(t.matches('[data-prepare]'))$('#prepareDialog').showModal();
 if(t.matches('[data-close]'))document.getElementById(t.dataset.close).close();
 if(t.matches('[data-mask]')){$('.mask-answer').hidden=false;t.hidden=true;}
 if(t.matches('#chapterList a'))$('#outlineDialog').close();
});
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.repeat||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||document.querySelector('dialog[open]'))return;const key=e.key.toLowerCase();if(!$('#blackout').hidden){if(key==='b'||key==='escape')$('#blackout').hidden=true;return;}if(key==='f')fullscreen();if(key==='o')$('#outlineDialog').showModal();if(key==='r'&&activeSection==='guess')revealAnswer();if(key==='b'){stopPlayback();$('#blackout').hidden=false;}});
addEventListener('beforeunload',()=>{stopPlayback();Object.values(audioFiles).forEach(u=>URL.revokeObjectURL(u));});
renderGame();
restoreAudioLibrary();
