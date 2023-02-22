import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdWorkspacesOutline } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import { srcsets } from "../../public/srcsets";


export const projectExperience = [
  {
    name: "HTML & CSS Websites",
    projects: 5,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "React Websites",
    projects: 3,
    icon: MdWorkspacesOutline,
    bg: "#EEC048",
  },
  {
    name: "React Native Apps",
    projects: 2,
    icon: BiMobileAlt,
    bg: "#F26440",
  },
];






export const WhatDoIDo = [
  "I love helping new, developing businesses by building websites or apps to help reach a wider audience, and make it easier for customers to interact with their favorite brands.",
];






export const workExp = [
  {
    place: "Self-Employed, remote",
    tenure: "Mar 2022 - Present",
    role: "Web Dev",
    detail:
      "A web developer, building responsive, optimized websites and apps for businesses, working mainly with React and React Native",
  },
  // {
  //   place: "Self-Employed, Digital",
  //   tenure: "Dec 2022 - Present",
  //   role: "Web Dev",
  //   detail:
  //     "A web developer, building responsive, optimized websites and apps for businesses, working mainly with React and React Native",
  // },
  // {
  //   place: "Self-Employed, Digital",
  //   tenure: "Dec 2022 - Present",
  //   role: "Web Dev",
  //   detail:
  //     "A web developer, building responsive, optimized websites and apps for businesses, working mainly with React and React Native",
  // },
];







export const skills = [
  {
    name: "HTML",
    percentage: 95,
  },
  {
    name: "CSS",
    percentage: 85,
  },
  {
    name: "Tailwind",
    percentage: 65,
  },
  {
    name: "Javascript",
    percentage: 80,
  },
  {
    name: "React",
    percentage: 75,
  },
  {
    name: "React Native",
    percentage: 65,
  },
]









export const comments = [
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    img: "./people1.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    img: "./people2.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    img: "./people1.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    img: "./people2.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    img: "./people1.png",
  },
  {
    name: "Michael Smith",
    post: "Creative Manager",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero incidunt earum beatae exercitationem architecto nobis numquam unde.",
    img: "./people2.png",
  },
];







export const projects = [
  {
    id: 'react1',
    title: "Third Electrical Site",
    type: "site",
    tech: "React, CSS",
    githubSrc: "https://github.com/BennettHumphrey/Third-Electrical-Site-React/",
    deployedSrc: "https://bennetthumphrey.github.io/Third-Electrical-Site-React/",
    description: "My third project in the electrical sites series, I made this to reinforce knowledge of the basics after taking a break from coding for a while, and to play with some hover animations. Essentially a re-skin of the second electrical site, but I enjoyed making it.",
    mainscreenshotSrc: srcsets.electrical1.main,
    screenshots: [...srcsets.electrical1.screenshots],
    showcase: true,
  },
  {
    id: 'react2',
    title: "Uber & Deliveroo Fusion",
    type: "app",
    tech: "React Native, TailwindCSS",
    githubSrc: "https://github.com/BennettHumphrey/Deliveroo-Uber-Fusion",
    deployedSrc: "",
    description: "My first React Native project, I built the Uber and Deliveroo  apps separately then combined them together. I struggled getting the dependencies to combine without issues, and in this project I learned to love Yarn over NPM, for some reason using Yarn fixed everything. It was also my first time using TailwindCSS, which was a nice change after mainly just using normal CSS. I enjoyed struggling with the timing for the map zoom, it taught me a lot about async functions.",
    videoSrc: "./uber-deliveroo-clone/SVID_20230129_153818_1.mp4",
    mainscreenshotSrc: srcsets.uberDeliverooClone.main,
    screenshots: [...srcsets.uberDeliverooClone.screenshots],
    showcase: true,
  },
  {
    id: 'html2',
    title: "Second Electrical Site",
    type: "site",
    tech: "HTML, CSS, JS",
    githubSrc: "https://github.com/BennettHumphrey/Second-Electrical-Site/settings/pages",
    deployedSrc: "https://bennetthumphrey.github.io/Second-Electrical-Site/",
    description: "My second finished electrical website, and my first site with multiple pages. I learned about image sliders, which I ended up using 2 of. Also was the first time I tried optimizing page load time, and realized how much images matter for page speed.",
    mainscreenshotSrc: srcsets.electrical2.main,
    screenshots: [...srcsets.electrical2.screenshots],
    showcase: true,
  },
  {
    id: 'html1',
    title: "First Electrical Site",
    type: "site",
    tech: "HTML, CSS, JS",
    githubSrc: "https://github.com/BennettHumphrey/First-Electrical-Site",
    deployedSrc: "https://bennetthumphrey.github.io/First-Electrical-Site/",
    description: "This was my first ever project. I just used simple CSS and HTML, and a tiny bit of JS for the Modal. I used to be an Electrician, so my first projects were all Electrical company websites. At the time, this project helped solidify my knowledge of the basics. This site features a working Email form modal, and google maps location.",
    mainscreenshotSrc: srcsets.electrical3.main,
    screenshots: [...srcsets.electrical3.screenshots],
    showcase: false,
  },
]





export const imageSizes = {
  projectShowcase: "(max-width: 600px) 50vw, 30vw",
  moreWorks: "(max-width: 500px) 50vw, 30vw"
}


export const moreWorksSliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  // slidesToShow: 4,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true, 

  responsive: [
    {
      breakpoint: 900,
      settings: {
        // slidesToShow: 3,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 650,
      settings: {
        // slidesToShow: 2,
        slidesToShow: 1,
      },
    },
  ],
};

export const reviewSliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true, 

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
