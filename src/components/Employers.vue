<template>
  <div>
    <ul 
      v-for="employer in employers"
      v-bind:key='employer'
    >
      <li><strong>{{employer.id }}.</strong>{{employer.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
props: ['employers']
}
</script>

<style>

</style>