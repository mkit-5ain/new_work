<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <ui-header/>
    <article id="container" class="container">
        <router-view/>
    </article>
    <ui-footer/>
</template>
<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        name: 'App',
        components: {
            'ui-header': Header,
            'ui-footer': Footer
        }
    }
</script>
<style lang="scss">
    @import '@/assets/sass/common.scss';
</style>
