<template>
    <ui-header/>
    <article class="container">
        <router-view/>
    </article>
    <ui-footer/>
</template>
<script>
    import LocomotiveScroll from 'locomotive-scroll';
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        name: 'App',
        components: {
            'ui-header': Header,
            'ui-footer': Footer
        },
        mounted() {
            // const scroll = new LocomotiveScroll({
            //     el: document.querySelector('.container'),
            //     smooth: true
            // });
        },
    }
</script>
<style lang="scss">
    @import '@/assets/sass/common.scss';
</style>
