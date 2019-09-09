<template>
    <div class="_useractive">
        <div class="aa">
            <router-link to="/userinfor"><img class="user" src="../../static/img/xiazai.png" alt=""></router-link>
            <router-link class="pleaselog" to="/loginnew">请先登录</router-link>
        </div>
        <div>
            <img @click="fun()" v-if="bool" class="bianji" src="../../static/img/bianji.png" alt="">
            <input type="text" v-else autofocus="true">
            <img class="photo" src="../../static/img/photo.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            bool:true
        }
    },
    methods:{
        fun(){
            this.bool=!this.bool;
        }
    }
}
</script>
<style lang="" scoped>
.aa a{
    float: left;
}
.aa a:nth-of-type(2){
    line-height: 0.5rem;
}
    ._useractive{
        display:flex;
        justify-content:space-between;
        padding:0 0.2rem;
        box-sizing:border-box;
        margin-top:0.15rem;
        margin-bottom:0.15rem;
        font-size:0;
    }
    .user{
        width:0.5rem;
        height:0.5rem;
        border-radius:50%;
    }
    .bianji{
        width:0.5rem;
        height:0.3rem;
    }
    .photo{
        width:0.6rem;
        height:0.3rem;
    }
    .pleaselog{
        color:gray;
        margin-left:0.1rem;
        font-size:0.16rem;
        vertical-align:middle;
    }
    input{
        width:0.5rem;
    }
</style>