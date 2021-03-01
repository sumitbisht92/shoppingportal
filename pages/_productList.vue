<template>
  <div class="row">
      <div class="col-md-3">filter </div>
    <div v-for="(productItem, index) in Nav" :key="index" class="col-md-9">
      <div
        v-for="(subcat, index) in productItem.subHeading"
        :key="index"
        class="grid-container "
      >
        <!-- {{ subcat.productType }} -->
        <div v-for="(itemsub, index) in subcat.products" :key="index" class="grid-item ">
          <span >
              <img :src="itemsub" alt="">
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
      Nav: [
        {
          heading: 'Topwear',
          subHeading: [
            {
              productType: 'Shirts',
              products: [
                '/Images/menShirts/shirt1.jpg',
                '/Images/menShirts/shirt2.jpg',
                 '/Images/menShirts/shirt1.jpg',
                '/Images/menShirts/shirt2.jpg',
                 '/Images/menShirts/shirt1.jpg',
                '/Images/menShirts/shirt2.jpg',
                 '/Images/menShirts/shirt1.jpg',
                '/Images/menShirts/shirt2.jpg',
                 '/Images/menShirts/shirt1.jpg',
                '/Images/menShirts/shirt2.jpg',
             
              ],
            },
            {
              productType: 'T shirts',
              products: [
                '/Images/menTshirts/tshirt1.jpg',
                '/Images/menTshirts/tshirt2.jpg',
                 '/Images/menTshirts/tshirt1.jpg',
                '/Images/menTshirts/tshirt2.jpg',
                 '/Images/menTshirts/tshirt1.jpg',
                '/Images/menTshirts/tshirt2.jpg',
              ],
            },
            {
              productType: 'Footwear',
              products: ['Casual Shoes', 'Sports Shoes', 'Flip Flops'],
            },
            {
              productType: 'Gadgets',
              products: ['Fitness Gadgets', 'Headphones', 'Speakers'],
            },
            {
              productType: 'Fashion Accessories',
              products: ['Wallets', 'Belts', 'Perfumes & Deodrants'],
            },
          ],
        },

        // {
        //   heading: 'WOMEN',
        //   subHeading: [
        //     {
        //       productType: 'Western Wear',
        //       products: ['Dresses', 'Jumpsuits', 'Tops'],
        //     },
        //     {
        //       productType: 'Footwear ',
        //       products: ['Flat', 'Heels', 'Casual Shoes'],
        //     },
        //     {
        //       productType: 'Jewellery',
        //       products: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'],
        //     },
        //     {
        //       productType: 'Gadgets',
        //       products: ['Fitness Gadgets', 'Headphones', 'Speakers'],
        //     },
        //     {
        //       productType: 'Beauty Products',
        //       products: ['Makeup', 'Fragrances', 'Skincare'],
        //     },
        //   ],
        // },
        // {
        //   heading: 'KIDS',
        //   subHeading: [
        //     {
        //       productType: 'Boys Clothing',
        //       products: ['Tshirts', 'Shirts', 'Shorts', 'Trousers'],
        //     },
        //     {
        //       productType: 'Girls Clothing',
        //       products: ['Dresses', 'Top', 'Tshirts', 'Ethnic Wear'],
        //     },
        //     {
        //       productType: 'Boys Footwear',
        //       products: ['Casual Shoes', 'Sports Shoes', 'Flip Flops'],
        //     },
        //     {
        //       productType: 'Girls Footwear',
        //       products: ['Casual Shoes', 'Sports Shoes', 'Flip Flops'],
        //     },
        //     {
        //       productType: 'Infants',
        //       products: ['Clothing sets', 'Bottomwear', 'Shirts & Tshirts'],
        //     },
        //   ],
        // },
        // {
        //   heading: 'HOME DECOR',
        //   subHeading: [
        //     {
        //       productType: 'Flooring',
        //       products: ['Carpets', 'Door Mats', 'Floor Mats'],
        //     },
        //     {
        //       productType: 'Lamps & Lighting',
        //       products: ['Floor Lamps', 'Table Lamps', 'Wall Lamps'],
        //     },
        //     {
        //       productType: 'Kitchen & Table',
        //       products: [
        //         'Dinnerware & Serveware',
        //         'Cups & Mugs',
        //         'Bar & Drinkware',
        //       ],
        //     },
        //   ],
        // },
      ],
    }
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
