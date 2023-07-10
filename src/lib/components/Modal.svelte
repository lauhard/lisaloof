<script lang="ts">
    export let dialog:HTMLDialogElement;
</script>
<dialog bind:this={dialog}  >
    <article class="customModal">
        <header >
            <slot name="header">
            </slot>
        </header>
        <slot name="body"><!-- optional fallback --></slot>
        <!-- <div aria-label="close-modal" role="button" tabindex="0" aria-live="polite" class="customIcon" on:mousedown={(e)=>dialog.close()}>
            Schließen
        </div> -->
    </article>
</dialog>
<style lang="scss">
    .customModal {
        width: 100%;
        max-width: 800px;
        header{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            overflow: hidden;
            // width: 100%;
            // margin: 0px !important;
		    // padding: 20px 0;
           
        }
    }
</style>
