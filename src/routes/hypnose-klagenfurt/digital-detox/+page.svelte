<script lang="ts">
    import { page } from '$app/stores';
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PriceTable from '$lib/components/PriceTable.svelte';
    import Digitaldetox from "$lib/images/digitaldetox-min.webp";
</script>

<svelte:head>
    <title>Leistungen - Digital Detox</title>
    <link rel="preload" as="image" href={Digitaldetox} />
    <meta
        name="description"
        content="Ein Tag ohne Smartphone ist kein Weltuntergang. Digital Detox durch Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Digitaldetox}
                alt="Smartphone Nahaufnahme"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Digital Detox</span>
        </div>
        <div class="cell service">
            <h1 class="decorator-center">Digital Detox</h1>
            <p class="text important-paragraph mb1 text-center">
                Ein Tag ohne Smartphone ist kein Weltuntergang
            </p>
            <p class="text text-margin-bottom">
                Instagram, WhatsApp, TikTok und andere Soziale Medien
                beeinflussen uns täglich auf unterschiedliche Weise. Dieses
                Thema betrifft nicht nur Jugendliche. Auch Erwachsene bleiben
                vor der Informationsflut nicht verschont. Viele Menschen nutzen
                die Sozialen Medien jedoch in einem Übermaß oder fühlen sich übermäßig
                unwohl, wenn das Handy nicht in Reichweite ist.
            </p>
            <p class="text text-margin-bottom">
                Eine häufige Ursache dafür ist Dopamin: ein Glückshormon, das
                bei der Handy-Nutzung ausgeschüttet wird. Es führt dazu, dass
                wir uns gut fühlen und diesen Zustand aufrechterhalten wollen.
                Es entsteht das Bedürfnis nach mehr. Mit jedem Klingeln oder
                Vibrieren des Handys findet eine Art Konditionierung statt: Der
                Griff nach dem Handy führt zur Dopamin-Ausschüttung. Wir fühlen
                uns gut.
            </p>
            <p class="text text-margin-bottom">
                In der heutigen Zeit ist es daher wichtig, sich zu fragen, warum
                wir die Sozialen Medien nutzen und wie viel wir wirklich davon
                brauchen. Es geht nicht darum, Soziale Medien zu verteufeln,
                sondern vielmehr darum, selbst zu entscheiden, wie wir damit
                umgehen möchten und eine gesunde Einstellung dazu zu entwickeln.
            </p>
            <p class="important-paragraph mt3 mb1 text-center">
                Ich freue mich darauf, Sie kennenzulernen.
            </p>
        </div>
        <div class="cell prices">
            <h2 class="decorator-center">Preisliste</h2>
            <PriceTable price={120}></PriceTable>
        </div>
    </div>
</section>

<style lang="scss">
    .grid {
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
