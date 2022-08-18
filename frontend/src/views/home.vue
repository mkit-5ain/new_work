<template>
    <section class="home is-active">
        <div class="age bullet">
            <div class="front">
                <span>2</span>
                <span>3</span>
            </div>
            <div class="back">
                <span>5</span>
                <span>4</span>
                <span>3</span>
                <span>2</span>
            </div>
            <div class="text">AGE</div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Home'
}
</script>
<style lang="scss" scoped>
    .age { display: flex; height: 12.50000vw; align-items: flex-end; overflow: hidden; 
        .front,.back,.text { font-size: 10.41667vw; }
        .front,.back { display: flex; flex-direction: column; transition: 1s cubic-bezier(0.4, 0, 1, 1); }
        .front { transform: translateY(50%); }
        .back { transform: translateY(75%); }
    }
</style>
