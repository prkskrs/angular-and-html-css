var attempt =3;

function validate() {
    var username = document.getElementById("username").value;    
    var password = document.getElementById("password").value;  
    
    if(username.length===0 && password.length===0){
        alert("Enter required details")
    }
    else if(username.length===0){
        alert("Username is required")
    }
    else if(password.length===0){
        alert("Password is required")
    }
    else if(username=="admin" && password=="1234" ){
            alert("LoggedIn Successfully!")
            window.location = "dashboard.html"
            return false;
    }
    else{
        attempt--;
        alert(`Only ${attempt} attempts(s) left`)

        if(attempt==0){
            document.getElementById("username").disabled=true;
            document.getElementById("password").disabled=true;
            document.getElementById("submit").disabled=true;
        }
        return false;
    }

}

function rst() {
    document.getElementById("name").value="";
    document.getElementById("usn").value="";
    document.getElementById("isa1").value="";
    document.getElementById("isa2").value="";
    document.getElementById("esa").value="";
}

function addd(){
    var name = document.getElementById("name").value;
    var usn = document.getElementById("usn").value;
    var isa1 = document.getElementById("isa1").value;
    var isa2 = document.getElementById("isa2").value;
    var esa = document.getElementById("esa").value;
    console.log(name)

    var table = document.getElementsByTagName("table")[0];
    var newRow = table.insertRow(1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML=name;
    cell2.innerHTML=usn;
    cell3.innerHTML=isa1;
    cell4.innerHTML=isa2;
    cell5.innerHTML=esa;
}

function dlt() {
    var table = document.getElementsByTagName("table")[0];
    var deleteRow = table.deleteRow(1);
}