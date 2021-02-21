<template lang="pug">
.mainDiv(id= "paymentPage" style="overflow-x: scroll;")
	Modal
	Reward
	.testDiv(id="testDiv")
	form(id="paymentForm" name="paymentForm")
		.row
			h1 Select Payment Method
			img(src= "@/assets/img/icon/secure.svg")
		.paymentMethod
			
			.method.h2(v-if="card" style="background-color:#E2EEEC; color: #595959; border:none;")
				img(src="@/assets/img/icon/big-card-green.svg") 
				p CREDIT CARD
			.method.h2(v-if="!card" v-on:click="card=true") 
				img(src="@/assets/img/icon/big-card.svg")
				p CREDIT CARD
			.method.h2(v-if="!card" style="background-color:#E2EEEC; color: #595959; border:none;")
				img(src="@/assets/img/icon/big-bank.svg")
				p WIRE TRANSFER
			.method.h2(v-if="card" v-on:click="card=false")
				img(src="@/assets/img/icon/big-bank.svg")
				p WIRE TRANSFER
		.info
			.cardInfo(v-if="card")
				.field.lng
					img(src="@/assets/img/icon/user.svg" style="width:18px; height:18px;")
					input(type="text" placeholder=" Name on Card" name="cardName")
				.field.lng
					img(src= "@/assets/img/icon/credit-card.svg")
					input(type="text" placeholder=" Card Number" name="cardNumber")
					img(src= "@/assets/img/icon/supported.svg")
				.month_cvv
					.field.shrt
						img(src= "@/assets/img/icon/calendar.svg")
						input(id="date" type="text" placeholder=" MM/YY" name="cardDate" @keypress="addSlash" value= "" maxlength= "5")
					.field.shrt
						img(src= "@/assets/img/icon/number.svg")
						input(type="number" placeholder=" CVV" name="cardCvv")
				.saveCheck(style="display:flex;")
					input(type="checkbox" label="Save Card as Default" name="cardSave"  style="display:block; position: relative; top: 5px;" v-on:click="cardCheck")
					p(style="margin-left:8px;") Save Card as Default
			.wireInfo(v-if="!card")
				.bankAddress
					h1 CITIBANK, N.A.
					h2 7140 Pacific Blvd.
					h2 Huntington Park CA 90255.
					h3 USA.
				.bankDetails
					h2 Swift Code: CITI US 33
					h2 Routing/ABA Number: 322271724
					h2 Account Number: 207096058
				.landingAddress
					h2 ATTN:  Landing International Inc.
					h2 1330 W. 12th St. Suite A
					h2 Los Angeles, CA 90015 USA
			hr
			p *Your membership will be automatically renewed on {{renew_date}} and you will be charged $2000 (plus tax)
			input(v-if="card" id="submitForm" type="button" value="Purchase Now" v-on:click="formCheck")
	.orderSummary(id="summary")
		h1 Order Summary
		.header
			p Premium Subscription
			p Access to our full site features including:
		.checks
			.row
				img(src="@/assets/img/icon/check-circle.svg")
				p Buyer Messaging
			.row
				img(src="@/assets/img/icon/check-circle.svg")
				p Unlimited Orders
			.row
				img(src="@/assets/img/icon/check-circle.svg")
				p Special Offers and more.
		.row
			.item
				p 1 Year Premium Subscription:
				p Tax:
			.price
				p $2000.00
				p $120.00	
		hr
		.row(id="total_row")
			.item
				strong TODAY'S TOTAL:
			.price(id="total")
				p $21200.00
	.test(id="testDiv" style= "flex")
				
</template>

<script>
import Modal from "modal.vue"
import Reward from "reward.vue"
import createSubscription from "@/create-subscription.js"
export default {
  components: {
    Modal,
    Reward
  },
  data() {
    return {
      card: true,
      //renew_date: new Date().getDate() + '/' + String(parseInt(new Date().getMonth())+1) +'/' + String(new Date().getFullYear()+1),
      subscriptionID: "",
      renew_date:
        String(parseInt(new Date().getMonth()) + 1) +
        "/" +
        new Date().getDate() +
        "/" +
        String(new Date().getFullYear() + 1)
      //modal:true
    }
  },
  methods: {
    formCheck() {
      if (this.card == true && this.cardCheck() == true) {
        this.reward()
      } else {
        this.appear("popup")
      }
    },

    addSlash() {
      var text = document.forms["paymentForm"]["cardDate"].value.toString()
      if (text.length == 2) {
        document.forms["paymentForm"]["cardDate"].value += "/"
      }
    },
    appear(el) {
      document.getElementById(el).style.display = "block"
    },
    reward() {
      document.getElementById("validateModal").style.display = "block"
      document.getElementById("paymentForm").style.display = "none"
      document.getElementById("summary").style.display = "none"
    },
    cardCheck() {
      var name = document.forms["paymentForm"]["cardName"].value.toString()
      var first_name = name.slice(0, name.indexOf(" "))
      var last_name = name.slice(name.indexOf(" "))
      var number = document.forms["paymentForm"]["cardNumber"].value.toString()
      var date = document.forms["paymentForm"]["cardDate"].value.toString()
      var month = date.slice(0, 2)
      var year = date.slice(3)
      var cvv = document.forms["paymentForm"]["cardCvv"].value.toString()
      if (name == "") {
        this.appear("popup")
        return false
      }

      if (number.length < 4) {
        this.appear("popup")
        return false
      }

      if (date.length != 5) {
        this.appear("popup")
        return false
      }

      if (parseInt(month) > 12 || parseInt(year) < 20) {
        this.appear("popup")
        return false
      }

      if (parseInt(year) == 20 && parseInt(new Date().getMonth()) + 1 > parseInt(month)) {
        this.appear("popup")
        return false
      }

      if (cvv.length != 3 && cvv.length != 4) {
        this.appear("popup")
        return false
      }
      var sbID = createSubscription(first_name, last_name, number, month + year, cvv)
      if (sbID == false) {
        this.appear("popup")
        return false
      } else {
        this.setSubscriptionId(sbID)

        return true
      }
    },
    setSubscriptionId(sub_id) {
      var brand = this.$store.getters["brand/brand"]
      brand.subscriptions[0].subscriptionId = sub_id
      this.$store.dispatch[("/brand/updateBrand", brand)]
    }
  }
}
</script>

<style lang="css">
.mainDiv {
  display: flex;
  flex-flow: row wrap;
  width: 1440px;
  height: 750px !important;
  margin-bottom: 200px;
  justify-content: center;
}

h1 {
  /*font-family: 'ProximaNova-Regular';*/
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
}
p {
  font-size: 12px;
  line-height: 22px;
}

.paymentMethod {
  display: flex;
  margin-top: 20px;
}
.method.h2 {
  display: flex;
  padding: 13px 24px 13px 24px;
  border: 1px solid grey;
  margin-right: 24px;
  vertical-align: middle;
}
.method.h2 img {
  margin-right: 9px;
}
.cardInfo,
.wireInfo {
  dislplay: block;
}
.field {
  dislplay: flex;
  outline: 1px solid grey;
  margin-top: 25px;
}

.field input {
  padding: 8px 12px 8px 2px;
}

.field img {
  vertical-align: -2px;
  margin-left: 8px;
}

.lng {
  width: 392px;
  height: 40px;
}

.shrt {
  margin-right: 24px;
  display: flex;
  width: 160px;
  height: 40px;
}
.month_cvv {
  display: flex;
}
.name {
  display: flex;
}

hr {
  margin-top: 5px;
  margin-bottom: 0px;
}

.header.p {
  margin-right: 40px;
}

.orderSummary {
  width: 262px;
  height: 312px;
  border: 0.5px solid grey;
  padding: 15px;
}

.checks p {
  margin-top: 4px;
  margin-bottom: 4px;
}
.checks {
  margin-left: 8px;
}
.row {
  display: flex;
}
.row h1 {
  margin-right: 162px;
  margin-left: 12px;
}

.item {
  line-height: 26px;
}

.item p {
  margin-left: 12px;
}

.price {
  margin-left: 20px;
  text-align: right;
  line-height: 26px;
}

#submitForm {
  position: relative;
  left: 560px;
  bottom: 80px;
  border: 1px solid #4a8a5d;
  color: #4a8a5d;
  padding: 5px;
}

#paymentForm {
  border: 0.5px solid grey;
  width: 487px;
  padding: 23px;
  margin-right: 24px;
}
#total_row {
  margin-left: 0px;
}

#total_row .price {
  margin-left: 36px;
}

#testDiv {
  position: absolute;
  left: 0%;
}
</style>
