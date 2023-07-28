<script lang="ts">
    import { page } from '$app/stores';
    import LogoSvg from '$lib/components/svgs/LogoSvg.svelte';
</script>


<section class="section">
    <LogoSvg 
        animation="{true}" 
        height="50vh"
        --leaves-main=var(--attention)
        >
    </LogoSvg>
    <h1>{$page?.error?.message}</h1>
    <a class="text show-link attention" href="/">Zurück zur Startseite</a>
</section>

<style lang="scss">
    .section {
        margin:0px;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        flex-direction: column;
        h1{
            margin-top: 1rem;
            background-color: var(--attention);
            padding: .5rem 3rem;
            border-radius: 1rem;
            color:white;
            font-size: 1.5rem !important;
            text-align: center;
        }
        a{
            margin-top: 1rem;
            font-size: 1.2rem;
            &:hover{
                color: var(--secondary) !important;
            }
        }
    }
</style>