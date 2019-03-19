// Lazy Loading

// Make sure things are loaded if a user goes directly to a page
window.onload = function(){
    switch (window.location.hash) {
        case "#contact":
            showForm();
            break;
        case "#work":
            showPhotos("workResource");
            break;
        case "#photography":
            showPhotos("photoResource");
            break;
    }
}

// Load Google Form
function showForm() {
    forms = document.getElementsByClassName("contactForm");
    if (forms.length === 0) {
        contactForm = document.createElement("iframe");
        contactForm.setAttribute("src", "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdEmj2NkIKR9CaZYfr1UB2g_92s1ds0A99B4kxZP3mrr1cphQ/viewform?embedded=true");
        contactForm.setAttribute("width", "100%");
        contactForm.setAttribute("height", "1000");
        contactForm.setAttribute("class", "contactForm");
        document.getElementById("docsContactForm").appendChild(contactForm);
    }
};

// Load work videos and pictures
function showPhotos(className) {
    resources = document.getElementsByClassName(className);
    for(let element of resources){
        // All resources to be loaded lazily have src replaced with lsrc
        realSrc = element.getAttribute("lsrc");
        if(realSrc != null){
            element.setAttribute("src", realSrc);
            element.removeAttribute("lsrc");
        }
    };
}