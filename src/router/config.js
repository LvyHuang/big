export default {
    routes:[
        {
            path:"/",
            name:"Home",
            component:()=>import("../views/Home"),
        },

        {
            path:"/channel/:id",
            name:"ChannelNews",
            component:()=>import("../views/ChannelNews"),
        },
        {
            path:"*",
            name:"404",
            component:()=>import("../views/NotFound"),
        },
    ],
    mode:"history"

}