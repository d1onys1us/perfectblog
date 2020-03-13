<template>
  <div class="home">
    <div v-for="post in posts" :key="post.id">
        <h4><router-link :to="'/post/' + post._id">{{ post.title }}</router-link></h4>
        <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
      posts: null
    }
  },

  mounted () {
    axios.get('http://localhost:3000/posts').then(res => {
      this.posts = res.data;
      console.log(res.data[0]._id);
    });
  }
}
</script>

<style scoped>
.home {
  word-wrap: break-word;
}
</style>