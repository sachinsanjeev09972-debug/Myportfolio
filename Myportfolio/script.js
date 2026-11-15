
console.log("Welcome to Sachin's Portfolio!");

// =====================================
// 1. SMOOTH NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =====================================
// 2. ACTIVE NAVIGATION EFFECT
// =====================================

const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    document.querySelectorAll("section").forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// =====================================
// 3. INTERVIEW TOPICS
// =====================================

const skillTopics = {

    HTML: [
        "HTML Document Structure",
        "HTML5 Semantic Elements",
        "Block and Inline Elements",
        "HTML Forms and Input Types",
        "HTML Tables and Lists",
        "HTML Attributes",
        "ID vs Class",
        "HTML5 Audio and Video",
        "HTML Entities",
        "HTML vs HTML5"
    ],

    CSS: [
        "CSS Selectors",
        "CSS Box Model",
        "Margin and Padding",
        "CSS Positioning",
        "Display Property",
        "Flexbox",
        "CSS Grid",
        "CSS Specificity",
        "Pseudo Classes",
        "Pseudo Elements",
        "Media Queries",
        "Responsive Web Design"
    ],

    JavaScript: [
        "Variables: var, let and const",
        "Data Types",
        "Operators",
        "Functions",
        "Arrow Functions",
        "Scope and Hoisting",
        "Arrays and Objects",
        "DOM Manipulation",
        "Event Handling",
        "Callbacks",
        "Promises",
        "Async and Await",
        "Closures",
        "ES6 Features"
    ],

    Java: [
        "Features of Java",
        "JDK, JRE and JVM",
        "Data Types and Variables",
        "OOP Concepts",
        "Classes and Objects",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "Method Overloading",
        "Method Overriding",
        "Encapsulation",
        "Abstraction",
        "Abstract Class and Interface",
        "Exception Handling",
        "String and StringBuffer",
        "Collections Framework",
        "ArrayList and LinkedList",
        "HashSet and HashMap",
        "Multithreading",
        "Synchronization",
        "Static and Final Keywords",
        "Access Modifiers",
        "JDBC"
    ],

    "Advanced Java": [
        "JDBC Architecture",
        "JDBC Drivers",
        "Connection and DriverManager",
        "Statement and PreparedStatement",
        "ResultSet",
        "CRUD Operations",
        "Servlet Life Cycle",
        "Servlet Request and Response",
        "GET vs POST",
        "JSP Basics",
        "Session Management",
        "Cookies and HttpSession",
        "Servlet Filters",
        "Servlet Listeners"
    ],

    Microservices: [
        "Monolithic vs Microservices",
        "Microservices Architecture",
        "REST APIs",
        "API Gateway",
        "Service Discovery",
        "Inter-Service Communication",
        "Load Balancing",
        "Circuit Breaker Pattern",
        "Fault Tolerance",
        "Distributed Systems"
    ],

    SQL: [
        "DDL, DML, DQL, DCL and TCL",
        "CREATE, ALTER and DROP",
        "INSERT, UPDATE and DELETE",
        "SELECT and WHERE",
        "Primary Key and Foreign Key",
        "SQL Constraints",
        "Joins",
        "Subqueries",
        "GROUP BY and HAVING",
        "Aggregate Functions",
        "ORDER BY",
        "Views",
        "Indexes",
        "Normalization",
        "DELETE vs TRUNCATE vs DROP"
    ],

    PLSQL: [
        "PL/SQL Block Structure",
        "Variables and Constants",
        "Conditional Statements",
        "Loops",
        "Cursors",
        "Implicit and Explicit Cursors",
        "Exception Handling",
        "Procedures",
        "Functions",
        "Triggers",
        "Packages"
    ],

    Tomcat: [
        "What is Apache Tomcat?",
        "Web Server vs Application Server",
        "Tomcat Architecture",
        "Server Configuration",
        "WAR File Deployment",
        "Server Ports",
        "Context Path",
        "Tomcat Logs"
    ],

    Maven: [
        "What is Maven?",
        "Maven Build Lifecycle",
        "POM.xml",
        "Dependencies",
        "Maven Plugins",
        "Local and Remote Repositories",
        "Maven Build Commands",
        "Maven vs Gradle"
    ],

    Gradle: [
        "What is Gradle?",
        "build.gradle File",
        "Gradle Tasks",
        "Gradle Dependencies",
        "Gradle Build Lifecycle",
        "Maven vs Gradle"
    ],

    Git: [
        "What is Git?",
        "Git vs GitHub",
        "Git Repository",
        "git init",
        "git add",
        "git commit",
        "git push and git pull",
        "Git Branching",
        "Merge Conflicts",
        "git clone",
        "git status"
    ],

    JUnit: [
        "What is JUnit?",
        "Unit Testing",
        "JUnit Annotations",
        "@Test",
        "@BeforeEach",
        "@AfterEach",
        "Assertions",
        "Test Suites"
    ],

    Mockito: [
        "What is Mockito?",
        "Mock Objects",
        "Mocking vs Stubbing",
        "@Mock",
        "@InjectMocks",
        "when() and thenReturn()",
        "verify()",
        "Unit Testing with Mockito"
    ],

    JMeter: [
        "What is JMeter?",
        "Performance Testing",
        "Load Testing",
        "Stress Testing",
        "Thread Group",
        "Samplers",
        "Listeners",
        "Test Plans"
    ],

    Jenkins: [
        "What is Jenkins?",
        "Continuous Integration",
        "Continuous Delivery",
        "Jenkins Pipeline",
        "Jenkinsfile",
        "Build Jobs",
        "Jenkins Plugins",
        "GitHub Integration"
    ],

    Docker: [
        "What is Docker?",
        "Docker Architecture",
        "Images and Containers",
        "Dockerfile",
        "Docker Compose",
        "Docker Commands",
        "Volumes",
        "Docker Networking"
    ],

    SLF4J: [
        "What is Logging?",
        "What is SLF4J?",
        "Logging Levels",
        "Logger and LoggerFactory",
        "SLF4J vs Log4j",
        "Parameterized Logging"
    ],

    ELK: [
        "What is ELK Stack?",
        "Elasticsearch",
        "Logstash",
        "Kibana",
        "Log Collection",
        "Log Processing",
        "Log Visualization"
    ],

    DSA: [
        "Arrays",
        "Strings",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Searching Algorithms",
        "Sorting Algorithms",
        "Hashing",
        "Recursion",
        "Time Complexity",
        "Space Complexity"
    ]

};


// =====================================
// 4. GET POPUP ELEMENTS
// =====================================

const skillButtons = document.querySelectorAll(".skill-item");

const skillModal = document.getElementById("skillModal");

const modalTitle = document.getElementById("modalTitle");

const topicList = document.getElementById("topicList");

const closeModal = document.getElementById("closeModal");


// =====================================
// 5. DISPLAY SKILL TOPICS
// =====================================

skillButtons.forEach(button => {

    button.addEventListener("click", function() {

        const selectedSkill = this.dataset.skill;

        const topics = skillTopics[selectedSkill];

        if (!topics) {
            console.warn("Topics not found:", selectedSkill);
            return;
        }

        // Set popup heading
        modalTitle.textContent =
            selectedSkill + " Interview Topics";

        // Remove old topics
        topicList.innerHTML = "";

        // Add selected skill topics
        topics.forEach((topic, index) => {

            const listItem = document.createElement("li");

            listItem.textContent =
                (index + 1) + ". " + topic;

            topicList.appendChild(listItem);

        });

        // Show popup
        skillModal.style.display = "flex";

    });

});


// =====================================
// 6. CLOSE POPUP
// =====================================

closeModal.addEventListener("click", function() {

    skillModal.style.display = "none";

});


// Close when clicking outside popup

skillModal.addEventListener("click", function(event) {

    if (event.target === skillModal) {

        skillModal.style.display = "none";

    }

});


// =====================================
// 7. CLOSE POPUP USING ESCAPE KEY
// =====================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        skillModal.style.display = "none";

    }

});

// =====================================
// CONTACT DETAILS POPUP
// =====================================

const contactModal = document.getElementById("contactModal");

const closeContactModal = document.getElementById("closeContactModal");

const contactButtons = document.querySelectorAll("[data-open-contact]");


// Open Contact Popup
contactButtons.forEach(button => {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        contactModal.style.display = "flex";

    });

});


// Close Contact Popup
closeContactModal.addEventListener("click", function() {

    contactModal.style.display = "none";

});


// Close popup when clicking outside
contactModal.addEventListener("click", function(event) {

    if (event.target === contactModal) {

        contactModal.style.display = "none";

    }

});


// Close popup using Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        contactModal.style.display = "none";

    }

});
