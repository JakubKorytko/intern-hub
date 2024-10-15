<script setup lang="ts">
import { ref } from 'vue'

import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
import EditUserWrapper from '@/components/EditUserWrapper.vue'
import { Variants } from '@/types/EditUser.type'
import { createUser } from '@/services/reqres.api'
import router from '@/router'
import { validateUserData } from '@/utils/manipulateUsers.util'

const firstname = ref('')
const lastname = ref('')
const pfp = ref('')

const addUserHandler = () => {
  const errors = validateUserData(firstname.value, lastname.value, pfp.value)

  if (errors.length > 0) {
    alert(`Pola nie zostaly wypelnione poprawnie:\n\n${errors.join('\n')}`);
    return;
  }

  const result = createUser(firstname.value, lastname.value, pfp.value);
  if (!result) {
    alert("Nie udalo sie dodac uzytkownika");
    return;
  }
  alert("Uzytkownik zostal dodany!");
  router.push("/");
}
</script>

<template>
  <edit-user-wrapper>
    <template #data>
      <edit-user-data
        v-model:firstname="firstname"
        v-model:surname="lastname"
        :variant="Variants.AddUser"
        @updateDetails="addUserHandler"
      />
    </template>
    <template #image>
      <edit-user-image v-model:pfp="pfp" />
    </template>
  </edit-user-wrapper>
</template>
