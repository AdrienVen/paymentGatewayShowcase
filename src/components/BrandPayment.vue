<template lang="pug">
.mainDiv(id= "paymentPage" style="")
	Modal
	Reward
	form(id="paymentForm" name="paymentForm")
		.row
			h1 Select Payment Method
			img(src= "@/assets/img/icon/secure.svg")
		.paymentMethod
			
			.method.h2(v-if="card" style="background-color:#E2EEEC; color: #595959; border:none;")
				p CREDIT CARD
			.method.h2(v-if="!card" v-on:click="setCard")
				p CREDIT CARD
			.method.h2(v-if="!card" style="background-color:#E2EEEC; color: #595959; border:none;")
				p WIRE TRANSFER
			.method.h2(v-if="card" v-on:click="setCard")
				img(src="")
				p WIRE TRANSFER
		.info
			.cardInfo(v-if="card")
				.field.lng
					img(src="@/assets/img/icon/user.svg" style="width:18px; height:18px;")
					input(type="text" placeholder=" Name on Card" name="cardName")
				.field.lng
					img(src= "@/assets/img/icon/credit-card.svg")
					input(type="text" placeholder=" Card Number" name="cardNumber" maxlength="16")
				.field.lng
					img(src= "@/assets/img/icon/mail.svg")
					input(type="email" placeholder="Email" name="emailAddress")
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
			.wireInfo(v-if="!card" id="wire")
				.bankAddress
					h1 BANKEXAMPLE, N.A.
					h2 Street name
					h2 Developer Park STATE 00000.
					h3 COUNTRY.
				.bankDetails
					h2 Swift Code:
					h2 Routing/ABA Number:
					h2 Account Number: 000000000
				.landingAddress
					h2 ATTN:  Company Name.
					h2 1234 W. 00th St. Suite Z
					h2 City, State ZIP COUNTRY
			hr
			p *Your membership will be automatically renewed on {{renew_date}} and you will be charged $Amount (plus tax)
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
				
</template>

<script>
import Modal from "./sub-components/error-modal"
import Reward from "./sub-components/success-modal"
import createSubscription from "./scripts/create-subscription.js"
export default {
  components: {
    Modal,
    Reward
  },
  data() {
    return {
      card: true,
      subscriptionID: "",
      renew_date:
        String(parseInt(new Date().getMonth()) + 1) +
        "/" +
        new Date().getDate() +
        "/" +
        String(new Date().getFullYear() + 1)
    }
  },
  methods: {
    formCheck() {
      if (this.card == true && this.cardCheck() == true) {
        this.reward();
      } else {
        this.appear("popup");
      }
    },

    setCard(){
      if (this.card){
        this.card = false;
        document.getElementById("paymentForm").style.height = "700px";

      } else if (!this.card){
        this.card = true;
        document.getElementById("paymentForm").style.height = "450px";
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
      var email = document.forms["paymentForm"]["emailAddress"].value.toString()
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
      var sbID = createSubscription(first_name, last_name, number, month + year, cvv, email)
      if (sbID == false) {
        this.appear("popup")
        return false
      } else {
        this.setSubscriptionId(sbID)

        return true
      }
    }
  }
}
</script>

<style lang="css">
.mainDiv {
  display: flex;
  flex-flow: row wrap;
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
.wireInfo {
  dislplay: block;
}
.field {
  dislplay: flex;
  outline: 1px solid grey;
  margin-top: 25px;
}

.field input {
  padding: 12px 12px 12px 8px;
  border: none;
  font-size: 18px;
}

.field input:focus {
  padding: 12px 12px 12px 8px;
  border: none;
  outline: none;
  font-size: 18px;
}

.field img {
  vertical-align: -2px;
  margin-left: 8px;
}

.lng {
  width: 392px;
  height: 40px;
  text-align: left;
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
  border: 1px solid grey;
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
  left: 440px;
  bottom: 100px;
  border: 1px solid #4a8a5d;
  color: #4a8a5d;
  padding: 5px;
  background-color: transparent;
  transition: background-color 200ms, color 200ms;
}

#submitForm:hover {
  position: relative;
  left: 440px;
  bottom: 100px;
  border: 1px solid #4a8a5d;
  color: white;
  padding: 5px;
  background-color: #4a8a5d;
  transition: background-color 200ms, color 200ms;
}

#paymentForm {
  border: 1px solid grey;
  width: 487px;
  padding: 23px;
  height: fit-content;
  margin-right: 24px;
  transition: height 850ms;
}
#total_row {
  margin-left: 0px;
}

#total_row .price {
  margin-left: 36px;
}
</style>
