<script lang="ts">
    import LogoSvg from "./svgs/LogoSvg.svelte";
    import instagram from "$lib/svg/instagram.svg";
</script>

<footer>
    <div class="grid">
        <div class="cell logo">
            <div class="svg-wrapper">
                <LogoSvg
                    classNames="footer-background-svg"
                    animation={true}
                    --svg-stroke-width="0px"
                    --leaves-main=var(--attention)
                    --leaves-overlay=var(--primary)
                />
            </div>
        </div>
        <div class="cell contact">
            <address class="address-wrapper">
                <h5>Kontakt</h5>
                <p>Lisa-Marie Loof</p>
                <p>Waagplatz 1</p>
                <p>9020 Klagenfurt</p>
                <p>Österreich</p>
            </address>
            <div class="contact-wrapper ">
                <ul>
                    <li>
                       <a class="show-link" href="tel:+4367761750953">Tel: +43 (0) 67761750953</a>
                    </li>
                    <li>
                        <a class="show-link" href="mailto:praxis@lisaloof.at">Mail: praxis@lisaloof.at</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cell sitemap">
            <div class="sitemap-wrapper  ">
                <h5>Links</h5>
                <ul>
                    <li>
                        <a class="show-link" href="/">Startseite</a>
                    </li>
                    <li>
                        <a class="show-link" href="/ueber-mich">Über mich</a>
                    </li>
                    <li>
                        <a class="show-link" href="/hypnose-klagenfurt">Leistungen</a>
                    </li>
                    <li>
                        <a class="show-link" href="/hypnose-klagenfurt/online-hypnose">Online-Hypnose</a>
                    </li>
                    <li>
                        <a class="show-link" href="/kontakt">Kontakt</a>
                    </li>
                    <li>
                        <a class="insta-button " role="button" href="https://www.instagram.com/hypnose_loof/" target="_blank">
                            <img src="{instagram}" alt="">
                            <p class="show-link">Instagram</p>
                        </a>
                       
                    </li>
                </ul>
            </div>
        </div>
        <div class="cell legal-notice">
            <div class="legal-notice-wrapper ">
                <h5>Rechtliches</h5>
                <ul>
                    <li>
                        <a class="show-link" href="/impressum">Impressum</a>
                    </li>
                    <li>
                        <a class="show-link" href="/datenschutz">Datenschutz</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</footer>

<style lang="scss">
    footer {
        position: relative;
        width: 100%;
        min-height: 300px;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: var(--primary);
        background-color: rgb(82, 91, 88);
        .grid {
            position: relative;
            display: grid;
            grid-gap: 0px;
            grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
            grid-template-rows: auto;
            width: 100%;
            height: 100%;
            min-height: 350px;
            padding-top:20px;
            box-sizing: border-box;
            z-index: 0;
        }
        .insta-button {
            position: relative;
            background-color: transparent;
            border: none !important;
            margin-top:10px;
            text-decoration: none !important;
            border: none !important;
            outline: none !important;
            img{
                height: 2rem;
            }
        }
    }

    .cell {
        display: grid;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        padding-bottom: 20px;
        justify-content: end;
        justify-content: left;
        z-index: 10;
        li {
            margin: 0;
            padding: .1rem 0;
            list-style: none;
        }
        a,
        p {
            color: #fff;
            padding: .1rem 0;
            font-size: 17px;
        }
        a:hover{
            color:var(--primary);
        }
        .show-link {
            text-decoration-color:#fff !important;
          
            &:hover {
                color:var(--primary) !important;
                text-decoration-color:var(--primary) !important;
            }
           
        }
        h5 {
            color: var(--secondary);
            margin-bottom: 1rem;
            margin-top: 10px;
            padding: 0px;
            line-height: 1;
            font-size: 23px;
            &:after {
                content: "";
                display: block;
                width: 2.5rem;
                height: 1px;
                background-color: var(--secondary);
                margin-top: 5px;
            }
        }
    }
    .logo {
        display: grid;
        grid-row: span 3;
        height: 100%;
        order: 1;
        bottom: 0px;
        position: relative;
        justify-content: start;
        .svg-wrapper {
            position: absolute;
            align-items: center;
            height: 100%;
            left: 30px;
            :global(.footer-background-svg) {
                max-width:220px;
                height:100%;
                max-height: 500px;
                z-index: 0 !important;
            }
        }
    }
    .contact {
        order: 2;
        justify-content: left;
        .address-wrapper {
            width: 250px;
        }
    }
    .sitemap {
        order: 3;
        h5 {
            &:after {
                content: "";
                width: 1.6rem;
            }
        }
        .sitemap-wrapper {
            width: 250px;
        }
    }
    .legal-notice {
        order: 4;
        h5 {
            &:after {
                content: "";
                width: 4rem;
            }
        }
    }
    @media screen and (max-width: 875px) {
        footer {
            .grid {
                .cell {
                    padding-left: 20px;
                }
                .logo{
                    position: absolute;
                    grid-column: span auto;
                    grid-row: span auto;
                    right:-70%;
                    top:10%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    justify-self: center;
                    align-self: center;
                    .svg-wrapper {
                        height: 80%;
                        width: 100%;
                        :global(.footer-background-svg) {
                            position: relative;
                            height: 100%;
                            width: 100%;
                            max-width: 100%;
                        }
                    }
                }
            }
        }
    }
    @media screen and (max-width: 400px) {
        footer {
            .grid {
                grid-template-columns: repeat(2, min-max(80px, 1fr));
                grid-template-rows: repeat(3, min-max(180px, 1fr));
                .cell {
                    margin-left: 20px;
                }
                .logo{
                    order: 5;
                    grid-column: span auto;
                    grid-row: span auto;
                    height: 100%;

                    .svg-wrapper {
                        right:2%;
                        width: 100%;
                        max-width: 100%;
                        :global(.footer-background-svg) {
                            position: relative;
                        }
                    }
                }
            }
        }
    }
</style>
