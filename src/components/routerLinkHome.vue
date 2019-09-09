<template>
<!-- <div class="_header"> -->
    <div class="header"> 
       <div class="left">
             <router-link to="/home"><img class="hdb" src="../../static/img/doubanban.png" alt=""></router-link>
       </div>
     <div class="right">
          <router-link to="/movie" class="mov">电影</router-link>
          <router-link to="/book" class="bo">图书</router-link>
          <router-link to="/radio" class="rad">广播</router-link>
          <router-link to="/group" class="gro">小组</router-link>
          <router-link to="/tubiao"><img class="tb" src="../../static/img/search.png" alt=""></router-link>
      </div>
    </div>
    <!-- </div> -->
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
     /* ._header{
          overflow:hidden;
     } */
     .header{
          width:100%;
          height:0.5rem;
          display:flex;
          justify-content:space-between;
          border-bottom:0.01rem solid gray;
          padding:0 0.2rem;
          box-sizing:border-box;
          position:fixed;
          top:0;
          left:0;
          background:white;
     }
     .left{
          font-size:0.24rem;
          line-height:0.5rem;
          /* margin-left:0.16rem; */
     }
     .right{
          /* margin-right:0.16rem; */
          line-height:0.5rem;
          font-size: 0px;
     }
     .right>a{
          margin-right:0.1rem;
          font-size:0.16rem;
     }
    /* .hdb{
        color:rgb(5,181,18);
    } */
    .hdb{
         width:0.4rem;
          height:0.2rem;
    }
   .mov{
        color:rgb(66,189,86);
   }
   .bo{
        color:rgb(159,120,96);
   }
   .rad{
        color:rgb(228,168,19);
   }
   .gro{
        color:rgb(42,184,204);
   }
   .tb{
        width:0.3rem;
          height:0.2rem;
   }
</style>