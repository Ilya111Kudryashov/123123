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
// const swiper = new Swiper('#mainBenefitSlider', {
  

//   pagination: {
//     el: '#mainBenefitpagination',
//   },
// 	effect: "fade",
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// });

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
});




const header=document.querySelector(".header")
const headerSearch=document.querySelector(".header__search-btn")
const burgerBtn=document.querySelector('.burger__btn');
const headerWrpa=document.querySelector('.header__wrapper');

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

// burger

burgerBtn.addEventListener('click',function(){
  headerWrpa.classList.toggle('menu-open');
  document.body.classList.toggle("no-scroll");
})














// let sliderTabs = document.querySelector('.scrolling_wrapper');

// sliderTabs.addEventListener('wheel', function(event) {

//     event.preventDefault();

//     // 120 длина вкладки, выходящей за пределы экрана.

//     if(sliderTabs.scrollLeft === 0) sliderTabs.scrollLeft += 120;   
//     else sliderTabs.scrollLeft -= 120;
// });

// // Автоскрол при нажатии на вкладки

// let tabs = document.querySelectorAll('.scrolling_wrapper');

// tabs.forEach((item) => {
//     item.onclick = function() {
//         if(item.textContent == 'Вкладка за пределами экрана') {
//             sliderTabs.scrollLeft += 120
//         }
//         if(item.textContent == 'Первая вкладка') {
//             sliderTabs.scrollLeft -= 120
//         }
//     };
// });
// const scrollContainer = document.querySelector(".scrolling_wrapper");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
// });


// /**
// * By Alvaro Trigo 
// * Follow me on Twitter: https://twitter.com/imac2
// */
// (function(){
//   init();

//   function init(){
//       setStickyContainersSize();
//       bindEvents();
//   }

//   function bindEvents(){
//       window.addEventListener("wheel", wheelHandler);        
//   }

//   function setStickyContainersSize(){
//       document.querySelectorAll('.scrolling_wrapper .card').forEach(function(container){
//           const stikyContainerHeight = container.querySelector('.scrolling_wrapper').scrollWidth;
//           container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
//       });
//   }

//   function isElementInViewport (el) {
//       const rect = el.getBoundingClientRect();
//       return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
//   }

//   function wheelHandler(evt){
      
//       const containerInViewPort = Array.from(document.querySelectorAll('.scrolling_wrapper .card')).filter(function(container){
//           return isElementInViewport(container);
//       })[0];

//       if(!containerInViewPort){
//           return;
//       }

//       var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
//       var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
//       let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

//       if(g_canScrollHorizontally){
//           containerInViewPort.querySelector('.scrolling_wrapper').scrollLeft += evt.deltaY;
//       }
//   }
// })();


{/* <script> */}
    initMagicScroll();
    function initMagicScroll() {
        const groups = [];
        $('.uc-rightscroll, .uc-leftscroll').each(function() {
            if ($(this).prev().hasClass('uc-rightscroll') && $(this).hasClass('uc-rightscroll')) {
                groups[groups.length - 1].$els = groups.at(-1).$els.add($(this));
                return;
            }

             if ($(this).prev().hasClass('uc-leftscroll') && $(this).hasClass('uc-leftscroll')) {
                groups[groups.length - 1].$els = groups.at(-1).$els.add($(this));
                return;
            }
    
            groups.push({
                $els: $(this),
                options: {
                    dir: $(this).hasClass('uc-leftscroll') ? 'left' : 'right'
                }
            });
        });
    
        const map = {};
        for (let group of groups) {
            const id = 'uc' + Date.now();
            map[id] = group;
            const extraStyle = group.options.dir === 'right' ? `left: -${group.$els.length - 1}00px; flex-direction: row-reverse;` : '';
            group
                .$els
                .css({
                    flex: '0 0',
                })
                .wrapAll(`<div id="pin-${id}" style="overflow: hidden; width: 100vw; height: 100vh;"><div id="${id}" style="display: flex; width: ${group.$els.length}00px; height: 100%; position: relative; ${extraStyle}"></div></div>`);
        }
    
        const controller = new ScrollMagic.Controller();
    
        for (let id in map) {
            const delta = 100 - 100 / map[id].$els.length;
            const sign = (map[id].options.dir === 'left') ? '-' : '';
            const animation = new TimelineMax().to(`#${id}`, 1, {x: `${sign}${delta}%`, ease: Linear.easeNone});

            new ScrollMagic.Scene({
                triggerElement: `#pin-${id}`,
                triggerHook: "onLeave",
                duration: `${map[id].$els.length}00%`
            })
            .setPin(`#pin-${id}`)
            .setTween(animation)
            .addTo(controller);    
        }    
    }
// </script>