import { createRouter , createWebHistory } from "vue-router";
import store from "../store";



const routes:any= [
    // {
    //     name:"home",
    //     path:"/",
    //     redirect:"/home"
    // },
]

const router = createRouter({
    routes,
    history:createWebHistory()
})

router.beforeEach((to,from,next)=>{
    next();
})



export default router;