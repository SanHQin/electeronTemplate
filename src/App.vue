<template>
  <div id="main">
    electron模板
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
let router = useRouter()
let store = useStore();

</script>

<style scoped lang="less">
#main{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: 600;
}

</style>