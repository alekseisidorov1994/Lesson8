<template>
    <div class="container">
        <div class="post">

            <div class="post__header">

                <div class="post__user">
                    <div class="user">
                        <a href="#" class="user__avatar">
                            <img :src="user.image" alt="">
                        </a>
                        <a href="#" class="user__name">
                            {{user.name}} {{user.family}}
                        </a>
                    </div>

                </div>

                <div class="post__links">
                </div>
            </div>

            <div class="post__img">
                <img :src="content.image" alt="Photo" v-if="content.image.length === 1">
                <div class="slider owl-theme" v-else>
                    <img v-for="image of content.image" :key="image" :src="image" alt="Photo">
                </div>
            </div>


            <div class="post__edit">
                <div class="post__edit-name">Описание:</div>
                <div class="post__edit-textarea-wrapper">
                    <textarea class="post__edit-textarea" :value="content.description">
                    </textarea>
                </div>
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Хэштеги:</div>
                <div class="post__edit-textarea-wrapper">


                    <textarea class="post__edit-textarea" :value="tags">
                        
                    </textarea>
                </div>
            </div>

            <div class="post__buttons">
                <button class="btn btn--save">Сохранить</button>
                <button class="btn btn--cancel">Отмена</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['data'],
        created() {
            this.post = this.posts.filter(x => x.id === this.postId)[0]
            this.user = this.post.user
            this.content = this.post.content
        },
        computed: {
            postId() {
                return +this.$route.params.id
            },
            tags(){
                return this.content.tags.join(' ')
            }
        },
        data() {
            return {
                post: null,
                user: null,
                content: null,
                posts: this.data.posts,
                
            }
        }
    }
</script>