<template lang="pug">
.centralDiv(style="display: flex;")
	Cancel
	SideNavigation(style="width:340px")
	.wrapper(style="display:block;")
		.header
			h1 Subscription
			p Thanks for being a Premium Subscriber!
			p *You have access to every Landing International platform feature, including buyer messaging, unlimited product uploads, unlimited orders, and much more.
		.table
			table
				tr
					th Feature
					th Basic Subscription
					th Premium Subscription
				tr
					td Create a brand profile
					td V
					td V
				tr
					td Upload product catalog
					td V
					td V
				tr
					td Receive/manage orders
					td V
					td V
				tr
					td Communicate with retailers on orders
					td V
					td V
				tr
					td Viewable to the buyer network
					td V
					td V
				tr
					td Allow buyers to request samples
					td V
					td V
				tr
					td Appear in trend curations
					td V
					td V
				tr
					td Message new buyers
					td 
					td V
				tr
					td Search for new retailers
					td 
					td V
				tr
					td Access retailer insights
					td 
					td V
				tr
					td Track payments
					td 
					td V
				tr
					td Add multiple users
					td 
					td V
				tr
					td Buyer box eligibility
					td 
					td V
				tr
					td Uploaded products
					td 20
					td Unlimited
				tr.bold
					td ANNUAL FEE
					td FREE
					td $2,000
				tr.bold
					td %Comission on Orders
					td 10%
					td 5% 
		.footer(style="display:flex")
			p Subscription Plan
			.rightcol
				p *Your subscription will be automatically renewed on ____ and
				p you will be charged $2000 (plus tax)
				p(style="color: #48A8A5D" @click= "appear") End Premium Subscription
			
</template>

<script>
const Cancel = () => import("@/components/brands/payment/Cancel")
const SideNavigation = () => import("@/components/brands/settings/settingsNavigation")
export default {
  components: {
    Cancel,
    SideNavigation
  },
  data() {
    return {
      active: "subscr"
    }
  },
  methods: {
    appear() {
      document.getElementById("cancel").style.display = "block"
    }
  }
}
</script>
