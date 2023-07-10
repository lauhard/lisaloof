<script lang="ts">
	import FormError from '$lib/components/FormError.svelte';
	import Form from '$lib/components/Form.svelte';
    import type { ActionData, PageServerData } from "./$types";
    import { validate } from "$lib/zod/helper/forms.js";
    import Dropdown from '$lib/components/Dropdown.svelte';
    import Checkbox from '$lib/components/Checkbox.svelte';
    import { toast } from '@zerodevx/svelte-toast'

    export let form: ActionData;
    export let data: PageServerData;


    let action = "add";
    let leistungen:string | undefined="";
    let lastnameError:string | undefined="";
    let firstnameError:string | undefined="";
    let emailError:string | undefined="";
    let phoneError:string | undefined="";
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
        if(success) {
            console.log("success", success);
            toast.push('Vielen Dank für Ihre Anfrage. Ich werde mich schnellstmöglich bei Ihnen melden.')
        } 
    }
</script>

<svelte:head>
    <title>Kontakt</title>
</svelte:head>

<section class="section">
    <div class="grid">
         <div class="cell contact-form">
             <h2 class="decorator">Terminanfrage</h2>
             <p>
                 Schicken Sie eine unverbindliche Anfrage für Ihr kostenloses Erstgespräch oder einen Termin.
             </p>
             <Form bind:myForm on:formaction={formActionResult} --form-width="100%" action="{action}">
                 <div class="block">
                     <label for="serviceType">Wählen Sie einen Termintyp
                         <Dropdown id={"serviceType"} options={
                             [{id:1,key:"Terminanfrage", value:"Terminanfrage"},{id:2, key:"Erstgespräch", value:"kostenloses Erstgespräch"}]} 
                             on:change={(e)=>{console.log(e)}} >
                         </Dropdown>
                     </label>
                     <label for="hypnoseLeistungen"> Wählen Sie eine Leistung
                         <Dropdown id={"hypnoseLeistungen"} on:change={(e)=>{console.log(e)}} ></Dropdown>
                     </label>
                     <input id="id" type="{action==='update'?'text':'hidden'}" name="id" readonly  />
                     <label for="url"> Nachname
                         <input type="text" id="lastName" name="lastName" placeholder="" required on:input={(e)=>{lastnameError=validate(e)}}/>
                         <FormError {form} field="lastName" error={lastnameError} />
                     </label>
                     <label for="name"> Vorname
                         <input type="text" id="firstName" name="firstName" placeholder="" required on:input={(e)=>{firstnameError=validate(e)}}/>
                         <FormError {form} field="firstName" error={firstnameError} />
                     </label>
                     <label for="name"> Email
                         <input type="text" id="email" name="email" placeholder="" required on:input={(e)=>{emailError=validate(e)}}/>
                         <FormError {form} field="email" error={emailError} />
                     </label>
                     <label for="name"> Telefon
                         <input type="text" id="phone" name="phone" placeholder="" required on:input={(e)=>{phoneError=validate(e)}}/>
                         <FormError {form} field="phone" error={phoneError} />
                     </label>
                     <label for="contact_callback">
                         <Checkbox id="contact_callback" labelText="Bitte um Rückruf"></Checkbox>
                     </label>
                 </div>
                 <button class="" type="submit">Abschicken</button>
                 {#if form?.prismaError}
                     <FormError error={form?.prismaError} />
                 {/if}
             </Form>
         </div>
    </div>
</section>

<style lang="scss">
    .grid {
        --grid-row-gap: 2rem;

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
        background-color: var(--bg-grid-cell, transparent);
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        min-height: auto;
    }
    .contact-form{
        margin-top: 3rem;
        justify-self: center;
        padding: 0 2rem;
        max-width: 50%;
        :global(.block){
            // min-width: 300px;
        }
        h2{
            text-align:  center;
            margin-bottom: 2rem;
        }
        .block{
            margin-top: 2rem;
            
        }
        .cta{
            margin: 0 auto;
            width: 100%;
            font-size: .9rem;
        }
        button {
            font-weight: 300;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 1450px) {
        .contact-form{
            margin-top: 3rem;
            max-width: var(--content-width);
            justify-self: center;
            padding: 0 2rem;
        }
    }
</style>
