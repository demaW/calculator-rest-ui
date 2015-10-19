function createRequest() {
	var result = new XMLHttpRequest();
	return result;
}

function add() {
	if(!validateform(document.getElementById('value1add'),document.getElementById('value2add'))){
		return;
	}
	var req = createRequest();
	var url2 = "webapi/calc/add" + "/"
			+ document.getElementById('value1add').value + "/"
			+ document.getElementById('value2add').value;
	req.open("GET", url2, false);
	req.send();
	document.getElementById('addresult').innerHTML = req.responseText;
}

function sub() {
	if(!validateform(document.getElementById('value1sub'),document.getElementById('value2sub'))){
		return;
	}
	var req = createRequest();
	var url2 = "webapi/calc/subtract" + "/"
			+ document.getElementById('value1sub').value + "/"
			+ document.getElementById('value2sub').value;
	req.open("GET", url2, false);
	req.send();
	document.getElementById('subresult').innerHTML = req.responseText;
}

function mult() {
	if(!validateform(document.getElementById('value1mult'),document.getElementById('value2mult'))){
		return;
	}
	var req = createRequest();
	var url2 = "webapi/calc/mult" + "/"
			+ document.getElementById('value1mult').value + "/"
			+ document.getElementById('value2mult').value;
	req.open("GET", url2, false);
	req.send();
	document.getElementById('multresult').innerHTML = req.responseText;
}

function divide() {
	if (!validateform(document.getElementById('value1div'),document.getElementById('value2div'))){
		return;}
	var req = createRequest();
	var url2 = "webapi/calc/divide" + "/"
			+ document.getElementById('value1div').value + "/"
			+ document.getElementById('value2div').value;
	req.open("GET", url2, false);
	req.send();
	document.getElementById('divresult').innerHTML = req.responseText;
}

function validateform(element1, element2) {
	if (element1.value == null
			|| element1.value == "") {
		alert("A can't be blank");
		element.value = "0";
		return false;
	} else if (element2.value == null
			|| element2.value == "") {
		alert("B can't be blank");
		element2.innerHTML = "";
		return false;
	} else
		return true;
}