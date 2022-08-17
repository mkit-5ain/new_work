<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/experience">Experience</router-link>
            <a class="outside" href="https://github.com/mkit-5ain" target="blank">Github</a>
            <i></i>
        </nav>
        <div>© Code By LIM.</div>
    </header>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>