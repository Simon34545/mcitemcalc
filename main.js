function update() {
	var numb = document.getElementsByName("numb")[0];
	var mode = document.getElementsByName("mode")[0];
	
	var nVal = parseInt(numb.value);
	var rslt;
	
	if (mode.options[mode.selectedIndex].value == "1") {
		var item = nVal % parseInt(document.getElementById('stck').value);
		var stck = (nVal - item) / parseInt(document.getElementById('stck').value);
		rslt = `Result: ${stck} Stack${stck == 1 ? '' : 's'} ${item} Item${item == 1 ? '' : 's'}`;
	} else {
		var item = nVal * parseInt(document.getElementById('stck').value);
		rslt = `Result: 0 Stacks ${item} Item${item == 1 ? '' : 's'}`;
	};
	
	document.getElementById('output').textContent = rslt;
};


$('input').each(function() {
	var elem = $(this);	
	
	elem.bind("propertychange change click keyup input paste", function(event){
		update();
	});
});

$(document).click(update);