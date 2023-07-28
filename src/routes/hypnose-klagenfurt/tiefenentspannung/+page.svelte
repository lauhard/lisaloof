<script lang="ts">
	import { page } from '$app/stores';
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PriceTable from '$lib/components/PriceTable.svelte';
	import Tiefenentspannung from '$lib/images/tiefenentspannung-min.webp';

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Leistungen - Tiefenentspannung</title>
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <meta
        name="description"
        content="Tiefenentspannung mittels Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Tiefenentspannung}
                alt="abgebrannte Zigarette"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Tiefenentspannung</span>
        </div>
        <div class="cell service">
            <h1 class="decorator-center">Tiefenentspannung</h1>
            <p class="important-paragraph mb1 text-center">Den Körper und Geist in Einklang bringen</p>
            <p class="text text-margin-bottom">
                Wir befinden uns in einem Zeitalter, welches durch
                Schnelllebigkeit und Hektik geprägt ist. Wir nehmen
                uns viel zu selten den Raum und die Zeit für uns
                selbst. Einfach mal entspannen und uns eine Auszeit
                vom Alltag nehmen, um unseren Körper und Geist in
                Einklang zu bringen. Hierfür bietet die
                Tiefenentspannung mittels Hypnose die perfekten
                Rahmenbedingungen.
            </p>
            <p class="important-paragraph mt3 mb1 text-center">
                Ich würde mich freuen, Sie kennenzulernen und Sie auf dem Weg der Tiefenentspannung zu begleiten
            </p>
        </div>
        <div class="cell prices">
            <h2 class="decorator-center">Preisliste</h2>
            <PriceTable price={120}></PriceTable>
        </div>
    </div>
</section>

<style lang="scss">
    .grid{
        --grid-row-gap: 2rem;
        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);
        height: var(--grid-height);
        width: var(--grid-width);
        min-height: var(--grid-min-height);
        grid-row-gap: var(--grid-row-gap, 0px);
        box-sizing: border-box;
        overflow: hidden;
        max-width: var(--content-width);
        margin: 0 auto;
    }
    .service, .prices {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width);
    }
</style>
