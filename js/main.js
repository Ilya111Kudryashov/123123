Fancybox.bind('[data-fancybox="gallAbout"]', {
	
});
Fancybox.bind('[data-fancybox="promo"]', {
	
});
document.querySelector(".footer__btn").addEventListener("click", () => {
  Fancybox.show([{ src: "#form", type: "inline" }]);
}); 
document.querySelector(".header__btn button").addEventListener("click", () => {
  Fancybox.show([{ src: "#form", type: "inline" }]);
}); 
document.querySelector(".header__btn--mobile button").addEventListener("click", () => {
  Fancybox.show([{ src: "#form", type: "inline" }]);
}); 

var bgvideo = document.getElementById("bgvideo");
bgvideo.muted = true;
bgvideo.play();
const swiper1 = new Swiper('#illustrationSlider', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '#illustrationPagination',
  },
  navigation: {
    nextEl: '#illustrationBtnNext',
    prevEl: '#illustrationBtnPrev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    
    1024: {
      slidesPerView: 3,
    },
  },
});
const benefitSwiperConfig={
  pagination: {
    el: '#mainBenefitpagination',
  },
	// effect: "fade",
  autoHeight: true,
  navigation: {
    nextEl: '#benefitNext',
    prevEl: '#benefitPrev',
  },

}


let benefit_swiper;

const breakpoint= window.matchMedia('(max-width:700px)');

const breakpointChecker=function(){
    if(breakpoint.matches===true){
     benefit_swiper = new Swiper('#mainBenefitSlider', benefitSwiperConfig);
        return;
    }else if(breakpoint.matches===false){
     if(benefit_swiper!==undefined)
        benefit_swiper.destroy(true,true);
     return;
    }
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();


//resize
jQuery(($) => {
  if ($(window).width() > 1191) {
    $('.header__menu-item--hasSub').hover(
      function(){
        $(this).removeClass('menu__item-subMobile')
          $(this).toggleClass('menu__item--active');
        },
    );
  }else{
    $('.header__menu-item--hasSub').on('click',function(){
      $(this).toggleClass('menu__item-subMobile')
      $(this).removeClass('menu__item--active');
    })
  }
  if ($(window).width() < 481) {
    $('.hwork__content').addClass('scrolling_wrapper')
    $('.hwork__content-item').addClass('uc-leftscroll')

    // try gsap
    gsap.registerPlugin(ScrollTrigger)
    // 1 example
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".scrolling_wrapper",
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: 3,
    //     markers: true,
    //     id: "scrub"
    //   } 
    // })
    // tl.to(".scrolling_wrapper", {
    //   duration: 1,
    //   start:"top center",
    //   // x: 0,
    //   end:"top right",
    //   rotation: 0,
    // })
    // .to(".scrolling_wrapper", {
    //   duration: 2,
    //   scale: 1,
    //   x:-2000
    // });

    // 2example

    let sections = gsap.utils.toArray(".hwork__content-item");

gsap.to(sections, {
  xPercent: -100 * (sections.length ),
  ease: "none",
  scrollTrigger: {
        trigger: ".scrolling_wrapper",
    start:"top 30%",
    end:"top 20%",
    // pin: true,
    //markers:true,
    duration:2,
    scrub: 2,
    snap: 1 / (sections.length -1),
    // end: () => "+=" + document.querySelector(".scrolling_wrapper").offsetWidth
  }
});


    
  // ScrollTrigger.create({
  //   trigger: ".trigger",
  //   start: "top center",
  //   end: "+=500",
  //   onUpdate: (self) => console.log("direction:", self.direction),
  // });
      // $('.hwork__content').mousewheel(function(e, delta) {
      
      //     this.scrollLeft -= (delta * 40);
      //     e.preventDefault();
      // });


      // 50на 50 рабочий
    // initMagicScroll();
    // function initMagicScroll() {
    //     const groups = [];
    //     $('.uc-rightscroll, .uc-leftscroll').each(function() {
    //         if ($(this).prev().hasClass('uc-rightscroll') && $(this).hasClass('uc-rightscroll')) {
    //             groups[groups.length - 1].$els = groups.at(-1).$els.add($(this));
    //             return;
    //         }

    //          if ($(this).prev().hasClass('uc-leftscroll') && $(this).hasClass('uc-leftscroll')) {
    //             groups[groups.length - 1].$els = groups.at(-1).$els.add($(this));
    //             return;
    //         }
    
    //         groups.push({
    //             $els: $(this),
    //             options: {
    //                 dir: $(this).hasClass('uc-leftscroll') ? 'left' : 'right'
    //             }
    //         });
    //     });
    
    //     const map = {};
    //     for (let group of groups) {
    //         const id = 'uc' + Date.now();
    //         map[id] = group;
    //         const extraStyle = group.options.dir === 'right' ? `left: -${group.$els.length - 1}00px; flex-direction: row-reverse;` : '';
    //         group
    //             .$els
    //             .css({
    //                 flex: '0 0 238px',
    //                 marginRight:"61px",
    //             })
    //             .wrapAll(`<div id="pin-${id}" style="overflow: hidden; width: 100vw; height: 61vh;"><div id="${id}" style="display: flex; width: ${group.$els.length}00px; height: 100%; position: relative; ${extraStyle}"></div></div>`);
    //     }
    
    //     const controller = new ScrollMagic.Controller();
    
    //     for (let id in map) {
    //         const delta = 100 - 100 / map[id].$els.length;
    //         const sign = (map[id].options.dir === 'left') ? '-' : '';
    //         const animation = new TimelineMax().to(`#${id}`, 1, {x: `${sign}${260}%`, ease: Linear.easeNone});//260

    //         new ScrollMagic.Scene({
    //             triggerElement: `#pin-${id}`,
    //             triggerHook: "onLeave",
    //             duration: `${map[id].$els.length}00%`
    //         })
    //         .setPin(`#pin-${id}`)
    //         .setTween(animation)
    //         .addTo(controller);    
    //     }    
    // }





  }else{
    $('.hwork__content').removeClass('scrolling_wrapper')
    $('.hwork__content-item').removeClass('uc-leftscroll')
  }
});




const header=document.querySelector(".header")
const headerSearch=document.querySelector(".header__search-btn")
const burgerBtn=document.querySelector('.burger__btn');
const headerWrpa=document.querySelector('.header__wrapper');
const backSearch=document.querySelector('.header__search-back');

headerSearch.addEventListener('click',function(){
  header.classList.add('header__search--active')
  document.body.classList.add("no-scroll");
  document.querySelector('.wrapper__content').classList.add('overlay')
  headerWrpa.classList.remove('menu-open')
})

// клик оверлей
document.addEventListener('click', function (e) {
  if (e.target == document.querySelector('.overlay')) {
    header.classList.remove('header__search--active')
  document.body.classList.remove("no-scroll");
  document.querySelector('.wrapper__content').classList.remove('overlay')
  }
});
//click btn back
backSearch.addEventListener('click',function(){
  header.classList.remove('header__search--active')
  document.body.classList.remove("no-scroll");
  document.querySelector('.wrapper__content').classList.remove('overlay')
})
// burger

burgerBtn.addEventListener('click',function(){
  headerWrpa.classList.toggle('menu-open');
  document.body.classList.toggle("no-scroll");
})

















 //try magic scroll
    // initMagicScroll();
    // function initMagicScroll() {
    //     const groups = [];
    //     $('.uc-rightscroll, .uc-leftscroll').each(function() {
    //         if ($(this).prev().hasClass('uc-rightscroll') && $(this).hasClass('uc-rightscroll')) {
    //             groups[groups.length - 1].$els = groups.at(-1).$els.add($(this));
    //             return;
    //         }

    //          if ($(this).prev().hasClass('uc-leftscroll') && $(this).hasClass('uc-leftscroll')) {
    //             groups[groups.length - 1].$els = groups.at(-1).$els.add($(this));
    //             return;
    //         }
    
    //         groups.push({
    //             $els: $(this),
    //             options: {
    //                 dir: $(this).hasClass('uc-leftscroll') ? 'left' : 'right'
    //             }
    //         });
    //     });
    
    //     const map = {};
    //     for (let group of groups) {
    //         const id = 'uc' + Date.now();
    //         map[id] = group;
    //         const extraStyle = group.options.dir === 'right' ? `left: -${group.$els.length - 1}00px; flex-direction: row-reverse;` : '';
    //         group
    //             .$els
    //             .css({
    //                 flex: '0 0',
    //             })
    //             .wrapAll(`<div id="pin-${id}" style="overflow: hidden; width: 100vw; height: 100vh;"><div id="${id}" style="display: flex; width: ${group.$els.length}00px; height: 100%; position: relative; ${extraStyle}"></div></div>`);
    //     }
    
    //     const controller = new ScrollMagic.Controller();
    
    //     for (let id in map) {
    //         const delta = 100 - 100 / map[id].$els.length;
    //         const sign = (map[id].options.dir === 'left') ? '-' : '';
    //         const animation = new TimelineMax().to(`#${id}`, 1, {x: `${sign}${delta}%`, ease: Linear.easeNone});

    //         new ScrollMagic.Scene({
    //             triggerElement: `#pin-${id}`,
    //             triggerHook: "onLeave",
    //             duration: `${map[id].$els.length}00%`
    //         })
    //         .setPin(`#pin-${id}`)
    //         .setTween(animation)
    //         .addTo(controller);    
    //     }    
    // }
