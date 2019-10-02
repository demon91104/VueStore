<template>
    <div class="rightImgBlock">
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
</template>

<script>
</script>

<style lang="scss">
$user-img-size: 50px;

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
</style>