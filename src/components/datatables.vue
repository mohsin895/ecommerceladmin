<template>
  <div>
    <table id="datatable"  class="cell-border compact stripe">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Bn Name</th>
          <th>Publish</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="loyelItem in loyelProducts" :key="loyelItem.id">
          <td>{{ loyelItem.id }}</td>
          <td>{{ loyelItem.name }}</td>
          <td>{{ loyelItem.bn_name }}</td>
          <td>
            <md-switch v-model="array" value="1"></md-switch>
          </td>
          <td>
            <div class="button-group">
              <div class="edit-btn">
                <icon name="edit" size="1rem"/>
              </div>
              <div class="view-btn">
                <icon name="eye" size="1rem"/>
              </div>
              <div class="delete-btn">
                <icon name="trash-alt" size="1rem"/>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  mounted() {
    // fetch("http://localhost/loyel-final/loyelApi/public/api/staff/union/get/active/list")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.loyelProducts = data;
    //     setTimeout(() => {
    //       $("#datatable").DataTable({
    //         lengthMenu: [
    //           [5,10, 25, 50, -1],
    //           [5,10, 25, 50, "All"],
    //         ],
    //         pageLength: 5,
    //       });
    //     });
    //   });
  },
  data: function () {
    return {
      loyelProducts: [],
      array: false,
    };
  },
};
</script>

<style scoped>
.button-group{
  display: flex;
  /* grid-column-gap:5px; */
  justify-content: space-around;
  color:rgb(107, 105, 105);
}
.button-group > :first-of-type:hover {
  color:rgb(18, 168, 13);
}
.button-group > :nth-child(2):hover {
  color:rgb(18, 168, 13);
}
.button-group > :last-child:hover {
  color:rgb(168, 13, 13);
}


 /* Switch color  */
.md-switch.md-theme-default.md-checked .md-switch-thumb{
  background: rgb(35, 197, 35) !important;
}

</style>