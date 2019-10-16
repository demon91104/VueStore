<template>
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <p class="float-left">庫存盤點</p>
      </div>
      <div class="card-body">
          <div class="row">
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="inventoryDate" class="col-sm-3 col-form-label">盤點日期:</label>
                        <div class="col-sm-9">
                            <input type="date" class="form-control" id="inventoryDate">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="warehouse" class="col-sm-3 col-form-label">倉庫</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="warehouse" @dblclick="warehouseModalOpen">
                        </div>
                    </div>
                </div>
        </div>
        <div class="row">
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="inventoryNumber" class="col-sm-3 col-form-label">盤點單號:</label>
                        <div class="col-sm-9">
                            <input type="text" readonly="readonly" class="form-control" id="inventoryNumber">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group row">
                        <label for="remarks" class="col-sm-3 col-form-label">備註</label>
                        {{isCheckItem[0]}}
                        <div class="col-sm-9">
                            <input type="password" class="form-control" id="remarks">
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
    <WarehouseModal ref="warehouseModal" @childevent="watchChildEvent"></WarehouseModal>
  </div>
</template>
<script>
import $ from "jquery";
import WarehouseModal from "./WarehouseModal";
export default {
    components: {
        WarehouseModal
    },
    data() {
        return {
            isCheckItem:[],
        }
    },
    methods: {
        warehouseModalOpen(){
            // console.log("123")
            this.$refs.warehouseModal.modalOpen();
        },
        watchChildEvent(item) {
            console.log(item)
        },
    },
};
</script>

