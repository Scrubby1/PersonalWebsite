<script lang="ts">

    let header="Experience";
    let headerTxt="This is a page dedicated to showing my employment and education experience.";
    let Twoheader1="High School";
    let Oneb="Alexandria Park Community School";
    let HSLI1="Studied from Year 8 (2015) to Year 12 (2019)";
    let HSLI2="Studied in the High School's selective class.";
    let HSLI3="Frequently got academic awards for science and other classes";
    let Twoheader2="Tertiary Education";
    let Twob="Macquarie University";
    let MQLI1="Studying a Bachelor of Cyber Security";
    let MQLI2="Studying here from early 2020 to present";
    let Twoheader3="First Job";
    let Threeb="Mcdonalds";
    let MCLI1="Worked here from mid 2016 to late 2019";
    let MCLI2="Worked in front area";
    let MCLI3="Worked casually due to studying";
    let Twoheader4="IT Support";
    let Fourb="Full Circle Software";
    let FCSLI1="Role as Information Technology Consultant";
    let FCSLI2="Working here from early 2020 to present";
    let FCSLI3="Worked in a number of Department of Education NSW Schools, including major technology highschools.";
    let Twoheader5="Extra Curricular";
    let Fiveb="Australian Navy Cadets";
    let CADLI1="Participated from late 2014 through till late 2019";
    let CADLI2="Achieved the rank of Cadet Petty Officer";
    let CADLI3="Managed and conducted large scale events for a large number of cadets";
    let CADLI4="Worked with senior staff to develop training plans";
    let Twoheader6="Installation Work";
    let Sixb="Working at CDM Computers";
    let CDMLI1="Worked here from late 2021 to early 2022";
    let CDMLI2="Worked casually installing workstations in office buildings";
    let CDMLI3="Worked here due to lack of work at FCS due to COVID";

</script>

<div id="experiencePage">

    <div id="expHeaderSection">
        
        <h1>{header}</h1>

        <p>{headerTxt}</p>

    </div>


    <div id="workMain">

        <div id="payedWork">
            <div id="expMaccas" class = "box">
                <h2>{Twoheader3}</h2>
                <b>{Threeb}</b>
    
                <ul>
    
                    <li>{MCLI1}</li>
                    <li>{MCLI2}</li>
                    <li>{MCLI3}</li>
    
                </ul>
    
            </div>
    
    
            <!-- FCS Section-->
            <div id="expFCS" class = "box">
    
                <div id="expFCSGrid">
    
                    <div id="expFCSGridTxt">
                
                        <h2>{Twoheader4}</h2>
                        <b>{Fourb}</b>
    
                        <ul>
    
                            <li>{FCSLI1}</li>
                            <li>{FCSLI2}</li>
                            <li>{FCSLI3}</li>
    
                        </ul>
    
                    </div>
    
                </div>
    
            </div>
    
            <div id="expCDM" class = "box">
                
                <h2>{Twoheader6}</h2>
                <b>{Sixb}</b>
    
                <ul>
    
                    <li>{CDMLI1}</li>
                    <li>{CDMLI2}</li>
                    <li>{CDMLI3}</li>
    
                </ul>
            </div>
        </div>

        <div id="educationExp">
            <div id="expHS" class = "box">

                <div id="expHSGrid">
                
                    <div id="expHSGridTxt">
                
                        <h2>{Twoheader1}</h2>
                        <b>{Oneb}</b>
                
                        <ul>
                
                            <li>{HSLI1}</li>
                            <li>{HSLI2}</li>
                            <li>{HSLI3}</li>
    
                        </ul>
    
                    </div>
    
                </div>
            </div>
    
            <div id="expMQ" class = "box">

                <div id="expMqGrid">
        
                    <div id="expMqGridTxt">
        
                        <h2>{Twoheader2}</h2>
                        <b>{Twob}</b>
        
                        <ul>
        
                            <li>{MQLI1}</li>
                            <li>{MQLI2}</li>
        
                        </ul>
        
                    </div>
        
                </div>
        
            </div>

        </div>

        <div id="expCadets" class = "box">

            <div id="expCadGrid">

                <div id="expCadGridTxt">

                    <h2>{Twoheader5}</h2>
                    <b>{Fiveb}</b>

                        <ul>

                            <li>{CADLI1}</li>
                            <li>{CADLI2}</li>
                            <li>{CADLI3}</li>
                            <li>{CADLI4}</li>

                        </ul>

                </div>

                <div id="expCadGridImg">
                    <img src="navy.png" alt="navy" id="expPhoto1" class="img"/>
                </div>

            </div>

        </div>

    </div>

</div>

<style>
#expHeaderSection{
    color: white;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 5%;
    padding-top: 2%;
}
#workMain {
    display: grid;
    grid-template-columns: 1;
    grid-template-rows: 3;
    row-gap: 1.5%;
}
#payedWork {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    column-gap: 5%;
    grid-template-rows: 1;
}

#educationExp{
    display: grid;
    grid-template-columns: 47.5% 47.5%;
    column-gap: 5%;
    grid-template-rows: 1;
}

#expCadGrid {
    display: grid;
    grid-template-columns: 75% 20%;
    column-gap: 5%;
}
.box {
    padding: 5%;
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
.img {
    padding-top: 20%;
    padding-right: 20%;
    width: 80%;
}
</style>