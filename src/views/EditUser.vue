<script setup lang="ts">
import { ref } from 'vue'

import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
import EditUserWrapper from '@/components/EditUserWrapper.vue'
import { Variants } from '@/types/EditUser.type'

const imgUrl =
  'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'

const testData = {
  name: "Jan",
  surname: "Kowalski",
  pfp: imgUrl
}

const name = ref(testData.name)
const surname = ref(testData.surname)
const imageUrl = ref(testData.pfp)
</script>

<template>
  <edit-user-wrapper>
    <template #data>
      <edit-user-data
        v-model:firstname="name"
        v-model:surname="surname"
        :variant="Variants.EditUser"
      />
    </template>
    <template #image>
      <edit-user-image v-model:pfp="imageUrl" />
    </template>
  </edit-user-wrapper>
</template>
