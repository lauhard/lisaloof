<script lang="ts">
	import { page } from '$app/stores';
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PriceTable from '$lib/components/PriceTable.svelte';
    import Rauchfrei from "$lib/images/rauchfrei-min.webp";
    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Leistungen - Raucherentwoehnung</title>
    <link rel="preload" as="image" href={Rauchfrei} />
    <meta
        name="description"
        content="Sie wollen endlich rauchfrei werden? Raucherentwöhnung durch Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Rauchfrei}
                alt="abgebrannte Zigarette"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Raucherentwöhnung</span>
        </div>

        <div class="cell service">
            <h1 class="decorator-center">
                Raucherentwöhnung durch Hypnose</h1>
            <p class="important-paragraph mb1 text-center">Rauchfrei werden und Lebensqualität steigern</p>
            <p class="text text-margin-bottom">
                Zigaretten enthalten viele äußerst toxische Substanzen, wie
                Stickstoffoxide, Schwefeloxide und Ammoniak. Allein in
                Österreich sterben im Jahr ungefähr 14.000 Menschen an
                tabakinduzierten Krankheiten, wobei das Rauchen zu dem größten
                vermeidbaren Risikofaktor für viele verschiedene Krankheiten
                zählt. Sie sind sich dessen jedoch bereits bewusst, da Sie sich
                hier nach Möglichkeiten zur Raucherentwöhnung durch Hypnose
                informieren. Das zeigt Ihren Entschluss, etwas zu verändern.
            </p>
            <p class="important-paragraph mt3 mb1 text-center">
                Ich freue mich darauf, Sie bei Ihrem Vorhaben, das Rauchen
                aufzugeben, zu unterstützen. <br> Zusammen können wir Ihr
                Ziel erreichen.
            </p>
        </div>
        <div class="cell prices">
            <h2 class="decorator-center">Preisliste</h2>
            <PriceTable price={130}></PriceTable>
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
