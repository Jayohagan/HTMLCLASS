// runs on every page. it uses the components from the components.js
// now we ask what page are we on?
const page = document.body.dataset.page;
// now that we have our what page now we can add our metadata
const pageMeta = {
    home: {
        title: "Home",
        description: "this is a description"
    },
    about: {
        title: "About",
        description: "this is a about description"
    },
    contact: {
        title: "Cpntact",
        description: "this is a contact description"
    }
};
// the CTA content
const ctaContent = {
    home: {
        heading: "lidfsjhdfgs",
        text: "kisdfs",
        buttonText: "lsufgslidf",
        link: "index.html";
    },
    about: {
        heading: "afasd",
        text: "asdasdasd",
        buttonText: "sdfsdfwrfesd",
        link: "about.html";
    },
    contact: {
        heading: "dfgdfgd",
        text: "dfggd",
        buttonText: "dfgdfg",
        link: "contact.html";
    }
}
const favourites = [
    { title: "esspresso", text: "bleh" },
    { title: "drank", text: "tha dirty" },
    { title: "vyvance", text: "blehhhh" },
];

//
//not build it

//the metadata goes in the <head>
const meta = pageMeta[page];
renderHead(createMetaData(meta.title, meta.description, meta.robots));
// now fill in the components
render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("#cta", createCallToAction(ctaContent[page]));

const cardHtml = favourites
    .map(Item) => createCard(item.title, item.text))
    .join("");

render("#cards", cardsHtml);