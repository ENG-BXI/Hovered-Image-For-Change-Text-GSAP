// const { default: gsap } = require("gsap");
const images = document.querySelectorAll('.images .img');
const allText = document.querySelectorAll('.texts .text h2');
allText.forEach((ele, inx) => {
  ele.innerHTML = ele.textContent
    .split('')
    .map(e => {
      return `<span>${e}</span>`;
    })
    .join('');
});
images.forEach((img, inx) => {
  const allSpan = allText[inx + 1].querySelectorAll('span');
  const DefaultSpan = allText[0].querySelectorAll('span');

  img.addEventListener('mouseenter', () => {
    gsap.to(img, {
      width: 100,
      height: 100
    });
    gsap.to(allText[0], {
      y: 100,
      ease: 'power.inOut'
    });
    gsap.to(allText[inx + 1], {
      y: 0,
      ease: 'power.inOut'
    });
    gsap.to(allSpan, {
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: 'center'
      },
      ease: 'power.inOut'
    });
    gsap.to(DefaultSpan, {
      y: 100,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: 'center'
      },
      ease: 'power.inOut'
    });
  });
  img.addEventListener('mouseleave', () => {
    gsap.to(img, {
      width: 70,
      height: 70,
      ease: 'power.inOut'
    });
    gsap.to(allText[0], {
      y: 0,
      delay: 0.1,
      ease: 'power.inOut'
    });
    gsap.to(allText[inx + 1], {
      y: '-100%',
      delay: 0.1,
      ease: 'power.inOut'
    });
    gsap.to(allSpan, {
      y: -100,
      duration: 1,
      stagger: {
        each: 0.05,
        from: 'center'
      },
      ease: 'power.inOut'
    });
    gsap.to(DefaultSpan, {
      y: 0,
      duration: 0.5,
      stagger: {
        each: 0.05,
        from: 'center'
      },
      ease: 'power.inOut'
    });
  });
});

// gsap.to('.texts .text h2', {
//   y: 0,
//   stagger: {
//     each: 5
//   }
// });
