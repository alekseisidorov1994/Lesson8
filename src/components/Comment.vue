<template>
    <div class="post-comment">
        
        <a href="#" class="post-comment__avatar">
            <img :src="user.image" alt="">
        </a>
        <div class="post-comment__text">
            <a href="#" class="post-comment__name">{{user.name}} {{user.family}}</a>
            {{content}}
        </div>
    </div>
</template>

<script>
export default {
    props:['comment'],
    data(){
        return{
            user: this.comment.user,
            content: this.comment.content
        }
    }
}
</script>