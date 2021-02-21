<template lang="pug">
.modal( v-if: "modal=true" id="popup" style="padding: 12px; display: none;" role= "dialog")
	.close_button
		img(src="@/assets/img/icon/close-icon.svg" v-on:click="vanish")
	.flag
		img(src="@/assets/img/icon/error.svg" style="margin-bottom: 7px;")
	.header
		p(style="font-size:24px; margin-bottom: 12px; color: #262626;") Oops, something went wrong
	.text
		p Please check your payment details and try again.
		p 
			|If the problem persists please contact 
			a(href="mailto:support@landingintl.com" style="color: #4a8a5d;") support@landingintl.com  
	.button(style="margin-top: 30px;")
		input(type="button" value="Try again" style="color: #4a8a5d;" v-on:click="vanish")
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
#popup {
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
