(function() {

var nCats = 6;
var cat = function(url) {
  this.clicks = 0;
  this.url = url;
};

var activeIndex = 0;

var listOfCats = [];

var init = function() {
  for (var i = 0; i < nCats; ++i) {
    if (i % 2 == 0) {
      var cur = new cat("http://cdnstatic.visualizeus.com/thumbs/41/35/animals,cats,cute,orange,cutecat,cat-4135b0084db66cc32f11683920dcfa1f_h.jpg");
    } else {
      var cur = new cat("http://cdnstatic.visualizeus.com/thumbs/31/d1/animal,cute-31d10352a0cd22c8c7a85d818937799f_h.jpg");
    }
    listOfCats.push(cur);
  }

  renderButton();

  for (var i = 0; i < nCats; ++i) {  
    var listOfButtons = document.getElementsByClassName("cat-btn");
    var btn = listOfButtons[i];
    var cur = listOfCats[i];
    console.log(btn);
    btn.addEventListener("click", (function(curCopy) {
      return function() {renderCat(curCopy);}
    })(cur), false);
    var image = document.getElementById("cat-image");
  }

  if (listOfCats.length > 0) {
    renderCat(listOfCats[activeIndex]);
  }
};

//var incClicks = function(cur) {
//  //console.log(cur);
//  ++cur.clicks;
//}

var renderButton = function() {
  var control = document.getElementById("control-group");
  for (var i = 0; i < nCats; ++i) {
    var cur = document.createElement("button"); 
    cur.className = "cat-btn";
    cur.innerHTML = "cat " + (i + 1).toString();
    control.appendChild(cur);
  }
};

var renderCat = function() {
  var cur = listOfCats[activeIndex];
  var image = document.getElementById("cat-image");
  image.setAttribute("src", cur.url);
  out.innerHTML = cur.clicks.toString();
};

init();

})()

