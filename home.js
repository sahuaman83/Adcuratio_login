function tableFromJson() {
		// the json data. (you can change the values for output.)
        var mydata = [
            {"id": 1,"name": "test1","age": "11","gender": "male","email": "test1@gmail.com","phoneNo": "9191919191"},
            {"id": 2,"name": "test2","age": "12","gender": "male","email": "test2@gmail.com","phoneNo": "9292929292"},
            {"id": 3,"name": "test3","age": "13","gender": "male","email": "test3@gmail.com","phoneNo": "9393939393"}
        ]

        // Extract value from table header. 
        // ('id', 'name', 'age' ,'gender', 'email', and 'phoneNo')
        var col = [];
        for (var i = 0; i < mydata.length; i++) {
            for (var key in mydata[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");

        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < mydata.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = mydata[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);
        
    }