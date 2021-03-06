import Vue from 'vue'
import Router from 'vue-router'

// import  给组件起个名字  from '引用的组件的路径'
import  CatEyeMovie from '../pages/CatEyeMovie';
import  Enjoy from '../pages/Enjoy';
import  Foods from '../pages/Foods';
import  Hotel from '../pages/Hotel';
import  WaiMai from '../pages/WaiMai';
import  Home from '../pages/Home';
import  DownLoadApp from '../pages/DownLoadApp';
import  FindPass from '../pages/FindPass';
import  OtherLoginMethods from '../pages/OtherLoginMethods';
import  LoginNew from '../pages/LoginNew';
import  RegisterNew from '../pages/RegisterNew';
import  Movie from '../pages/Movie';
import  Book from '../pages/Book';
import  Radio from '../pages/Radio';
import  Group from '../pages/Group';
import  HomeDouBan from '../pages/HomeDouBan';
import  TuBiao from '../pages/TuBiao';
import  YingYuanReYing from '../pages/YingYuanReYing';
import  OuMeiXinDieBang from '../pages/OuMeiXinDieBang';
import  Classic from '../pages/Classic';
import  lengmenjiapian from '../pages/lengmenjiapian';
import  GoToAppStoreDownLoadIOS from '../pages/GoToAppStoreDownLoadIOS';
import  MovieDetail from '../pages/MovieDetail';
import  UserInfor from '../pages/UserInfor';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/userinfor',//当路径为哪个的时候
      name: 'UserInfor',//给当前路由起个名字
      component: UserInfor//调用的组件
    },
    {
      path: '/moviedetail',//当路径为哪个的时候
      name: 'MovieDetail',//给当前路由起个名字
      component: MovieDetail//调用的组件
    },
    {
      path: '/gotoappstoredownloadios',//当路径为哪个的时候
      name: 'GoToAppStoreDownLoadIOS',//给当前路由起个名字
      component: GoToAppStoreDownLoadIOS//调用的组件
    },
    {
      path: '/lengmenjiapian',//当路径为哪个的时候
      name: 'lengmenjiapian',//给当前路由起个名字
      component: lengmenjiapian//调用的组件
    },
    {
      path: '/classic',//当路径为哪个的时候
      name: 'Classic',//给当前路由起个名字
      component: Classic//调用的组件
    },
    {
      path: '/cateyemovie',//当路径为哪个的时候
      name: 'CatEyeMovie',//给当前路由起个名字
      component: CatEyeMovie//调用的组件
    },
    {
      path: '/enjoy',
      name: 'Enjoy',
      component: Enjoy
    },
    {
      path: '/foods',
      name: 'Foods',
      component: Foods
    },
    {
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    },
    {
      path: '/waimai',
      name: 'WaiMai',
      component: WaiMai
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/downloadapp',
      name: 'DownLoadApp',
      component: DownLoadApp
    },
    {
      path: '/findpass',
      name: 'FindPass',
      component: FindPass
    },
    {
      path: '/otherloginmethods',
      name: 'OtherLoginMethods',
      component: OtherLoginMethods
    },
    {
      path: '/loginnew',
      name: 'LoginNew',
      component: LoginNew
    },
    {
      path: '/registernew',
      name: 'RegisterNew',
      component: RegisterNew
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/homedouban',
      name: 'HomeDouBan',
      component: HomeDouBan
    },
    {
      path: '/tubiao',
      name: 'TuBiao',
      component: TuBiao
    },
    {
      path: '/yingyuanreying',
      name: 'YingYuanReYing',
      component: YingYuanReYing
    },
    {
      path: '/oumeixindiebang',
      name: 'OuMeiXinDieBang',
      component: OuMeiXinDieBang
    },
    {
      path: '/*',
      redirect:"/home"
    }
  ]
});
