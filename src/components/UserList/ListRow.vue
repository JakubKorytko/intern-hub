<script setup lang="ts">
import { defineProps } from 'vue'
import type { IUser } from '@/types/reqres.api.type'
import { deleteUser } from '@/utils/manipulateUsers.util'

interface Props {
  user: IUser
}

const props = defineProps<Props>()
</script>

<template>
  <tr>
    <td>
      <img alt="profile picture" class="pfp" :src="props.user.avatar" />
    </td>
    <td>
      {{ props.user.first_name.concat(' ', props.user.last_name) }}
    </td>
    <td class="text-gray-400">
      <div class="flex justify-center intern-icons">
        <RouterLink :to="`/editUser/${props.user.id}`">
          <button>
            <i class="fa fa-edit"></i>
          </button>
        </RouterLink>
        <button @click="deleteUser(props.user.id)">
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

.pfp {
  max-height: 2.5rem;
  height: 2.5rem;
  max-width: 2.5rem;
  width: 2.5rem;
  object-fit: cover;
}
</style>
