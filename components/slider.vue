<template>
  <div >
    <div style="position: relative;height:400px;">
      <img :src="imageSrc[currentIndex]" alt="" style="width: 100%;
    height: 100%;"/>

      <div style="position: absolute; bottom: 0; left: 0px; right: 0px">
        <span
          v-for="(image, index) in imageSrc"
          :key="index"
          :class="[currentIndex === index && 'bg-opacity-100']"
          style="
            height: 8px;
            width: 8px;
            background-color: red;
            display: inline-block;
            margin-left: 4px;
          "
          @click="currentIndex = index"
        ></span>
      </div>

      <!-- for chevron buttons  -->

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        width="40px"
        height="40px"
        style="position: absolute; top: 50%; left: 10%"
        @click="decrementCounter"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        width="40px"
        height="40px"
        style="position: absolute; top: 50%; right: 10%"
        @click="incrementCounter"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      imageSrc: ['/Images/mens.jpg', '/Images/kids.jpg', '/Images/womens.png'],
    }
  },
  methods: {
    incrementCounter() {
      this.currentIndex++
      if (this.currentIndex > this.imageSrc.length - 1) {
        this.currentIndex = 0
      }
    },
    decrementCounter() {
      this.currentIndex--
      if (this.currentIndex < 0) {
        this.currentIndex = this.imageSrc.length - 1
      }
    },
  },
}
</script>
