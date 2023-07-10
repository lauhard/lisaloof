<script lang=ts>
    export let id = ""
    export let name = ""
    export let labelText= "label text"
    export let disabled=false
    export let checked=false
    export let required=false
    export let classNames=""
</script>
<label class="base {classNames}" for="{id}">
    <input type="checkbox" id="{id}" name="{id}" {disabled} {checked} required={required}>
    {labelText}
</label>
<style lang="scss">
   .base{
   
   }
  
</style>