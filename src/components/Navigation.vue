<template>
    <nav class="navbar navbar-light bg-light">
        <router-link to="/"><a class="navbar-brand">Perfect Blog</a></router-link>
        <div class="navbar-nav">
            <router-link to="/create">Create Post</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navigation',
}
</script>