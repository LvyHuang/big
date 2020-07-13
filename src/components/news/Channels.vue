<template>
    <div class="news-types" v-if="data.length > 0">
        <div class="item" v-for="item in showChannels" :key="item.channelId"
             :class="{active:item.channelId===chooseId}" @click="switchTo(item.channelId)"><span class="name">{{item.name}}</span></div>
        <a @click.prevent="isCollapsed=!isCollapsed">{{ isCollapsed ? "展开" : "收起" }}</a>
    </div>
</template>

<script>
    import {mapState} from "vuex"
     export default {
        data(){
            return {
                isCollapsed:true,   //当前是否为折叠状态
                chooseId: null,     //当前选中的频道Id
            }
        },
        computed:{
            ...mapState("channels", ["data"]),
          //需要显示的频道
          showChannels(){
              if(this.isCollapsed){
                  return this.data.slice(0,8); //折叠状态只需要显示8个数据
              }else{
                  //展开状态
                  return this.data;
              }
          }
        },
        watch:{
            data:{
                immediate: true,
                handler(){
                    if(this.data.length >0 ){
                        //此时才有频道, 默认选中第一个
                        this.switchTo(this.data[0].channelId);
                    }
                }
            }
        },
        methods:{
            //切换chooseId
            switchTo(id){
                this.chooseId = id;
                //当频道被切换了，但组件不知道切换后要干嘛
                //触发一个事件，让组件的父组件去做这件事
                this.$emit("chooseIdChange",this.chooseId)
            }
        }
    }
</script>

<style scoped>
    .news-types {
        margin: 30px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;
        padding-bottom: 15px;
    }
    .item {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin: 7px 15px 7px 0;
        cursor: pointer;
        position: relative;
    }
    .item:hover {
        background: #ccc;
    }
    .item.active {
        background: #000;
        color: #fff;
    }
    .news-types a {
        align-self: flex-end;
        margin-bottom: 20px;
        color: #409eff;
    }

</style>