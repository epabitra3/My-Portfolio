var main_header_title = "Sinior Software Engineer At Vidyayug";
var main_header_text = "I'm E Pabitra, a Web Developer Working at Vidyayug Pvt.Ltd";
var main_header_content = "I Design and Develop Experiences that make people's Lives simple. I break one big impossible task into several small possible tasks.";

const latestProjects = [
    {
        gitHubLink: "https://github.com/epabitra/PortfolioWebsite.git",
        projName: "Portfolio Website",
        projType: "Web Development",
        description:
          "A personal portfolio showcasing my projects, skills, and experiences. Explore my journey and connect with me through this site."
    },
    {
      gitHubLink: "https://github.com/epabitra/OnlineShoppingApp.git",
      projName: "Online Shopping Application",
      projType: "Java Application",
      description:
        "It is a web application used to demonstrate some functionality of Online Shopping Application Development. You can find the description on GitHub."
    },
    {
        gitHubLink: "https://github.com/epabitra/Axis-Bank.git",
        projName: "Axis Banking Application",
        projType: "Java Application",
        description:
          "It is a web application used to demonstrate some functionality of Banking Application Development. You can find the description on GitHub."
    },
    {
      gitHubLink: "https://www.digitektechnologies.com",
      projName: "Digitek Technologies",
      projType: "Wordpress Application",
      description:
        "It is a e-Learning platform. I developed this application using Wordpress. Using this platform, you will be able to learn how to code."
    },
    {
        gitHubLink: "https://github.com/epabitra/Employee_Management_Mysql.git",
        projName: "Employee Management System",
        projType: "Java Application",
        description:
          "It is a web application used to demonstrate the Employee Management System. You can find the description on GitHub."
    },
    {
        gitHubLink: "https://github.com/epabitra/HK-Payments-Bank.git",
        projName: "HK Payments Bank",
        projType: "Android Application",
        description:
          "It is a Android application used to demonstrate the Banking Application. You can find the description on GitHub."
    }
];

function initializeAllDynamicFields() {
    setMainHeaderTitle();
    setMainHeader();
    setMainHeaderContent();
    generateProjectContent(latestProjects);
}

initializeAllDynamicFields();
  
// Step 2: Prepare Method to Generate HTML
function generateProjectContent(projectArray) {
    const container = document.getElementById("latest-project-container"); 
    projectArray.forEach(project => {
        const projectHTML = `
        <div class="col-md-6">
            <div class="service-card style3">
            <span class="service-icon">
                <i class="flaticon-payment-method"></i>
            </span>
            <div class="service-info">
                <h3>
                <a href="${project.gitHubLink}" target="_blank">${project.projName}</a>
                </h3>
                <p><b>${project.projType}</b><br /></p>
                <p>${project.description}</p>
            </div>
            </div>
        </div>
        `;
        container.innerHTML += projectHTML;
    });
}

function setMainHeaderTitle() {
    const addressElements = document.querySelectorAll(".main-header-title");

    addressElements.forEach((element) => {
        element.innerHTML = `${main_header_title}`;
    });
}

function setMainHeader() {
    console.log("setMainHeader called...");
    const addressElements = document.querySelectorAll(".main-header-text");

    addressElements.forEach((element) => {
        element.innerHTML = `${main_header_text}`;
    });
}

function setMainHeaderContent() {
    const addressElements = document.querySelectorAll(".main-header-content");

    addressElements.forEach((element) => {
        element.innerHTML = `${main_header_content}`;
    });
}