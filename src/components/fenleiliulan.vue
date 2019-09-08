<template>
    <div>
        <span>分类浏览</span>
        <ul>
            <li><router-link to="/classic">经典</router-link><router-link to="/classic">&gt;</router-link></li>
            <li><router-link to="/lengmenjiapian">冷门佳片</router-link><router-link to="/lengmenjiapian">&gt;</router-link></li>
            <li><router-link to="/doubangaofen">豆瓣高分</router-link><router-link to="/doubangaofen">&gt;</router-link></li>
            <li><router-link to="/dongzuo">动作</router-link><router-link to="/dongzuo">&gt;</router-link></li>
            <li><router-link to="/xiju">喜剧</router-link><router-link to="/xiju">&gt;</router-link></li>
            <li><router-link to="/aiqing">爱情</router-link><router-link to="/aiqing">&gt;</router-link></li>
            <li><router-link to="/xunyi">悬疑</router-link><router-link to="/xunyi">&gt;</router-link></li>
            <li><router-link to="/kongbu">恐怖</router-link><router-link to="/kongbu">&gt;</router-link></li>
            <li><router-link to="/kehuan">科幻</router-link><router-link to="/kehuan">&gt;</router-link></li>
            <li><router-link to="/zhiyu">治愈</router-link><router-link to="/zhiyu">&gt;</router-link></li>
            <li><router-link to="/wenyi">文艺</router-link><router-link to="/wenyi">&gt;</router-link></li>
            <li><router-link to="/chengzhang">成长</router-link><router-link to="/chengzhang">&gt;</router-link></li>
            <li><router-link to="/donghua">动画</router-link><router-link to="/donghua">&gt;</router-link></li>
            <li><router-link to="/huayu">华语</router-link><router-link to="/huayu">&gt;</router-link></li>
            <li><router-link to="/oumei">欧美</router-link><router-link to="/oumei">&gt;</router-link></li>
            <li><router-link to="/hanguo">韩国</router-link><router-link to="/hanguo">&gt;</router-link></li>
            <li><router-link to="/riben">日本</router-link><router-link to="/riben">&gt;</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
    ul{
        display:flex;
        flex-wrap:wrap;
    }
    li{
       list-style:none; 
       width:50%;
       border:0.01rem solid gray;
       border-bottom:none;
       padding:0.1rem;
        display:flex;
        justify-content: space-between;
    }
    li:nth-child(odd){
        border-left:none;
        border-right:none;
    }
    li:nth-last-child(1){
        border-bottom:0.01rem solid gray;
        border-right:0.01rem solid gray;
    }
    li:nth-last-child(2){
        border-bottom:0.01rem solid gray;
    }
    li>a{
        color:green;
        font-size:0.16rem;
    }
    li>a:hover{
        cursor:pointer;
    }
</style>