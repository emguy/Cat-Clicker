(function() {

/* ======= Model ======= */
var model = {
  currentCat: null,
  cats: [
    {
      clickCount : 0,
      name : "Tabby",
      imgSrc : "http://i1.wp.com/www.japancrush.com/wp-content/uploads/2015/05/man-drags-cat-behind-car-kills-it-japan-02.jpg",
    },
    {
      clickCount : 0,
      name : "Tiger",
      imgSrc : "http://www.petfoodindustry.com/ext/resources/cat-600x400.jpg",
    },
    {
      clickCount : 0,
      name : "Scaredy",
      imgSrc : "https://shechive.files.wordpress.com/2015/11/cat-owner-struggles-101.jpg?quality=80&strip=info",
    },
    {
      clickCount : 0,
      name : "Shadow",
      imgSrc : "http://www.chagrinfallspetclinic.com/wp-content/uploads/2014/04/cat-600x400.jpg",
    },
    {
      clickCount : 0,
      name : "Sleepy",
      imgSrc : "http://tailandfur.com/wp-content/uploads/2016/01/30-Cute-Smiling-Cat-Pictures-8.jpg",
    }
  ]
};

/* ======= Octopus ======= */
var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    buttonView.init();
    catView.init();
  },
  getCurrentCat: function() {
    return model.currentCat;
  },
  incCounter: function() {
    ++model.currentCat.clickCount;
  },
  getCats: function() {
    return model.cats;
  },
  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },
};

/* ======= Cat View ======= */
var catView = {
  init: function() {
    var cat = octopus.getCurrentCat();
    this.elemImg = document.getElementById("cat-image");
    this.elemName = document.getElementById("cat-name");
    this.elemOut = document.getElementById("out");
    this.elemImg.addEventListener("click", (function(catCopy) {
      return function() {
        octopus.incCounter(catCopy);
        catView.render();
      }
    })(cat));
    catView.render();
  },
  render: function() {
    var curCat = octopus.getCurrentCat();
    this.elemImg.src =  curCat.imgSrc;
    this.elemName.textContent = curCat.name;
    this.elemOut.textContent = curCat.clickCount.toString();
  },
}

/* ======= Button View ======= */
var buttonView = {
  init: function() {
    var cats = octopus.getCats();
    var elemCats = document.getElementById("cat-list");
    for (var i = 0; i < cats.length; ++i) {
      var cur = document.createElement("li");
      var curCat = cats[i];
      cur.className = "cat-btn";
      cur.textContent = curCat.name;
      elemCats.appendChild(cur);
      cur.addEventListener("click", (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(curCat));
    }
  }
}

octopus.init();
})()

