<template>
    <div class="cursor"></div>
</template>
<script>
export default {
    name: 'Curosr',
    mounted: function () {
        this.cursorPointer(),
        this.cursorActive();
    },
    methods: {
        cursorPointer() {
            const cursor = document.querySelector(".cursor");

            document.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
                cursor.style.opacity = '1';
            });

        },
        cursorActive() {
            const cursor = document.querySelector(".cursor");
            const cursorScale = document.querySelectorAll(".scale");

            cursorScale.forEach(ele => ele.addEventListener("mouseover", () => {
                cursor.style.transform = 'scale(0.5)';
            }));

            cursorScale.forEach(ele => ele.addEventListener("mouseout", () => {
                cursor.style.transform = 'scale(1)';
            }));

            cursorScale.forEach(ele => ele.addEventListener("click", () => {
                cursor.style.transform = 'scale(0.5)';
            }));

            cursorScale.forEach(ele => ele.addEventListener("mouseup", () => {
                cursor.style.transform = 'scale(1)';
            }));
        }
    }
}
</script>
