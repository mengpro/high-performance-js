<template>
    <title>Defer Example</title>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

export default @Component()

class DeferScript extends Vue {}
</script>

<script defer>
alert('defer');
</script>

<script>
    alert('script');
</script>

<script>
    window.onload = () => {
        alert('load');
    };
</script>
