<template>
  <div>
    <form class="form-signin" @submit.prevent="signin">
      <div class="bg">
        <img src="../../imgs/background.png" alt />
      </div>
      <div class="whitebox">
        <div class="ushowImg">
          <img src="../../imgs/UshowLogo.png" alt width="100px" />
          <p class="ushowText">Ushow</p>
        </div>
        <div class="form-group account">
          <label for="account" class="accountText">帳號</label>
          <input id="account" type="text" class="accountInput form-control" v-model="user.username" />
        </div>
        <div class="form-group account">
          <label for="password" class="accountText">密碼</label>
          <input
            id="password"
            type="password"
            class="accountInput form-control"
            v-model="user.password"
          />
          <!-- <i class="far fa-eye passwordIcon"></i> -->
        </div>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="signIn btn">
          <p class="signInText">Sign In</p>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      var vm = this;
      this.$http.post(api, this.user).then(response => {
        if (response.data.success) {
          vm.$router.push("/");
        }
        console.log(response.data);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$whiteText: #fff;
$inputbg: #d5e7ff !important ;
$ushowText: #7b7b7b;
$signBtnColor: #3981ff;
$font-mid: 15px;
$font-small: $font-mid * 0.8;
$font-big: $font-mid * 1.5;
$font-bigger: $font-mid * 2.5;
* {
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
}
@font-face {
  font-family: PingFang SC;
  src: url(/imgs/PingFang\SC.ttf);
}
body {
  font-size: $font-mid;
  font-family: "PingFang SC";
  -webkit-user-select: none;
}
.bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -999;
  img {
    min-height: 100%;
    width: 100%;
  }
}
.whitebox {
  width: 340px;
  height: 576px;
  background-color: $whiteText;
  margin: 30px auto 0 auto;
  border-radius: 32px;
  box-shadow: 0 0 15px rgb(83, 82, 82);
  text-align: center;
  .ushowImg {
    padding-top: $font-big;
    text-align: center;
    .ushowText {
      font-family: "Segoe UI", sans-serif;
      color: $ushowText;
      font-size: $font-bigger;
      font-weight: bold;
    }
  }
  .account {
    margin: 35px 35px;
    position: relative;
    .accountText {
      margin-right: 200px;
      font-weight: bold;
      letter-spacing: 15px;
      color: $ushowText;
    }
    .accountInput {
      background-color: $inputbg;
      text-align: center;
    }
  }
  .signIn {
    background-color: $signBtnColor;
    width: 160px;
    height: 40px;
    border-radius: 8px;
    margin: 30px 0 0 0;
    .signInText {
      color: $whiteText;
      font-weight: bold;
      margin-top: 1px;
      font-size: $font-big;
      font-family: "Segoe UI", sans-serif;
    }
  }
}
</style>