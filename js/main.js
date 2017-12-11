let numberArray = Array.apply(0, Array(10000)).map(function (x, y) { return y + 1; });  // [1, 2, 3]

function checkDevice(width) {
    let device = null;
    switch (true) {
        case (width < 550):
            device = "phone";
            break;
        case (width < 800):
            device = "mTablet";
            break;
        case (width < 992):
            device = "lgTablet";
            break;
        case (width < 1080):
            device = "smDesktop";
            break;
        default:
            device = "lgDesktop";
            break;
    }
    return device;
}

function shuffleArray() {    
    for (let i = numberArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
    }
}

function showNumbers(device, width) {
    $('#numbers-container').css("visibility", "hidden");
    $("#number-list").empty();

    let cols = null;
    switch(device) {
        case "phone":
            cols = Math.floor(width/50)-1;  
            break;                          
        case "mTablet":
            cols = Math.floor(width/50)-1;  
            break;                          
        case "lgTablet":
            cols = 15;
            break;
        case "smDesktop":
            cols = 15;
            break;
        default:
            cols = 20;
            break;
    }
    
    let rows = Math.ceil(10000/cols);
    let tr = [];
    let idx = 0;
	for (let i = 0; i < rows; i++) {
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
    $(".paginate").paginga({
        itemsPerPage: 20,	// Number of documents to show per page
        maxPageNumbers: 5	// Number of page buttons to show.
    });
    $("#update-pagination-items").trigger("click");
}