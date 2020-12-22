<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <Blogposts
          v-for="post in posts"
          :key="post.id"
          :views="post.views"
          :title="post.title"
          :date="post.date"
          :content="post.content"
          :author="post.author"
          :category="post.category" 
        />
      </div>
      <div class="col-lg-4">
        <Blogsidebar />
      </div>
    </div>
  </div>
</template>
<script>
import Blogposts from "../components/blog/Blog_posts";
import Blogsidebar from "../components/blog/Blog_sidebar";
import JsonPosts from "../json/blog_posts.json";
export default {
  name: "Blog",
  data() {
    return {
      posts: JsonPosts
    };
  },
  components: {
    Blogsidebar,
    Blogposts
  }
};
</script>