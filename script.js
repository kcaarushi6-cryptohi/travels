const pages=[...document.querySelectorAll('.page')],links=[...document.querySelectorAll('nav a')];
function route(){const id=(location.hash||'#home').slice(1);const ok=pages.some(p=>p.id===id)?id:'home';
pages.forEach(p=>p.classList.toggle('on',p.id===ok));
links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+ok&&!a.classList.contains('cta')));window.scrollTo(0,0)}
addEventListener('hashchange',route);route();
const f=document.getElementById('f'),ok=document.getElementById('ok');
const rules={n:v=>v.trim().length>1,p:v=>v.replace(/\D/g,'').length>=8,t:v=>!!v,s:v=>+v>=1&&+v<=49&&Number.isInteger(+v)};
f.addEventListener('submit',e=>{e.preventDefault();let good=true;
for(const k in rules){const el=document.getElementById(k),v=rules[k](el.value);el.parentElement.classList.toggle('bad',!v);if(!v)good=false}
if(!good){f.querySelector('.bad input,.bad select').focus();return}
const g=k=>document.getElementById(k).value.trim();
const msg=`Booking request%0AName: ${encodeURIComponent(g('n'))}%0APhone: ${encodeURIComponent(g('p'))}%0ADeparture: ${encodeURIComponent(g('t'))}%0ASeats: ${encodeURIComponent(g('s'))}`;
ok.innerHTML=`<h3>Thank you, ${g('n').replace(/[<>&]/g,'')}.</h3><p>Your request for ${g('s')} seat(s), ${g('t').replace(/[<>&]/g,'')}, is ready. To reach our office, <a href="https://wa.me/9779824487048?text=${msg}">send it on WhatsApp</a> or call <a href="tel:+9779824487048">9824487048</a>. Your seats are confirmed once we call you back.</p>`;
ok.classList.add('show');ok.scrollIntoView({behavior:'smooth',block:'center'})});
