<script lang="ts">
    let education="4th Year Student studying a Bachelors of Cyber Security at Macquarie University";
    let work="Professional Information Technology Consultant";
    let hobby1="Home labbing enthusiast";
    let hobby2="Amateur web developer";
    let header1="What is so interesting about Cyber Security?";
    let intro1="Well, to quote Richard Clarke, the former Special Advisor to the President (President Bush) on cybersecurity:";
    let quote1="“If you spend more on coffee than on IT security, you will be hacked. What's more, you deserve to be hacked”";
    let description1="In the 2020-2021 financial year, the Australian Cyber Security Center alone recieved 67 500 reports of Cybercrime with associated losses totalling over $33 billion dollars, which is substantially higher than the previous year. What makes it scarier is that these statistics are only representative of cybercrime that was actually reported. So, whether we like it or not, hacking and cybercrime is here to stay, and this is where Cyber security professionals, hopefully including me one day soon, come in.";
    let skills1="Doing this course has give me skills in both the technical and cyber security management skills to identify, evaluate and implement solutions to cybersecurity threats in a cost effective manner.";
    let header2="Error Code: 001 PEBKAC error";
    let intro2="For a brief summary of my work as an IT Consultant, I will direct you to a definition from my personal friend and professional adversary, Bill Gates:";
    let quote2="“The advance of technology is based on making it fit in so that you don’t really even notice it, so it’s part of everyday life.”";
    let description2="I currently work part-time as an IT Consultant for a large IT Support and Software Development company. In this role I have worked closely with a range of major schools for the New South Wales Department of Education. This has given me a range of skills including: ";
    let skillsli1="Working with upper management to manage large-scale IT infrastructure";
    let skillsli2="Working with people from a large range of backgrounds regarding their IT literacy";
    let skillsli3="Working with IT hardware and software management and development.";
</script>

<div id="aboutPage">
    <div id="aboutIntro">
        <div id="aboutRunDown">
            <h1>Who is Ethan?</h1>
            <p>About me:</p>
            <ul>
                <li>{education}</li>
                <li>{work}</li>
                <li>{hobby1}</li>
                <li>{hobby2}</li>
            </ul>
        </div>
        <div id = "aboutPicMe">
            <div id="aboutPicMe2">
                <img src="Photo4.png" alt="me" id="aboutPhoto1"/>
            </div>
        </div>
        
    </div>
    <div id="aboutStudies" class="boxes">
        <div id="aboutStudiesTxt">
            <h1>{header1}</h1>
            <p>{intro1}</p>
            <div id="clarkeQuote">
                <i>{quote1}</i>
            </div>
            <p>{description1}</p>
            <p>{skills1}</p> 
        </div>
        <div id="aboutStudiesImg">
            <img src="hacker.png" alt="hacker" id="hackerImg" class="boxImages"/>
        </div>
    </div>
    
    <a href="/Experience" id="aboutWorkXPLink" class="boxes">
        <div id="aboutWorkImg">
            <img src="techSupport.png" alt="Tech Support" id="aboutTechSupport" class="boxImages"/>
        </div>
        <div id="aboutWorkTxt">
            <h1>{header2}</h1>
            <p>{intro2}</p>
            <div id="supportQuote">
                <i>{quote2}</i>
            </div>
            <p>{description2}</p>
            <ul>
                <li>{skillsli1}</li>
                <li>{skillsli2}</li>
                <li>{skillsli3}</li>
            </ul>
        </div>
    </a>
</div>

<style>
#aboutPage {
    color: white;
}
#aboutIntro{
    padding: 5%;
    padding-left: 10%;
    padding-right: 10%;
    display: grid;
    grid-template-columns: 70% 25%;
    column-gap: 5%;
}

#aboutPhoto1 {
    width: 100%;
    border-radius: 16px;
}

#aboutStudies {
    display: grid;
    grid-template-columns: 70% 25%;
    column-gap: 5%;
}

.boxImages {
    width: 100%;
    margin-top: 50%;
}

#aboutPage a:hover {
    background-color: rgba(255, 255, 255, 0.5);
}

#aboutWorkXPLink {
    color: white;
    text-decoration: none;
    display: grid;
    grid-template-columns: 25% 70%;
    column-gap: 5%;
}

#aboutWorkImg{
    grid-column: 1;
}
#aboutWorkTxt {
    grid-column: 2;
}

.boxes {
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 2%;
}

.boxImages {
    width: 100%;
}


</style>