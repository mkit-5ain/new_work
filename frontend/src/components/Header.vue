<template>
    <header>
        <div>© Code By LIM</div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/work">Work</router-link>
            <router-link to="/about">About</router-link>
            <a class="outside" href="https://github.com/mkit-5ain" target="blank">Github</a>
            <i></i>
        </nav>
    </header>
</template>
<script>
    export default {
        name: 'Header'
    }
</script>
<style lang="scss" scoped>
    header { 
        display: flex;
        position: fixed;
        z-index: 1;
        width: calc(100% - 10.41667vw);
        margin: 2.60417vw 5.20833vw 0px;
        justify-content: space-between;
        nav { position: relative;
            a { padding-right: 30px;
                &:nth-child(2) {
                    &.router-link-active {
                        & ~ i { left: 74px; }
                    }
                }
                &:nth-child(3) {
                    &.router-link-active {
                        & ~ i { left: 149px; }
                    }
                }
                &.router-link-active { color: #f00; transition: .5s ease; }
                &.outside { position: relative;
                    &:after {
                        content: '';
                        position: absolute;
                        top: 0px;
                        right: 0px;
                        width: 19px;
                        height: 18px;
                        background: url('@/assets/image/icon/i_github.png') 0 0 no-repeat; 
                        background-size: 19px;
                    }
                }
            }
            i {
                position: absolute;
                top: -5px;
                left: 0px;
                width: 3px;
                height: 3px;
                background: #f00;
                transition: .5s ease;
            }
        }
    }
</style>