// Basic animation on scroll (fade-in nav items)
document.querySelectorAll('.nav a').forEach((link,i)=>{
  link.style.opacity = 0;
  setTimeout(()=>{
    link.style.transition = 'opacity 0.6s ease';
    link.style.opacity = 1;
  }, i*150);
});
