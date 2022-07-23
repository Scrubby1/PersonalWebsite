var URL;

/* Input for the Handlebars compilers for webpages*/

const homeInfo = {"MyTitle":"Programmer, Web Dev & IT Consultant", "AboutMe":"I am a professional IT Consultant, amateur web developer and Full Time Cyber Security student.","Projects":"I work on many different projects including personal IT projects webb applications","WorkXP":"I have a wide range of work experience including extensive paid and volunteer work.","Contact":"Find out more ways to get in touch with me."}

const aboutInfo = {"dataInfo": "I am an Cybersecurity student, junior programmer and web developer, history buff and IT enthusiast."}

const projectInfo = {"dataInfo":"These are the projects I am working on, I am working on programming technologies including different types of web technology. I also maintain my own personal servers for personal use and projects."}

const recommendInfo = {"dataInfo":"I come highly recommended"}

const errorInfo = {"dataInfo":"Error 404, Unrecognized link"}

const contactMeInfo = {"Header":"Contact Me", "PhoneNum":"0481983721", "email":"generaljohnson01@gmail.com"}

/* Handlebars compilers for formats */

var homeTemplate = Handlebars.compile('<div class="homePage"><div class="titleScreen"><h1>{{MyTitle}}</h1></div><div class="fourSections"><div class="homeAbout"><div class="homeAboutText"><h1>About Me</h1><p>{{AboutMe}}</p><p>Click to See More</p></div><div class="homeAboutImage"><img src="home.jpg" alt="homeImage" class="homePic"></div></div><div class="homeProjectsText"><h1>Projects</h1><p>{{Projects}}</p><p>Click to See More</p></div><div class="homeWorkXPText"><h1>Work Experience</h1><p>{{WorkXP}}</p><p>Click to See More</p></div><div class="homeContactText"><h1>Contact Me</h1><p>{{Contact}}</p><p>Click to see More</p></div></div></div>')

var simpleInfo = Handlebars.compile('<div class = info><p>{{dataInfo}}</p></div>')

var contactMeTemplate = Handlebars.compile('<div class = ContactsInfo><h1>{{Header}}</h1><p>Phone Number: {{PhoneNum}}</p><p>email: {{email}}</p></div>')

/* Functions for displaying formatted data on the webpage */

function homeView (targetID, info) {
    const list = homeTemplate(info)
    const target = document.getElementById(targetID)
    target.innerHTML = list;
}

function infoView (targetID, info)  {
    const list = simpleInfo(info);
    const target = document.getElementById(targetID)
    target.innerHTML = list;
}

function contactView (targetID, info) {
    const list = contactMeTemplate(info);
    const target = document.getElementById(targetID)
    target.innerHTML = list;
}

/* Onstart function for displaying the home page on load */

function onStart () {
    const homeInfo = {"dataInfo":"My name is Ethan Johnson, I have built this website to serve as a testament to my programming and web development ability."}

    infoView ("main", homeInfo);
}

/* Function to get the URL and make it shorter and easier to view */

function getURL (urlVar) {
    var tempURL
    if (urlVar == "#/"){
        tempURL = urlVar.slice (1)
        return tempURL;
    } else {
        tempURL = urlVar.slice(3)
        return tempURL;
    }
}

/* Event listener that checks for the initial page loading for the webpage to call the function which loads the homepage */

window.addEventListener ('onload', onStart());

/* Event listener which checks for the URL changing, gets the information after the hash change and loads the relevant information */

window.addEventListener('hashchange', function() {
    URL = getURL (location.hash)
    if (URL == "/") {
        homeView ("main", homeInfo);
    } else if (URL == "About") {
        infoView ("main", aboutInfo);
    } else if (URL == "Projects") {
        infoView ("main", projectInfo);
    } else if (URL == "Contact") {
        contactView ("main", contactMeInfo);
    } else if (URL == "Recommendations") {
        infoView ("main", recommendInfo);
    } else {
        infoView ("main", errorInfo)
    }
})




