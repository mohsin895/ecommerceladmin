<template>
    <div class="tableVue">
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Order Code</th>
                    <th>Order</th>
                    <th></th>
                    <th>Payment method</th>
                    <th>Activity</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 6" :key="index">
                    <td>
                        <div class="td-item">
                            <div class="icon-with-text">
                                <div class="icon">
                                    <img width="30"  src="@/assets/images/admin-dashboard/Vector (2).png" alt="profile-icon">
                                </div>
                                <div class="icon-text">
                                    <div> Anwar Khan</div>
                                    <div>Registered:6 Sep, 2021</div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="td-item">
                            #LYS00000017
                        </div>
                    </td>
                    <td>
                        <div class="td-item">
                            <div class="order-icon">
                                Pending
                            </div>
                            <div class="order-text">
                                1 product order
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="td-item">
                            <div class="after-order-icon">
                                Pending
                            </div>
                            <div class="after-order-text">
                                ৳ 1000
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="td-item">
                            COD
                        </div>
                    </td>
                    <td>
                        <div class="td-item">
                            <div class="activity">
                                <div>Order time</div>
                                <div>11/20/2021</div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'tablevue',
    data() {
        return {
        }
    }
}
</script>


<style scoped>
/* table css start  */
table {
  width:710px;
  max-height:341px;
  padding:0 20px;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  box-shadow: 0 1px 1px #999797, 0 -1px 1px #999797;
}
table tr{
    height:50px;
}
table th{
    padding-left:10px;
}
table td{
    padding:5px 10px;
}
table td,th {
    white-space: nowrap;
}
table td:nth-child(5){
    text-align: center;
}
table tbody tr{
    border-top:1px solid black;
}
/* table css end  */
/* table image or icon css start  */
.icon-with-text{
    display: flex;
    justify-content: center;
    grid-column-gap: 5px;
    text-align: left;
    font-size: .8rem;
}
.order-icon{
    width:50px;
    height:25px;
    font-size: 11px;
    background:#FF5C00;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color:white;
}
.after-order-icon{
    width:50px;
    height:25px;
    font-size: 11px;
    background:#792C00;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color:white;
}
/* table image or icon css end  */
</style>