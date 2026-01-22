const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let current = 0;
  
  function showSlide(index) {
    images.forEach((img,i)=> img.style.display = i===index?'block':'none');
  }
  
  showSlide(current);
  
  setInterval(()=>{
    current = (current+1)%images.length;
    showSlide(current);
  }, 3000);
});
