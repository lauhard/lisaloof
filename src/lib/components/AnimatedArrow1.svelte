<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let classNames="";
    export let direction="right";
    // export let alignSelf= direction === "left" ?  "start" : "end";
    export let tabindex=0;
    export let ariaLabel="read-more";
    export let ariaLDdetails="click for more information";
    const dispatch = createEventDispatcher();
</script>

<div class="arrow-wrapper base {classNames} " aria-label="{ariaLabel}" aria-details="{ariaLDdetails}" role="button" {tabindex}   >
    <div class="arrow ">
        <div class="line-wrapper">
            <div class="arrow-line" />
            <div class="arrow-head {direction}" />
        </div>
    </div>
</div>

<style lang="scss">
    .arrow-wrapper {
        display: flex;
        height: 100%;
        margin: 0;
        padding:0;
        overflow: hidden;
        position: relative;
        width: auto;
        height: auto;
        transition: all 0.3s ease-in-out;
        border-color: transparent;
        background: transparent;
    }
    .base{
        // align-self: var(--direction, left);
        justify-content:var(--direction, left);
    }
    
    
    .arrow {
        border-radius: 30px;
        height: var(--height, 50px);
        min-height:50px;
        width: var(--arrow-length, 200px);
        min-width: calc(var(--arrow-head-size, 30px) * 2);
        // background-color: red;
        border: 1px solid var(--arrow-color, #403e3e);
        padding: 0 .5rem;
        .line-wrapper {
            
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;
            justify-content: left;
            align-items: center;
            position: relative;
            transition: all 0.3s ease-in-out;
            box-sizing: border-box;
            transition: all 0.3s ease-in-out;
        }
    }
    // .arrow {
    //     border: 1px solid var(--arrow-color, #403e3e);
    //     padding: 0 .5rem;
    // }
    .arrow-line {
        height: 2.5px;
        background: var(--arrow-color, #403e3e);
        width: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
    }
    .arrow-head,
    .left,
    .right {
        width: var(--arrow-head-size, 30px);
        height: var(--arrow-head-size, 30px);
        border-top: 2px solid var(--arrow-color, #403e3e);
        border-left: 2px solid var(--arrow-color, #403e3e);
        position: absolute;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease-in-out;

    }
    .left {
        transform: rotate(135deg);
        right: calc(var(--arrow-head-size, 30px) * 0.17);
    }
    .right {
        transform: rotate(-45deg);
        left: calc(var(--arrow-head-size, 30px) * 0.17);
    }
    .arrow:hover {
        width: var(--arrow-length-hover, 250px);
        border-color: var(--arrow-color-hover, var(--attention)) ;
        // .arrow{
        //     border-color: var(--arrow-color-hover, var(--attention)) ;
        // }
        .arrow-line {
            background: var(--arrow-color-hover, var(--attention));
            transition: all 0.3s ease-in-out;
        }
        .arrow-head {
            border-color: var(--arrow-color-hover, var(--attention));
            transition: all 0.3s ease-in-out;
        }
        transition: all 0.3s ease-in-out;
    }
</style>
