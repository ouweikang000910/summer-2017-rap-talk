// Official previews are streamed on artist pages, never added to the quiz library.
const ArtistAudio = (() => {
 const player = document.getElementById('artistAudio');
 let active = null, generation = 0, loading = false, blocked = false, failed = false;
 let resumeWhenVisible = false, enabled = true, wasBlackedOut = false;
 try { enabled = localStorage.getItem('summer2017-artist-sound') !== 'off'; } catch (_) {}
 player.volume = 0.38;

 function markup(artist, index) {
  if (!artist.preview) return '';
  const preview = artist.preview;
  return `<div class="artist-preview" data-artist-preview="${index}">
   <div class="artist-preview-main"><span class="preview-note" aria-hidden="true">♫</span><div class="preview-copy"><b>${esc(preview.title)}</b><span data-preview-status>官方试听 · 切换人物自动换歌</span></div><button data-artist-sound="${index}" aria-label="开启${esc(artist.cn)}歌曲试听" aria-pressed="false">开启声音</button></div>
   <div class="preview-source"><a class="itunes-badge" href="${esc(preview.storeUrl)}" target="_blank" rel="noopener noreferrer" aria-label="在 iTunes 查看${esc(preview.title)}"><img src="assets/itunes-store-badge.svg" alt="Buy on iTunes Store" width="96" height="32"></a><small>provided courtesy of iTunes<br>官方试听片段</small></div>
  </div>`;
 }

 function update() {
  document.querySelectorAll('[data-artist-preview]').forEach(panel => {
   const index = Number(panel.dataset.artistPreview), current = index === active;
   const isPlaying = current && !player.paused && !player.ended;
   const button = panel.querySelector('[data-artist-sound]');
   let status = '官方试听 · 切换人物自动换歌', action = '开启声音';
   if (!enabled) status = '人物音乐已关闭';
   else if (current) {
    if (failed) { status = '试听暂时无法载入，点击重试'; action = '重试播放'; }
    else if (blocked) status = '点击开启声音，之后翻页自动试听';
    else if (loading) { status = '正在载入官方试听…'; action = '停止等待'; }
    else if (isPlaying) { status = '正在试听 · '+formatTime(player.currentTime)+' / '+formatTime(player.duration); action = '关闭声音'; }
    else if (player.ended) { status = '试听结束 · 切换人物自动换歌'; action = '再听一次'; }
    else { status = '官方试听已暂停'; action = '播放试听'; }
   }
   panel.querySelector('[data-preview-status]').textContent = status;
   button.textContent = action;
   button.setAttribute('aria-label',action+' · '+artists[index].cn);
   button.setAttribute('aria-pressed',String(isPlaying));
   panel.classList.toggle('preview-playing',isPlaying);
  });
 }

 function stop() {
  generation++;
  loading = false; blocked = false; failed = false; resumeWhenVisible = false;
  player.pause(); player.removeAttribute('src'); player.load(); active = null;
  update();
 }

 async function start() {
  if (active === null || !enabled || !artists[active]?.preview || loading) return;
  if (!player.paused && !player.ended) return;
  if (!document.getElementById('blackout').hidden || document.querySelector('dialog[open]')) return;
  if (document.hidden) { resumeWhenVisible = true; return; }
  const preview = artists[active].preview, token = ++generation;
  if (player.getAttribute('src') !== preview.src) player.src = preview.src;
  else if (player.ended) player.currentTime = 0;
  loading = true; blocked = false; failed = false; update();
  try {
   await player.play();
   if (token !== generation) return;
   loading = false; update();
  } catch (error) {
   if (token !== generation) return;
   loading = false;
   blocked = error.name === 'NotAllowedError';
   failed = !blocked;
   update();
  }
 }

 function enter(index) {
  stop();
  if (index === null || !artists[index]?.preview) return;
  active = index; update();
  if (enabled) start();
 }

 function suspend() {
  generation++; loading = false; player.pause(); update();
 }

 function setEnabled(value) {
  enabled = value;
  try { localStorage.setItem('summer2017-artist-sound',value?'on':'off'); } catch (_) {}
  if (enabled) start();
  else { resumeWhenVisible = false; suspend(); }
  update();
 }

 document.addEventListener('click',event => {
  const toggle = event.target.closest('[data-artist-sound]');
  if (toggle) {
   const index = Number(toggle.dataset.artistSound);
   if (active !== index) { stop(); active = index; }
   setEnabled(!(enabled && (loading || !player.paused && !player.ended)));
  }
  if (event.target.closest('#prepareButton,[data-prepare],#outlineButton')) suspend();
 });

 ['timeupdate','playing','pause','ended','loadedmetadata'].forEach(event => player.addEventListener(event,update));
 player.addEventListener('error',() => {
  if (active === null || !player.getAttribute('src')) return;
  loading = false; failed = true; update();
 });
 document.addEventListener('visibilitychange',() => {
  if (document.hidden) {
   const resume = enabled && active !== null && (loading || !player.paused);
   suspend(); resumeWhenVisible = resume;
  } else if (resumeWhenVisible && enabled && active !== null) {
   resumeWhenVisible = false; start();
  }
 });
 document.querySelectorAll('dialog').forEach(dialog => dialog.addEventListener('close',() => {
  if (active !== null && enabled) start();
 }));
 document.addEventListener('keydown',event => {
  if (event.ctrlKey || event.metaKey || event.altKey || event.repeat || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || document.querySelector('dialog[open]')) return;
  if (event.key.toLowerCase() === 'b' || event.key === 'Escape') {
   if (!document.getElementById('blackout').hidden) { wasBlackedOut = true; suspend(); }
   else if (wasBlackedOut) { wasBlackedOut = false; if (active !== null && enabled) start(); }
  }
 });
 addEventListener('beforeunload',stop);
 return {markup,enter,stop,suspend};
})();
