<template>
  <div class="post">
    <h4> {{ title }}</h4>
    <p> {{ body }}</p>
    <Comments v-bind:id="id"/>
  </div>
</template>

<script>
import axios from 'axios';
import Comments from '@/components/Comments.vue'

export default {
    data () {
    return {
      title: null,
      body: null,
      id: null,
    }
  },

  components: {
    Comments
  },

  mounted () {
    axios.get('http://localhost:3000/posts/' + this.$route.params.id).then(res => {
        this.title = res.data[0].title;
        this.body = res.data[0].body;
        this.id = this.$route.params.id;
    });
  }
}
</script>
