
function GenTable() {
   
    var tablecontainer = document.getElementById("table");
    var rows = document.getElementById("num1").value;
    var columns = document.getElementById("num2").value;
        
    
    if (rows < 2 || rows > 10 || isNaN(rows) == true) {

        alert("Please enter a valid number between 2-10");
        return 0;
    }

    else if (columns < 2 || columns > 10 || isNaN(columns) == true) {

        alert("Please enter a valid number between 2-10");
        return 0;
    }

    else {
   
        var table="<table border='1px' >";

        for (var x = 1; x <= rows; x++) {

            table+="<tr>";

            for (var y = 1; y <= columns; y++) {
           
                table += "<td>"+(x*y)+"</td>";
            }
       
            table+="</tr>";
        }

        table+="</table>"; 


        tablecontainer.innerHTML = table;

    }
    
return false;

}
