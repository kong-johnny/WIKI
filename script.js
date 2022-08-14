const toggle = document.getElementById('menu')
const nav = document.getElementById('btn-menu')
// const text = $('.text')
const logo = document.getElementById('logo')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
var pop = 0;
var timeoutID;
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// nav.addEventListener('click', () => toggle.classList.toggle('is-in'))
// toggle.addEventListener('click', () => nav.classList.toggle('active'))
nav.addEventListener('click', ()=>{
    
    
    toggle.classList.toggle('is-in');
    // setTimeout(() => toggle.classList.toggle('poping'), 2500);
    var mr = 0;
    toggle.classList.toggle('poping');
    var text = $('.text');
    text.each(function(index, item){
      var r = getRandomArbitrary(900, 1900);  // text类链接字符（即home等导航栏链接）进场延迟
      if(pop) r = 0;
      mr = Math.max(mr, r);
      // item.classList.toggle("is-in");
      timeoutID = window.setTimeout(function(){
        item.classList.toggle("is-in");
      }, r);
    });
    timeoutID = window.setTimeout(function(){
      logo.classList.toggle('is-in');
    }, mr+150);  // logo 变换延迟时间为Max_r+150
    
    pop ^= 1;
    // for(var i = 0; i < texts.length; i ++){
    //   var r = Math.random() % 5;
    //   // var r = Math.random() % 5 / 10.0;
    //   texts[i].setTimeout(function(){
    //     this.classList.toggle("is-in");
    //   })
    // }
})

const texts = document.querySelectorAll('.text')
texts.forEach(text => {
  text.innerHTML = text.innerText
        .split('')
        .map((letter, idx) => `<span class="letter" style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
function animate2(ele,target) {
    clearInterval(ele.timer); //清楚历史定时器
    ele.timer = setInterval(function () {
      //获取步长 确定移动方向(正负值) 步长应该是越来越小的，缓动的算法。
      var step = (target-ele.offsetLeft)/10;
      //对步长进行二次加工(大于0向上取整,小于0项下取整)
      step = step>0?Math.ceil(step):Math.floor(step);
      //动画原理： 目标位置 = 当前位置 + 步长
      console.log(step);
      ele.style.left = ele.offsetLeft + step + "px";
      //检测缓动动画有没有停止
      if(Math.abs(target-ele.offsetLeft)<=Math.abs(step)){
        ele.style.left = target + "px"; //直接移动指定位置
        clearInterval(ele.timer);
      }
    },30);
}

nav.addEventListener('click', e => {
  const x = e.clientX;
  const y = e.clientY;

  const btop = e.target.offsetTop;
  const bleft = e.target.offsetLeft;

  const l = x - bleft;
  const r = y - btop;

  const circle = document.createElement('span');
  circle.className = 'circle';
  circle.style.top = r + 'px';
  circle.style.left = l + 'px';
  nav.appendChild(circle);
  setTimeout(() => circle.remove(), 500)
})