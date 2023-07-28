<script lang="ts">
    export let classNames = "";
</script>

<div class="page-slogan {classNames}">
    <span class="slogan-wrapper">
        <span class="line-1">Ihre Zeit</span>
        <span class="line-2">für <span class="hypnose">Hypnose</span> &</span>
        <span class="line-3">Weiterentwicklung</span>
        <!-- <span class="subheading">Entdecken Sie die Kraft von Hypnose</span> 
        <div class="separator" /> -->
    </span>
</div>

<style lang="scss">
    .page-slogan {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        background-color: #ffffff;
        box-sizing: border-box;
        white-space: nowrap;
        border: 5px solid white;
    }
    .slogan-wrapper {
        display: flex;
        box-sizing: border-box;
        flex-direction: column;
        border: 2px solid var(--secondary);
        border: 2px solid var(--primary);
        padding: 0.9rem;
        width: 100%;
        span {
            font-family: var(--font-family, "Segoe UI");
            font-style: normal;
            font-weight: 300;
            font-size: 1.86rem;
            line-height: 2rem;
            width: 100%;
            letter-spacing: 0.13rem;
            text-transform: uppercase;
            color: var(--text);
            margin: 0;
            padding: 0;
        }
        .line-1 {
            font-size: 0.72rem;
            line-height: 18px;
            letter-spacing: 0.206rem;
        }
        .line-2 {
            .hypnose {
                color: var(--text);
                color: var(--secondary);
            }
        }
    }
    .separator {
        margin: 0;
        margin-top: 5px;
        padding: 0;
        background-color: var(--secondary);
        width: 12.9rem;
        height: 3px;
        align-self: flex-start;
        border-radius: 5px;
    }
    @media screen and (max-width: 420px) {
        .page-slogan {
            width: auto;
            margin: 0;
            .slogan-wrapper {
                margin: 0;
                width: 100%;
                span {
                    font-size: 26px;
                    width: auto;
                }
                .line-2 {
                    .hypnose {
                        color: var(--text);
                        color: var(--secondary);
                    }
                }
                .line-1 {
                    line-height: 1.2rem;
                    font-size: 0.68rem;
                    letter-spacing: 0.15rem;
                }
            }
        }
    }
</style>
