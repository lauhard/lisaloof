<script lang="ts">
    import LogoSvg from "$lib/components/svgs/LogoSvg.svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/svgs/ArrowDownSvg.svelte";
    import { onMount } from "svelte";
    import { wait } from "$lib/utils";
    import { SliceZone } from "@prismicio/svelte";
    import Popup from '$lib/components/slices/Popup.svelte';

    import type { PrismicDocument } from "@prismicio/client";
    import type { PageServerData } from "./$types";


    export let data: PageServerData;
    export let document:PrismicDocument = data?.document as PrismicDocument;
    const popup = document.data.body.filter((s: { slice_type: string; }) =>s.slice_type == "popup");

    $:showPopup=false;

    onMount(async () => {
        let ok = await wait(5000);
        showPopup = ok=="finished" ? true : false;
    });

</script>

<svelte:head>
    <title>Startseite</title>
    <!-- <link rel="preload" as="image" href={profileImage} />
    <link rel="preload" as="image" href={hypose} /> -->
</svelte:head>

<div class="background-svg-banner">
    <div class="svg-wrapper">
        <LogoSvg
            className="background-svg"
            height="80vh"
            animation={false}
            --leaves-main="#f0f0f035"
            --leaves-overlay="#f0f0f035"
            --tree-color="#f0f0f035"
            --tree-overlay="#f0f0f035"
            --svg-stroke-width="0px"
        />
    </div>
</div>

<div class="section">
    {#if showPopup}
        <!-- content here -->
        <SliceZone slices={popup} components={{"popup":Popup}} />
    {/if}
    <RoundButton
        classNames="hover scroll-down"
        title="scroll to the next headline"
    >
        <a
            href="/#willkommen"
            aria-label="links to section 2"
            style="padding:0 10px;"
        >
            <ArrowDownSvg width="20px" height="30px" --fill="#fff" />
        </a>
    </RoundButton>
</div>

<style lang="scss">
     .section {
        --section-min-height: 100vh;
        --section-height: 100%;
        --section-width: 100%;
        --section-margin: 90px 0 0 0;
        --section-padding: 0 0 0 0;
        height: var(--section-height);
        min-height: var(--section-min-height);
        width: var(--section-width);
        margin: var(--section-margin);
        padding: var(--section-padding);
        background-color: var(--bg-section);
        position: relative;
        :global(.scroll-down) {
            display: flex;
            position: absolute;
            top: calc( 100vh - 150px);
            min-width: 50px;
            width: 50px;
            min-height: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid white;
            left: calc(50% - 22.5px);
            background: var(--secondary);
            z-index: 9999;
            &:hover {
                background: var(--secondary-hover) !important;
                :global(.base) {
                    --fill:var(--attention);
                }
            }
        }
    }
    .background-svg-banner {
        overflow: hidden;
        width: 100%;
        background-color: var(--primary);
        position: absolute;
        bottom: 10vh;
        height: 100vh;
        max-height: 64vh;
        min-height: 300px;
        .svg-wrapper {
            position: absolute;
            left: -15vw;
            bottom: -50vh;
        }
    }
</style>
