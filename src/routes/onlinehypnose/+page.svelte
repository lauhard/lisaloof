<script lang="ts">
	import { page } from '$app/stores';
    import Checkmark from "$lib/svg/checkmark.svg";
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Leistungen - Online Hypnose</title>
    <link rel="preload" as="image" href={OnlineHypnose} />
    <meta
        name="description"
        content="Hypnose, egal von welchem Ort. Online Hypnose mit Lisa Marie Loof BSc, diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img class="hero-image"
                src={OnlineHypnose}
                alt=""
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Online Hypnose</span>
        </div>
        <div class="cell content">
            <h2 class="decorator-center">
                Funktioniert Online Hynose?
            </h2>
            <p>
                Die Antwort lautet, ja warum denn nicht. Wir arbeiten in Hypnose
                mit Ihrem Unterbewusstsein und dafür müssen Sie sich nicht
                physisch mit mir in einem Raum befinden.
            </p>
            <p>
                Es ist also möglich, unabhängig von Ihrem Standort „Ihre Zeit
                für Hypnose und Weiterentwicklung“ in Anspruch zu nehmen und an
                Ihren Themen zu arbeiten.
            </p>
            <p>
                Wenn Sie also nicht aus dem Raum Klagenfurt kommen und gerne mit
                mir zusammenarbeiten wollen, ist Online Hypnose die perfekte
                Möglichkeit dafür.
            </p>
            <p class="important-paragraph" >Voraussetzungen für eine erfolgreiche Online Hypnose:</p>
            <div class="checklist">
                <div class="line">
                    <img
                        alt="self-Logo"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>Eine stabile Internetverbindung</p>
                </div>
                <div class="line">
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
                <div class="line">
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
                <div class="line">
                    <img
                        alt="self-Logo"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Die Umgebung sollte entsprechend ruhig sein und ihre
                        Privatsphäre gewahrt
                    </p>
                </div>
            </div>
        </div>
        <div class="cell contact">
            <p>
                Falls Sie weitere Fragen haben sollten, melden Sie sich gerne
                persönlich bei mir.
            </p>
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
    .hero {
        margin-top: 3rem;
    }
   
    .content {
        .important-paragraph{
            margin:1rem 0 .5rem 0;
        }
        padding: var(--content-padding, 0 1rem);
        justify-self: center;
        .checklist {
            width: 100%;
            .line {
                width: 100%;
            }
        }
    }
    .contact {
        max-width: var(--content-width);
        justify-self: center;
        min-height: 300px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 30%));
        grid-template-rows: minmax();
        justify-content: center;
    }
</style>
