<script setup lang="ts">
import ListRow from "@/components/ListRow.vue"

const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"

interface Intern {
  id: number,
  firstname: string,
  surname: string,
  pfp: string,
}

let i = 0;

const Interns: Intern[] = new Array(10).fill({
  id: i++,
  firstname: "Jan",
  surname: "Kowalski",
  pfp: imgUrl
});
</script>

<template>
  <table class="w-full interns-list">
    <thead>
      <tr>
        <th class="invisible select-none">Table</th>
        <th>Full name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="Intern in Interns" :key="Intern.id">
        <list-row :image-url="Intern.pfp" :name="Intern.firstname.concat(' ', Intern.surname)" />
      </template>
    </tbody>
  </table>
</template>
