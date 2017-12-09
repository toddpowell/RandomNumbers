let numberArray = Array.apply(0, Array(10000)).map(function (x, y) { return y + 1; });  // [1, 2, 3]
function reloadNumbers() {
    // $('#numbers-container').css("visibility", "hidden");
    $("#number-list").empty();
    console.log(numberArray);
    shuffleArray(numberArray);
    console.log(numberArray);

    showNumbers();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function showNumbers() {
    // $('#numbers-table').remove();
    $('#number-list').find("div").remove();
    //mytable = $('<table></table>').attr({ id: "numbers-table" });
    //myRow = $('</div>');
	let rows = 500;
	let cols = 20;
    let tr = [];
    let idx = 0;
	for (let i = 0; i < rows; i++) {
		// let row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
        console.log("--- row: " + i);
        let row = $('<div></div>').appendTo("#number-list");
        if (i % 2 === 0) {
            row.addClass("odd");
        } else {
            row.addClass("even");
        }
        for (let j = 0; j < cols; j++) {
            console.log("    div: " + j);
            $('<td></td>').text(numberArray[idx]).appendTo(row); 
            idx++;
		}
		 		 
    }
    // $("#numbers-container").css("visibility", "visible");
	//console.log("TTTTT:"+mytable.html());
	//mytable.appendTo("#number-list");
}
