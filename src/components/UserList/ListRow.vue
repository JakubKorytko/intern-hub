<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  imageUrl: string
  name: string
}

const props = defineProps<Props>()
const { imageUrl, name } = props
</script>

<template>
  <tr>
    <td>
      <img alt="profile picture" :src="imageUrl" />
    </td>
    <td>
      {{ name }}
    </td>
    <td class="text-gray-400">
      <div class="flex justify-center intern-icons">
        <button>
          <i class="fa fa-edit"></i>
        </button>
        <button>
          <i class="fa fa-trash"></i>
        </button>
      </div>
    </td>
  </tr>
</template>

<style scoped>
.intern-icons {
  font-size: 0.9rem;
}

.intern-icons button {
  padding: 0 0.3rem;
}

.intern-icons button:first-child i {
  vertical-align: middle;
}
</style>
