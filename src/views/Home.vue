<template>
    <div class="home">
        <i-menu v-show="showMenu" class="home-menu">
            <i-submenu v-for="(value, key, index) in catalogue" :key="'submenu-' + index" :name="'submenu-' + index">
                <template slot="title">
                    {{ key }}
                </template>
                <i-menu-item v-for="(item, itemIndex) in value" :key="'menu-' + itemIndex" :to="{ name: convertToRoute(item) }" :name="'menu-' + itemIndex">
                    {{ item }}
                </i-menu-item>
            </i-submenu>
        </i-menu>
        <img alt="Yo~" src="../assets/B.png" @click="showMenu = !showMenu">
    </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import { mapState } from 'vuex';

export default @Component({
    computed: {
        ...mapState([
            'catalogue',
        ]),
    },
})

class Home extends Vue {
    showMenu = false;

    convertToRoute(str) {
        const arr = str.split(' ');
        return arr.join('-');
    }
}
</script>
<style src="./home.scss" lang="scss" />
