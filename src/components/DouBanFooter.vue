<template>
    <div>
        <div class="dou">
            <img src="../../static/img/Dou.png" alt="">
            <dl>
                <dt>豆瓣</dt>
                <dd>我们的精神角落</dd>
            </dl>
        </div>
        <div class="footer">
            <router-link to="/gotoappstoredownloadios">去AppStore免费下载IOS客户端</router-link>
        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
    .dou{
        display:flex;
        justify-content: center;
        margin-top:0.5rem;
    }
    img{
        width:20%;
        height:20%;
        margin-right:0.1rem;
    }
    dt{
        font-size:0.3rem;
    }
    dd{
        font-size:0.16rem;
    }
    a{
        color:green;
        font-size:0.16rem;
    }
    .footer{
        text-align:center;
    }
</style>