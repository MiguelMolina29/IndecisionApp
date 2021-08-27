<template>
    <h2>Counter</h2>
    <p> {{counter}} <sup>2</sup> = {{squareCounter}} </p>

    <div>
        <button @click="incrementar()">+1</button>
        <button @click="decrementar()">-1</button>
    </div>

</template>

<script>
export default {
    data() { // La data regresa un objeto 
        return {
            counter: 5,
        }
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter
        },
        incrementar() {
            return this.counter = this.counter + 1
        },
        decrementar() {
            return this.counter = this.counter - 1
        }
    },
    computed: {
        squareCounter() {
            return this.counter * this.counter
        }
    }
}
</script>

<style scoped>
    button{ 
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>