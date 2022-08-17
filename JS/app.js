//start new function
//using standard function vs arrow bc buidling function inside function

function buildTable(data) {
    tbody.html("");
}
data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val)=> {
        let cell = row.append("td");
        cell.text(val);
        }
    );


});