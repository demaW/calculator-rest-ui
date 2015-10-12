function createRequest() {
  var result = new XMLHttpRequest();
  return result;
}

function add(){
	var req = createRequest();
	var url2 = "webapi/calc/add" + "/" + document.getElementById('value1add').value + "/" + document.getElementById('value2add').value;
	req.open("GET", url2, false);
	req.send();
	document.getElementById('addresult').innerHTML =  req.responseText;
}