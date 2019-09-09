<template>
    <div class="moviebox"> 
      <div class="fir">
          <div class="tit">
            <p>影院热映</p>
            <i>更多</i>
          </div>
         <ul>
          <li v-for="(v,index) in arrfirst" :key="index">
            <router-link to="/moviedetail"><img :src="v.images.large"></router-link>
            <!-- <router-link to="/moviedetail"><img :src="v.large"></router-link> -->
            <router-link class="qq" to="/moviedetail"><span>{{v.title}}</span></router-link>
            <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
            >
            </el-rate>
          </li>
        </ul>
      </div>
        <!-- <ul>
          <li v-for="(v,index) in arrfirst" :key="index">
            <img :src="v.images.large">
            <span>{{v.title}}</span>
          </li>
        </ul> -->

        <div class="sec">
           <div class="tit">
            <p>免费在线观影</p>
            <i>更多</i>
          </div>
          <ul>
          <li v-for="(v,index) in arrsecond" :key="index">
            <router-link to="/moviedetail"><img :src="v.images.large"></router-link>
            <!-- <router-link to="/moviedetail"><img :src="v.large"></router-link> -->
            <router-link to="/moviedetail"><span>{{v.title}}</span></router-link>
            <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
            >
            </el-rate>
          </li>
        </ul>
        </div>
        <!-- <ul>
          <li v-for="(v,index) in arrsecond" :key="index">
            <img :src="v.images.large">
            <span>{{v.title}}</span>
          </li>
        </ul> -->

        <div class="thi">
            <div class="tit">
            <p>新片速递</p>
            <i>更多</i>
          </div>
            <ul>
          <li v-for="(v,index) in arrthird" :key="index">
            <router-link to="/moviedetail"><img :src="v.images.large"></router-link>
            <!-- <router-link to="/moviedetail"><img :src="v.large"></router-link> -->
            <router-link to="/moviedetail"><span>{{v.title}}</span></router-link>
            <el-rate
                v-model="value5"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
            >
            </el-rate>
          </li>
        </ul>
        </div>
        <!-- <ul>
          <li v-for="(v,index) in arrthird" :key="index">
            <img :src="v.images.large">
            <span>{{v.title}}</span>
          </li>
        </ul> -->
    </div>
</template>
<script>
export default {
  data(){
      return {
          arrmoviedata:[],
          value5: 1.7
      }
  },
  created(){
    this.axios({
      method:"get",
      // url:"/moviedata"
      url:"/bendimoviedata"
    }).then((success)=>{
      // console.log(success);
      // console.log(success.data);
      // console.log(success.data.movie);
      this.arrmoviedata=success.data.movie;
      //  this.arrmoviedata=success.data;
    });
  },
  computed:{
    arrfirst(){
      var a=this.arrmoviedata.filter((v,index)=>{
        if(index<=30){
          return this.arrmoviedata[index];
        }
      });
      return a;
    },
    arrsecond(){
      var a=this.arrmoviedata.filter((v,index)=>{
        if(index>30 && index<=60){
          return this.arrmoviedata[index];
        }
      });
      return a;
    },
     arrthird(){
      var a=this.arrmoviedata.filter((v,index)=>{
        if(index>60){
          return this.arrmoviedata[index];
        }
      });
      return a;
    },
  }
}
</script>
<style scoped>
.fir,.sec,.thi{
  margin-top:0.2rem;
}
.tit{
    display:flex;
    justify-content: space-between;
    font-size:0.16rem;
  }
i{
    font-style:normal;
    color:green;
  }
ul{
  display:flex;
  overflow:scroll;
  width:100%;
  font-size: 0px;
  }
li{
    list-style:none;
    width:1rem;
    margin-right:0.1rem;
  }
img{
    width:1rem;
    height:1.5rem;
    margin-right:0.1rem;
    display:block;
  }
span{
    display:block;
    text-align:center;
    margin-top:0.1rem;
    font-size:0.16rem;
  }
  .star{
    font-size:10px;
    margin-right:0;
  }
  a{
    color:black;
  }
</style>