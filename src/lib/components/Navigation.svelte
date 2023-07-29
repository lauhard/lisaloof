<script lang="ts">
    import { page } from "$app/stores";
    import { createEventDispatcher } from "svelte";
    import BurgerMenu from "./BurgerMenu.svelte";
    import Submenu from "./Submenu.svelte";

    $: focus = false;
$:console.log("focus", focus);
    $: toggleSubmenuOnMobile = false;
    $: innerWidth = 0;

    let open = false;

    const dispatch = createEventDispatcher();
</script>

<svelte:window bind:innerWidth />
<!-- content here -->
<nav class="navigation">
    <BurgerMenu bind:open className="burger" />
    <ul class="menu-entries" class:mobile={innerWidth < 680 && open == true}>
        <li class:active={$page.url.pathname === "/"}>
            <a href="/">Startseite</a>
        </li>
        <li class:active={$page.url.pathname === "/ueber-mich"}>
            <a href="/ueber-mich">Über Mich</a>
        </li>
        <li
            data-submenu="leistung"
            on:mouseover={(e) => {
                focus = innerWidth > 680 ? true : focus; // show on hover only on desktop nav
                dispatch("mouseover", {
                    name: "mouseover",
                    data: { focus: focus },
                    event: e,
                });
            }}
            on:focus={(e) => {
                focus = innerWidth > 680 ? true : focus; // show on hover only on desktop nav
                console.log("blur", focus);
            }}
            on:blur={(e) => {
                focus = innerWidth > 680 ? false : focus; // show on hover only on desktop nav
                console.log("blur", focus);
            }}
            class:leistung={focus ||
                ($page.url.pathname.includes("/hypnose-klagenfurt") &&
                    $page.url.pathname != "/hypnose-klagenfurt/online-hypnose")}
        >
            <!-- <div> -->
            <a href="/hypnose-klagenfurt">Leistungen</a>
            {#if innerWidth <= 680}
                <div 
                    class="simple submenu-open"
                    role="button"
                    tabindex="0"
                    on:mousedown={(e) => {
                        toggleSubmenuOnMobile = !toggleSubmenuOnMobile;
                        focus = toggleSubmenuOnMobile;
                    }}
                >
                    ▼
                </div>
            {/if}
            <!-- </div> -->
            <!-- NOTE
                --mobile-position
                used  to place the submenu in the correct position of a menu item on mobile devices
                relative - sets the submenu to the position of the parent element
                absolute - sets the submenu to the position of the first parent element with position: relative
            -->
            {#if innerWidth <= 680}
                <Submenu
                    showSubmenu={toggleSubmenuOnMobile}
                    classNames="submenu-mobile"
                    --mobile-position="relative"
                />
            {/if}
        </li>

        <li
            data-submenu="special"
            class:special-active={$page.url.pathname ===
                "/hypnose-klagenfurt/online-hypnose"}
        >
            <a
                role="button"
                class="special"
                href="/hypnose-klagenfurt/online-hypnose">Onlinehypnose</a
            >
        </li>
        <li class:active={$page.url.pathname === "/kontakt"}>
            <a href="/kontakt">Kontakt</a>
        </li>
    </ul>
</nav>
{#if innerWidth >= 680}
    <!-- 
        --top 
        sets the top position of the submenu
        in standard the submenu has position: absolute
        so the top position is relative to the parent element
     -->
    <Submenu
        showSubmenu={focus}
        --top="85px"
        on:mouseleave={(e) => {
            focus = e.detail.data.focus;
        }}
    />
{/if}

<style lang="scss">
    ul {
        margin: 0;
        padding: 0;
    }
    nav {
        font-family: var(--font-family, "Segoe UI");
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        background-color: #fff;
        z-index: 999;
        :global(.burger) {
            border-width: 1px !important;
            display: none !important;
        }
        .submenu-open {
            display: none;
            scale:0;
        }
        .menu-entries {
            font-size: 12px;
            width: 100%;
            display: flex;
            justify-content: end;
            li {
                position: relative;
                word-break: keep-all;
                text-transform: uppercase;
                a {
                    outline: none;
                    list-style: none;
                    color: var(--text, #fff);
                    background-color: none;
                    font-size: 12px;
                }
                a::before {
                    content: " ";
                    width: 0px;
                    border: 2px solid transparent;
                    position: absolute;
                    bottom: 0.9rem;
                    border-radius: 5px;
                    // transition: all 0.2s ease-in-out;
                }
                &:hover {
                    &:not([data-submenu="leistung"], [data-submenu="special"]) {
                        a::before {
                            content: " ";
                            width: 45px;
                            border: 2px solid var(--primary);
                            position: absolute;
                            border-radius: 5px;
                            bottom: 0.9rem;
                            // transition: all 0.2s ease-in-out;
                        }
                        // transition: all 0.2s ease-in-out;
                    }
                    // transition: all 0.2s ease-in-out;
                }
            }
            .active {
                // &:not(hover[data-submenu="leistung"]) {
                a::before {
                    content: " ";
                    width: 45px;
                    height: 0.15rem;
                    background-color: var(--primary);
                    position: absolute;
                    bottom: 0.9rem;
                    border-radius: 5px;
                // }
                }
            }
            .leistung {
                a::before {
                    content: "▼";
                    font-size: 0.8rem;
                    color: var(--primary);
                    position: absolute;
                    bottom: 4px;
                    left: calc(50% - 10px);
                    // transition: all 0.2s ease-in-out;
                }
            }
            
            .special {
                color: #fff !important;
                border:none !important;
                &:hover {
                    background-color: var(--secondary) !important;
                    color: #fff;
                    a::before {
                        content: unset !important;
                        width: 0px;
                    }
                }
                a::before {
                    content: unset !important;
                    width: 0px;
                }
            }
            .special-active {
                .special {
                    background-color: var(--secondary) !important;
                }
            }
            // transition: all 1s ease-out;
        }
    }

    @media screen and (max-width: 680px) {
        :global(.submenu-mobile.showSubmenu) {
            margin-top: 10px !important;
        }

        li[data-submenu="leistung"] {
            min-height: 60px !important;
            position: relative !important;
            align-items: center !important;
            flex-direction: column !important;
            text-align: center !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100%;
            border-bottom: 1px solid rgba(227, 227, 227, 0.74);
            padding: 15px !important;
            height: 100% !important;
            // transition: all 30ms ease-in-out;

            .submenu-open {
                display: inline-flex !important;
                position: absolute;
                width: 50px;
                height: 30px !important;
                justify-content: center;
                align-items: center;
                padding: 0px !important;
                margin-bottom: 10px !important;
                font-size: 1.2rem;
                color: var(--primary);
                z-index: 9999;
                min-width: 0 !important;
                min-height: 0 !important;
                text-align: center !important;
                scale:1;
                &:hover{
                    background-color: #fff;
                }
            }
            a {
                margin: 0 !important;
                padding: 0 !important;
                width: 150px !important;
                height: 100% !important;
                text-align: center !important;
                z-index: 9999;
            }
            a::before {
                content: " " !important;
                width: 0px;
                border: 2px solid transparent;
                position: absolute;
                bottom: 0.8rem !important;
                border-radius: 5px;
                // transition: all 0.2s ease-in-out;
            }
            &:hover {
                a::before {
                    content: " " !important;
                    width: 45px;
                    border: 2px solid var(--primary);
                    position: absolute;
                    border-radius: 5px;
                    bottom: 0.8rem !important;
                    // transition: all 0.2s ease-in-out;
                }
                // transition: all 0.2s ease-in-out;
            }
        }
        .leistung {
            
            a::before {
                content: " ";
                width: 45px !important;
                border: 2px solid var(--primary) !important;
                position: absolute !important;
                border-radius: 5px !important;
                bottom: 0.9rem !important;
                left: unset !important;
                // transition: all 0.2s ease-in-out !important;
            }
            // transition: all 30ms ease-in-out;

        }

        nav {
            display: flex;
            justify-content: end;
            align-items: center;
            width: 100%;
            height: auto;
            overflow-y: scroll;
            :global(.burger) {
                display: flex !important;
                margin-right: 20px !important;
            }
            .menu-entries {
                display: none;
                width: 100%;
                font-size: 12px;
                height: auto;
                // transition: all 30ms ease-in-out;

            }

            .mobile {
                justify-content: end;
                align-items: center;
                width: 100% !important;
                position: absolute;
                top: 85px !important;
                display: flex;
                flex-direction: column;
                background-color: #fff;
                // transition: all 1s ease-out;
                min-height: 250px;
                height: auto !important;
                left: 0px;
                li:not([data-submenu="leistung"]) {
                    display: flex;
                    width: 100%;
                    background-color: #fff;
                    height: 60px;
                    margin: 0;
                    padding: 0px;
                    border-bottom: 1px solid rgba(227, 227, 227, 0.74);
                    justify-content: center;
                    align-items: center;
                    a {
                        display: block;
                        text-align: center;
                        align-self: center;
                        padding-top: 22px;
                        height: 100% !important;
                        width: 100%;
                    }
                    a::before {
                        bottom: 0.7rem;
                    }
                    &:hover {
                        a::before {
                            content: " ";
                            bottom: 0.7rem;
                            // transition: all 0.2s ease-in-out;
                        }
                        // transition: all 0.2s ease-in-out;
                    }
                // transition: all 30ms ease-in-out;

                }
            }
            .special-active {
                .special {
                    background-color: var(--secondary) !important;
                }
            }
            .special {
                height: 100%;
                    background-color: var(--primary) !important;
                    border-radius: 0px !important;
                }
        }
    }
</style>
