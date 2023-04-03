//your JS code here. If required.
function hello() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Hello, world!");
		},1000);
	});
}

hello().then((data) => {
	document.getElementById("output").innerHTML=data;
});