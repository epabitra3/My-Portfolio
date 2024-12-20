// Sample array of objects
const blogCards = [
    {
        imageURL: "assets/img/Uploads/portfolio_ss.png",
        authorName: name_,
        date: "20 Dec, 2024",
        header: "Portfolio Website",
        blogURL: "javascript:void(0);",
    },
    {
        imageURL: "assets/img/blog/MVC Blog.png",
        authorName: name_,
        date: "18 May, 2023",
        header: "Online Shopping Application",
        blogURL: "javascript:void(0);",
    },
    {
        imageURL: "assets/img/Uploads/axis_banner.png",
        authorName: name_,
        date: "4 May, 2023",
        header: "Axis Banking Application",
        blogURL: "javascript:void(0);",
    },
    {
        imageURL: "assets/img/Uploads/digitek_ss.png",
        authorName: name_,
        date: "20 Dec, 2024",
        header: "Digitek Technologies",
        blogURL: "javascript:void(0);",
    },
    {
        imageURL: "assets/img/blog/MVC Blog.png",
        authorName: name_,
        date: "18 May, 2023",
        header: "Employee Management System",
        blogURL: "javascript:void(0);",
    },
    {
        imageURL: "assets/img/Uploads/hk_bank_ss.png",
        authorName: name_,
        date: "4 May, 2023",
        header: "HK Payments Bank",
        blogURL: "javascript:void(0);",
    },
];

generateBlogContent(blogCards);
  
function generateBlogContent(blogArray) {
    const container = document.getElementById("blogCardsContainer"); // Target container element
    blogArray.forEach(blog => {
        const blogHTML = `
        <div class="col-xl-4 col-lg-6 col-md-6">
            <div class="blog-card style1">
            <div class="blog-img">
                <img src="${blog.imageURL}" style="width: 500px; height: 250px;" alt="Image">
            </div>
            <div class="blog-info">
                <ul class="blog-metainfo list-style">
                <li><i class="flaticon-user"></i> <a>${blog.authorName}</a></li>
                <li><i class="flaticon-calendar"></i>${blog.date}</li>
                </ul>
                <h3><a href="${blog.blogURL}">${blog.header}</a></h3>
                <a href="${blog.blogURL}" class="link style1">Read More
                <i class="flaticon-right-arrow"></i>
                </a>
            </div>
            </div>
        </div>
        `;
        container.innerHTML += blogHTML; // Append to the container
    });
}
  
  