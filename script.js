/* ---------- EDIT HERE: your service catalogue ---------- */
/* Each entry: { name: "Service name", images: ["file1.jpg","file2.jpg", ...] } */
/* Add, remove, or reorder entries freely, and change how many photos a        */
/* service has — the layout and navigation adapt to whatever is here.         */
/* Put the actual photo files in the /images folder using these exact names.  */
/* A service is still safe to show before its photos arrive: any filename     */
/* that isn't found in /images simply falls back to a placeholder panel.      */
/* Welcome-page background photo. Put your picture in the images folder with this name (or change the name). If the file is missing, the welcome page stays plain white. */
const WELCOME_BG='images/welcome.jpg';
/* Loop the whole show forever (true) or stop on the closing screen (false). */
const LOOP=true;

const SERVICES_SEED = [
  { name: "Bohemian Body Curl Singles",            images: ["BBCS1.jpg","BBCS2.jpg","BBCS3.jpg"] },
  { name: "Bohemian Curls Hybrid",            images: ["BCH1.jpg","BCH2.jpg","BCH3.jpg"] },
  { name: "Boho Passion Twists",             images: ["BPT1.jpg","BPT2.jpg","BPT3.jpg"] },
  { name: "Bohemian Twists",           images: ["BTWIST1.jpg","BTWIST2.jpg","BTWIST3.jpg"] },
  { name: "Coco Twists",   images: ["coco1.jpg","coco2.jpg","coco3.jpg"] },
  { name: "Indie Curl Braids",     images: ["ICB1.jpeg","ICB2.jpeg","ICB3.jpeg"] },
  { name: "Knotless Jamaican Curl",         images: ["KJC1.jpg","KJC2.jpg"] },
  { name: "Knotless Braids with curls",     images: ["KNT1.jpg","KNT2.jpg","KNT3.jpg","KNT4.jpg"] },
  { name: "Pencil Braids",         images: ["KP1.jpg","KP2.jpg","KP3.jpg"] },
  { name: "Marley Braids",  images: ["MB1.jpg","MB2.jpg","MB3.jpg"] },
  { name: "Kora Twists",     images: ["KT1.jpg","KT2.jpg","KT3.jpg"] },
  { name: "Mini Knotless PonyTail Braids",     images: ["MKPTB1.jpg","MKPTB2.jpg","MKPTB3.jpg","MKPTB4.jpg"] },
  { name: "Nubi Ultra Braids",     images: ["NUBI_U1.jpg","NUBI_U2.jpg","NUBI_U3.jpg"] },
  { name: "Ombre Passion Twists",     images: ["OPT1.jpg","OPT2.jpg","OPT3.jpg"] },
  { name: "Premium Dreads 14 Inches",     images: ["PDBS1.png","PDBS2.png","PDBS3.png"] },
  { name: "Premium Dreads Big 18 Inches",     images: ["PDBL1.jpg","PDBL2.jpg","PDBL3.jpg"] },
  { name: "Invisible Twists",     images: ["precious1.jpg","precious2.jpg","precious3.jpg"] },
  { name: "Reverse / 3D Twists",     images: ["RT1.jpg","RT2.jpg","RT3.jpg","RT4.jpg"] },
  { name: "Samoa Braids",     images: ["SB1.jpg","SB2.jpg","SB3.jpg"] },
  { name: "Twists with Extensions",     images: ["TWISTE1.jpg","TWISTE2.jpg","TWISTE3.jpg","TWISTE4.jpg","TWISTE5.jpg","TWISTE6.jpg","TWISTE7.jpg","TWISTE8.jpg","TWISTE9.jpg"] },
  { name: "Zazzi Braids",     images: ["ZB1.jpg","ZB2.jpg","ZB3.jpg","ZB4.jpg","ZB5.jpg","ZB6.jpg"] },
  { name: "Afro Puffy Textured Curls",     images: ["Puffy1.jpg","Puffy2.jpg","Puffy3.jpg"] },
  { name: "Bohemian Body Curl",     images: ["BBCC1.jpg","BBCC2.jpg","BBCC3.jpg","BBCC4.jpg"] },
  { name: "Carribean Deep Wave",     images: ["CDW1.jpg","CDW2.jpg","CDW3.jpg"] },
  { name: "Island Curl",     images: ["IC1.jpeg","IC2.jpeg","IC3.jpeg"] },
  { name: "Jamaican Curls Long",     images: ["JCL1.jpg","JCL2.jpg","JCL3.jpg"] },
  { name: "Jamaican Curls Short",     images: ["JCS1.jpeg","JCS2.jpeg","JCS3.jpeg"] },
  { name: "Kinky Crochet Long",     images: ["KCL1.jpeg","KCL2.jpeg","KCL3.jpeg"] },
  { name: "Kinky Crochet Short",     images: ["KCS1.jpg","KCS2.jpg","KCS3.jpg","KCS4.jpg","KCS5.jpg","KCS6.jpg"] },
  { name: "Kinky Curl",     images: ["KC1.jpg","KC2.jpg","KC3.jpg"] },
  { name: "Kinky Curl Short",     images: ["KCC1.jpg","KCC2.jpg","KCC3.jpg"] },
  { name: "Marley Short",     images: ["MS1.jpg","MS2.jpeg","MS3.jpeg"] },
  { name: "Marley Long",     images: ["ML1.jpeg","ML2.jpeg"] },
  { name: "Mini Body Curl",     images: ["MBC1.jpg","MBC2.jpg","MBC3.jpg","MBC4.jpg"] },
  { name: "Mini Afro Bulk Premade",     images: ["MBP1.jpg","MBP2.jpg","MBP3.jpg","MBP4.jpg","MBP5.jpg","MBP6.jpg","MBP7.jpg"] },
  { name: "Mini Spring Twists",     images: ["MST1.jpg","MST2.jpg","MST3.jpeg"] },
  { name: "Morrocan Twists Long",     images: ["MTSL1.jpg","MTSL2.jpg","MTSL3.jpg","MTSL4.jpg","MTSL5.jpg","MTSL6.jpg"] },
  { name: "Morrocan Twists Short",     images: ["MTSS1.jpg","MTSS2.jpg","MTSS3.jpg","MTSS4.jpeg","MTSS5.jpeg","MTSS6.jpeg"] },
  { name: "Patwa Twists",     images: ["PT1.jpg","PT2.jpg","PT3.jpg","PT4.jpg","PT5.jpg","PT6.jpg","PT7.jpg","PT8.jpg","PT9.jpg","PT10.jpg","PT11.jpg","PT12.jpg"] },
  { name: "Sponge Coils",     images: ["SPONGE1.jpg","SPONGE2.jpg","SPONGE3.jpg"] },
  { name: "Spring Twists Afro Mohwak",     images: ["SPM1.jpg","SPM2.jpg"] },
  { name: "Waterwave",     images: ["WW1.jpeg","WW2.jpeg","WW3.jpeg"] },
  { name: "Yanky Twists",     images: ["YT1.jpg","YT2.jpg","YT3.jpg","YT4.jpg","YT5.jpg","YT6.jpg","YT7.jpg","YT8.jpg"] },
  { name: "Cornrows With Ponytail",     images: ["CWP1.jpg","CWP2.jpg","CWP3.jpg"] },
  { name: "Indie Butterfly Locs Kids",     images: ["IBLK1.jpg","IBLK2.jpg","IBLK3.jpg","IBLK4.jpg"] },
  { name: "Knotless Braids Kids",     images: ["KBK1.jpg","KBK2.jpg","KBK3.jpg","KBK4.jpg"] },
  { name: "Ombre Braids Kids",     images: ["OBK1.jpg","OBK2.jpg","OBK3.jpg","OBK4.jpg","OBK5.jpg"] },
  { name: "Spanish Braids Kids",     images: ["SPC1.jpg","SPC2.jpg","SPC3.jpg"] },
  { name: "Zanzi Braids Kids",     images: ["ZBK1.jpg","ZBK2.jpg","ZBK3.jpg","ZBK4.jpg"] },
  { name: "Boho Locs Long",     images: ["bohoL1.jpg","bohoL2.jpg","bohoL3.jpg","bohoL4.jpg"] },
  { name: "Boho Locs Short",     images: ["bohoS1.jpg","bohoS2.jpg"] },
  { name: "Butterfly Locs",     images: ["BL1.jpg","BL2.jpg","BL3.jpg"] },
  { name: "Distressed Locs",     images: ["DL1.jpg","DL2.jpg","DL3.jpg","DL4.jpg"] },
  { name: "Indie Butterfly Locs Adults",     images: ["IBL1.jpg","IBL2.jpg","IBL3.jpg","IBL4.jpg"] },
  { name: "Indie Goddess Locs",     images: ["IGL1.jpg","IGL2.jpg","IGL3.jpg"] },
  { name: "Urban Braids",     images: ["UB1.jpg","UB2.jpg","UB3.jpg"] },
  { name: "Goddess Locs",     images: ["GP1.jpg","GP2.jpg","GP3.jpg"] },
  { name: "Micro Locs",     images: ["ML1.jpg","ML2.jpg","ML3.jpg"] },
  { name: "Fluffy Locs",     images: ["FL1.jpg","FL2.jpg","FL3.jpg"] },
  { name: "Flex Rodset",     images: ["FR1.jpg","FR2.jpg"] },
  { name: "Perm Rodset",     images: ["PS1.jpg","PS2.jpg","PS3.jpg"] },
  { name: "Spiral Rodset",     images: ["SS1.jpg","SS2.jpg"] },
  { name: "Natural Spring Twists",     images: ["NST1.jpg","NST2.jpg","NST3.jpg"] },
  { name: "Micro Twists",     images: ["MT1.jpg","MT2.jpg","MT3.jpg"] },
  { name: "Styling",     images: ["S1.png","S3.png","S4.jpg","S5.jpg","S6.jpg","S7.png","S8.png","S9.jpg","S10.jpg","S11.jpg","S12.jpg","S13.jpg","S14.jpg"] },
  { name: "Bridal Styling",     images: ["B1.jpg","B2.jpg","B3.jpg","B4.jpg","B5.jpg","B6.jpg"] },
  { name: "Shingling",     images: ["SHIN1.png","SHIN2.png","SHIN3.png"] },
];
const SERVICES = SERVICES_SEED.slice();
/*for (let n = SERVICES.length + 1; n <= 63; n++) {
  SERVICES.push({ name: "Service " + n, images: ["img-1.jpg","img-2.jpg","img-3.jpg"] });
}
/* --------------------------------------------------------- */


const stage=document.getElementById('stage'),view=document.getElementById('view'),
svcLabel=document.getElementById('svcLabel'),phaseLabel=document.getElementById('phaseLabel'),playBtn=document.getElementById('play');
const TIMELINE=[{type:'intro'}],serviceStart=[];
SERVICES.forEach((svc,s)=>{serviceStart[s]=TIMELINE.length;TIMELINE.push({type:'service',s,f:null});svc.images.forEach((_,f)=>TIMELINE.push({type:'service',s,f}));});
const CLOSING=TIMELINE.length;TIMELINE.push({type:'closing'});
let step=0,kind=null,curSvc=-1,playing=true,timer=null;
const HUES=[28,350,210,40,300];

/* Five transition styles, cycled per service (or set  style: 0-4  on a service to pick one). */
const STYLES=[
 {name:'Rise & grow',enter:'rise',focus:'grow'},
 {name:'Wipe & filmstrip',enter:'wipe',focus:'film'},
 {name:'Blur-in & curtain',enter:'zoom',focus:'curtain'},
 {name:'Flip & crossfade',enter:'flip',focus:'fade'},
 {name:'Drop & iris',enter:'drop',focus:'iris'}
];
const styleOf=svc=>STYLES[(svc.style!=null?svc.style:SERVICES.indexOf(svc))%STYLES.length];
const SHOWN={iris:'circle(150% at 50% 50%)'};
function rectFor(k,n,f,fx){
  const shown=SHOWN[fx]||'inset(0)';
  if(f===null){const gap=1.2,w=(90-gap*(n-1))/n;return{left:5+k*(w+gap),top:3,width:w,height:76,op:1,z:1,clip:shown};}
  if(fx==='grow'){
    if(k===f)return{left:27,top:0,width:46,height:100,op:1,z:2,clip:shown};
    const left=k<f,c=left?f:n-1-f,tw=Math.min(12,(23-(c-1))/c),th=Math.min(60,tw*2.6),idx=left?k:k-f-1;
    return{left:left?3+idx*(tw+1):97-(c-idx)*(tw+1)+1,top:(100-th)/2,width:tw,height:th,op:.55,z:1,clip:shown};
  }
  if(fx==='film'){ /* whole row pans sideways so the current photo sits centred */
    const tw=20,gap=2.5,th=62;
    if(k===f)return{left:30,top:2,width:40,height:96,op:1,z:2,clip:shown};
    return{left:k<f?30-(f-k)*(tw+gap):70+gap+(k-f-1)*(tw+gap),top:(100-th)/2,width:tw,height:th,op:.55,z:1,clip:shown};
  }
  const w=fx==='fade'?56:50,base={left:(100-w)/2,top:0,width:w,height:100,z:k+1};
  if(fx==='fade')return{...base,op:k===f?1:0,clip:shown};
  /* curtain: next photo wipes in from the right; iris: it opens from the centre */
  const hidden=fx==='iris'?'circle(0% at 50% 50%)':'inset(0 0 0 100%)';
  return{...base,op:1,clip:k>f?hidden:shown};
}
function buildService(svc){
  const st=styleOf(svc),wrap=document.createElement('div');wrap.className='service pre e-'+st.enter;
  svc.images.forEach((file,k)=>{
    const p=document.createElement('div');p.className='photo';p.style.transitionDelay=(k*180)+'ms';
    const h=HUES[k%HUES.length];
    p.innerHTML='<div class="ph"><i style="background:linear-gradient(150deg,hsl('+h+' 30% 88%),hsl('+h+' 35% 72%))"></i><img src="images/'+file+'" alt="" onerror="this.style.display=\'none\'"></div><span class="tag">Photo '+(k+1)+'</span>';
    wrap.appendChild(p);
  });
  const bar=document.createElement('div');bar.className='bar';bar.textContent=svc.name;wrap.appendChild(bar);
  view.innerHTML='';view.appendChild(wrap);
}
function layout(svc,f){
  const n=svc.images.length,fx=styleOf(svc).focus;
  [...view.querySelectorAll('.photo')].forEach((el,k)=>{
    const r=rectFor(k,n,f,fx);
    if(f!==null)el.style.transitionDelay='0ms';
    el.style.left=r.left+'%';el.style.top=r.top+'%';el.style.width=r.width+'%';el.style.height=r.height+'%';
    el.style.opacity=r.op;el.style.zIndex=r.z;el.style.clipPath=r.clip;
    el.classList.toggle('focus',f===k);
    el.querySelector('.tag').style.display=f===k?'none':'';
  });
  stage.classList.toggle('dark',f!==null);
}
function panel(item){
  const c=item.type==='closing';
  view.innerHTML='<div class="panel'+(c?' dark':'')+'">'+(c?'<h1>Afros &amp; Mo.</h1><p>Natural hair care &amp; academy — Kampala</p>'
   :'<h1>Welcome to Afros &amp; Mo.</h1><p>Uganda\'s leading natural hair salon — '+SERVICES.length+' services, one showcase.</p>')+'</div>';
  stage.classList.toggle('dark',c);
  if(!c&&WELCOME_BG){
    const im=new Image(),mine=step;
    im.onload=()=>{const p=view.querySelector('.panel');if(mine!==step||!p)return;
      p.classList.add('hasbg');
      p.style.backgroundImage='linear-gradient(rgba(11,26,56,.42),rgba(11,26,56,.58)),url("'+WELCOME_BG+'")';
      stage.classList.add('dark');};
    im.src=WELCOME_BG;
  }
}
function hud(item){
  if(item.type==='service'){svcLabel.textContent='Service '+(item.s+1)+' / '+SERVICES.length+' · '+styleOf(SERVICES[item.s]).name;
    phaseLabel.textContent=item.f===null?'All photos':'Photo '+(item.f+1)+' of '+SERVICES[item.s].images.length;}
  else{svcLabel.textContent=item.type==='intro'?'Introduction':'Closing';phaseLabel.textContent='';}
}
function render(){
  const item=TIMELINE[step];hud(item);
  if(item.type==='service'&&kind==='service'&&curSvc===item.s){layout(SERVICES[item.s],item.f);return;}
  view.style.opacity=0;
  const mine=step;
  setTimeout(()=>{
    if(mine!==step)return;
    if(item.type==='service'){
      stage.classList.remove('dark');buildService(SERVICES[item.s]);layout(SERVICES[item.s],item.f);
      requestAnimationFrame(()=>requestAnimationFrame(()=>{const w=view.querySelector('.service');if(!w)return;w.classList.remove('pre');w.querySelector('.bar').classList.add('in');}));
    }else panel(item);
    view.style.opacity=1;
  },450);
  kind=item.type;curSvc=item.type==='service'?item.s:-1;
}
function go(n){step=Math.max(0,Math.min(TIMELINE.length-1,n));render();reset();}
const next=()=>{if(step<TIMELINE.length-1)go(step+1);else if(LOOP)go(0);},prev=()=>go(step-1);
function nextSvc(){const c=TIMELINE[step],s=c.type==='service'?c.s+1:0;go(s<SERVICES.length?serviceStart[s]:CLOSING);}
function prevSvc(){const c=TIMELINE[step],s=c.type==='service'?c.s-1:SERVICES.length-1;go(s>=0?serviceStart[s]:0);}
function reset(){clearTimeout(timer);if(!playing)return;const c=TIMELINE[step];
  timer=setTimeout(next,c.type==='service'&&c.f===null?3600:c.type==='service'?3200:4500);}
document.getElementById('zNext').onclick=next;document.getElementById('zPrev').onclick=prev;
document.getElementById('nextStep').onclick=next;document.getElementById('prevStep').onclick=prev;
document.getElementById('nextSvc').onclick=nextSvc;document.getElementById('prevSvc').onclick=prevSvc;
playBtn.onclick=()=>{playing=!playing;playBtn.textContent=playing?'❚❚':'▶';reset();};
document.getElementById('jumpForm').onsubmit=e=>{e.preventDefault();const n=parseInt(document.getElementById('jumpInput').value,10);if(n>=1&&n<=SERVICES.length)go(serviceStart[n-1]);};
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT')return;
  if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev();
  if(e.key===' '){e.preventDefault();playBtn.click();}
  if(e.key==='f')document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen();
});
render();reset();
