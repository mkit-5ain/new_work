<template>
    <section class="home is-active scroll">
        <ul class="name-list bullet">
            <li class="list-item"><span>M</span></li>
            <li class="list-item"><span>x</span></li>
            <li class="list-item"><span>x</span></li>
            <li class="list-item"><span>e</span></li>
            <li class="list-item"><span>m</span></li>
            <li class="list-item"><span>e</span></li>
            <li class="list-item"><span>n</span></li>
            <li class="list-item"><span>t</span></li>
        </ul>
        <!-- <div class="age">
            <div class="front">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div class="back">
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            <div class="text">AGE</div>
        </div>
        <router-link class="contact bullet" to="/work">
            <p>+</p>
            <p>View My Work</p>
        </router-link> -->
    </section>
</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
export default {
    name: 'Home',
    mounted() {
        // const scroll = new LocomotiveScroll({
        //     el: document.querySelector('.scroll'),
        //     smooth: true
        // });
    }
}
</script>
<style lang="scss" scoped>
    .home { position: relative;
        &:before {
            content: '';
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            background: #f00;
            z-index: 1;
        }
        .name-list {
            display: flex;
            padding: 150px 100px;
            font-size: 150px;
            font-variation-settings: "wght" 800, "wdth" 125;
            transition: 1s ease;
        }
        .age { display: flex; height: 12.5vw; justify-content: center; align-items: flex-end; overflow: hidden; 
            .front,.back,.text { font-size: 10.41667vw; }
            .front,.back { display: flex; text-align: center; flex-direction: column; }
            .front { animation: 1.5s cubic-bezier(0.4, 0, 1, 1) frontAge forwards; }
            .back { animation: 1.5s cubic-bezier(0.4, 0, 1, 1) backAge forwards; }
        }
        .contact { 
            display: flex;
            position: relative;
            font-size: 100px;
            transition: .5s cubic-bezier(0.4, 0, 1, 1); 
            align-items: center;
            gap: 30px;
            font-variation-settings: "wght" 700, "wdth" 125;
            &:hover { font-variation-settings: "wght" 700, "wdth" 100; 
                p {
                    &:nth-child(1) { transition: .5s cubic-bezier(0.4, 0, 1, 1); transform: rotate(360deg); }
                }
            }
            p {  
                &:nth-child(1) { transition: .5s cubic-bezier(0.4, 0, 1, 1); height: 51px; line-height: 40px; }
            }
        }
    }
</style>
