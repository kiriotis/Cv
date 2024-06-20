export const data = {
  head: {
    firstName: "Ivan",
    secondName: "Rybak",
    age: "28 y.o.",
    description: " Front-end developer ",
    language: "A2",
    location: "Minsk, Belarus",
    contacts: [
      {
        type: "email",
        value: "vany.ryba@gmail.com",
        link: "mailto:vany.ryba@gmail.com",
      },
      {
        type: "link",
        value: "ivan-rybak",
        link: "https://www.linkedin.com/in/ivan-rybak-763261265/",
      },
      {
        type: "link",
        value: "github/kiriotis",
        link: "https://github.com/kiriotis",
      },
      {
        type: "call",
        value: "+375-29-248-27-52",
        link: "tel:+375-29-248-27-52",
      },
    ],
  },
  about: [
    {
      title: "",
      text: "Frontend Developer with one year of experience in leveraging JavaScript to build responsive websites, web applications, and interactive features that drive business growth.",
    },
    {
      title: "",
      text: "In development I use tools such as  Typescript, Axios,  HTML/CSS, SCSS/Tailwind , Webpack, ESLint, Git.",
    },
  ],
  education: [{ title: "RS School", education: "Front-end Developer" }],
  hardSkills: [
    { name: "HTML", progress: "80" },
    { name: "CSS/SCSS/Tailwind", progress: "80" },
    { name: "JS", progress: "75" },
    { name: "TS", progress: "60" },
  ],
  softSkills: [
    {
      icon: "fa-regular fa-comments",
      skill: "Communication and Negotiation Skills",
    },
    {
      icon: "fa-regular fa-compass",
      skill: "Leadership, Responsibility and Motivation",
    },
    { icon: "fa-solid fa-compass", skill: "Teamwork" },
    { icon: "fa-solid fa-hammer", skill: "Problem-solving skills" },
    { icon: "fa-solid fa-handshake-simple", skill: "Adaptability" },
  ],
  experience: [
    {
      title: "Landing site",
      period: "11.2023 ",
      description: "Website layout using pixel perfect ",
      link: "https://kiriotis.github.io/LK_ExportLift/main_ExportLift",
    },
    {
      title: "Developing of Coffee House",
      period: "12.2023 ",
      description:
        "The site is written in javascript html scss. During development I used the principles of responsive design and adaptive design. The slider was written without using third-party libraries. Menu page uses dynamic rendering of product cards ",
      link: "https://rolling-scopes-school.github.io/kiriotis-JSFE2023Q4/coffee-house/index.html",
    },
    {
      title: 'Developing of game "Nonograms"',
      period: "02.2024 ",
      description:
        "A fully working game has been developed. The main technology is the use of SPA without third-party libraries Design prepared and implemented from scratch. Algorithms for calculating the total bill have been developed. And an algorithm has been developed to save results using Localstorage technologies. The project used methods of writing extensible code ",
      link: "https://rolling-scopes-school.github.io/kiriotis-JSFE2023Q4/nonograms/",
    },
    {
      title: 'Developing of element factory  "IO"',
      period: "04.2024 - ",
      description:
        "Joint development of a component library implemented in TypeScript without using third-party libraries. Participation in planning and design of modules. Active collaboration in the task manager using SCRUM technology. In the project I was involved in module refactoring and testing. Development of a routing module and creation of a UI library ",
      link: "https://github.com/Alexeykoh/IO",
    },
  ],
};
