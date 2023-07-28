<script lang="ts">
	import { page } from '$app/stores';
    import Pruefungsangst from "$lib/images/pruefungsangst-min.webp";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PriceTable from '$lib/components/PriceTable.svelte';

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Leistungen - Entspannt in die Prüfung / Entspannt vortragen</title>
    <link rel="preload" as="image" href={Pruefungsangst} />
    <meta
        name="description"
        content="Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Pruefungsangst}
                alt=""
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Entspannt in die Prüfung</span>
        </div>
        <div class="cell service">
            <h1 class="decorator-center">Entspannt in die Prüfung - Entspannt vortragen</h1>
            <p class="important-paragraph mb1 text-center">Meistern Sie Prüfungen, Vorträge oder Präsentationen durch Hypnose</p>
            <p class="text text-margin-bottom">
                Wer kennt es nicht? Es steht eine Prüfung oder ein
                wichtiger Vortrag an und die Aufregung steigt. Wir
                bekommen schwitzige Hände oder unser Herzschlag
                erhöht sich. Bei manchen Menschen kann dies sogar zu
                einem kompletten Blackout führen, was sie nachhaltig
                beschäftigt oder belastet. Mittels Hypnose ist es
                möglich, sich diese Situationen genauer anzuschauen
                und zu verändern.
            </p>
            <p class="important-paragraph mt3 mb1 text-center">
                Ich möchte Sie darin unterstützen, entspannter
                Vorträge zu halten oder Prüfungen zu meistern und
                zusätzlich Ihr Selbstbewusstsein zu stärken.
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
