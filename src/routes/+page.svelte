<script lang="ts">
    //------------------------internal-------------------------------------------
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { SliceZone } from "@prismicio/svelte";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";

    //-------------------------types--------------------------------------------
    import type { PrismicDocument } from "@prismicio/client";
    import type { PageServerData } from "./$types";

    //-------------------------components----------------------------------------
    import { showPopup } from "$lib/stores/popup";
    import LogoSvg from "$lib/components/svgs/LogoSvg.svelte";
    import RoundButton from "$lib/components/RoundButton.svelte";
    import ArrowDownSvg from "$lib/components/svgs/ArrowDownSvg.svelte";
    import Popup from "$lib/components/slices/Popup.svelte";
    import Slogan from "$lib/components/Slogan.svelte";
    import Information from "$lib/components/Information.svelte";
    import ProfileImage from "$lib/images/lisa-min.webp";
    import Checkmark from "$lib/svg/checkmark.svg";
    import PhoneSvg from "$lib/components/svgs/phoneSvg.svelte";
    import EmailSvg from "$lib/components/svgs/emailSvg.svelte";
    import MapSvg from "$lib/components/svgs/mapSvg.svelte";
    import Praxis1 from "$lib/images/praxis1.webp";
    import Praxis2 from "$lib/images/praxis2.webp";
    import Hypnose from "$lib/images/was-ist-hypnose.webp";
    import Faq from "$lib/components/FAQ.svelte";
    import { scrollToAnchor } from "$lib/utils";

    //-------------------------exports----------------------------------------
    export let data: PageServerData;
    export let document: PrismicDocument = data?.document as PrismicDocument;
    export let cookieState: string =
        data?.popup == undefined ? "accepted" : data?.popup;

    //search for popup slice in prismicio document
    const popup = document.data.body.filter(
        (s: { slice_type: string }) => s.slice_type == "popup"
    );

    $: popupState = false;

    //check for popup state in store and set it to local variable
    onMount(async () => {
        if ($showPopup != undefined) {
            popupState = $showPopup;
        }
    });
    console.log("canonical url: ", PUBLIC_CANONICAL_URL);
</script>

<!-- 
    SEO optimization
    meta tags
    canonical url
 -->
<svelte:head>
    <title
        >Lisa Marie Loof B.Sc. - Zeit für Hypnose und Weiterentwicklung in
        Klagenfurt</title
    >
    <meta
        name="description"
        content="Ihre Zeit der Hypnose und Weiterentwicklung, besuchen Sie mich in meinem Praxisraum in Klagenfunrt am Waaagplatz 1."
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}" />
    <link rel="preload" as="image" href={ProfileImage} />
</svelte:head>

<div class="background-svg-banner">
    <div class="svg-wrapper">
        <LogoSvg
            classNames="background-svg"
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

<section class="section">
    {#if popupState && cookieState == "accepted"}
        <SliceZone slices={popup} components={{ popup: Popup }} />
    {/if}
    <RoundButton
        classNames="hover scroll-down"
        title="Zum nächsten Abschnitt scrollen"
        on:action={(e) => {
            scrollToAnchor({id:"Zei-für-Hypnose-und-Weiterentwicklung-in-Klagenfurt"})
        }}
    >
        <ArrowDownSvg width="20px" height="30px" --fill="#fff" />
    </RoundButton>

    <!-- <Submenu
    show={true}
    classNames="submenu-mobile"
    --mobile-position="relative"
/> -->

    <div class="grid">
        
        <div class="cell cell-headline">
            <div class="headline-wrapper">
                <Slogan classNames="slogan" />
            </div>
            <div class="information-wrapper">
                <Information classNames="information" />
            </div>
        </div>
        <div class="cell cell-profile">
            <div class="profile-image-wrapper">
                <img
                    class="profile-image"
                    src={ProfileImage}
                    alt="profile"
                    srcset=""
                    width="100%"
                    height="auto"
                />
            </div>
        </div>
        <div class="cell cell-greeter">

            <div class="greeter-wrapper">
                <span
                    style="visibility:hidden; display:block; width:100%;"
                    id="Zei-für-Hypnose-und-Weiterentwicklung-in-Klagenfurt"
                />
                <span class="decorator-center">Herzlich Willkommen</span>
                <h1 class="important-paragraph">
                    Ihre Zeit für Hypnose und Weiterentwicklung in Klagenfurt
                </h1>
                <p class="important-paragraph">
                    In gemeinsamer Zusammenarbeit wird es Ihnen ermöglicht
                </p>
                <div class="icon-line">
                    <img
                        alt="checkmark"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Ihre ganz eigenen Erfahrungen mit Hypnose zu machen und
                        diese zu erleben.
                    </p>
                </div>
                <div class="icon-line">
                    <img
                        alt="checkmark"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Ihren Themen, den entstehenden Gefühlen und Gedanken
                        wird der Raum und die Zeit gegeben zu wirken.
                    </p>
                </div>
                <div class="icon-line">
                    <img
                        alt="checkmark"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Ihre eigenen Ressourcen und Selbstheilungskräfte zu
                        mobilisieren, um an Ihren Themen zu arbeiten.
                    </p>
                </div>
                <div class="icon-line">
                    <img
                        alt="checkmark"
                        src={Checkmark}
                        width="30px"
                        height="auto"
                    />
                    <p>
                        Unser gemeinsamer Fokus wird auf dem lösungs- und
                        ressourcenorientierten Arbeiten liegen.
                    </p>
                </div>
            </div>
        </div>
        <div class="cell cell-praxis">
            <div class="subgrid-praxis praxis-wrapper">
                <div class="subgrid-cell contact">
                    <p>
                        Sie können Termine, oder Ihr kostenloses Erstgespräch
                        gerne telefonisch oder über E-Mail vereinbaren.
                    </p>

                    <div class="contact-buttons">
                        <a 
                            class="cta" 
                            type="button"
                            title="Telefonnummer anrufen"
                            aria-label="phone link"
                            href="tel:+4367761750953">
                                <PhoneSvg
                                    width="30px"
                                    height="22px"
                                    classNames="onHover"
                                    --fill="var(--white)"
                                />
                                +43 67761750953
                        </a>
                        <a 
                            class="cta" 
                            type="button"
                            title="Kontaktformular öffnen"
                            aria-label="navigate to contact"
                            href="/kontakt">
                                <EmailSvg
                                    width="30px"
                                    height="22px"
                                    classNames="onHover"
                                    --fill="var(--white)"
                                />
                                Kontakformular
                        </a>
                    </div>
                </div>
                <div class="subgrid-cell image">
                    <div class="image-wrapper">
                        <img
                            src={Praxis1}
                            alt="praxis-raum1"
                            srcset=""
                            width="auto"
                            height="100%"
                        />
                    </div>
                </div>
                <div class="subgrid-cell image">
                    <div class="image-wrapper">
                        <img
                            src={Praxis2}
                            alt="praxis-raum2"
                            srcset=""
                            width="auto"
                            height="100%"
                        />
                    </div>
                </div>
                <div class="subgrid-cell map">
                    <div class="address-wrapper">
                        <p>
                            Mein Praxisraum befindet sich im Zentrum von
                            Klagenfurt.
                        </p>

                        <div class="contact-buttons">
                            <a
                                class="cta"
                                href="https://goo.gl/maps/VhgjNbHZmWpUjEwR9"
                                target="_blank"
                                rel="noopener noreferrer"
                                type="button"
                                title="Karte öffnen"
                                aria-label="navigate to contact"
                            >
                                <MapSvg
                                    width="35px"
                                    height="25px"
                                    classNames="onHover"
                                    --fill="var(--white)"
                                />Karte öffnen</a
                            >
                        </div>
                        <div class="address">
                            <p>Waagplatz 1, 9020 Klagenfurt</p>
                            <p>Österreich</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cell cell-hypnose">
            <div class="hypnose-wrapper">
                <h2 class="decorator">Was ist Hypnose?</h2>
                <article class="hypnose">
                    <div class="imgage-wrapper hypnose__image">
                        <img
                            src={Hypnose}
                            alt=""
                            width="auto"
                            height="100%"
                            srcset=""
                        />
                    </div>
                    <div class="hypnose__text">
                        <p  class="text text-margin-bottom">
                            Das menschliche Bewusstsein lässt sich ganz einfach
                            erklärt in zwei Bewusstseinsstadien unterteilen. Das
                            Bewusstsein und das Unterbewusstsein. Das
                            Bewusstsein ermöglicht uns das rationale Lösen von
                            Aufgaben oder das Treffen von Entscheidungen. Allerdings
                            beträgt dieser bewusste Anteil nur ca. 10 % unserer
                            gesamt möglichen Leistungen.
                        </p>
                        <p  class="text text-margin-bottom">
                            Das bedeutet im Umkehrschluss, dass ein Großteil
                            unseres Potenzials ungenutzt bleibt. Im Untergrund
                            wirkt es sich oft unbemerkt auf unser Bewusstsein
                            aus. In der Hypnose gerät der kritische Faktor des
                            Bewusstseins in den Hintergrund, was ein Arbeiten
                            mit dem Unterbewusstsein ermöglicht. Dadurch
                            gelangen wir an Inhalte, die uns im Wachzustand
                            nicht zur Verfügung stehen und wir können mit ihnen
                            arbeiten. Innere Selbstheilungskräfte und unbewusste
                            Ressourcen werden dabei gestärkt.
                        </p>
                        <p>
                            Vielen ist gar nicht bewusst, dass uns der
                            hypnotische Zustand nicht fremd ist. Wir erleben ihn
                            täglich, wenn wir beispielsweise ein gutes Buch
                            lesen oder einen Film schauen und vollständig in
                            diese Welten eintauchen und alles um uns herum
                            ausblenden. Ebenso befinden wir uns kurz vor dem
                            Einschlafen oder direkt nach dem Aufwachen in einem
                            Zustand, dem der Hypnose ähnelt.
                        </p>
                    </div>
                </article>
            </div>
        </div>
        <div class="cell cell-faq">
            <div class="faq-wrapper">
                <h2 class="decorator-center" id="haeufig-gestellte-fragen">
                    Häufig gestellte Fragen
                </h2>
                <Faq classNames="faq" />
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .section {
        :global(.scroll-down) {
            display: flex;
            position: absolute;
            top: calc(100vh - 150px);
            min-width: 50px;
            width: 50px;
            min-height: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid white;
            left: calc(50% - 22.5px);
            background: var(--primary);
            z-index: 10;
            &:hover {
                background: var(--attention);
               
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
        max-height: 100vh;
        min-height: 300px;
        .svg-wrapper {
            position: absolute;
            left: -15vw;
            bottom: -50vh;
        }
    }
    .grid {
        grid-template-columns: var(--grid-columns-desktop);
        grid-template-rows: var(--grid-rows-desktop);
        grid-gap: var(--grid-gap, 0px);
        grid-row-gap: var(--grid-row-gap, 0px);
        min-height: var(--grid-min-height, 100%);
        height: var(--grid-height, 100%);
        width: var(--grid-width, 100%);
        padding: var(--grid-padding, 0);
        box-sizing: border-box;
        overflow: hidden;
    }
    .cell {
        background-color: var(--bg-grid-cell, transparent);
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        min-height: auto;
    }
    .cell:nth-of-type(1),
    .cell:nth-of-type(2) {
        grid-column: span 2;
        max-height: 100vh;
        height: calc(100vh - 150px);
    }
    .cell:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60dvw;
        width: 60vw;
        order: 1;
        min-height: 700px;
    }
    .cell:nth-of-type(2) {
        display: flex;
        height: calc(100vh - 100px);
        width: 40dvw;
        width: 40vw;
        order: 2;
        min-height: 300px;
        overflow: hidden;
    }
    .cell:nth-of-type(3) {
        grid-column: auto / span 4;
        height: auto;
        min-height: 100%;
        order: 3;
    }
    .cell:nth-of-type(4) {
        grid-column: auto / span 4;
        height: 100%;
        background-color: var(--bg-current-cell, transparent);
        width: 100%;
        max-width: 100dvw;
        max-width: 100vw;
        min-height: 100%;
        order: 4;
    }
    .cell:nth-of-type(5),
    .cell:nth-of-type(6) {
        display: flex;
        grid-column: auto / span 4;
        height: auto;
        width: 100vw;
    }
    .cell:nth-of-type(5) {
        order: 5;
    }
    .cell:nth-of-type(6) {
        order: 6;
    }
    .headline-wrapper,
    .information-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 100%;
    }
    .headline-wrapper {
        min-height: 200px;
        height: 33vh;
        height: 35vh;
        justify-content: end;
    }
    .profile-image-wrapper {
        position: absolute;
        display: flex;
        justify-content: start;
        align-items: end;
        height: 88%;
        bottom: 10%;
        overflow: hidden;
        max-width: 100%;
        max-height: 800px;
        width: 100%;
        img {
            position: relative;
            height: 100%;
            width: auto;
            min-height: 60%;
            min-height: 100%;
            object-fit: cover;
            object-position: 0px center;
            overflow: hidden;
        }
    }
    .greeter-wrapper {
        margin: 0 auto;
        max-width: var(--content-width);
        width: 100%;
        height: auto;
        margin-top: -4rem;
        padding: var(--content-padding, 0 1rem);
        .important-paragraph {
            text-align: center;
            color: var(--attention);
        }
        p.important-paragraph {
            margin-bottom: 1rem;
        }
        .icon-line {
            max-width: 845px;
            margin: 0 auto;
        }
    }
    .subgrid-praxis {
        display: grid;
        position: relative;
        max-width: var(--content-width);
        height: auto;
        min-height: 100%;
        grid-template-columns: repeat(2, minmax(100px, 1fr));
        grid-auto-rows: minmax(100px, auto);
        grid-row-gap: 40px;
        width: var(--content-width);
        margin: 0 auto;
        box-sizing: border-box;
        justify-content: end;
        position: relative;
        .image {
            height: 100%;
            width: 100%;
            min-height: 300px;
            overflow: hidden;
            padding: 0 20px;
        }
        .contact {
            grid-column-start: 1;
            grid-column-end: 4;
            width: 600px;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            box-sizing: border-box;
            align-items: center;
            justify-self: center;
            background-color: var(--primary);
            padding: 1rem 2rem;
            p {
                font-weight: 500;
                font-weight: 300;
                font-weight: 400;
                text-align: center;
                color: #fff;
            }
            .contact-buttons {
                min-height: 45px;
                a {
                    text-transform: uppercase;
                    justify-self: center;
                    // color: #fff;
                    &:hover {
                        // color: var(--attention);
                        color: #fff;
                        :global(.onHover) {
                            // color: var(--attention);
                            color: #fff;
                            transition: all 0.2s ease-in-out !important;
                        }
                        transition: all 0.2s ease-in-out !important;
                    }
                }
            }
        }
        .map {
            grid-column-start: 1;
            grid-column-end: 4;
            width: 600px;
            min-height: 300px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            justify-self: center;
            box-sizing: border-box;
            background-color: var(--primary);
            .address-wrapper {
                position: relative;
                height: 100%;
                // background-color: green;
                width: 100%;
                display: flex;
                padding: 0;
                margin: 0;
                align-items: center;
                justify-content: space-between;
                justify-content: space-around;
                flex-direction: column;
                p {
                    // margin-bottom: 30px;
                    font-weight: 500;
                    font-weight: 300;
                    font-weight: 400;


                    text-align: center;
                    padding: 0px;
                    color: #fff;
                }
                .address {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    p {
                        margin: 0px;
                        padding: 0px;
                    }
                }
                .contact-buttons {
                    a {
                        text-transform: uppercase;
                        justify-self: center;
                        // color: #fff;
                        &:hover {
                            color: var(--attention);
                            color: #fff;
                            :global(.onHover) {
                                color: var(--attention);
                                color: #fff;
                                transition: all 0.2s ease-in-out !important;
                            }
                            transition: all 0.2s ease-in-out !important;
                        }
                    }
                }
            }
        }
    }
    .hypnose-wrapper {
        padding: 0;
        max-width: 100%;
        width: 100%;
        background-color: var(--primary-hover);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--content-padding, 0 1rem);
        .decorator {
            margin-top: 1.5rem;
            // margin-bottom: 0rem;
            &::before {
                border-color: var(--attention);
            }
        }
        .hypnose {
            max-width: var(--content-width);
            width: 100%;
            background-color: transparent;
            box-shadow: none;
            padding: 0;
            margin: 0 0 2rem 0;
            border-radius: 0px;
            display: flex;
            flex-direction: row;
            .hypnose__image {
                max-width: 350px;
                min-width: 350px;
                max-height: 350px;
                margin-right: 30px;
                margin-bottom: 10px;
                float: left;
                overflow: hidden;
                box-sizing: border-box;
                img {
                    overflow: hidden;
                    transition: all 0.3s ease-in-out;
                    object-fit: cover;
                    height: 100%;
                    width: 100%;
                }
            }
            .hypnose__text {
                width: 100%;
                p {
                    text-align: justify;
                }
            }
        }
    }
    .faq-wrapper {
        max-width: var(--content-width);
        width: 100%;
        width: 100%;
        margin: 0 auto;
        padding: var(--content-padding, 0 1rem);
        // .decorator-center {
        //     margin-bottom: 2rem;
        // }
    }
    @media screen and (max-width: 1460px) {
        .grid {
            .cell:nth-of-type(2) {
                .profile-image-wrapper {
                    width: 100%;
                }
            }
        }
    }
    @media screen and (max-width: 1200px) {
        :global(.scroll-down) {
            display: none !important;
        }
        .background-svg-banner {
            bottom: 0px;
            height: 100%;
            max-height: 100dvh;
            max-height: 100vh;
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 10%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    height: 960px !important;
                }
            }
        }
        .grid {
            .cell:nth-of-type(1),
            .cell:nth-of-type(2) {
                grid-column: auto / span 4;
                width: 100vw;
            }
            .cell:nth-of-type(1) {
                height: auto;
                min-height: 500px;
                justify-content: start;
                order: 2;
                .information-wrapper {
                    padding-top: 0%;
                    height: auto;
                }
                .headline-wrapper {
                    background-color: var(--primary);
                    height: 250px;
                    min-height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: start;
                    align-items: center;
                    align-self: center;
                }
            }
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 500px;
                margin-top: 110px;
                min-height: 200px;
                order: 1;
                width: 100vw;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 450px;
                    max-height: 450px;
                    width: 450px;
                    max-width: 450px;
                    background-color: rgb(255, 255, 255);
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    img {
                        justify-self: center;
                        position: relative;
                        width: 100%;
                        max-width: 600px;
                        object-position: 0px 5px;
                    }
                }
            }
            .cell-greeter {
                min-height: 100%;
                height: auto;
                .greeter-wrapper {
                    margin: 30px 0 30px 0;
                    min-height: 100%;
                }
            }
            .subgrid-praxis {
                display: grid;
                position: relative;
                max-width: 100vw;
                height: auto;
                min-height: 100%;
                grid-template-columns: repeat(2, minmax(100px, 1fr));
                .image {
                    justify-self: center;
                    grid-column-start: 1;
                    grid-column-end: 4;
                    height: 100%;
                    max-width: 800px;
                    max-height: 400px;
                    width: 100%;
                    min-height: auto;
                    overflow: hidden;
                    img {
                        width: 100%;
                        justify-self: center;
                        object-fit: contain;
                        min-height: 100%;
                    }
                }
                .contact {
                    display: flex;
                    justify-content: space-around;
                    padding: 10px;
                    p {
                        margin: 0px;
                        padding: 0px;
                    }
                    max-width: 760px;
                    height: 100%;
                    min-height: 200px;
                    width: 100%;
                }
                .map {
                    display: flex;
                    justify-content: space-around;
                    padding: 10px;
                    max-width: 760px;
                    height: 100%;
                    min-height: 250px;
                    width: 100%;
                }
            }
            .hypnose-wrapper {
                margin-top: 50px;
                padding: 0 20px;
                box-sizing: border-box;
            }
            .faq-wrapper {
                margin-top: 1rem;
            }
        }
        @media (orientation: landscape) {
            .background-svg-banner {
                background-color: var(--primary);
                max-height: none;
                min-height: auto;
                height: 800px;
                position: absolute;
                top: 0%;
            }
            .section {
                position: relative;
                min-height: 1000px;
                height: 100%;
                bottom: 0;
                .grid {
                    min-height: 100%;
                    height: 100%;
                }
            }
        }
    }
    @media screen and (max-width: 992px) {
        .background-svg-banner {
            .svg-wrapper {
                :global(.background-svg) {
                    height: 700px !important;
                }
            }
        }
        .grid {
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 350px;
                margin-top: 100px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 350px;
                    max-height: 350px;
                    width: 350px;
                    max-width: 350px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
            .hypnose {
                display: block;
            }
        }
    }
    @media screen and (max-width: 576px) {
        .grid {
            .subgrid-praxis {
                .contact,
                .map {
                    min-height: 280px;
                    height: 100%;
                    padding: 30px;
                    justify-content: space-between;
                    .contact-buttons {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }
            .hypnose-wrapper {
                .hypnose__text {
                    p {
                        text-align: left;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 510px) {
        .background-svg-banner {
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 380px !important;
                }
            }
        }
        .grid {
            height: 100%;
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 300px;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 250px;
                    max-height: 250px;
                    width: 250px;
                    max-width: 250px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
        }
    }
    @media screen and (max-width: 450px) {
        .grid {
            .headline-wrapper {
                background-color: var(--primary);
            }
            .greeter-wrapper{
                p.important-paragraph {
                    margin: 1.5rem 0;
                }
            }
            .hypnose-wrapper {
                padding: 0 20px;
                box-sizing: border-box;
                .hypnose__image {
                    max-width: 100%;
                    width: 100%;
                    max-height: 350px;
                    min-height: 280px;
                    min-width: 280px;
                    border-radius: 1rem;
                    margin-right: 30px;
                }
            }
            .subgrid-praxis > .contact > p {
                margin-bottom: 20px;
            }
        }
    }
    @media screen and (max-width: 380px) {
        .background-svg-banner {
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 380px !important;
                }
            }
        }
        .grid {
            height: 100%;
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 300px;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
                .profile-image-wrapper {
                    position: relative;
                    bottom: 0;
                    left: 0;
                    height: 250px;
                    max-height: 250px;
                    width: 250px;
                    max-width: 250px;
                    border: 5px solid var(--primary);
                    border-radius: 50%;
                }
            }
            .subgrid-praxis {
                grid-auto-rows: minmax(100px, 300px);
                grid-row-gap: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                height: 100%;
            }
        }
    }
    @media screen and (max-width: 360px) and (min-width: 300px) {
        .background-svg-banner {
            .svg-wrapper {
                height: 100px !important;
                position: absolute;
                top: 0%;
                left: 50%;
                transform: translateX(-50%);
                :global(.background-svg) {
                    width: 380px !important;
                }
            }
        }
        .grid {
            .cell:nth-of-type(2) {
                max-height: 100%;
                height: 300px;
                margin-top: 60px;
                min-height: 200px;
                order: 1;
                width: 100dvw;
                justify-content: center;
            }
        }
    }
</style>
