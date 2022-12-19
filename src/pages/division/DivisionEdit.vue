<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Division Add</div>
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
					    <label for="title">Division Name</label>
					    <input type="text" class="form-control mt-1"  v-model="name">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Slug">Bn Name</label>
					    <input type="text" class="form-control mt-1" v-model="bn_name">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-6">
	    			
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button class="btn btn-info m-2 text-light" @click="addDivision()">
	    				<icon name="save" size="20px"/> Add</button>
	    			<button class="btn btn-warning m-2 text-light" @click="resetForm()">
	    				<icon name="switch" size="20px"/>Reset</button>
	    		</div>
	    	</div>
		</form>
	  </div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			 errMsgFlag:false,
			 msgFlag:false,
			 msg:null,
			 errMsg:null,
			 name:null,
			 bn_name:null,
		}
	},
	beforeMount(){
	},
	methods:{
		
    	formSubmitPrevent(e){
    		 // e.preventDefault();
    	},
    	addDivision()
    	{
    		if(this.formValidation())
    		{
    			this.errMsgFlag=false;
		    		this.msgFlag=false;
		    		let token=window.localStorage.getItem("token");
					 let config = {
		                   headers: {
		                      'Content-Type': 'multipart/form-data',
		                      'Authorization': 'Bearer '+token
		                  }   
		              }; 
			         	let formData=new FormData();
			         		formData.append("name",this.name);
			         		formData.append("bn_name",this.bn_name);
			         	
			         	this.$http.post("division/add",formData,config)
			         		.then(response=>{
			         			this.errMsgFlag=response.data.errMsgFlag;
					        	this.msgFlag=response.data.msgFlag;
					        	this.msg=response.data.msg;
					        	this.errMsg=response.data.errMsg;
					        	if(this.errMsgFlag==true)
					        		this.$toaster.warning(this.errMsg);
					        	if(this.msgFlag==true){
					        		this.$toaster.success(this.msg);
					        		this.resetForm();
					        	}
			         		})
			         		.catch(error=>{})
			         		.finally();
    		}
    	},
    	formValidation()
    	{
    		if(this.name!=null && this.bn_name!=null )
    		{
    			return true;
    		}
    		else{
    			
				if(this.name==null)
				{
					this.errMsg="Please Enter Division Name.";
					this.$toaster.warning(this.errMsg);
				}
				if(this.bn_name==null)
				{
					this.errMsg="Please Enter Division Bangla Name.";
					this.$toaster.warning(this.errMsg);
				}
				
				this.errMsgFlag=true;
				return false;
    		}
    		
    	},
    	resetForm()
    	{
			this.name=null;
			this.bn_name=null;
    	}
	}
}
</script>