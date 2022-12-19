<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Seller Add</div>
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
	    			<div class="form-group mt-2" v-if="photo">
	    				<label for="title">Seller Photo</label>
					    <img v-lazy="photo" style="height:150px;width:150px;border:1px solid green;border-radius:50%;">
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Choose Seller Photo</label>
					    <input type="file" class="form-control mt-1" ref="photo" name="fileUpload" accept="image/*"  @change="loadPhoto">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-6">
	    			
					  <div class="form-group mt-2">
					    <label for="title">Name</label>
					    <input type="text" class="form-control mt-1" v-model="name">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Phone</label>
					    <input type="text" class="form-control mt-1" v-model="phone">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Email</label>
					    <input type="email" class="form-control mt-1" v-model="email">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Date Of Birth</label>
					    <input type="date" class="form-control mt-1" v-model="dob">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button class="btn btn-info m-2 text-light" @click="addSeller()">
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
			 phone:null,
			 email:null,
			 dob:null,
			 photo:null,
		}
	},
	beforeMount(){
	},
	methods:{
		 loadPhoto(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg") {
                this.photo = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
    	},
    	formSubmitPrevent(e){
    		 // e.preventDefault();
    	},
    	addSeller()
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
			         		formData.append("phone",this.phone);
			         		formData.append("email",this.email);
			         		formData.append("dob",this.dob);
			         		
			         	if(this.$refs.photo.files[0]!=null)
			         		formData.append("photo",this.$refs.photo.files[0]);
			         	
			         	this.$http.post("seller/add",formData,config)
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
    		if( this.name!=null && this.phone!=null )
    		{
    			return true;
    		}
    		else{
    			
				if(this.name==null)
				{
					this.errMsg="Please Enter Seller Name.";
					this.$toaster.warning(this.errMsg);
				}
				if(this.phone==null)
				{
					this.errMsg="Please Enter Seller Phone Number.";
					this.$toaster.warning(this.errMsg);
				}
				
				this.errMsgFlag=true;
				return false;
    		}
    		
    	},
    	resetForm()
    	{
			this.name=null;
			this.phone=null;
			this.email=null;
			this.dob=null;
			this.photo=null;
			this.$refs.photo.files[0]=null;
    	}
	}
}
</script>