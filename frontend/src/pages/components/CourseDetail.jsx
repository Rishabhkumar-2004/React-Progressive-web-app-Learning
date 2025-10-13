import React from "react";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick"; // npm install react-slick slick-carousel
import { FaFilePdf, FaVideo, FaArrowLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./CourseDetail.css";

// ✅ Example course content data
const courseContents = {
  1: {
    concepts: [
    //   "HTML, CSS, and JavaScript Basics",
    "🧩 Module 1: Introduction to Web Development",
    "💻 Mini Project: “Hello World” Web Page",
      "🧱 Module 2: HTML5 – The Structure of the Web",
      "🧠 Project: Personal Portfolio Page",
      "🎨 Module 3: CSS3 – Styling and Layouts",
      "🌈 Project: Responsive Landing Page",
      "⚙️ Module 4: JavaScript (ES6+) – Programming for the Web",
      "⚡ Project: Interactive To-Do List / Weather App",
      "🧭 Module 5: Git, GitHub & Version Control",
      "🌍 Project: Host your Portfolio on GitHub",
      "⚛️ Module 6: React.js – Modern Frontend Development",
      "🧠 Project: Course Listing App / Blog UI",
      "🧰 Module 7: Backend Development with Node.js & Express",
      "🗂️ Project: REST API for Course Management",
      "🗄️ Module 8: Databases with MongoDB",
      "📊 Project: Course Enrollment Database",
      "🔐 Module 9: Authentication & Security",
      "🔒 Project: Secure User Authentication System",
      "🚀 Module 10: Deployment & DevOps Basics",
      "🌐 Project: Deploy Full Stack MERN App",
      "💡 Module 11: Advanced Topics (Optional)",
      "🎓 Module 12: Final Project & Career Preparation",
      "🏁 Final Project: Full Stack MERN Application",
    ],
    pdfs: [
      { title: "HTML & CSS Notes", url: "/pdfs/html-css-notes.pdf" },
      { title: "React Cheatsheet", url: "/pdfs/react-cheatsheet.pdf" },
    ],
    videos: [
      {
        title: "Intro to Web Development",
        url: "https://www.youtube.com/embed/Q33KBiDriJY",
      },
      {
        title: "Learn React Basics",
        url: "https://www.youtube.com/embed/bMknfKXIFA8",
      },
    ],
  },
  // ✅ You can add content for other courses here (id: 2, 3, etc.)
};

const CourseDetail = () => {
  const { id } = useParams();
  const content = courseContents[id];

  if (!content) {
    return <h2 className="no-course">Course content not available.</h2>;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="course-detail">
      <Link to="/" className="back-btn">
        <FaArrowLeft /> Back to Courses
      </Link>

      <h1 className="course-title">Course Content</h1>

      <div className="course-section">
        {/* <h2>📘 Key Concepts</h2> */}
        <h2>🎯 Complete Web Development Bootcamp – Course Content</h2>
        <ul>
          {content.concepts.map((concept, index) => (
            <li key={index}>{concept}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className="module">🧩 Module 1: Introduction to Web Development</h1>
        <h2 className="concept"><ol><li>What is Web Development?</li></ol> </h2>
       <p className="web">Web Development is the process of building and maintaining websites or web applications.</p>
       <h3>1. Types of Web Development :-</h3>
       <h4>a. Frontend Development (Client-Side)</h4>
       <ul>
        <li>Deals with what users see and interact with on their browser.</li>
        <li>Technologies: HTML, CSS, JavaScript, React, Angular, Vue</li>
        <li>Example: Buttons, forms, sliders, animations on a website</li>
       </ul>

       <h4>b. Backend Development (Server-Side)</h4>
       <ul>
        <li>Manages the data, server, and application logic.</li>
        <li>Technologies: Node.js, Express, Python (Django/Flask), PHP, Ruby on Rails</li>
        <li>Example: Handling user login, storing data in a database, processing orders</li>
       </ul>

       <h4>c. Full Stack Development</h4>
       <ul>
        <li>Combines frontend + backend skills.</li>
        <li>A full-stack developer can build an entire application from start to finish.</li>
       </ul>

       <h3>2. Key Components of Web Development</h3>
       <ul>
        <li>HTML (HyperText Markup Language): Structures the content of web pages</li>
        <li>CSS (Cascading Style Sheets): Styles the content (colors, layout, fonts)</li>
        <li>JavaScript: Makes the website interactive (animations, buttons, API calls)  </li>
        <li>Databases: Store and manage data (MongoDB, MySQL, PostgreSQL)</li>
        <li>Servers: Handle requests and serve web pages (Node.js, Apache)</li>
       </ul>

       <h3>3. Web Development Workflow</h3>
       <ul>
        <li>Planning: Define purpose, target audience, features</li>
        <li>Design: Create UI/UX layouts, wireframes, prototypes</li>
        <li>Development: Write frontend and backend code</li>
        <li>Testing: Check functionality, compatibility, performance</li>
        <li>Deployment: Host the website or application online</li>
        <li>Maintenance: Update content, fix bugs, add new features</li>
       </ul>

       <h3>4. Why Web Development is Important</h3>
       <ul>
        <li>Almost every business needs a web presence today.</li>
        <li>Enables interactive applications like social media, e-commerce, and online learning.</li>
        <li>High demand for skilled developers worldwide.</li>
       </ul>
          <h2 className="concept">2. Internet, Browsers, and Servers Explained</h2>
          <h3>1. Internet</h3>
          <ul>
            <li>The global network that connects millions of computers and devices worldwide.</li>
            <li>Allows computers to communicate and share data.</li>
            <li>Think of it as a huge highway system for data.</li>
          </ul>

          <h3>2. Browser</h3>
          <ul>
            <li>A software application that lets you access websites on the internet.</li>
            <li>Examples: Chrome, Firefox, Edge, Safari</li>
            <li>The browser requests data from servers and displays it in a user-friendly way.</li>
            <li>Example: When you type www.google.com, the browser fetches Google’s website from a server and shows it to you.</li>
          </ul>

          <h3>3. Server</h3>
          <ul>
            <li>A powerful computer that stores websites, files, and data.</li>
            <li>Responds to requests from browsers (client-side) by sending back the requested information.</li>
            <li>Example: When you click a link, your browser asks the server for the page, and the server sends it back.</li>   
            </ul>

            <h2 className="concept">3. Client–Server Architecture</h2>
            <p><strong>Client–Server Architecture</strong> is a model where:</p>
            <ul>
                <li>Client: Requests data or services (e.g., your browser).</li>
                <li>Responds to requests from browsers (client-side) by sending back the requested information.
                </li>
                <li>Example: When you click a link, your browser asks the server for the page, and the server sends it back.
                </li>
            </ul>

            <h2 className="concept">4. Frontend vs Backend vs Full Stack</h2>
            <h3>Frontend (Client-side)</h3>

            <ul>
                <li>What users see and interact with on a website.</li>
                <li>Tools/Technologies: HTML, CSS, JavaScript, React</li>
                <li>Example: Buttons, forms, sliders, menus</li>
            </ul>

            <h3>Backend (Server-side)</h3>
            <ul>
                <li>Manages the data, server, and application logic.</li>
                <li>Tools/Technologies: Node.js, Python, PHP, Databases</li>
                <li>Example: User login, storing data, processing payments</li>
            </ul>

            <h3>Full Stack</h3>
            <ul>
                <li>Combines Frontend + Backend skills.</li>
                <li>Can build a complete web application from start to finish.</li>
            </ul>
         
         <h2 className="concept">5. Tools Setup: VS Code, Git, Node.js, Chrome DevTools</h2>
         <h3>1. VS Code</h3>
         <ul>
            <li>A popular code editor for writing and managing code.</li>
            <li>Features: Syntax highlighting, extensions, debugging, Git integration.</li>
         </ul>

         <h3>2. Git</h3>
         <ul>
            <li>A version control system to track changes in your code.</li>
            <li>Helps collaborate with others and manage project history.</li>
         </ul>

         <h3>
         3. Node.js
         </h3>
         <ul>
            <li>A JavaScript runtime that lets you run JS on the server.</li>
            <li>Used for backend development and running development tools.</li>
         </ul>

         <h3>4. Chrome DevTools</h3>
         <ul>
            <li>Built-in browser tools in Chrome for debugging and inspecting websites.</li>
            <li>Features: Check HTML/CSS, debug JS, analyze performance, test responsive design.</li>
         </ul>

         <h2 className="concept">6. How Websites Work (HTTP, HTTPS, DNS, Hosting)</h2>
         <h3>1. HTTP / HTTPS</h3>
         <ul>
            <li>HTTP (HyperText Transfer Protocol): How browsers request and receive web pages from servers.</li>
            <li>HTTPS: Secure version of HTTP with encryption to protect data.</li>
         </ul>

         <h3>2. DNS (Domain Name System)</h3>
         <ul>
            <li>Translates a website name (like www.google.com) into the server’s IP address.</li>
            <li>Think of it as the internet’s phonebook.</li>
         </ul>

         <h3>3. Hosting</h3>
         <ul>
            <li>Storing your website files on a server so they can be accessed online.</li>
            <li>Example: Netlify, Vercel, AWS, or shared hosting services.</li>
         </ul>
      </div>

      <div className="course-section">
        <h2>📄 Notes (PDF)</h2>
        {content.pdfs.map((pdf, index) => (
          <a
            key={index}
            href={pdf.url}
            target="_blank"
            rel="noreferrer"
            className="pdf-link"
          >
            <FaFilePdf /> {pdf.title}
          </a>
        ))}
      </div>

      <div className="course-section">
        <h2>🎥 Video Lectures</h2>
        <Slider {...settings}>
          {content.videos.map((video, index) => (
            <div key={index} className="video-slide">
              <iframe
                width="100%"
                height="400"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>{video.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseDetail;
