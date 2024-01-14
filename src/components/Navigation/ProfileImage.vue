<template>
  <img :src="imageLink" alt="User Profile Image" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script lang="ts" setup>
import image from '@/common/images/defaultUser.png';
import { ref } from 'vue';

const imageLink = ref(image);
</script>
