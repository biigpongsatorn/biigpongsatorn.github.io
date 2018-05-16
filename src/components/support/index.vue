<template>
  <div class="f-left w-100pct">
    <div class="my-title pd-hrzt-30px">
      Support
    </div>
    <div class="f-left w-100pct pd-hrzt-30px">
      <div class="markdown">
        If you feel like this project, You can support me in a small way with starring ⭐ <a :href="link">this project</a>.
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'license',
  props: {
    link: {
      type: String,
      default: '#'
    }
  }
}
</script>
