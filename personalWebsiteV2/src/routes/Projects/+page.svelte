<script lang="ts">

    let projectHead="About the projects I work on";
    let projectText="I have worked on a number of different projects both comercially for my employers and personally as passion projects.";
    let workProjects="Work Projects";
    let wrkProjSumm="This is a summary of a number of corporate programs I worked on.";
    let intraHead="Intranet Creation";
    let intraTxt1="At Full Circle Software (FCS) (refer to Work Experience for specifics), I collaborated with the company's founder to produce training materials for staff enhancement. Operating entirely remotely, I independently crafted comprehensive step-by-step guides and documentation suitable for all staff tiers, including management.";
    let intraTxt2="From this project, I gained:";
    let intraLi1="Proficiency in autonomous work, ensuring objectives were met within set parameters.";
    let intraLi2="Expertise in producing clear, efficient, and user-friendly documentation.";
    let intraLi3="Enhanced ability to view products from an end-user perspective.";
    let compUpHead="Computer Updates";
    let compUpTxt1="At Full Circle Software (FCS), I collaborated with school management to assess and enhance the school's computer systems. I conducted a thorough evaluation of the desktops to determine upgrade needs, formulated a plan, sourced suppliers, and coordinated with staff to ensure seamless integration of the computer upgrades.";
    let compUpTxt2="From this endeavor, I gained:";
    let compUpLi1="Proficiency in collaborating with various stakeholders for efficient project execution.";
    let compUpLi2="Expertise in analyzing options to derive cost-effective solutions.";
    let persProjects="Personal Projects";
    let persProjSumm="Here is a description of the kind of projects I work on in my spare time.";
    let websiteHead="Website building";
    let websiteTxt1="After studying a course at my Uni (see Experience for more information) on making websites, I decided that I wanted to try making my own website. Together with a video I saw from NetworkChuck on youtube I, at time of writing am working to develop my own personal website for self-advertising.";
    let websiteTxt2="Here are some things this project has taught me:";
    let websiteLi1="independantly researching methods and techniques to find and implement solutions to issues.";
    let websiteLi2="Working independantly to achieve a goal.";
    let serverHead="Home Server";
    let serverTxt1="In pursuing a personal interest in advanced multitasking computers, I've established my own home server system, influenced in part by content from LinusTechTips, NetworkChuck, and CraftComputing. Through this endeavor, I've gained deep knowledge in hypervisors, virtualization, data storage, and management. I've effectively virtualized diverse systems to streamline various daily tasks, such as remote network drives, digitizing my multimedia collections, and constructing test environments.";
    let serverTxt2="This initiative has enabled me to:";
    let serverLi1="Master hypervisors, especially Proxmox, for virtualization and server management.";
    let serverLi2="Familiarize with various Operating Systems for tailored outcomes.";
    let serverLi3="Optimize hardware performance and troubleshoot both hardware and software issues."
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