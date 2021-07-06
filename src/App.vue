<template>
  <div id="app">
    <select v-model="select">
      <option>1-1</option>
      <option>1-2</option>
      <option>2</option>
      <option>3</option>
    </select>

    <component v-if="currentTabComponent" 
        :is="currentTabComponent" 
        v-bind="props" 
        v-model="model"
    ></component>

    <div>
      Model: {{ model }}
    </div>
  </div>
</template>

<script>
import { configs } from './config';

export default {
  name: 'App',
  data() {
    return {
      select: '',
      model: '',
    };
  },
  computed: {
      currentTabComponent() {
        const type = `type${this.select}`;
        const selectedConfig = configs.find(config => config.type === type);

        return selectedConfig?.component;
      },
      props() {
        const type = `type${this.select}`;
        const selectedConfig = configs.find(config => config.type === type);

        return selectedConfig?.props?.[0]?.componentProps || [];
      }
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
