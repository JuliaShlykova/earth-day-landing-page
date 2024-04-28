if (window.innerWidth > 700) {
  let lastScrollY = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    let threshold = 100;
    const diff = scrollY - lastScrollY
    const scrollDownFast = diff >= threshold;
    const scrollUpTooFast = diff <= -threshold;
    if (scrollDownFast) {
      window.scroll({
        top: window.innerHeight + lastScrollY - 10,
        left: 0
      });
      lastScrollY = Math.ceil(window.scrollY / window.innerHeight) * this.window.innerHeight;
      console.log(window.scrollY);
    }
    else if (scrollUpTooFast) {
      window.scrollTo({
        top: lastScrollY - window.innerHeight + 10,
        left: 0
      });
      lastScrollY = Math.floor(window.scrollY / window.innerHeight) * this.window.innerHeight;
    }
  });
}


