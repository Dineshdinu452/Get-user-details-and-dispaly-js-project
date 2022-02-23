var entry=document.getElementById("entry");
entry.addEventListener("click",displayDetails);
 var row=1;

 function displayDetails(){
    var name =document.getElementById("name").value;
    var contact=document.getElementById("pnum").value;
    var address=document.getElementById("place").value;

    if(!name||!contact||!address)
    {alert(" Please fill all the box ra venna mavane 😊");
    return;}

    var display=document.getElementById("display");
    var newRow=display.insertRow(row);

    var cell1=newRow.insertCell(0);
    var cell2=newRow.insertCell(1);
    var cell3=newRow.insertCell(2);

    cell1.innerHTML= name;
    cell2.innerHTML=contact;
    cell3.innerHTML=address;

 }
