<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  imageUrl: string;
  name: string;
}

const props = defineProps<Props>();
const {imageUrl, name} = props;
</script>

<template>
<tr>
  <td>
    <img alt="profile picture" :src="imageUrl" />
  </td>
  <td>
    {{name}}
  </td>
  <td>
    <button>a</button>
    <button>b</button>
  </td>
</tr>

</template>
