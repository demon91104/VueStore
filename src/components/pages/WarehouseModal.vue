<template>
  <div>
    <div class="modal" tabindex="-1" role="dialog" id="warehouseModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">倉庫</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th>選擇</th>
                  <th>地區</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in areas" :key="item.id">
                  <td>
                    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" />
                  </td>
                  <td>{{item.title}}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="checkitem">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  data() {
    return {
      areas: []
    };
  },
  methods: {
    getarea() {
      const api = `${process.env.APIPATH}/api/area/admin/products`;
      const vm = this;
      //   vm.isLoading = true;
      this.$http.get(api).then(response => {
        console.log(response.data);
        vm.areas = response.data.products;
      });
    },
    modalOpen() {
      $("#warehouseModal").modal("show");
    },
    checkitem() {
        const checked = this.areas.filter(function(item){
            return item.checked == true ;
        });
        this.$emit("childevent",checked);
        $('#warehouseModal').modal("hide")
    }
  },
  created() {
    this.getarea();
  }
};
</script>