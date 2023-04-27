<template>
  <div class="row">
    <div class="col-md-3"><LeftSidebar :brandArray="brandArray" /></div>
    <nuxt-link :to="`/${$route.params.productList}/product`">abcds</nuxt-link>
    <div class="col-md-9 mt-5">
      <div v-for="item in arr" :key="item">
        <div v-for="item2 in item.b" :key="item2">
          {{ item2 }}
        </div>
      </div>
      <div v-for="brand in brandsList" :key="brand"></div>

      <div>
        <div class="row">
          <div
            class="col-md-3 mb-1"
            v-for="product in brandsList.products"
            :key="product"
          >
            <nuxt-link :to="`/${$route.params.productList}/products`"
              ><img class="img-fluid mb-2" :src="product.img" alt=""
            /></nuxt-link>
            <div class="px-2">
              <b class="text-uppercase">{{ product.Brand }}</b>
              <p class="font-weight-normal mb-0" style="font-size: 14px">
                {{ product.Type }}
              </p>
              <b
                style="
                  line-height: 15px;
                  margin: 10px 0 6px;
                  white-space: nowrap;
                "
              >
                Rs. {{ product.Price }}
              </b>
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
      // params: this.$route.params.productList,

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
                  Price: 1215,
                  Type: ' Printed Round Neck T-shirt',
                  color: 'Green',
                  img: '/Images/men/menTshirts/tshirt1.png',
                },
                {
                  Brand: 'UCB',
                  Quantity: 6,
                  Price: 1015,
                  Type: 'Printed Round Neck T-shirt',
                  color: 'Blue',
                  img: '/Images/men/menTshirts/tshirt2.png',
                },
                {
                  Brand: 'Highlander',
                  Quantity: 6,
                  Price: 915,
                  Type: 'Slub Effect Henley Neck T-shirt',
                  color: 'Grey',
                  img: '/Images/men/menTshirts/tshirt3.png',
                },
                {
                  Brand: 'Jack & Jones',
                  Quantity: 6,
                  Price: 2287,
                  Type: 'Solid Round Neck T-shirt',
                  color: 'Green',
                  img: '/Images/men/menTshirts/tshirt4.png',
                },
                {
                  Brand: 'Wrangler',
                  Quantity: 6,
                  Price: 876,
                  Type: 'Printed Round Neck T-shirt',
                  color: 'Black',
                  img: '/Images/men/menTshirts/tshirt5.png',
                },
                {
                  Brand: 'Levis',
                  Quantity: 6,
                  Price: 1005,
                  Type: 'Printed solid Slim Fit T-shirt',
                  color: 'Yellow',
                  img: '/Images/men/menTshirts/tshirt6.png',
                },
                {
                  Brand: 'Jack & Jones',
                  Quantity: 6,
                  Price: 1715,
                  Type: 'Solid Polo Collar T-shirt',
                  color: 'Blue',
                  img: '/Images/men/menTshirts/tshirt7.png',
                },
                {
                  Brand: 'Levis',
                  Quantity: 6,
                  Price: 1818,
                  Type: 'Printed Round Neck T-shirt',
                  color: 'Green',
                  img: '/Images/men/menTshirts/tshirt8.png',
                },
              ],
            },
            {
              prd: 'Jackets',
              products: [
                {
                  Brand: 'Arrow',
                  Quantity: 8,
                  Price: 1985,
                  Type: 'Solid Denim Jacket',
                  color: 'Red',
                  img: '/Images/men/menJacket/jacket1.png',
                },
                {
                  Brand: 'UCB',
                  Quantity: 6,
                  Price: 999,
                  Type: 'Solid Bomber Jacket',
                  color: 'Black',
                  img: '/Images/men/menJacket/jacket2.png',
                },
                {
                  Brand: 'Jack & Jones',
                  Quantity: 6,
                  Price: 2190,
                  Type: 'Solid Leather Jacket',
                  color: 'Black',
                  img: '/Images/men/menJacket/jacket3.png',
                },
                {
                  Brand: 'Wrangler',
                  Quantity: 6,
                  Price: 1915,
                  Type: 'Solid Tailored Jacket',
                  color: 'Grey',
                  img: '/Images/men/menJacket/jacket4.png',
                },
                {
                  Brand: 'Levis',
                  Quantity: 6,
                  Price: 815,
                  Type: 'Solid Bomber Jacket',
                  color: 'Black',
                  img: '/Images/men/menJacket/jacket5.png',
                },
              ],
            },
            {
              prd: 'Suits',
              products: [
                {
                  Brand: 'Arrow',
                  Quantity: 8,
                  Price: 1515,
                  color: 'Red',
                  img: '/Images/men/menSuit/suit1.png',
                },
                {
                  Brand: 'Peter England',
                  Quantity: 6,
                  Price: 765,
                  color: 'Black',
                  img: '/Images/men/menSuit/suit2.png',
                },
                {
                  Brand: 'Van Heusen',
                  Quantity: 6,
                  Price: 987,
                  color: 'Black',
                  img: '/Images/men/menSuit/suit3.png',
                },
                {
                  Brand: 'Park Avenue',
                  Quantity: 6,
                  Price: 1815,
                  color: 'Black',
                  img: '/Images/men/menSuit/suit4.png',
                },
                {
                  Brand: 'Park Avenue',
                  Quantity: 6,
                  Price: 1015,
                  color: 'Black',
                  img: '/Images/men/menSuit/suit5.png',
                },
              ],
            },
            {
              prd: 'Shirts',
              products: [
                {
                  Brand: 'Arrow',
                  Quantity: 8,
                  color: 'Red',
                  img: '/Images/men/menShirts/shirt1.png',
                },
                {
                  Brand: 'UCB',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/men/menShirts/shirt2.png',
                },
                {
                  Brand: 'Peter England',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/men/menShirts/shirt3.png',
                },
                {
                  Brand: 'Van Heusen',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/men/menShirts/shirt4.png',
                },
                {
                  Brand: 'Van Heusen',
                  Quantity: 6,
                  color: 'Black',
                  img: '/Images/men/menShirts/shirt5.png',
                },
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
                  Price: 1215,
                  color: 'Red',
                  img: '/Images/womens/womensDress/dress2.png',
                },
                {
                  Brand: 'Miss Chase',
                  Quantity: 6,
                  Price: 1714,
                  color: 'Black',
                  img: '/Images/womens/womensDress/dress1.png',
                },
                {
                  Brand: 'Vero Moda',
                  Quantity: 6,
                  Price: 3215,
                  color: 'Black',
                  img: '/Images/womens/womensDress/dress3.png',
                },
                {
                  Brand: 'DOROTHY PERKINS',
                  Quantity: 6,
                  Price: 1675,
                  color: 'Black',
                  img: '/Images/womens/womensDress/dress4.png',
                },
                {
                  Brand: 'DOROTHY PERKINS',
                  Quantity: 6,
                  Price: 1965,
                  color: 'Black',
                  img: '/Images/womens/womensDress/dress5.png',
                },
                {
                  Brand: 'Oxolloxo',
                  Quantity: 6,
                  Price: 3215,
                  color: 'Black',
                  img: '/Images/womens/womensDress/dress6.png',
                },
                {
                  Brand: 'HERE&NOW',
                  Quantity: 6,
                  Price: 1546,
                  color: 'Black',
                  img: '/Images/womens/womensDress/dress7.png',
                },
              ],
            },
            {
              prd: 'Jumpsuits',
              products: [
                {
                  Brand: 'Cottinfab',
                  Quantity: 8,
                  Price: 1615,
                  color: 'Red',
                  img: '/Images/womens/womensJumpsuit/womensJumpsuit1.png',
                },
                {
                  Brand: 'DressBerry',
                  Quantity: 6,
                  Price: 1324,
                  color: 'Black',
                  img: '/Images/womens/womensJumpsuit/womensJumpsuit2.png',
                },
                {
                  Brand: 'ONLY',
                  Quantity: 6,
                  Price: 1865,
                  color: 'Black',
                  img: '/Images/womens/womensJumpsuit/womensJumpsuit3.png',
                },
                {
                  Brand: 'Miss Chase',
                  Quantity: 6,
                  Price: 1432,
                  color: 'Black',
                  img: '/Images/womens/womensJumpsuit/womensJumpsuit4.png',
                },
                {
                  Brand: 'Miss Chase',
                  Quantity: 6,
                  Price: 2215,
                  color: 'Black',
                  img: '/Images/womens/womensJumpsuit/womensJumpsuit5.png',
                },
                {
                  Brand: 'Miss Chase',
                  Quantity: 6,
                  Price: 1789,
                  color: 'Black',
                  img: '/Images/womens/womensJumpsuit/womensJumpsuit6.png',
                },
              ],
            },
            {
              prd: 'Tops',
              products: [
                {
                  Brand: 'Vero Moda',
                  Quantity: 8,
                  Price: 1546,
                  color: 'Red',
                  img: '/Images/womens/womensTop/womensTop1.png',
                },
                {
                  Brand: 'DressBerry',
                  Quantity: 6,
                  Price: 1615,
                  color: 'Black',
                  img: '/Images/womens/womensTop/womensTop2.png',
                },
                {
                  Brand: 'Van Heusen Woman',
                  Quantity: 6,
                  Price: 2215,
                  color: 'Black',
                  img: '/Images/womens/womensTop/womensTop3.png',
                },
                {
                  Brand: 'Miss Chase',
                  Quantity: 6,
                  Price: 1845,
                  color: 'Black',
                  img: '/Images/womens/womensTop/womensTop4.png',
                },
                {
                  Brand: 'Harpa',
                  Quantity: 6,
                  Price: 985,
                  color: 'Black',
                  img: '/Images/womens/womensTop/womensTop5.png',
                },
                {
                  Brand: 'Miss Chase',
                  Quantity: 6,
                  Price: 2295,
                  color: 'Black',
                  img: '/Images/womens/womensTop/womensTop6.png',
                },
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
        (product) => product.category === this.cName
      )
      let subcategory = category.subcategory.find(
        (subcategory) => subcategory.prd === this.$route.params.productList
      )

      return subcategory
    },
    brandArray() {
      let array = this.brandsList.products.map((x) => x.Brand)
      let newarray = array.filter(function (v, i, self) {
        return i == self.indexOf(v)
      })
      return newarray
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
