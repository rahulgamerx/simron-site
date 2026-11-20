const lines = [
  ["A", "🔥"], ["An", "💗"], ["Ana", "🌸"], ["Anay", "🫶"], ["Simron", "✨"],
  ["Simron", "🥺"], ["Simron I", "❤️"], ["Simron I I", "💕"], ["Simron I lo", "🥰"],
  ["Simron I lov", "😭"], ["Simron I love", "💋"], ["Simron I love y", "🌙"],
  ["Simron I love yo", "🫶"], ["Simron I love you", "❤️"], ["Simron I love you s", "😘"],
  ["Simron I love you so", "🥹"], ["Simron I love you soo", "💗"],
  ["Simron I love you sooo", "😭"], ["Simron I love you soooo", "🫂"],
  ["Simron I love you sooooo much", "💌❤️"]
];
const startBtn=document.getElementById('startBtn'), letter=document.getElementById('letter'), progress=document.getElementById('progress'), final=document.getElementById('final'), again=document.getElementById('againBtn');
let timer;
function start(){
  clearTimeout(timer);progress.innerHTML='';final.classList.remove('show');final.style.display='none';
  letter.classList.add('show');startBtn.style.display='none';
  lines.forEach((item,i)=>{const div=document.createElement('div');div.className='line';div.style.animationDelay=(i*.38)+'s';div.innerHTML=`${item[0]} <span class="emoji">${item[1]}</span>`;progress.appendChild(div)});
  timer=setTimeout(()=>{final.classList.add('show');final.style.display='block';burst()},lines.length*380+800);
}
function burst(){for(let i=0;i<24;i++){const h=document.createElement('span');h.textContent=['💗','✨','🌸'][Math.floor(Math.random()*3)];h.style.cssText=`position:fixed;left:${Math.random()*100}vw;bottom:-30px;font-size:${14+Math.random()*18}px;z-index:10;pointer-events:none;animation:floatup ${2+Math.random()*2}s ease-out forwards`;document.body.appendChild(h);setTimeout(()=>h.remove(),4200)}}
const style=document.createElement('style');style.textContent='@keyframes floatup{to{transform:translateY(-110vh) rotate(360deg);opacity:0}}';document.head.appendChild(style);
startBtn.addEventListener('click',start);again.addEventListener('click',start);
const stars=document.getElementById('stars');for(let i=0;i<55;i++){const s=document.createElement('span');s.className='star';s.textContent='✦';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.fontSize=(5+Math.random()*8)+'px';s.style.animationDelay=Math.random()*3+'s';stars.appendChild(s)}
