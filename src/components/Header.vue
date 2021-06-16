<!-- Path in web-client: \src\layouts\brand\ -->
<!-- in Brand.vue replace all BrandHeader with newHeader -->
<!-- replace "./brand/Header" with "./brand/newHeader" -->

<template lang="pug">
.brand-settings-header
	.left_col
		a(href="./main")
			img(src="@/assets/logo.svg" style = "width:20px;")
			//Place search
	.right_col
		a(href="./dashboard")
			img(src="@/assets/img/icon/Home.svg")
			
		//inventory page not built	
		a(href="./inventory")
			img.icon(src="@/assets/img/icon/Inventory.svg" class="icon")
			
			
		a(href="./products")
			img(src="@/assets/img/icon/Catalog.svg")
			
			
		a(href="./orders")
			img(src="@/assets/img/icon/Orders.svg")

		a(href="./payment")
			img(src="@/assets/img/icon/Payments.svg")
			
		//docs page not built
		a(href="./docs")
			img(src="@/assets/img/icon/Documents.svg")
			
		//inbox page not built
		a(href="./messaging")
			img(src="@/assets/img/icon/Inbox.svg")
		.brandDropdown(v-on:click="showDropdown(dropDown)")
			img(src="@/assets/logo.svg" style = "max-width:24px; max-height:24px;")
			p placeholder name
			.menu(id="dropDown" style="display:none;")
				img(src="@/assets/img/icon/user.svg")
				a(href="./profile") Profile
				br
				img(src="@/assets/img/icon/setting.svg")
				a(href="./subscription") Settings
				br
				.signOut
					img(src="@/assets/img/icon/poweroff.svg")
					p Sign Out
			
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    showDropdown: function() {
      if (document.getElementById("dropDown").style.display === "none") {
        document.getElementById("dropDown").style.display = "block"
      } else {
        document.getElementById("dropDown").style.display = "none"
      }
    }
  }
}
</script>

<style>
.brand-settings-header {
  margin-bottom: 50px;
  height: 64px;
  display: flex;
  flex-flow: column wrap;
  box-shadow: 2px 2px 5px grey;
}
.left_col {
  width: 40%;
}

.left_col a {
  position: relative;
  left: 40%;
  top: 20%;
}

.left_col span {
  position: relative;
  left: 50%;
}

.right_col {
  display: flex;
  width: 60%;
  justify-content: center;
}

.navigation {
  /*width: 15%;*/
  height: 50px;
  background-color: blue;
}

.right_col img,
.brandDropdown {
  margin-right: 24px;
}

.menu {
  background-color: white;
  position: relative;
  z-index: 100;
}

.menu a {
  font-size: 14px;
  text-align: left;
  color : #2c3e50;
  text-underline: none;
}

.menu img {
  float:left;
}
.signOut {
  color: #ff6132;
  display: flex;
  text-underline: #ff6132;
}

.signOut img {
  justify-content: center;
}

.signOut:hover {
  cursor: pointer;
}
</style>
