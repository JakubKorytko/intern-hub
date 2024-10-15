<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import EditUserData from '@/components/EditUserData.vue'
import EditUserImage from '@/components/EditUserImage.vue'
import EditUserWrapper from '@/components/EditUserWrapper.vue'
import { Variants } from '@/types/EditUser.type'
import { getUserById, updateUserById } from '@/services/reqres.api'
import router from '@/router'
import { validateUserData } from '@/utils/manipulateUsers.util'

const props = defineProps<{ id: string }>()
const userExists = ref(false)

const localFirstName = ref('')
const localLastname = ref('')
const localPfp = ref('')

const fetchUser = async () => {
  try {
    const user = await getUserById(Number(props.id))
    if (!user || user instanceof Error || Object.keys(user).length === 0) {
      alert('Uzytkownik nie istnieje!')
      await router.push('/')
      return
    }
    localFirstName.value = user.first_name
    localLastname.value = user.last_name
    localPfp.value = user.avatar
    userExists.value = true
    return
  } catch (e) {
    console.log(e)
    await router.push('/')
    return e
  }
}

const editUserHandler = () => {
  const errors = validateUserData(
    localFirstName.value,
    localLastname.value,
    localPfp.value,
  )

  if (errors.length > 0) {
    alert(`Pola nie zostaly wypelnione poprawnie:\n\n${errors.join('\n')}`)
    return
  }

  const result = updateUserById(
    Number(props.id),
    localFirstName.value,
    localLastname.value,
    localPfp.value,
  )
  if (!result) {
    alert('Nie udalo sie dodac uzytkownika')
    return
  }
  alert('Uzytkownik zostal zaktualizowany!')
  router.push('/')
}

onBeforeMount(fetchUser)
</script>

<template>
  <template v-if="userExists">
    <edit-user-wrapper>
      <template #data>
        <edit-user-data
          :id="Number(props.id)"
          v-model:firstname="localFirstName"
          v-model:surname="localLastname"
          :variant="Variants.EditUser"
          @updateDetails="editUserHandler"
        />
      </template>
      <template #image>
        <edit-user-image v-model:pfp="localPfp" />
      </template>
    </edit-user-wrapper>
  </template>
</template>
