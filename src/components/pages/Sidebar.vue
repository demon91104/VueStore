<template>
  <div>
    <div class="sidebar">
      <div class="sidehead" :class="{'toggledHead':toggleMove}">
        <p class="sideheadText">Ushow</p>
        <span @click="toggleMove=!toggleMove">
          <i class="fas fa-bars sidebarBtn"></i>
        </span>
        <span @click="userToggle">
          <i class="fas fa-ellipsis-v userBtn"></i>
        </span>
      </div>
      <div class="sidebody" :class="{'toggledHead':toggleMove}">
        <div class="userContent">
          <div class="userBlock">
            <div class="userImgBlock">
              <img class="userImg" src="../../imgs/user.png" alt />
            </div>
            <div class="userTextBlock">
              <p class="adminText">admin</p>
              <p class="userText">營業人</p>
            </div>
          </div>
          <div class="basicToggleBlock" @click="mainToggle">
            <div class="toggleIcon">
              <i class="far fa-file-alt basicIcon"></i>
            </div>
            <p class="toggleText toggleTextSet">基本資料</p>
            <i class="fas fa-caret-down downIcon"></i>
          </div>
          <ul class="toggleMenu">
            <li>使用者</li>
            <li>門市</li>
            <li>收銀台</li>
            <li>員工</li>
            <li>商品類別</li>
            <li>商品</li>
            <li>口味</li>
            <li>套餐</li>
            <li>科目</li>
            <li>價格標</li>
          </ul>
          <div class="basicToggleBlock" @click="mainToggle">
            <div class="toggleIcon">
              <i class="fas fa-chart-line basicIcon"></i>
            </div>
            <p class="toggleText">報表</p>
            <i class="fas fa-caret-down downIcon"></i>
          </div>
          <ul class="toggleMenu">
            <li>使用者</li>
            <li>門市</li>
            <li>收銀台</li>
            <li>員工</li>
            <li>商品類別</li>
            <li>商品</li>
            <li>口味</li>
            <li>套餐</li>
            <li>科目</li>
            <li>價格標</li>
          </ul>
          <div class="basicToggleBlock" @click="mainToggle">
            <div class="toggleIcon">
              <i class="fas fa-cog basicIcon"></i>
            </div>
            <p class="toggleText">設定</p>
            <i class="fas fa-caret-down downIcon"></i>
          </div>
          <ul class="toggleMenu">
            <li>使用者</li>
            <li>門市</li>
            <li>收銀台</li>
            <li>員工</li>
            <li>商品類別</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contentBlock" :class="{'toggledHead':toggleMove}">
      <div class="rightImgBlock">
      <button class="btn btn-primary p-2" @click.prevent="signout">登出</button>
        <img
          class="rightImg"
          src="../../imgs/user.png"
          alt
          data-container="body"
          data-toggle="popover"
          data-img="../../imgs/user.png/50x50"
          data-placement="bottom"
          data-content
        />
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// $(function() {
//   $("[data-toggle='popover']").popover({
//     title: "",
//     content: '<a href="../" @click.prevent="signout">登出</a>',
//     html: true,
//     placement: "right"
//   });
// });
export default {
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
     signout() {
      const api = `${process.env.APIPATH}/logout`;
      var vm = this;
      this.$http.post(api, vm.user).then(response => {
        if (response.data.success) {
          vm.$router.push("/login");
        }
        // console.log(response.data);
      });
    },
    mainToggle(event) {
      // console.log(event);
      $(event.target)
        .next(".toggleMenu")
        .stop()
        .slideToggle();
      $(event.target.lastElementChild).toggleClass("rotate180");
    },
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
  overflow-x: hidden;
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
        display: none;
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
  // padding-top: 60px;
  .rightImgBlock {
    position: relative;
    text-align: right;
    margin-right: 30px;
    margin-top: 20px;
    z-index: 5;
    // margin-bottom: 50px;

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
      width: 100%;
      position: relative;

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
      padding-top: 0px;
      padding-left: 0;
      position: fixed;
      margin-left: -($sidebar-width);
      float: left;
      .userContent {
        border: 0px;
        .userBlock {
          margin-top: 15px;
        }
      }
    }
  }

  .contentBlock {
    transition: $animate-time;
    top: $mobile-Head-height;
    margin-left: 0px;
    .rightImgBlock {
      width: 100%;
      margin-top: 0px;
      padding: 5px 0;
      background-color: rgba(238, 238, 238, 0.7);
      text-align: center;
      position: relative;
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