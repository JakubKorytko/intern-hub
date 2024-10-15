<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
import EditUserWrapper from '@/components/EditUserWrapper.vue'
import { Variants } from '@/types/EditUser.type'
import { getUserById } from '@/services/reqres.api'
import router from '@/router'
import type { IUser } from '@/types/reqres.api.type'

const props = defineProps<{id: number}>();
const user = ref<IUser>({});
const userExists = ref(false);

const fetchUser = async () => {
  try {
    user.value = await getUserById(props.id);
    console.log(user.value)
    if (!user.value || Object.keys(user.value).length === 0) {
      alert("Uzytkownik nie istnieje!"); // TODO: komponent fallback
      await router.push('/');
      return;
    }
    userExists.value = true;
    return;
  } catch (e) {
    console.log(e);
    await router.push('/')
    return e;
  }
}

onBeforeMount(fetchUser)

</script>

<template>
  <template v-if="userExists">
    <edit-user-wrapper>
      <template #data>
        <edit-user-data
          :id="user.id"
          v-model:firstname="user.first_name"
          v-model:surname="user.last_name"
          :variant="Variants.EditUser"
        />
      </template>
      <template #image>
        <edit-user-image v-model:pfp="user.avatar" />
      </template>
    </edit-user-wrapper>
  </template>
</template>
