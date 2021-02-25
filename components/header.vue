<template>
  <div class="d-flex" style="-webkit-box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%)">
    <div><img src="/Images/S.png" alt="" class="size mt-2" /></div>

    <div class="d-flex align-items-center">
      <div class="pl-3 dropdown" v-for="(item, index) in Nav" :key="index">
        <button
          class="dropbtn font-weight-bold heading-hover text-color"
          style="padding-bottom: 44px"
        >
          {{ item.heading }}
        </button>
        <div class="dropdown-content">
          <div class="dropdown-card">
            <div v-for="(item1, index) in item.subHeading" :key="index">
              <div class="d-flex pl-5 pt-4 test">
                <b class="text-uppercase"> {{ item1.productType }} > </b>
                <a
                  v-for="(item2, index) in item1.products"
                  :key="index"
                  href="#"
                >
                  <div class="d-inline pt-0">{{ item2 }}</div>
                </a>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="input-group ml-auto inputbox-width">
      
        <span class="input-group-text inputbox-effect" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            stroke="#696e79"
            height="20px"
            width="20px"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            /></svg
        ></span>
         <input
        type="text"
        class="form-control inputbox-effect d-flex"
        placeholder="Search for products, brands and more"
      />
     
     
    </div>
    <div class="rightside-icons d-flex ">
      <div class="dropdown drp-profile" style="">
        <button class="dropbtn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#696e79"
            height="26px"
            class="align-items-center"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h6 >Profile</h6>
        </button>
        <div class="dropdown-content line-height profile-card" style="padding-bottom: 25px">
          <a href="#">Orders</a>
          <a href="#">Wishlist</a>
          <a href="#">GiftCards</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <button class="dropbtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#696e79"
          height="22px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h6>Wishlist</h6>
      </button>
      <button class="dropbtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#696e79"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h6>Bag</h6>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Nav: [
        {
          heading: 'MEN',

          subHeading: [
            {
              productType: 'Topwear',
              products: ['Tshirts', 'Jackets', 'Suits', 'Shirts'],
            },
            {
              productType: 'Bottomwear',
              products: ['Jeans', 'Trousers', 'Shorts'],
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

        {
          heading: 'WOMEN',
          subHeading: [
            {
              productType: 'Western Wear',
              products: ['Dresses', 'Jumpsuits', 'Tops'],
            },
            {
              productType: 'Footwear ',
              products: ['Flat', 'Heels', 'Casual Shoes'],
            },
            {
              productType: 'Jewellery',
              products: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings'],
            },
            {
              productType: 'Gadgets',
              products: ['Fitness Gadgets', 'Headphones', 'Speakers'],
            },
            {
              productType: 'Beauty Products',
              products: ['Makeup', 'Fragrances', 'Skincare'],
            },
          ],
        },
        {
          heading: 'KIDS',
          subHeading: [
            {
              productType: 'Boys Clothing',
              products: ['Tshirts', 'Shirts', 'Shorts', 'Trousers'],
            },
            {
              productType: 'Girls Clothing',
              products: ['Dresses', 'Top', 'Tshirts', 'Ethnic Wear'],
            },
            {
              productType: 'Boys Footwear',
              products: ['Casual Shoes', 'Sports Shoes', 'Flip Flops'],
            },
            {
              productType: 'Girls Footwear',
              products: ['Casual Shoes', 'Sports Shoes', 'Flip Flops'],
            },
            {
              productType: 'Infants',
              products: ['Clothing sets', 'Bottomwear', 'Shirts & Tshirts'],
            },
          ],
        },
        {
          heading: 'HOME DECOR',
          subHeading: [
            {
              productType: 'Flooring',
              products: ['Carpets', 'Door Mats', 'Floor Mats'],
            },
            {
              productType: 'Lamps & Lighting',
              products: ['Floor Lamps', 'Table Lamps', 'Wall Lamps'],
            },
            {
              productType: 'Kitchen & Table',
              products: [
                'Dinnerware & Serveware',
                'Cups & Mugs',
                'Bar & Drinkware',
              ],
            },
          ],
        },
      ],
    }
  },
}
</script>
<style scoped>
.size {
  width: 60px;
  margin-left: 40px;
}
.spacing {
  margin-left: 25px;
  font-size: 14px;
}
.inputbox-effect {
  border-style: none !important;
  border-radius: 0;
  background: #f5f5f6;
  font-size: 14px !important;
}
.inputbox-effect:active {
  border-style: none !important;
}
.inputbox-width {
  width: 330px;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 60px;
}
.card-design {
  list-style: none;
}
.dropbtn {
  background-color: white;
  color: black;
  padding: 16px;
  font-size: 16px;
  border: none;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 0;
  pointer-events: none;
  visibility: hidden;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown:hover .dropdown-content {
  visibility: visible;
}

.heading-hover:hover {
  border-bottom: 4px solid #a6a6a6;
}
.dropdown:hover .dropbtn {
  background-color: #fff;
}
.line-height {
  line-height: 2px;
}

.dropdown-card {
  width: 1135px;
  background-color: white;
  position: absolute;
  left: 5%;
  z-index: 1;
  pointer-events: auto;
}

h6 {
  font-size: 12px;
}

.text-color {
  color: #696e79;
}

.test a {
  margin-top: -12px;
}

.drp-profile {
  position: relative;
  height: 60px;
  
}

.profile-card {
  width: 335px;
  left: -137.5px;
  top: 83px;
  position: absolute;
  padding: 25px 20px 15px;
  z-index: 9;
  box-shadow: 0 1px 10px rgb(0 0 0 / 8%);
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
  background-color: #fff;
  color: #3e4152;
  border: 1px solid #f5f5f6;
  /* margin: -2px 0; */
  height: max-content;
  /* margin-top: 18px; */
}

.drp-profile:hover .profile-card  {
    visibility: visible;
    opacity: 1;
}
</style>
