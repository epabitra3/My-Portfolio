const headerData = [
  {
    type: "top",
    contactInfo: [
      {
        icon: "flaticon-call",
        link: "tel:"+mobileNo,
        text: "(+91) "+mobileNo,
      },
      {
        icon: "flaticon-email-1",
        link: "mailto:"+email_,
        text: email_,
      },
      { icon: "flaticon-pin", link: "#", text: "Ganjam, Odisha, India" },
    ],
    menu: [
      { link: "contact.html", text: "Support" },
      { link: "contact.html", text: "Help" },
    ],
    language: {
      name: "English",
      options: [{ flag: "assets/img/uk.png", link: "#", text: "English" }],
    },
  },
  {
    type: "bottom",
    brand: {
      link: "index.html",
      lightText: logo_name,
      darkText: logo_name,
      lightColor: "black",
      darkColor: "white",
      font: "Calistoga",
      size: "5vh",
    },
    navItems: [
      { link: "index.html", text: "Home", active: true, hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "projects.html", text: "Projects", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "about.html", text: "About Me", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "blog.html", text: "Blog", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "contact.html", text: "Contact", hasDropdown: false, extraClass: '', parentClass: '' },
      { link: "contact.html", text: "Hire me", hasDropdown: false, extraClass: "btn style1", parentClass: "xl-none" },
    ],
    hireMe: { link: "contact.html", text: "Hire Me" },
  },
];

initializeHeader(headerData);

function initializeHeader(headerData) {
  const headerWrap = document.createElement("header");
  headerWrap.className = "header-wrap style1";

  headerData.forEach((section) => {
    if (section.type === "top") {
      const headerTop = document.createElement("div");
      headerTop.className = "header-top";

      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "close-sidebar";
      closeButton.innerHTML = '<i class="ri-close-fill"></i>';
      headerTop.appendChild(closeButton);

      const container = document.createElement("div");
      container.className = "container";

      const row = document.createElement("div");
      row.className = "row align-items-center";

      // Left Content
      const leftCol = document.createElement("div");
      leftCol.className = "col-lg-8 col-md-12";
      const headerTopLeft = document.createElement("div");
      headerTopLeft.className = "header-top-left";

      const contactList = document.createElement("ul");
      contactList.className = "contact-info list-style";

      section.contactInfo.forEach((info) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<i class="${info.icon}"></i> <a href="${info.link}">${info.text}</a>`;
        contactList.appendChild(listItem);
      });

      headerTopLeft.appendChild(contactList);
      leftCol.appendChild(headerTopLeft);
      row.appendChild(leftCol);

      // Right Content
      const rightCol = document.createElement("div");
      rightCol.className = "col-lg-4 col-md-12";
      const headerTopRight = document.createElement("div");
      headerTopRight.className = "header-top-right";

      const topMenu = document.createElement("ul");
      topMenu.className = "header-top-menu list-style";

      section.menu.forEach((menuItem) => {
        const menuListItem = document.createElement("li");
        menuListItem.innerHTML = `<a href="${menuItem.link}">${menuItem.text}</a>`;
        topMenu.appendChild(menuListItem);
      });

      headerTopRight.appendChild(topMenu);

      // Language Selector
      const langSelector = document.createElement("div");
      langSelector.className = "select-lang";
      langSelector.innerHTML = `
          <i class="ri-global-line"></i>
          <div class="navbar-option-item navbar-language dropdown language-option">
            <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="lang-name">${section.language.name}</span>
            </button>
            <div class="dropdown-menu language-dropdown-menu">
              ${section.language.options
                .map(
                  (option) =>
                    `<a class="dropdown-item" href="${option.link}"><img src="${option.flag}" alt="flag" /> ${option.text}</a>`
                )
                .join("")}
            </div>
          </div>`;
      headerTopRight.appendChild(langSelector);

      rightCol.appendChild(headerTopRight);
      row.appendChild(rightCol);

      container.appendChild(row);
      headerTop.appendChild(container);
      headerWrap.appendChild(headerTop);
    } else if (section.type === "bottom") {
      const headerBottom = document.createElement("div");
      headerBottom.className = "header-bottom";

      const container = document.createElement("div");
      container.className = "container";

      const nav = document.createElement("nav");
      nav.className = "navbar navbar-expand-md navbar-light";

      const brand = document.createElement("a");
      brand.className = "navbar-brand";
      brand.href = section.brand.link;
      brand.innerHTML = `
          <span class="logo-light" style="color: ${section.brand.lightColor}; font-family: '${section.brand.font}', cursive; font-size: ${section.brand.size};">${section.brand.lightText}</span>
          <span class="logo-dark" style="color: ${section.brand.darkColor}; font-family: '${section.brand.font}', cursive; font-size: ${section.brand.size};">${section.brand.darkText}</span>`;
      nav.appendChild(brand);

      const navContent = document.createElement("div");
      navContent.className = "collapse navbar-collapse main-menu-wrap";
      navContent.id = "navbarSupportedContent";

      const menuCloseDiv = document.createElement("div");
      menuCloseDiv.className = "menu-close xl-none";

      const closeAnchor = document.createElement("a");
      closeAnchor.href = "javascript:void(0)";
      closeAnchor.innerHTML = `<i class="ri-close-line"></i>`; 

      menuCloseDiv.appendChild(closeAnchor); 
      navContent.appendChild(menuCloseDiv);

      const navList = document.createElement("ul");
      navList.className = "navbar-nav ms-auto";

      section.navItems.forEach((item) => {
        const navItem = document.createElement("li");
        navItem.className = `nav-item ${
          item.parentClass ? item.parentClass : ""
        } ${
          item.hasDropdown ? "has-dropdown" : ""
        }`;
        navItem.innerHTML = `<a href="${item.link}" class="nav-link ${
          item.active ? "active" : ""
        } ${
          item.extraClass ? item.extraClass : ""
        }">${item.text}</a>`;
        navList.appendChild(navItem);
      });

      navContent.appendChild(navList);

      const otherOptions = document.createElement("div");
      otherOptions.className = "others-options lg-none";
      otherOptions.innerHTML = `
          <div class="header-btn lg-none m-lg-3">
            <a href="${section.hireMe.link}" class="btn style1">${section.hireMe.text}</a>
          </div>`;
      navContent.appendChild(otherOptions);

      nav.appendChild(navContent);
      container.appendChild(nav);
      createMobileBar(container);
      headerBottom.appendChild(container);

      headerWrap.appendChild(headerBottom);
    }
  });

  const container = document.querySelector(".page-wrapper");
  container.prepend(headerWrap);
}

function createMobileBar(container) {
  // Create the wrapper
  const mobileBarWrap = document.createElement("div");
  mobileBarWrap.className = "mobile-bar-wrap";

  // Create the mobile sidebar
  const mobileSidebar = document.createElement("div");
  mobileSidebar.className = "mobile-sidebar";
  mobileSidebar.innerHTML = `<i class="ri-menu-4-line"></i>`; // Sidebar icon
  mobileBarWrap.appendChild(mobileSidebar);

  // Create the mobile menu
  const mobileMenu = document.createElement("div");
  mobileMenu.className = "mobile-menu xl-none ms-2";

  const mobileMenuLink = document.createElement("a");
  mobileMenuLink.href = "javascript:void(0)";
  mobileMenuLink.innerHTML = `<i class="ri-menu-line"></i>`; // Mobile menu icon
  mobileMenu.appendChild(mobileMenuLink);

  // Append mobile menu to the wrapper
  mobileBarWrap.appendChild(mobileMenu);

  // Append the entire mobile bar to the container
  container.appendChild(mobileBarWrap);
}
