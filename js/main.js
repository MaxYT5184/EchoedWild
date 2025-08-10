// main.js — hamburger + year injection
document.addEventListener('DOMContentLoaded', ()=>{
  // fill year spans
  ['year','year2','year3','year4','year5','year6','year7','year8'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');

  if(hamburger && nav){
    hamburger.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      // for small screens show/hide
      if(window.innerWidth < 720){
        if(nav.classList.contains('open')){
          nav.style.display = 'block';
        } else {
          nav.style.display = '';
        }
      }
    });

    // close nav when link clicked on mobile
    nav.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        if(window.innerWidth < 720){
          nav.classList.remove('open');
          nav.style.display = '';
        }
      });
    });
  }
});
