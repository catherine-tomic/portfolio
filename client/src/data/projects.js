const projects = [
    {
        id: 1,
        title: "Radio Station Management Web App",
        tech_stack: [
            "EJS",
            "JavaScript",
            "Node.js",
            "Express",
            "Mongoose",
            "MongoDB"
        ],
        description:
            "A full-stack web application that allows DJs to manage their playlist through a browser-based dashboard.",
        bullets: [
            "Designed and implemented full-stack web application using an MVC architecture",
            "Built dynamic frontend functionality to handle user interactions, fetch API requests, and real-time DOM updates",
            "Implemented server-side session management and RESTful endpoints for retrieval and updates",
            "Deployed and configured the application on a university-hosted server for testing"
        ],
        tag: "Academic Project",
    },
    {
        id: 2,
        title: "Bubble Pop - Android Social Media App",
        tech_stack: [
            "Android Studio",
            "Java",
            "XML",
            "Firebase"
        ],
        description:
            "A functional social media application supporting authentication, real-time updates, and cloud-backed data storage.",
        bullets: [
            "Designed and developed an Android social media application with 5+ core screens, handling multiple concurrent users, authentication, profiles, and post creation using Firebase Authentication and Firestore",
            "Implemented real-time feed updates for followed users using date-sorted Firestore queries",
            "Built secure account settings including input validation and re-authentication handling"
        ],
        tag: "Academic Project",
    },
    {
        id: 3,
        title: "Metro Live",
        tech_stack: [
            "HTML/CSS",
            "JavaScript",
            "Node.js",
            "AWS"
        ],
        description:
            "A cloud-native transit-tracking web app using AWS serverless services.",
        bullets: [
            "Built and deployed a static website using HTML, CSS, and JavaScript, hosted on Amazon S3",
            "Configured custom domain routing with Route 53 and secured HTTPS traffic using CloudFront",
            "Implemented AWS WAF to protect against common web exploits",
            "Created a serverless backend using API Gateway and AWS Lambda (Node.js) to fetch data from the WMATA API",
            "Developed CI/CD pipeline with GitHub Actions to automatically sync content with S3 and invalidate the CloudFront cache on push to main branch"
        ],
        tag: "Project",
    },
    {
        id: 4,
        title: "Immigrant Marital Status Change Workflow",
        tech_stack: [
            "Java", 
            "JavaFX", 
            "Maven", 
            "Agile/Scrum"
        ],
        description:
            "An mvp workflow for an immigrant to change their marital status.",
        bullets: [
            "Built a multi-role desktop applications simulating a government service for managing marital status changes of immigrants",
            "Collaborated in an Agile team to deliver a functional MVP within sprint deadlines",
            "Implemented form validation and workflow state transitions to support user roles and process flow",
        ],
        tag: "Academic Project",
    },
    {
        id: 5,
        title: "PageRank Algorithm Language Conversion",
        tech_stack: [
            "Java",
            "C++"
        ],
        description:
            "Converted PageRank Algorithm written in C++ to Java.",
        bullets: [
            "Translated an existing PageRank algorithm from C++ to Java, 100\% maintaining identical output",
            "Adapted low-level memory and pointer operations to Java's object-oriented structure",
            "Validated algorithm accuracy through test cases and benchmark comparisons"
        ],
        tag: "Academic Project",
    },
    {
        id: 6,
        title: "Self Discovery Adventure Game",
        tech_stack: [
            "C#",
            "Unity",
        ],
        description:
            "A hackathon project for tracking employee availability and shift status in real-time.",
        bullets: [
            "Designed responsive frontend using React and Tailwind",
            "Collaborated in an Agile, fast-paced environment",
        ],
        tag: "Academic Project",
    },
    {
        id: 7,
        title: "Status Now",
        tech_stack: [
            "React",
            "Tailwind CSS",
            "MySQL",
        ],
        description:
            "A hackathon project for tracking employee availability and shift status in real-time.",
        bullets: [
            "Designed responsive frontend using React and Tailwind",
            "Collaborated in an Agile, fast-paced environment",
        ],
        tag: "Hackathon",
    },
];

export default projects;