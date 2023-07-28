<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { base } from "$app/paths";
    import type { LayoutServerData } from "./$types";
    export let data: LayoutServerData;
    console.log("data", data);

    let previousPage: string = base;
    afterNavigate(({ from }) => {
        previousPage = from?.url.pathname || previousPage;
        console.log("previousPage", previousPage);
    });
</script>

<!-- <section class="section"> -->
<slot><!-- optional fallback --></slot>
 
   
<!-- </section> -->
<style lang="scss">

   

</style>
