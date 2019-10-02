<template>
  <div>
      <Sidebar/>
    <div class="contentBlock" :class="{'toggledHead':toggleMove}">
      <UserNav/>
      <!-- 內容開始 -->
      <div class="container-fluid pt-3"></div>

      <!-- 內容結束 -->
      <footer>made By UShow</footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

$(document).ready(function() {
  $(".toggleMenu").hide();
});

// $(function() {
//   $("[data-toggle='popover']").popover({
//     title: "",
//     content: '<a class="btn btn-primary" href="#">Logout</a>',
//     html: true,
//     placement: "auto"
//   });
// });

import Sidebar from './Sidebar';
import UserNav from './UserNav';
export default {
    components:{
        Sidebar,
        UserNav
    },
  data() {
    return {
      toggleMove: false
    };
  },
  methods: {
    userToggle() {
      $(".rightImgBlock")
        .stop()
        .slideToggle();
    },
    mainToggle(event) {
      // console.log(event);
      $(event.target)
        .next(".toggleMenu")
        .stop()
        .slideToggle();
      $(event.target.lastElementChild).toggleClass("rotate180");
    }
  }
};
</script>

<style lang="scss" scoped>
$font-mid: 15px;
$font-big: $font-mid * 1.5;
$font-small: $font-mid * 0.8;

$color-white: #fff;
$color-blue: #00558f;
$color-gray: #7b7b7b;

$user-img-size: 50px;
$radius-size: 6px;

$letter-spacing-ul: 3px;
$sidebar-width: 250px;
$mobile-Head-height: 65px;
$user-line: 1px solid rgba(202, 202, 202, 0.329);

$animate-time: 0.5s;
@mixin pc-icon-btn {
  position: absolute;
  text-align: right;
  margin: 25px 20px 0 auto;
  color: $color-white;
  cursor: pointer;
  display: none;
}

* {
  margin: 0;
  padding: 0;
  font-size: $font-mid;
  font-family: "微軟正黑體";
  -webkit-user-select: none;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  background-color: rgb(136, 185, 248);
  border-radius: $radius-size;
}

/* 捲軸拉的軸軌的顏色 */
::-webkit-scrollbar-thumb {
  background-color: $color-blue;
  border-radius: $radius-size;
}

::-webkit-scrollbar-thumb:vertical {
  border-radius: $radius-size;
}

.sidebar {
  font-size: $font-big;

  .sidehead {
    width: $sidebar-width;
    height: $mobile-Head-height;
    background-color: $color-blue;
    float: left;
    display: flex;
    position: fixed;
    z-index: 1;
    padding-right: 1px;
    border-bottom: $user-line;
    transition: $animate-time;

    .sideheadText {
      text-align: left;
      margin: 25px 0 0 25px;
      color: $color-white;
    }

    .sidebarBtn {
      @include pc-icon-btn;
    }

    .userBtn {
      @include pc-icon-btn;
    }
  }

  .sidebody {
    transition: $animate-time;
    width: $sidebar-width;
    height: 100vh;
    min-height: 100%;
    float: left;
    background-color: $color-blue;
    color: $color-white;
    overflow-y: auto;
    position: fixed;

    .userContent {
      .userBlock {
        border-bottom: $user-line;
        margin-top: 80px;
        margin-bottom: 20px;
        transition: $animate-time;

        .userImgBlock {
          float: left;
          margin-left: 10px;

          .userImg {
            width: $user-img-size;
            margin: -2px 10px 0 10px;
          }
        }

        .userTextBlock {
          margin-left: 50px;
          .adminText {
            margin-bottom: 8px;
          }
          .userText {
            margin-top: -8px;
            margin-bottom: 15px;
          }
        }
      }

      .basicToggleBlock {
        display: flex;
        padding: 10px;
        border-radius: $radius-size;
        cursor: pointer;
        margin: 0px 10px 0 10px;
        &:hover {
          background-color: rgba(255, 255, 255, 0.247);
        }

        .toggleIcon {
          margin: auto auto auto 10px;

          .basicIcon {
            margin-top: 3px;
          }
        }

        .toggleText {
          margin: auto auto auto -100px;
          letter-spacing: $letter-spacing-ul;
        }

        .toggleTextSet {
          margin-left: -60px;
        }

        .downIcon {
          transition: $animate-time;
          margin-top: 3px;
        }
      }
    }

    .toggleMenu {
      li {
        margin: 0 10px 0 10px;
        padding: 8px 0 8px 40px;
        border-radius: $radius-size;
        letter-spacing: $letter-spacing-ul;
        font-size: $font-mid - 1;
        list-style-position: inside;
        cursor: pointer;
        &:hover {
          background-color: rgba(255, 255, 255, 0.247);
        }
      }
    }
  }
}

.contentBlock {
  margin-left: $sidebar-width;
  padding-top: 50px;
  .rightImgBlock {
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 5;
    margin-bottom: 30px;

    .rightImg {
      width: $user-img-size;
      cursor: pointer;
    }
  }

  footer {
    font-size: $font-mid;
    position: fixed;
    right: 15px;
    bottom: 20px;
    color: $color-gray;
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    .sidehead {
      width: 100vw;
      position: absolute;
      border: 0px;

      .sideheadText {
        margin: auto;
      }

      .sidebarBtn {
        left: 25px;
        display: block;
      }

      .userBtn {
        display: block;
        right: 5px;
      }
    }

    .sidebody {
      padding-left: 0;
      position: fixed;
      margin-left: -($sidebar-width);
      float: left;
      .toggled {
        padding-left: $sidebar-width;
      }

      .userContent {
        border: 0px;

        .userBlock {
          margin-top: 30px;
        }
      }
    }
  }

  .contentBlock {
    transition: $animate-time;
    top: $mobile-Head-height;
    margin-left: 10px;
    .rightImgBlock {
      width: 100vw;
      right: 0;
      top: 15px;
      padding: 5px 0;
      margin-left: -10px;
      margin-bottom: 0px;
      background-color: rgba(238, 238, 238, 0.7);
      text-align: center;
      position: relative;
      display: none;
    }
    footer {
      display: none;
    }
  }
}

// js用
.rotate180 {
  // animation-duration: 2s;
  transform: rotate(180deg);
}

.toggledHead {
  transform: translate($sidebar-width, 0);
}
</style>