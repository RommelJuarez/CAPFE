document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // menor = más rápido

  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  let started = false;
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.counter')?.closest('section');
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight && !started) {
      started = true;
      animateCounters();
    }
  });
});
