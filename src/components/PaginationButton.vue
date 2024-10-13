<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  text: string;
  active: boolean;
  selectable: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  active: false,
  selectable: true,
});

const {text, selectable, active} = props;
</script>

<template>
  <button :class="{selectable, active}" class="w-7 h-7">{{text}}</button>
</template>

<style scoped>

.selectable {
  color: #459672;
}

.active {
  background-color: #459672;
  color: white;
}

button:not(:last-child):not(:first-child) {
  font-size: 0.8rem;
}

button:first-child {
  border-radius: 0.3rem 0 0 0.3rem;
}

button:last-child {
  border-radius: 0 0.3rem 0.3rem 0;
}

button {
  background-color: #fefefe;
  width: 1.95rem;
  box-shadow: inset 0px 0px 1px 1px rgba(220, 220, 222, 0.7);
  font-weight: 550;
  height: 1.95rem;
  padding: 0;
}

</style>
