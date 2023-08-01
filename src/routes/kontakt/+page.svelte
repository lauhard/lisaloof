<script lang="ts">
	import Contactbox from '$lib/components/Contactbox.svelte';
    import LisaContact from "$lib/images/lisa-contact-min.webp";

    import { page } from "$app/stores";
    import FormError from "$lib/components/FormError.svelte";
    import Form from "$lib/components/Form.svelte";
    import type { ActionData } from "./$types";
    import { validate } from "$lib/zod/helper/forms.js";
    import Dropdown from "$lib/components/Dropdown.svelte";
    import Checkbox from "$lib/components/Checkbox.svelte";
    import { toast } from "@zerodevx/svelte-toast";
    import { PUBLIC_CANONICAL_URL } from "$env/static/public";
    import PhoneSvg from "$lib/components/svgs/phoneSvg.svelte";
    import Addressbox from '$lib/components/Addressbox.svelte';

    console.log("canonical url: ", PUBLIC_CANONICAL_URL + $page.url.pathname);

    export let form: ActionData;

    let action = "add";
    let leistungen: string | undefined = "";
    let lastnameError: string | undefined = "";
    let firstnameError: string | undefined = "";
    let emailError: string | undefined = "";
    let phoneError: string | undefined = "";
    let myForm: HTMLFormElement;

    /**
     * brings up the result of the progressive enhanced form
     * for add and update action
     * dispatched from Form component
     * @param event Custom event from dispatch
     */
    const formActionResult = (event: CustomEvent) => {
        const { result } = event.detail;
        console.log("formActionResult: ", result);
        const { success } = result.data;
        if (success) {
            console.log("success", success);
            toast.push(
                "Vielen Dank für Ihre Anfrage. Ich werde mich schnellstmöglich bei Ihnen melden."
            );
        }
    };
</script>

<svelte:head>
    <title>Kontakt</title>
    <link rel="preload" as="image" href={LisaContact} />

    <meta
        name="description"
        content="Terminanfrage zum unverbindlichen Erstgespräch oder Hypnose-Einheit bei Lisa Marie Loof B.Sc. - Ihr Raum für Hypnose und Weiterentwicklung "
    />
    <link rel="canonical" href="{PUBLIC_CANONICAL_URL}{$page.url.pathname}" />
</svelte:head>

<section class="section">
    <div class="grid">
        <div class="cell hero-contact">
            <article class="contact-box">
                <div class="image-wrapper">
                    <img class="" src={LisaContact} alt="" />
                </div>
                <div class="contact-info">
                    <h1 class="headline-center">Terminanfrage</h1>
                    <p class="text text-center attention">
                        Buchen Sie Ihren Termin oder rufen Sie mich an
                    </p>
                    <p class="text text-center attention mb1">
                        Ich freue mich von Ihnen zu hören
                    </p>

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
        </div>
        <div class="cell service">
            <h2 class="decorator-center">Kontaktformular</h2>
            <p class="important-paragraph text-center mb2">
                Schicken Sie eine unverbindliche Anfrage für Ihr
                    kostenloses Erstgespräch oder einen Termin.
            </p>
            <Form
                bind:myForm
                on:formaction={formActionResult}
                --form-width="100%"
                {action}
                >
                <div class="block">
                    <label for="serviceType"
                        >Wählen Sie einen Termintyp
                        <Dropdown
                            id={"serviceType"}
                            tabindex={0}
                            options={[
                                {
                                    id: 1,
                                    key: "Terminanfrage",
                                    value: "Terminanfrage",
                                },
                                {
                                    id: 2,
                                    key: "Erstgespräch",
                                    value: "kostenloses Erstgespräch",
                                },
                            ]}
                            on:change={(e) => {
                                console.log(e);
                            }}
                        />
                    </label>
                    <label for="hypnoseLeistungen">
                        Wählen Sie eine Leistung
                        <Dropdown
                            id={"hypnoseLeistungen"}
                            tabindex={0}
                            on:change={(e) => {
                                console.log(e);
                            }}
                        />
                    </label>
                    <input
                        id="id"
                        type={action === "update" ? "text" : "hidden"}
                        name="id"
                        readonly
                    />
                    <label for="url">
                        Nachname
                        <input
                            type="text"
                            tabindex="0"
                            id="lastName"
                            name="lastName"
                            placeholder=""
                            required
                            on:input={(e) => {
                                lastnameError = validate(e);
                            }}
                        />
                        <FormError
                            {form}
                            field="lastName"
                            error={lastnameError}
                        />
                    </label>
                    <label for="name">
                        Vorname
                        <input
                            type="text"
                            tabindex="0"
                            id="firstName"
                            name="firstName"
                            placeholder=""
                            required
                            on:input={(e) => {
                                firstnameError = validate(e);
                            }}
                        />
                        <FormError
                            {form}
                            field="firstName"
                            error={firstnameError}
                        />
                    </label>
                    <label for="name">
                        Email
                        <input
                            type="text"
                            tabindex="0"
                            id="email"
                            name="email"
                            placeholder=""
                            required
                            on:input={(e) => {
                                emailError = validate(e);
                            }}
                        />
                        <FormError {form} field="email" error={emailError} />
                    </label>
                    <label for="name">
                        Telefon
                        <input
                            type="text"
                            tabindex="0"
                            id="phone"
                            name="phone"
                            placeholder=""
                            required
                            on:input={(e) => {
                                phoneError = validate(e);
                            }}
                        />
                        <FormError {form} field="phone" error={phoneError} />
                    </label>
                    <label for="contact_callback">
                        <Checkbox
                            id="contact_callback"
                            labelText="Bitte um Rückruf"
                        />
                    </label>
                </div>
                <button tabindex="0" class="cta" type="submit"
                    >Abschicken</button
                >
                {#if form?.prismaError}
                    <FormError error={form?.prismaError} />
                {/if}
            </Form>
        </div>
        <div class="cell address">
            <Addressbox></Addressbox>
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
    .hero-contact {
        font-family: var(--font-family, "Segoe UI");
        margin-top: 3rem;
        width: 100%;
        height: 420px;
        max-height: 420px;
        overflow: hidden;
        justify-self: center;
        border-radius: 15px;
        box-sizing: border-box;


        .contact-box {
            font-family: var(--font-family, "Segoe UI");
            margin: 0;
            padding: 0;
            width: 100%;
            height: auto;
            border: none;
            box-shadow: none;
            border-radius: 0px;
            display: flex;
            flex-direction: row;   
            // background: transparent;
            box-sizing: border-box;
            overflow: hidden;

            .image-wrapper {
                height: auto;
                width: auto;
                border-radius: 0px;
                img {
                    max-height: 420px;
                   height: 420px;
                    border-radius: 0px;
                    object-fit: cover;
                }
            }
            .contact-info {
                display: flex;
                width: 50%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                justify-self: center;
                h1{
                   font-weight: 400;
                   font-size: 1.8rem;
                   color:var(--attention);
                }
            
            }
        }
    }
    .address{
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width);
    }
    .cell:not(.hero-contact) {
        margin-bottom: 1.5rem;
    }
    .cell:not(.hero) {
        margin-bottom: 0;
    }
    .service {
        padding: var(--content-padding, 0 1rem);
        max-width: var(--content-width);
        .cta{
            width: 100%;
            margin-top: 1rem;
            font-size: .9rem;
        }
    }
    @media screen and (max-width:900px) {
        .hero-contact{
            height: auto;
            max-height: 100%;
            border-radius: 0px;
            .headline-center{
                margin-top: 1rem;
            }
            img{
                border-radius: 20px !important;
            }
        }

        .contact-box{
            background: transparent !important;

            // flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
    @media screen and (max-width:570px) {
        .hero-contact{
            height: auto;
            max-height: 100%;
            border-radius: .8rem;
            .headline-center{
                margin-top: 1rem;
            }
            img{
                border-radius: 0rem 0rem .8rem .8rem !important;
            }
        }

        .contact-box{
            // flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>
