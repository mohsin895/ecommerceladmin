<template>
  <div class="card border-secondary  mb-3" >
    <div class="card-header h4">Unit Add</div>
    <div class="card-body ">
      <form @submit.prevent="formSubmitPrevent()">
        <div class="row">
          <div class="col-12" v-if="errMsgFlag">
            <div class="alert alert-danger">{{errMsg}}</div>
          </div>
          <div class="col-12" v-if="msgFlag">
            <div class="alert alert-success">{{msg}}</div>
          </div>
          <div class="col-6">
            <div class="form-group mt-2">
              <label for="title">Unit Label</label>
              <input type="text" class="form-control mt-1" v-model="unitLabel">
              <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            </div>
          </div>
          <div class="col-12 mt-2 d-flex flex-row-reverse">
            
            <button class="btn btn-info m-2 text-light" @click="addUnit()">
              <icon name="save" Unit="20px"/> Add</button>
            <button class="btn btn-warning m-2 text-light" @click="resetUnitForm()"><icon name="switch" Unit="20px"/>Reset</button>
          </div>
        </div>
    </form>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
      errMsg:null,
      msg:null,
      errMsgFlag:false,
      msgFlag:false,
      unitLabel:null
    }
  },
  beforeMount(){

  },
  methods:{
    
    formSubmitPrevent(e){
         // e.preventDefault();
      },
      
    addUnit(){
      if(this.unitFormValidation()){
        let token=window.localStorage.getItem("token");
         let config = {
                     headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Bearer '+token
                    }   
                }; 
        let formData=new FormData();
        formData.append("unitLabel",this.unitLabel);
        this.$http.post("unit/add",formData,config)
         .then(response=>{
          this.msgFlag=response.data.msgFlag;
              this.msg=response.data.msg;
              this.errMsg=response.data.errMsg;
              this.errMsgFlag=response.data.errMsgFlag;
        
          if(this.errMsgFlag==true)
            this.$toaster.warning(this.errMsg);
              if(this.msgFlag==true){
                this.$toaster.success(this.msg);
                this.resetUnitForm();
              }
         })
         .catch(error=>{console.dir()})
         .finally();
      }
    },
    
    unitFormValidation(){
      if(this.unitLabel!=null ){
        return true;
      }
      else{
        if(this.unitLabel==null){
          this.errMsg="Please Write Unit Label.";
          this.$toaster.warning(this.errMsg);
        }
        this.errMsgFlag=true;
        return false;
      }
    },
    
    resetUnitForm(){
      this.unitLabel=null;
    },
  }
}
</script>