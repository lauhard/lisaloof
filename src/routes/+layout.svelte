<script lang="ts">
    import "../app.css";


    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import type { LayoutData } from "./$types";
    import { fade } from "svelte/transition";
    import Navigation from "$lib/components/Navigation.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Footer from "$lib/components/Footer.svelte";
   



    inject({ mode: dev ? 'development' : 'production' });




    export let data: LayoutData;



    const offset = 400;

    let oldScroll: number | undefined = undefined;

    $: scrollY = 0;
    $: innerWidth = 0;
    $: hide = false;
    $: if (scrollY) {
        if (oldScroll === undefined) {
            oldScroll = scrollY;
        }
        if (oldScroll < scrollY && scrollY > offset) {
            hide = true;
        } else {
            hide = false;
        }
        oldScroll = scrollY;
    }
</script>
<svelte:window bind:scrollY bind:innerWidth />
{#key data.currentRoute}
    <div
        class="app"
        in:fade={{ duration: 250, delay: 10 }}
        out:fade={{ delay: 10, duration: 250 }}
    >
        <div class="content-wrapper" class:scroll={!hide && scrollY>0} class:hide={hide === true}>
            <header>
                <Logo />
                <Navigation />
            </header>
        </div>
        <!-- content here -->
        <main>
            <slot />
        </main>
       <Footer></Footer>
    </div>
{/key}


<style lang="scss">
    :global(.navigation) {
        margin-top: 5px;
    }
    :global(.logo) {
        z-index: 999;
        padding-top: 10px;
    }
    .hide {
        opacity: 0;
        height: 0;
        transition: all 0.2s ease-in-out;
    }
    .scroll {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
        opacity: 1;
        transition: all 0.5s ease-in-out;
        transition: all .2s ease-in-out;
        background-color:#fff !important;
        height: 87px !important;
    }
    .content-wrapper {
        width: 100vw;
        height: 85px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        z-index: 999;
        position: fixed;
        top: 0;
        transition: all .5s ease-in-out;
        header {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            z-index: 999;
            width: 100%;
            max-width: var(--content-width);
            justify-self: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            opacity: 1;
            transition: all .5s ease-in-out;
        }
    }
    .app {
        width: 100%;
        min-height: 100vh;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        main {
            min-height: 100vh;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 10rem;
        }
        @media screen and (max-width: 680px) {
            :global(#logoSvg) {
                right: 15px;
            }
        }
    }
</style>