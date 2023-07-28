<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
    import Rauchfrei from "$lib/images/rauchfrei-min.webp";
    import Digitaldetox from "$lib/images/digitaldetox-min.webp";
    import Pruefungsangst from "$lib/images/pruefungsangst-min.webp";
    import Selbstwert from "$lib/images/selbstwert-min.webp";
    import Tiefenentspannung from "$lib/images/tiefenentspannung-min.webp";
    import Leistungen from "$lib/images/leistungen.webp";
    import AnimatedArrow1 from "$lib/components/AnimatedArrow1.svelte";

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Hypnose Leistungen</title>
    <link rel="preload" as="image" href={Rauchfrei} />
    <link rel="preload" as="image" href={Digitaldetox} />
    <link rel="preload" as="image" href={Pruefungsangst} />
    <link rel="preload" as="image" href={Selbstwert} />
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <link rel="preload" as="image" href={Leistungen} />
    <meta
        name="description"
        content="Raucherentwöhnung, Selbstwert oder Reinkarnation, egal welches Thema Sie angehen möchten, ich arbeite mit Ihnen und einem individuellen Hypnose Konzept."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Leistungen}
                alt="Baum auf einem Feld"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Leistungen</span>
        </div>
        <div class="cell content">
            <h1 class="decorator-center">
                Hypnose und Weiterentwicklung in Klagenfurt
            </h1>
            <!-- <p class="text">
                Im folgenden Abschnitt nenne ich einige Beispiele für
                Anwendungsbereiche von Hypnose. Es ist jedoch wichtig zu
                beachten, dass Hypnosearbeit auch für andere Themengebiete
                eingesetzt werden kann. Sie können sich gerne mit jedem Anliegen
                bei mir melden. Sollten Sie Interesse an einer Sitzung zur
                Regression oder Reinkarnation haben, biete ich ebenfalls die
                Möglichkeit einer Zusammenarbeit an.
            </p> -->
            <p class="important-paragraph mb1 text-center">
                Meine Leistungen sind folgendermaßen aufgebaut
            </p>

            <div class="paragraph-wrapper">
                <div class="paragraph-counter">
                    <div class="paragraph-number"><span>1</span></div>
                    <p class="text text-margin-bottom">
                        Die erste Einheit beinhaltet ein kostenloses und
                        unverbindliches Vorgespräch. Hierbei möchte ich mir ein
                        Bild von Ihren Erwartungen oder bereits vorhandenen
                        Hypnose-Erfahrungen machen. Danach werden wir gemeinsam
                        Ihr persönliches Hypnose-Konzept besprechen. Wenn Sie
                        sich nach dem Vorgespräch dazu entscheiden, mir Ihr
                        Vertrauen zu schenken, stellen wir die Weichen, um
                        gemeinsam an Ihrem Thema zu arbeiten.
                    </p>
                </div>
                <div class="paragraph-counter">
                    <div class="paragraph-number"><span>2</span></div>
                    <p class="text text-margin-bottom">
                        In der zweiten Einheit können Gedanken und Gefühle,
                        welche nachträglich aufgekommen sind besprochen werden.
                        Wir arbeiten intensiv lösungs- und ressourcenorientiert
                        an Ihrem Thema.
                    </p>
                </div>
                <div class="paragraph-counter">
                    <div class="paragraph-number"><span>3</span></div>
                    <p class="text">
                        In der dritten Einheit (optional) möchte ich Ihnen
                        anbieten, je nach Wunsch weiter an Ihren Themen zu arbeiten, neu aufgekommenes zu besprechen oder die Selbsthypnose bei Ihnen zu verankern,
                        sodass Sie die Möglichkeit haben, auch selbst in Hypnose
                        zu gehen und zu arbeiten.
                    </p>
                </div>
            </div>
        </div>
        <div class="cell services">
            <h2 class="decorator-center">Hypnose Leistungen</h2>
                <p class="important-paragraph mb1 text-center">
                    Sie können sich gerne mit jedem Anliegen bei mir melden
                </p>
                <p class="text text-margin-bottom text-center">
                    Hypnosearbeit kann für verschiedenste Themengebiete
                    eingesetzt werden. Sollten Sie Interesse an einer Sitzung
                    zur Regression oder Reinkarnation haben, biete ich ebenfalls
                    die Möglichkeit einer Zusammenarbeit an.
                </p>
                <!-- <article class="important-box">
                    <p>
                        Hypnosearbeit kann für verschiedenste Themengebiete
                        eingesetzt werden kann. Sollten Sie Interesse an einer
                        Sitzung zur Regression oder Reinkarnation haben, biete
                        ich ebenfalls die Möglichkeit einer Zusammenarbeit an.
                    </p>
                    <p>
                        Sie können sich auch gerne mit Ihren Anliegen bei mir
                        melden.
                    </p>
                </article> -->
                <div class="grid subgrid-services">
                    <div class="subgrid-cell service raucherentwoehnung">
                        <div class="service-image">
                            <img
                                src={Rauchfrei}
                                alt="rauchfrei"
                                srcset=""
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>
                    <div
                        class="subgrid-cell service read-more raucherentwoehnung-description"
                    >
                        <div class="service-text">
                            <h3 class="text-center mb1">
                                Raucherentwöhnung
                            </h3>
                            <p>
                                Sie wollen endlich rauchfrei werden und wieder
                                gesünder leben?
                            </p>
                            <p class="text mb1">
                                Hier gehts zur Raucherentwöhnung
                            </p>
                            <a
                                class="arrow-wrapper"
                                title="erfahren Sie mehr zu Raucherentwöhnung"
                                href="/hypnose-klagenfurt/raucherentwoehnung"
                                type="button"
                                aria-label="auto"
                            >
                                <AnimatedArrow1
                                    classNames="base"
                                    direction="right"
                                    --direction="right"
                                    --arrow-length="50px"
                                    --arrow-length-hover="250px"
                                    --arrow-head-size="20px"
                                    --arrow-color-hover="var(--secondary)"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="subgrid-cell service online-hypnose">
                        <div class="service-image">
                            <img
                                src={OnlineHypnose}
                                alt="Online Hypnose"
                                srcset=""
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>
                    <div
                        class="subgrid-cell service read-more online-hypnose-description"
                    >
                        <div class="service-text">
                            <h3 class="text-center mb1">
                                Online Hypnose
                            </h3>
                            <p class="text">
                                Sie befinden Sich nicht in Klagenfurt oder haben
                                keine Möglich keit mich zu besuchen?
                            </p>
                            <p class="text mb1">
                                Hier gehts zur Online Hypnose
                            </p>
                            <a
                                class="arrow-wrapper left"
                                title="erfahren Sie mehr zu Online Hypnose"
                                href="/hypnose-klagenfurt/online-hypnose"
                                type="button"
                                aria-label="auto"
                            >
                                <AnimatedArrow1
                                    classNames="base"
                                    direction="left"
                                    --arrow-length="50px"
                                    --arrow-length-hover="250px"
                                    --arrow-head-size="20px"
                                    --arrow-color-hover="var(--secondary)"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="subgrid-cell service digital-detox">
                        <div class="service-image">
                            <img
                                src={Digitaldetox}
                                alt="Online Hypnose"
                                srcset=""
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>
                    <div
                        class="subgrid-cell service read-more digital-detox-description"
                    >
                        <div class="service-text">
                            <h3 class="text-center mb1">
                                Digital Detox
                            </h3>
                            <p class="text">
                                Sie werden nervös wenn Ihr Smartphone nicht bei
                                Ihnen ist?
                            </p>
                            <p class="text mb1">
                                Hier gehts zu Digital Detox
                            </p>
                            <a
                                class="arrow-wrapper right"
                                title="erfahren Sie mehr zu Digital Detox"
                                href="/hypnose-klagenfurt/digital-detox"
                                type="button"
                                aria-label="auto"
                            >
                                <AnimatedArrow1
                                    classNames="base"
                                    direction="right"
                                    --arrow-length="50px"
                                    --arrow-length-hover="250px"
                                    --arrow-head-size="20px"
                                    --arrow-color-hover="var(--secondary)"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="subgrid-cell service pruefungsangst">
                        <div class="service-image">
                            <img
                                src={Pruefungsangst}
                                alt="Prüfungsangst"
                                srcset=""
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>
                    <div
                        class="subgrid-cell service read-more pruefungsangst-description"
                    >
                        <div class="service-text">
                            <h3 class="text-center mb1">
                                Entspannt in die Prüfung <br /> Entspannt Vortragen
                            </h3>
                            <p>
                                Prüfungen versetzen Sie in den Ausnahmezustand
                                oder es fällt Ihnen schwer vor Menschen zu
                                sprechen?
                            </p>
                            <p class="text mb1">
                                Hier erfahren Sie mehr
                            </p>
                            <a
                                class="arrow-wrapper left"
                                title="erfahren Sie mehr zu Entspannt in die Prüfung Entspannt Vortragen"
                                href="/hypnose-klagenfurt/entspannt-in-die-pruefung"
                                type="button"
                                aria-label="auto"
                            >
                                <AnimatedArrow1
                                    classNames="base"
                                    direction="left"
                                    --arrow-length="50px"
                                    --arrow-length-hover="250px"
                                    --arrow-head-size="20px"
                                    --arrow-color-hover="var(--secondary)"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="subgrid-cell service tiefenentspannung">
                        <div class="service-image">
                            <img
                                src={Tiefenentspannung}
                                alt="Prüfungsangst"
                                srcset=""
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>
                    <div
                        class="subgrid-cell service read-more tiefenentspannung-description"
                    >
                        <div class="service-text">
                            <h3 class="text-center mb1">Tiefenentspannung</h3>
                            <p class="text">
                                Sie können nicht schlafen oder sind oft
                                gestresst?
                            </p>
                            <p class="text mb1">Hier gehts zur Tiefenentspannung</p>
                            <a
                                class="arrow-wrapper"
                                title="erfahren Sie mehr zum Thema Tiefenentspannung"
                                href="/hypnose-klagenfurt/tiefenentspannung"
                                type="button"
                                aria-label="auto"
                            >
                                <AnimatedArrow1
                                    classNames="base"
                                    direction="right"
                                    --arrow-length="50px"
                                    --arrow-length-hover="250px"
                                    --arrow-head-size="20px"
                                    --arrow-color-hover="var(--secondary)"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="subgrid-cell service selbstwert-steigern">
                        <div class="service-image">
                            <img
                                src={Selbstwert}
                                alt="Papier am Fenster mit der Aufschrift mindfulness"
                                srcset=""
                                width="100%"
                                height="300px"
                            />
                        </div>
                    </div>
                    <div
                        class="subgrid-cell service read-more selbstwert-steigern-description"
                    >
                        <div class="service-text">
                            <h3 class="text-center mb1">Selbstwert steigern</h3>
                            <p>
                                Sie möchten an Ihren Selbsbewusstein arbeiten oder negative Gewohnheiten ablegen?
                            </p>
                            <p class="text mb1">Hier gehts zur Selbstwertsteigerung</p>
                            <a
                                class="arrow-wrapper left"
                                title="erfahren Sie mehr zum Thema Selbstwertsteigerung"
                                href="/hypnose-klagenfurt/selbstwert-steigern"
                                type="button"
                                aria-label="auto"
                            >
                                <AnimatedArrow1
                                    classNames="base"
                                    direction="left"
                                    --arrow-length="50px"
                                    --arrow-length-hover="250px"
                                    --arrow-head-size="20px"
                                    --arrow-color-hover="var(--secondary)"
                                />
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>

<style lang="scss">
    .grid {
        --grid-row-gap: 2rem;
        padding: var(--grid-padding);
        background-color: var(--bg-grid);
        min-height: var(--grid-min-height);
        height: var(--grid-height);
        width: var(--grid-width);
        grid-gap: var(--grid-gap, 0px);
        grid-row-gap: var(--grid-row-gap, 0px);
        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);
        box-sizing: border-box;
        overflow: hidden;
        max-width: var(--content-width);
        margin: 0 auto;
    }
    .content {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width, 1240px);
        box-sizing: border-box;
        position: relative;
        background: var(--bg-content-wrapper, transparent);
        height: 100%;
        width: 100%;
        .paragraph-counter {
            padding: 0 0.5rem 0.5rem 0.5rem;
            display: flex;
            flex-direction: row;
            height: 100%;
            margin-right: 2rem;
            box-sizing: border-box;
            .paragraph-number {
                font-weight: bold;
                height: auto;
                min-width: 2rem;
                min-height: 2rem;
                height: 2rem;
                margin: 0;
                align-items: start;
                padding: 0;
                box-sizing: border-box;
                font-size: 2rem;
                position: relative;
                span {
                    height: 100%;
                    position: absolute;
                    top: -9px;
                    color: var(--primary);
                }
            }
        }
    }
    .services {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width, 1240px);
        .subgrid-services {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 420px));
            grid-gap: 5px;
            max-width: 900px;
            width: 100%;
            height: auto !important;
            justify-self: center;
            justify-content: center;
            margin: 0 auto;
        }
        .subgrid-cell {
            min-height: 300px;
            max-height: 420px;
            height: 100%;
            width: 100%;
            // aspect-ratio: 1;
            min-height: 420px;
            height: 420px;
            width: 420px;
            justify-self: center;
            -webkit-transition: all 0.3s;
            -moz-transition: all 0.3s;
            -o-transition: all 0.3s;
            transition: all 0.3s;
            transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -webkit-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            p {
                justify-self: center;
                text-align: center;
            }
        }
        .service-text {
            padding: 2rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            position: relative;
            .arrow-wrapper {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                position: absolute;
                display: flex;
                flex-direction: column;
                bottom: -13px;
                height: 55px;
                right: 20%;
            }
            .left {
                left: 20%;
            }
        }
        .service {
            width: 100%;
            height: 100%;
            .service-image {
                height: 100%;
                img {
                    border-radius: 0;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }
        .read-more {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: var(--primary);
            padding-bottom: 1rem !important;
            a{
                width: 50px;
                &:hover{
                    width:auto;
                }
            }
            &:hover{
                :global(.base) {
                       
                        --arrow-color:white;
                    }
                background: var(--attention);
                p, h3{
                    color:white !important;

                }
            }
        }
        .raucherentwoehnung {
            order: 1;
        }
        .raucherentwoehnung-description {
            order: 2;
        }
        .online-hypnose {
            order: 4;
        }
        .online-hypnose-description {
            order: 3;
        }
        .digital-detox {
            order: 5;
        }
        .digital-detox-description {
            order: 6;
        }
        .pruefungsangst {
            order: 8;
        }
        .pruefungsangst-description {
            order: 7;
        }
        .tiefenentspannung {
            order: 9;
        }
        .tiefenentspannung-description {
            order: 10;
        }
        .selbstwert-steigern {
            order: 12;
        }
        .selbstwert-steigern-description {
            order: 11;
        }
    }
    @media screen and (max-width: 900px) {
        .services {
            .subgrid-services {
                grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
            }
            .subgrid-cell {
                max-width: 600px;
                max-height: 350px;
                min-height: 300px;
                height: 100%;
                order: unset;
                -webkit-transition: all 0.3s;
                -moz-transition: all 0.3s;
                -o-transition: all 0.3s;
                transition: all 0.3s;
                transition-timing-function: ease-in-out;
                -moz-transition-timing-function: ease-in-out;
                -webkit-transition-timing-function: ease-in-out;
                -o-transition-timing-function: ease-in-out;
            }
            .service-image {
                max-height: 100%;
                height: 100%;
                width: 100%;
            }
            .read-more {
                height: auto;
                min-height: 200px;
                max-height: 100%;
                width: 100%;
                padding: 0;
                margin: 0;
                justify-content: center;
            }
            .service-text {
                height: auto;
                padding: 0;
                margin: 0;
                height: auto;
                margin-bottom: 55px;
                .arrow-wrapper {
                    flex-direction: column;
                    height: auto;
                    bottom: -55px;
                    left: 20%;

                    :global(.base) {
                        --arrow-length-hover: 350px !important;
                        --direction: "left" !important;
                    }
                    :global(.left) {
                        left: auto;
                        transform: rotate(135deg);
                        right: calc(var(--arrow-head-size, 30px) * 0.17);
                    }
                    :global(.right) {
                        left: auto;
                        transform: rotate(135deg);
                        right: calc(var(--arrow-head-size, 30px) * 0.17);
                    }
                }
            }
        }
    }
    @media screen and (max-width: 640px) {
    }
    @media screen and (max-width: 414px) {
    }
</style>
