<template>
        <div class="_bgcolor">
            <div class="openapp">
                <router-link to="/downloadapp" class="openapp_a">打开App,浏览更多</router-link> 
            </div>
            <div class="down">
                <router-link to="/downloadapp" class="down_a">极速下载</router-link>
                <router-link to="/downloadapp" class="open_a">打开</router-link>   
            </div>
        </div>
</template>
<script>
export default {
   
}
</script>
<style lang="" scoped>
    ._bgcolor{
        width:100%;
        height:0.8rem;
        background:url(../../static/img/promotion_bg.b7abee9.jpg);
        display:flex;
        justify-content: space-between;
        padding-left:0.2rem;
        padding-right:0.2rem;
        padding-top:0.3rem;
        box-sizing:border-box;
        font-size:0;
    }
    .openapp>a{
        color:green;
    }
    .down_a,.open_a{
        display:inline-block;
        height:0.25rem;
        border-radius:0.05rem;
        text-align:center;
        line-height:0.25rem;
        vertical-align:middle;
    }
    .down_a{
        background:green;
        width:0.8rem;
        color:white;
        margin-right:0.1rem;
    }
    .open_a{
        width:0.4rem;
        border:0.01rem solid green;
        color:green;
    }
    a{
        font-size:0.16rem;
    }
</style>