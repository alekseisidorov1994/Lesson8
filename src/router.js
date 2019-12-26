import Vue from 'vue'
import VueRouter from 'vue-router'


import Wall from './pages/Wall.vue'
import Editor from './pages/Editor.vue'
// import PostView from './pages/PostView.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/wall',
            component: Wall

        },
        {
            path: '/edit_post_:id',
            component: Editor

        }
        // {
        //     path:'*',
        //     redirect:'/wall'
        // }
        
       
    ]

}) 