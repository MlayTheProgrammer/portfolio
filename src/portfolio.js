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
  resumeLink: "https://www.dropbox.com/scl/fi/9qf8bsm69mfbi9zeel49d/RichardMlay-SoftwareEngineer.pdf?rlkey=zf7w1oy9ri8fczco8i9vb5n7u&st=iryiipkp&dl=0"
  displayGreeting: true // Display this section
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MlayTheProgrammer",
  linkedin: "https://www.linkedin.com/in/richard-mlay-953802170/",
  gmail: "richardmlay6@gmail.com",
  // Add additional platforms as needed
  display: true // Show this section
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE SOFTWARE ENGINEER WITH A FOCUS ON SCALABLE, INNOVATIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build dynamic and intuitive user interfaces for web and mobile platforms"
    ),
    emoji("⚡ Develop backend systems optimized for performance and scalability"),
    emoji(
      "⚡ Design and implement secure authentication and database solutions"
    ),
    emoji(
      "⚡ Train and fine-tune AI models to drive intelligent systems"
    )
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

// Work experience section

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

// Big Projects Section

const bigProjects = {
  title: "Highlighted Projects",
  subtitle: "SHOWCASING SOME OF THE PROJECTS THAT WERE FUNDAMENTAL TO PART OF MY GROWTH AND KNOWLEDGE",
  projects: [
    {
      image: require("./assets/images/boostBallLogo.png"),
      projectName: "BoostBall",
      projectDesc:
        "Mobile game application built using Unity, featuring dynamic physics interactions and engaging gameplay.",
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
      projectDesc:
        "A scheduling application designed for students, emphasizing secure login systems and robust database integration.",
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

// Resume Section

const resumeSection = {
  title: "Resume",
  subtitle: "Explore my professional background and accomplishments!",
  display: true
};

// Contact Info

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Feel free to email me and to discuss exciting opportunities or collaborations.",
  email_address: "richardmlay6@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
