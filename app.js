const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const chapters = [
 ['summer','那个夏天'],['mentors','导师阵容'],['rappers','那些声音'],['guess','听歌猜歌名'],
 ['new-2018','2018 · 新的面孔'],['hits-2018','2018 · 留下的歌'],['new-2019','2019 · 冠军与作品'],['new-2020','2020 · 李佳隆'],['peak-2022','2022 · 巅峰重逢'],['closing','夏天还在歌里']
];
const label = (n,t) => `<div class="eyebrow"><i></i> ${String(n).padStart(2,'0')} / ${t}</div>`;
const vinyl = () => '<div class="vinyl" aria-hidden="true"><div class="vinyl-label"><b>2017</b><small>REWIND<br>THE SUMMER</small></div></div>';
const wave = () => `<div class="wave" aria-hidden="true">${Array.from({length:36},(_,i)=>`<i style="--h:${20+(i*37)%80}%;--d:${i*.035}s"></i>`).join('')}</div>`;
const artistDescriptions = artists.map(a=>a.description);
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
  <div class="mentor-list">
   <article class="reveal"><div class="mentor-photo mentor-kris"><img src="assets/mentor-kriswu.jpg" alt="吴亦凡在2017年中国有嘻哈录制现场" loading="lazy" width="690" height="460"><span class="mentor-number">01</span></div><h3>吴亦凡</h3><small>KRIS WU</small><p>当年的流量与话题</p><blockquote>“你有Freestyle吗？”</blockquote></article>
   <article class="reveal"><div class="mentor-photo mentor-pan"><img src="assets/mentor-willpan.jpg" alt="潘玮柏在2017年中国有嘻哈录制现场" loading="lazy" width="690" height="460"><span class="mentor-number">02</span></div><h3>潘玮柏</h3><small>WILL PAN</small><p>熟悉的流行音乐面孔</p><blockquote>从《快乐崇拜》到说唱舞台</blockquote></article>
   <article class="reveal"><div class="mentor-photo mentor-duo"><figure><img src="assets/mentor-ayue.jpg" alt="张震岳在2017年中国有嘻哈录制现场" loading="lazy" width="690" height="1034"><figcaption>张震岳</figcaption></figure><figure><img src="assets/mentor-hotdog.jpg" alt="MC HotDog 热狗在2017年中国有嘻哈录制现场" loading="lazy" width="690" height="999"><figcaption>MC HotDog</figcaption></figure><span class="mentor-number">03</span></div><h3>张震岳 <i>&</i><br>MC HotDog 热狗</h3><small>AYAL KOMOD & MC HOTDOG</small><p>音乐创作与说唱经验</p><blockquote>两位音乐人，一个组合</blockquote></article>
  </div>
 </section>
 <section id="rappers" class="rappers story-section"><div class="wrap">
  <div class="section-heading reveal">${label(3,'那年夏天，我们认识了')}<h2>名字不同，<br><em>声音都很鲜明。</em></h2><p>不用记住他们的生平。<br>先记住一种声音，再慢慢认识一个人。</p></div>
  <div class="artist-gallery">${artists.map((a,i)=>`<article class="artist-card reveal"><div class="artist-photo"><img src="assets/${a.image}" alt="${esc(a.cn)}人物照片" loading="lazy" style="object-position:${a.position}"><span>${a.number} / 06</span><b>${a.name}</b></div><div class="artist-info"><h3>${a.cn}</h3><p>${artistDescriptions[i]}</p><div class="tags">${a.tags.slice(0,2).map(t=>`<span>${t}</span>`).join('')}</div><div class="artist-track"><span>♫</span><small>${a.song}</small></div></div></article>`).join('')}</div>
  <p class="gallery-question reveal">你会用哪个词，形容你最喜欢的那个声音？ <span>↗</span></p>
 </div></section>
 <section id="guess" class="guess story-section"><div class="grid-texture" aria-hidden="true"></div><div class="wrap">
  <div class="guess-heading reveal">${label(4,'把舞台交给大家')}<h2>先别讲了，<em>来听歌！</em></h2><p>15道题，从耳熟能详到进阶挑战。<br>听到熟悉的旋律，就说出歌名和歌手。</p><div class="game-rule"><b>15 <small>题</small></b><span></span><b>随时 <small>播放 / 暂停</small></b><span></span><b>一起 <small>听歌猜歌</small></b></div></div>
  <div class="game-console reveal"><div class="game-top"><span>LISTEN & GUESS</span><span id="gameProgress">01 / 15</span><button data-prepare class="text-button">音乐设置 ↗</button></div><div id="gameRound"></div><div class="game-bottom"><div class="question-selector" id="questionSelector" aria-label="选择猜歌题目"></div></div></div>
  <div class="game-end"><span>从2017年的声音，听到后来新的作品。</span><a href="#new-2018">下一页，听听2018之后 →</a></div>
 </div></section>
 <section id="new-2018" class="sequel-slide sequel-intro story-section" data-title="2018 · 新的面孔">
  <div class="sequel-copy">${label(5,'2018 / 中国新说唱')}<div class="sequel-year">2018<span>THE NEXT SUMMER</span></div><h2>新的夏天，<br><em>新的面孔。</em></h2><p class="sequel-lead">《中国新说唱》来了。<br>艾热、王以太、那吾克热、ICE……<br>更多名字，开始出现在我们的歌单里。</p><div class="comeback-story"><b>艾热的这一年</b><ol><li>暂别舞台</li><li>复活赛一挑五</li><li>年度冠军</li></ol></div></div>
  <figure class="sequel-figure finalists-photo"><span class="sequel-photo-tag">THE RAP OF CHINA / 2018</span><img src="assets/sequel-finalists-2018.png" alt="2018中国新说唱四强：ICE、艾热、刘柏辛、那吾克热" width="415" height="385" loading="lazy"><figcaption>2018四强：ICE · 艾热 · 刘柏辛 · 那吾克热</figcaption></figure>
 </section>
 <section id="hits-2018" class="sequel-slide sequel-hits story-section" data-title="2018 · 留下的歌">
  <div class="sequel-heading">${label(6,'2018 / 从舞台到歌单')}<h2>你没追节目，<br><em>也可能听过。</em></h2><p>那一年的舞台，留下了这两首熟悉的歌。</p></div>
  <div class="hit-records"><article class="hit-record star-record"><div class="record-art" aria-hidden="true">${vinyl().replace('2017','2018')}<span>01 / STAR FALLING</span></div><div class="record-copy"><small>艾热 AIR × 李佳隆</small><h3>星球坠落</h3><p>说唱、旋律，两种声音碰在一起。<br>刚才第10题，就是这首歌。</p><span class="record-year">中国新说唱 · 2018</span></div></article><article class="hit-record eyes-record"><div class="record-art" aria-hidden="true">${vinyl().replace('2017','2018')}<span>02 / ALL EYES ON YOU</span></div><div class="record-copy"><small>王以太</small><h3>目不转睛</h3><p>记住那个好听的副歌，<br>也记住了王以太的声音。</p><span class="record-year">中国新说唱 · 2018</span></div></article></div>

 </section>
 <section id="new-2019" class="sequel-slide sequel-voices story-section" data-title="2019 · 冠军与作品">
  <figure class="sequel-figure keyng-photo"><span class="sequel-photo-tag">KEYNG / 杨和苏</span><img src="assets/sequel-keyng-2019.jpg" alt="杨和苏在2019中国新说唱总决赛演唱命不由天" width="2784" height="1856" loading="lazy"><figcaption>杨和苏 · 2019总决赛《命不由天》舞台</figcaption></figure>
  <div class="sequel-copy">${label(7,'2019 / 中国新说唱')}<div class="sequel-year">2019<span>THE VOICES WE REMEMBER</span></div><h2>冠军之外，<br><em>还有被记住的歌。</em></h2><div class="voice-stories"><article><span>01 / 年度冠军</span><h3>杨和苏</h3><p>总决赛唱响《命不由天》，<br>拿下这一年的冠军。</p></article><article><span>02 / 一首写给自己的歌</span><h3>刘聪 · Hey KONG</h3><p>和过去的自己说说话。<br>刚才第11题，你听见的就是他的声音。</p></article></div></div>
 </section>
 <section id="new-2020" class="sequel-slide sequel-return story-section" data-title="2020 · 李佳隆">
  <div class="sequel-copy">${label(8,'2020 / 中国新说唱')}<div class="sequel-year">2020<span>JELLORIO / 李佳隆</span></div><h2>从《星球坠落》，<br><em>走到冠军。</em></h2><p class="sequel-lead">2018年，和艾热一起唱《星球坠落》。<br>2020年，再次参赛的李佳隆拿下年度冠军。</p><div class="return-journey"><div><span>2018</span><b>一首合作曲</b><small>艾热 × 李佳隆</small></div><i aria-hidden="true">→</i><div><span>2020</span><b>年度总冠军</b><small>中国新说唱</small></div></div></div>
  <figure class="sequel-figure champion-poster"><img src="assets/sequel-jellorio-2020.jpg" alt="爱奇艺发布的2020中国新说唱年度冠军李佳隆海报" width="2160" height="3840" loading="lazy"><figcaption>李佳隆 · 2020年度冠军官方海报</figcaption></figure>
 </section>
 <section id="peak-2022" class="sequel-slide sequel-peak story-section" data-title="2022 · 巅峰重逢">
  <div class="peak-top"><div class="sequel-copy">${label(9,'2022 / 中国说唱巅峰对决')}<div class="sequel-year">2022<span>BACK ON THE SAME STAGE</span></div><h2>熟悉的名字，<br><em>站上同一个舞台。</em></h2><p class="sequel-lead">GAI、艾热、杨和苏、李佳隆、早安……<br>来自不同届节目的说唱歌手，组队再战。</p></div><figure class="sequel-figure peak-photo"><img src="assets/sequel-peak-2022.jpg" alt="2022中国说唱巅峰对决全体说唱歌手官方集结海报" width="1013" height="569" loading="lazy"><figcaption>《中国说唱巅峰对决》2022官方集结海报</figcaption></figure></div>
  <div class="peak-tracks"><article><span>01 / 早安</span><h3>麒麟</h3><small>刚才的第09题</small></article><article><span>02 / 盛宇 · 刘聪 · ICE</span><h3>隆里电丝</h3><small>刚才的第08题</small></article><article><span>03 / 杨和苏 · 早安 · 王以太</span><h3>一席之地</h3><small>一起为团队而战</small></article></div>
 </section>
 <section id="closing" class="closing story-section"><div class="closing-year" aria-hidden="true">2017</div><div class="wrap reveal">${label(10,'从2017，到后来的夏天')}<h2>有些夏天，<br>会一直<em>在歌里。</em></h2><p>从2017的第一次见面，到后来一次次重逢。<br>谢谢大家，和我一起听到这里。</p><span class="closing-thanks">THANK YOU <i>✳</i></span></div></section>`;

let round=0, revealed=new Set(), audioFiles={}, audioOffsets={};
let audio=$('#quizAudio'), playing=false, loading=false, generation=0, hasStarted=false, clipFinished=false;
let activeSection='home';
const audioRecords=new Map(), savedTracks=new Set();
const trackSource=index=>audioFiles[index]||songs[index].audio?.src||'';
const hasTrack=index=>Boolean(trackSource(index));
const clipStart=()=>audioFiles[round]?audioOffsets[round]||0:(songs[round].audio?.offset||audioOffsets[round]||0);
const clipLength=()=>!audioFiles[round]&&songs[round].audio?.clipSeconds||0;
const clipDuration=()=>clipLength()|| (Number.isFinite(audio.duration)?audio.duration:0);
const pad=n=>String(n).padStart(2,'0');
const formatTime=n=>Number.isFinite(n)?`${Math.floor(n/60)}:${pad(Math.floor(n%60))}`:'0:00';
const normalize=s=>s.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff]/g,'');
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('visible');clearTimeout(toast.timeout);toast.timeout=setTimeout(()=>el.classList.remove('visible'),4500);}
function updatePlaybackUI(){
 const button=$('[data-play]');
 if(button){button.textContent=loading?'准备播放…':playing?'Ⅱ 暂停播放':hasStarted&&!audio.ended&&!clipFinished?'▶ 继续播放':'▶ 开始播放';button.setAttribute('aria-pressed',String(playing));}
 $('#gameRound').classList.toggle('is-playing',playing);
 const duration=clipDuration();
 const elapsed=clipLength()?Math.max(0,Math.min(duration,audio.currentTime-clipStart())):audio.currentTime;
 const seek=$('[data-seek]');
 if(seek){seek.disabled=!trackSource(round)||!duration||audio.readyState<1;seek.max=String(duration||1);seek.value=String(elapsed||0);}
 if($('[data-elapsed]'))$('[data-elapsed]').textContent=formatTime(elapsed);
 if($('[data-duration]'))$('[data-duration]').textContent=formatTime(duration);
 const status=$('[data-audio-status]');
 if(status)status.textContent=loading?'正在载入音频…':playing?'正在本页播放':audio.error?'在线音源暂时无法载入 · 点击重试':audioFiles[round]?(savedTracks.has(round)?'音频已保存 · 刷新后仍可播放':'本地音频已就绪'):songs[round].audio?'在线音源已就绪 · 点击开始播放':'本题暂缺可播放音源';
}
function prepareCurrentAudio(){
 const source=trackSource(round);
 if(source&&audio.getAttribute('src')!==source){
  audio.src=source;
  audio.load();
  if(clipStart())audio.currentTime=clipStart();
 }
}
function renderGame(){
 const s=songs[round],isRevealed=revealed.has(round);
 $('#gameProgress').textContent=`${pad(round+1)} / 15`;
 $('#gameRound').innerHTML=`<div class="game-disc">${vinyl()}<div class="round-number"><span>ROUND</span><b>${pad(round+1)}</b></div></div><div class="game-content"><div class="round-meta"><span>${s.group}题</span><span class="difficulty" aria-label="难度${s.difficulty}星">${'★'.repeat(s.difficulty)}${'☆'.repeat(4-s.difficulty)}</span></div><div class="question-copy" ${isRevealed?'hidden':''}><h3>这首歌，<br><em>你听出来了吗？</em></h3><p>听到熟悉的旋律，就举手抢答。</p></div><div class="answer-copy" ${isRevealed?'':'hidden'}><span>ANSWER / 答案揭晓</span><h3>《${s.title}》</h3><b>${s.artist}</b><p>${s.hint}</p>${!audioFiles[round]&&s.audio?`<small class="quiz-source">${esc(s.audio.provider)} · ${esc(s.audio.version)}</small>`:''}</div>${wave()}<div class="playback-controls"><button class="button primary" data-play aria-pressed="false">▶ 开始播放</button><button class="button secondary" data-reveal ${isRevealed?'disabled':''}>揭晓答案 <kbd>R</kbd></button><button class="replay-button" data-replay aria-label="从设定起点重新播放" title="重新播放" ${hasTrack(round)?'':'disabled'}>↺</button></div><div class="audio-transport"><span data-elapsed>0:00</span><input type="range" data-seek min="0" max="1" value="0" step="0.1" aria-label="歌曲播放进度" disabled><span data-duration>0:00</span></div><div class="audio-status"><span data-audio-status></span><button data-prepare class="audio-prepare">${hasTrack(round)?'音源设置':'准备音频'}</button></div><div class="round-navigation"><button data-prev ${round===0?'disabled':''}>← 上一题</button>${isRevealed?'<button data-reset-round>再猜一次</button>':'<span>猜歌名 · 猜歌手</span>'}<button data-next ${round===songs.length-1?'disabled':''}>下一题 →</button></div></div>`;
 $('#questionSelector').innerHTML=songs.map((s,i)=>`<button data-round="${i}" aria-label="第${i+1}题" aria-pressed="${i===round}" class="${i===round?'selected':''} ${revealed.has(i)?'answered':''}">${pad(i+1)}</button>`).join('');
 $('#gameRound').classList.toggle('revealed',isRevealed);
 prepareCurrentAudio();updatePlaybackUI();
}
function stopPlayback(){
 generation++;playing=false;loading=false;hasStarted=false;clipFinished=false;
 audio.pause();audio.removeAttribute('src');audio.load();
 updatePlaybackUI();
}
function setRound(index){if(index<0||index>=songs.length)return;stopPlayback();round=index;renderGame();}
function revealAnswer(){stopPlayback();revealed.add(round);renderGame();}
async function playClip(){
 if(loading){stopPlayback();return;}
 if(playing){audio.pause();playing=false;updatePlaybackUI();return;}
 if(!trackSource(round)){
  toast('这首暂未找到可用的公开音源，可在音乐准备中添加普通音频文件。');
  $('#prepareDialog').showModal();return;
 }
 prepareCurrentAudio();
 if(audio.ended||clipFinished){audio.currentTime=clipStart();clipFinished=false;}
 const token=++generation;loading=true;updatePlaybackUI();
 try{
  await audio.play();
  if(token!==generation)return;
  loading=false;playing=!audio.paused;hasStarted=true;updatePlaybackUI();
 }catch(error){
  if(token!==generation)return;
  loading=false;playing=false;updatePlaybackUI();
  toast(audioFiles[round]?'这个文件无法播放，请更换普通音频文件。':'在线音源暂时无法载入，请重试或在音源设置中添加本地音频。');
 }
}
function updateLibraryUI(){
 songs.forEach((s,i)=>{
  const label=$(`#audioLabel${i}`), state=$(`#audioState${i}`);
  if(label){label.textContent=audioFiles[i]?'更换音频':'选择音频';label.title=audioRecords.get(i)?.name||'';}
  if(state)state.textContent=audioFiles[i]?(savedTracks.has(i)?`✓ 本地已保存${audioOffsets[i]?' · 起点 '+audioOffsets[i]+' 秒':''}`:'✓ 本地音频'):s.audio?`✓ 在线 · ${s.audio.version}`:'暂未找到公开音源';
  const offset=$(`[data-offset="${i}"]`);if(offset){offset.value=audioOffsets[i]||0;offset.disabled=!audioFiles[i]&&Boolean(s.audio?.clipSeconds);}
  const remove=$(`[data-remove-audio="${i}"]`);if(remove)remove.disabled=!audioFiles[i];
 });
 $('#preparedCount').textContent=`${songs.filter((s,i)=>hasTrack(i)).length} / 15 已配置音源`;
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
 const offset=clipStart();
 if(offset>0)audio.currentTime=Math.min(offset,Math.max(0,audio.duration-0.1));
 updatePlaybackUI();
});
['timeupdate','durationchange','seeked'].forEach(event=>audio.addEventListener(event,()=>{
 if(clipLength()&&audio.currentTime>=clipStart()+clipLength()){audio.pause();clipFinished=true;playing=false;loading=false;}
 updatePlaybackUI();
}));
audio.addEventListener('ended',()=>{playing=false;loading=false;updatePlaybackUI();});
audio.addEventListener('pause',()=>{playing=false;updatePlaybackUI();});
audio.addEventListener('error',()=>{
 if(!audio.getAttribute('src'))return;
 loading=false;playing=false;updatePlaybackUI();
 if($('[data-audio-status]'))$('[data-audio-status]').textContent=audioFiles[round]?'音频无法解码，请更换普通音频文件':'在线音源暂不可用，请重试或添加本地音频';
});
async function saveOffset(target){
 const i=Number(target.dataset.offset),value=Math.max(0,Number(target.value)||0);
 audioOffsets[i]=value;
 if(i===round&&trackSource(i)&&Number.isFinite(audio.duration))audio.currentTime=Math.min(value,Math.max(0,audio.duration-0.1));
 const old=audioRecords.get(i);
 if(old){
  const record={...old,offset:value};audioRecords.set(i,record);
  try{await AudioLibrary.save(record);}
  catch(error){savedTracks.delete(i);toast('播放起点本次生效，但未能保存到浏览器。');}
  updateLibraryUI();
 }
}
document.addEventListener('input',event=>{
 if(event.target.matches('[data-seek]')&&Number.isFinite(audio.duration))audio.currentTime=Number(event.target.value)+(clipLength()?clipStart():0);
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
 updateLibraryUI();renderGame();toast(songs[index].audio?'已移除本地音频，恢复在线音源。':'已移除此浏览器中的音频，电脑里的原文件保留。');
}
async function restoreAudioLibrary(){
 try{
  const records=await AudioLibrary.all();
  records.forEach(record=>{
   const i=songs.findIndex(song=>song.url===record.key);
   if(i<0||audioFiles[i]||!(record.blob instanceof Blob)||/\.(ncm|uc|uc!)$/i.test(record.name||''))return;
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
 if(t.matches('[data-play]'))playClip();if(t.matches('[data-replay]')){if(trackSource(round)){prepareCurrentAudio();clipFinished=false;audio.currentTime=clipStart();if(!playing)playClip();}}if(t.matches('[data-reveal]'))revealAnswer();if(t.matches('[data-next]'))setRound(round+1);if(t.matches('[data-prev]'))setRound(round-1);if(t.matches('[data-round]'))setRound(Number(t.dataset.round));if(t.matches('[data-reset-round]')){revealed.delete(round);stopPlayback(true);renderGame();}
 if(t.matches('[data-remove-audio]'))removeAudio(Number(t.dataset.removeAudio));
 if(t.matches('[data-prepare]'))$('#prepareDialog').showModal();
 if(t.matches('[data-close]'))document.getElementById(t.dataset.close).close();
 if(t.matches('#chapterList a'))$('#outlineDialog').close();
});
document.addEventListener('keydown',e=>{if(e.ctrlKey||e.metaKey||e.altKey||e.repeat||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||document.querySelector('dialog[open]'))return;const key=e.key.toLowerCase();if(!$('#blackout').hidden){if(key==='b'||key==='escape')$('#blackout').hidden=true;return;}if(key==='f')fullscreen();if(key==='o')$('#outlineDialog').showModal();if(key==='r'&&activeSection==='guess')revealAnswer();if(key==='b'){stopPlayback();$('#blackout').hidden=false;}});
addEventListener('beforeunload',()=>{stopPlayback();Object.values(audioFiles).forEach(u=>URL.revokeObjectURL(u));});
renderGame();
updateLibraryUI();
restoreAudioLibrary();
