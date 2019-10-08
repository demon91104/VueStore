<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <p class="float-left font-weight-bold">庫存調整</p>
        <div class="float-right">
          <button class="btn btn-primary btn-icon btn-round" id="submitTable" type="submit">
            <i class="fas fa-check"></i>
          </button>
          <button class="btn btn-danger btn-icon btn-round">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <form>
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
          </form>
        </div>
      </div>
    </div>
    <div class="card mt-5">
      <div class="card-header">
        <p class="float-left font-weight-bold">庫存調整 2</p>
        <div class="float-right">
          <button
            class="btn btn-primary btn-icon btn-round"
            id="submitTable"
            type="submit"
            data-toggle="modal"
            data-target="#products"
          >
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <form>
          <table class="table text-center">
            <thead>
              <tr>
                <th>刪除</th>
                <th>商品編號</th>
                <th>商品名稱</th>
                <th>數量</th>
                <th>備註</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in productsSet" :key="item.id">
                <td>
                  <button class="btn btn-danger">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
                <td>{{item.price}}</td>
                <td>{{item.category}}</td>
                <td>{{item.unit}}</td>
                <td>{{item.content}}</td>
              </tr>
            </tbody>
          </table>
          <div class="modal fade" tabindex="-1" role="dialog" id="products">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <table class="table text-center">
                    <thead>
                      <tr>
                        <th>勾選</th>
                        <th>類別編號</th>
                        <th>類別名稱</th>
                        <th>商品編號</th>
                        <th>商品名稱</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in products" :key="item.id">
                        <td>
                          <label class="form-check-label">
                            <input type="checkbox" class="" />
                          </label>
                        </td>
                        <td>{{item.origin_price}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.category}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      productsSet: []
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.isLoading = false;
        vm.products = response.data.products;
      });
    },
    openModal() {}
  },
  created() {
    this.getProducts();
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