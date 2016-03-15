var initialCats = [
       {
         clickCount : 0,
         name : 'Tabby',
         imgSrc : 'img/434164568_fea0ad4013_z.jpg',
         imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568'
       },
       {
         clickCount : 0,
         name : 'Tiger',
         imgSrc : 'img/4154543904_6e2428c421_z.jpg',
         imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
       },
       {
         clickCount : 0,
         name : 'Scaredy',
         imgSrc : 'img/22252709_010df3379e_z.jpg',
         imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
       },
       {
         clickCount : 0,
         name : 'Shadow',
         imgSrc : 'img/1413379559_412a540d29_z.jpg',
         imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
       },
       {
         clickCount : 0,
         name : 'Sleepy',
         imgSrc : 'img/9648464288_2516b35537_z.jpg',
         imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
       }
    ];

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.level = ko.computed(function() {
    if (this.clickCount() < 10) {
      return "Newborn";
    } else if (this.clickCount() < 20) {
      return "Infant";
    } else if (this.clickCount() < 30) {
      return "Adult";
    } else {
      return "Ninja";
    }
  }, this); 
};

var ViewModel = function() {
  var self = this;
  self.catlist = ko.observableArray([]);
  initialCats.forEach(function(catItem) {
    self.catlist.push(new Cat(catItem));
  });
  self.currentCat = ko.observable(self.catlist()[0]);
  self.showCurrent = function(cat) {
    self.currentCat(cat);
  };
  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
}

ko.applyBindings(new ViewModel());

