function ajax(){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4&& this.status==200){
     var response=JSON.parse(this.responseText);
     var myObj= response.items;
    //  var output= "";
     let output = "<tr><th>Sl No</th><th>Name</th><th>Quantity</th><th>Unit</th><th>Department</th><th>Notes</th></tr>"
     
     for(var x=0; x<myObj.length; x++){
        output += "<tr><td>" + myObj[x].slNo+ "</td><td>" + myObj[x].Name + "</td><td>" + myObj[x].Quantity + "</td><td>" + myObj[x].Unit+ "</td><td>" + myObj[x].Department+ "</td><td>" + myObj[x].Notes +"</td></tr>";
     }
    //  output += "</table>"
     document.getElementById("myTable").innerHTML=output;

        }
    }
    xhttp.open("GET","items.json",true);
    xhttp.send();
}