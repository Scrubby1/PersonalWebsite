<script lang="ts">
    let education="4th Year Student studying a Bachelors of Cyber Security at Macquarie University";
    let work="Professional Information Technology Consultant";
    let hobby1="Home labbing enthusiast";
    let hobby2="Amateur web developer";
    let header1="What is so interesting about Cyber Security?";
    let intro1="Richard Clarke, former Special Advisor to President Bush on cybersecurity, highlighted the importance of prioritizing IT security. In the 2020-2021 fiscal year, the Australian Cyber Security Centre reported 67,500 cybercrime incidents with losses exceeding $33 billion, marking an increase from the prior year. It's worth noting these figures only represent reported incidents. The persistent nature of cyber threats underscores the vital role of cybersecurity professionals. I am equipped, through my training, with the technical and managerial expertise to effectively address cybersecurity challenges.";
    let header2="Error Code: 001 PEBKAC error";
    let intro2="When talking about how technology impacts human life, Bill Gates once said: ";
    let quote2="“The advance of technology is based on making it fit in so that you don’t really even notice it, so it’s part of everyday life.”";
    let description2="This is something that I have worked to achieve, by working to integrate technology into the education environment as seemlessly as possible. I currently work part-time as an IT Consultant for a large IT Support and Software Development company. In this role I have worked closely with a range of large schools for the New South Wales Department of Education. This has given me a range of skills including: ";
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
    padding: 2%;
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