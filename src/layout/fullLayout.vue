<template>
    <div class="layout">
        <md-app>
            <md-app-toolbar class="" md-elevation="0">
                <!-- <md-button class="md-icon-button" @click="toggleMenu();positionUpDown()">
                    <icon name="bars" size="23px"/>
                </md-button> -->
                <div class="nav-one">
                    <div class="go-home pointer">
                        <img src="@/assets/icons/1200px-Globe_icon 1.png" alt="">
                        <span> Go to Home Page</span>
                    </div>
                    <span class="md-title">
                        <div class="icon">
                            <icon name="bell" class="bell-icon" size="23px"/>
                        </div>
                        <div class="profile">
                            <icon name="profile" class="profile-icon" size="23px"/>
                            <span> Anwar Khan</span>
                        </div>
                    </span>                    
                </div>
                <div class="nav-two">
                    <div ref="menuBtn" class="menu-btn pointer" @click="toggleMenu();positionUpDown()">
                        <icon name="bars" size="23px"/>
                    </div>
                </div>
            </md-app-toolbar>

            <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
                <md-toolbar class="md-transparent" md-elevation="0">
                    <span>
                        <img src="@/assets/logo/logo.png" alt="">
                    </span>
                </md-toolbar>

                <md-list>
                    <router-link to="/">
                        <md-list-item class="list-body">
                                <icon name="tachometer-alt" size="23px"/>
                                <span class="md-list-item-text">
                                    <router-link :to="{name:'layout'}">Dashboard</router-link>
                                    <!-- <span style="margin-left:90px;font-weight:bold;">
                                        &#8250;
                                    </span> -->
                                </span>
                        </md-list-item>
                    </router-link>

                    <router-link to="/">
                        <md-list-item class="list-body">
                                <icon name="tachometer-alt" size="23px"/>
                                <span class="md-list-item-text">
                                    <router-link :to="{name:'SampleList'}">Sample List</router-link>
                                    <!-- <span style="margin-left:90px;font-weight:bold;">
                                        &#8250;
                                    </span> -->
                                </span>
                        </md-list-item>
                    </router-link>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="file-alt" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Category</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'CategoryAdd'}">Category Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'Categorylist'}">Category List</router-link>
                                </li>
                                
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="file-alt" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Banner</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'BannerAdd'}">Banner Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'BannerList'}">Banner List</router-link>
                                </li>
                                
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="file-alt" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Slider</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'SliderAdd'}">Slider Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'SliderList'}">Slider List</router-link>
                                </li>
                                
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="file-alt" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Brand</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'BrandAdd'}">Brand Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'BrandList'}">Brand List</router-link>
                                </li>
                                
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="file-alt" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Product Attribute</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'ColorAdd'}">Color Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'ColorList'}">Color List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'SizeAdd'}">Size Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'SizeList'}">Size List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'UnitAdd'}">Unit Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'UnitList'}">Unit List</router-link>
                                </li>
                                
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="file-alt" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Product</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'ProductList'}">Product List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'ProductAdd'}">Product Add</router-link>
                                </li>
                                
                            </ul>
                        </div>                        
                    </div>
                    
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="shopping-bag" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Sales</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'OrderList'}">All Order</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="male" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Customer</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'CustomerList'}">Customer List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'CustomerAdd'}">Customer Add</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="people-carry" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Sellers</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'SellerList'}">Seller List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'SellerAdd'}">Seller Add</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="bullhorn" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Marketing</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link to="product">Shocking Deals</router-link>
                                </li>
                                <li>
                                    <router-link to="brand">Request Offer</router-link>
                                </li>
                                <li>
                                    <router-link to="category">Request for Quotation</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-category">News Letter</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-sub-category">Bulk SMS</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-sub-category">Subscribers</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-sub-category">Coupon</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-sub-category">Vouture</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-sub-category">Promo code</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="info-circle" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Reports</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link to="product">Stock Management</router-link>
                                </li>
                                <li>
                                    <router-link to="brand">Sales Report</router-link>
                                </li>
                                <li>
                                    <router-link to="category">Most Viewed Products</router-link>
                                </li>
                                <li>
                                    <router-link to="sub-category">Seller Commission Report</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="shipping-fast" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Shipping</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link to="product">Shipping Configuration</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'DivisionList'}">Division List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'DivisionAdd'}">Division Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'DistrictList'}">District List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'DistrictAdd'}">District Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'ThanaList'}">Thana List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'ThanaAdd'}">Thana Add</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'UnionList'}">Union List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'UnionAdd'}">Union Add</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="cogs" size="23px" color="white"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Setup & Configuration</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link to="product">General Settings</router-link>
                                </li>
                                <li>
                                    <router-link to="brand">Pages</router-link>
                                </li>
                                <li>
                                    <router-link to="category">Business Type</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                    <div class="list-body" @click="getItem($event)">
                        <md-list-item>
                            <icon name="users-cog" size="23px"/>
                            <span class="md-list-item-text">
                                <div class="menu-name">Staffs</div>
                                <span class="font-bold">
                                    &#8250;
                                </span>
                            </span>
                        </md-list-item>
                        <div class="bodyList" @click.stop>
                            <ul>
                                <li>
                                    <router-link :to="{name:'StaffList'}">Staff List</router-link>
                                </li>
                                <li>
                                    <router-link :to="{name:'StaffAdd'}">Staff Add</router-link>
                                </li>
                                <li>
                                    <router-link to="brand">Role Stuff</router-link>
                                </li>
                                <li>
                                    <router-link to="category">Role Permission</router-link>
                                </li>
                            </ul>
                        </div>                        
                    </div>
                </md-list>
            </md-app-drawer>

            <md-app-content style="padding-top:40px;">
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>
</template>


<script>

export default {
    name: 'App',
    components:{

    },
    data() {
        return {
        menuVisible: true
        }
    },
    methods: {
        toggleMenu () {
            this.menuVisible = !this.menuVisible
            let blockClass = document.getElementsByClassName('block')[0];
            if (blockClass) {
                blockClass.classList.remove('block');
            }
            this.$refs.menuBtn.classList.toggle('toggle-menu-btn');
        },
        getItem(event) {
            if (this.menuVisible) {
                event.currentTarget.childNodes[2].classList.toggle('block')
            }
        },
        positionUpDown() {
            let drawer = document.getElementsByClassName('md-drawer')[0];
            if (drawer.style.top == '-16px'){
                drawer.style.top = '0px';
            } else {
                drawer.style.top = '-16px';
            }
        },
    }
}
</script>


<style scoped>
.left{
    margin-left:100px;
}
/* drawer css start  */
    .md-app {
        height: 100vh;
        border: 1px solid rgba(#000, .12);
    }

    .md-drawer::-webkit-scrollbar{
        display: none;
    }  
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
        /* top:-15px; */
    }
    .md-drawer.md-theme-default.md-persistent-mini.md-left{
        background: #3C4B64;
    }
    .md-app-toolbar {
        min-height: 50px;
        justify-content: space-between;
    }
    .md-list-item-text{
        /* display: block; */
        padding-left:5px;
        flex-direction: row;
    }
    .md-list-item:hover{
        background:rgb(221, 214, 214);
        cursor:pointer;
    }
    .md-list{
        background:#3c4b64;
        user-select: none;
    }
    .md-list-item-text{
        color:white;
    }
    .md-list svg{
        color:white;
    }
    .updown{
        top:-14px;
    } 
    .md-list ul li{
        padding:5px;
    }
    .md-toolbar span{
        padding: 10px 0;
    }
    .menu-name{
        min-width:160px;
    }
/* drawer css end  */

/* css for left accordion  start*/
    .bodyList{
        visibility: hidden;
        height:0;
    }
    .block{
        visibility: visible;
        height:auto;
        padding:2px;
    }
    .list-body{
        border-bottom:1px solid rgb(201, 198, 198);
    }
    .bodyList ul{
        list-style: none;
    }
    .md-toolbar{
        background:#D3D3D3;
    }
/* css for left accordion  end*/


/* top nav css*/
    .md-toolbar{
        position:sticky;
    }
    .go-home{
        height:100%;
        display: flex;
        align-items: center;
    }
    .go-home img {
        height:20px;
        width:20px;
        margin-right:10px;
    }
    .md-title{
        padding:0 10px;
        display: flex;
        grid-column-gap: 30px;
    }
    .profile span{
        font-size:1rem;
    }
    .top-sub-nav{
        height:20px;
        width: 100%;
        border-bottom:1px solid black;
        position:fixed;
        background: red;
        top:0;
    }
    .md-app-toolbar{
        display: block;
        padding:0;
    }
    .nav-one{
        display: flex;
        justify-content: space-between;
        padding:0 10px;
    }
    .nav-two{
        height:35px;
        width: 100%;
        background: white;
        border-bottom: 1px solid black;
        padding: 0 10px;
        display: flex;
        grid-column-gap:10px;
    }
    .menu-btn{
        padding-top:5px;
    }
    .toggle-menu-btn{
        /* display:inline; */
        margin-left:70px;
    }
    /* .md-toolbar .md-button:first-child{
        margin-left:60px;
    } */
/* top nav css end*/

/* icon css  */
    .profile-icon{
        color:red;
    }
    .bell-icon{
        color:black;
    }
/* icon css  end*/






    /* a.router-link-active{
        background:red;
    } */
    .md-theme-default a{
        color:white;
        text-decoration: none;
    }
    .md-theme-default a:hover{
        color:white;
    }

</style>
