<template>
    <section class="home is-active">
        <div class="age bullet">
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
        <router-link class="contact" to="/work">
            <p>+</p>
            <p>View My Work</p>
        </router-link>
    </section>
</template>

<script>
export default {
    name: 'Home'
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
        .age { display: flex; height: 12.5vw; justify-content: center; align-items: flex-end; overflow: hidden; 
            .front,.back,.text { font-size: 10.41667vw; }
            .front,.back { display: flex; text-align: center; flex-direction: column; }
            .front { animation: 1.5s cubic-bezier(0.4, 0, 1, 1) frontAge forwards; }
            .back { animation: 1.5s cubic-bezier(0.4, 0, 1, 1) backAge forwards; }
        }
        .contact { 
            display: flex;
            position: relative;
            width: 900px;
            padding-bottom: 20px;
            border-bottom: 4px solid #222;
            font-size: 100px;
            transition: .5s cubic-bezier(0.4, 0, 1, 1);
            gap: 30px;
            font-variation-settings: "wght" 700, "wdth" 125;
            &:before {
                content: "";
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 100%;
                border-bottom: 4px solid #fdf7fc;
                transform: scaleX(0);
                transform-origin: right;
                transition: transform .6s cubic-bezier(0.4, 0, 1, 1);
            }   
            &:hover {
                font-variation-settings: "wght" 700, "wdth" 100;
                &:before {
                    transform: scaleX(1);
                    transform-origin: left;
                }
            }
        }
    }
</style>
