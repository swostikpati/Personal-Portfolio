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
];

const services = [
    {
        title: "Full Stack Web Developer",
        icon: webdev,
    },
    {
        title: "Product Manager",
        icon: prod,
    },
    {
        title: "UI/UX Designer",
        icon: uiux,
    },
    {
        title: "Business Analyst",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Product Management Intern",
        company_name: "Lune Data",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023 - Present",
        points: [
            "Developed and implemented product strategies that align with the company's goals and objectives.",
            "Conducted market research to identify customer needs, market trends, and competitor strategies.",
            "Collaborate with cross-functional teams to develop product designs and specifications, including user journey design and documentation"
        ],
    },
    {
        title: "Software Engineering Intern",
        company_name: "àmaxa",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "March 2023 - Present",
        points: [
            "Developed and maintained software solutions that helped global nonprofits solve real-world problems, such as aiding refugees, educating villages, and stopping climate change.",
            "Worked collaboratively with a team of passionate individuals from around the world to make a tangible impact in 4-5 months."],
    },
    {
        title: "Business Head",
        company_name: "Blockchain Collective @NYUAD",
        icon: starbucks,
        iconBg: "#383E56",
        date: "January 2023 - Present",
        points: [
            "Lead various initiatives and projects related to blockchain technology, including events, workshops, research, and networking opportunities.",
            "Worked closely with other members of the SIG leadership team to develop and implement strategic plans and goals for the group, and to ensure that our activities align with the broader mission and vision of NYU Abu Dhabi."
        ],
    },
    {
        title: "Undergraduate Teaching Assistant - Computer Programming for Engineers",
        company_name: "New York University",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "September 2022- Present",
        points: [
            "Assisted in delivering course content to a large and diverse student body of over 120 students every semester, including conducting weekly labs and grading quizzes to ensure that students mastered the material.",
            "Provided personalized feedback and mentoring to students in their term projects, helping them to develop the transferable programming skills and problem-solving abilities they will need as future engineers."]
    },
    {
        title: "Research Assistant - AIM Lab",
        company_name: "New York University",
        icon: starbucks,
        iconBg: "#383E56",
        date: "September 2022 - December 2022",
        points: [
            "Collaborated with Professor Mohammad Eid to research and develop a system for integrating \"touch\" in virtual reality using the Bhaptics haptic jacket, Oculus VR headset, and Unity Networking Engine.",
            "Worked on the development and testing of a custom software solution that synchronized the haptic feedback provided by the Bhaptics jacket with the virtual environments created in Unity.",],
    },
    {
        title: "First-Year Peer Facilitator",
        company_name: "New York University",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "August 2022 - December 2022",
        points: [
            "The First Year Peer Facilitator role at NYU Abu Dhabi is a leadership position that involves working closely with first-year students to help them adjust to university life and the local culture in Abu Dhabi.",
            " Peer facilitators are responsible for leading their FYD (First Year Dialogue) groups, which are small groups of first-year students who meet regularly to discuss academic, social, and personal topics. "]
    },
    {
        title: "Business Analyst",
        company_name: "MCC Economics & Finance",
        icon: starbucks,
        iconBg: "#383E56",
        date: "August 2022 - Present",
        points: [
            " Worked in 6+ projects involving tasks in financial modeling, business development, data sourcing, and several key administrative tasks (graphic design, employee hiring, business account setup, etc.) to set up base for client consultation.",
            "MCC Economics and Finance is a consultancy company providing advice and support to organizations in the utility, transport and communications sectors."],
    },
    {
        title: "Microsoft Learn Student Ambassador - Alpha",
        company_name: "Microsoft",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "October 2021 - Present",
        points: [
            "Microsoft Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future. "]
    },
    {
        title: "Start Hack 2023 Hackathon - World Top 3",
        company_name: "START Global",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023",
        points: [
            "I recently had the privilege of participating in Start Hack 2023, where I had the opportunity to work with a talented team of individuals to create a VR-based solution for the Swiss Infrastructure and Exchange case. Our goal was to increase financial literacy and inclusion in Switzerland.",
            "Out of the 110 teams that participated in the event, my team was one of the top three teams voted by 530 participants. Our innovative solution not only caught the attention of the judges but also garnered interest from the audience. We were thrilled to be selected to pitch our product on the Start Summit X stage, in front of some of the world's leading entrepreneurs and CEOs."
        ],
    },
    {
        title: "Executive Board - Director of Events",
        company_name: "HackAD, NYUAD",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2022 - February 2023",
        points: [
            "HackAD is the tech and hacker culture SIG at NYUAD. We organize annual hackathons and workshops that teach various programming skills to students of all levels. We promote sharing knowledge, learning as a community and writing beautiful, concise code."
        ]
    },
    {
        title: "Research Assistant - Social Research and Public Policy",
        company_name: "NYUAD Social Science",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "May 2022 - February 2023",
        points: []
    },
    {
        title: "Start Hack 2023 Hackathon - World Top 3",
        company_name: "START Global",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2023",
        points: [
            "HackAD is the tech and hacker culture SIG at NYUAD. We organize annual hackathons and workshops that teach various programming skills to students of all levels. We promote sharing knowledge, learning as a community and writing beautiful, concise code."],
    },
    {
        title: "Research Assistant - Social Research and Public Policy",
        company_name: "NYUAD Social Science",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "September 2022 - December 2023",
        points: []
    },
    {
        title: "XRP Campus Ambassador",
        company_name: "REPL XRP Campus Ambassador",
        icon: starbucks,
        iconBg: "#383E56",
        date: "August 2022 - December 2022",
        points: [
            "The XRPL Campus Ambassador program aims to elevate the impact of college students who are passionate about blockchain technology. In their role, Campus Ambassadors help educate other students about crypto and how to start building on the XRPL."]
    },
    {
        title: "Founder, Chief Technology Officer",
        company_name: "Parenaid | Self-employed",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "August 2021 - March 2022",
        points: ["Parenaid synthesises the lives of parents and their kids by bringing relevant resources at parents’ disposal, connecting them with child development professionals, charting personalised parenting pathways and individual child assessment systems which makes it possible to intertwine parents lives’ with their children.",]
    },
    {
        title: "UI/UX Designer, Founding Team",
        company_name: "Blind Dating App | Self-employed",
        icon: starbucks,
        iconBg: "#383E56",
        date: "September 2021 - December 2021",
        points: [
            "Member of the Founding Team of the Blind Dating app venture that was selected into several accelerator programs",
            "Member of the Core UI/UX team that created the initial Wireframe of the entire app (Figma) that was pitched to investors"
        ]
    },
    {
        title: "Business Development Manager",
        company_name: "My Captain - The Climber",
        icon: starbucks,
        iconBg: "#383E56",
        date: "September 2021 - December 2021",
        points: [
            "My Captain is an ed-tech startup incubated under IIM Bangalore and awarded as one of the Top 50 Youth-Led Solutions in the world by United Nations SDSN.",
            "I joined My Captain as the youngest intern among a team of 17000. I managed to get the highest conversion in the month-end and received an endorsement letter from the Head of Operations at My Captain."]
    },

];
const testimonials = [];
const projects = [
    {
        name: "Interactive Pyramids",
        description: "The installation is composed of three pyramids that respond to shadows and light, by producing a diverse array of sounds and shades of light that are aesthetically designed to represent and reflect a particular emotion.",
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
            }
        ],
        image: jobit,
        source_code_link: "https://github.com/swostikpati/typerrr",
    },
    {
        name: "P vs NP Research Paper",
        description:
            "The paper revisits the famous P vs NP problem and discusses it using layman examples covering several mathematical concepts behind it. Finally, it concludes by providing a paradox that will cause people to think in a completely different way towards the possibility of a solution to the problem.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };