<template>
  <div class="row">
    <div class="col-md-3"><LeftSidebar :brandsList="brandsList" /></div>
    <div class="col-md-9 mt-5">
      <div v-for="item in arr" :key="item">
        <div v-for="item2 in item.b" :key="item2">
          {{ item2.b }}
        </div>
      </div>
      <div v-for="brand in brandsList" :key="brand"></div>

      <div class="grid-container">
        <div class="grid-item">
          <div v-for="(product, index) in products" :key="index">
            <div
              class="row"
              v-for="product1 in product.subcategory"
              :key="product1"
            >
              <div
                class="col-md-3"
                v-for="product2 in product1.products"
                :key="product2"
              >
                <img class="img-fluid mb-4" :src="product2.img" alt="" />
              </div>
            </div>
          </div>
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
      // arr: [
      //   {
      //     a: 1,
      //     b: [
      //       { a: 1, b: 2 },
      //       { a: 1, b: 2 },
      //       { a: 1, b: 2 },
      //     ],
      //   },
      //   {
      //     a: 1,
      //     b: [
      //       { a: 1, b: 2 },
      //       { a: 1, b: 2 },
      //       { a: 1, b: 2 },
      //     ],
      //   },
      // ],
      products: [
        {
          category: 'Men',
          subcategory: [
            {
              prd: 'Tshirts',
              products: [
                {
                  Brand: 'Arrow',
                  Quantity: 8,
                  color: 'Red',
                  img: '/Images/menTshirts/tshirt1.png',
                },
                {
                  Brand: 'UCB',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/menTshirts/tshirt2.png',
                },
                {
                  Brand: 'Highlander',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/menTshirts/tshirt2.png',
                },
                {
                  Brand: 'Jack & Jones',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/menTshirts/tshirt2.png',
                },
                {
                  Brand: 'Wrangler',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/menTshirts/tshirt2.png',
                },
                {
                  Brand: 'Levis',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/menTshirts/tshirt2.png',
                },
              ],
            },
            {
              prd: 'Jackets',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
                { Brand: 'Jack & Jones', Quantity: 6, color: 'Black' },
                { Brand: 'Wrangler', Quantity: 6, color: 'Black' },
                { Brand: 'Levis', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Suits',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'Peter England', Quantity: 6, color: 'Black' },
                { Brand: 'Van Heusen', Quantity: 6, color: 'Black' },
                { Brand: 'Park Avenue', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Shirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
                { Brand: 'Peter England', Quantity: 6, color: 'Black' },
                { Brand: 'Van Heusen', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          category: 'Women',
          subcategory: [
            {
              prd: 'Dresses',
              products: [
                {
                  Brand: 'MANGO',
                  Quantity: 8,
                  color: 'Red',
                  img: '/Images/womensDress/dress1.png',
                },
                { Brand: 'DOROTHY PERKINS', Quantity: 6, color: 'Black' },
                { Brand: 'Vero Moda', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Jumpsuits',
              products: [
                { Brand: 'Cottinfab', Quantity: 8, color: 'Red' },
                { Brand: 'DressBerry', Quantity: 6, color: 'Black' },
                { Brand: 'ONLY', Quantity: 6, color: 'Black' },
                { Brand: 'Miss Chase', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Tops',
              products: [
                { Brand: 'Vero Moda', Quantity: 8, color: 'Red' },
                { Brand: 'DressBerry', Quantity: 6, color: 'Black' },
                { Brand: 'Van Heusen Woman', Quantity: 6, color: 'Black' },
                { Brand: 'Miss Chase', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          category: 'Kids',
          subcategory: [
            {
              prd: 'Tshirts',
              products: [
                { Brand: 'Arrow', Quantity: 8, color: 'Red' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
                { Brand: 'The Childrens Place', Quantity: 6, color: 'Black' },
                { Brand: 'Gini and Jony', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Shirts',
              products: [
                { Brand: 'U.S. Polo Assn. Kids', Quantity: 8, color: 'Red' },
                { Brand: 'Gini and Jony', Quantity: 6, color: 'Black' },
                { Brand: 'UCB', Quantity: 6, color: 'Black' },
                { Brand: 'Pepe Jeans', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Shorts',
              products: [
                { Brand: 'U.S. Polo Assn. Kids', Quantity: 8, color: 'Red' },
                { Brand: 'Gini and Jony', Quantity: 6, color: 'Black' },
                { Brand: 'Urban Dog', Quantity: 6, color: 'Black' },
                { Brand: 'Pepe Jeans', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Trousers',
              products: [
                { Brand: 'U.S. Polo Assn. Kids', Quantity: 8, color: 'Red' },
                { Brand: 'Gini and Jony', Quantity: 6, color: 'Black' },
                { Brand: 'Urban Dog', Quantity: 6, color: 'Black' },
                { Brand: 'Pepe Jeans', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
        {
          category: 'Decor',
          subcategory: [
            {
              prd: 'Carpets',
              products: [
                { Brand: 'Story@home', Quantity: 8, color: 'Red' },
                { Brand: 'RUGSMITH', Quantity: 6, color: 'Black' },
                { Brand: 'OBSESSIONS', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Door Mats',
              products: [
                { Brand: 'BIANCA', Quantity: 8, color: 'Red' },
                { Brand: 'ROMEE', Quantity: 6, color: 'Black' },
                { Brand: 'Story@home', Quantity: 6, color: 'Black' },
              ],
            },
            {
              prd: 'Floor Mats',
              products: [
                { Brand: 'Portico New York', Quantity: 8, color: 'Red' },
                { Brand: 'SPACES', Quantity: 6, color: 'Black' },
                { Brand: 'Tistabene', Quantity: 6, color: 'Black' },
              ],
            },
          ],
        },
      ],
    }
  },
  computed: {
    brandsList() {
      let category = this.products.find(
        (product) => product.category === this.$route.params.headingType
      )
      let subcategory = category.subcategory
        .find(
          (subcategory) => subcategory.prd === this.$route.params.productList
        )
        .products.map((x) => x.Brand)
      console.log('hi')
      return subcategory
    },
    // imgList() {
    //   let category = this.products.find(
    //     (product) => product.category === this.$route.params.headingType
    //   )
    //   let subcategory = category.subcategory
    //     .find(
    //       (subcategory) => subcategory.prd === this.$route.params.productList
    //     )
    //     .products.map((x) => x.img)
    //   return subcategory
    // },
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
