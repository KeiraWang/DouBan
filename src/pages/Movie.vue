<template>
    <div class="_movie">
        <!-- 电影 -->
         <router-link-home></router-link-home>
         <movie-data></movie-data>
         <find-good-movie></find-good-movie>
         <fenleiliulan></fenleiliulan>
         <dou-ban-footer></dou-ban-footer>
    </div>
</template>
<script>
import  DouBanFooter from '../components/DouBanFooter';
import  fenleiliulan from '../components/fenleiliulan';
import  findGoodMovie from '../components/findGoodMovie';
import  routerLinkHome from '../components/routerLinkHome';
import  MovieData from '../components/MovieData';
export default {
    components:{
        routerLinkHome,
        MovieData,
        findGoodMovie,
        fenleiliulan,
        DouBanFooter
    },

}
</script>
<style lang="" scoped>
    ._movie{
        padding:0  0.2rem;
        box-sizing:border-box;
        margin-top:0.75rem;
    }
</style>