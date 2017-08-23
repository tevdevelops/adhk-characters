"use strict";

var users = [{
  id: 1,
  fullname: "Death",
  photo: "http://adhk.org/wp-content/uploads/2017/08/DeathMask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/death-costume.png",
  description: "Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out.",
}, {
  id: 2,
  fullname: "Fear",
  photo: "http://adhk.org/wp-content/uploads/2017/08/fear-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/fear-costume.png",
  description: "Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out.",
}, {
  id: 3,
  fullname: "Fire",
  photo: "http://adhk.org/wp-content/uploads/2017/08/fire-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/fire-costume.png",
  description: "Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out.",
}, {
  id: 4,
  fullname: "Baby",
  photo: "http://adhk.org/wp-content/uploads/2017/08/baby-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/baby-costume.png",
  description: "Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out.",
}, {
  id: 5,
  fullname: "Insect",
  photo: "http://adhk.org/wp-content/uploads/2017/08/insect-mask.jpg",
  cover: "http://adhk.org/wp-content/uploads/2017/08/insect-costume.png",
  description: "Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out.",
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
