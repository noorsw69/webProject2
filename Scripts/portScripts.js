const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80, 
      behavior: 'smooth'
    });
  });
});
