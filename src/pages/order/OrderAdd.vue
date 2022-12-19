<template>
	<div class="card border-secondary  mb-3" >
	  <div class="card-header h4">Banner Add</div>
	  <div class="card-body ">
	    <form>
	    	<div class="row">
	    		<div class="col-6">
	    			<div class="form-group mt-2">
	    				<label for="title">Banner Image</label>
					    <img src="https://picsum.photos/750/250" style="height:250px;width:750px;border:1px solid green;border-radius:5px;">
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Choose Banner</label>
					    <input type="file" class="form-control mt-1" id="title" aria-describedby="emailHelp">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-6">
	    			<div class="form-group mt-2">
					    <label for="title">Category</label>
					    <select class="form-control mt-1">
					    	<option value="">--Select A Category--</option>
					    	<option value="">Category 1</option>
					    	<option value="">Category 2</option>
					    	<option value="">Category 3</option>
					    	<option value="">Category 4</option>
					    </select>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="title">Title</label>
					    <input type="text" class="form-control mt-1" id="title" aria-describedby="emailHelp">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Description">Description</label>
					    <textarea class="form-control mt-1" placeholder="Banner Description" rows="4"></textarea>
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
					  <div class="form-group mt-2">
					    <label for="Slug">Slug</label>
					    <input type="text" class="form-control mt-1" id="Slug" aria-describedby="emailHelp">
					    <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
					  </div>
	    		</div>
	    		<div class="col-12 mt-2 d-flex flex-row-reverse">
	    			
	    			<button type="submit" class="btn btn-info m-2 text-light">
	    				<icon name="save" size="20px"/> Add</button>
	    			<button type="submit" class="btn btn-warning m-2 text-light"><icon name="switch" size="20px"/>Reset</button>
	    		</div>
	    	</div>
		</form>
	  </div>
	</div>
</template>