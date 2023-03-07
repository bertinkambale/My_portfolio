const hamberger = document.querySelector('.hamburger');
const navlink = document.querySelector('.menu');
const closeButton = document.querySelector('.close-btn');

hamberger.addEventListener('click', () => {
  navlink.style.display = 'initial';
});

closeButton.addEventListener('click', () => {
  navlink.style.display = 'none';
});

navlink.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navlink.style.display = 'none';
  }
});

const projectCard=[
  {
    name: "Tonic" 
    speciality:"canopy,Back End Dev,2015",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImages:"images/Picture_1.png",
    technologies:"html,css,javascript",
    Sourcelink:"https://github.com/bertinkambale/My_portfolio",
    liveVersion:"https://bertinkambale.github.io/My_portfolio/"
  },
  {
    name:"Tonic",
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImages:"images/Picture_1.png",
    technologies:"html,css,javascript",
    Sourcelink:"https://github.com/bertinkambale/My_portfolio",
    liveVersion:"https://bertinkambale.github.io/My_portfolio/"
  },
  {
    name: "Tonic",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImages:"images/Picture_1.png",
    technologies:"html,css,javascript",
    sourceLink:"https://github.com/bertinkambale/My_portfolio",
    liveVersion:"https://bertinkambale.github.io/My_portfolio/"
  },
  {
    name:"Tonic",
    description:"A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImages:"images/Picture_1.png",
    technologies:"html,css,javascript",
    Sourcelink:"https://github.com/bertinkambale/My_portfolio",
    liveVersion:"https://bertinkambale.github.io/My_portfolio/"
  }
];