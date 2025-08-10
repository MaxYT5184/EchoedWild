// main.js — dynamic site behavior
document.addEventListener('DOMContentLoaded', async ()=> {
  // fill year spans
  ['year','year2','year3','year4','year5','year6','year7','year8'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = new Date().getFullYear();
  });

  // header controls
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('mainNav');
  if(hamburger && nav){
    hamburger.addEventListener('click', ()=> {
      nav.classList.toggle('open');
      if(window.innerWidth < 720) nav.style.display = nav.classList.contains('open') ? 'block' : '';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> {
      if(window.innerWidth < 720){ nav.classList.remove('open'); nav.style.display = ''; }
    }));
  }

  // toggle search on mobile (optional)
  const searchToggle = document.getElementById('searchToggle');
  const globalSearch = document.getElementById('globalSearch');
  if(searchToggle && globalSearch){
    searchToggle.addEventListener('click', ()=> {
      globalSearch.focus();
    });
  }

  // load animals data if page includes animals grid or status or featured
  const animalsUrl = 'data/animals.json';
  let animals = [];
  try {
    const res = await fetch(animalsUrl);
    animals = await res.json();
  } catch(e){
    console.error('Failed to load animals.json', e);
  }

  // populate featured (index.html)
  const featuredGrid = document.getElementById('featuredGrid');
  if(featuredGrid && animals.length){
    // pick first 3 to show
    animals.slice(0,6).forEach(a => featuredGrid.appendChild(createCard(a)));
  }

  // populate animals list page
  const animalsGrid = document.getElementById('animalsGrid');
  const listSearch = document.getElementById('listSearch');
  const statusFilter
