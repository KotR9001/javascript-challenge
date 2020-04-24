// Select the Table Body
var tbody = d3.select('tbody');

// Loop through the data.js Table and Print to the Console
console.log(data);

//Create a Function to Create Rows & Cells One at a Time and then Append Data

//Loop through Each Row of the data.js Table
data.forEach(function(ufo_sightings) {
    console.log(ufo_sightings);
    //Create a Row in the Table Body for Each Row of the data.js Table
    var row = tbody.append('tr');
    //Pull the Key, Value Pairs from Each Field in Each Row and Print to the Console
    Object.entries(ufo_sightings).forEach(function([key, value]) {
        console.log(key, value);
        //Create the Cells for Each Row Corresponding to the Columns of data.js Table
        var cell = row.append('td');
        //Push the Data into Cells
        cell.text(value);
        });
});