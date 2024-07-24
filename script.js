const mobileMenuFunction = (function () {
    const openMenuBtn = document.querySelector('.open-menuBtn');
    const closeMenuBtn = document.querySelector('.close-menuBtn');
    const mobileMenu = document.querySelector('.nav-burger');
    const linksMobileMenu = document.querySelectorAll('.menu-link');
  
    openMenuBtn.addEventListener('click', (e) => {
      mobileMenu.classList.add('open');
    });
  
    closeMenuBtn.addEventListener('click', (e) => {
      mobileMenu.classList.remove('open');
    });
  
    linksMobileMenu.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); 
  
        const target = document.querySelector(link.getAttribute('href'));
  
        if (target) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const scrollTop =
            target.getBoundingClientRect().top + window.scrollY - headerHeight;
  
          window.scrollTo({
            top: scrollTop,
          });
        }
  
        mobileMenu.classList.remove('open');
      });
    });
  })();