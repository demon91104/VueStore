<template>
  <div class="col-md-12">
    <form>
      <div class="card">
        <div class="card-header">
          <p class="float-left font-weight-bold">庫存調整</p>
          <div class="float-right">
            <button class="btn btn-primary btn-icon btn-round rounded-circle" id="submitTable" type="submit">
              <i class="fas fa-check"></i>
            </button>
            <button class="btn btn-danger btn-icon btn-round rounded-circle">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="form-inline">
              <label for="1" class="labelSet">調整日期:</label>
              <input type="date" class="form-control inputSet" id="1" />
              <label for="2" class="labelSet">倉庫:</label>
              <input type="text" class="form-control inputSet" id="2" />
            </div>
            <div class="form-inline mt-4">
              <label for="3" class="labelSet">填單人:</label>
              <input type="text" class="form-control inputSet" id="3" />
              <label for="4" class="labelSet">備註:</label>
              <textarea class="form-control inputSet" id="4" rows="1"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-5">
        <div class="card-header">
          <p class="float-left font-weight-bold">庫存調整 2</p>
          <div class="float-right">
            <button class="btn btn-primary btn-icon btn-round rounded-circle" id="submitTable" @click="openModal">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="card-body">
          <table class="table text-center" id="tableId">
            <thead>
              <tr>
                <th>刪除</th>
                <th>商品編號</th>
                <th>商品名稱</th>
                <th width="120px">數量</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in isCheckItem" :key="item.id">
                <td>
                  <button class="btn btn-danger" @click="deleteRow(index)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>{{item.price}}</td>
                <td>{{item.category}}</td>
                <td>
                  <input type="number" value="1" class="form-control text-center" />
                </td>
                <td>
                  <textarea class="form-control" aria-label="With textarea"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <SelectFoodsModal @childevent="watchChildEvent"></SelectFoodsModal>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import $ from "jquery";
import SelectFoodsModal from "../pages/SelectFoodsModal";
export default {
  components: {
    SelectFoodsModal
  },
  data() {
    return {
      isCheckItem: []
    };
  },
  methods: {
    openModal() {
      $("#productsModel").modal("show");
    },
    watchChildEvent(items) {
        for(let i = 0 ; i < items.length ; i++)
        this.isCheckItem.push(items[i])
    //   this.isCheckItem = items; 此方法會一直刷新故不使用
      // console.log(items)
    },
    deleteRow(index) {
      this.isCheckItem.splice(index, 1);
      //   this.$delete(this.isCheckItem, index);
    }
  }
  //   created() {
  //     this.getProducts();
  //   }
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