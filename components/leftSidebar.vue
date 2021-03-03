<template>
  <div class="pl-4">
    <div><h6 class="pb-4">FILTERS</h6></div>
    <hr />
    <div class="row">
      <div class="col-md-11">
        <h6>BRAND</h6>
        <div v-for="(items, index) in brands" :key="index">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
          />
          <span class="pl-2">{{ items }}</span>
        </div>
        <hr />
      </div>
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
  data() {
    return {
      productList: [
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
            {
              category: 'Tshirts',
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
      color: ['grey', 'blue', 'black'],
      brands: ['Arrow', 'UCB', 'Levis', 'Allen Solly', 'Spykar', 'Wrangler'],
    }
  },
}
</script>

<style scoped>
.circle-background {
  position: absolute;
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
