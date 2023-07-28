<script lang="ts">
	// import instagram from '$lib/svg/instagram.svg';
    import "../app.css";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";
    import type { LayoutData } from "./$types";
    import { fade } from "svelte/transition";
    import Navigation from "$lib/components/Navigation.svelte";
    import Logo from "$lib/components/Logo.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { SvelteToast } from "@zerodevx/svelte-toast";
    import { onMount } from "svelte";
    import Contactbox from "$lib/components/Contactbox.svelte";
    import SocialMedia from '$lib/components/SocialMedia.svelte';

    inject({ mode: dev ? "development" : "production" });

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
    onMount(() => {});
</script>

<svelte:head />
<svelte:window bind:scrollY bind:innerWidth />
{#key data.currentRoute}

<div
    class="app"
    in:fade={{ duration: 250, delay: 10 }}
    out:fade={{ delay: 10, duration: 250 }}
    >
    <SocialMedia {hide}></SocialMedia>

    <div
        class="content-wrapper"
        class:scroll={!hide && scrollY > 0}
        class:hide={hide === true}
        >
        <header>
            <Logo />
            <Navigation/>
        </header>
    </div>
    
    <main>
        <slot />
    </main>

    {#if data.currentRoute !== "/kontakt"}
        <Contactbox></Contactbox>
    {/if}

    <Footer />
</div>
{/key}
<SvelteToast
    options={{ classes: ["info"], duration: 8000, intro: { y: -64 } }}
/>

<style lang="scss">
    // :global(._toasterContainer) {
    //     ul,
    //     li {
    //         list-style-type: none !important;
    //         list-style: none !important;
    //     }
    //     list-style-type: none !important;
    //     list-style: none !important;
    // }
    // :global(._toastItem) {
    //     ul,
    //     li {
    //         list-style-type: none !important;
    //         list-style: none !important;
    //     }
    //     list-style-type: none !important;
    //     list-style: none !important;
    // }
    :global(._toastBar) {
        background: var(
            --toastBarBackground,
            rgba(243, 149, 33, 0.75)
        ) !important;
        list-style: none !important;
    }
    // :global(._toastMsg) {
    //     ul,
    //     li {
    //         list-style-type: none !important;
    //         list-style: none !important;
    //     }
    //     list-style-type: none !important;
    //     list-style: none !important;
    // }
    :global(.logo) {
        z-index: 999;
        padding-left: 5px;
    }
    .hide {
        opacity: 0;
        height: 0;
        transition: all 0.2s ease-in-out;
        display: none !important;
    }
    .scroll {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
        opacity: 1;
        transition: all 0.5s ease-in-out;
        transition: all 0.2s ease-in-out;
        background-color: #fff !important;
        // height: 87px !important;
        z-index: 10;
        // transition: height 0.5s ease-in-out;
    }
    .content-wrapper {
        width: 100vw;
        height: 85px;
        // height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        // background-color: #802323;
        z-index: 999 !important;
        position: fixed;
        width: 100%;
        top: 0;
        transition: all 0.5s ease-in-out;
        header {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            z-index: 999;
            background-color: #fff;
            width: 100%;
            height: 100%;
            max-width: var(--content-width);
            justify-self: center;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            opacity: 1;
            transition: all 0.5s ease-in-out;
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
        // background: linear-gradient(#ffffff 0%, #5fc9bb61 35%, #d0bd2c3e 100%);
        // background: linear-gradient(#ffffff 0%, #76d9cc3b 40%, #d1c7195e 100%);
        // background: linear-gradient(#d9d9d9 0%, #ffffff 60%, #d1c7195e 100%);
        // background: linear-gradient(180deg, #aae3ddb2 0%, #ffffff 30%,  #ffffff 70%, #45a1a8b8 100%);
        // background: linear-gradient(180deg, #45a1a889 0%, #ffffff 20%,  #ffffff 60%, #45a1a889 80%);
        // background: linear-gradient(180deg, #378D93 0%, #ffffff 20%,  #ffffff 60%, #378D93 80%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #bab777d4 85%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #c4b26aae 88%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #c0bb60a8 88%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #c5be4aa8 88%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #77b5bad4 85%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #56d3d9b3 85%);
        // background: linear-gradient(180deg, #378d93db 0%, #ffffff 25%,  #ffffff 60%, #7bced3a5 85%);
        background: linear-gradient(
            180deg,
            #378d93db 0%,
            #ffffff 25%,
            #ffffff 60%,
            #77b5bac8 85%
        );
        // background: linear-gradient(#77b5ba9c 0%, #ffffff 30%, #77b5ba9c 100%);

        main {
            min-height: 100vh;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 7rem;
        }
        @media screen and (max-width: 1310px) {
            // .insta-button{
            //     left: 260px;
            // }
           
        }
        @media screen and (max-width: 680px) {
            // .insta-button{
            //     right: 80px;
            //     left: unset;
            // }
            :global(#logoSvg) {
                right: 15px;
            }
        }
       
    }
</style>
