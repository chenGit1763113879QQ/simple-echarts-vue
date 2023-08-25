<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ROUTER } from '../../router';

const router = useRouter()

const toEchartsList = () => {
  router.push(ROUTER.ECHARTSLIST)
}

const toEchartsEditor = () => {
  router.push(ROUTER.ECHARTSEDITOR)
}
</script>

<template>
  <button @click="toEchartsList">echarts list</button>
  <button @click="toEchartsEditor">echarts editor</button>
</template>