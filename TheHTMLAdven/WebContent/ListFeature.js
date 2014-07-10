function generateList() {
	
	//Create new array of size 3000
	var size = 3000;
	var data = new Array(3000);
	
	//Populate new array
	while (size--) {
		data[size] = new Array(2);
		data[size] = [ 'foo', 'bar' ];
	}
	
	//Create tag for  ordered list
	var listElement = document.createElement("ol");
	listElement.id = 'listElement';
	document.getElementById("content").appendChild(listElement);
	
	//Centralize the list
	document.getElementById('listElement').className += ' center';

	//Populate the list elements from the array
	for (var i = 0; i < data.length; ++i) {
		var listItem = document.createElement("li");
		listItem.innerHTML = data[i][0] + '&nbsp;&nbsp;&nbsp;' + data[i][1];
		listElement.appendChild(listItem);
	}
	
}