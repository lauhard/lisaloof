<script lang="ts">
    import Selbstwert from "$lib/images/selbstwert-min.webp";
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PriceTable from "$lib/components/PriceTable.svelte";

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Leistungen - Selbstwert steigern</title>
    <link rel="preload" as="image" href={Selbstwert} />
    <meta
        name="description"
        content="Selbstwert steigern mittels Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Selbstwert}
                alt="Papier am Fenster mit der Aufschrift mindfulness"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Selbstwertsteigerung</span>
        </div>
        <div class="cell service">
            <h1 class="decorator-center">Selbswert steigern durch Hypnose</h1>
            <p class="important-paragraph mb1 text-center">
                Sie sind gut so wie Sie sind!
            </p>
            <p class="text text-margin-bottom">
                Wir alle sind viel zu oft von negativen Einflüssen umgeben, die
                unser Selbstwertgefühl beeinträchtigen. Es ist daher wichtig,
                dass wir uns mit unseren Gefühlen, Gedanken und Handlungen
                auseinandersetzen. Indem wir Verantwortung für unser Handeln
                übernehmen, können wir selbstbewusst durchs Leben gehen. Des
                Weiteren wirkt der Selbstwert als ein wichtiger Schutzfaktor
                gegen Stress und ist somit ein positiver Faktor für unsere
                Widerstandskraft und Gesundheit.
            </p>
            <p class="important-paragraph mt3 mb1 text-center">
                Ich würde mich freuen, Sie kennenzulernen und Sie darin zu unterstützen, Ihren Selbstwert zu steigern und sich einfach wohlzufühlen.
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
