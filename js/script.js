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
    adminView.init();
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
        adminView.init();
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
          adminView.init();
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(curCat));
    }
  }
}

/* ======= Admin View ======= */
var adminView = {
  init: function() {
    this.elemBtn = document.getElementById("admin-btn");
    this.elemForm = document.getElementById("admin-form");
    this.elemBtnUpdate = document.getElementById("admin-btn-update");
    this.elemBtnCancel = document.getElementById("admin-btn-cancel");

    this.elemName = document.getElementById("input-cat-name");
    this.elemCount = document.getElementById("input-cat-clicks");
    this.elemURL = document.getElementById("input-cat-url");

    this.elemForm.style.visibility = "hidden";
    this.elemBtn.style.visibility = "visible";

    this.elemBtn.addEventListener("click", function() {
      var elemForm = document.getElementById("admin-form");
      var elemBtn = document.getElementById("admin-btn");
      elemBtn.style.visibility = "hidden";
      elemForm.style.visibility = "visible";
      adminView.preSetValues();
    });

    this.elemBtnUpdate.addEventListener("click", function() {
      var curCat = octopus.getCurrentCat();
      curCat.name = document.getElementById("input-cat-name").value;
      curCat.clickCount = parseInt(document.getElementById("input-cat-clicks").value);
      curCat.imgSrc = document.getElementById("input-cat-url").value;
      adminView.init();
      catView.render();
    }, false);

    this.elemBtnCancel.addEventListener("click", function() {
      adminView.init();
    }, false);

  },
  preSetValues: function() {
    var curCat = octopus.getCurrentCat();
    this.elemName.value = curCat.name;
    this.elemCount.value = parseInt(curCat.clickCount);
    this.elemURL.value = curCat.imgSrc;
  },
}

octopus.init();
})()


