<template>
    <div class="dashboard">
        <div class="loyel-admin-container">
            <div class="dashboard-details-info">
                <b-row cols="1" cols-sm="2" cols-md="3" cols-lg="4" cols-xl="5">
                  <!--  <pre>{{dataInfo}}</pre> -->
                   <b-col>
                        <InfoCard
                        itemName="Total Brand"
                        :item="dataInfo.totalBrand"
                        color="linear-gradient(90deg, #19BEB4 0%, #8E9F9E 187.86%);"
                        image="1008106 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Categories"
                        :item="dataInfo.totalCategory"
                        color="linear-gradient(90deg, #E828E1 0%, #FFFFFF 187.86%);"
                        image="layer 1.png"
                        />
                    </b-col>

                    <b-col>
                        <InfoCard
                        itemName="Total Seller"
                        :item="dataInfo.totalSeller"
                        color="linear-gradient(90deg, #A8D42D 0%, #A5A6A0 187.86%);"
                        image="48755-5-earnings-png-download-free 1.png"
                        />
                    </b-col>

                    <b-col>
                        <InfoCard
                        itemName="Total Product"
                        :item="dataInfo.totalProduct"
                        color="linear-gradient(90deg, #D1963E 0%, rgba(170, 136, 17, 0) 187.86%);"
                        image="shopping-icon-png-24.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Customers"
                        :item="dataInfo.totalCustomer"
                        color="linear-gradient(90deg, #DB1515 0%, #FFD0D0 187.86%);"
                        image="1200px-Font_Awesome_5_solid_users 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Order"
                        :item="dataInfo.totalOrder"
                        color="linear-gradient(90deg, #1D48DF 0%, #D2DEFF 187.86%);"
                        image="126083 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Pending Order"
                        :item="dataInfo.totalPendingOrder"
                        color="linear-gradient(90deg, #807302 0%, rgba(216, 177, 40, 0) 187.86%);"
                        image="4987342 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Confirm Order"
                        :item="dataInfo.totalConfirmOrder"
                        color="linear-gradient(90deg, #AE0743 0%, #FFFFFF 187.86%);"
                        image="Responding-Icon 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Cancel Order"
                        :item="dataInfo.totalCancelOrder"
                        color="linear-gradient(90deg, #FF814A 0%, #FFFFFF 187.86%);"
                        image="256-2569066_cancel-order-comments-cancel-order-icon 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Completed Order"
                        :item="dataInfo.totalCancelOrder"
                        color="linear-gradient(90deg, #004A07 0%, rgba(94, 155, 104, 0) 187.86%);"
                        image="task-done-outline 1.png"
                        />
                    </b-col>
                    

                    <b-col>
                        <InfoCard
                        itemName="Total Sales"
                        :item="dataInfo.totalSales"
                        color="linear-gradient(90deg, #02A212 0%, #EFFFF1 187.86%);"
                        image="total-sales-volume 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Delivery Charge"
                        :item="dataInfo.totalDeliveryCharge"
                        color="linear-gradient(90deg, #004A07 0%, rgba(94, 155, 104, 0) 187.86%);"
                        image="task-done-outline 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Commission"
                        :item="0"
                        color="linear-gradient(90deg, #830101 0%, rgba(167, 5, 5, 0) 187.86%);"
                        image="69-691600_money-comments-dollars-icon-png 1.png"
                        />
                    </b-col>
                    <b-col>
                        <InfoCard
                        itemName="Total Revenue"
                        :item="0"
                        color="linear-gradient(90deg, #045061 0%, rgba(46, 148, 170, 0) 187.86%);"
                        image="revenue-icon-png-23 1.png"
                        />
                    </b-col>
                    
                    
                </b-row>
            </div>
            <br>
            <div class="middle-table">
                <b-row class="middle-row">
                    <b-col md="8" class="responsive-table">
                        <TableView/>
                    </b-col>
                    <b-col md="4">
                        Coming ....
                    </b-col>
                </b-row>
            </div>
            <div class="dashboard-final-part">
                <b-row>
                    <b-col>
                        
                    </b-col>
                </b-row>
            </div>
        </div>
    </div>
</template>


<script>
import InfoCard from '@/components/dashboard/info-card'
import TableView from '@/components/dashboard/table'
export default {
    name:'dashboard',
    components:{
        InfoCard,
        TableView
    },
    data() {
        return {
            dataInfo:[],
        }
    },
    beforeMount(){
        this.getCardInfo();
    },
    methods:{
        async getCardInfo(){
            let token=window.localStorage.getItem("token");
             let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              }; 
            await this.$http.get('dashboard/get/card/info',config)
                   .then(response=>{
                        this.dataInfo=response.data;
                   })
                   .catch(error=>{console.dir(error)})
                   .finally();
        }
    }
}
</script>

<style scoped>
.middle-row > *{
    padding:10px;
}
.responsive-table{
    overflow-x:auto;
}
</style>