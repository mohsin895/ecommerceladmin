<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Banner Add</div>
	  <div class="card-body ">
	    <form  @submit.prevent="formSubmitPrevent()">
	    	<div class="row">
	    		<div class="col-12" v-if="errMsgFlag">
	    			<div class="alert alert-danger">{{errMsg}}</div>
	    		</div>
	    		<div class="col-12" v-if="msgFlag">
	    			<div class="alert alert-success">{{msg}}</div>
	    		</div>
	    		<div class="col-6">
	    			<div class="form-group mt-2" v-if="bannerImage!=null">
	    				<label for="title">Banner Image</label>
					    <img v-lazy="bannerImage" style="height:250px;width:750px;border:1px solid green;border-radius:5px;">
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Choose Banner</label>
					    <input type="file" class="form-control mt-1"  ref="banner" name="fileUpload" accept="image/*"  @change="loadBanner"/>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-6">
	    			<div class="form-group mt-2">
					    <label for="title">Category</label>
					    <v-select :options="categoryList" :reduce="categoryList => categoryList.id" label="title" v-model="category" >
							<template v-slot:option="option">
								<slot>{{option.title}}</slot>
                          	</template>
                     	 </v-select>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Title</label>
					    <input type="text" class="form-control mt-1" v-model="title">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Description">Description</label>
					    <textarea class="form-control mt-1" placeholder="Banner Description" rows="4" v-model="description"></textarea>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Slug">Slug</label>
					    <input type="text" class="form-control mt-1" v-model="slug">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button class="btn btn-info m-2 text-light" @click="updateBanner()">
	    				<icon name="save" size="20px"/> Add</button>
	    			<button class="btn btn-warning m-2 text-light" @click="resetForm()"><icon name="switch" size="20px"/>Reset</button>
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
			
			bannerImage:null,
			 title:null,
			 description:null,
			 position:0,
			 errMsgFlag:false,
			 msgFlag:false,
			 msg:null,
			 errMsg:null,
			 status:null,
			 errMsg:null,
			 msg:null,
			 urlType:2,
			 slug:null,
			 bannerType:2,
			 categoryList:[],
			 category:null,
			 dataId:this.$route.params.dataId,
		}
	},
	beforeMount(){
		this.getActiveCategoryList();
		this.loadDataInfo();
	},
	methods:{
		async loadDataInfo(){
			let token=window.localStorage.getItem("token");
            let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };

			await this.$http.get('banner/get/info?dataId='+this.dataId,config)
			   .then(response=>{
			   		if(response.data.msgFlag==true){
			   			let dataInfo=response.data.dataInfo;
			   			this.title=dataInfo.title;
			   			this.description=dataInfo.description;
			   			this.category=dataInfo.category_id;
			   			this.slug=dataInfo.slug;
			   			this.bannerImage=dataInfo.base_url+dataInfo.banner_url;
			   		}
			   })
			   .catch(error=>{console.dir(error)})
			   .finally();
		},
		async getActiveCategoryList(){
			let token=window.localStorage.getItem("token");
            let config = {
                       headers: {
                          'Authorization': 'Bearer '+token
                      }   
                  };
            
            await this.$http.get('category/get/active/list',config)
             .then(response=>{
             	this.categoryList=response.data;
             })
             .catch(error=>{console.dir(error)})
             .finally();
		},
		 loadBanner(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg" || Extension=='gif') {
                this.bannerImage = URL.createObjectURL(file);
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
    	async updateBanner()
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
			         		formData.append("dataId",this.dataId);
			         		formData.append("title",this.title);
			         		formData.append("description",this.description);
			         		formData.append("status",this.status);
			         		formData.append("slug",this.slug);
			         		formData.append("category",this.category);
			         	if(this.$refs.banner.files[0]!=null)
			         		formData.append("banner",this.$refs.banner.files[0]);
			         	
			         	
			        await this.$http.post("banner/update",formData,config)
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
    		if(this.title!=null && this.description!=null && this.slug!=null && this.category!=null )
    		{
    			return true;
    		}
    		else
    		{
    			
    			if(this.title==null)
    			{
    				this.errMsg="Please Enter Banner Title";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.description==null)
    			{
    				this.errMsg="Please Write Banner Description";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.slug==null)
    			{
    				this.errMsg="Please Write Slug";
    				this.$toaster.warning(this.errMsg);
    			}
    			if(this.category==null)
    			{
    				this.errMsg="Please Select A Category";
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
			this.category=null;
			this.status=null;
			this.slug=null;
			this.$refs.banner.files[0]=null;
			this.bannerImage=null;
    	}
	}
}
</script>