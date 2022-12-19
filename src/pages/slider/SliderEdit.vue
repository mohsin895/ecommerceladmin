<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Slider Add</div>
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
	    			<div class="form-group mt-2" v-if="sliderImage!=null">
	    				<label for="title">Slider Image</label>
					    <img v-lazy="sliderImage" style="height:300px;width:750px;border:1px solid green;border-radius:5px;">
					  </div>
					  
	    		</div>
	    		<div class="col-6">
	    			<div class="form-group mt-2">
					    <label for="title">Choose Slider</label>
					    <input type="file" class="form-control mt-1" ref="sliderImage" name="fileUpload" accept="image/*"  @change="loadSliderImage"/>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Title</label>
					    <input type="text" class="form-control mt-1" v-model="title">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Description">Description</label>
					    <textarea class="form-control mt-1" placeholder="Slider Description" rows="4" v-model="description"></textarea>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Slug">Target Url</label>
					    <input type="text" class="form-control mt-1" v-model="targetUrl">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button class="btn btn-info m-2 text-light" @click="AddSlider">
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
			
			sliderImage:null,
			 title:null,
			 description:null,
			 errMsgFlag:false,
			 msgFlag:false,
			 msg:null,
			 errMsg:null,
			 targetUrl:null,
		}
	},
	beforeMount(){
	},
	methods:{
		
		 loadSliderImage(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.sliderImage = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Photo only allows file types of  PNG, JPG, JPEG , GIF and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
    	},
    	formSubmitPrevent(e){
    		// e.preventDefault();
    	},
    	async AddSlider()
    	{
    		if(this.formValidation())
    		{
    			this.errMsgFlag=false;
		    		this.msgFlag=false;
					 let config = {
		                   headers: {
		                      'Content-Type': 'multipart/form-data'
		                  }   
		              }; 
			         	let formData=new FormData();
			         		formData.append("title",this.title);
			         		formData.append("description",this.description);
			         		formData.append("targetUrl",this.targetUrl);
			         	if(this.$refs.sliderImage.files[0]!=null)
			         		formData.append("slider",this.$refs.sliderImage.files[0]);
			         	
			         	
			        await this.$http.post("slider/add",formData,config)
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
    		if(this.$refs.sliderImage.files[0]!=null && this.title!=null && this.description!=null && this.targetUrl!=null  )
    		{
    			return true;
    		}
    		else
    		{
    			if(this.$refs.sliderImage.files[0]==null )
    			{
    				this.errMsg="Please Choose A Slider Image First.";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.title==null)
    			{
    				this.errMsg="Please Enter Slider Title";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.description==null)
    			{
    				this.errMsg="Please Write Slider Description";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.targetUrl==null)
    			{
    				this.errMsg="Please Write Target Url.";
    				this.$toaster.warning(this.errMsg);
    			}
    			this.errMsgFlag=true;
    			this.msgFlag=false;
    			return false;
    		}
    	},
    	resetForm()
    	{
			this.title=null;
			this.description=null;
			this.targetUrl=null;
			this.$refs.sliderImage.files[0]=null;
			this.sliderImage=null;
    	}
	}
}
</script>