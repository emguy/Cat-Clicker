var imgCat = document.getElementById("cat");
var count = 0;
imgCat.addEventListener("click", function(){
 ++count; 
 document.getElementById("out").innerHTML = count;
}, false);

