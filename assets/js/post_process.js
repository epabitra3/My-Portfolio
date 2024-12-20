function initializePostProcessing() {
    setMobileNo();
    setEmailId();
    setAddress();
    setAltMobileNo();
    setAltEmailId();
    setFullAddress();
}

initializePostProcessing();

function setMobileNo() {
    const mobileNoElements = document.querySelectorAll(".mobile_no");

    mobileNoElements.forEach((element) => {
        const anchorTag = document.createElement("a");
        anchorTag.href = `tel:${mobileNo}`;
        anchorTag.innerHTML = `(+91) ${mobileNo}`;

        element.appendChild(anchorTag);
    });
}

function setEmailId() {
    const emailIdElements = document.querySelectorAll(".email_id");

    emailIdElements.forEach((element) => {
        const anchorTag = document.createElement("a");
        anchorTag.href = `mailto:${email_}`;
        anchorTag.innerHTML = `${email_}`;

        element.appendChild(anchorTag);
    });
}

function setAddress() {
    const addressElements = document.querySelectorAll(".address");

    addressElements.forEach((element) => {
        element.innerHTML = `${address}`;
    });
}

function setAltMobileNo() {
    const mobileNoElements = document.querySelectorAll(".alt_mobile_no");

    mobileNoElements.forEach((element) => {
        const anchorTag = document.createElement("a");
        anchorTag.href = `tel:${mobileNo}`;
        anchorTag.innerHTML = `(+91) ${alt_mobileNo}`;

        element.appendChild(anchorTag);
    });
}

function setAltEmailId() {
    const emailIdElements = document.querySelectorAll(".alt_email_id");

    emailIdElements.forEach((element) => {
        const anchorTag = document.createElement("a");
        anchorTag.href = `mailto:${email_}`;
        anchorTag.innerHTML = `${alt_email_}`;

        element.appendChild(anchorTag);
    });
}

function setFullAddress() {
    const addressElements = document.querySelectorAll(".full_address");

    addressElements.forEach((element) => {
        element.innerHTML = `${full_address}`;
    });
}

// Function to dynamically set the active page
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL (only the filename part)
    const currentPath = window.location.pathname.split('/').pop();
  
    // Select all nav links in the header
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
    navLinks.forEach((link) => {
      // Get the href value of each link (e.g., 'index.html', 'projects.html')
      const linkHref = link.getAttribute('href');
  
      // Compare the current filename with the href value
      if (currentPath === linkHref) {
        // Add 'active' class to the current link
        link.classList.add('active');
  
        // Optionally, you can add a custom data attribute (if needed)
        link.dataset.active = 'true';
      } else {
        // Remove 'active' class if the link does not match
        link.classList.remove('active');
  
        // Remove custom data attribute if the link does not match
        link.removeAttribute('data-active');
      }
    });
  });