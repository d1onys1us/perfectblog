<template>
  <div class="create">
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input v-model="title" type="email" class="form-control" id="title" placeholder />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea v-model="body" class="form-control" id="body" rows="10"></textarea>
      </div>
      <button type="button" class="btn btn-primary" v-on:click="create_post">Create</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

// we want to take the form data and post it to our database
export default {
  name: "Create",

  data () {
    return {
      title: null,
      body: null
    }
  },

  methods: {
    create_post: function(event) {
      if (!(this.title && this.body)) {
        alert("Please fill out the title and body to create a post.");
      }
      else {
        let body = {title: this.title, body: this.body};
        axios.post('http://localhost:3000/posts', body).then(res => {
          // clear inputs
          this.title = "";
          this.body = "";
          alert("Post created!");
        });
      }
    }
  },
}
</script>