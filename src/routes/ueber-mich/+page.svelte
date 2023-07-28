<script lang="ts">
    import { page } from "$app/stores";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import Uebermich from "$lib/images/ueber-mich.webp";
    import Cert1 from "$lib/images/cert1.webp";
    import Cert2 from "$lib/images/cert2.webp";
    import AlertSvg from "$lib/components/svgs/AlertSvg.svelte";
    
    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);
</script>

<svelte:head>
    <title>Über mich - Lisa Marie Loof B.Sc.</title>
    <link rel="preload" as="image" href={Cert1} />
    <link rel="preload" as="image" href={Cert2} />
    <link rel="preload" as="image" href={Uebermich} />
    <meta
        name="description"
        content="Hallo, mein Name ist Lisa Marie Loof B.Sc., diplomierte Hypnosetrainerin und Psychologin aus Klagenfurt"
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                class="hero-image"
                src={Uebermich}
                alt="Bild von Lisa Marie Loof"
                srcset=""
                width="100%"
                height="300px"
            />
            <span>Über mich</span>
        </div>
        <div class="cell about-me">
            <h1 class="decorator-center">Lisa-Marie Loof B.Sc.</h1>
            <h2 class="important-paragraph mb1 text-center">
                Ihre diplomierte Hypnosetrainerin aus Klagenfurt
            </h2>
            <p class="text text-margin-bottom">
                Ich freue mich sehr über Ihr Interesse und begrüße Sie auf
                meiner Homepage. Mein Name ist Lisa-Marie Loof, ich bin
                diplomierte Hypnosetrainerin und habe 2020 meinen Bachelor of
                Science in Psychologie erlangt.
            </p>
            <p class="text text-margin-bottom">
                Destruktive Muster und Gewohnheiten, die vor dem Bewussten
                verborgen sind und sich trotzdem auf das Leben im Jetzt
                auswirken, haben mich schon immer fasziniert. Die Kombination
                aus meinem <span class="attention">Psychologiestudium</span> und
                meine Ausbildung zur
                <span class="attention">diplomierten Hypnosetrainerin</span>
                waren somit ein <span class="attention">„Perfect Match“</span>.
            </p>
            <p class="text">
                Ich arbeite mit meinen Klient*innen auf einer <span
                    class="attention">Ebene des gegenseitigen Vertrauens</span
                >. Das ermöglicht es Ihnen in Hypnose, in einen
                <span class="attention"
                    >Zustand erhöhter Lern- und Aufmerksamkeit</span
                > zu gelangen. Dabei arbeite ich ressourcen- und lösungsorientiert.
            </p>
        </div>
        <div class="cell concept">
            <h2 class="decorator-center">Mein Hypnose-Konzept</h2>
            <p class="text text-margin-bottom">
                Ich habe mich auf bestimmte Fragen und Themengebiete sowie deren
                Bearbeitung (zum Beispiel <a
                    class="show-link attention"
                    href="/hypnose-klagenfurt/raucherentwoehnung"
                    ><span class="">Raucherentwöhnung</span></a
                >
                ) spezialisiert.
                <span class="attention">Meine Hypnosearbeit</span> umfasst in
                der Regel mehrere Schritte, beginnend mit einer
                <span class="attention">Vorarbeit</span>
                zur Seelenreinigung, gefolgt von der  <span class="attention">Bearbeitung Ihrer Themen</span>, das Setzen von Ankern und/oder die
                <span class="attention">Verankerung der Selbsthypnose</span>.
                Aus diesem Grund finden meine Sitzungen stets in mindestens zwei
                Einheiten statt.
            </p>
            <p>
                Mit jedem weiteren Termin fällt es den meisten Menschen
                leichter, in Hypnose zu gehen. Daher ist es empfehlenswert, die
                Effekte der jeweiligen Sitzung zunächst wirken zu lassen. Bei
                folgenden Terminen können neu aufgekommene Gedanken und Gefühle
                besprochen werden. Falls es terminlich nicht anders möglich sein
                sollte, <span class="attention"
                    >besteht auch die Möglichkeit Ihre Hypnosesitzungen am Stück
                    abzuhalten</span
                >.
            </p>
            <a  href="/hypnose-klagenfurt" class="important-paragraph text-center mt2" style="display:block;width:100%; text-decoration:underline; ">Mehr Informationen, finden Sie unter Leistungen</a>
        </div>
        <div class="cell certificates">
            <img
                src={Cert1}
                alt="zertifikat-1"
                srcset=""
                width="100%"
                height="300px"
            />
            <img
                src={Cert2}
                alt="zertifikat-2"
                srcset=""
                width="100%"
                height="300px"
            />
        </div>
        <article class="cell important-box">
            <div class="article">
                <AlertSvg
                    width="50px"
                    height="50px"
                    classNames="important-note"
                    --fill="var(--primary-hover)"
                />
                <h3 class="headline-center">Wichtiger Hinweis</h3>
                <p>
                    Bei der hier angebotenen Hypnose handelt es sich um KEINE
                    therapeutische Hypnose. Das bedeutet, meine Dienste ersetzen
                    keinesfalls die eines Arztes oder Psychotherapeuten. Ich
                    handle nicht außerhalb meines Tätigkeitsbereiches, ich
                    betreibe keine Diagnostik, verschreibe keine Medikamente,
                    gebe keine Versprechen jeglicher Art ab oder behandle
                    medizinische oder psychische Leiden. Falls Sie an
                    entsprechenden Erkrankungen leiden, wenden Sie sich bitte an
                    die zuständigen Fachärzte*innen.
                </p>
                <p>
                    Falls ich die Hypnosesitzung aufgrund oben genannter Gründe
                    für nicht sinnvoll erachte, behalte ich mir das Recht vor,
                    die Sitzung abzulehnen.
                </p>
                <p>Umsatzsteuerbefreit gemäß § 6 Abs. 1 Z 19 UstG</p>
            </div>
        </article>
    </div>
</section>

<style lang="scss">
   
    :global(.important-note) {
        position: absolute;
        left: calc(50% - 36px);
        position: absolute;
        top: -36px;
        box-sizing: border-box;
        padding: 5px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: white;
    }
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
    .about-me, .concept {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width);
    }
    .important-box {
        width: 90%;
    }
    .certificates {
        max-width: var(--content-width);
        justify-self: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 30%));
        grid-template-rows: minmax();
        justify-content: center;
        widows: 100%;
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
        img {
            width: 30%;
            min-width: 320px;
            height: auto;
            object-fit: cover;
            object-position: center;
            overflow: hidden;
            justify-self: center;
            padding: 1px;
            border-radius: 0px;
        }
        margin-bottom: 3.5rem !important;
    }
    @media screen and (max-width: 670px) {
        .important-box {
            padding-top: 2rem;
        }
    }
</style>
