<template>
  <div>
    <Sidebar />
    <!-- 內容開始 -->
    <div class="contentSet">
      <router-view></router-view>
    </div>
    <!-- 內容結束 -->
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

import Sidebar from "./Sidebar";
export default {
  components: {
    Sidebar
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.contentSet {
  padding-left: 250px;
}
@media screen and (max-width: 768px) {
  .contentSet {
    padding-left: 0px;
    overflow-x: hidden;

    // width: 100vw;
  }
}
</style>