<html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

<!-- jQuery library -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="js/app.js"></script>
</head>
<body>
	<div class="container">
		<div class="jumbotron">
			<h2>Jersey RESTful Web Application Calculator!</h2>
		</div>
		<div class="well well-lg">
			<p>Please enter 2 numbers to add:</p>
			<input type="number" name="value1add" id="value1add"> + <input
				type="number" name="value2add" id="value2add">
			<button class="btn btn-primary btn-md" type="button" onclick=add()>=</button>
			<p id="addresult"></p>
		</div>
		<br>
		<div class="well well-lg">
			<p>Please enter 2 numbers to subtract:</p>
				<input type="number"
				name="value1sub" id="value1sub"> - <input type="number"
				name="value2sub" id="value2sub">
			<button class="btn btn-primary btn-md" type="button" onclick=sub()>=</button>
			<p id="subresult"></p>
		</div>
		<div class="well well-lg">
			<p>Please enter 2 numbers to multiply:</p>
			<input type="number"
				name="value1mult" id="value1mult"> * <input type="number"
				name="value2mult" id="value2mult">
			<button class="btn btn-primary btn-md" type="button" onclick=mult()>=</button>
			<p id="multresult"></p>
		</div>
		<div class="well well-lg">
			<p>Please enter 2 numbers to divide:</p>
				<input type="number"
				name="value1div" id="value1div"> / <input type="number"
				name="value2div" id="value2div">
			<button class="btn btn-primary btn-md" type="button" onclick=divide()>=</button>
			<p id="divresult"></p>
		</div>
	</div>
</body>
</html>
