/* ---------- sample data ---------- */
const FX = 2.70;
const S = {
  prices:{adult:40, child:20}, childAges:"5–12", infantFree:true,
  capacity:20, slots:["09:30","10:30","11:30","13:30","14:30","15:30"],
  days:[1,2,3,4,5,6], horizonMonths:12, maxOnline:15,
  blocked:new Set(),
  tours:[
    {id:"std", name:"Cathedral guided tour", mins:45, blurb:"The nave, the towers from inside, and the story of the three churches."},
    {id:"yard", name:"Towers & churchyard tour", mins:60, blurb:"Adds the historic churchyard, memorials and restoration work."},
    {id:"cruise", name:"Cruise express tour", mins:25, blurb:"A short highlights tour timed for cruise passengers."}
  ],
  bookings:[]
};
const DIRS = [
  ["From the cruise ship pier (Heritage Quay / Nevis Street Pier)","Walk up Newgate Street, about 10 minutes uphill. The twin towers are visible from the pier."],
  ["From V.C. Bird International Airport","About 15–20 minutes by taxi. Ask for St. John's Cathedral, Front Gate."],
  ["From St. John's bus station","About 8 minutes on foot along Market Street and Newgate Street."],
  ["From hotels in Dickenson Bay / Runaway Bay","About 15 minutes by taxi or the route bus into town."],
  ["Google Maps","Open the Front Gate location in Google Maps."]
];
const GUIDE = ["Arrive 10 minutes before your tour","Show your voucher or QR code at the Front Gate","Modest dress: shoulders and knees covered","Please keep quiet if a service is taking place","Photography allowed without flash"];
const NEWS = [
  {d:"25 Oct 2026", t:"Harvest Thanksgiving, Sunday 8 November", b:"One combined service at 9:00 followed by the harvest lunch in the churchyard.", ph:"Harvest display"},
  {d:"18 Oct 2026", t:"Restoration update: south tower", b:"Scaffolding comes down this month. Thank you to everyone who gave.", ph:"South tower scaffolding"},
  {d:"10 Oct 2026", t:"Choir rehearsals resume", b:"Thursdays at 18:00 in the choir vestry. New voices welcome.", ph:"Choir"}
];
const OUTREACH = [
  {t:"Saturday feeding programme", b:"Hot meals served from the parish hall every Saturday at noon."},
  {t:"Youth choir", b:"Free music training for ages 8–16, Wednesdays after school."},
  {t:"School heritage visits", b:"Free guided visits for Antiguan schools during term."}
];
const SERVICES = [
  ["Sunday","07:00","Holy Eucharist (said)","Lady Chapel"],["Sunday","09:00","Sung Eucharist","Nave"],["Sunday","18:00","Choral Evensong","Nave"],
  ["Wednesday","12:00","Midweek Eucharist","Lady Chapel"],["Friday","07:00","Morning Prayer","Lady Chapel"]
];
const ERAS = [
  ["1681","The first church","A simple wooden church is built on the hill above the harbour.",[
    ["1681","Land set aside on the hill","Colonists choose the rise above St. John's harbour for a parish church.","The site was picked because it could be seen from ships entering the harbour and stood above the low, marshy ground of the early town. The land was given over for a church and a burial ground, the start of today's churchyard.","View from the harbour towards the hill"],
    ["1683","Wooden church completed","A timber church opens for worship.","The first church was a modest wooden building with a shingle roof, built by local carpenters from imported and island timber. Little of it survives except references in parish records.","Artist's impression of the wooden church"],
    ["1720","Churchyard extended","Burials spread across the hill as the town grows.","As St. John's grew into the island's main town, the churchyard was enlarged. Some of the oldest headstones still standing date from this period.","Early 18th-century headstones"]]],
  ["1745","A church of brick","The wooden church is replaced by a larger brick building.",[
    ["1745","Brick church begun","Work starts on a larger church built of brick.","A growing congregation and repeated storm damage led the parish to replace the timber church with a sturdier brick building on the same site.","Brick foundations uncovered during restoration"],
    ["1782","Statues at the south gate","Figures of St. John the Baptist and St. John the Divine are placed at the gate.","The two lead statues that stand on the south gate pillars are said to have been taken from a French ship. They became a landmark for visitors arriving at the church.","The statues on the south gate"],
    ["1842","Becomes a cathedral","The Diocese of Antigua is formed and St. John's becomes its cathedral.","With the creation of the diocese, the parish church was raised to cathedral status and became the seat of the first Bishop of Antigua.","Portrait of the first bishop"]]],
  ["1843","The great earthquake","An earthquake badly damages the brick church.",[
    ["8 Feb 1843","Earthquake strikes","A major earthquake shakes the Leeward Islands.","The earthquake damaged buildings across Antigua. The brick cathedral was left beyond repair and services moved to temporary premises.","Engraving of earthquake damage in St. John's"],
    ["1843","Services moved","Worship continues in a temporary building.","While plans for a new cathedral were drawn up, the congregation met in a temporary space nearby.","Temporary church site"]]],
  ["1848","Today's Cathedral","The present stone Cathedral with its twin towers is consecrated.",[
    ["1845","Foundation stone laid","Building of the stone cathedral begins.","The new design was built to survive future earthquakes: an outer shell of stone with a complete inner lining of timber, so the inside could flex if the walls moved.","Foundation stone"],
    ["1847","Twin towers rise","The baroque-style towers are completed.","The two towers at the west end gave the Cathedral the silhouette that dominates the St. John's skyline today.","The twin towers from Newgate Street"],
    ["1848","Consecration","The new Cathedral is consecrated.","The finished building was consecrated and returned to full use as the cathedral of the diocese.","The nave and timber interior"]]],
  ["1974","Damage and decline","A further earthquake damages the building and repairs begin.",[
    ["1974","Earthquake damage","Another earthquake cracks the stonework.","The 1974 earthquake damaged the towers and walls. Emergency repairs kept the building in use, but a long period of decline followed.","Cracked stonework on the north tower"],
    ["1995","Hurricane season damage","Storms add roof and window damage.","A run of hurricanes in the 1990s damaged the roof and windows, letting water into the timber interior.","Storm-damaged roof"]]],
  ["2010s","Restoration","A restoration programme begins, documented on the restoration blog.",[
    ["2010","Restoration blog launched","Progress starts being recorded online.","A restoration blog was started in October 2010 to share news, photos and appeals with supporters at home and overseas. It ran until 2019.","Screenshot of the restoration blog"],
    ["2011","Fundraising appeal","Donors in Antigua and the diaspora are asked to help.","An appeal was launched for gifts by wire transfer and in person, with regular updates to show how the money was spent.","Fundraising event"],
    ["2015","Roof and towers repaired","Major structural work is completed.","Scaffolding went up around the towers and the roof was repaired, making the building weathertight again.","Scaffolding on the towers"],
    ["2019","Interior work continues","Attention turns to the timber interior.","With the outside secured, work moved inside to repair the timber lining, pews and galleries.","Restored interior woodwork"]]]
];
const FAQ = [
  ["Do I have to pay online?","No. Your booking is held automatically. You pay at the Front Gate in cash or by card."],
  ["Can I visit without booking?","Yes. Walk-in visitors are welcome. Booking guarantees a guide and a time."],
  ["What if my cruise ship is late?","Use the link in your voucher email to move your booking to another time."],
  ["Is the Cathedral wheelchair accessible?","Details of the accessible route will be confirmed by the Cathedral."],
  ["Can I attend a service as a visitor?","Yes, everyone is welcome at every service. Tours pause during services."]
];
const QUESTIONS = [
  ["Tour types","Names, length and description of each tour (3 samples shown)."],
  ["Tour times","Slot start times. Sample: 09:30, 10:30, 11:30, 13:30, 14:30, 15:30."],
  ["Capacity","Maximum people per slot. Sample: 20."],
  ["When tours can't run","Services, funerals, weddings, lunch breaks, Sundays."],
  ["Booking cut-off","How late on the day someone can still book."],
  ["Prices","Adult and child price, child age range, under-5s free? Sample: EC$40 / EC$20."],
  ["Other ticket types","Seniors, students, locals, cruise groups, parishioners?"],
  ["Card surcharge","Is there a fee for paying by card at the gate?"],
  ["Late arrivals","How long a booking is held before the place is released."],
  ["Large groups","Above what size people must send an enquiry instead. Sample: more than 15."],
  ["Arrival guidelines","What goes on the voucher (dress code, photography, etc.)."],
  ["Booking emails","Who gets the admin email, one per booking or a daily summary, and the sender name."],
  ["Enquiries","Who receives each enquiry type and the reply time to promise. WhatsApp button?"],
  ["Parish content","Real service times, announcements, outreach programmes, opening hours."],
  ["Directions","Confirm walking and taxi directions to the Front Gate."]
];
const fakeNames = ["Sample: J. Miller","Sample: A. Thompson","Sample: R. Okafor","Sample: L. Dubois","Sample: M. Walsh","Sample: K. Joseph","Sample: S. Patel","Sample: D. Brown"];
const fakeCountry = ["United States","United Kingdom","Canada","Antigua & Barbuda","Ireland","United States","Other Caribbean","Canada"];
const fakeVia = ["Cruise: Sample Ship A","Hotel: Sample Resort","Cruise: Sample Ship B","Local","Hotel: Sample Inn","Cruise: Sample Ship A","Cruise: Sample Ship C","Hotel: Sample Resort"];

/* ---------- helpers ---------- */
// Returns a detached element when the selector is not on this page, so shared render code is safe on every page.
const $ = s=>document.querySelector(s) || document.createElement("div");
const esc = s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const iso = d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
const parse = s=>{const [y,m,d]=s.split("-").map(Number);return new Date(y,m-1,d);};
const fmtDate = s=>parse(s).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"});
const fmtShort = s=>parse(s).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});
const fmtT = t=>{const [h,m]=t.split(":").map(Number);return `${((h+11)%12)+1}:${String(m).padStart(2,"0")} ${h<12?"am":"pm"}`;};
const money = n=>n.toFixed(2);
const hash = s=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return h>>>0;};
const TODAY = new Date(); TODAY.setHours(0,0,0,0);
const todayIso = iso(TODAY);
const total = (a,c)=>a*S.prices.adult + c*S.prices.child;
let toastT;
function toast(msg){const t=$("#toast");t.textContent=msg;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,3200);}
const tourById = id=>S.tours.find(t=>t.id===id);

/* sample booked counts (seeded) */
function seeded(date,slot){
  const h=hash(date+slot); if(h%9===0) return S.capacity;
  return Math.min(S.capacity, h%(S.capacity-2));
}
function booked(date,slot){ return seeded(date,slot) + S.bookings.filter(b=>b.date===date&&b.slot===slot&&!b.seed).reduce((n,b)=>n+b.adults+b.children,0); }
function left(date,slot){ return Math.max(0,S.capacity-booked(date,slot)); }
function dayOpen(d){
  const s=iso(d); const max=new Date(TODAY); max.setMonth(max.getMonth()+S.horizonMonths);
  return d>=TODAY && d<=max && S.days.includes(d.getDay()) && !S.blocked.has(s);
}
function dayState(d){ const s=iso(d); const l=S.slots.map(t=>left(s,t)); const tot=l.reduce((a,b)=>a+b,0);
  if(tot===0) return "full"; if(l.filter(x=>x>0).length<=2) return "few"; return ""; }

/* seed today's bookings for admin + scanner */
(function seedToday(){
  let d=new Date(TODAY); while(!S.days.includes(d.getDay())) d.setDate(d.getDate()+1);
  S.seedDay = iso(d);
  fakeNames.forEach((n,i)=>{
    const slot=S.slots[i%S.slots.length], a=1+(hash(n)%4), c=hash(n+"c")%3;
    S.bookings.push({ref:"SJC-"+(4100+i*37), name:n, email:"sample@example.com", country:fakeCountry[i], via:fakeVia[i],
      tour:S.tours[i%3].id, date:S.seedDay, slot, adults:a, children:c, status:i<2?"in":"booked", paid:i<2?(i?"card":"cash"):"", seed:true});
  });
})();

/* ---------- keep prototype state between pages (this browser only) ---------- */
const KEY="sjc-prototype-v1";
function save(){ try{ localStorage.setItem(KEY, JSON.stringify({prices:S.prices,capacity:S.capacity,slots:S.slots,maxOnline:S.maxOnline,blocked:[...S.blocked],bookings:S.bookings})); }catch(e){} }
(function load(){ try{ const d=JSON.parse(localStorage.getItem(KEY)||"null"); if(!d) return;
  Object.assign(S.prices,d.prices); S.capacity=d.capacity; S.slots=d.slots; S.maxOnline=d.maxOnline; S.blocked=new Set(d.blocked); S.bookings=d.bookings;
}catch(e){} })();

/* ---------- shared render bits ---------- */
function renderStatic(){
  $("#todayDate").textContent = fmtDate(todayIso);
  const open = S.days.includes(TODAY.getDay());
  $("#todayLabel").textContent = open ? "Open to visitors" : "Open for worship only";
  $("#fromPrice").innerHTML = `EC$${S.prices.adult} adult <span class="tbd">TBD</span>`;
  const items = [["07:00","Morning Prayer","svc"],["09:00","Visitor entry opens","info"],...S.slots.map(t=>[t,"Guided tour","tour"]),["12:00","Midweek Eucharist","svc"],["16:00","Last visitor entry","info"],["17:30","Evening Prayer","svc"]]
    .sort((a,b)=>a[0].localeCompare(b[0]));
  $("#todayList").innerHTML = items.map(([t,n,k])=>`<li><span class="t">${fmtT(t)}</span><span>${n}${k==="tour"?` <span class="muted small">· ${left(todayIso,t)?left(todayIso,t)+" places left":"Fully booked"}</span>`:""}</span><span class="kind ${k==="tour"?"tourk":k}">${k==="svc"?"Service":k==="tour"?"Tour":"Visiting"}</span></li>`).join("");
  const newsCard = n=>`<article class="card"><div class="ph"><div><b>PHOTO</b>${esc(n.ph)}</div></div><div class="date">${n.d}</div><h3>${esc(n.t)}</h3><p class="muted small">${esc(n.b)}</p><span class="sample" style="justify-self:start;margin:0">Sample</span></article>`;
  $("#homeNews").innerHTML = NEWS.map(newsCard).join("");
  $("#allNews").innerHTML = NEWS.concat(NEWS.map(n=>({...n,d:"Sep 2026"}))).map(newsCard).join("");
  const svcRows = SERVICES.map(r=>`<tr><td>${r[0]}</td><td class="tnum">${fmtT(r[1])}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`).join("");
  $("#homeServices").innerHTML = svcRows; $("#allServices").innerHTML = svcRows;
  const outCard = o=>`<article class="card"><div class="ph"><div><b>PHOTO</b>${esc(o.t)}</div></div><h3>${esc(o.t)}</h3><p class="muted small">${esc(o.b)}</p><span class="sample" style="justify-self:start;margin:0">Sample</span></article>`;
  $("#homeOutreach").innerHTML = OUTREACH.map(outCard).join(""); $("#allOutreach").innerHTML = OUTREACH.map(outCard).join("");
  const dirs = DIRS.map(([h,p],i)=>i===4?`<details><summary>${h}</summary><p><a href="https://www.google.com/maps/search/St+John%27s+Cathedral+Antigua" target="_blank" rel="noopener">Open in Google Maps</a></p></details>`:`<details><summary>${h}</summary><p>${p}</p></details>`).join("");
  $("#dirsHome").innerHTML = dirs; $("#dirsVisit").innerHTML = dirs;
  $("#guideList").innerHTML = GUIDE.map(g=>`<li>${g}</li>`).join("");
  $("#timeline").innerHTML = ERAS.map((e,i)=>`<div class="era"><div class="yr">${e[0]}</div><div class="era-body"><h3>${e[1]}</h3><p class="muted">${e[2]}</p>
    <ol class="subtl" aria-label="Key events, ${esc(e[1])}">${e[3].map((ev,j)=>`<li><button type="button" class="ev" data-ev="${i}-${j}" aria-haspopup="dialog"><span class="ev-yr">${ev[0]}</span><span class="ev-t">${esc(ev[1])}</span><span class="ev-s">${esc(ev[2])}</span><span class="ev-more" aria-hidden="true">Read more ›</span></button></li>`).join("")}</ol></div></div>`).join("") + `<p class="muted small"><span class="sample" style="margin:0">Draft dates and events, to be checked against the blog archive</span></p>`;
  $("#tourCards").innerHTML = S.tours.map(t=>`<article class="card"><div class="ph"><div><b>PHOTO</b>${esc(t.name)}</div></div><h3>${esc(t.name)} <span class="tbd">TBD</span></h3><p class="muted small">${t.mins} minutes · ${esc(t.blurb)}</p><a class="btn" href="book.html?tour=${t.id}">Book this tour</a></article>`).join("");
  $("#priceList").innerHTML = `<div><dt>Adult</dt><dd class="tnum">EC$${money(S.prices.adult)} / US$${money(S.prices.adult/FX)} <span class="tbd">TBD</span></dd></div><div><dt>Child (${S.childAges})</dt><dd class="tnum">EC$${money(S.prices.child)} / US$${money(S.prices.child/FX)} <span class="tbd">TBD</span></dd></div><div><dt>Under 5</dt><dd>Free</dd></div>`;
  $("#faq").innerHTML = FAQ.map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("");
  $("#phases").innerHTML = [["Roof",100],["North tower",100],["South tower",70],["Interior woodwork",30],["Churchyard walls",10]].map(([n,p])=>`<div class="caprow" style="grid-template-columns:150px minmax(0,1fr) 48px"><span>${n}</span><div class="capbar"><i style="width:${p}%"></i></div><span class="tnum">${p}%</span></div>`).join("");
  $("#qList").innerHTML = QUESTIONS.map(q=>`<li><b>${q[0]}</b><span>${q[1]}</span></li>`).join("");
}

/* ---------- booking flow ---------- */
const B = {step:1, tour:"std", date:null, slot:null, adults:2, children:0, infants:0, month:new Date(TODAY.getFullYear(),TODAY.getMonth(),1),
  d:{name:"Sample Visitor", email:"sample@example.com", phone:"+1 555 010 0000", country:"United States", via:"Cruise ship", viaName:"Sample Ship A", access:"", lang:"English", heard:"Cruise line"}, last:null};

function renderBook(){
  const r=$("#bookRoot");
  if(B.step===5) return renderConfirm();
  const labels=["Tour & date","Group size","Your details","Review"];
  const steps=`<ol class="steps">${labels.map((l,i)=>`<li class="${i+1===B.step?"on":i+1<B.step?"done":""}">${l}</li>`).join("")}</ol>`;
  let body="";
  if(B.step===1){
    const m=B.month, first=new Date(m.getFullYear(),m.getMonth(),1), days=new Date(m.getFullYear(),m.getMonth()+1,0).getDate();
    const pad=(first.getDay()+6)%7; let cells="";
    for(let i=0;i<pad;i++) cells+=`<span></span>`;
    for(let d=1; d<=days; d++){ const dt=new Date(m.getFullYear(),m.getMonth(),d), s=iso(dt), ok=dayOpen(dt), st=ok?dayState(dt):"";
      cells+=`<button type="button" data-day="${s}" class="${st} ${B.date===s?"on":""}" ${!ok||st==="full"?"disabled":""} aria-label="${fmtDate(s)}${st==="full"?", fully booked":""}">${d}</button>`; }
    const minM=new Date(TODAY.getFullYear(),TODAY.getMonth(),1), maxM=new Date(TODAY.getFullYear(),TODAY.getMonth()+S.horizonMonths,1);
    const slots = B.date ? `<div class="stack" style="gap:10px"><h3>Times on ${fmtShort(B.date)} <span class="tbd">Times TBD</span></h3><div class="slots">${S.slots.map(t=>{const l=left(B.date,t);return `<button type="button" class="slot ${B.slot===t?"on":""}" data-slot="${t}" ${l===0?"disabled":""}>${fmtT(t)}<small>${l===0?"Fully booked":l+" places left"}</small></button>`;}).join("")}</div></div>` : `<p class="muted">Pick a date to see available times.</p>`;
    body=`<div class="panel"><div class="stack" style="gap:10px"><h3>Choose a tour <span class="tbd">Tour types TBD</span></h3><div class="tours">${S.tours.map(t=>`<button type="button" class="tour ${B.tour===t.id?"on":""}" data-tourpick="${t.id}"><b>${esc(t.name)}</b><span class="muted small">${t.mins} min · ${esc(t.blurb)}</span></button>`).join("")}</div></div>
      <div class="stack" style="gap:10px"><div class="cal-head"><button type="button" id="mPrev" ${m<=minM?"disabled":""} aria-label="Previous month">‹</button><h3>${m.toLocaleDateString("en-GB",{month:"long",year:"numeric"})}</h3><button type="button" id="mNext" ${m>=maxM?"disabled":""} aria-label="Next month">›</button></div>
      <div class="cal">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=>`<span class="dow">${d}</span>`).join("")}${cells}</div>
      <div class="legend"><span><i></i>Few places left</span><span>No tours on Sundays</span><span>Bookable up to 12 months ahead</span></div></div>
      ${slots}
      <div class="nav-row"><span></span><button type="button" id="next" ${B.date&&B.slot?"":"disabled"}>Continue</button></div></div>`;
  }
  if(B.step===2){
    const l=left(B.date,B.slot), n=B.adults+B.children+B.infants, over=B.adults+B.children>Math.min(S.maxOnline,l);
    body=`<div class="panel"><h3>How many are coming?</h3><div class="party">
      ${[["adults","Adults","Age 13 and over",S.prices.adult],["children","Children",`Age ${S.childAges}`,S.prices.child],["infants","Under 5","Free",0]].map(([k,lab,sub,p])=>`<div class="prow"><div><b>${lab}</b><div class="muted small">${sub}${p?` · EC$${money(p)} each`:""} ${k!=="infants"?'<span class="tbd">Price TBD</span>':""}</div></div><div class="stepper"><button type="button" data-dec="${k}" aria-label="Fewer ${lab}">−</button><output id="o-${k}">${B[k]}</output><button type="button" data-inc="${k}" aria-label="More ${lab}">+</button></div></div>`).join("")}
      </div>
      <div class="total" aria-live="polite"><span class="small muted">Total due upon arrival</span><span class="amt" id="liveTotal"></span><span class="small muted tnum" id="liveSub"></span></div>
      <div class="disclaimer">No payment is required online. Your booking is held automatically.<span>Cash and card are accepted at the Cathedral Front Gate.</span></div>
      <div id="overBox"></div>
      <div class="nav-row"><button type="button" class="ghost" id="back">Back</button><button type="button" id="next">Continue</button></div></div>`;
  }
  if(B.step===3){
    const d=B.d, opt=(arr,v)=>arr.map(o=>`<option ${o===v?"selected":""}>${o}</option>`).join("");
    body=`<form class="panel" id="detForm"><h3>Your details</h3>
      <div class="grid2"><label class="f">Full name<input id="dName" required value="${esc(d.name)}"></label><label class="f">Email<span class="hint">Your voucher is sent here</span><input id="dEmail" type="email" required value="${esc(d.email)}"></label></div>
      <div class="grid2"><label class="f">Phone / WhatsApp<input id="dPhone" value="${esc(d.phone)}"></label><label class="f">Country<select id="dCountry">${opt(["United States","United Kingdom","Canada","Antigua & Barbuda","Other Caribbean","Ireland","Other"],d.country)}</select></label></div>
      <div class="grid2"><label class="f">Where are you staying?<select id="dVia">${opt(["Cruise ship","Hotel / villa","I live in Antigua"],d.via)}</select></label><label class="f">Ship or hotel name<input id="dViaName" value="${esc(d.viaName)}"></label></div>
      <div class="grid2"><label class="f">Tour language<select id="dLang">${opt(["English"],d.lang)}</select><span class="hint">More languages later</span></label><label class="f">How did you hear about us?<select id="dHeard">${opt(["Cruise line","Hotel","TripAdvisor","Google","Friend or family","Social media","Other"],d.heard)}</select></label></div>
      <label class="f">Accessibility needs<span class="hint">Optional. Tell us so the guide can plan the route.</span><textarea id="dAccess" placeholder="e.g. one wheelchair user">${esc(d.access)}</textarea></label>
      <div class="nav-row"><button type="button" class="ghost" id="back">Back</button><button type="submit">Review booking</button></div></form>`;
  }
  if(B.step===4){
    body=`<div class="panel"><h3>Check and confirm</h3><dl class="kv">
      <dt>Tour</dt><dd>${esc(tourById(B.tour).name)}</dd><dt>Date</dt><dd>${fmtDate(B.date)}</dd><dt>Time</dt><dd>${fmtT(B.slot)}</dd>
      <dt>Group</dt><dd>${B.adults} adult${B.adults!==1?"s":""}${B.children?`, ${B.children} child${B.children>1?"ren":""}`:""}${B.infants?`, ${B.infants} under 5`:""}</dd>
      <dt>Name</dt><dd>${esc(B.d.name)}</dd><dt>Email</dt><dd>${esc(B.d.email)}</dd><dt>Staying</dt><dd>${esc(B.d.via)}${B.d.viaName?": "+esc(B.d.viaName):""}</dd>
      <dt>Due on arrival</dt><dd class="tnum">EC$${money(total(B.adults,B.children))} / US$${money(total(B.adults,B.children)/FX)}</dd></dl>
      <div class="disclaimer">No payment is required online. Your booking is held automatically.<span>Cash and card are accepted at the Cathedral Front Gate.</span></div>
      <p class="muted small">Late arrivals: we hold your place for 15 minutes after the start time. <span class="tbd">TBD</span></p>
      <div class="nav-row"><button type="button" class="ghost" id="back">Back</button><button type="button" id="confirm">Confirm booking</button></div></div>`;
  }
  const sum = B.step>1 ? `<aside class="panel summary"><h3>Your booking</h3><dl class="sumrows"><div><dt>Tour</dt><dd>${esc(tourById(B.tour).name)}</dd></div><div><dt>Date</dt><dd>${fmtShort(B.date)}</dd></div><div><dt>Time</dt><dd>${fmtT(B.slot)}</dd></div><div><dt>Group</dt><dd id="sumGroup">${B.adults+B.children+B.infants} people</dd></div><div><dt>Due on arrival</dt><dd class="tnum" id="sumTotal">EC$${money(total(B.adults,B.children))}</dd></div></dl></aside>`
    : `<aside class="panel summary"><h3>How booking works</h3><ol style="margin:0;padding-left:18px;display:grid;gap:6px" class="small"><li>Pick a tour, date and time</li><li>Tell us how many are coming</li><li>Get your voucher by email</li><li>Pay at the Front Gate when you arrive</li></ol><p class="muted small">Groups larger than ${S.maxOnline}: <a href="contact.html?enq=group">send a group enquiry</a> <span class="tbd">TBD</span></p></aside>`;
  r.innerHTML = `<div class="stack" style="gap:10px"><div class="eyebrow">Book a tour</div><h1>Reserve your visit</h1></div>${steps}<div class="book-wrap">${body}${sum}</div>`;
  if(B.step===2) updateParty();
}
function updateParty(){
  const t=total(B.adults,B.children);
  $("#liveTotal").textContent=`EC$${money(t)}`;
  $("#liveSub").textContent=`US$${money(t/FX)} at EC$2.70 = US$1 · ${B.adults+B.children+B.infants} people`;
  ["adults","children","infants"].forEach(k=>$("#o-"+k).textContent=B[k]);
  const l=left(B.date,B.slot), n=B.adults+B.children;
  let msg="";
  if(n>l) msg=`<div class="warnbox">Only ${l} places are left at ${fmtT(B.slot)}. Choose fewer people or <a href="#" id="toStep1">pick another time</a>.</div>`;
  else if(n>S.maxOnline) msg=`<div class="warnbox">Groups of more than ${S.maxOnline} book through a <a href="contact.html?enq=group">group enquiry</a> so we can arrange extra guides. <span class="tbd">Limit TBD</span></div>`;
  $("#overBox").innerHTML=msg;
  const nx=$("#next"); if(nx) nx.disabled = !!msg || n<1;
  const sg=$("#sumGroup"); if(sg){sg.textContent=`${B.adults+B.children+B.infants} people`; $("#sumTotal").textContent=`EC$${money(t)}`;}
}
function confirmBooking(){
  const ref="SJC-"+(5000+Math.floor(Math.random()*4999));
  const b={ref,name:B.d.name,email:B.d.email,phone:B.d.phone,country:B.d.country,via:`${B.d.via==="Cruise ship"?"Cruise":B.d.via==="Hotel / villa"?"Hotel":"Local"}${B.d.viaName?": "+B.d.viaName:""}`,access:B.d.access,
    tour:B.tour,date:B.date,slot:B.slot,adults:B.adults,children:B.children,infants:B.infants,status:"booked",paid:"",seed:false,lang:B.d.lang,heard:B.d.heard};
  S.bookings.unshift(b); save(); B.last=b; B.step=5; renderBook(); window.scrollTo(0,0);
}
function drawQR(canvas,text){
  const n=25, ctx=canvas.getContext("2d"); canvas.width=n; canvas.height=n;
  ctx.fillStyle="#ffffff"; ctx.fillRect(0,0,n,n); ctx.fillStyle="#111111";
  let h=hash(text);
  for(let y=0;y<n;y++)for(let x=0;x<n;x++){h=Math.imul(h^(h>>>13),0x5bd1e995)>>>0; if(h%2) ctx.fillRect(x,y,1,1);}
  const finder=(fx,fy)=>{ctx.fillStyle="#ffffff";ctx.fillRect(fx-1,fy-1,9,9);ctx.fillStyle="#111111";ctx.fillRect(fx,fy,7,7);ctx.fillStyle="#ffffff";ctx.fillRect(fx+1,fy+1,5,5);ctx.fillStyle="#111111";ctx.fillRect(fx+2,fy+2,3,3);};
  finder(0,0);finder(n-7,0);finder(0,n-7);
}
function voucherHTML(b){
  const t=total(b.adults,b.children);
  return `<div class="voucher"><div class="stack" style="gap:10px"><div class="eyebrow">Tour voucher</div><div class="vref">${b.ref}</div>
    <dl class="kv"><dt>Tour</dt><dd>${esc(tourById(b.tour).name)}</dd><dt>When</dt><dd>${fmtDate(b.date)}, ${fmtT(b.slot)}</dd><dt>Group</dt><dd>${b.adults} adult${b.adults!==1?"s":""}${b.children?`, ${b.children} child${b.children>1?"ren":""}`:""}${b.infants?`, ${b.infants} under 5`:""}</dd><dt>Lead name</dt><dd>${esc(b.name)}</dd><dt>Due on arrival</dt><dd class="tnum">EC$${money(t)} / US$${money(t/FX)}</dd></dl>
    <div class="disclaimer" style="font-size:14px">No payment is required online. Your booking is held automatically.<span>Cash and card are accepted at the Cathedral Front Gate.</span></div></div>
    <div class="qr"><canvas data-qr="${b.ref}" aria-label="QR code for ${b.ref}"></canvas></div></div>`;
}
function renderConfirm(){
  const b=B.last, t=total(b.adults,b.children);
  $("#bookRoot").innerHTML = `<div class="confirm-head"><span class="ok-badge">✓ Booking confirmed</span><h1>See you on ${fmtShort(b.date)}</h1><p class="muted">Your voucher has been emailed to ${esc(b.email)}. Show it, or the QR code, at the Front Gate.</p></div>
    ${voucherHTML(b)}
    <div class="nav-row"><div class="chips"><button type="button" class="ghost" id="dlV">Download voucher (PDF)</button><button type="button" class="ghost" id="chg">Change or cancel</button></div><button type="button" id="again">Make another booking</button></div>
    <div class="stack" style="gap:12px"><div><div class="eyebrow">Prototype only</div><h2>Emails this booking sends</h2></div>
    <div class="tabs" role="tablist"><button type="button" class="on" data-mail="tourist" role="tab">To the tourist</button><button type="button" data-mail="admin" role="tab">To the Cathedral office</button><button type="button" data-mail="remind" role="tab">24-hour reminder</button></div>
    <div id="mailBox"></div></div>`;
  showMail("tourist");
  document.querySelectorAll("canvas[data-qr]").forEach(c=>drawQR(c,c.dataset.qr));
}
function showMail(which){
  const b=B.last, t=total(b.adults,b.children);
  document.querySelectorAll("[data-mail]").forEach(x=>x.classList.toggle("on",x.dataset.mail===which));
  let html="";
  if(which==="tourist"){
    html=`<div class="mail"><div class="hd"><div><b>From</b>St. John's Cathedral Tours <span class="tbd">Sender TBD</span></div><div><b>To</b>${esc(b.email)}</div><div><b>Subject</b>Your tour voucher ${b.ref}: ${fmtShort(b.date)} at ${fmtT(b.slot)}</div></div>
    <div class="bd"><div class="brand"><div class="eyebrow" style="color:var(--accent-ink);opacity:.8">St. John's Cathedral · Antigua</div><h3>Your place is held, ${esc(b.name.split(" ")[0])}</h3></div>
    <div class="inner"><div class="ph" style="min-height:120px"><div><b>EMAIL BANNER PHOTO</b>Twin towers</div></div>${voucherHTML(b)}
    <h3>Getting to the Front Gate</h3>${DIRS.slice(0,4).map(([h,p])=>`<p><b>${h}</b><br><span class="muted">${p}</span></p>`).join("")}<p><a href="https://www.google.com/maps/search/St+John%27s+Cathedral+Antigua" target="_blank" rel="noopener">Open in Google Maps</a></p>
    <h3>Before you arrive <span class="tbd">TBD</span></h3><ul style="margin:0;padding-left:18px">${GUIDE.map(g=>`<li>${g}</li>`).join("")}</ul>
    <p class="muted small">Running late or plans changed? <a href="#" id="mailChg">Change or cancel your booking</a>.</p></div></div></div>`;
  } else if(which==="admin"){
    const slotTotal=booked(b.date,b.slot);
    html=`<div class="mail"><div class="hd"><div><b>From</b>Cathedral booking system</div><div><b>To</b>Dean's office <span class="tbd">Recipients TBD</span></div><div><b>Subject</b>New booking: ${b.adults+b.children+b.infants} people, ${fmtShort(b.date)} ${fmtT(b.slot)}</div></div>
    <div class="bd"><div class="inner"><p>A new tour has been booked.</p><dl class="kv"><dt>Reference</dt><dd>${b.ref}</dd><dt>Tour</dt><dd>${esc(tourById(b.tour).name)}</dd><dt>Slot</dt><dd>${fmtDate(b.date)}, ${fmtT(b.slot)}</dd><dt>Group size</dt><dd>${b.adults} adults, ${b.children} children, ${b.infants||0} under 5</dd><dt>Slot now holds</dt><dd class="tnum">${slotTotal} of ${S.capacity} places</dd><dt>Lead name</dt><dd>${esc(b.name)}</dd><dt>Contact</dt><dd>${esc(b.email)} · ${esc(b.phone||"")}</dd><dt>Country</dt><dd>${esc(b.country)}</dd><dt>Staying</dt><dd>${esc(b.via)}</dd><dt>Accessibility</dt><dd>${esc(b.access||"None given")}</dd><dt>Expected at gate</dt><dd class="tnum">EC$${money(t)}</dd></dl>
    <p><a href="admin.html">Open in the dashboard</a></p><p class="muted small">One email per booking, or a daily summary instead? <span class="tbd">TBD</span></p></div></div></div>`;
  } else {
    html=`<div class="mail"><div class="hd"><div><b>From</b>St. John's Cathedral Tours</div><div><b>To</b>${esc(b.email)}</div><div><b>Subject</b>Tomorrow: your Cathedral tour at ${fmtT(b.slot)}</div></div>
    <div class="bd"><div class="inner"><p>This is a reminder that your tour is tomorrow, ${fmtDate(b.date)}, at ${fmtT(b.slot)}. Please arrive 10 minutes early at the Front Gate.</p><p class="tnum"><b>Due on arrival: EC$${money(t)} / US$${money(t/FX)}</b>, cash or card.</p><p><a href="#" id="chg2">Change or cancel</a></p></div></div></div>`;
  }
  $("#mailBox").innerHTML=html;
  document.querySelectorAll("#mailBox canvas[data-qr]").forEach(c=>drawQR(c,c.dataset.qr));
}

/* ---------- admin ---------- */
let adminTab="bookings", adminDate=null;
function renderAdmin(){
  document.querySelectorAll("#adminSide button").forEach(b=>b.classList.toggle("on",b.dataset.tab===adminTab));
  const body=$("#adminBody");
  if(!adminDate) adminDate=S.seedDay;
  if(adminTab==="bookings"){
    const list=S.bookings.filter(b=>b.date===adminDate).sort((a,b)=>a.slot.localeCompare(b.slot));
    const ppl=list.reduce((n,b)=>n+b.adults+b.children+(b.infants||0),0), due=list.reduce((n,b)=>n+total(b.adults,b.children),0), inn=list.filter(b=>b.status!=="booked").length;
    const upcoming=S.bookings.filter(b=>!b.seed);
    body.innerHTML=`<div class="sec-head"><h2>Bookings</h2><div class="chips"><label class="f" style="font-weight:500">Day<input type="date" id="admDate" value="${adminDate}"></label></div></div>
    <div class="stats"><div class="stat"><span class="v">${list.length}</span><span class="l">Bookings</span></div><div class="stat"><span class="v">${ppl}</span><span class="l">Visitors expected</span></div><div class="stat"><span class="v">${inn}</span><span class="l">Checked in</span></div><div class="stat"><span class="v">EC$${Math.round(due).toLocaleString()}</span><span class="l">Due at the gate</span></div></div>
    <div class="panel"><h3>Slot capacity</h3><div class="cap">${S.slots.map(t=>{const n=list.filter(b=>b.slot===t).reduce((a,b)=>a+b.adults+b.children,0), p=Math.min(100,n/S.capacity*100);return `<div class="caprow"><span class="tnum">${fmtT(t)}</span><div class="capbar"><i class="${p>=100?"full":p>=75?"hi":""}" style="width:${p}%"></i></div><span class="tnum small">${n} / ${S.capacity}</span></div>`;}).join("")}</div></div>
    ${upcoming.length?`<div class="warnbox">You made ${upcoming.length} booking${upcoming.length>1?"s":""} in this prototype. Change the day above to ${fmtShort(upcoming[0].date)} to see ${upcoming.length>1?"them":"it"}.</div>`:""}
    <div class="sec-head"><h3>${fmtDate(adminDate)}</h3><button type="button" class="ghost" id="export">Export to spreadsheet</button></div>
    <div class="tw"><table><thead><tr><th>Time</th><th>Ref</th><th>Name</th><th>Tour</th><th class="num">Adults</th><th class="num">Children</th><th>Country</th><th>Staying</th><th class="num">Due EC$</th><th>Status</th></tr></thead><tbody>
    ${list.length?list.map(b=>`<tr><td class="tnum">${fmtT(b.slot)}</td><td class="tnum">${b.ref}</td><td>${esc(b.name)}</td><td>${esc(tourById(b.tour).name)}</td><td class="num">${b.adults}</td><td class="num">${b.children}</td><td>${esc(b.country)}</td><td>${esc(b.via)}</td><td class="num">${money(total(b.adults,b.children))}</td><td>${statusPill(b)}</td></tr>`).join(""):`<tr><td colspan="10" class="muted">No bookings on this day yet.</td></tr>`}
    </tbody></table></div>`;
  }
  if(adminTab==="tours"){
    body.innerHTML=`<div class="sec-head"><h2>Tours &amp; prices</h2><span class="tbd">All values are samples</span></div>
    <form class="panel" id="setForm"><h3>Prices</h3><div class="grid2"><label class="f">Adult (EC$)<input id="sAdult" type="number" min="0" step="1" value="${S.prices.adult}"></label><label class="f">Child (EC$)<input id="sChild" type="number" min="0" step="1" value="${S.prices.child}"></label></div>
    <p class="muted small">US$ is worked out at EC$2.70 = US$1.</p>
    <h3>Time slots &amp; capacity</h3><div class="grid2"><label class="f">Start times<span class="hint">24-hour, separated by commas</span><input id="sSlots" value="${S.slots.join(", ")}"></label><label class="f">Places per slot<input id="sCap" type="number" min="1" value="${S.capacity}"></label></div>
    <label class="f">Largest group that can book online<input id="sMax" type="number" min="1" value="${S.maxOnline}"></label>
    <div><button type="submit">Save changes</button></div></form>
    <div class="panel"><h3>Blocked dates</h3><p class="muted small">No tours on these days (funerals, festivals, maintenance). The calendar greys them out.</p>
    <div class="chips"><input type="date" id="blkDate" style="width:auto"><button type="button" id="blkAdd" class="ghost">Block this date</button></div>
    <div class="blocked-list" id="blkList">${[...S.blocked].sort().map(d=>`<span>${fmtShort(d)}<button type="button" data-unblock="${d}" aria-label="Unblock ${fmtShort(d)}">×</button></span>`).join("")||'<span style="background:var(--sunk);color:var(--muted)">None yet</span>'}</div></div>
    <div class="panel"><h3>Tour types</h3>${S.tours.map(t=>`<div class="prow"><div><b>${esc(t.name)}</b><div class="muted small">${t.mins} min</div></div><button type="button" class="ghost" data-mock="Editing tour types">Edit</button></div>`).join("")}</div>`;
  }
  if(adminTab==="content"){
    const row=(t,s)=>`<div class="prow"><div><b>${esc(t)}</b><div class="muted small">${esc(s)}</div></div><button type="button" class="ghost" data-mock="Editing content">Edit</button></div>`;
    body.innerHTML=`<h2>Website content</h2>
    <div class="panel"><div class="sec-head"><h3>Parish announcements</h3><button type="button" data-mock="Adding announcements">New announcement</button></div>${NEWS.map(n=>row(n.t,n.d)).join("")}</div>
    <div class="panel"><h3>Service times</h3>${SERVICES.map(s=>row(`${s[0]} ${fmtT(s[1])}`,s[2])).join("")}</div>
    <div class="panel"><h3>History timeline, photos, FAQ</h3>${row("Timeline entries",ERAS.length+" eras, "+ERAS.reduce((n,e)=>n+e[3].length,0)+" events")}${row("Gallery photos","Waiting for new photos")}${row("FAQ",FAQ.length+" questions")}</div>`;
  }
  if(adminTab==="reports"){
    const days=[...Array(7)].map((_,i)=>{const d=new Date(TODAY);d.setDate(d.getDate()-6+i);return d;});
    const vals=days.map(d=>d.getDay()===0?0:20+hash(iso(d))%70), max=100;
    const countries=[["United States",42],["United Kingdom",21],["Canada",14],["Antigua & Barbuda",9],["Other Caribbean",8],["Ireland",6]];
    body.innerHTML=`<div class="sec-head"><h2>Reports</h2><span class="sample">Sample numbers</span></div>
    <div class="panel"><h3>Visitors, last 7 days</h3><div class="bars">${vals.map(v=>`<div><span>${v}</span><i style="height:${v/max*100}%"></i></div>`).join("")}</div><div class="bars-x">${days.map(d=>`<span>${d.toLocaleDateString("en-GB",{weekday:"short"})}</span>`).join("")}</div></div>
    <div class="grid2"><div class="panel"><h3>Where visitors come from</h3><div class="cap">${countries.map(([c,p])=>`<div class="hbar"><span>${c}</span><div class="capbar"><i style="width:${p/42*100}%"></i></div><span class="tnum small">${p}%</span></div>`).join("")}</div></div>
    <div class="panel"><h3>Cruise vs. land visitors</h3><div class="cap"><div class="hbar"><span>Cruise passengers</span><div class="capbar"><i style="width:64%"></i></div><span class="tnum small">64%</span></div><div class="hbar"><span>Hotel / villa</span><div class="capbar"><i style="width:28%"></i></div><span class="tnum small">28%</span></div><div class="hbar"><span>Local</span><div class="capbar"><i style="width:8%"></i></div><span class="tnum small">8%</span></div></div>
    <h3>Busiest times</h3><p class="muted small">10:30 and 11:30 fill first on cruise days.</p></div></div>`;
  }
}
function statusPill(b){ return b.status==="in"?`<span class="pill in">Checked in${b.paid?" · "+b.paid:""}</span>`:b.paid?`<span class="pill paid">Paid · ${b.paid}</span>`:`<span class="pill booked">Booked</span>`; }

/* ---------- scanner ---------- */
let scan=null;
function renderScanner(){
  const list=S.bookings.filter(b=>b.date===S.seedDay).sort((a,b)=>a.slot.localeCompare(b.slot));
  $("#scanCount").textContent=`${list.filter(b=>b.status==="in").length}/${list.length} in`;
  let res="";
  if(scan==="bad") res=`<div class="result badr"><span class="st">✕ NOT VALID</span><p>This code isn't a booking for today. Check the date on the voucher or look the name up in the list.</p><button type="button" class="ghost" id="scanReset">Scan again</button></div>`;
  else if(scan){ const b=S.bookings.find(x=>x.ref===scan), t=total(b.adults,b.children), done=b.status==="in";
    res=`<div class="result good"><span class="st">✓ VALID BOOKING</span><dl class="kv" style="grid-template-columns:90px minmax(0,1fr)"><dt>Name</dt><dd>${esc(b.name)}</dd><dt>Tour</dt><dd>${fmtT(b.slot)} · ${esc(tourById(b.tour).name)}</dd><dt>Group</dt><dd>${b.adults} adults, ${b.children} children</dd><dt>Due</dt><dd class="tnum">EC$${money(t)} / US$${money(t/FX)}</dd></dl>
    ${done?`<p><b>Checked in</b>${b.paid?`, paid by ${b.paid}`:""}.</p><button type="button" class="ghost" id="scanReset">Next visitor</button>`
    :`<div class="grid2" style="grid-template-columns:1fr 1fr"><button type="button" data-pay="cash" class="${b.paid==="cash"?"":"ghost"}">Paid cash</button><button type="button" data-pay="card" class="${b.paid==="card"?"":"ghost"}">Paid card</button></div><button type="button" id="checkIn" ${b.paid?"":"disabled"}>Check in group</button>`}</div>`; }
  else res=`<div class="viewfinder">Point the camera at the voucher QR code<br><br>(simulated below)</div>`;
  $("#scanBody").innerHTML = res + `<div class="pick"><div class="small muted">Today's vouchers · ${fmtShort(S.seedDay)} · tap to simulate a scan</div>${list.map(b=>`<button type="button" data-scan="${b.ref}"><span>${fmtT(b.slot)} · ${esc(b.name.replace("Sample: ",""))}</span><span>${b.status==="in"?"✓ in":b.adults+b.children+" ppl"}</span></button>`).join("")}<button type="button" data-scan="bad"><span>Scan an invalid code</span><span>✕</span></button></div>
  <p class="small muted">Works offline in the real app and syncs when back online.</p>`;
}

/* ---------- page start-up ---------- */
const PAGE=document.body.dataset.page||"home";
const ENQ={group:"Large group / cruise group tour",weddings:"Weddings",hire:"Venue or event hire"};
function init(){
  const here=PAGE==="home"?"index.html":PAGE+".html";
  const mode=PAGE==="admin"?"admin":PAGE==="scanner"?"scanner":"site";
  document.querySelectorAll(".modes a").forEach(a=>a.classList.toggle("on",a.dataset.mode===mode));
  document.querySelectorAll("nav.main a").forEach(a=>a.classList.toggle("on",a.getAttribute("href")===here));
  const q=new URLSearchParams(location.search);
  renderStatic();
  if(PAGE==="book"){ const t=q.get("tour"); if(t&&tourById(t)) B.tour=t; renderBook(); }
  if(PAGE==="admin") renderAdmin();
  if(PAGE==="scanner") renderScanner();
  if(PAGE==="contact"){ const e=ENQ[q.get("enq")]; if(e) $("#enqType").value=e; enqChange(); }
}

/* ---------- history event details ---------- */
const EVLIST = ERAS.flatMap((e,i)=>e[3].map((ev,j)=>({i,j,era:e,ev})));
let evPos = 0;
function openEvent(key){
  evPos = EVLIST.findIndex(x=>`${x.i}-${x.j}`===key); if(evPos<0) return;
  showEvent(); const d=$("#evDlg");
  if(typeof d.showModal==="function"){ if(!d.open) d.showModal(); } else d.setAttribute("open","");
}
function showEvent(){
  const {era,ev}=EVLIST[evPos];
  $("#evEra").textContent = `${era[0]} · ${era[1]}`;
  $("#evYear").textContent = ev[0];
  $("#evTitle").textContent = ev[1];
  $("#evPhoto").innerHTML = `<div><b>PHOTO</b>${esc(ev[4])}</div>`;
  $("#evText").textContent = ev[3];
  $("#evCount").textContent = `Event ${evPos+1} of ${EVLIST.length}`;
  $("#evPrev").disabled = evPos===0; $("#evNext").disabled = evPos===EVLIST.length-1;
}
function closeEvent(){ const d=$("#evDlg"); if(typeof d.close==="function" && d.open) d.close(); else d.removeAttribute("open"); }

/* ---------- events ---------- */
document.addEventListener("click",e=>{
  if(e.target.id==="evDlg"){ closeEvent(); return; }
  const el=e.target.closest("button,a"); if(!el) return;
  if(el.dataset.ev) openEvent(el.dataset.ev);
  if(el.id==="evClose") closeEvent();
  if(el.id==="evPrev"&&evPos>0){ evPos--; showEvent(); }
  if(el.id==="evNext"&&evPos<EVLIST.length-1){ evPos++; showEvent(); }
  if(el.id==="resetBtn"){ try{ localStorage.removeItem(KEY); }catch(e){} location.reload(); }
  if(el.dataset.tourpick){ B.tour=el.dataset.tourpick; renderBook(); }
  if(el.dataset.day){ B.date=el.dataset.day; B.slot=null; renderBook(); }
  if(el.dataset.slot){ B.slot=el.dataset.slot; renderBook(); }
  if(el.id==="mPrev"){ B.month=new Date(B.month.getFullYear(),B.month.getMonth()-1,1); renderBook(); }
  if(el.id==="mNext"){ B.month=new Date(B.month.getFullYear(),B.month.getMonth()+1,1); renderBook(); }
  if(el.dataset.inc){ B[el.dataset.inc]++; updateParty(); }
  if(el.dataset.dec){ const k=el.dataset.dec; B[k]=Math.max(k==="adults"?1:0,B[k]-1); updateParty(); }
  if(el.id==="next"){ B.step++; renderBook(); window.scrollTo(0,0); }
  if(el.id==="back"){ B.step--; renderBook(); }
  if(el.id==="toStep1"){ e.preventDefault(); B.step=1; renderBook(); }
  if(el.id==="confirm") confirmBooking();
  if(el.id==="again"){ B.step=1; B.date=null; B.slot=null; renderBook(); window.scrollTo(0,0); }
  if(el.id==="dlV") toast("In the real site this downloads the voucher as a PDF.");
  if(el.id==="chg"||el.id==="mailChg"||el.id==="chg2"){ e.preventDefault(); toast("Opens a page to change the date or cancel. Planned for the build."); }
  if(el.dataset.mail) showMail(el.dataset.mail);
  if(el.dataset.tab){ adminTab=el.dataset.tab; renderAdmin(); }
  if(el.id==="export") toast("Downloads bookings.csv in the real dashboard.");
  if(el.dataset.mock) toast(el.dataset.mock+" opens an editor in the real dashboard.");
  if(el.id==="blkAdd"){ const v=$("#blkDate").value; if(!v){toast("Choose a date first.");return;} S.blocked.add(v); save(); renderAdmin(); toast(`Blocked ${fmtShort(v)}. The booking calendar now greys it out.`); }
  if(el.dataset.unblock){ S.blocked.delete(el.dataset.unblock); save(); renderAdmin(); }
  if(el.dataset.scan){ scan=el.dataset.scan; renderScanner(); }
  if(el.id==="scanReset"){ scan=null; renderScanner(); }
  if(el.dataset.pay){ const b=S.bookings.find(x=>x.ref===scan); b.paid=el.dataset.pay; save(); renderScanner(); }
  if(el.id==="checkIn"){ const b=S.bookings.find(x=>x.ref===scan); b.status="in"; save(); renderScanner(); toast(`${b.name.replace("Sample: ","")} checked in. The dashboard updates too.`); }
  if(el.id==="qBtn"){ $("#drawer").hidden=false; $("#qClose").focus(); }
  if(el.id==="qClose") $("#drawer").hidden=true;
  if(el.id==="tbdBtn"){ const on=document.body.classList.toggle("hide-tbd"); el.textContent=on?"Show labels":"Hide labels"; el.setAttribute("aria-pressed",String(!on)); }
  if(el.id==="menuBtn"){ const o=$("#mainNav").classList.toggle("open"); el.setAttribute("aria-expanded",String(o)); }
});
document.addEventListener("keydown",e=>{ if(e.key==="Escape") $("#drawer").hidden=true;
  if($("#evDlg").open){ if(e.key==="ArrowRight"&&evPos<EVLIST.length-1){evPos++;showEvent();} if(e.key==="ArrowLeft"&&evPos>0){evPos--;showEvent();} } });
document.addEventListener("submit",e=>{
  e.preventDefault();
  const f=e.target;
  if(f.id==="detForm"){ Object.assign(B.d,{name:$("#dName").value.trim(),email:$("#dEmail").value.trim(),phone:$("#dPhone").value.trim(),country:$("#dCountry").value,via:$("#dVia").value,viaName:$("#dViaName").value.trim(),lang:$("#dLang").value,heard:$("#dHeard").value,access:$("#dAccess").value.trim()});
    if(!B.d.name||!B.d.email){toast("Add a name and email so we can send the voucher.");return;} B.step=4; renderBook(); window.scrollTo(0,0); }
  if(f.id==="enqForm") toast(`Enquiry sent to the ${$("#enqType").value.startsWith("Large")?"tour coordinator":"parish office"} (prototype: nothing is sent).`);
  if(f.id==="newsForm") toast("You're signed up (prototype: nothing is sent).");
  if(f.id==="setForm"){
    S.prices.adult=Math.max(0,+$("#sAdult").value||0); S.prices.child=Math.max(0,+$("#sChild").value||0);
    const sl=$("#sSlots").value.split(",").map(s=>s.trim()).filter(s=>/^\d{1,2}:\d{2}$/.test(s)).map(s=>s.padStart(5,"0"));
    if(sl.length) S.slots=sl.sort(); S.capacity=Math.max(1,+$("#sCap").value||1); S.maxOnline=Math.max(1,+$("#sMax").value||1);
    save(); renderAdmin(); toast("Saved. The booking page and price calculator use the new values.");
  }
});
function enqChange(){ const v=$("#enqType").value, grp=v.startsWith("Large");
  $("#groupFields").hidden=!grp;
  const to={"General question":"parish office","Large group / cruise group tour":"tour coordinator","Weddings":"parish office","Venue or event hire":"parish administrator","Donations & restoration":"restoration committee"}[v];
  $("#enqRoute").innerHTML=`Goes to: ${to} <span class="tbd">Routing TBD</span>`; }
document.addEventListener("change",e=>{
  if(e.target.id==="enqType") enqChange();
  if(e.target.id==="admDate"){ adminDate=e.target.value||S.seedDay; renderAdmin(); }
});

init();
