const searchInput = document.getElementById('search');
const searchResults = document.getElementById('searchResults');
const items = searchResults.getElementsByClassName('search-item');

searchInput.addEventListener('keyup', function() {
    const searchTerm = searchInput.value.toLowerCase();

    for (let item of items) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    }
});
let item = document.getElementById('searchResults');
let ser = document.getElementById('search');
let itemss = document.getElementsByClassName('scroll-item');

ser.addEventListener('click', function () {
  item.style.display = "block";
});

ser.addEventListener('blur', function () {
  setTimeout(() => {
    item.style.display = "none";
  }, 200);
});

Array.from(itemss).forEach((el) => {
  el.addEventListener('click', function () {
    ser.value = el.textContent.trim();
    item.style.display = "none";

    // نحدد هل الجهاز موبايل ولا لا
    let isMobile = window.innerWidth <= 868;

    // ناخد القيمة من data attribute
    let scrollMobile = parseFloat(el.dataset.scrollMobile);
    let scrollLaptop = parseFloat(el.dataset.scrollLaptop);

    let scrollValue = isMobile ? scrollMobile : scrollLaptop;

    if (!isNaN(scrollValue)) {
      window.scrollTo({
        top: window.innerHeight * scrollValue,
        behavior: "smooth"
      });
    }
  });
});


window.onscroll = function () {
  let loon = document.querySelector(".loon");
  let loow = document.querySelector(".loow");
  let looe = document.querySelector(".looe");
  let loor = document.querySelector(".loor");
  let loot = document.querySelector(".loot");

  let isMobile = window.innerWidth <= 868;
  let pageHeight = document.body.scrollHeight - window.innerHeight;
  

  // نرجع الكل أبيض الأول
  [loon, loow, looe, loor, loot].forEach(el => el.style.background = "white");
  

  
  

  
  if (isMobile) {
    // قيم مخصصة للموبايل حسب الطول
    let firstScroll = pageHeight * 0.18;
    let secondScroll = pageHeight * 0.38;
    let thirdScroll = pageHeight * 0.58;
    let fourthScroll = pageHeight * 0.78;
    let lastScroll = pageHeight * 0.98;
    document.querySelector(".loon").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.16;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loow").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.36;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".looe").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.55;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loor").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.75;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loot").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 1.0;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });
    
    
    

    if (scrollY >= firstScroll && scrollY < secondScroll) {
      loon.style.background = "#fc943a";
    } else if (scrollY >= secondScroll && scrollY < thirdScroll) {
      loow.style.background = "#fc943a";
    } else if (scrollY >= thirdScroll && scrollY < fourthScroll) {
      looe.style.background = "#fc943a";
    } else if (scrollY >= fourthScroll && scrollY < lastScroll) {
      loor.style.background = "#fc943a";
    } else if (scrollY >= lastScroll) {
      loot.style.background = "#fc943a";
    }

  } else {
    // قيم مخصصة للاب توب حسب الطول
    let firstScroll = pageHeight * 0.3;
    let secondScroll = pageHeight * 0.5;
    let thirdScroll = pageHeight * 0.7;
    let fourthScroll = pageHeight * 0.85;
    let lastScroll = pageHeight * 1.0;


    document.querySelector(".loon").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.26;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loow").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.46;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".looe").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.65;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loor").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 0.85;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    document.querySelector(".loot").addEventListener("click", function () {
      let pageHeight = document.body.scrollHeight - window.innerHeight;
      let scrollPosition = pageHeight * 1.0;
    
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth"
      });
    });

    if (scrollY >= firstScroll && scrollY < secondScroll) {
      loon.style.background = "#fc943a";
    } else if (scrollY >= secondScroll && scrollY < thirdScroll) {
      loow.style.background = "#fc943a";
    } else if (scrollY >= thirdScroll && scrollY < fourthScroll) {
      looe.style.background = "#fc943a";
    } else if (scrollY >= fourthScroll && scrollY < lastScroll) {
      loor.style.background = "#fc943a";
    } else if (scrollY >= lastScroll) {
      loot.style.background = "#fc943a";
    }
  }
};






