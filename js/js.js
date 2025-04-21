// code modified from https://github.com/treehouse/ham-menu/tree/main

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  console.log("ham clicked")
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

// ABOUT PAGE HOVER

const thumbnails = document.querySelectorAll('.home-container');

const overlays = document.querySelectorAll('.overlay');

for (let index = 0; index < thumbnails.length; index++){

  console.log("Adding image listener index");

  console.log(thumbnails[index]);

  thumbnails[index].addEventListener('mouseover', function() {
    console.log("image hovered over");
    overlays[index].style.visibility = 'visible';
    
});

  thumbnails[index].addEventListener('mouseout', function() {
    overlays[index].style.visibility = 'hidden';
  });
};


