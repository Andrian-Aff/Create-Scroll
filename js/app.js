gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",

        scrub: true,
      },
    }
  );

  let itemsL = gsap.utils.toArray(".gallery__left .gallery__item");
  itemsL.map((item) => {
    gsap.fromTo(
      item,
      { x: -150, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-1000",
          end: "-100",
          scrub: true,
        },
      }
    );
  });

  let itemsR = gsap.utils.toArray(".gallery__right .gallery__item");
  itemsR.map((item) => {
    gsap.fromTo(
      item,
      { x: 150, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: "-1000",
          end: "-100",
          scrub: true,
        },
      }
    );
  });
}
