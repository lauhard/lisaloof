<script lang="ts">
    import { page } from "$app/stores";
    import BurgerMenu from "./BurgerMenu.svelte";

    let open = false;

    $: innerWidth = 0;
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
        <li class:active={$page.url.pathname === "/leistungen"}>
            <a href="/leistungen">Leistungen</a>
        </li>
        <li class:active={$page.url.pathname === "/onlinehypnose"}>
            <a href="/onlinehypnose">Onlinehypnose</a>
        </li>
        <li class:active={$page.url.pathname === "/kontakt"}>
            <a href="/kontakt">Kontakt</a>
        </li>
    </ul>
</nav>

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
        :global(.burger) {
            border-width: 1px !important;
            display: none !important;
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
                }
                a::before {
                    content: " ";
                    width: 0px;
                    border: 2px solid transparent;
                    position: absolute;
                    bottom: 0.8rem;
                    border-radius: 5px;
                    transition: all 0.2s ease-in-out;
                }
                &:hover {
                    a::before {
                        content: " ";
                        width: 45px;
                        border: 2px solid var(--primary);
                        position: absolute;
                        border-radius: 5px;
                        bottom: 0.8rem;
                        transition: all 0.2s ease-in-out;
                    }
                    transition: all 0.2s ease-in-out;
                }
            }
            .active {
                a::before {
                    content: " ";
                    width: 45px;
                    height: 0.15rem;
                    background-color: var(--primary);
                    position: absolute;
                    bottom: 0.8rem;
                    border-radius: 5px;
                }
            }
            transition: all 1s ease-out;
        }
    }

    @media screen and (max-width: 680px) {
        nav {
            display: flex;
            justify-content: end;
            align-items: center;
            width: 100%;
            margin-top: 5px;
            :global(.burger) {
                display: flex !important;
                margin-right: 20px !important;
            }
            .menu-entries {
                display: none;
                width: 100%;
                font-size: 12px;
            }
            .mobile {
                justify-content: end;
                align-items: center;
                width: 100% !important;
                position: absolute;
                top: 80px;
                display: flex;
                flex-direction: column;
                background-color: #fff;
                transition: all 1s ease-out;
                height: 250px;
                li {
                    display: flex;
                    width: 100%;
                    background-color: #fff;
                    height: 60px;
                    margin: 0;
                    padding: 0px;
                    border-bottom: 1px solid rgba(194, 193, 193, 0.74);
                    justify-content: center;
                    align-items: center;
                    a {
                        display: block;
                        text-align: center;
                        align-self: center;
                        padding: 20px;
                        height: 100%;
                        width: 100%;
                    }
                    a::before {
                        bottom: 0.5rem;
                    }
                    &:hover {
                        a::before {
                            content: " ";
                            bottom: 0.5rem;
                            transition: all 0.2s ease-in-out;
                        }
                        transition: all 0.2s ease-in-out;
                    }
                }
                .active {
                    a::before {
                        content: " ";
                        bottom: 0.5rem;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
</style>
