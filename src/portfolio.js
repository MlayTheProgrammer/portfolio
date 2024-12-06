/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Richard Mlay",
  title: "Hey! I am a Software Engineer who loves creating meaningful and interesting products through code and the help of many software tools",
  subTitle: emoji(
    "A dedicated Software Engineer 🚀 with strong expertise in developing innovative web, mobile, and AI-driven solutions. Experienced in Java, Python, React, Angular, and C# to create impactful, high-quality software applications."
  ),
  resumeLink: "https://www.dropbox.com/scl/fi/9qf8bsm69mfbi9zeel49d/RichardMlay-SoftwareEngineer.pdf?rlkey=zf7w1oy9ri8fczco8i9vb5n7u&st=iryiipkp&dl=0",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MlayTheProgrammer",
  linkedin: "https://www.linkedin.com/in/richard-mlay-953802170/",
  gmail: "richardmlay6@gmail.com",
  display: true // Show this section
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE ENGINEER WITH A FOCUS ON SCALABLE, INNOVATIVE SOLUTIONS",
  skills: [
    emoji("⚡ Build dynamic and intuitive user interfaces for web and mobile platforms"),
    emoji("⚡ Develop backend systems optimized for performance and scalability"),
    emoji("⚡ Design and implement secure authentication and database solutions"),
    emoji("⚡ Train and fine-tune AI models to drive intelligent systems")
  ],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fas fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-kubernetes"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fas fa-rust"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fas fa-node"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Stephen F. Austin State University",
      logo: require("./assets/images/sfasuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 2019 - Jun 2023",
      desc: "Took software engineering, algorithm analysis, and data structures.",
      descBullets: [
        "Developed multiple impactful projects, including BoostBall and LifePlanner",
        "Active contributor in team-driven projects like an arcade machine built with Python"
      ]
    }
  ]
};

// Tech Stack Section

const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "80%" },
    { Stack: "Programming", progressPercentage: "70%" }
  ],
  displayCodersrank: false, // Defaults to false
  display: false // This section is hidden
};

// Work Experience Section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Outlier.AI",
      companylogo: require("./assets/images/outlierLogo.png"),
      date: "May 2024 – Present",
      desc: "Train and optimize AI models using Python, Java, C++, and JavaScript to drive accurate predictions and insights.",
      descBullets: [
        "Utilized frameworks like React and Angular for frontend solutions",
        "Collaborated with cross-functional teams to enhance system performance"
      ]
    }
  ]
};

// Open Source Section

const openSource = {
  showGithubProfile: "true",
  display: false // Hidden by default
};

// Big Projects Section

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "SHOWCASING SOME OF THE PROJECTS THAT WERE FUNDAMENTAL TO PART OF MY GROWTH AND KNOWLEDGE",
  projects: [
    {
      image: require("./assets/images/boostBallLogo.png"),
      projectName: "BoostBall",
      projectDesc: "Mobile game application built using Unity, featuring dynamic physics interactions and engaging gameplay.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MlayTheProgrammer/BoostBall"
        }
      ]
    },
    {
      image: require("./assets/images/lifePlannerLogo.png"),
      projectName: "LifePlanner",
      projectDesc: "A scheduling application designed for students, emphasizing secure login systems and robust database integration.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/MlayTheProgrammer/Life-Planner-Project"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, and Some Cool Stuff that I have done!",
  achievementsCards: [],
  display: false // Hidden by default
};

// Blog Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing knowledge and ideas through my writing!",
  blogs: [],
  display: false // Hidden by default
};

// Talks Section

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Sharing knowledge through public speaking!"),
  talks: [],
  display: false // Hidden by default
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing technology and ideas",
  podcast: [],
  display: false // Hidden by default
};

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Explore my professional background and accomplishments!",
  display: true
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to email me and discuss exciting opportunities or collaborations.",
  email_address: "richardmlay6@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter",
  display: false // Hidden by default
};

// Hireable Status

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
