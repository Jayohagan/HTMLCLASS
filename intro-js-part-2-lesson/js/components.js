//in this file each component is a function that returns a string of HTML
//our shared data
//a constant holding text we want to reuse everywhere
const siteName = "Bright Bean Coffee";
// an array of objects: one per nov item
const navLinks = [
    { label: "Home", href: "index.html", page: "home" },
    { label: "About", href: "about.html", page: "about" },
    { label: "Contact", href: "contact.html", page: "contact" }
];
// our 1st component... metadata
//small helper: makes text safe to sit inside an HTML attribute
function escapeAttribute(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&qout;");
}
// title, description, and robots are parameters so every page can send in its own values.
funtion createMetaData(title, description, robots = "index, nofollow"){
    //every page title end with the site name for example "About | Bright Bean Coffee"
    const fullTitle = `${title} | ${siteName}`;
    return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial scale=1">
    <meta name="robots" content="${escapeAttribute(robots)}">
    <meta name="description" content="${escapeAttribute(description)}">
    <title>${escapeAttribute(fullTitle)}</title>
    `;
}
//header component
function createHeader(cuurentPage) {
    // map turns every link object into astring of HTML
    // join glues the strings together with nothing between them
    // skip join and you get unwanted commas between the links 
    const links = navLinks
        .map((link)) => {
        //the ternary operater from part 1: if this link is the current page
        // add aria-current="page"
        const current = link.page === currentPage ? 'aria-current="page"' : "";

        return `<li><a href="${link.href}" ${current}>${link.label}</a></li>` ;
    })

    .join("");
    return`
    <a class="logo"  href="index.html"> ${siteName}</a>
     <nav>
        <menu>
          ${links}
        </menu>
     </nav>
    `
}
//footer component
function createFooter(name, year = new Date().getFullYear()) {
    return`
    <p>&copy; ${year} ${name}. all right reserved. </p>
    <p>Some Address</p>
    `;
}
// call to action component
function createCallToAction(content){
    //this function takes one parameter and object holding all the content
    //each page cans end in different content, but the layout will stay the same
    return`
     <h2>${content.heading}</h2>
     <p>${content.text}</p>
     <a class ="button" href="${content.link}">${content.buttonText}</a>
    `;
}

//card component
function createCard(title, text){
    return`
     <article class="card"> 
     <h3>${title}</h3>
     <p>${text}</p>
     </article>
     
    `;
}

//HTML to page helper
// this function finds the element that mathches the selector and fills it with html
function render(selector, html) {
    const element = document.querySelector(selector);
    // if the page doesnt have the placeholder querySelector gives a null
    if (element === null) {
        console.log("Could not Find" + selector + " on this page.");
        return;
    }
    element.innerHTML = html;
}
//like render(), but fot the head. "afterbegin" means at the very start of the head we are doing this so the metadata sits above the css and js
function renderHead(htmk) {
    document.head.insertAdjacentHTML("afterbegin", html);
}