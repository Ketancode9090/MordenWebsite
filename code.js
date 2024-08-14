const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

let timeout;

function mousemodifie() {
  let xscale = 1;
  let yscale = 2;

  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", (dets) => {
    let xdiff = dets.clientX - xprev;
    let ydiff = dets.clientY - yprev;
    xscale = gsap.utils.clamp(0.8, 1.2, xdiff);
    yscale = gsap.utils.clamp(0.8, 1.2, ydiff);
    xprev = dets.clientX;
    yprev = dets.clientY;
    mousemove(xscale, yscale);
  });
}

mousemodifie();

let cursor = document.querySelector(".minicircle");

function mousemove(xscale, yscale) {
  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeout);
    cursor.style.opacity = 1;
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursor.style.transform = `scale(${xscale}, ${yscale})`;
    setTimeout(() => {
      cursor.style.transform = `scale(1, 1)`;
    }, 100);
  });
}

window.addEventListener("mouseout", () => {
  cursor.style.opacity = 0;
});

function firstpageAnim() {
  var tl = gsap.timeline();

  tl.from(".navbar", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelm", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1,
      stagger: 0.2,
      delay: -1,
    })

    .from(".herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

firstpageAnim();

let elem = document.querySelectorAll(".box");
elem.forEach((elem) => {
  elem.addEventListener("mousemove", (dets) => {
    let diff = Math.floor(dets.clientY-elem.getBoundingClientRect().top)
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      top: diff,
      left: dets.clientX,
    });
  });
});
