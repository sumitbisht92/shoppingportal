<template>
  <div class="row">
    <div class="col-md-3 pl-4"><LeftSidebar /></div>
    <div class="col-md-9">
      {{ testValue }}
      {{params}}
      <!-- For iamges -->
      <div class="grid-container">
        <!-- {{ subcat.productType }} -->
        <div class="grid-item">
          <span>
            <img :src="itemsub" alt="" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params:this.$route.params,
      dropdown: [
        {
          heading: 'Men',
          subHeading: [
            {
              category: 'Shirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          heading: 'Women',
          subHeading: [
            {
              category: 'Shirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          heading: 'kids',
          subHeading: [
            {
              category: 'Shirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
      ],
    }
  },
  computed: {
    testValue() {
      this.dropdown.filter(function (num) {
        // return num == this.params.headingType
      })
    },
  },
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 5px;
}
.grid-item {
  padding: 10px;
  font-size: 30px;
  text-align: center;
}
</style>
