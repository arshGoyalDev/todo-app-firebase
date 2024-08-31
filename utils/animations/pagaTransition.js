import gsap from "gsap";

const animatePageIn = () => {
  const bannerOne = document.querySelector(".banner-1");
  const bannerTwo = document.querySelector(".banner-2");
  const bannerThree = document.querySelector(".banner-3");

  if (bannerOne && bannerTwo && bannerThree) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree], {
      yPercent: 100,
      stagger: 0.2,
    });
  }
};

const animatePageOut = (href, router) => {
  const bannerOne = document.querySelector(".banner-1");
  const bannerTwo = document.querySelector(".banner-2");
  const bannerThree = document.querySelector(".banner-3");

  if (bannerOne && bannerTwo && bannerThree) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree], {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export { animatePageIn, animatePageOut };
