<script lang="ts">
	import Checkmark from '$lib/svg/checkmark.svg';
    import OnlineHypnose from "$lib/images/online-hypnose.webp";
</script>

<svelte:head>
    <title>Online Hypnose</title>
    <meta 
        name="description" 
        content="Nutzen sie Ihre Zeit der Hypnose und Weiterentwicklung, um an ihren Themen zu arbeiten und daran zu wachsen." 
    />
    <link rel="preload" as="image" href={OnlineHypnose} />
</svelte:head>

<div class="section">
    <div class="grid">
        <div class="cell hero">
            <img
                src={OnlineHypnose}
                alt=""
                srcset=""
                width="100%"
                height="300px"
            />
            <h2>Online Hypnose</h2>
        </div>
        <div class="cell content">
            <h3>Kann Hypnose im Online-Setting überhaupt funktionieren?</h3>
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
                mir zusammenarbeiten wollen, ist Online-Hypnose die perfekte
                Möglichkeit dafür.
            </p>
            <h4>Voraussetzungen für eine erfolgreiche Online-Hypnose:</h4>
            <div class="line">
                <img
                    alt="self-Logo"
                    src={Checkmark}
                    width="30px"
                    height="auto"
                />
                <p>
                    Eine stabile Internetverbindung
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
                    Einen Laptop, ein Tablet oder Smartphone mit einer Webcam,
                    Mikrofon und Lautsprechern <br>(Hierbei sollten Tablet oder
                    Smartphone fest installiert sein, damit Sie Ihre Hände frei
                    haben)
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
                    Einen Raum oder Ort mit einem bequemen Stuhl, einer Couch
                    oder Sessel
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
            <div class="welcome-text">
 
            </div>
        </div>
        <div class="cell contact">
            <p>
                Falls Sie weitere Fragen haben sollten, melden Sie sich gerne
                persönlich bei mir.
            </p>
        </div>
    </div>
</div>

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
        h4{
            margin-top: 1rem;
        }
        padding: var(--content-padding, 0 1rem);
       
        max-width: var(--content-width);
        justify-self: center;
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
