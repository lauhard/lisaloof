<script lang="ts">
    import Rauchfrei from "$lib/images/rauchfrei-min.webp";
    import Digitaldetox from "$lib/images/digitaldetox-min.webp";
    import Pruefungsangst from "$lib/images/pruefungsangst-min.webp";
    import Selbstwert from "$lib/images/selbstwert-min.webp";
    import Tiefenentspannung from "$lib/images/tiefenentspannung-min.webp";
    import Leistungen from "$lib/images/leistungen.webp";
</script>

<svelte:head>
    <title>Leistungen</title>
    <link rel="preload" as="image" href={Rauchfrei} />
    <link rel="preload" as="image" href={Digitaldetox} />
    <link rel="preload" as="image" href={Pruefungsangst} />
    <link rel="preload" as="image" href={Selbstwert} />
    <link rel="preload" as="image" href={Tiefenentspannung} />
    <link rel="preload" as="image" href={Leistungen} />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                src={Leistungen}
                alt=""
                srcset=""
                width="100%"
                height="300px"
            />
            <h2>Leistungen</h2>
        </div>
        <div class="cell content">
            <!-- <h2 class="content-headline">Meine Leistungen</h2> -->
            <p>
                Im folgenden Abschnitt nenne ich einige Beispiele für
                Anwendungsbereiche von Hypnose. Es ist jedoch wichtig zu
                beachten, dass Hypnosearbeit auch für andere Themengebiete
                eingesetzt werden kann. Sie können sich gerne mit jedem Anliegen
                bei mir melden. Sollten Sie Interesse an einer Sitzung zur
                Regression oder Reinkarnation haben, biete ich ebenfalls die
                Möglichkeit einer Zusammenarbeit an.
            </p>
            <br />
            <p>
                <strong>Meine Pakete sind folgendermaßen aufgebaut:</strong>
            </p>
            <p>
                Die erste Einheit beinhaltet ein kostenloses und unverbindliches
                Vorgespräch. Hierbei möchte ich mir ein Bild von Ihren
                Erwartungen oder bereits vorhandenen Hypnose-Erfahrungen machen.
                Danach werden wir gemeinsam Ihr persönliches Hypnose-Konzept
                besprechen. Wenn Sie sich nach dem Vorgespräch dazu entscheiden,
                mir Ihr Vertrauen zu schenken, stellen wir die Weichen, um
                gemeinsam an Ihrem Thema zu arbeiten.
            </p>
            <br />
            <p>
                In der zweiten Einheit können Gedanken und Gefühle, welche
                nachträglich aufgekommen sind besprochen werden. Wir arbeiten
                intensiv lösungs- und ressourcenorientiert an Ihrem Thema.
            </p>
            <br />
            <p>
                In der dritten Einheit (optional) möchte ich Ihnen anbieten, die
                Selbsthypnose bei Ihnen zu verankern, sodass Sie die Möglichkeit
                haben, auch selbst in Hypnose zu gehen und zu arbeiten.
            </p>
            <br />
            <div class="wrapper-services">
                <div class="service rauchfrei">
                    <h3>Raucherentwöhnung</h3>
                    <div class="service-image">
                        <img
                            src={Rauchfrei}
                            alt="rauchfrei"
                            srcset=""
                            width="100%"
                            height="300px"
                        />
                    </div>
                    <div class="service-text">
                        <p>
                            Zigaretten enthalten viele äußerst toxische
                            Substanzen, wie Stickstoffoxide, Schwefeloxide und
                            Ammoniak. Allein in Österreich sterben im Jahr
                            ungefähr 14.000 Menschen an tabakinduzierten
                            Krankheiten, wobei das Rauchen zu dem größten
                            vermeidbaren Risikofaktor für viele verschiedene
                            Krankheiten zählt. Sie sind sich dessen jedoch
                            bereits bewusst, da Sie sich hier nach Möglichkeiten
                            zur Raucherentwöhnung durch Hypnose informieren. Das
                            zeigt Ihren Entschluss, etwas zu verändern.
                            <br />
                            Ich freue mich darauf, Sie bei Ihrem Vorhaben, das Rauchen
                            aufzugeben, zu unterstützen. Zusammen können wir Ihre
                            Ziele erreichen.
                        </p>
                    </div>
                </div>
                <div class="service selbstwert">
                    <h3>Selbstwertsteigerung</h3>
                    <div class="service-image">
                        <img src={Selbstwert} alt="selbstwert" srcset="" />
                    </div>
                    <div class="service-text">
                        <p>
                            Wir alle sind viel zu oft von negativen Einflüssen
                            umgeben, die unser Selbstwertgefühl beeinträchtigen.
                            Es ist daher wichtig, dass wir uns mit unseren
                            Gefühlen, Gedanken und Handlungen auseinandersetzen.
                            Indem wir Verantwortung für unser Handeln
                            übernehmen, können wir selbstbewusst durchs Leben
                            gehen. Des Weiteren wirkt der Selbstwert als ein
                            wichtiger Schutzfaktor gegen Stress und ist somit
                            ein positiver Faktor für unsere Widerstandskraft und
                            Gesundheit.
                            <br />
                            Ich freue mich darauf, Sie kennenzulernen und Sie darin
                            zu unterstützen, Ihren Selbstwert zu stärken und sich
                            einfach wohlzufühlen.
                        </p>
                    </div>
                </div>
                <div class="service digital-detox">
                    <h3>Digital Detox</h3>

                    <div class="service-image">
                        <img src={Digitaldetox} alt="digital-detox" srcset="" />
                    </div>
                    <div class="service-text">
                        <p>
                            Instagram, WhatsApp, TikTok und andere Soziale
                            Medien beeinflussen uns täglich auf unterschiedliche
                            Weise. Dieses Thema betrifft nicht nur Jugendliche.
                            Auch Erwachsene bleiben von der Informationsflut
                            nicht verschont. Viele Menschen nutzen die Sozialen
                            Medien jedoch in einem Übermaß oder fühlen sich
                            unwohl, wenn das Handy nicht in Reichweite ist.
                        </p>
                        <br />
                        <p>
                            Eine häufige Ursache dafür ist Dopamin: ein
                            Glückshormon, das bei der Handy-Nutzung
                            ausgeschüttet wird. Es führt dazu, dass wir uns gut
                            fühlen und diesen Zustand aufrechterhalten wollen.
                            Es entsteht das Bedürfnis nach mehr. Mit jedem
                            Klingeln oder Vibrieren des Handys findet eine Art
                            Konditionierung statt: Der Griff nach dem Handy
                            führt zur Dopamin-Ausschüttung. Wir fühlen uns gut.
                        </p>
                        <br />
                        <p>
                            In der heutigen Zeit ist es daher wichtig, sich zu
                            fragen, warum wir die Sozialen Medien nutzen und wie
                            viel wir wirklich davon brauchen. Es geht nicht
                            darum, Soziale Medien zu verteufeln, sondern
                            vielmehr darum, selbst zu entscheiden, wie wir damit
                            umgehen möchten und eine gesunde Einstellung dazu zu
                            entwickeln.
                        </p>
                    </div>
                </div>
                <div class="service tiefenentspannugn">
                    <h3>Tiefenentspannung</h3>
                    <div class="service-image">
                        <img
                            src={Tiefenentspannung}
                            alt="tiefenentspannung"
                            srcset=""
                        />
                    </div>

                    <div class="service-text">
                        <p>
                            Wir befinden uns in einem Zeitalter, welches durch
                            Schnelllebigkeit und Hektik geprägt ist. Wir nehmen
                            uns viel zu selten den Raum und die Zeit für uns
                            selbst. Einfach mal entspannen und uns eine Auszeit
                            vom Alltag nehmen, um unseren Körper und Geist in
                            Einklang zu bringen. Hierfür bietet die
                            Tiefenentspannung mittels Hypnose die perfekten
                            Rahmenbedingungen.
                        </p>
                    </div>
                </div>
                <div class="service pruefungsangst">
                    <h3>Entspannt Vortragen / Enspannt in die Prüfung</h3>
                    <div class="service-image">
                        <img
                            src={Pruefungsangst}
                            alt="pruefungsangst"
                            srcset=""
                        />
                    </div>
                    <div class="service-text">
                        <p>
                            Wer kennt es nicht? Es steht eine Prüfung oder ein
                            wichtiger Vortrag an und die Aufregung steigt. Wir
                            bekommen schwitzige Hände oder unser Herzschlag
                            erhöht sich. Bei manchen Menschen kann dies sogar zu
                            einem kompletten Blackout führen, was sie nachhaltig
                            beschäftigt oder belastet. Mittels Hypnose ist es
                            möglich, sich diese Situationen genauer anzuschauen
                            und zu verändern.
                        </p>
                        <br />
                        <p>
                            Ich möchte Sie darin unterstützen, entspanntere
                            Vorträge zu halten oder Prüfungen zu meistern und
                            zusätzlich Ihr Selbstbewusstsein zu stärken. Ich
                            freue mich darauf, Sie kennenzulernen.
                        </p>
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
    }
    .cell {
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
            object-fit: cover;
            object-position: 0px -80px;
            object-position: center;
            overflow: hidden;
        }
    }

    .content {
        padding: var(--content-padding, 0 1rem);
        .content-headline {
            text-align: center;
            margin-bottom: 0.5rem;
        }
        max-width: var(--content-width, 1240px);
        justify-self: center;
        box-sizing: border-box;
        display: flex;
        position: relative;
        flex-direction: column;
        background: var(--bg-content-wrapper, transparent);
        min-height: 100vh;
        height: 100%;
        width: 100%;
        .service-image {
            width: 50%;
            max-width: 400px;
            min-width: 400px;
            height: 100%;
            max-height: 350px;
            flex: 0 0 auto;
            float: right;
            margin-right: 30px;
            img {
                overflow: hidden;
            }
            box-sizing: border-box;
        }
        .service {
            height: auto;
            min-height: 350px;
            width: 100%;
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
            overflow: hidden;
            //----------------------------------------------------------------- überschriften ---------------------------------------------
            &:nth-child(odd) {
                .service-image {
                    float: left;
                    overflow: hidden;
                }
            }
            &:nth-child(even) {
                .service-image {
                    float: right;
                    overflow: hidden;
                    margin-left: 30px;
                }
            }
            border-bottom: 0.5px solid var(--border-color, #b1b1b157);
        }
    }

    @media screen and (max-width: 640px) {
        .content {
            padding: 0 1rem;
        }
        .service {
            flex-direction: column;
            height: 100%;
            min-height: 0;
            .service-image {
                float: none;
                width: 100%;
                min-width: 100%;
                height: auto;
                max-height: 350px;
                margin-right: 0;
                margin-left: 0;
                margin-bottom: 1.5rem;
                overflow: hidden;
                img {
                    overflow: hidden;
                }
            }
        }
    }
</style>
