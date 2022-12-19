<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Category Add</div>
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
	    			<div class="form-group mt-2" v-if="categoryImage!=null">
	    				<label for="title">Category Image</label>
					    <img v-lazy="categoryImage" style="height:250px;width:750px;border:1px solid green;border-radius:5px;">
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Choose Category Image</label>
					    <input type="file" class="form-control mt-1" ref="categoryImage" name="fileUpload" accept="image/*"  @change="loadCategoryImage"/>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Category Type</label>
					    <select class="form-control mt-1" v-model="categoryType">
					    	<option value="1">Mega Category</option>
					    	<option value="2">Sub Category</option>
					    	<option value="3">Normal</option>
					    </select>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-6">
					  <div class="form-group mt-2" v-if="categoryType==2 || categoryType==3">
					    <label for="title">Parent Category</label>
					    <slot v-if="categoryType==2">
						    <v-select :options="categoryList" :reduce="categoryList => categoryList.id" label="title" v-model="parentCategory" >
								<template v-slot:option="option">
									<slot v-if="option.look_type==1">
									{{option.title}}
								</slot>
	                          	</template>
	                     	 </v-select>
	                     </slot>
	                     <slot v-if="categoryType==3">
						    <v-select :options="categoryList" :reduce="categoryList => categoryList.id" label="title" v-model="parentCategory" >
								<template v-slot:option="option">
								<slot v-if="option.look_type==2">
									{{option.title}}
								</slot>
	                          	</template>
	                     	 </v-select>
	                     </slot>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Category Name</label>
					    <input type="text" class="form-control mt-1" v-model="categoryName">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Category Bangla Name</label>
					    <input type="text" class="form-control mt-1" v-model="bn_name">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Description">Meta Description</label>
					    <textarea class="form-control mt-1" placeholder="Meta Description" rows="4" v-model="metaDescription"></textarea>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Slug">Slug</label>
					    <input type="text" class="form-control mt-1" v-model="slug">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button  class="btn btn-info m-2 text-light" @click="addCategory()">
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
			
			 errMsgFlag:false,
			 msgFlag:false,
			 msg:null,
			 errMsg:null,
			 status:1,
			 categoryList:[],
			 categoryImage:null,
			 categoryType:null,
			 categoryName:null,
			 metaDescription:null,
			 slug:null,
			 parentCategory:null,
			 bn_name:null,
		}
	},
	beforeMount(){
		this.categoryLoad();
	},
	methods:{
		categoryLoad(){
			//alert("okay");
			
				this.$http.get("category/get/active/list")
					.then(response=>{
						this.categoryList=response.data;
						
					})
					.catch(error=>{console.dir(error)})
					.finally();
			
		},
		
		 loadCategoryImage(e){
            this.errMsgFlag=false;
            this.msgFlag=false;
            const file= e.target.files[0];
            let Extension = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
            if ( Extension == "png" || Extension == "bmp" || Extension == "jpeg" || Extension == "jpg") {
                this.categoryImage = URL.createObjectURL(file);
               // this.sliderImage=this.$refs.slider.files[0];
               
            }
            else
            {
                this.errMsg="Image only allows file types of  PNG, JPG, JPEG and BMP.";
                this.errMsgFlag=true;
                this.msgFlag=false;
                this.$toaster.warning(this.errMsg);
            }
    	},
    	formSubmitPrevent(e){
    		 // e.preventDefault();
    	},
    	addCategory()
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
			         		formData.append("categoryName",this.categoryName);
			         		formData.append("bn_name",this.bn_name);
			         		formData.append("metaDescription",this.metaDescription);
			         		formData.append("categoryType",this.categoryType);
			         		formData.append("parentCategory",this.parentCategory);
			         		formData.append("slug",this.slug);
			         		
			         	if(this.$refs.categoryImage.files[0]!=null)
			         		formData.append("categoryImage",this.$refs.categoryImage.files[0]);
			         	
			         	this.$http.post("category/add",formData,config)
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
    		if(this.$refs.categoryImage.files[0]!=null && this.categoryName!=null && this.categoryType!=null && this.slug!=null)
    		{
    			return true;
    		}
    		else{
    			if(this.$refs.categoryImage.files[0]!=null)
    			{
    				this.errMsg="Please Choose A Image For Category First";
					this.$toaster.warning(this.errMsg);
    			}
				if(this.categoryName==null)
				{
					this.errMsg="Please Enter Category Name.";
					this.$toaster.warning(this.errMsg);
				}
				if(this.categoryType==null)
				{
					this.errMsg="Please Select Category Type.";
					this.$toaster.warning(this.errMsg);
				}
				if(this.targetUrl==null)
				{
					this.errMsg="Please Enter Category Slug.";
					this.$toaster.warning(this.errMsg);
				}
				this.errMsgFlag=true;
				return false;
    		}
    		
    	},
    	resetForm()
    	{
			this.categoryType=null;
			this.categoryName=null;
			this.parentCategory=null;
			this.metaDescription=null;
			this.$refs.categoryImage.files[0]=null;
			this.categoryImage=null;
			this.slug=null;
			this.bn_name=null;
    	}
	}
}
</script>