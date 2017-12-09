let numberArray = Array.apply(0, Array(10000)).map(function (x, y) { return y + 1; });  // [1, 2, 3]
function reloadNumbers() {
    console.log(numberArray);
    shuffleArray(numberArray);
    console.log(numberArray);

    showNumbers();
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function showNumbers() {
    $('#numbers-table').remove();
	mytable = $('<table></table>').attr({ id: "numbers-table" });
	var rows = 10;
	var cols = 10;
    var tr = [];
    let idx = 0;
	for (var i = 0; i < rows; i++) {
		// var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
        var row = $('<tr></tr>').appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            //$('<td></td>').text("text1").appendTo(row); 
            $('<td></td>').text(numberArray[idx]).appendTo(row); 
            idx++;
		}
		 		 
	}
	console.log("TTTTT:"+mytable.html());
	mytable.appendTo("#random-numbers");
}
