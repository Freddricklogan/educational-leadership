/* Page widgets for educational-leadership, moved from inline script blocks by the Learning Resource Kit converter.
   Runs as an ES module after the document is parsed; the kit mounts the shell and quiz separately. */

// ---- Tabs: four organizational frames ----
document.querySelectorAll('#frametabs .tab').forEach(t=>{
  t.onclick=()=>{
    document.querySelectorAll('#frametabs .tab').forEach(x=>x.classList.remove('active'));
    document.querySelectorAll('#org .panel').forEach(p=>p.classList.remove('active'));
    t.classList.add('active');
    document.getElementById(t.dataset.p).classList.add('active');
  };
});

// ---- PDSA improvement-cycle stepper ----
const PDSA={
  aim:'AIM: Reduce 9th-grade chronic absenteeism (missing 10%+ of days) from 22% to 12% by June — starting with one small, fast test.',
  steps:[
    'PLAN: Hypothesize that a positive same-day call home on a student\'s FIRST absence will improve attendance. Test with one advisory (18 students) for two weeks. Predict fewer repeat absences. Measure: repeat-absence rate + a brief family sentiment check.',
    'DO: Advisors make same-day, warm "we missed you" calls on any first absence. Log each call, note what happened, and capture surprises — a wrong number, a night-shift parent, a student who was actually suspended.',
    'STUDY: Compare prediction to data. Repeat absences fell in the test advisory vs. a comparison group; families reacted well to a positive (not punitive) call — but advisors couldn\'t reach 30% of numbers, and calls took longer than planned.',
    'ACT: ADOPT the positive first-absence call; ADAPT by adding home-language texts and updating contact info first; then run the next PDSA to fix the unreachable-family problem. The cycle seeds the next, better test.'
  ],
  hints:[
    'PLAN — state a change idea, a prediction, and how you\'ll measure it. Keep the test small and fast so learning is cheap.',
    'DO — run the test on a small scale and document what actually happened, including the surprises.',
    'STUDY — compare results to your prediction. The unexpected findings are often the most valuable learning.',
    'ACT — decide: Adopt, Adapt, or Abandon. Then start the next cycle. Improvement is a staircase of PDSA cycles.'
  ]
};
let pd=0;
function renderPDSA(){
  document.getElementById('pdsaAim').textContent=PDSA.aim;
  for(let i=0;i<4;i++){
    document.getElementById('p'+i).textContent = i<=pd ? PDSA.steps[i] : '';
    document.querySelectorAll('#pdsa .rung')[i].classList.toggle('on', i<=pd);
  }
  document.getElementById('pdsaHint').textContent=PDSA.hints[pd];
  document.getElementById('pdsaPrev').disabled = pd===0;
  document.getElementById('pdsaNext').textContent = pd===3 ? 'Restart cycle' : 'Next phase →';
}
document.getElementById('pdsaNext').onclick=()=>{ pd = pd===3 ? 0 : pd+1; renderPDSA(); };
document.getElementById('pdsaPrev').onclick=()=>{ if(pd>0){pd--;renderPDSA();} };
renderPDSA();

// ---- Equity-audit scorer ----
const acks=document.querySelectorAll('#auditlist .ck');
function scoreAudit(){
  let s=0; acks.forEach(c=>{ if(c.classList.contains('on')) s+=parseInt(c.dataset.w,10); });
  s=Math.min(100,s);
  document.getElementById('auditFill').style.width=s+'%';
  const v=document.getElementById('auditVerdict');
  if(s===0){v.textContent='Select the practices your school consistently does';v.style.color='var(--lr-muted)';}
  else if(s<35){v.textContent=s+'% — Emerging: start by disaggregating data & discipline';v.style.color='var(--lr-bad)';}
  else if(s<70){v.textContent=s+'% — Developing: extend to access, resources & representation';v.style.color='var(--lr-warn)';}
  else{v.textContent=s+'% — Advanced: comprehensive, data-grounded equity practice';v.style.color='var(--lr-good)';}
}
acks.forEach(c=>c.onclick=()=>{c.classList.toggle('on');scoreAudit();});
scoreAudit();

