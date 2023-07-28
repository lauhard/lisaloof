<script lang="ts">
	import { page } from '$app/stores';
    import Checkmark from "$lib/svg/checkmark.svg";
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PriceTable from '$lib/components/PriceTable.svelte';

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Leistungen - Online Hypnose</title>
    <link rel="preload" as="image" href={OnlineHypnose} />
    <meta
        name="description"
        content="Hypnose egal von welchem Ort. Online Hypnose mit Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src="{OnlineHypnose}"
                alt="Frau mit Laptop auf der Couch"
                srcset=""
                width="100%"
                height="300px"
            />
            <h1>Online Hypnose</h1>
        </div>
        <div class="cell service">
            <p class="decorator-center">Hypnose bequem von Zuhause</p>
            <p class="important-paragraph mb1 text-center">
                Funktioniert Online Hypnose?
            </p>
            <p class="text text-margin-bottom">
                Die Antwort lautet, ja warum denn nicht. Wir arbeiten in Hypnose
                mit Ihrem Unterbewusstsein und dafür müssen Sie sich nicht
                physisch mit mir in einem Raum befinden.
                Es ist also möglich, unabhängig von Ihrem Standort „Ihre Zeit
                für Hypnose und Weiterentwicklung“ in Anspruch zu nehmen und an
                Ihren Themen zu arbeiten.
            </p>
            <p class="text important-paragraph mb1 text-center ">
                Voraussetzungen für eine erfolgreiche Online Hypnose
            </p>
            <div class="checklist">
                <div class="icon-line">
                    <img
                        alt="self-Logo"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>Eine stabile Internetverbindung</p>
                </div>
                <div class="icon-line">
                    <img
                        alt="self-Logo"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Einen Laptop, ein Tablet oder Smartphone mit einer
                        Webcam, Mikrofon und Lautsprechern <br />(Hierbei
                        sollten Tablet oder Smartphone fest installiert sein,
                        damit Sie Ihre Hände frei haben)
                    </p>
                </div>
                <div class="icon-line">
                    <img
                        alt="self-Logo"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Einen Raum oder Ort mit einem bequemen Stuhl, einer
                        Couch oder Sessel
                    </p>
                </div>
                <div class="icon-line">
                    <img
                        alt="self-Logo"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p class="text">
                        Die Umgebung sollte entsprechend ruhig sein und ihre
                        Privatsphäre gewahrt
                    </p>
                </div>
            </div>
            <p class="text important-paragraph mt3 mb1 text-center">
                Wenn Sie also nicht aus dem Raum Klagenfurt kommen und gerne mit
                mir zusammenarbeiten wollen, ist Online Hypnose die perfekte
                Möglichkeit dafür.
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
    .service {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width);
        width: 100%;
        justify-self: center;
        flex-direction: column;
        margin-bottom: 2rem;
        .checklist {
            display: flex;
            justify-content: center;
            flex-direction: column;
            position: relative;
            height:auto;
            .icon-line{
                max-width:800px;
                width:100%;
                align-self: center;
                justify-self: center;
            }
        } 
    }
   .prices {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width);
    }
</style>
