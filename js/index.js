"use strict";

var users = [{
  id: 1,
  fullname: "Death",
  photo: "http://adhk.org/wp-content/uploads/2017/08/DeathMask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/death-costume.png",
  description: "Death, the archetype of Death."
}, {
  id: 2,
  fullname: "Fear",
  photo: "http://adhk.org/wp-content/uploads/2017/08/fear-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/fear-costume.png",
  description: "Fear, the archetype of fear lives with its eyes wide open in hopes of seeing oncoming evils or danger far away, allowing enough time to run and hide."
}, {
  id: 3,
  fullname: "Fire",
  photo: "http://adhk.org/wp-content/uploads/2017/08/fire-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/fire-costume.png",
  description: "Fire, one of nature's elements that gives life and destroys it."
}, {
  id: 4,
  fullname: "Baby",
  photo: "http://adhk.org/wp-content/uploads/2017/08/baby-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/baby-costume.png",
  description: "The Pity Party Baby, the giant over size individual absorbing all his surroundings by being self absorbed."
}, {
  id: 5,
  fullname: "Insect",
  photo: "http://adhk.org/wp-content/uploads/2017/08/insect-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/insect-costume.png",
  description: "Insect, the buggy eyed creature with pincher like claws."
}, {
  id: 6,
  fullname: "Orge",
  photo: "http://adhk.org/wp-content/uploads/2017/08/orge-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/orge-costume.png",
  description: "Ogre, a wild beast and sometimes gentle giant. The mask is a combination of paper-mache and plaster, the hair and body is covered with individually knotted pieces of material to give his furry complexion."
}, {
  id: 7,
  fullname: "Mother Nature",
  photo: "http://adhk.org/wp-content/uploads/2017/08/mothernature-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/mothernature-costume.png",
  description: "Mother Nature, the archetype of all life on earth. The center of her mask depicts the Venus of Willendorf, the oldest known statue of a woman's body. The outer edge of the mask is an arc of animals and living beings surrounding this image."
}, {
  id: 8,
  fullname: "The Shaman",
  photo: "http://adhk.org/wp-content/uploads/2017/08/shaman-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/shaman-costume.png",
  description: "The Shaman's mask has antlers made of hands that support the animals and nature in its surroundings, demonstrating its connection with all life on the earth."
}, {
  id: 9,
  fullname: "Day & Night",
  photo: "http://adhk.org/wp-content/uploads/2017/08/night-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/daynight.png",
  description: "Day & Night, the Sun and the Moon in our sky make light for day and night dwellers to see, two of our archetypes of the cosmos."
}, {
  id: 10,
  fullname: "Technology",
  photo: "http://adhk.org/wp-content/uploads/2017/08/technology-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/technology-costume.png",
  description: "Technology, represents the growth of science and ones moving away from nature. Power struggles between Mother Nature and Technology occur often in many forms, here are costumes that reflect them as an individual being."
}, {
  id: 11,
  fullname: "Baby",
  photo: "",
  cover: "",
  description: ""
}];
Vue.component("thumb", {
  name: "thumb",
  template: "<div class=\"thumb\">\n    <div class=\"thumb__photo\">\n      <img :src=\"photo\" alt=\"\" /></div>\n        <div class=\"thumb__content\">\n          <h2 class=\"thumb__fullname\">{{fullname}}</h2>\n          <p class=\"thumb__title\">{{title}}</p>\n        </div> \n      </div>",
  props: ["fullname", "title", "photo", "test"]
});
var app = new Vue({
  el: "#app",
  data: function data() {
    return {
      users: users,
      coverPhoto: null,
      isShowDetail: false,
      others: null,
      selected: null,
      selectedIndex: 0,
      style: null,
      details: {
        description: null,
        social: {
          facebook: null,
          twitter: null,
          instagram: null,
          github: null
        }
      }
    };
  },

  methods: {
    thumbID: function thumbID(index) {
      return "#user-" + index;
    },
    changeCover: function changeCover(index) {
      this.coverPhoto = this.users[index].cover;
    },
    selectUser: function selectUser(index) {
      var _this = this;
      this.selectedIndex = this.users[index].id - 2;

      this.selected = document.querySelector(this.thumbID(index));

      this.style = "position:absolute;left:" + this.selected.offsetLeft + "px;top:" + this.selected.offsetTop + "px";
      this.others = document.querySelectorAll(".thumb:not(" + this.thumbID(index) + ")");
      this.others.forEach(function (element, i) {
        setTimeout(function () {
          element.classList.add("thumb--disable");
          if (_this.others.length - 1 == i) {
            _this.showDetails();
          }
        }, 100 * i + 1);
      });
    },
    backToUsers: function backToUsers() {
      this.isShowDetail = false;
      this.selected.setAttribute("style", "");
      this.others.forEach(function (element, i) {
        setTimeout(function () {
          element.classList.remove("thumb--disable");
          document.getElementById('cover-section-photo').classList.remove("cover__photo__detail");

        }, 100 * i + 1);
      });
    },
    showDetails: function showDetails() {
      var _this2 = this;

      setTimeout(function () {
        _this2.selected.setAttribute("style", _this2.style);
      }, 200);
      setTimeout(function () {
        _this2.isShowDetail = true;
        _this2.selected.style.top = "90px";
        document.getElementById('cover-section-photo').classList.add("cover__photo__detail");
      }, 220);
    }
  },
  created: function created() {
    this.coverPhoto = this.users[0].cover;
  }
});
