<template>
    <div>
        发现好电影
        <ul>
            <li v-if="!v.line" v-for="(v,index) in arrfindgoodmovie" :key="index" :style="{'color':v.color}">{{v.title}}</li><br v-else>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            arrfindgoodmovie:[]
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/findgoodmoviedata"
        }).then((success)=>{
            console.log(success.data.faxianhaodianying);
            this.arrfindgoodmovie=success.data.faxianhaodianying;
        });
    },
    // computed:{
    //     arrbefore(){

    //     },
    //     arrafter(){

    //     }
    // }
}
</script>
<style lang="" scoped>
    div{
        margin-top:0.3rem;
    }
    ul{
        /* display:flex;
        flex-wrap:nowrap; */
        white-space: nowrap;
        overflow: auto

    }
  li{
      list-style:none;
      display: inline-block;
      padding:0.3rem 0.3rem;
      border:0.01rem solid#FFAC2D ;
      white-space:nowrap;
    margin-right:0.1rem;
    margin-top:0.1rem;
  }
</style>