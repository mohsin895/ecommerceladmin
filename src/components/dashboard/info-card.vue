<template>
    <div class="info-card">
        <div class="card-body" :style="'background:'+color">
            <div class="item-count" :style="{ backgroundImage: `url(${require('@/assets/images/admin-dashboard/'+ image)})` }">
                <div class="num">{{item}}</div>
                <div class="total">
                    {{itemName}}
                </div>
            </div>
            <div class="more-info">
                <div class="more-info-btn pointer">
                    More info
                    <icon name="arrow-circle-right" size=".8rem"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'info-card',
    props: {
        itemName:String,
        item:Number,
        color:String,
        image:String
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.card-body{
    width:175px;
    height:93px;
    border-radius: 10px;
    margin:10px 0px;
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    padding:15px 15px 5px 15px;
}
.item-count{
    height: 70%;
    color:white;
    background-size: 34px 30px;
    background-repeat: no-repeat;
    background-position: right;
}
.num{
    font-weight:bold;
    font-size: 1.1rem;
}
.more-info{
    height:30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
}
.more-info-btn{
    width:80.77px;
    height:17px;
    border-radius: 15px;
    font-size:.7rem;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column-gap:4px;
}
</style>