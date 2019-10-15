<template>
  <div class="modal fade" tabindex="-1" role="dialog" id="productsModel">
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
                    <input type="checkbox" v-model="item.isChecked" />
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
          <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
          <button type="button" class="btn btn-primary" @click="checkitem">儲存</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  props: ["switch-props"],
  data() {
    return {
      products: []
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
    checkitem() {
      const isChecked = this.products.filter(function(item) {
        return item.isChecked == true;
      });
      this.$emit("childevent", isChecked);
      $("#productsModel").modal("hide");
    },
  },
  watch: {
    switchProps() {
      $("#productsModel").modal("show");
    }
  },
  created() {
    this.getProducts();
  }
};
</script>
