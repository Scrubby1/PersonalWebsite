<script lang="ts">
</script>

<html lang="">
<head>
    <title>Ethan's Website</title>

</head>

<body>
    <div id="navMenu">
        <div id="navMenuLogo">
            <img src="EJJW.jpg" alt="EthanLogo" id="logo">
        </div>

        <div id="mainContainer">
            <div id="navMenuBar">
                <nav id="mainNav">
                    <a class="navButtons" id="homeLink" href="/">HOME</a>
                    <a class="navButtons" id="devLink" href="/About">ABOUT ME</a>
                    <a class="navButtons" id="userLink" href="/Projects">PROJECTS</a>
                    <a class="navButtons" id="locLink" href="/Experience">EXPERIENCE</a>
                    <a class="navButtons" id="departmentLink" href="/Contact">CONTACT ME</a>
                </nav>
            </div>
        </div>
    </div>

    <div id="mainContent">
        <slot/>
    </div>
</body>

<footer id = "footer">

    <div id = "footerLeft">
        <p>Location: Sydney, 2000, NSW, Australia</p>
    </div>

    <div id = "footerCenter">
        <p>Property of Ethan Johnson</p>
    </div>

    <div id = "footerRight">
        <p>Contact Me: ethan.j.johnson01@gmail.com</p>
    </div>

</footer>

<style>
.html {
    margin: 0px;
    background-color: #657ED4;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#navMenu {
		background-color: #657ED4;
		border-radius: 25px;
		color: white;
		display: grid;
		grid-template-columns: 10% 83%;
		column-gap: 2%;
        margin-top: 1%;
		margin-left: 20%;
		margin-right: 20%;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#logo {
    padding: 2%;
    width: 60%;
    margin-top: 2%;
    grid-column-start: 1;
    border-radius: 30px;
}

#mainNav {
	display: grid;
	grid-template-columns: 18% 18% 18% 18% 18%;
	column-gap: 2.5%;
    padding-top: 2%;
	grid-template-rows: 1;
}

#mainNav a:hover {
    color: #FFF3F0;
    background-color: #7e7f83;

    border-radius: 10px;
}

.navButtons {
	text-align: center;
	border-radius: 10px;
    padding-top: 5%;
	padding-bottom: 5%;
	text-decoration: none;
	width: 100%;
    color: #FFF3F0;
	background-color: #121E2A;
}

body {
    background-color:#657ED4;
    margin: 0;
}

#mainContent {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin-top: 2%;
    margin-left: 10%;
    margin-right: 10%;
    width:80%;
    border-radius: 25px;
    font-size: x-large;    
}
#footer {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    padding-left: 20%;
    padding-right: 20%;
    width: 60%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 5%;
    grid-template-rows: 1;
    text-align: center;
    color: #f7f7f7;
}
.footerLeft {
    grid-column: 1;
}
.footerCenter {
    grid-column: 2;
}
.footerRight {
    grid-column: 3;
}
</style>
</html>