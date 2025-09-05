<template>
  <div class="container">
    <van-button type="primary" @click="router.push('/banner')">创建爱投侧Banner</van-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
</style>
