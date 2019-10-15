<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <p class="float-left">庫存盤點</p>
      </div>
      <div class="card-body">
          <div class="form-inline">
            <label for="1" class="labelSet">盤點日期:</label>
            <input type="date" class="form-control inputSet" id="1" />
            <label for="2" class="labelSet">倉庫:</label>
            <input type="text" class="form-control inputSet" id="2" />
          </div>
          <div class="form-inline mt-4">
            <label for="3" class="labelSet">盤點單號:</label>
            <input type="text" class="form-control inputSet" readonly="readonly" id="3" />
            <label for="4" class="labelSet">備註:</label>
            <textarea class="form-control inputSet" id="4" rows="1"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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
.labelSet {
  letter-spacing: $letter-spacing-ul;
  font-size: $font-mid;
  margin: 0px 30px 0px 90px;
}
.inputSet {
  width: 300px;
  text-align: center;
}
</style>