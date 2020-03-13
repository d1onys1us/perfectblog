<template>
  <div class="comments">
    <h6>Comments</h6>
    <hr>

    <div v-for="comment in comments" :key="comment.id">
        <p>{{ comment.comment }}</p>
    </div>

    <form>
      <div class="form-group">
        <textarea v-model="comment" class="form-control" id="comment" rows="3" placeholder="Leave a comment"></textarea>
      </div>
      <button type="button" class="btn btn-primary" v-on:click="create_comment">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Comments',
  props: {
    id: String
  },

  data () {
    return {
      comment: null,
      comments: null, // this is the current list of comments we want to display
    }
  },

  methods: {
    create_comment: function(event) {
      let body = {postid: this.id, comment: this.comment};
      axios.post('http://localhost:3000/comment', body).then(res => {
        // clear inputs
        document.getElementById("comment").value = "";

        this.comments.splice(this.comments.length, 1, body);
        this.comment = "";
      });
      
    }
  },

  mounted () {
      console.log("hello i mounted");
      axios.get('http://localhost:3000/comment/' + this.$route.params.id).then(res => {
          console.log(res.data);
          this.comments = res.data;
          console.log("comments: ", this.comments);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
