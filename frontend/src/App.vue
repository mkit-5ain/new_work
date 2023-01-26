<template>
    <ui-header/>
    <router-view class="container"/>
    <ui-footer/>
    <curosr/>
</template>
<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import Cursor from '@/components/Cursor.vue';
    export default {
        name: 'App',
        components: {
            'ui-header': Header,
            'ui-footer': Footer,
            'curosr': Cursor
        }
    }
</script>
<style lang="scss">
    @import '@/assets/sass/common.scss';
</style>
