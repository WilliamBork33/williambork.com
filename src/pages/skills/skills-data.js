import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_SEISMIC from "../../assets/img/skills/seismic_logo.png";
import L_MSU from "../../assets/img/skills/michigan-state-university.svg";
import L_GLOBAL from "../../assets/img/skills/globe.png";
import L_ACCESSIBILITY from "../../assets/img/skills/accessibility.svg";
import L_DATASCIENCE from "../../assets/img/skills/data-science.png";
import L_MULTILEVEL from "../../assets/img/skills/multilevel.svg";
import L_TEACHING from "../../assets/img/skills/teaching.png";
import L_SOCIALNETWORK from "../../assets/img/skills/socialnetwork.png";
import L_ONLINE from "../../assets/img/skills/online.png";
import L_RLANG from "../../assets/img/skills/r-lang.png";
import L_DATABASES from "../../assets/img/skills/databases.png";
import L_PYTHON from "../../assets/img/skills/python.png";

export const skills = {
  research: [
    {
      link: "https://en.wikipedia.org/wiki/Multilevel_model",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_MULTILEVEL,
      skillName: "Multilevel Modeling",
    },
    {
      link: "https://en.wikipedia.org/wiki/Social_network_analysis",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_SOCIALNETWORK,
      skillName: "Social Network Analysis",
    },
    {
      link: "#skills",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_GLOBAL,
      skillName: "Large-Scale Assessment",
    }
  ],

  technicalSkills: [
    {
      link: "https://en.wikipedia.org/wiki/Data_science",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_DATASCIENCE,
      skillName: "Data Science",
    },
        {
      link: "https://www.r-project.org/",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_RLANG,
      skillName: "R & RStudio",
    },
    {
      link: "https://www.python.org/",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_PYTHON,
      skillName: "Python",
    },
    {
      link: "https://en.wikipedia.org/wiki/Relational_database",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_DATABASES,
      skillName: "Databases",
    },
/*     {
      link: "https://reactjs.org/",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_REACT,
      skillName: "React JS",
    }, */


    {
      link: "https://git-scm.com/",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_GIT,
      skillName: "Version Control",
    },
    {
      link: "https://en.wikipedia.org/wiki/JavaScript",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_JAVASCRIPT,
      skillName: "Web Development",
    }    
  ],

  teaching: [
    {
      link: "#skills",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_TEACHING,
      skillName: "K-12 Teaching",
    },
    {
      link: "http://www.educ.msu.edu/",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_MSU,
      skillName: "Higher Education",
    },
    {
      link: "",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_ONLINE,
      skillName: "Sync, Async, Online",
    },
    {
      link: "https://www.a11yproject.com/",
      imgAltText: "Hyperlinked decorative image for each skill",
      imgSrc: L_ACCESSIBILITY,
      skillName: "Digital Accessibility",
    },

  ],

};
