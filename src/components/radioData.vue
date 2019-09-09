<template>
    <div class="radiodata">
        <div class="dadou">
            <img class="dou" src="../../static/img/Dou.png" alt="">
        </div>
        <div>
            <h4 class="douban">豆瓣</h4>
            <span class="write">写了日记</span>
            <p>2017-03-01 19:30:41</p>
            <textarea name="" id="" cols="35" rows="10">
                <dl>
                <dt>
                    豆瓣App 4.12.0 主要更新
                </dt>
                <dd>
                    - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                </dd>
            </dl>
            </textarea>
            <!-- <dl>
                <dt>
                    豆瓣App 4.12.0 主要更新
                </dt>
                <dd>
                    - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
                </dd>
            </dl> -->
            <div class="other">
                <div>
                    <img class="zan" src="../../static/img/zan.png" alt="">
                    <span>4</span>
                    <img class="pinglun" src="../../static/img/pinglun.png" alt="">
                    <span>2</span>
                    <img class="buzhidao" src="../../static/img/buzhidao.png" alt="">
                    <span>1</span>
                    </div>
                <img class="more" src="../../static/img/more.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
    .radiodata{
        display:flex;
        width:100%;
        border-top:0.01rem solid gray;
        border-bottom:0.01rem solid gray;
        padding-top:0.2rem;
        padding-bottom:0.2rem;
        font-size: 0.16rem;
    }
    .dadou{
        margin-right:0.3rem;
    }
    .dou{
        width:0.5rem;
        height:0.5rem;
        border-radius:50%;
    }
    .douban{
        display:inline-block;
        font-weight:800;
        font-weight:0.32rem;
    }
    .write{
        font-size:0.18rem;
    }
    p{
        font-size:0.16rem;
    }

    dl{
        /* border:0.01rem solid gray; */
        font-size:0.16rem;
    }
    .zan,.pinglun,.buzhidao,.more{
        width:0.3rem;
        height:0.2rem;
    }
    .other{
        display:flex;
        justify-content:space-between;
    }
    .other>span{
        font-size:0.16rem;
    }
</style>