const header = {
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "Portfolio",
};

const about = {
  name: "Kishore Koppula",
  role: "Web Developer",
  description:
    "Junior Developer with an experience in developing full stack web applications using MERN stack and proficiency in front-end technologies including HTML5, CSS3, JavaScript and React JS. Possesses a strong understanding of Agile Scrum methodology and have experience in developing RESTful APIs. Passionate about contributing my technical skills and collaborating with a dynamic team to achieve organizational goals through meaningful contributions.",
  resume: "/resume/Kishore_Koppula_Resume.pdf",
  social: {
    linkedin: "www.linkedin.com/in/kishorekoppula906",
    github: "https://github.com/kishore906",
  },
};

const projects = [
  {
    name: "Ecommerce Project",
    description:
      "Developed an E-commerce platform tailored for showcasing and selling products with all kinds of functionalities like searching, filtering, adding to cart, delete cart item and secure payment.",
    stack: ["HTML5", "CSS3", "React.js", "Node.js"],
    sourceCode: "https://github.com/kishore906/MERN-Ecommerce-Full-Stack-App",
    fullDescription: [
      "Developed a full-stack E-commerce platform to deliver a seamless shopping experience for users",
      "Designed an intuitive user interface for browsing and searching products, with features such as pagination, product category, price range, and filtering etc.",
      "Developed a dynamic shopping cart system allowing users to add, update, and remove items, with real-time calculations of total costs and quantities.",
      "Implemented secure user authentication and authorization functionalities using JWT (JSON Web Token) for login, registration, and account management.",
      "Integrated payment gateway using Stripe API to facilitate for secure transactions, including order placement, payment processing, and invoice generation for confirmed orders.",
      "Developed admin dashboard with functionalities for managing products, orders, users along with sales data showing in chart",
    ],
    img_folder: "ecommerce",
    images_length: 36,
    id: 1,
  },
  {
    name: "Job Tracking Project",
    description:
      "Developed an user-friendly job tracking web application with key features include searching for job, saving a job, applying for a job, checking status of applied job, etc.",
    stack: ["HTML5", "CSS3", "React.js", "Node.js"],
    sourceCode: "https://github.com/kishore906/MERN-Job-Portal-App",
    fullDescription: [
      "Developed a job tracking application enabling streamlined job search for users and comprehensive job management for administrator",
      "Users can securely log in, manage profiles, search and apply for jobs, while admin can oversee job listings, user details, edit jobs, delete user profiles, and update job status for users who applied for the job",
      "An overview of jobs applied by users and jobs posted by admin in each month are displayed in graphical representation for better insights",
      "Redux is used for global state management and React Query for efficient data fetching and caching. Profile images are uploaded to cloudinary platform",
      "Authentication and Authorization was implemented using JWT to secure the application.",
    ],
    img_folder: "job_portal",
    images_length: 27,
    id: 2,
  },
  {
    name: "Blog Project",
    description:
      "Developed a blog platform where users can write and read engaging content. Key features include creating a blog, editing the blog, deleting the blog and commenting on other blogs.",
    stack: ["HTML5", "CSS3", "React.js", "Node.js"],
    sourceCode: "https://github.com/kishore906/MERN-Blog-App",
    fullDescription: [
      "Designed a user-friendly interface for creating, editing of blog posts with text formatting and multimedia support to enable seamless content creation.",
      "Integrated a commenting system allowing users to engage with blog posts through comments.",
      "Implemented secure user authentication and authorization functionalities, including user registration, login, and logout, using JWT (JSON Web Token) for enhanced security and session management.",
    ],
    img_folder: "blog_project",
    images_length: 10,
    id: 3,
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript",
  "React.js",
  "Redux",
  "Node.js",
  "Java",
  "MYSQL",
  "Git",
  "Docker (Basics)",
];

const contact = {
  email: "kkishore906@gmail.com",
  mobile: "0452497749",
  address: "Sydney, Australia - 2142",
};

export { header, about, projects, skills, contact };
