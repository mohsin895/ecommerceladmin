import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/layout/fullLayout'
import Dashboard from '@/pages/dashboard/dashboard'
import ProductList from '@/pages/product/ProductList'
import ProductAdd from '@/pages/product/ProductAdd'
import ProductEdit from '@/pages/product/ProductEdit'
import SampleList from '@/pages/seller-product-list/productList'
import Categorylist from '@/pages/category/Categorylist'
import CategoryAdd from '@/pages/category/CategoryAdd'
import CategoryEdit from '@/pages/category/CategoryEdit'
import BrandList from '@/pages/brand/BrandList'
import BrandAdd from '@/pages/brand/BrandAdd'
import BrandEdit from '@/pages/brand/BrandEdit'
import ColorList from '@/pages/color/ColorList'
import ColorAdd from '@/pages/color/ColorAdd'
import ColorEdit from '@/pages/color/ColorEdit'
import SizeList from '@/pages/size/SizeList'
import SizeAdd from '@/pages/size/SizeAdd'
import SizeEdit from '@/pages/size/SizeEdit'
import CustomerList from '@/pages/customer/CustomerList'
import CustomerAdd from '@/pages/customer/CustomerAdd'
import CustomerEdit from '@/pages/customer/CustomerEdit'
import StaffList from '@/pages/staff/StaffList'
import StaffAdd from '@/pages/staff/StaffAdd'
import StaffEdit from '@/pages/staff/StaffEdit'
import SellerList from '@/pages/seller/SellerList'
import SellerAdd from '@/pages/seller/SellerAdd'
import SellerEdit from '@/pages/seller/SellerEdit'
import DivisionList from '@/pages/division/DivisionList'
import DivisionAdd from '@/pages/division/DivisionAdd'
import DivisionEdit from '@/pages/division/DivisionEdit'
import DistrictList from '@/pages/district/DistrictList'
import DistrictAdd from '@/pages/district/DistrictAdd'
import DistrictEdit from '@/pages/district/DistrictEdit'
import ThanaList from '@/pages/thana/ThanaList'
import ThanaAdd from '@/pages/thana/ThanaAdd'
import ThanaEdit from '@/pages/thana/ThanaEdit'
import UnionList from '@/pages/union/UnionList'
import UnionAdd from '@/pages/union/UnionAdd'
import UnionEdit from '@/pages/union/UnionEdit'
import OrderList from '@/pages/order/OrderList'
import OrderAdd from '@/pages/order/OrderAdd'
import OrderEdit from '@/pages/order/OrderEdit'
import SliderList from '@/pages/slider/SliderList'
import SliderAdd from '@/pages/slider/SliderAdd'
import SliderEdit from '@/pages/slider/SliderEdit'
import BannerList from '@/pages/banner/BannerList'
import BannerAdd from '@/pages/banner/BannerAdd'
import BannerEdit from '@/pages/banner/BannerEdit'
import UnitList from '@/pages/unit/UnitList'
import UnitAdd from '@/pages/unit/UnitAdd'
import UnitEdit from '@/pages/unit/UnitEdit'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: { path: 'dashboard'},
      
      children:[
        {
          path:'dashboard',
          name:'layout.dashboard',
          component: Dashboard
        },
        {
          path:'sample/list',
          name:'SampleList',
          component: SampleList
        },
        {
          path:'product/list',
          name:'ProductList',
          component: ProductList
        },
        {
          path:'product/add',
          name:'ProductAdd',
          component: ProductAdd
        },{
          path:'product/:dataId/edit',
          name:'ProductEdit',
          component: ProductEdit
        },
        {
          path:'category/list',
          name:'Categorylist',
          component: Categorylist
        },
        {
          path:'category/add',
          name:'CategoryAdd',
          component: CategoryAdd
        },{
          path:'category/:dataId/edit',
          name:'CategoryEdit',
          component: CategoryEdit
        },
        {
          path:'brand/list',
          name:'BrandList',
          component: BrandList
        },
        {
          path:'brand/add',
          name:'BrandAdd',
          component: BrandAdd
        },{
          path:'brand/:dataId/edit',
          name:'BrandEdit',
          component: BrandEdit
        },
        {
          path:'color/list',
          name:'ColorList',
          component: ColorList
        },
        {
          path:'color/add',
          name:'ColorAdd',
          component: ColorAdd
        },{
          path:'color/:dataId/edit',
          name:'ColorEdit',
          component: ColorEdit
        },
        {
          path:'size/list',
          name:'SizeList',
          component: SizeList
        },
        {
          path:'size/add',
          name:'SizeAdd',
          component: SizeAdd
        },{
          path:'size/:dataId/edit',
          name:'SizeEdit',
          component: SizeEdit
        },
        {
          path:'customer/list',
          name:'CustomerList',
          component: CustomerList
        },
        {
          path:'customer/add',
          name:'CustomerAdd',
          component: CustomerAdd
        },{
          path:'customer/:dataId/edit',
          name:'CustomerEdit',
          component: CustomerEdit
        },
        {
          path:'staff/list',
          name:'StaffList',
          component: StaffList
        },
        {
          path:'staff/add',
          name:'StaffAdd',
          component: StaffAdd
        },{
          path:'staff/:dataId/edit',
          name:'StaffEdit',
          component: StaffEdit
        },
        {
          path:'seller/list',
          name:'SellerList',
          component: SellerList
        },
        {
          path:'seller/add',
          name:'SellerAdd',
          component: SellerAdd
        },{
          path:'seller/:dataId/edit',
          name:'SellerEdit',
          component: SellerEdit
        },
        {
          path:'division/list',
          name:'DivisionList',
          component: DivisionList
        },
        {
          path:'division/add',
          name:'DivisionAdd',
          component: DivisionAdd
        },{
          path:'division/:dataId/edit',
          name:'DivisionEdit',
          component: DivisionEdit
        },
        {
          path:'district/list',
          name:'DistrictList',
          component: DistrictList
        },
        {
          path:'district/add',
          name:'DistrictAdd',
          component: DistrictAdd
        },{
          path:'district/:dataId/edit',
          name:'DistrictEdit',
          component: DistrictEdit
        },
        {
          path:'thana/list',
          name:'ThanaList',
          component: ThanaList
        },
        {
          path:'thana/add',
          name:'ThanaAdd',
          component: ThanaAdd
        },{
          path:'thana/:dataId/edit',
          name:'ThanaEdit',
          component: ThanaEdit
        },
        {
          path:'union/list',
          name:'UnionList',
          component: UnionList
        },
        {
          path:'union/add',
          name:'UnionAdd',
          component: UnionAdd
        },{
          path:'union/:dataId/edit',
          name:'UnionEdit',
          component: UnionEdit
        },
        {
          path:'order/list',
          name:'OrderList',
          component: OrderList
        },
        {
          path:'banner/list',
          name:'BannerList',
          component: BannerList
        },
        {
          path:'banner/add',
          name:'BannerAdd',
          component: BannerAdd
        },{
          path:'banner/:dataId/edit',
          name:'BannerEdit',
          component: BannerEdit
        },
        {
          path:'slider/list',
          name:'SliderList',
          component: SliderList
        },
        {
          path:'slider/add',
          name:'SliderAdd',
          component: SliderAdd
        },{
          path:'slider/:dataId/edit',
          name:'SliderEdit',
          component: SliderEdit
        },
        {
          path:'unit/list',
          name:'UnitList',
          component: UnitList
        },
        {
          path:'unit/add',
          name:'UnitAdd',
          component: UnitAdd
        },
        {
          path:'unit/:dataId/edit',
          name:'UnitEdit',
          component: UnitEdit
        },
        
      ]
    },
  ],
  mode:'history',
  base:'admin'
})
