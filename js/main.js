$.get("text/copy.txt",function(data){
	console.log(data);


});

var fs = require("fs");

var text = "テスト出力";
fs.writeFile('out.txt', text);