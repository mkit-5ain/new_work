<template>
    <section class="home is-active">
        <div class="intro-wrap">
            <div class="name-wrap">
                <ul class="name-list">
                    <li class="list-item"><span>M</span></li>
                    <li class="list-item"><span>x</span></li>
                    <li class="list-item"><span>x</span></li>
                    <li class="list-item"><span>e</span></li>
                    <li class="list-item"><span>m</span></li>
                    <li class="list-item"><span>e</span></li>
                    <li class="list-item"><span>n</span></li>
                    <li class="list-item"><span>t</span></li>
                </ul>
            </div>
        </div>
        <div class="transition-wrap">
            <div class="transition-image">
                <img src="../assets/image/common/astro.webp" alt="">
            </div>
            <div class="circle">
                <img src="../assets/image/common/circle.svg" alt="">
            </div>
        </div>
        <!-- <div class="space"></div> -->
        <div class="age">
            <div class="front">
                <span>0</span>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div class="back">
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
            </div>
            <div class="text">AGE</div>
        </div>
        
        <router-link class="contact bullet" to="/work">
            <p>+</p>
            <p>View My Work</p>
        </router-link>
    </section>
</template>
<script>
    import gsap from 'gsap';
    import ScrollTrigger from "gsap/ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);
    export default {
        name: 'home',
        mounted:function () {
            this.parallax();
            this.scrollTrigger();
        },
        methods: {
            parallax () {
                let observer = new IntersectionObserver( (e) => {
                    threshold: [0, 0.25, 0.5, 0.75, 1];
                    e.forEach( (section) => {
                        if (section.isIntersecting) {
                            section.target.classList.add('active');
                        }
                    }); 
                })
                
                let section = document.querySelectorAll('.action');
                section.forEach(sections => observer.observe(sections));
            },
            scrollTrigger () {
                smoothScroll('.container');
                function smoothScroll(content, viewport, smoothness) {
                    content = gsap.utils.toArray(content)[0];
                    smoothness = smoothness || 2.2;

                    gsap.set(viewport || content.parentNode, {overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0});
                    gsap.set(content, {overflow: "visible", width: "100%"});

                    let getProp = gsap.getProperty(content),
                        setProp = gsap.quickSetter(content, "y", "px"),
                        setScroll = ScrollTrigger.getScrollFunc(window),
                        removeScroll = () => content.style.overflow = "visible",
                        killScrub = trigger => {
                            let scrub = trigger.getTween ? trigger.getTween() : gsap.getTweensOf(trigger.animation)[0]; 
                            scrub && scrub.pause();
                            trigger.animation.progress(trigger.progress);
                        },
                        height, isProxyScrolling;

                    function refreshHeight() {
                        height = content.clientHeight;
                        content.style.overflow = "visible"
                        document.body.style.height = height + "px";
                        return height - document.documentElement.clientHeight;
                    }

                    ScrollTrigger.addEventListener("refresh", () => {
                        removeScroll();
                        requestAnimationFrame(removeScroll);
                    });

                    ScrollTrigger.defaults({scroller: content});
                    ScrollTrigger.prototype.update = p => p;

                    ScrollTrigger.scrollerProxy(content, {
                        scrollTop(value) {
                            if (arguments.length) {
                                isProxyScrolling = true;
                                setProp(-value);
                                setScroll(value);
                                return;
                            }
                            return -getProp("y");
                        },
                        scrollHeight: () => document.body.scrollHeight,
                        getBoundingClientRect() {
                            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
                        }
                    });

                    return ScrollTrigger.create({
                        animation: gsap.fromTo(content, {y:0}, {
                            y: () => document.documentElement.clientHeight - height,
                            ease: "none",
                            onUpdate: ScrollTrigger.update
                        }),
                        scroller: window,
                        invalidateOnRefresh: true,
                        start: 0,
                        end: refreshHeight,
                        refreshPriority: -999,
                        scrub: smoothness,
                        onUpdate: self => {
                            if (isProxyScrolling) {
                                killScrub(self);
                                isProxyScrolling = false;
                            }
                        },
                        onRefresh: killScrub // when the screen resizes, we just want the animation to immediately go to the appropriate spot rather than animating there, so basically kill the scrub.
                    });
                }
                gsap.fromTo('.transition-image', {
                    xPercent: 30,
                    yPercent: 70,
                    scale: 2,
                    ease: "true",
                    scrollTrigger: {
                        trigger: ".transition-image",
                        start: "top 50%",
                        end: "bottom 50%",
                        scrub: true,
                        // markers:true
                    }, 
                },{
                    xPercent: -20,
                    yPercent: 50,
                    scale: .3,
                    ease: "true",
                    scrollTrigger: {
                        trigger: ".transition-image",
                        start: "top 50%",
                        end: "bottom 50%",
                        scrub: true
                    }, 
                });

                gsap.to('.circle', {
                    rotation: 50,
                    scale: 2,
                    scrollTrigger: {
                        trigger: ".circle",
                        start: "top 50%",
                        end: "bottom 50%",
                        scrub: true
                    }
                });
            }
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
        .transition-wrap { position: relative; width: 100%;
            .transition-image { position: absolute; top: 0%; left: 27%; }
        }
        .name-wrap {  display: flex; height: 100vh; align-items: center; justify-content: center;
            .name-list {
                display: flex;
                position: relative;
                font-size: 300px;
                font-variation-settings: "wght" 800, "wdth" 125;
                justify-content: center;
                transition: 1s ease;
                &:after {
                    content: "";
                    position: absolute;
                    bottom: 70px;
                    right: -85px;
                    width: 59px;
                    height: 59px;
                    background: #f00;
                    border-radius: 100%;
                    box-shadow: 1px 1px 5px 2px #b35656;
                }
            }
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
            font-variation-settings: 'opsz' 10;
            &:hover { font-variation-settings: 'opsz' 100;
                p {
                    &:nth-child(1) { transition: .5s cubic-bezier(0.4, 0, 1, 1); transform: rotate(360deg); }
                }
            }
            p {  
                &:nth-child(1) { transition: .5s cubic-bezier(0.4, 0, 1, 1); height: 51px; line-height: 40px; }
            }
        }
        .space { 
                position: absolute;
                top: 25vw;
                right: -25vw;
                width: 50vw;
                height: 50vw;
                border-radius: 100%;
                background: #333;
                overflow: hidden;
            &:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0px;
                width: 50vw;
                height: 50vw;
                background: url('../assets/image/common/space-bg.svg') 0 0 repeat;
                background-size: 400px;
                animation: 295s spaceAnimate infinite alternate;
            }
        }
        @keyframes spaceAnimate {
            to {
                transform: rotate(0deg);
            }
            from {
                transform: rotate(-360deg);
            }
        }
        .work { 
            .work-list { 
                .list-item { display: flex; flex-wrap: wrap; flex-direction: row;
                    &:nth-child(even) {
                        flex-direction: row-reverse;
                    }
                    .image { 
                        position: sticky;
                        top: 0px;
                        left: 0px;
                        width: 50%; 
                        align-self: flex-start;
                        img { width: 100%;}
                    } 
                    .description { width: 50%; min-height: 150vh; } 
                }
            }
        } 
    }
</style>
