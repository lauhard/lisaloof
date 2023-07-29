<script lang="ts">
    /** @component Submenu
     * NOTE: Submenu.svelte
     * --mobile-position
     * used  to place the submenu in the correct position of a menu item on mobile devices
     * 
     * relative - sets the submenu to the position of the parent element
     * absolute - sets the submenu to the position of the first parent element with position: relative
     * 
     *  --top 
     * sets the top position of the submenu
     * for desktop, the submenu has position: absolute
     * on mobile devices, the submenu has position: relative
     * 
    */
    import { createEventDispatcher, onMount } from "svelte";
    export let classNames = "";
    export let showSubmenu: Boolean = false;

    // export let focus: Boolean = false;
    $: focus = false;


    const dispatch = createEventDispatcher();


    onMount(()=>{
        
    })

</script>

<div
    role="menubar"
    tabindex="-1"
    aria-label="menubar"
    class:showSubmenu={showSubmenu === true}
    class="subnav {classNames}"
    on:mouseover={(e) => {
        focus = true;
        dispatch("mouseover", {
            name: "mouseover",
            data: { focus: focus },
            event: e,
        });
    }}
    on:mouseleave={(e) => {
        focus = false;
        dispatch("mouseleave", {
            name: "mouseleave",
            data: { focus: focus },
            event: e,
        });
    }}
    on:focus={(e) => {
        focus = true;
    }}
    on:blur={(e) => {
        focus = false;
    }}
    aria-orientation="horizontal"
>
    <ul class="submenu-list-items">
        <li aria-label="menuitem" role="menuitem">
            <a href="/hypnose-klagenfurt/raucherentwoehnung">Raucherentwöhnung</a>
        </li>
        <li aria-label="menuitem" role="menuitem">
            <a href="/hypnose-klagenfurt/digital-detox">Digital Detox</a>
        </li>
        <li aria-label="menuitem" role="menuitem">
            <a href="/hypnose-klagenfurt/entspannt-in-die-pruefung">Entspannt in die Prüfung</a>
        </li>
        <li aria-label="menuitem" role="menuitem">
            <a href="/hypnose-klagenfurt/tiefenentspannung">Tiefenentspannung</a>
        </li>
        <li aria-label="menuitem" role="menuitem">
            <a href="/hypnose-klagenfurt/selbstwert-steigern">Selbstwert steigern</a>
        </li>
    </ul>
</div>

<style lang="scss">
    ul {
        margin: 0;
        width: 100%;
        padding: 0;
        // margin: .2rem 2rem  ;
    }
    .subnav {
        font-family: var(--font-family, "Segoe UI");
        max-width: var(--content-width, 100%);
        width: 100%;
        // height: 70px;
        height: 0px;
        background-color: var(--primary, #fff);
        display: flex;
        position: absolute;
        background-color: transparent;
        top: 0px;
        z-index: 0;
        justify-content: end;
        overflow-x: scroll;
        overflow-y: hidden;
        scale:0;
        box-shadow: none;
        .submenu-list-items {
            display: none;
            align-items: center;
            justify-content: end;
            width: 100%;
            height: 100%;
            li:nth-of-type(1) {
                margin-left: 30px !important;
            }
            li {
                margin: 0;
                padding: 0;
                height: 100%;
                display: flex;
                justify-content: center;
                align-self: center;
                align-items: center;
                margin-right: 30px;
            }
            a {
                font-size: 12px;
                height: 100%;
                padding-top: 28px;
                text-transform: uppercase;
                word-break: keep-all;
                white-space: nowrap;
            }
        }
    }
    .showSubmenu {
        scale: 1;
        top: var(--top,0);
        background-color: var(--d, #fff);
        border-left: 1px solid var(--attention, #fff);
        border-right: 1px solid var(--attention, #fff);
        border-bottom: 1px solid var(--attention, #fff);
        .submenu-list-items {
            display: flex;
        }
        height: 70px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
            rgba(0, 0, 0, 0.093) 0px 3px 7px -3px;
    }
    @media screen and (max-width: 680px) {
        .subnav {
            top:unset !important;
            bottom:unset !important;
            min-height: 100px;
            max-height: 70vh;
            width: 100% ;
        }
        .showSubmenu {
            position: var(--mobile-position,absolute);
            top: unset ;
            height: auto ;
            overflow-y: scroll;
            overflow-x: hidden;
            scroll-behavior: smooth;
            width: 100% ;
        }
        .submenu-list-items{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: start !important;
            height: 100%;
            width: 100% ;
            max-height: 60vh;
            top: unset;
            left: unset;
            li{
                margin: 0 !important;
                padding: 0 !important;
                min-height: 60px !important;
                width: 100% !important;	
                a{
                    width: 100% !important;	
                    text-align: center !important;
                }
            }
        }
    }
</style>
