<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Brand Add</div>
	  <div class="card-body ">
	    <form @submit.prevent="formSubmitPrevent()">
	    	<div class="row">
	    		<div class="col-6">
	    			<div class="form-group mt-2" v-if="brandLogo!=null">
	    				<label for="title">Brand Logo</label>
					    <img v-lazy="brandLogo" style="height:200px;width:200px;border:1px solid green;border-radius:50%;">
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Choose Brand Logo</label>
					    <input type="file" class="form-control mt-1" ref="brand" name="fileUpload" accept="image/*"  @change="loadBrandLogo" />
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					   
	    		</div>
	    		<div class="col-6">
					  <div class="form-group mt-2">
					    <label for="title">Brand Name</label>
					    <input type="text" class="form-control mt-1" v-model="name">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Bn Name</label>
					    <input type="text" class="form-control mt-1" v-model="name_bd">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Slug">Slug</label>
					    <input type="text" class="form-control mt-1" v-model="slug">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button class="btn btn-info m-2 text-light" @click="addBrand()">
	    				<icon name="save" size="20px"/> Add</button>
	    			<button  class="btn btn-warning m-2 text-light" @click="resetForm()"><icon name="switch" size="20px"/>Reset</button>
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
			brandLogo:null,
			 errMsgFlag:false,
			 msgFlag:false,
			 msg:null,
			 errMsg:null,
			 name:null,
			 name_bd:null,
			 slug:null,
		}
	},
	beforeMount(){
		// this.getActiveCategoryList();
	},
	methods:{
		
		 loadBrandLogo(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.brandLogo = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Logo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
    	},
    	formSubmitPrevent(e){
    		// e.preventDefault();
    	},
    	async addBrand()
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
			         		formData.append("name_bd",this.name_bd);
			         		formData.append("slug",this.slug);
			         	if(this.$refs.brand.files[0]!=null)
			         		formData.append("brandLogo",this.$refs.brand.files[0]);
			         	
			         	
			        await this.$http.post("brand/add",formData,config)
			         		.then(response=>{
			         			this.errMsgFlag=response.data.errMsgFlag;
					        	this.msgFlag=response.data.msgFlag;
					        	this.msg=response.data.msg;
					        	this.errMsg=response.data.errMsg;
					        	this.errMsg=response.data.errMsgFlag;

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
    		if(this.$refs.brand.files[0]!=null && this.name!=null && this.slug!=null )
    		{
    			return true;
    		}
    		else
    		{
    			if(this.$refs.brand.files[0]==null )
    			{
    				this.errMsg="Please Choose An Logo First.";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.name==null)
    			{
    				this.errMsg="Please Enter Brand Name.";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.slug==null)
    			{
    				this.errMsg="Please Write Brand Slug";
    				this.$toaster.warning(this.errMsg);
    			}
    			
    			this.errMsgFlag=true;
    			this.msgFlag=false;
    			return false;
    		}
    	},
    	resetForm()
    	{
			this.name=null;
			this.name_bd=null;
			this.slug=null;
			this.$refs.brand.files[0]=null;
			this.brandLogo=null;
    	}
	}
}
</script>