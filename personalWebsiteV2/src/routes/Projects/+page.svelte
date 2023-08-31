<script lang="ts">

    let projectHead="About the projects I work on";
    let projectText="I have worked on a number of different projects both comercially for my employers and personally as passion projects.";
    let workProjects="Work Projects";
    let wrkProjSumm="This is a summary of a number of corporate programs I worked on.";
    let intraHead="Intranet Creation";
    let intraTxt1="As part of my work at Full Circle Software (FCS)(See Work Experience for more details) I worked with the company's founder to create training documentation and guides for staff development and training. In this project I worked exclusively remotely, working independantly to create detailed and thourough step-by-step guides and in-depth documentation for use by all members of staff, including management.";
    let intraTxt2="This Project gave me skills in the following areas:";
    let intraLi1="Working independantly helped me to improve my ability to work within given parameters to achieve goals without instruction.";
    let intraLi2="Creating documentation for projects in a simple, quick and easy-to-read way that made it simple for users to find the required information.";
    let intraLi3="Helped me with developing my abilities in regards to considering a product from the perspective of the end user.";
    let compUpHead="Computer Updates";
    let compUpTxt1="While working at Full Circle Software (FCS) I worked closely with school management to plan and implement a plan to upgrade thecomputers at the school. In this project, I worked to survey and analyse the desktops at the school and evaluate whether they required upgrading to perform best. I then developed a plan and found suppliers, from there I worked with staff to implement the new computer upgrades as seemlessly with their work as possible.";
    let compUpTxt2="This project gave me the following skills:";
    let compUpLi1="Working with management and staff to smoothly and effectively implement projects.";
    let compUpLi2="Exploring and analysing options to provide cost effective solutions to issues.";
    let persProjects="Personal Projects";
    let persProjSumm="Here is a description of the kind of projects I work on in my spare time.";
    let websiteHead="Website building";
    let websiteTxt1="After studying a course at my Uni (see Experience for more information) on making websites, I decided that I wanted to try making my own website. Together with a video I saw from NetworkChuck on youtube I, at time of writing am working to develop my own personal website for self-advertising.";
    let websiteTxt2="Here are some things this project has taught me:";
    let websiteLi1="independantly researching methods and techniques to find and implement solutions to issues.";
    let websiteLi2="Working independantly to achieve a goal.";
    let serverHead="Home Server";
    let serverTxt1="As part of a personal interest in computers, particularly highly capable multitasking computers, I have had a personal project of building, using, maintaining and developing my own at-home server set-up. I must give some credit for my interest to consuming youtube content from the likes of LinusTechTips, NetworkChuck and CraftComputing. In these systems I have learned extensively about hypervisors, virtualization, storing datasets, managing data, etc. With these skills I have virtualized a range of systems and functions to assist with different aspects of my daily life, including creating remotely accessible network drives, virtualizing my home video and photography collections, building test environments and a range of other tasks.";
    let serverTxt2="This personal project has taught me:";
    let serverLi1="How to use hypervisors, particularly Proxmox to virtualize tasks and manage servers";
    let serverLi2="How to install and operate a range of Operating Systems to achieve different results.";
    let serverLi3="How to utilise hardware to achieve the best results and how to troubleshoot issues in hardware and software to fix issues."
</script>


<div id="projectsPage">
    <div id="projectsIntro">
        <div id="projectsIntTxt">
            <h1>{projectHead}</h1>
            <p>{projectText}</p>
        </div>
        <div id="projectsIntImg">
            <img src="newProjects.png" alt="projects" id="projectsPhoto1"/>
        </div>
    </div>
    <div id="corporateProjects" class="largerGroups">
        <h2>{workProjects}</h2>
        <p>{wrkProjSumm}</p>
        <div id="corpProj1" class="corpSmallGroup">
            <div id="corpProj1Txt">
                <h3>{intraHead}</h3>
                <p>{intraTxt1}</p>
                <p>{intraTxt2}</p>
                <ul>
                    <li>{intraLi1}</li>
                    <li>{intraLi2}</li>
                    <li>{intraLi3}</li>
                </ul>
            </div>
            <div id="corpProj1Img">
                <img src="intranet.png" alt="intranet" id="projectsPhoto2" class="images"/>
            </div>
        </div>
        <div id="corpProj2" class="corpSmallGroup">
            <div id="corpProj1Txt">
                <h3>{compUpHead}</h3>
                <p>{compUpTxt1}</p>
                <p>{compUpTxt2}</p>
                <ul>
                    <li>{compUpLi1}</li>
                    <li>{compUpLi2}</li>
                </ul>
            </div>
            <div id="corpProj2Img">
                <img src="pcbuilding.png" alt="pc modification" id="projectsPhoto3" class="images"/>
            </div>
        </div>
    </div>
    <div id="personalProjects"  class="largerGroups">
        <h2>{persProjects}</h2>
        <p>{persProjSumm}</p>
        <div id="persProj1" class="personalSmallGroup">
            <div id="persProj1Txt" class="personalSmallGroupText">
                <h3>{websiteHead}</h3>
                <p>{websiteTxt1}</p>
                <p>{websiteTxt2}</p>
                <ul>
                    <li>{websiteLi1}</li>
                    <li>{websiteLi2}</li>
                </ul>
            </div>
            <div id="persProj1Img">
                <img src="webBuilding.png" alt="Website building" id="projectsPhoto4" class="images"/>
            </div>
        </div>
        <div id="persProj2" class="personalSmallGroup">
            <div id="persProj2Txt" class="personalSmallGroupText">
                <h3>{serverHead}</h3>
                <p>{serverTxt1}</p>
                <p>{serverTxt2}</p>
                <ul>
                    <li>{serverLi1}</li>
                    <li>{serverLi2}</li>
                    <li>{serverLi3}</li>
                </ul>
            </div>
            <div id="persProj2Img">
                <img src="server.png" alt="server" id="projectsPhoto5" class="images"/>
            </div>
        </div>
    </div>
</div>

<style>
#projectsPage {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
}

#projectsIntro {
    display: grid;
    grid-template-columns: 70% 25%;
    column-gap: 5%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
}

#projectsPhoto1{
    width: 100%;
}

.largerGroups {
    padding: 2%;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 2%;
    margin-bottom: 2%;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    grid-template-columns: 70% 25%;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.corpSmallGroup {
    padding: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
    display: grid;
    grid-template-columns: 75% 20%;
    column-gap: 5%;
    background: rgba(0, 0, 0, 0.18);
    color: white;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

.personalSmallGroup {
    padding: 2%;
    margin-top: 5%;
    margin-bottom: 5%;
    display: grid;
    grid-template-columns: 20% 75%;
    column-gap: 5%;
    background: rgba(0, 0, 0, 0.18);
    color: white;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}

#persProj1Img{
    grid-column: 1;
    grid-row: 1;
}

#persProj2Img{
    grid-column: 1;
    grid-row: 1;
}

.personalSmallGroupText{
    grid-column: 2;
}

.images {
    padding-top: 50%;
    width: 100%;
}
</style>