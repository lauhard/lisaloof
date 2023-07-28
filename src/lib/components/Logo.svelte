<script lang="ts">
    import LogoSvg from "$lib/components/svgs/LogoSvg.svelte";
</script>

<a href="/" class="logo logo-wrapper">
    <div class="circle">
        <LogoSvg
            height="50px"
            animation={true}
            --leaves-main="#fff"
            --leaves-overlay="#fff"
            --tree-color="#fff"
            --tree-overlay="#fff"
        />
    </div>
    <div class="brand-wrapper">
        <small>Dipl. Hypnosetrainerin</small>
        <span class="brand-name">Lisa-Marie Loof</span>
        <small>B.Sc. in Psychologie</small>
    </div>
</a>

<style lang="scss">
    :global(#logoSvg) {
        width: auto;
        display: flex;
        vertical-align: center;
    }
    .logo-wrapper {
        min-width: 15rem;
        display: flex;
        flex-direction: row;
        vertical-align: center;
        align-items: center;
        color: var(--text);
        background-color: #fff;
    }
    .circle {
        min-width: 70px;
        width: 70px;
        height: 70px;
        min-height: 70px;
        background: #77b6ba;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
    }
    .brand-wrapper {
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        margin: 2px 0 0 10px;
        .brand-name {
            padding: 0;
            margin: 0;
            border: 1.5px solid var(--primary);
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 auto;
            background-color: white;
            margin: 2px 0;
            font-size: 16px;
            letter-spacing: 1px;
            color: var(--primary);
        }
        small {
            padding: 0;
            margin: 0;
            margin-left: 1px;
            line-height: 1.4;
            font-size: 10px;
            letter-spacing: 2px;
            color: var(--text);
        }
    }
    small:last-of-type {
        letter-spacing: 2.7px;
    }
</style>
