<script lang="ts">
    import AlertSvg from "./svgs/AlertSvg.svelte";
    export let classNames = "";
</script>

<article class="Information {classNames}">
    <!-- <div class="wrapper"> -->
        <AlertSvg
            width="50px"
            height="50px"
            classNames="information-box"
            --fill="white"
        />
        <div class="catchphrases">
            <p class="catchphrase">
                <!-- Sie wollen aufhören zu <span class="attention">rauchen</span>? -->
                Sie wollen aufhören zu <a class="show-link" href="/hypnose-klagenfurt/raucherentwoehnung" ><span class="attention">rauchen</span></a>?
            </p>
            <p class="catchphrase">
                Sie kämpfen mit <a class="show-link" href="/hypnose-klagenfurt/entspannt-in-die-pruefung" ><span class="attention">Lampenfieber</span></a> oder
                <a class="show-link" href="/hypnose-klagenfurt/entspannt-in-die-pruefung" ><span class="attention">Prüfungssituationen</span></a>?
            </p>
            <p class="catchphrase">
                Sie verbringen zuviel Zeit am <a class="show-link" href="/hypnose-klagenfurt/digital-detox" ><span class="attention">Smartphone</span></a>
                oder <a class="show-link" href="/hypnose-klagenfurt/digital-detox" ><span class="attention">Computer</span></a>?
            </p>
            <p class="catchphrase">
                Sie können sich nicht <a class="show-link" href="/hypnose-klagenfurt/tiefenentspannung" ><span class="attention">nicht entspannen</span></a>
                oder haben
                <a class="show-link" href="/hypnose-klagenfurt/tiefenentspannung" ><span class="attention">Schlafprobleme</span></a>?
            </p>
        </div>
        <a 
            class="cta" 
            title="Navigieren Sie zu den Hypnose Leistungen" 
            type="button" 
            style=""
            aria-label="auto"
            aria-live="polite"
            href="/hypnose-klagenfurt"
        >
            Hypnose kann Ihnen helfen
        </a> 
    <!-- </div> -->
</article>

<style lang="scss">
    :global(.information-box) {
        position: absolute;
        top: -40px;
        box-sizing: border-box;
        padding: 5px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: var(--primary);
    }
    :global(.alert-path) {
        fill: #fff !important;
        stroke: #fff !important;
        stroke-width: 0px;
    }
    
    .cta{
        text-transform: uppercase;
        // font-size: 16px;
        // letter-spacing: 1px;
        word-spacing: .3rem;
        color:#fff;
        color:var(--text);
        font-weight: 400;
        &:hover{
            color: var(--text);
        color:#fff;

        }
    }
    .Information {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;

        height: auto;
        width: auto;
        background-color: #ffffff;
        padding: .5rem .7rem;
        box-shadow: 0px 6px 15px -5px rgba(0, 0, 0, 0.25);
        display: flex;
        border-radius: 0px;
        margin: 0px 10px;
        .catchphrases {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding:30px;
            gap: 1.2rem;
            .catchphrase {
                font-weight: 300;
                color: var(--text);
                font-size: 1rem;
                font-size: 18px;
            }
        }
    }
    @media screen and (max-width: 480px) {
        
    }
</style>
