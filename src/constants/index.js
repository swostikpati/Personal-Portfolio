import {
  mobile,
  backend,
  creator,
  web,
  webdev,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  prod,
  uiux,
  business,
  ip,
  arttxt,
  albertv2,
  dumb_choices,
  finease,
  interactive_comic,
  interactive_pyramids,
  pnp_research,
  pong,
  tiger_grandma,
  timelapse,
  typerrr,
  finverse,
  python,
  mySQL,
  cpp,
  arduino,
  socket,
  matlab,
  firebase,
  amaxa,
  blank,
  blockchain_collective,
  hackad,
  lune,
  MCC,
  microsoft,
  mycaptain,
  nyu,
  start,
  xrp,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "my-blogs",
    title: "My Blogs",
    external: true, // Custom property to check if it's an external link
    url: "https://linktr.ee/swostikpati", // Replace with actual blog URL
  },
];

const services = [
  {
    title: "Full Stack Web Development",
    icon: webdev,
  },
  {
    title: "Product Management",
    icon: prod,
  },
  {
    title: "UI/UX Design",
    icon: uiux,
  },
  {
    title: "Consulting",
    icon: business,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mySQL",
    icon: mySQL,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Socket IO",
    icon: socket,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  {
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "SWE and Design Intern",
    company_name: "Center for Interacting Urban Networks",
    icon: blank,
    iconBg: "#383E56",
    date: "July 2024 - Present",
    points: [
      "Engineered dynamic dashboards visualizing air quality, printing, and food waste data from universities around UAE.",
      "Spearheading the design of an impactful campus dining dashboard to curb food waste using MERN, Docker, and AWS.",
    ],
  },
  {
    title: "Technology and Product Intern",
    company_name: "Callsign Technolgies",
    icon: blank,
    iconBg: "#383E56",
    date: "August 2024 - December 2024",
    points: [
      "Identified a $170 billion expansion opportunity through market research, root-cause, competitor, and data analysis.",
      "Delivered a product pitch highly praised by senior leadership (MD and Lead PO) who now drive its implementation.",
      "Automated User Acceptance Testing (UAT) using Spring Boot and Serenity, reducing Release-To-Live times by 7%.",
    ],
  },
  {
    title: "Dev Team Lead",
    company_name: "iGEM @NYUAD",
    icon: blank,
    iconBg: "#383E56",
    date: "February 2024 - October 2024",
    points: [
      "Led Wiki development using React, ShadcnUI, Tailwind, etc., in the year-long multidisciplinary research project.",
      "Bagged the Gold Medal and Best Conservation Project nomination at the iGEM Grand Jamboree, Paris (8000+ participants).",
    ],
  },
  {
    title: "Technical Consulting Intern",
    company_name: "Ernst & Young",
    icon: blank,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Delivered tailored consulting solutions within the SAP Cloud Process Integration Suite, addressing client-specific needs and optimizing their cloud integration strategies.",
      "Developed, deployed, and tested robust integration flows using SAP Cloud Process Integration Suite, solving significant bugs and enhancing system performance, contributing to seamless business processes for clients.",
      "As an Integration Developer, gained hands-on experience with SAP technologies, creating basic to complex integration flows utilizing features such as message mapping, content enricher, request-reply, data stores, and Groovy script. Effectively leveraged SAP CPI capabilities to drive successful implementation and client satisfaction.",
    ],
  },
  {
    title: "Computer Science Major Representative",
    company_name: "NYU Student Government Assembly",
    icon: blank,
    iconBg: "#383E56",
    date: "February 2024 - May 2024",
    points: [
      "Represented 800+ computer science students, working closely with the Program Head and Dean of Science to address key student concerns and enhance their academic experience.",
      "Designed and pitched a transformative internship course for the curriculum, aligning industry needs with academic goals.",
      "Gathered insights from 200+ students through a detailed survey and presented a compelling, data-backed case to senior university administrators, leading to impactful discussions and outcomes.",
    ],
  },
  {
    title: "Research Assistant - Full Stack Web Development + LLM Integration",
    company_name: "Mubadala Health",
    icon: blank,
    iconBg: "#383E56",
    date: "January 2024 - May 2024",
    points: [
      "Research and Analysis: Conducted in-depth literature reviews and research on AI and human-computer interaction, informing the design and development of a communication tool tailored for nursing education.",
      "User-Centered Development: Engaged with nurse trainees to identify key communication challenges, developing the Nurse AI application on the MERN stack with OpenAI API integration (Whisper and GPT) to address these issues.",
      "Stakeholder Engagement and Impact: Presented the Nurse AI tool to Mubadala stakeholders, showcasing its capabilities in enhancing nursing education by improving efficiency in communication tasks like SOAP note generation.",
    ],
  },
  {
    title: "Teaching Assistant (Grader and Tutor)",
    company_name: "NYU Courant Institute of Mathematical Sciences",
    icon: blank,
    iconBg: "#383E56",
    date: "September 2023 - December 2023 ",
    points: [
      "Responsible for grading assignments, quizzes, exams, and final projects for the course Introduction to Computer Science.",
      "Offered comprehensive tutoring in Data Structures, focusing on facilitating deeper comprehension and practical application for students.",
    ],
  },
  {
    title: "Undergraduate Summer Research Intern - UGSRP",
    company_name: "NYU Tandon School of Engineering",
    icon: blank,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      " Interdisciplinary Innovation: Contributed to a research project aiming to decode muscle functionality using soft robotics. Focused on applications in medical monitoring and rehabilitation.",
      "Design and Data Collection: Led the design of a frame to collect hand-tracking data and developed a prototype smart wristband with accelerometers. These tools enhanced our data collection for machine learning applications.",
      " Machine Learning Insights: Postulated training a machine learning model to predict hand gestures in real-time, specifically from data collected in the carpus region. This work has potential applications in healthcare and rehabilitation.",
    ],
  },
  {
    title: "Product Management Intern",
    company_name: "Lune Data",
    icon: lune,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Developed and implemented product strategies that align with the company's goals and objectives.",
      "Conducted market research to identify customer needs, market trends, and competitor strategies.",
      "Collaborate with cross-functional teams to develop product designs and specifications, including user journey design and documentation",
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "àmaxa",
    icon: amaxa,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Developed and maintained software solutions that helped global nonprofits solve real-world problems, such as aiding refugees, educating villages, and stopping climate change.",
      "Worked collaboratively with a team of passionate individuals from around the world to make a tangible impact in 4-5 months.",
    ],
  },
  {
    title: "Business Head",
    company_name: "Blockchain Collective @NYUAD",
    icon: blockchain_collective,
    iconBg: "#383E56",
    date: "January 2023 - June 2023",
    points: [
      "Lead various initiatives and projects related to blockchain technology, including events, workshops, research, and networking opportunities.",
      "Worked closely with other members of the SIG leadership team to develop and implement strategic plans and goals for the group, and to ensure that our activities align with the broader mission and vision of NYU Abu Dhabi.",
    ],
  },
  {
    title:
      "Undergraduate Teaching Assistant - Computer Programming for Engineers",
    company_name: "New York University",
    icon: nyu,
    iconBg: "#E6DEDD",
    date: "September 2022 - May 2023",
    points: [
      "Assisted in delivering course content to a large and diverse student body of over 120 students every semester, including conducting weekly labs and grading quizzes to ensure that students mastered the material.",
      "Provided personalized feedback and mentoring to students in their term projects, helping them to develop the transferable programming skills and problem-solving abilities they will need as future engineers.",
    ],
  },
  {
    title: "Research Assistant - AIM Lab",
    company_name: "New York University",
    icon: nyu,
    iconBg: "#383E56",
    date: "September 2022 - December 2022",
    points: [
      'Collaborated with Professor Mohammad Eid to research and develop a system for integrating "touch" in virtual reality using the Bhaptics haptic jacket, Oculus VR headset, and Unity Networking Engine.',
      "Worked on the development and testing of a custom software solution that synchronized the haptic feedback provided by the Bhaptics jacket with the virtual environments created in Unity.",
    ],
  },
  {
    title: "First-Year Peer Facilitator",
    company_name: "New York University",
    icon: nyu,
    iconBg: "#E6DEDD",
    date: "August 2022 - December 2022",
    points: [
      "The First Year Peer Facilitator role at NYU Abu Dhabi is a leadership position that involves working closely with first-year students to help them adjust to university life and the local culture in Abu Dhabi.",
      " Peer facilitators are responsible for leading their FYD (First Year Dialogue) groups, which are small groups of first-year students who meet regularly to discuss academic, social, and personal topics. ",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "MCC Economics & Finance",
    icon: MCC,
    iconBg: "#383E56",
    date: "August 2022 - Jan 2023",
    points: [
      " Worked in 6+ projects involving tasks in financial modeling, business development, data sourcing, and several key administrative tasks (graphic design, employee hiring, business account setup, etc.) to set up base for client consultation.",
      "MCC Economics and Finance is a consultancy company providing advice and support to organizations in the utility, transport and communications sectors.",
    ],
  },
  {
    title: "Microsoft Learn Student Ambassador - Alpha",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "October 2021 - Jan 2024",
    points: [
      "Microsoft Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future. ",
    ],
  },
  {
    title: "Start Hack 2023 Hackathon - World Top 3",
    company_name: "START Global",
    icon: start,
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "I recently had the privilege of participating in Start Hack 2023, where I had the opportunity to work with a talented team of individuals to create a VR-based solution for the Swiss Infrastructure and Exchange case. Our goal was to increase financial literacy and inclusion in Switzerland.",
      "Out of the 110 teams that participated in the event, my team was one of the top three teams voted by 530 participants. Our innovative solution not only caught the attention of the judges but also garnered interest from the audience. We were thrilled to be selected to pitch our product on the Start Summit X stage, in front of some of the world's leading entrepreneurs and CEOs.",
    ],
  },
  {
    title: "Executive Board - Director of Events",
    company_name: "HackAD, NYUAD",
    icon: hackad,
    iconBg: "#E6DEDD",
    date: "May 2022 - February 2023",
    points: [
      "HackAD is the tech and hacker culture SIG at NYUAD. We organize annual hackathons and workshops that teach various programming skills to students of all levels. We promote sharing knowledge, learning as a community and writing beautiful, concise code.",
    ],
  },
  {
    title: "Research Assistant - Social Research and Public Policy",
    company_name: "NYUAD Social Science",
    icon: nyu,
    iconBg: "#E6DEDD",
    date: "May 2022 - February 2023",
    points: [],
  },
  {
    title: "XRP Campus Ambassador",
    company_name: "REPL XRP Campus Ambassador",
    icon: xrp,
    iconBg: "#383E56",
    date: "August 2022 - December 2022",
    points: [
      "The XRPL Campus Ambassador program aims to elevate the impact of college students who are passionate about blockchain technology. In their role, Campus Ambassadors help educate other students about crypto and how to start building on the XRPL.",
    ],
  },
  {
    title: "Founder, Chief Technology Officer",
    company_name: "Parenaid | Self-employed",
    icon: blank,
    iconBg: "#E6DEDD",
    date: "August 2021 - March 2022",
    points: [
      "Parenaid synthesises the lives of parents and their kids by bringing relevant resources at parents’ disposal, connecting them with child development professionals, charting personalised parenting pathways and individual child assessment systems which makes it possible to intertwine parents lives’ with their children.",
    ],
  },
  {
    title: "UI/UX Designer, Founding Team",
    company_name: "Blind Dating App | Self-employed",
    icon: blank,
    iconBg: "#383E56",
    date: "September 2021 - December 2021",
    points: [
      "Member of the Founding Team of the Blind Dating app venture that was selected into several accelerator programs",
      "Member of the Core UI/UX team that created the initial Wireframe of the entire app (Figma) that was pitched to investors",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "My Captain - The Climber",
    icon: mycaptain,
    iconBg: "#383E56",
    date: "September 2021 - December 2021",
    points: [
      "My Captain is an ed-tech startup incubated under IIM Bangalore and awarded as one of the Top 50 Youth-Led Solutions in the world by United Nations SDSN.",
      "I joined My Captain as the youngest intern among a team of 17000. I managed to get the highest conversion in the month-end and received an endorsement letter from the Head of Operations at My Captain.",
    ],
  },
];
const testimonials = [];
const projects = [
  {
    name: "Apple Clone",
    description:
      "A clone of the Apple website created in a single evening using React.js featuring the MacBook Pro. It was implemented fully in React and used framer-motion for animations",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link: "https://github.com/swostikpati/apple-clone",
  },
  {
    name: "NYUAD Issue Portal",
    description:
      "The NYUAD Issue Resolution Platform is a web-based application designed to facilitate streamlined communication and issue resolution between students and administrative departments at NYUAD.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "CI/CD",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link:
      "https://github.com/swostikpati/NYU-Abu-Dhabi-Issue-Resolution-Portal",
  },
  {
    name: "BagSafe Pitch",
    description:
      "BagSafe is an RFID-powered smart baggage tracking system designed to enhance airport security, reduce lost luggage incidents, and streamline baggage claim processes. The report includes detailed market research, MVP, business model, and interviews",
    tags: [
      {
        name: "Pitch",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link: "https://github.com/swostikpati/BagSafe",
  },
  {
    name: "Nurse AI",
    description:
      "  Nurse AI is a full-stack tool leveraging LLMs to enhance communication pathways for medical personnel, impacting thousands of graduate Emirati nurses. It streamlines SOAP note generation, ensuring medical accuracy and efficiency.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI APIs",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link: "https://github.com/swostikpati/Nurse-AI",
  },
  {
    name: "ANXIETI-E_Robot-Car",
    description:
      "The ANXIETI-E robot car is a wireless robot designed to perform both autonomous movements using object detection and edge detection, and manual control using radio control.",
    tags: [
      {
        name: "Arduino - Physical Computing",
        color: "blue-text-gradient",
      },
      {
        name: "p5.js - Creative Coding",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link:
      "https://intro.nyuadim.com/2023/05/12/anxieti-e-robot-car/",
  },
  {
    name: "Case Study - India's UPI",
    description:
      "This report delves into the transformative world of digital transactions, particularly focusing on the rise of mobile banking and fintech startups in India. The report delves into UPI, which has democratized financial services, enabling seamless money transfers across even the most remote parts of India.",
    tags: [
      {
        name: "Pandas",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link:
      "https://github.com/swostikpati/Data-Analysis-on-India-s-UPI",
  },
  {
    name: "Machine Lab - Ferris Wheel",
    description:
      " The project is a motorized amusement ride - a Ferris Wheel - built as part of a Physical Computing class project. Utilizing Arduino, high-torque motors, and NeoPixels, it brings a dynamic and immersive experience to a larger amusement park installation.",
    tags: [
      {
        name: "Physical Computing",
        color: "blue-text-gradient",
      },
    ],
    image: ip,
    source_code_link: "https://github.com/swostikpati/Machine-Lab",
  },
  {
    name: "Memory Threads",
    description:
      "'Memory Threads' is a streamlined and efficient app designed for personal reflection and memory curation. Each user creates a journal entry daily, embedding their thoughts, experiences, and any media links that highlight the day's significance.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "ClerkJS",
        color: "pink-text-gradient",
      },
    ],
    image: ip,
    source_code_link:
      "https://github.com/swostikpati/Memory-Thread--Full-Stack-Web-Application",
  },
  {
    name: "Interactive Pyramids",
    description:
      "The installation is composed of three pyramids that respond to shadows and light, by producing a diverse array of sounds and shades of light that are aesthetically designed to represent and reflect a particular emotion.",
    tags: [
      {
        name: "M4 Feather Hardware",
        color: "blue-text-gradient",
      },
      {
        name: "Micropython",
        color: "green-text-gradient",
      },
      {
        name: "Filming",
        color: "pink-text-gradient",
      },
      {
        name: "Production",
        color: "pink-text-gradient",
      },
    ],
    image: ip,
    source_code_link: "https://desert.nyuadim.com/lifemeetslife/",
  },
  {
    name: "Typerrr.com",
    description:
      "Typerrr is an online multiplayer type-racing game, where people simultaneously finish typing tests (derived from the 1000 most spoken English words database), while competing with each other and seeing the cursor positions of all players in realtime",
    tags: [
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "NeDB",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
      },
      {
        name: "Bcrypt",
      },
    ],
    image: typerrr,
    source_code_link: "https://github.com/swostikpati/typerrr",
  },
  // {
  //   name: "The Tiger Grandma",
  //   description:
  //     "An interactive audio experience focused on producing sound in order to create an immersive story by utilising sound recording, editing devices, and software to create high-quality sound to deliver a traditional Taiwanese folklore story.",
  //   tags: [
  //     {
  //       name: "Audacity",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Audio Production",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Sound Design",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Front-end",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: tiger_grandma,
  //   source_code_link:
  //     "https://github.com/swostikpati/Communications-Lab-Spring-23/tree/main/Assignment3_Audio",
  // },

  {
    name: "ART.txt",
    description:
      "The aim of my project was to make a text visualizer using p5.js that could draw grayscale images using text and give users the option of experimenting around with different images and live renders of their video feeds",
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "APIs",
        color: "green-text-gradient",
      },
      {
        name: "Front-end",
        color: "green-text-gradient",
      },
    ],
    image: arttxt,
    source_code_link:
      "https://github.com/swostikpati/Connections-Lab-Fall-22/tree/main/Week%205/5.2/project1_final",
  },
  {
    name: "Time.Lapse",
    description:
      "The aim of my project was to make a text visualizer using p5.js that could draw grayscale images using text and give users the option of experimenting around with different images and live renders of their video feeds",
    tags: [
      {
        name: "Front-End",
        color: "blue-text-gradient",
      },
      {
        name: "Scroll Animation",
        color: "green-text-gradient",
      },
    ],
    image: timelapse,
    source_code_link:
      "https://github.com/swostikpati/Communications-Lab-Spring-23/tree/main/Assignment1_30MFF",
  },

  // {
  //   name: "Dumb Choices Only",
  //   description:
  //     "The project was focused on producing an Interactive video in order to create an immersive experience. In this unique endeavor, the team aimed to captivate viewers through muliple layers of storyline where the dumbest of choices were awarded.",
  //   tags: [
  //     {
  //       name: "Adobe Premiere Pro",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Filming",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Front-end",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: dumb_choices,
  //   source_code_link:
  //     "https://github.com/swostikpati/Communications-Lab-Spring-23/tree/main/Assignment1_30MFF",
  // },
  {
    name: "Pong - Blind Version",
    description:
      'A revved up version of the Pong Game with a dynamic "blindspot". As the players continue through each rally, the blindspot region keeps increasing and so does the speed of the moving ball making it more and more difficult for both players.',
    tags: [
      {
        name: "p5.js",
        color: "blue-text-gradient",
      },
      {
        name: "Game",
        color: "blue-text-gradient",
      },
    ],
    image: pong,
    source_code_link:
      "https://intro.nyuadim.com/2023/03/07/midterm-project-pong-blindspot-version/",
  },
  {
    name: "FinEase",
    description:
      "FinEase aims to increase the access of financial literacy for common people thereby empowering them to make strong and well-informed financial decisions. This project provides the User Interface mockups and performs deep economic analysis.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Economics",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: finease,
    source_code_link: "https://github.com/swostikpati/FinEase",
  },
  {
    name: "P vs NP Research Paper",
    description:
      "The paper revisits the famous P vs NP problem and discusses it using layman examples. Finally, it concludes by providing a paradox that causes people to comprehend the possibility of a solution to the problem in an entirely different way.",
    tags: [
      {
        name: "Algorithms",
        color: "green-text-gradient",
      },
      {
        name: "Millenium Prize Problems",
        color: "green-text-gradient",
      },
    ],
    image: pnp_research,
    source_code_link: "https://www.ijariit.com/manuscripts/v6i4/V6I4-1341.pdf",
  },
  {
    name: "FinVerse",
    description:
      "Globally, only 1-in-3 adults are 'financially literate'. Access to financial data and financial data insights are often presented in ways that are boring and difficult to interpret. Our mission is to make financial data easier to interpret and visualize.",
    tags: [
      {
        name: "VR",
        color: "blue-text-gradient",
      },
      {
        name: "FinTech",
        color: "blue-text-gradient",
      },
      {
        name: "Hackathon",
        color: "green-text-gradient",
      },
    ],
    image: finverse,
    source_code_link: "https://github.com/swostikpati/start-hack-2023",
  },
  {
    name: "Albert 2.0",
    description:
      "NYU Albert critical to several administrative functions including admissions, course enrollment, etc of NYU. The project is a revamped version of the website, with modern UI designs, an easier user flow, etc. to enhance the overall user experience.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: albertv2,
    source_code_link: "https://github.com/swostikpati/Albert-2.0",
  },
  // {
  //   name: "Interactive Comic",
  //   description:
  //     'To love is to hurt.  We decided to explore the beauty of this emotion through our Interactive Comic Experience - "Before the Coffee Gets Cold", portrayed through an intense interplay of visual graphics, sound effects, and user interactions.',
  //   tags: [
  //     {
  //       name: "Photoshop",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Illustrator",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Animation",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: interactive_comic,
  //   source_code_link:
  //     "https://github.com/swostikpati/Communications-Lab-Spring-23/tree/main/Assignment2_InteractiveComic/Final%20Implementation/final",
  // },
];

export { services, technologies, experiences, testimonials, projects };
