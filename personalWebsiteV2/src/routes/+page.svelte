<script lang="ts">
	import { onMount } from "svelte";
    let MyTitle = "Programmer, IT Consultant & Cyber Security Student";
    let AboutMe = "I am a professional IT Consultant studying a full time bachelor of Cyber Security at MQU.";
    let Projects = "I work on a number of personal projects including personal programming, web development and server management projects.";
    let WorkXP = "I have a wide range of work experience in both paid and volunteer positions accross a range of industries.";
    let Contact = "Find out more on how to get in touch with me here.";

    var myArrows: Element;

    onMount(() => {
		myArrows = document.getElementById("homeArrows");
	});

    window.onscroll = function (e) {
        myArrows.style.visibility="hidden";
    }

</script>


<div id="homePage">
    <div id="titleScreen">
        <h1>{MyTitle}</h1>
    </div>
    <div id="homeArrows">
        <img src="Uparrows.png" alt="arrows" id="upArrows"/>
    </div>
    <div id="fourSections">
        <a href="/About" id="homeAbout" class="boxes">
            <div id="homeAboutText">
                <h1>About Me</h1>
                <p>{AboutMe}</p>
            </div>
            <div id="homeAboutImage">
                <img src="aboutMe.png" alt="me" class="icons"/>
            </div>
        </a>
        <a href="/Projects" id="homeProjects" class="boxes">
                <div id="homeProjectsText">
                    <h1>Projects</h1>
                    <p>{Projects}</p>
                </div>
                <div id="homeProjectsImage">
                    <img src="projects.png" alt="projectImage" class="icons"/>
            </div>
        </a>
        <a href="/Experience" id="WorkXP" class="boxes">
            <div id="homeWorkXPText">
                <h1>Work Experience</h1>
                <p>{WorkXP}</p>
            </div>
            <div id="homeWorkXPImg">
                <img src="workXP.png" alt="workXpImg" class="icons"/>
            </div>
        </a>
        <a href="/Contact" id="homeContact" class="boxes">
            <div id="homeContactText">
                <h1>Contact Me</h1>
                <p>{Contact}</p>
            </div>
            <div id="homeContactImg">
                <img src="phone.png" alt="phoneContactImg" class="icons"/>
            </div>
        </a>
    </div>
</div>'

<style>
    
#homePage {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: black;
    border-radius: 25px;
}

#titleScreen {
    color: white;
    height: 70%;
    text-align: center;
    margin:0;
    margin-top: 0;
    margin-bottom:0;
    font-size: xx-large;
}

#titleScreen h1 {
    margin: 0;
    padding: 15%;
}

#homeArrows{
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
}

#upArrows{
    width: 100%;
}


#fourSections {
    display:grid;
    text-decoration: none;
    padding: 2%;
    padding-bottom: 4%;
    grid-template-columns: 48% 48%;
    grid-template-rows: 2;
    column-gap: 4%;
    row-gap: 4%;
    border-radius: 25px;

    font-size: x-large;
}

#fourSections a:hover {
    background-color: rgba(255, 255, 255, 0.5);
}

.boxes {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    display: grid;
    text-decoration: none;
    grid-template-columns: 70% 25%;
    column-gap: 5%;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    padding: 2%;
}

.icons {
    width: 80%;
    padding-right: 2%;
    padding-top: 30%;
}
</style>
