<template>
    <div class="post">
        <div class="post__header">

            <div class="post__user">
                <div class="user">
                    <router-link :to="`/post_${id}`" class="user__avatar">
                        <img :src="user.image" alt="">
                    </router-link>
                    <a href="#" class="user__name">
                        {{user.name}} {{user.family}}
                    </a>
                </div>

            </div>

            <div class="post__links">
                <a href="#" class="edit-link">
                    <i class="far fa-trash-alt"></i>
                    Delete
                </a>

                <router-link :to="`/edit_post/${id}`" class="edit-link">
                    <i class="fas fa-pencil-alt"></i>
                    Edit
                </router-link>

            </div>
        </div>

        <div class="post__img">
            <img :src="content.image" alt="Photo" v-if="content.image.length === 1">
            <div class="slider owl-theme" v-else>
                <img v-for="image of content.image" :key="image" :src="image" alt="Photo">
            </div>
        </div>


        <!-- post__data  -->
        <div class="post__data">

            <div class="post__description">
                {{content.description}}
            </div>

            <div class="post__hashtags">
                <a href="#" v-for="tag of content.tags" :key="tag">{{tag}}</a>

            </div>

        </div>
        <!-- // post__data -->

        <!-- post__comments -->
        <div class="post__comments">
           <Comment 
                v-for="(comment, index) of comments"
                :key="index"
                :comment="comment"
           />



            <div class="comment-form">
                <textarea class="comment-form__textarea" placeholder="Добавить комментарий"></textarea>
                <button disabled class="comment-form__button">Опубликовать</button>
            </div>
        </div>

    </div>
</template>

<script>
import Comment from '@/components/Comment.vue'
    export default {
        props: ['post'],
        data() {
            return {
                id: this.post.id,
                user: this.post.user,
                content: this.post.content,
                comments: this.post.comments
            }
        },
        components:{
            Comment
        }
    }
</script>
