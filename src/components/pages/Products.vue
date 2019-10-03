<template>
  <div>
      <div class="text-right addProduct mt-2">
          <button class="btn btn-outline-success mr-4">建立新產品</button>
      </div>
      <table class="table mt-2 text-center">
          <thead>
              <th>分類</th>
              <th>產品名稱</th>
              <th>原價</th>
              <th>售價</th>
              <th>是否啟用</th>
              <th>編輯</th>
          </thead>
          <tbody>
              <tr v-for="item in products" :key="item.id">
                  <td>{{item.category}}</td>
                  <td>{{item.title}}</td>
                  <td class="text-right">{{item.origin_price}}</td>
                  <td class="text-right">{{item.price}}</td>
                  <td>
                      <span v-if="item.is_enabled" class="text-success">啟用</span>
                      <span v-else>未啟用</span>
                  </td>
                  <td><button class="btn btn-outline-primary">編輯</button></td>
              </tr>
          </tbody>
      </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
        products:[],
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/products`;
      const vm = this;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.products = response.data.products;
      });
    },
  },
        created() {
            this.getProducts();
        }
};
</script>
<style lang="scss" scoped>
    .addProduct{
        margin-top:500px;
    }
</style>