<template>
  <div>
    <Sidebar/>
    <!-- 內容開始 -->
      <div class="container-fluid pt-3">
          1234564564564654654565645465456456456454654564
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

import Sidebar from './Sidebar';
export default {
    components:{
        Sidebar,
    },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>

</style>