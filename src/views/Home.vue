<template>
    <div>
        <Banner :banners="banners" :duration="2000"/>
        <Channels @chooseIdChange="handleChange"/>
        <Loading v-show="isLoading"/>
        <NewsList v-show="!isLoading" :news="news"/>
    </div>
</template>

<script>
import Banner from "../components/Banner";
import Channels from "../components/news/Channels";
import NewsList from "../components/news/NewsList";
import Loading from "../components/Loading";
import {getNews} from "../services/newsService";

export default {
    components:{
        Banner,
        Channels,
        NewsList,
        Loading,
    },
    data(){
        return {
            banners:[
                {url:require("../assets/banner/banner1.png"), link:""},
                {url:require("../assets/banner/banner2.png"), link:""},
                {url:require("../assets/banner/banner3.png"), link:""},
            ],
            news:[],
            isLoading:true,
        }
    },
    methods:{
        async handleChange(changeId){
            this.isLoading = true;
            var resp = await getNews(changeId,1,10);   //经过一段时间才能获取
            this.news = resp.contentlist;
            this.isLoading = false;
        }
    }
}
</script>

<style scoped>

</style>