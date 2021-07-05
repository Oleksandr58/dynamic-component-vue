<template>
  <div id="app">
    <select v-model="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>

    <!-- <div>
      {{ currentTabComponent.type }}
    </div> -->

    <component v-if="currentTabComponent" :is="currentTabComponent" class="tab"></component>
  </div>
</template>

<script>
import { configs } from './config';

export default {
  name: 'App',
  data() {
    return {
      select: '',
    };
  },
  computed: {
      currentTabComponent() {
        const type = `type${this.select}`;
        const selectedConfig = configs.find(config => config.type === type);

        return selectedConfig?.component;
      },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
