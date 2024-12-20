const footerData = [
    {
        type: 'logo',
        logoName: logo_name,
        description: comp_desc,
        socialLinks: [
            { platform: 'Facebook', icon: 'ri-facebook-fill', link: 'https://www.facebook.com/epabitra3' },
            { platform: 'Twitter', icon: 'ri-twitter-fill', link: 'https://twitter.com/e_pabitra' },
            { platform: 'LinkedIn', icon: 'ri-linkedin-fill', link: 'https://www.linkedin.com/in/epabitra/' },
            { platform: 'Instagram', icon: 'ri-instagram-fill', link: 'https://www.instagram.com/epabitra3/' }
        ]
    },
    {
        type: 'skills',
        title: 'My Skills',
        skills: [
            'Java Development',
            'Spring-boot Development',
            'UI Development',
            'Android Development',
            'Wordpress Development'
        ]
    },
    {
        type: 'links',
        title: 'Quick Links',
        links: [
            { text: 'Home', href: 'index.html' },
            { text: 'Projects', href: 'projects.html' },
            { text: 'About Me', href: 'about.html' },
            { text: 'Blog', href: 'blog.html' },
            { text: 'Contact Me', href: 'contact.html' }
        ]
    },
    {
        type: 'address',
        title: 'Address',
        address: address,
        contact: {
            phone: mobileNo,
            email: email_
        }
    }
];

// Function to create footer dynamically
function createFooter(containerId, footerData) {
    const container = document.getElementById(containerId);
    const footer = document.createElement('footer');
    footer.className = 'footer-wrap bg-rock';

    const innerContainer = document.createElement('div');
    innerContainer.className = 'container';

    const row = document.createElement('div');
    row.className = 'row pt-100 pb-75';

    footerData.forEach(section => {
        const col = document.createElement('div');

        const widget = document.createElement('div');
        widget.className = 'footer-widget';

        // Handle each section type
        if (section.type === 'logo') {
            col.className = 'col-xl-4 col-lg-4 col-md-6 col-sm-6';
            const logoLink = document.createElement('a');
            logoLink.href = 'index.html';
            logoLink.className = 'footer-logo';

            const logoName = document.createElement('span');
            logoName.className = 'logo-dark';
            logoName.style.color = 'white';
            logoName.style.fontFamily = "'Calistoga', cursive";
            logoName.style.fontSize = '9vh';
            logoName.textContent = section.logoName;

            logoLink.appendChild(logoName);
            widget.appendChild(logoLink);

            const description = document.createElement('p');
            description.className = 'comp-desc';
            description.textContent = section.description;
            widget.appendChild(description);

            const socialDiv = document.createElement('div');
            socialDiv.className = 'social-link';

            const socialList = document.createElement('ul');
            socialList.className = 'social-profile list-style style1';

            section.socialLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.link;
                a.target = '_blank';
                a.innerHTML = `<i class="${link.icon}"></i>`;
                li.appendChild(a);
                socialList.appendChild(li);
            });

            socialDiv.appendChild(socialList);
            widget.appendChild(socialDiv);
        }

        if (section.type === 'skills') {
            col.className = 'col-xl-3 col-lg-3 col-md-6 col-sm-6';
            const title = document.createElement('h3');
            title.className = 'footer-widget-title';
            title.textContent = section.title;
            widget.appendChild(title);

            const skillList = document.createElement('ul');
            skillList.className = 'footer-menu list-style';

            section.skills.forEach(skill => {
                const li = document.createElement('li');
                li.innerHTML = `<p class="my--menu"><i class="flaticon-next my--icon"></i>${skill}</p>`;
                skillList.appendChild(li);
            });

            widget.appendChild(skillList);
        }

        if (section.type === 'links') {
            col.className = 'col-xl-2 col-lg-2 col-md-6 col-sm-6';
            const title = document.createElement('h3');
            title.className = 'footer-widget-title';
            title.textContent = section.title;
            widget.appendChild(title);

            const linkList = document.createElement('ul');
            linkList.className = 'footer-menu list-style';

            section.links.forEach(link => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${link.href}"><i class="flaticon-next"></i>${link.text}</a>`;
                linkList.appendChild(li);
            });

            widget.appendChild(linkList);
        }

        if (section.type === 'address') {
            col.className = 'col-xl-3 col-lg-3 col-md-6 col-sm-6';
            const title = document.createElement('h3');
            title.className = 'footer-widget-title';
            title.textContent = section.title;
            widget.appendChild(title);

            const address = document.createElement('p');
            address.className = 'newsletter-text';
            address.textContent = section.address;
            widget.appendChild(address);

            const contactList = document.createElement('ul');
            contactList.className = 'contact-info list-style';

            const phoneLi = document.createElement('li');
            phoneLi.innerHTML = `<i class="flaticon-call"></i><span class="mobile_no"></span>`;
            contactList.appendChild(phoneLi);

            const emailLi = document.createElement('li');
            emailLi.innerHTML = `<i class="flaticon-email-1"></i><span class="email_id"></span>`;
            contactList.appendChild(emailLi);

            widget.appendChild(contactList);
        }

        col.appendChild(widget);
        row.appendChild(col);
    });

    innerContainer.appendChild(row);
    footer.appendChild(innerContainer);
    container.appendChild(footer);
}

// Initialize footer
createFooter('footer-container', footerData);