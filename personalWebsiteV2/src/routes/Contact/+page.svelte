<script lang="ts">
    let myEmail = "4b98bce60271c880e231f471cd5067ff"
</script>


<div id="contactPage">



    <div id = "ContactForm" class="box">
        <h1>Contact Form</h1>
        <p>Please fill out the form below to reach out to me and I will try to respond as soon as possible.</p>
        <form id = "form" action="https://formsubmit.co/{myEmail}" method="POST">
            <input class="textinput" type="text" placeholder="Name" name="name" required>
            <input class="textinput" type="email" name="email" placeholder="Email Address" required>
            <input type="hidden" name="_subject" value="Email from Personal Website!">
            <input class="textinput" type="text" name="phoneNumber" placeholder="Phone Number">
            <input type="text" name="_honey" style="display:none">
            <textarea rows=5 id="message" name="message" placeholder="Please type your message here!"/>
            <input type="hidden" name="_next" value="https://ethka.de/thanks">
            <button id="submit" type="submit">Send</button>
        </form>
    </div>

</div>

<style>
#ContactForm {
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
}
#ContactForm h1{
    margin: 0;
}
#message {
    margin-top:1%;
    margin-right: 5%;
    margin-left: 5%;
    width: 90%;
    padding: 1%;
}
#submit {
    text-align: center;
	border-radius: 10px;
    border: none;
    padding-top: 1%;
	padding-bottom: 1%;
	text-decoration: none;
	width: 15%;
    margin-left: 80%;
    margin-right: 5%;
    color: #FFF3F0;
	background-color: #121E2A;
}
.textinput {
    margin-left: 5%;
    margin-right: 5%;
    width: 90%;
    padding: 1%;
}
.box {
    padding: 5%;
    padding-top: 2%;
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
</style>