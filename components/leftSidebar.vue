<template>
  <div class="pl-4">
    <div><h6 class="pb-4">FILTERS</h6></div>
    <hr />
    <div class="position-relative">
      <h6>BRAND</h6>

      <div v-for="(items, index) in brandsList" :key="index">
        <input type="checkbox" aria-label="Checkbox for following text input" />
        <span class="pl-2">{{ items }}</span>
      </div>
      <hr />
      <div>
        <h6>COLOR</h6>
        <div v-for="(items1, index) in color" :key="index">
          {{ items1 }}
        </div>
      </div>

      <hr />

      <div class="circle-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          stroke="#696e79"
          height="15px"
          width="15px"
          class="svg-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['brandsList'],
  data() {
    return {}
  },
}
</script>

<style scoped>
.circle-background {
  position: absolute;
  top: 0;
  right: 15px;
  width: 30px;
  height: 30px;
  background-color: #f5f5f6;
  border-radius: 50%;
}

.svg-icon {
  position: absolute;
  right: 9px;
  top: 7px;
}
</style>
