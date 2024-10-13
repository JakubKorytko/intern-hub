<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  text: string;
}

const props = defineProps<Props>();
const {text} = props;
</script>

<template>
  <button class="w-7 h-7 bg-yellow-400">{{text}}</button>
</template>
