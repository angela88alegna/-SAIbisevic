

//get JSON data request

        $.getJSON("https://cors-anywhere.herokuapp.com/https://tryte-77bc0.firebaseio.com", function(data)
            
        {
            console.log(data)
     
        })
    
         


// add new data to the database with input fields

let button=document.getElementById('button');

button.addEventListener("click", function(){

    let date= document.getElementById("date").value;
    let fund_id= document.getElementById("fund_id").value; 
    let fund_name= document.getElementById("fund_name").value;
    let index= document.getElementById("index").value;
    let nb_alerts= document.getElementById("nb_alerts").value;
    let report_status= document.getElementById("report_status").value;
    let share_class_id= document.getElementById("share_class_id").value; 
    let share_class_name= document.getElementById("share_class_name").value; 
    let subfund_id= document.getElementById("subfund_id").value; 
    let subfund_name= document.getElementById("subfund_name").value; 

    
    
        var data= {
            date: date,
            fund_id: fund_id,
            fund_name: fund_name,
            index: index,
            nb_alerts: nb_alerts,
            report_status: report_status,
            share_class_id: share_class_id,
            share_class_name: share_class_name,
            subfund_id: subfund_id,
            subfund_name: subfund_name

        }

        var datas= firebase.database();
        
       
        var ref= datas.ref();
        
        ref.push(data);
    
         })
 

// retrieve data

database=firebase.database();
var ref= database.ref();

ref.once("value", gotData );

function gotData(data){
    
var valu2=(data.val());
 
// console.log(valu2);



}



//retrieve values and render them to the DOM

ref.on("value", function(snapshot){
    snapshot.forEach(function (childSnapshot)
    {
        var dataVal = childSnapshot.val();
        var dataKey = childSnapshot.key;

        // console.log(dataVal);
        // console.log(dataKey);

        var list=document.querySelector("#list");

        //create elements in the DOM
        let li= document.createElement("li");
        let date= document.createElement("span");
        let fundId= document.createElement("span");
        let fundName= document.createElement("span");
        let index= document.createElement("span");
        let nbAlerts= document.createElement("span");
        let reportStatus= document.createElement("span");
        let shareClassId= document.createElement("span");
        let shareClassName= document.createElement("span");
        let subfundId= document.createElement("span");
        let subFundName= document.createElement("span");


        li.setAttribute("data-id", dataVal.index);
        date.textContent= dataVal.date;
        fundId.textContent= dataVal.fund_id;
        fundName.textContent= dataVal.fund_name;
        index.textContent= dataVal.index;
        nbAlerts.textContent= dataVal.nb_alerts;
        reportStatus.textContent= dataVal.report_status;
        //conditional operator for report status
        (dataVal.report_status=="TRUE"? reportStatus.textContent="ready":  reportStatus.textContent="not ready");
        
        shareClassId.textContent= dataVal.share_class_id;
        shareClassName.textContent= dataVal.share_class_name;
        subfundId.textContent= dataVal.subfund_id;
        subFundName.textContent= dataVal.subfund_name;


        //append data to the DOM and display them in HTML
        li.appendChild( date);
        li.appendChild(fundId);
        li.appendChild(fundName);
        li.appendChild(index);
        li.appendChild(nbAlerts);
        li.appendChild(reportStatus);
        li.appendChild(shareClassId);
        li.appendChild(shareClassName);
        li.appendChild(subfundId);
        li.appendChild(subFundName);

        list.appendChild(li);



        

    }
    );
    
 






}
)





