var URL;

const aboutInfo = {"dataInfo": "I am an Cybersecurity student, junior programmer and web developer, history buff and IT enthusiast."}

const homeInfo = {"dataInfo":"My name is Ethan Johnson, I have built this website to serve as a testament to my programming and web development ability."}

const projectInfo = {"dataInfo":"These are the projects I am working on, I am working on programming technologies including different types of web technology. I also maintain my own personal servers for personal use and projects."}

const recommendInfo = {"dataInfo":"I come highly recommended"}

const contactMeInfo = {"Header":"Contact Me", "PhoneNum":"0481983721", "email":"generaljohnson01@gmail.com"}

var simpleInfo = Handlebars.compile('<div class = info><p>{{dataInfo}}</p></div>')

var contactMeTemplate = Handlebars.compile('<div class = ContactsInfo><h1>{{Header}}</h1><p>Phone Number: {{PhoneNum}}</p><p>email: {{email}}</p></div>')

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

function onStart () {
    const homeInfo = {"dataInfo":"My name is Ethan Johnson, I have built this website to serve as a testament to my programming and web development ability."}

    infoView ("main", homeInfo);
}



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


window.addEventListener ('onload', onStart());

window.addEventListener('hashchange', function() {
    URL = getURL (location.hash)
    if (URL == "/") {
        infoView ("main", homeInfo);
    } else if (URL == "About") {
        infoView ("main", aboutInfo);
    } else if (URL == "Projects") {
        infoView ("main", projectInfo);
    } else if (URL == "Contact") {
        contactView ("main", contactMeInfo);
    } else if (URL == "Recommendations") {
        infoView ("main", recommendInfo);
    }
})




