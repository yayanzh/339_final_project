// RANDOM IMAGE SELECTOR WORK EXPERIENCE: code modified from https://www.geeksforgeeks.org/random-image-generator-using-javascript/ 

const imageSet1 = [
    {
      src: 'images/hockey-images/IMG_0036 2.png',
      alt: 'Yaya and 2 coworkers standing on the bench at the outdoor hockey game at Wrigley Field'
    },
    {
      src: 'images/hockey-images/IMG_0527.png',
      alt: "Garrett Schifsky's stall set up for game day"
    },
    {
      src:'images/hockey-images/IMG_0873 3.png',
      alt: "Yaya sitting in the back of a box truck surrounded by hockey bags"
    },
    {
      src: 'images/hockey-images/IMG_3391.png',
      alt: "Yaya changing Will Felicio's skate blade on the bench"
    },
    {
      src: 'images/hockey-images/IMG_3682.png',
      alt: "Yaya setting up the locker room for practice"
    },
    {
      src: 'images/hockey-images/IMG_4635 2.png',
      alt: "Yaya with 4 coworkers and a giant 2024 Frozen Four ticket"
    },
    {
      src: 'images/hockey-images/IMG_6351.png',
      alt: "Yaya with the 2024 NCAA Regionals trophy"
    },
    {
      src: 'images/hockey-images/IMG_7782 3.JPG',
      alt: "Yaya fixing Logan Stein's helmet during a game"
    }
  ]
  
  const imageSet2 = [
    {
      src: 'images/coaching-images/3EbkeeJuQRSs9jf_dp5B7A.jpg',
      alt: 'Yaya with 2 other swim coaches'
    },
    {
      src: 'images/coaching-images/GTonG9mvQZ6JMx4zp90nQg 2.jpg',
      alt: 'Yaya ski coaching being hugged by two young athletes'
    },
    {
      src: 'images/coaching-images/HzAN0CptSmWavR2KOM4zMA.jpg',
      alt: 'Yaya ski coaching with an athlete on her shoulders'
    },
    {
      src: 'images/coaching-images/64E06EE4-6D78-42A0-AFCA-2A3A4E6E82FA_1_201_a.jpeg',
      alt: 'Picture taken by Yaya of a swim athlete kicking with a kickboard'
    },
    {
      src: 'images/coaching-images/1B7B5546-42C6-4F7E-839E-DBE6F763DA78_1_201_a.jpeg',
      alt: 'Picutre taken by Yaya of swim athletes lined up to dive'
    }
  ]
  
  function showRandomImages(containerId, imageArray) {
    const container = document.getElementById(containerId); // gets image container
    const screenIsWide = window.innerWidth >= 800; // desktop when >= 800 px
    const numberOfImages = screenIsWide ? 3 : 1; // if screen is wide (desktop) is true, then 3 images else (mobile) 1 image
  
    const usedIndexes = new Set(); // holds unique random indexes 
    while (usedIndexes.size < numberOfImages && usedIndexes.size < imageArray.length) { 
        const randomIndex = Math.floor(Math.random() * imageArray.length); // keeps picking random numbers between 0 and pics.length - 1 (indexing) until enough pictures (1 or 3)
        usedIndexes.add(randomIndex); // adds index to usedIndexes (ensures no duplicate pictures)
    }
  
    usedIndexes.forEach(index => { //loops through set of random indexes chosen above
        const img = document.createElement('img'); // creates img element
        img.src = imageArray[index].src; // gets img element src from pics array at set index
        img.alt = imageArray[index].alt; // gets img element alt from pics array at set index
        img.className = 'responsive-img'; // adds class to style
        container.appendChild(img); // appends it to the image container
    });
  };
  
  
  document.addEventListener('DOMContentLoaded', () => { //changes on reload
    showRandomImages('imageContainer1', imageSet1);
    showRandomImages('imageContainer2', imageSet2);
  });