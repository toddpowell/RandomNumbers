let numberArray = Array.apply(0, Array(10000)).map(function (x, y) { return y + 1; });  // [1, 2, 3]

function checkDevice(width) {
    console.log("width: " + width);
    let device = null;
    switch (true) {
        // case (width < 480):
        //     console.log("phone: less than 480");
        case (width < 550):
        console.log("phone: less than 550");        
            device = "phone";
            break;
        // case (width < 768):
        //     console.log("mtablet: between 480 and 767");
        case (width < 800):
        console.log("mtablet: between 480 and 799");        
            device = "mTablet";
            break;
        case (width < 992):
            console.log("ltablet: between 800 and 991");
            device = "lgTablet";
            break;
        case (width < 1080):
            console.log("smDesktop: between 992 and 1079");
            device = "smDesktop";
            break;
        default:
            console.log("lgDesktop: 1080+");
            device = "lgDesktop";
            break;
    }
    return device;
}

function loadNumbers(device, width) {
    $('#numbers-container').css("visibility", "hidden");
    $("#number-list").empty();
    // console.log(numberArray);
    shuffleArray(numberArray);
    // console.log(numberArray);

    showNumbers(device, width);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function showNumbers(device, width) {
    // $('#numbers-table').remove();
    $('#number-list').find("div").remove();
    //mytable = $('<table></table>').attr({ id: "numbers-table" });
    //myRow = $('</div>');
    let cols = null;
    let maxPageNumbers = null;
    switch(device) {
        case "phone":
            cols = Math.floor(width/50)-1;  // There are too many screen sizes on small phones. This will adjust.
            maxPageNumbers = 3;             // !!! If you are testing this, you MUST refresh the browser when changing the screen size.
            break;                          // This won't be a problem in production, because you can't resize a phone.
        case "mTablet":
            // cols = 10;
            cols = Math.floor(width/50)-1;  // There are too many screen sizes on tablets. This will adjust.
            maxPageNumbers = 10;            // !!! If you are testing this, you MUST refresh the browser when changing the screen size.
            break;                          // This won't be a problem in production, because you can't resize a tablet.
        case "lgTablet":
            cols = 15;
            maxPageNumbers = 10;
            break;
        case "smDesktop":
            cols = 15;
            maxPageNumbers = 10;
            break;
        default:
            cols = 20;
            maxPageNumbers = 10;
            break;
    }
    console.log("cols: " + cols);
    let rows = Math.ceil(10000/cols);
    console.log("rows: " + rows);
    let tr = [];
    let idx = 0;
	for (let i = 0; i < rows; i++) {
		// let row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
        let row = $('<div></div>').appendTo("#number-list");
        if (i % 2 === 0) {
            row.addClass("odd");
        } else {
            row.addClass("even");
        }
        for (let j = 0; j < cols; j++) {
            $('<td></td>').text(numberArray[idx]).appendTo(row); 
            idx++;
		}
		 		 
    }
    $("#numbers-container").css("visibility", "visible");
	//console.log("TTTTT:"+mytable.html());
    //mytable.appendTo("#number-list");
    $(".paginate").paginga({
        itemsPerPage: 20,	// Number of documents to show per page
        maxPageNumbers: maxPageNumbers	// Number of page buttons to show.
    });
}
