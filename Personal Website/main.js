var URL;

const homeInfo = {
    "MyTitle":"Programmer, IT Consultant & Cyber Security Student",
    "AboutMe":"I am a professional IT Consultant studying a full time bachelor of Cyber Security at MQU.",
    "Projects":"I work on a number of personal projects including personal programming, web development and server management projects.", 
    "WorkXP":"I have a wide range of work experience in both paid and volunteer positions accross a range of industries.", 
    "Contact":"Find out more on how to get in touch with me here."
}

const aboutInfo = {"education":"3rd Year Student studying a Bachelors of Cyber Security at Macquarie University",
"work":"Professional Information Technology Consultant",
"header1":"What is so interesting about Cyber Security?",
"intro1":"Well, to quote Richard Clarke, the former Special Advisor to the President (President Bush) on cybersecurity:",
"quote1":"“If you spend more on coffee than on IT security, you will be hacked. What's more, you deserve to be hacked”",
"description1":"In the 2020-2021 financial year, the Australian Cyber Security Center alone recieved 67 500 reports of Cybercrime with associated losses totalling over $33 billion dollars, which is substantially higher than the previous year. What makes it scarier is that these statistics are only representative of cybercrime that was actually reported. So, whether we like it or not, hacking and cybercrime is here to stay, and this is where Cyber security professionals, hopefully including me one day soon, come in.",
"skills1":"Doing this course has give me skills in both the technical and cyber security management skills to identify, evaluate and implement solutions to cybersecurity threats in a cost effective manner.",
"header2":"Error Code: 001 PEBKAC error",
"intro2":"For a brief summary of my work as an IT Consultant, I will direct you to a definition from my personal friend and professional adversary, Bill Gates:",
"quote2":"“The advance of technology is based on making it fit in so that you don’t really even notice it, so it’s part of everyday life.”",
"description2":"I currently work part-time as an IT Consultant for a large IT Support and Software Development company. In this role I have worked closely with a range of major schools for the New South Wales Department of Education. This has given me a range of skills including: ",
"skillsli1":"Working with upper management to manage large-scale IT infrastructure",
"skillsli2":"Working with people from a large range of backgrounds regarding their IT literacy",
"skillsli3":"Working with IT hardware and software management and development."
}

const projectInfo = {"dataInfo":"These are the projects I am working on, I am working on programming technologies including different types of web technology. I also maintain my own personal servers for personal use and projects."}

const workXPInfo = {"dataInfo":"I come highly recommended"}

const errorInfo = {"dataInfo":"Error 404, Unrecognized link"}

const contactMeInfo = {"Header":"Contact Me", "PhoneNum":"0481983721", "email":"generaljohnson01@gmail.com"}

/* Handlebars compilers for formats */

var homeTemplate = Handlebars.compile('<div class="homePage"><div class="titleScreen"><h1>{{MyTitle}}</h1></div><div class="homeArrows"><img src="Uparrows.png" alt="arrows" class="upArrows"></img></div><div class="fourSections"><a href="#!/About" class="homeAbout"><div class="homeAboutText"><h1>About Me</h1><p>{{AboutMe}}</p><p>Click to See More</p></div><div class="homeAboutImage"><img src="aboutMe.png" alt="me" class="picOfMe"></img></div></a><a href="#!/Projects" class="homeProjects"><div class="homeProjectsText"><h1>Projects</h1><p>{{Projects}}</p><p>Click to See More</p></div><div class="homeProjectsImage"><img src="projects.png" alt="projectImage" class="projectPic"></img></div></a><a href="#!/WorkXP" class="WorkXP"><div class="homeWorkXPText"><h1>Work Experience</h1><p>{{WorkXP}}</p><p>Click to See More</p></div><div class="homeWorkXPImg"><img src="workXP.png" alt="workXpImg" class="xpPic"></img></div></a><a href="#!/Contact" class="homeContact"><div class="homeContactText"><h1>Contact Me</h1><p>{{Contact}}</p><p>Click to see More</p></div><div class="homeContactImg"><img src="phone.png" alt="phoneContactImg" class="contactPic"></img></div></a></div></div>')

var aboutTemplate = Handlebars.compile('<div class="aboutPage"><div class="aboutIntro"><div class = "aboutPicMe"><div class="aboutPicMe2"><img src="Photo4.png" alt="me" class="aboutPhoto1"></img></div></div><div class="aboutRunDown"><h1>Who is Ethan?</h1><p>About me:</p><ul><li>{{education}}</li><li>{{work}}</li></ul></div></div><div class="aboutStudies"><div class="aboutStudiesTxt"><h1>{{header1}}</h1><p>{{intro1}}</p><div class="clarkeQuote"><i>{{quote1}}</i></div><p>{{description1}}</p><p>{{skills1}}</p> </div><div class="aboutStudiesImg"><img src="hacker.png" alt="hacker" class="hackerImg"></img></div></div><div class="aboutWork"><div class="aboutWorkTxt"><h1>{{header2}}</h1><p>{{intro2}}</p><div class="supportQuote"><i>{{quote2}}</i></div><p>{{description2}}</p><ul><li>{{skillsli1}}</li><li>{{skillsli2}}</li><li>{{skillsli3}}</li></ul><a href="#!/WorkXP" class="aboutWorkXPLink"><div class="abtWrkXpLinkTxt"><p>To find out more about my work as an IT consultant, click here.</p></div><div class="abtWrkXpLinkImg"><img src="link.png" alt="Link to Work experience" class="aboutLinkImg"></img></div></a></div><div class="aboutWorkImg"><img src="techSupport.png" alt="Tech Support" class="aboutTechSupport"></img></div></div></div> ')

var simpleInfo = Handlebars.compile('<div class = info><p>{{dataInfo}}</p></div>')

var contactMeTemplate = Handlebars.compile('<div class = ContactsInfo><h1>{{Header}}</h1><p>Phone Number: {{PhoneNum}}</p><p>email: {{email}}</p></div>')

/* Functions for displaying formatted data on the webpage */

function homeView (targetID, info) {
    const list = homeTemplate(info)
    const target = document.getElementById(targetID)
    target.innerHTML = list;
}

function aboutView (targetID, info) {
    const list = aboutTemplate(info)
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

    const homeInfo = {
        "MyTitle":"Programmer, IT Consultant & Cyber Security Student",
        "AboutMe":"I am a professional IT Consultant studying a full time bachelor of Cyber Security at MQU.",
        "Projects":"I work on a number of personal projects including personal programming, web development and server management projects.", 
        "WorkXP":"I have a wide range of work experience in both paid and volunteer positions accross a range of industries.", 
        "Contact":"Find out more on how to get in touch with me here."
    }

    homeView ("main", homeInfo);
    
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
        aboutView ("main", aboutInfo);
    } else if (URL == "Projects") {
        infoView ("main", projectInfo);
    } else if (URL == "Contact") {
        contactView ("main", contactMeInfo);
    } else if (URL == "WorkXP") {
        infoView ("main", workXPInfo);
    } else {
        infoView ("main", errorInfo)
    }
})




