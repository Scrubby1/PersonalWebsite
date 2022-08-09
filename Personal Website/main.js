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

const projectsInfo = {"projectHead":"About the projects I work on",
"projectText":"I have worked on a number of different projects both comercially for my employers and personally as passion projects.",
"workProjects":"Work Projects",
"wrkProjSumm":"This is a summary of a number of corporate programs I worked on.",
"intraHead":"Intranet Creation",
"intraTxt1":"As part of my work at Full Circle Software (FCS)(See Work Experience for more details) I worked with the company's founder to create training documentation and guides for staff development and training. In this project I worked exclusively remotely, working independantly to create detailed and thourough step-by-step guides and in-depth documentation for use by all members of staff, including management.",
"intraTxt2":"This Project gave me skills in the following areas:",
"intraLi1":"Working independantly helped me to improve my ability to work within given parameters to achieve goals without instruction.",
"intraLi2":"Creating documentation for projects in a simple, quick and easy-to-read way that made it simple for users to find the required information.",
"intraLi3":"Helped me with developing my abilities in regards to considering a product from the perspective of the end user.",
"compUpHead":"Computer Updates",
"compUpTxt1":"While working at Full Circle Software (FCS) I worked closely with school management to plan and implement a plan to upgrade thecomputers at the school. In this project, I worked to survey and analyse the desktops at the school and evaluate whether they required upgrading to perform best. I then developed a plan and found suppliers, from there I worked with staff to implement the new computer upgrades as seemlessly with their work as possible.",
"compUpTxt2":"This project gave me the following skills:",
"compUpLi1":"Working with management and staff to smoothly and effectively implement projects.",
"compUpLi2":"Exploring and analysing options to provide cost effective solutions to issues.",
"persProjects":"Personal Projects",
"persProjSumm":"Here is a description of the kind of projects I work on in my spare time.",
"websiteHead":"Website building",
"websiteTxt1":"After studying a course at my Uni (see Experience for more information) on making websites, I decidedthat I wanted to try making my own website. Together with a video I saw from NetworkChuck on youtube I, at time of writing am working to develop my own personal website for self-advertising.",
"websiteTxt2":"Here are some things this project has taught me:",
"websiteLi1":"independantly researching methods and techniques to find and implement solutions to issues.",
"websiteLi2":"Working independantly to achieve a goal.",
"serverHead":"Home Server",
"serverTxt1":"As part of a personal interest in computers, particularly highly capable multitasking computers, I have had a personal project of building, using, maintaining and developing my own at-home server set-up.I must give some credit for my interest to consuming youtube content from the likes of LinusTechTips, NetworkChuck and CraftComputing. In these systems I have learned extensively about hypervisors, virtualization, storing datasets, managing data, etc. With these skills I have virtualized a range of systems and functions to assist with different aspects of my daily life, including creating remotely accessible network drives, virtualizing my home video and photography collections, building test environments and a range of other tasks.",
"serverTxt2":"This personal project has taught me:",
"serverLi1":"How to use hypervisors, particularly Proxmox to virtualize tasks and manage servers",
"serverLi2":"How to install and operate a range of Operating Systems to achieve different results.",
"serverLi3":"How to utilise hardware to achieve the best results and how to troubleshoot issues in hardware and software to fix issues."
}

const workXPInfo = {"dataInfo":"I come highly recommended"}

const errorInfo = {"dataInfo":"Error 404, Unrecognized link"}

const contactMeInfo = {"Header":"Contact Me", "PhoneNum":"0481983721", "email":"generaljohnson01@gmail.com"}

/* Handlebars compilers for formats */

var homeTemplate = Handlebars.compile('<div class="homePage"><div class="titleScreen"><h1>{{MyTitle}}</h1></div><div class="homeArrows"><img src="Uparrows.png" alt="arrows" class="upArrows"></img></div><div class="fourSections"><a href="#!/About" class="homeAbout"><div class="homeAboutText"><h1>About Me</h1><p>{{AboutMe}}</p><p>Click to See More</p></div><div class="homeAboutImage"><img src="aboutMe.png" alt="me" class="picOfMe"></img></div></a><a href="#!/Projects" class="homeProjects"><div class="homeProjectsText"><h1>Projects</h1><p>{{Projects}}</p><p>Click to See More</p></div><div class="homeProjectsImage"><img src="projects.png" alt="projectImage" class="projectPic"></img></div></a><a href="#!/WorkXP" class="WorkXP"><div class="homeWorkXPText"><h1>Work Experience</h1><p>{{WorkXP}}</p><p>Click to See More</p></div><div class="homeWorkXPImg"><img src="workXP.png" alt="workXpImg" class="xpPic"></img></div></a><a href="#!/Contact" class="homeContact"><div class="homeContactText"><h1>Contact Me</h1><p>{{Contact}}</p><p>Click to see More</p></div><div class="homeContactImg"><img src="phone.png" alt="phoneContactImg" class="contactPic"></img></div></a></div></div>')

var aboutTemplate = Handlebars.compile('<div class="aboutPage"><div class="aboutIntro"><div class = "aboutPicMe"><div class="aboutPicMe2"><img src="Photo4.png" alt="me" class="aboutPhoto1"></img></div></div><div class="aboutRunDown"><h1>Who is Ethan?</h1><p>About me:</p><ul><li>{{education}}</li><li>{{work}}</li></ul></div></div><div class="aboutStudies"><div class="aboutStudiesTxt"><h1>{{header1}}</h1><p>{{intro1}}</p><div class="clarkeQuote"><i>{{quote1}}</i></div><p>{{description1}}</p><p>{{skills1}}</p> </div><div class="aboutStudiesImg"><img src="hacker.png" alt="hacker" class="hackerImg"></img></div></div><div class="aboutWork"><div class="aboutWorkTxt"><h1>{{header2}}</h1><p>{{intro2}}</p><div class="supportQuote"><i>{{quote2}}</i></div><p>{{description2}}</p><ul><li>{{skillsli1}}</li><li>{{skillsli2}}</li><li>{{skillsli3}}</li></ul><a href="#!/WorkXP" class="aboutWorkXPLink"><div class="abtWrkXpLinkTxt"><p>To find out more about my work as an IT consultant, click here.</p></div><div class="abtWrkXpLinkImg"><img src="link.png" alt="Link to Work experience" class="aboutLinkImg"></img></div></a></div><div class="aboutWorkImg"><img src="techSupport.png" alt="Tech Support" class="aboutTechSupport"></img></div></div></div> ')

var projectTemplate = Handlebars.compile('<div class="projectsPage"><div class="projectsIntro"><div class="projectsIntTxt"><h1>{{projectHead}}</h1><p>{{projectText}}</p></div><div class="projectsIntImg"><img src="newProjects.png" alt="projects" class="projectsPhoto1"></img></div></div><div class="corporateProjects"><h2>{{workProjects}}</h2><p>{{wrkProjSumm}}</p><div class="corpProj1"><div class="corpProj1Txt"><h3>{{intraHead}}</h3><p>{{intraTxt1}}</p><p>{{intraTxt2}}</p><ul><li>{{intraLi1}}</li><li>{{intraLi2}}</li><li>{{intraLi3}}</li></ul></div><div class="corpProj1Img"><img src="intranet.png" alt="intranet" class="projectsPhoto2"></img></div></div><div class="corpProj2"><div class="corpProj1Txt"><h3>{{compUpHead}}</h3><p>{{compUpTxt1}}</p><p>{{compUpTxt2}}</p><ul><li>{{compUpLi1}}</li><li>{{compUpLi2}}</li></ul></div><div class="corpProj2Img"><img src="pcbuilding.png" alt="pc modification" class="projectsPhoto3"></img></div></div></div><div class="personalProjects"><h2>{{persProjects}}</h2><p>{{persProjSumm}}</p><div class="persProj1"><div class="persProj1Txt"><h3>{{websiteHead}}</h3><p>{{websiteTxt1}}</p><p>{{websiteTxt2}}</p><ul><li>{{websiteLi1}}</li><li>{{websiteLi2}}</li></ul></div><div class="persProj1Img"><img src="webBuilding.png" alt="Website building" class="projectsPhoto4"></img></div></div><div class="persProj2"><div class="persProj2Txt"><h3>{{serverHead}}</h3><p>{{serverTxt1}}</p><p>{{serverTxt2}}</p><ul><li>{{serverLi1}}</li><li>{{serverLi2}}</li><li>{{serverLi3}}</li></ul></div><div class="persProj2Img"><img src="server.png" alt="server" class="projectsPhoto5"></img></div></div></div></div>')

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

function projectView (targetID, info) {
    const list = projectTemplate(info)
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
    console.log(URL)
    if (URL == "/") {
        homeView ("main", homeInfo);
    } else if (URL == "About") {
        aboutView ("main", aboutInfo);
    } else if (URL == "Projects") {
        projectView ("main", projectsInfo);
    } else if (URL == "Contact") {
        contactView ("main", contactMeInfo);
    } else if (URL == "WorkXP") {
        infoView ("main", workXPInfo);
    } else {
        infoView ("main", errorInfo)
    }
})




