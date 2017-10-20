let name=[];
let rollno = [];
let pass = [];
let stream = [];
let i=0;
let fail = "Please select the student/s you want to delete.";
let succ = "Operation successfully completed.";
let checkOne="Please select only one entry to edit.";

//hides the alert by default
$(document).ready(function(){
    $("#delAlert").hide();
});

//hides the entry bar when delete button is clicked
$(document).ready(function(){
    $("#delData,#editData").click(function(){
        $('#collapseEntry').collapse('hide');
        $("#delAlert").hide();        
    });
});

//hides edit data bar
$(document).ready(function(){
    $("#delData,#entData").click(function(){
        $('.collapseEdit').collapse('hide');
        $("#delAlert").hide();        
    });
});

//hides the checkboxes when enter data is clicked
$(document).ready(function(){
    $("#entData,#editData").click(function(){
        $(".collapseCheck").collapse('hide');
        $("#delAlert").hide();
    });
});

//save the data when entering student data
function saveData(){
    let table = document.getElementById("table_body");
    let n,r,p,s;
    //push values to different arrays
    name.push(document.getElementById("stu_name").value);
    rollno.push(document.getElementById("roll").value);
    pass.push(document.getElementById("pass_year").value);
    stream.push(document.getElementById("stream").value);
    
    //creating the checkbox element
    let check = document.createElement("input");
    check.type = "checkbox";
    check.value="toDelete";
    check.className="collapse checkBox collapseCheck collapseEdit";
    
    //creating table data elements for appending
    let tdn = document.createElement("td"); 
    let tdr = document.createElement("td"); 
    let tdp = document.createElement("td"); 
    let tds = document.createElement("td"); 
    let tdc = document.createElement("td");
    let tr = document.createElement("tr");
    tr.className = "rowData";
    
    //creating text node for text elements entered
    n=document.createTextNode(name[i]);
    r=document.createTextNode(rollno[i]);
    p=document.createTextNode(pass[i]);
    s=document.createTextNode(stream[i]);
    
    //appending all the nodes created above
    tdn.appendChild(n);
    tr.appendChild(tdn);
    tdr.appendChild(r);
    tr.appendChild(tdr);
    tdp.appendChild(p);
    tr.appendChild(tdp);
    tds.appendChild(s);
    tr.appendChild(tds);
    tdc.appendChild(check);
    tr.appendChild(tdc);
    table.appendChild(tr);
    i++;
    document.getElementById("delAlert").innerHTML=succ;
    $("#delAlert").show();

}

//edits the data
function editData(){
    console.log("entered");
    let ch = document.getElementsByClassName("checkBox");
    let count=0;
    let pos=0;
    //check for more than one checkbox/es
    for(let x=0;x<ch.length;x++){
        if(ch[x].checked){
            console.log("found");
            count++;
            pos=x;
        }
        if(count>1)
            break;
    }
    if(count>1||count==0){
        console.log("alerted");
        document.getElementById("delAlert").innerHTML=checkOne;
        $("#delAlert").show();
    }
    //if only one checkbox is ticked
    else if(count==1){
        let tr = document.getElementsByClassName("rowData");
        let ch = tr[pos].childNodes;
        let nameEdit= document.getElementById("stu_name_edit").value;
        let rollEdit=(document.getElementById("roll_edit").value);
        let yearEdit=(document.getElementById("pass_year_edit").value);
        let streamEdit=(document.getElementById("stream_edit").value);
        
        if(nameEdit!=""||nameEdit!=" "||nameEdit!=null)
            ch[0].innerHTML=name[pos]=nameEdit;
        
        if(rollEdit!=""||rollEdit!=" "||rollEdit!=null)
            ch[1].innerHTML=rollno[pos]=rollEdit;
        
        if(yearEdit!=""||yearEdit!=" "||yearEdit!=null)
            ch[2].innerHTML=pass[pos]=yearEdit;
        
        if(streamEdit!=""||streamEdit!=null||streamEdit!=" ")
            ch[3].innerHTML=stream[pos]=streamEdit;
        
        document.getElementById("delAlert").innerHTML=succ;
        $("#delAlert").show();
    }

}

//deletes entry from the table
function deleteData(){
    let table = document.getElementById("table_body");
    let tr = document.getElementsByClassName("rowData");    
    let ch = document.getElementsByClassName("checkBox");
    let count=0;

    for(let x=0;x<ch.length;x++){
        if(ch[x].checked){
            table.removeChild(tr[x],1);
            name.splice(x,1);
            rollno.splice(x,1);
            pass.splice(x,1);
            stream.splice(x,1);
            count++;
            x=-1;
        }
    }

    if(count==0){
        document.getElementById("delAlert").innerHTML=fail;
        $("#delAlert").show();
        
        }
    else{
        document.getElementById("delAlert").innerHTML=succ;
        $("#delAlert").show();
    }
    i=i-count;
}