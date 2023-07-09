<script lang="ts">
    import Uebermich1 from "$lib/images/ueber-mich1.webp";
    import Uebermich2 from "$lib/images/ueber-mich2.webp";
    import Cert from "$lib/images/cert.webp";
    import Cert2 from "$lib/images/cert2.webp";
</script>

<svelte:head>
    <title>Über mich</title>
    <link rel="preload" as="image" href={Cert} />
    <link rel="preload" as="image" href={Cert2} />
    <link rel="preload" as="image" href={Uebermich2} />
    <link rel="preload" as="image" href={Uebermich1} />
</svelte:head>

<div class="section">
    <div class="grid">
        <div class="cell hero">
            <div class="image-wrapper">
                <img
                    class="ll1"
                    src={Uebermich1}
                    alt=""
                    srcset=""
                    width="100%"
                    height="300px"
                />
                <img
                    class="ll2"
                    src={Uebermich2}
                    alt=""
                    srcset=""
                    width="100%"
                    height="300px"
                />
            </div>

            <h2>Über Mich</h2>
        </div>
        <div class="cell about-me">
            <h2 class="content-headline" >Herzlich Willkommen</h2>
            <p>
                Ich freue mich sehr über Ihr Interesse und begrüße Sie auf
                meiner Homepage. Mein Name ist Lisa-Marie Loof, ich bin
                diplomierte Hypnosetrainerin und habe 2020 meinen Bachelor of
                Science in Psychologie erlangt.
            </p>
            <br>
            <p>
                Destruktive Muster und Gewohnheiten, die vor dem Bewussten
                verborgen sind und sich trotzdem auf das Leben im Jetzt
                auswirken, haben mich schon immer fasziniert. Die Kombination
                aus meinem Psychologiestudium und meine Ausbildung zur
                diplomierten Hypnosetrainerin waren somit ein „Perfect Match“.
            </p>
            <br>
            <!-- <ul>
                <li class="text">das Unterbewusstsein</li>
                <li class="text">Persönlichkeitsentwicklung</li>
                <li class="text">
                    Ressourcenaktivierung & Lösungsorientierung
                </li>
                <li class="text">
                    Ausschöpfung des eigenen ungenutzten Potenzials
                </li>
            </ul> -->
            <p>
                Ich arbeite mit meinen Klient*innen auf einer Ebene des
                gegenseitigen Vertrauens. Das ermöglicht es Ihnen in Hypnose, in
                einen Zustand erhöhter Lern- und Aufmerksamkeit zu gelangen.
                Dabei arbeite ich ressourcen- und lösungsorientiert.
            </p>
        </div>
        <div class="cell concept">
            <h2 class="content-headline">Mein Hypnose-Konzept</h2>
            <p>
                Ich habe mich auf bestimmte Fragen und Themengebiete sowie deren
                Bearbeitung (zum Beispiel Raucherentwöhnung) spezialisiert. Meine
                Hypnosearbeit umfasst in der Regel mehrere Schritte, beginnend
                mit einer Vorarbeit zur Seelenreinigung, gefolgt von der
                Festigung durch das Setzen von Ankern und die Verankerung der
                Selbsthypnose. Aus diesem Grund finden meine Sitzungen stets
                in mindestens zwei Einheiten statt.
            </p>
            <br />
            <p>
                Mit jedem weiteren Termin fällt es den meisten Menschen
                leichter, in Hypnose zu gehen. Daher ist es empfehlenswert, die
                Effekte der jeweiligen Sitzung zunächst wirken zu lassen. Bei
                folgenden Terminen können neu aufgekommene Gedanken und Gefühle
                besprochen werden. Falls es terminlich nicht anders möglich sein
                sollte, besteht aber auch die Möglichkeit Ihre Hypnosesitzungen
                am Stück abzuhalten.
            </p>
        </div>
        <div class="cell certificates">
            <img
                src={Cert}
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
        <div class="cell important">
            <div class="article">
                <h4>Wichtiger Hinweis</h4>
                <p>
                    Bei der hier angebotenen Hypnose handelt es sich um KEINE therapeutische Hypnose. Das bedeutet, meine Dienste ersetzen keinesfalls die eines Arztes oder Psychotherapeuten. Ich handle nicht außerhalb meines Tätigkeitsbereiches, ich betreibe keine Diagnostik, verschreibe keine Medikamente, gebe keine Versprechen jeglicher Art ab oder behandle medizinische oder psychische Leiden. Falls Sie an entsprechenden Erkrankungen leiden, wenden Sie sich bitte an die zuständigen Fachärzte*innen. 
                </p>
                <p>
                    Falls ich die Hypnosesitzung aufgrund oben genannter Gründe für nicht sinnvoll erachte, behalte ich mir das Recht vor, die Sitzung abzulehnen.  
                </p>
                <p>
                    Umsatzsteuerbefreit gemäß § 6 Abs. 1 Z 19 UstG
                </p>
            </div>
        </div>
      
    </div>
</div>

<style lang="scss">
    .section {
        --section-min-height: 100vh;
        --section-height: 100%;
        --section-width: 100%;
        --section-margin: 90px 0 0 0;
        --section-padding: 0 0 0 0;
        // --bg-section: rgb(0, 26, 255);
        height: var(--section-height);
        min-height: var(--section-min-height);
        width: var(--section-width);
        margin: var(--section-margin);
        padding: var(--section-padding);
        background-color: var(--bg-section);
        position: relative;
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
    .hero {
        margin-top: 3rem;
        height: 420px;
        overflow: hidden;
        justify-self: center;
        max-width: var(--content-width);
        .image-wrapper {
            display: flex;
            flex-direction: row;
            height: 100%;
        }
        h2 {
            position: absolute;
            font-weight: 600;
            font-size: 1.6rem;
            color: #fff;
            bottom: 0;
            z-index: 10;
            text-align: center;
            padding: 10px 40px;
            background-color: var(--primary-hover);
            width: auto !important;
            min-width: 300px;

            left: 50%;
            transform: translateX(-50%);
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            overflow: hidden;
        }
        .ll2 {
            object-fit: cover;
            height: 100%;
        }
    }
    .about-me {
        padding: 0 1rem;
        .content-headline {
            text-align: center;
            margin-bottom: 0.5rem;
        }
        max-width: var(--content-width);
        justify-self: center;
        // background-color: red;
        ul {
            margin-top: 1rem;
            padding-left: 1rem;
            li {
                list-style-type: circle;
                font-weight: 400;
            }
        }
    }
    .concept {
        padding: 0 1rem;
        .content-headline {
            text-align: center;
            margin-bottom: 0.5rem;
        }
        max-width: var(--content-width);
        justify-self: center;
        margin-bottom: 2rem;
    }
    .important{
        max-width: var(--content-width);
        justify-self: center;
        margin-bottom: 2rem;
        .article{
            // max-width: 60%;
            min-width: 300px;
            width: 100%;
            margin: 0 auto;
            padding: 1rem 1.5rem;
            background-color: var(--primary-hover);
            // border-radius: 5px;
            h4{
                text-align: center;
                margin-bottom: 0.5rem;
            }
            p{
                // width: 80%;
                margin: 0 auto;
            }
        
        }
    }
    .certificates {
        max-width: var(--content-width);
        justify-self: center;
        min-height: 300px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 30%));
        grid-template-rows: minmax();
        justify-content: center;
        img {
            width: 30%;
            min-width: 320px;
            height: auto;
            object-fit: cover;
            object-position: 0px -80px;
            object-position: center;
            overflow: hidden;
            justify-self: center;
        }
    }
</style>
