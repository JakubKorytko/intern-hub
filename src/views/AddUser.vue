<script setup lang="ts">
import { ref } from 'vue'

import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
import EditUserWrapper from '@/components/EditUserWrapper.vue'
import { Variants } from '@/components/EditUser.type'

const name = ref('')
const surname = ref('')
const imageUrl = ref('')
</script>

<template>
  <edit-user-wrapper>
    <template #data>
      <edit-user-data
        v-model:firstname="name"
        v-model:surname="surname"
        :variant="Variants.AddUser"
      />
    </template>
    <template #image>
      <edit-user-image v-model:pfp="imageUrl" />
    </template>
  </edit-user-wrapper>
</template>
