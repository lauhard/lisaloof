<script lang="ts">
    import LisaContact from "$lib/images/lisa-contact-min.webp";
    import EmailSvg from "$lib/components/svgs/emailSvg.svelte";
    import PhoneSvg from "./svgs/phoneSvg.svelte";
</script>

<article class="contact-box">
    <div class="image-wrapper">
        <img src={LisaContact} alt="" />
    </div>
    <div class="contact-info">
        <h3 class="headline-center">Jetzt Kontakt aufnehmen</h3>
        <p class="text text-center">
            Buchen Sie Ihren Termin oder rufen Sie mich an
        </p>
        <p class="text text-center mb1">Ich freue mich von Ihnen zu hören</p>
        <a
            class="cta"
            type="button"
            title="Kontaktformular öffnen"
            aria-label="navigate to contact"
            href="/kontakt"
        >
            <EmailSvg
                width="30px"
                height="22px"
                classNames="onHover"
                --fill="var(--white)"
            />
            Kontakformular
        </a>
        <a
            class="cta"
            type="button"
            title="Telefonnummer anrufen"
            aria-label="phone link"
            href="tel:+4367761750953"
        >
            <PhoneSvg
                width="30px"
                height="22px"
                classNames="onHover"
                --fill="var(--white)"
            />
            +43 67761750953
        </a>
    </div>
</article>

<style lang="scss">
    .contact-box {
        margin: 0;
        padding: 0;
        width: 100%;
        height: auto;
        background: var(--primary);
        border: none;
        box-shadow: none;
        border-radius: 0px;
        display: flex;
        flex-direction: row;

        .image-wrapper {
            height: auto;
            width: auto;
            min-width: 40%;
            border-radius: 0px;
            img {
                max-height: 450px;
                border-radius: 0px;
            }
        }

        .contact-info {
            display: flex;
            width: 50vw;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            justify-self: center;
            font-family: var(--font-family, "Segoe UI");
        }
        border-bottom: 8px solid var(--secondary);
    }
    @media screen and (max-width: 960px) {
        .contact-box {
            flex-wrap: wrap;
            padding: 0.5rem;
            display: flex;
            width: 100%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .image-wrapper {
                display: flex;
                justify-content: center;
                border-radius: 0.8rem;
            }
            .contact-info {
                margin: 2rem 0;
            }
        }
    }
</style>
