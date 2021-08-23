<template>
    <h2>Counter</h2>
    <p> {{counter}} <sup>2</sup> = {{counter*counter}} </p>
</template>

<script>
export default {
    data() { // La data regresa un objeto 
        return {
            counter: 5,
        }
    },
}
</script>

<style>

</style>