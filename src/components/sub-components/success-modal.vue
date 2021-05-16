<template lang="pug">
.mainDiv(id="validateModal" style="display:none;")
	.white_div(style="height: 900px; width: 1440px;")
	.modal(id="validate" style="padding: 12px; display: block;" role= "dialog")
		.flag
			img(src="@/assets/img/icon/validate.svg" style="margin-bottom: 7px;")
		.header
			p(style="font-size:24px; margin-bottom: 12px; color: #262626;") Thanks for being a Premium Subscriber!
		.text
			p You can now message buyers, add more products to 
			p your catalog, and more. 
		.button(style="margin-top: 30px;")
			a(href="./profile" style="color: #4a8a5d;") Go to your Profile
</template>

<script>
export default {
  data() {
    return {
      //modal: true
    }
  },
  methods: {
    vanish() {
      document.getElementById("popup").style.display = "none"
    }
  }
}
</script>

<style>
.close_button {
  text-align: right;
}
h1 {
  font-size: 24px;
}
#validate {
  position: absolute;
  width: 459px;
  height: 286px;
  left: 510px;
  top: 182px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  text-align: center;
}
.close_button img:hover {
  cursor: pointer;
}

.button {
  outline: 1px solid #4a8a5d;
}
</style>
