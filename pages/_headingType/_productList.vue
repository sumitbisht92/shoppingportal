<template>
  <div class="row">
    <div class="col-md-3"><LeftSidebar /></div>
    <div class="col-md-9 mt-5">
      <div v-for="brand in brandsList" :key="brand">
        {{brand}}
      </div>

      <!-- For iamges -->
      <div class="grid-container">
        <!-- {{ subcat.productType }} -->
        <div class="grid-item">
          <span>
            <!-- <img :src="itemsub" alt="" /> -->
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
      params: this.$route.params.headingType,
      products: [
        {
          category: 'men',
          subcategory: [
            {
              prd: 'tshirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'jackets',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          category: 'women',
          subcategory: [
            {
              prd: 'tshirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'jackets',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          category: 'kids',
          subcategory: [
            {
              prd: 'tshirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'jackets',
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
    // arrFun() {
    //   let arr = this.products.filter(function (val) {
    //     return val.category == 'men'
    //   })
    //   return arr
    // },
    brandsList() {
      let category = this.products.find(
        (product) => product.category === this.$route.params.headingType
      )
      let subcategory = category.subcategory.find(
        (subcategory) => subcategory.prd === this.$route.params.productList
      ).products.map(x=> x.Brand)
      return subcategory
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
