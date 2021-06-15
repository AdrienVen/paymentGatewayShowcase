<template lang="pug">
.mainDiv(id="cancel" style ="display:none; height: 262px;" role= "dialog") 
	.icon
		img(src="@/assets/img/icon/close-icon.svg" @click="vanish" ) 
	.text 
		h1 We hate to see you go... 
		p Once you cancel, your account will revert back to our basic
		p subscription. You will be able to view your existing messages,
		p but you will not be able to send new messages to new buyers. 
	.buttons(style="display:block; text-align:right;")
		p(style="color:#4A8A5D; padding: 8px 16px 8px 16px; border:1px solid #4A8A5D; width:181px; height:40px" v-on:click="vanish") Keep my Subscription 
		p(style="color: #FF6132;" @click="vanish") Cancel Anyways
</template>

<script>
import cancelSubscription from "../scripts/cancel-subscription"
export default {
  methods: {
    vanish() {
      document.getElementById("cancel").style.display = "none"
      cancelSubscription("7236920")
    }
  }
}
</script>

<style>
#cancel {
  position: absolute;
  width: 383px;
  height: 262px !important;
  left: 510px;
  top: 182px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
}
</style>

export default{}
