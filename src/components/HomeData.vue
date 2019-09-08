<template>
    <div>
       <ul>
           <li v-for="(v,index) in arrhomedata" :key="index">
               <div class="top">
                    <dl>
                        <dt>{{v.title}}</dt>
                        <dd>{{v.content|aa}}</dd>
                    </dl>
                    <img :src="v.image" alt="">
               </div>
                <div class="bot">
                    <span>{{v.time_str}}</span>
                    <span>{{v.fee_str}}</span>
                </div>
           </li>
       </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arrhomedata:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/homedata"
        }).then((data)=>{
            console.log(data.data.shouye);
            this.arrhomedata=data.data.shouye;
        });
    },
   filters:{
       aa(val){
           return val.substring(0,20);
       }
   }
}
</script>
<style lang="" scoped>
    li{
        list-style:none;
        width:100%;
        border-bottom:0.01rem solid rgb(227,227,227);
        padding-top:0.2rem;
        padding-bottom:0.2rem;
        box-sizing:border-box;
    }
    .top{
        width:100%;
        display:flex;
    }
    dl{
        width:65%;
        margin-right:10%;
    }
    dd{
        margin-top:0.2rem;
    }
    img{
        width:25%;
        height:1.1rem;
    }
    .bot{
        display:flex;
        justify-content: space-between;
    }
</style>