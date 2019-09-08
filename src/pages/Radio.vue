<template>
    <div class="_radio">
        <router-link-home></router-link-home>
       <liulangengduo-and-open></liulangengduo-and-open>
       <useractive></useractive>
       <radio-data></radio-data>
    </div>
</template>
<script>
import  radioData from '../components/radioData';
import  useractive from '../components/useractive';
import  routerLinkHome from '../components/routerLinkHome';
import  liulangengduoAndOpen from '../components/liulangengduoAndOpen';
export default {
    components:{
        routerLinkHome,
        liulangengduoAndOpen,
        useractive,
        radioData
    }
}
</script>
<style lang="" scoped>
    ._radio{
        padding:0  0.2rem;
        box-sizing:border-box;
        margin-top:0.75rem;
    }
</style>