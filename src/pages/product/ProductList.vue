<template>
    <div class="product-list">
        <br>
        <br>
        <br>
        <div class="add-product">
            <router-link :to="{name:'ProductAdd'}" class="add-btn">Add New Product</router-link>
        </div>
        <br>
        <div class="datatables">
            <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Name</th>
                      <th scope="col">Shop</th>
                      <th scope="col">Sku</th>
                      <th scope="col">Category</th>
                      <th scope="col">Brand</th>
                     <!--  <th scope="col">Refundable</th>
                      <th scope="col">Type</th>
                      <th scope="col">Has Color</th>
                      <th scope="col">Has Size</th> -->
                      <th scope="col">Quantity</th>
                      <!-- <th scope="col">Warranty</th> -->
                      <th scope="col">Total View</th>
                      <th scope="col">Is B to B</th>
                      <th scope="col">Is B to C</th>
                      <th scope="col">Published</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                 <slot v-for="(dataInfo,index) in dataList.data">
                    <tr>
                      <th scope="row">{{++index}}</th>
                      <td>
                        <img v-lazy="dataInfo.thumbnail_img" :alt="dataInfo.name" height="70" width="70">
                      </td>
                      <td>{{dataInfo.name.substring(0,15)}}</td>
                      <td>
                        <slot v-if="dataInfo.shop_info!=null">
                          <span class="badge bg-info">{{dataInfo.shop_info.shop_name}}</span>
                        </slot>
                      </td>
                      <td>{{dataInfo.sku }}</td>
                      <td>
                          <slot v-if="dataInfo.mega_category!=null">
                            {{dataInfo.mega_category.title}}
                          </slot>
                          <slot v-if="dataInfo.sub_category!=null">
                            {{dataInfo.sub_category.title}}
                          </slot>
                          <slot v-if="dataInfo.normal_category!=null">
                            {{dataInfo.normal_category.title}}
                          </slot>
                      </td>
                      
                      <td>
                          <slot v-if="dataInfo.brand_info!=null">
                            <img :src="dataInfo.brand_info.logo" style="height:50px;width:50px; border-radius:50%; border:1px solid green;">
                            {{dataInfo.brand_info.name.substring(0,10)}}
                          </slot>
                      </td>
                      <!-- 
                      <td>
                        <span class="badge" :class="(dataInfo.refundable==1) ? 'bg-success':'bg-danger'">{{dataInfo.refundable | yesNo}}</span>
                      </td> 
                      <td>
                        <span class="badge" :class="(dataInfo.type==1) ? 'bg-primary':'bg-warning'">{{dataInfo.type | oldNew}}</span>
                      </td>
                      <td>
                        <span class="badge" :class="(dataInfo.has_color==1) ? 'bg-success':'bg-danger'">{{dataInfo.has_color | yesNo}}</span>
                      </td> 
                      <td>
                        <span class="badge" :class="(dataInfo.has_size==1) ? 'bg-success':'bg-danger'">{{dataInfo.has_size | yesNo}}</span>
                      </td> 
 -->
                      <th>
                          <span class="badge bg-info h3">{{dataInfo.quantity}}</span>
                      </th>
                      <!-- <td>
                          <span class="badge" :class="(dataInfo.warranty_type==1) ? 'bg-success':'bg-danger'">{{dataInfo.warranty_type | yesNo}}</span>
                      </td> -->
                      <th>
                        <span class="badge bg-warning h3">{{dataInfo.total_view}}</span>
                      </th>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'is_b_to_b_'+dataInfo.id" :checked="(dataInfo.is_b_to_b==1) ? 'true':false" @click="changeBtoBStatus(dataInfo.id,dataInfo.is_b_to_b)">
                          <label class="form-check-label badge" :for="'is_b_to_b_'+dataInfo.id" :class="(dataInfo.is_b_to_b==1) ? 'bg-success':'bg-danger'"> {{dataInfo.is_b_to_b | yesNo}}</label>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'is_b_to_c_'+dataInfo.id" :checked="(dataInfo.is_b_to_c==1) ? 'true':false" @click="changeBtoCStatus(dataInfo.id,dataInfo.is_b_to_c)">
                          <label class="form-check-label badge" :for="'is_b_to_c_'+dataInfo.id" :class="(dataInfo.is_b_to_c==1) ? 'bg-success':'bg-danger'"> {{dataInfo.is_b_to_c | yesNo}}</label>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <slot v-if="dataInfo.published==1">
                              <span class="badge" :class="(dataInfo.published==1) ? 'bg-success':'bg-danger'">{{dataInfo.published | yesNo}}</span>
                          </slot>
                          <slot v-else>
                            <input class="form-check-input" type="checkbox" role="switch" :id="'published_'+dataInfo.id" :checked="(dataInfo.published==1) ? 'true':false" @click="changeDataStatus(dataInfo.id,dataInfo.published)" :disabled="(dataInfo.published==1)? 'true':'false'">
                            <label class="form-check-label badge" :for="'published_'+dataInfo.id" :class="(dataInfo.published==1) ? 'bg-success':'bg-danger'"> {{dataInfo.published | yesNo}}</label>
                          </slot>
                        </div>
                      </td>
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'status_'+dataInfo.id" :checked="(dataInfo.status==1) ? 'true':false" @click="changeDataStatus(dataInfo.id,dataInfo.status)">
                          <label class="form-check-label badge" :for="'status_'+dataInfo.id" :class="(dataInfo.status==1) ? 'bg-success':'bg-danger'"> {{dataInfo.status | statusLabel}}</label>
                        </div>
                      </td>
                      <td>
                         <router-link :to="{name:'ProductEdit',params:{dataId:dataInfo.id}}" class="btn btn-warning btn-sm text-light">
                          <icon name="edit" size="1.2rem"/>
                        </router-link>
                        <a href="#" class="btn btn-info btn-sm text-light">
                          <icon name="eye" size="1rem"/>
                        </a>
                        <a href="#" class="btn btn-danger btn-sm text-light">
                          <icon name="trash-alt" size="1rem"/>
                        </a>
                     </td>
                    </tr>
                 </slot>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="14" class="text-right">
                          <paginate
                          :page-count="lastPage"
                          :click-handler="dataByPaginate"
                          :prev-text="'<'"
                          :next-text="'>'"
                          :container-class="'pagination justify-content-end'"
                          :page-class="'page-item'"
                          :page-link-class="'page-link'"
                          :prev-class="'page-item'"
                          :prev-link-class="'page-link'"
                          :next-class="'page-item'"
                          :next-link-class="'page-link'"
                          :first-last-button="true"
                          :first-button-text="'<<'"
                          :last-button-text="'>>'"
                         
                          >

                         <span slot="prevContent">Changed previous button</span>
                          <span slot="nextContent">Changed next button</span>
                          <span slot="breakViewContent">
                            <svg width="16" height="4" viewBox="0 0 16 4">
                              <circle fill="#999999" cx="2" cy="2" r="2" />
                              <circle fill="#999999" cx="8" cy="2" r="2" />
                              <circle fill="#999999" cx="14" cy="2" r="2" />
                            </svg>
                          </span>
                        </paginate>
                      </th>
                    </tr>
                  </tfoot>
                </table>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            dataList:[],
            msgFlag:false,
            errMsgFlag:false,
            msg:null,
            errMsg:null,
            dataUrl:'/product/get/list',
            dataUrlParam:{},
            pageNo:1,
            numOfData:100,
            dataIds:[],
            status:null,
            lastPage:1,   
        }
    },
    mounted(){
        this.getDataList();
    },
    methods:{
       
        async changeDataStatus(dataId,status){
            let token=window.localStorage.getItem("token");
            let formData=new FormData();
            formData.append("dataId",dataId);
            if(status==1)
                formData.append("status",2);
            if(status==2)
                formData.append("status",1);
            let config = {
                   headers: {
                      'Authorization': 'Bearer '+token
                  }   
              };

            await this.$http.post('/product/change/status',formData,config)
                 .then(response=>{
                    this.errMsgFlag=response.data.errMsgFlag;
                    this.msgFlag=response.data.msgFlag;
                    this.msg=response.data.msg;
                    this.errMsg=response.data.errMsg;
                    if(this.errMsgFlag==true)
                        this.$toaster.warning(this.errMsg);
                    if(this.msgFlag==true)
                        this.$toaster.success(this.msg);
                 })
                 .catch(error=>{console.dir(error)})
                 .finally();
            this.getDataList();
                 
        },
        resetSearchForm(){
            this.phone=null;
            this.email=null;
            this.name=null;
        },
        async getDataList(){
             let token=window.localStorage.getItem("token");
            let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
            let formData=new FormData();
                formData.append("page",this.pageNo);
                formData.append("numOfData",this.numOfData);
            
            await this.$http.post(this.dataUrl,formData,config)
             .then(response=>{
                this.dataList=response.data;
                this.lastPage=this.dataList.last_page;
             })
             .catch(error=>{console.dir(error)})
             .finally();
        },
        markData(id)
        {
            if($("#data_row_"+id).is(':checked'))
            {
                this.dataIds.push(id);
                this.markCounter=this.markCounter+1;
            }
            else
            {
                this.unMarkData(id);
            }   
        },
        unMarkData(id) {
            $("#selectAll").prop("checked", false);
            $("#selectAlls").prop("checked", false);
            for (var i = this.dataIds.length; i--;) {
            if (this.dataIds[i] === id) {
                    this.dataIds.splice(i, 1);
                    this.markCounter=this.markCounter-1;
                }
            }
        },
        
        markAllData()
        {
            
            if($("#selectAll").is(':checked') || $("#selectAlls").is(":checked")){
                this.markCounter=0;
                $("#selectAll").prop("checked", true);
                $("#selectAlls").prop("checked", true);
                $("#unSelectAll").prop("checked", false);
                this.dataList.data.forEach(dataInfo=>{
                    $("#data_row_"+dataInfo.id).prop("checked", true);
                    this.dataIds.push(dataInfo.id);
                    this.markCounter=this.markCounter+1;
                });
            }
            else
            {
                this.unMarkAllData();
            }   
        },
        unMarkAllData() {
            this.markCounter=0;
            $("#selectAll").prop("checked", false);
            $("#selectAlls").prop("checked", false);
            for (var i = this.dataIds.length; i--;) {
                $("#data_row_"+this.dataIds[i]).prop("checked", false);
                this.dataIds.splice(i, 1);
            }
        },
        dataByPaginate(pageIndex){
            this.pageNo=pageIndex;
            this.getDataList();
        },
    }
}
</script>
<style scoped>
.datatables{
    width: 90%;
    padding:10px;
    border-radius:5px;
    margin:auto;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.1),-1px -1px 1px rgba(0,0,0,0.1);
}
.add-product{
    padding:0 55px 0 0;
}
.add-btn{
    margin-left:auto;
    width:140px;
    height:35px;
    border-radius:5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    cursor:pointer;
    background:#00A3FF;
    transition:.1s;
}
</style>