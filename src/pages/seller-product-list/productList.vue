<template>
    <div class="product-list">
        <br>
        <br>
        <br>
        <div class="add-category">
            <div class="add-btn">Add New Category</div>
        </div>
        <br>
        <div class="datatables">
            <JqueryTable/>
        </div>
    </div>
</template>

<script>
import JqueryTable from '@/components/datatables.vue'
export default {
    name:'product-list',
    components:{
        JqueryTable
    },
    data() {
        return {

        }
    },
    mounted(){

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
.add-category{
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