<template>
    <div class="product-list">
        <br>
        <br>
        <br>
        <div class="add-unit">
            <router-link :to="{name:'UnitAdd'}" class="add-btn">Add New Unit</router-link>
        </div>
        <br>
        <div class="datatables">
            <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Unit Label</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                 <slot v-for="(dataInfo,index) in dataList.data">
                    <tr>
                      <th scope="row">{{++index}}</th>
                      <td>
                        <span class="badge bg-success h6">{{dataInfo.label}}</span>
                      </td>
                      
                      <td>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" role="switch" :id="'status_'+dataInfo.id" :checked="(dataInfo.status==1) ? 'true':false" @click="changeDataStatus(dataInfo.id,dataInfo.status)">
                          <label class="form-check-label" :for="'status_'+dataInfo.id" :class="(dataInfo.status==1) ? 'text-success':'text-danger'"> {{dataInfo.status | statusLabel}}</label>
                        </div>
                      </td>
                      <td>
			                   <router-link :to="{name:'UnitEdit',params:{dataId:dataInfo.id}}" class="btn btn-warning btn-sm text-light">
              							<icon name="edit" unit="1.2rem"/>
              						</router-link>
              						<a href="#" class="btn btn-info btn-sm text-light">
              							<icon name="eye" unit="1rem"/>
              						</a>
              						<a href="#" class="btn btn-danger btn-sm text-light">
              							<icon name="trash-alt" unit="1rem"/>
              				    </a>
              			   </td>
                    </tr>
                 </slot>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colspan="4" class="text-right">
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
            dataUrl:'/unit/get/list',
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

            await this.$http.post('/unit/change/status',formData,config)
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
.add-unit{
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
    unit:white;
    cursor:pointer;
    background:#00A3FF;
    transition:.1s;
}
</style>