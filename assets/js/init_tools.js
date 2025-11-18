// Tools data array - easily extensible for adding more tools
const toolsData = [
    {
        id: 1,
        title: "LinkedIn Post Generator",
        description: "Create professional LinkedIn posts with advanced formatting options including bold, italic, emojis, icons, hashtags, mentions, and more. Perfect for creating engaging content that stands out.",
        icon: "ri-linkedin-box-fill",
        link: "linkedin-post-generator.html",
        badge: "New",
        features: [
            "Bold & Italic formatting",
            "Emoji picker",
            "Professional icons",
            "Hashtag & Mention support",
            "Real-time preview",
            "Character counter"
        ]
    },
    // Add more tools here in the future
    // {
    //     id: 2,
    //     title: "Another Tool",
    //     description: "Description of another tool",
    //     icon: "ri-tools-line",
    //     link: "another-tool.html",
    //     badge: "Popular",
    //     features: []
    // }
];

// Generate tools content
function generateToolsContent(toolsArray) {
    const container = document.getElementById("toolsContainer");
    
    if (!container) {
        console.error("Tools container not found");
        return;
    }
    
    if (toolsArray.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center">
                <p>No tools available at the moment. Check back soon!</p>
            </div>
        `;
        return;
    }
    
    toolsArray.forEach(tool => {
        const toolHTML = `
            <div class="col-xl-4 col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <div class="blog-card style1 tool-card">
                    <div class="blog-info">
                        <div class="text-center">
                            <div class="tool-icon">
                                <i class="${tool.icon}"></i>
                            </div>
                            ${tool.badge ? `<span class="tool-badge">${tool.badge}</span>` : ''}
                        </div>
                        <h3><a href="${tool.link}">${tool.title}</a></h3>
                        <p>${tool.description}</p>
                        ${tool.features && tool.features.length > 0 ? `
                            <ul class="list-style" style="margin-bottom: 20px;">
                                ${tool.features.map(feature => `<li style="margin-bottom: 8px;"><i class="ri-check-line" style="color: #0077b5;"></i> ${feature}</li>`).join('')}
                            </ul>
                        ` : ''}
                        <a href="${tool.link}" class="link style1">
                            Use Tool <i class="flaticon-right-arrow"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += toolHTML;
    });
}

// Initialize tools on page load
document.addEventListener('DOMContentLoaded', function() {
    generateToolsContent(toolsData);
});

