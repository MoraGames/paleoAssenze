let demodata={
    classes:[
        {
            subject:"MATE",
            time:"8:00-9:00",
            teacher:["Paganini"],
            canreport:true
        },{
            subject:"ITA",
            time:"9:00-11:00",
            teacher:["Foglia"],
            canreport:true
        },{
            subject:"GEO",
            time:"11:00-12:00",
            teacher:["Senatore","Gimelli"],
            canreport:false
        }
    ],
    meta:{
        date:"Martedì 15",
        section:"6LB"
    },
    user:{
        canreport:true
    }
};

loaddemodata();

function loaddemodata(){
let timetable=document.querySelector("#timetable");
    demodata.classes.forEach(clas => {
        let hour=document.createElement("div"),
            data=document.createElement("div"),
            sub=document.createElement("div"),
            details=document.createElement("div"),
            time=document.createElement("p"),
            teacher=document.createElement("p"),
            report=document.createElement("div"),
            ico=document.createElement("i"),
            buttonhold=document.createElement("div"),
            repyes=document.createElement("div"),
            repno=document.createElement("div")

        // hour
        hour.className="hour";
        //      data
        data.className="data";
        //          sub
        sub.innerHTML=clas.subject;
        sub.className="sub";
        //          details
        details.className="details";
        //              time
        time.innerHTML=clas.time;
        //              teacher
        teacher.innerHTML=clas.teacher;
        //      report
        report.className="report closed";
        report.innerHTML="INVIA SEGNALAZIONE";
        //          i
        ico.className="bi bi-chevron-down";
        //          buttonhold
        //              repyes/repno
        repyes.className="button is-success";
        repyes.innerHTML="Presente";
        repno.className="button is-danger";
        repno.innerHTML="Assente";

        details.appendChild(time);
        details.appendChild(teacher);
        data.appendChild(sub);
        data.appendChild(details);
        buttonhold.appendChild(repyes);
        buttonhold.appendChild(repno);
        report.appendChild(ico);
        report.appendChild(buttonhold);
        hour.appendChild(data);
        hour.appendChild(report);
        timetable.appendChild(hour);
    });
}