"use strict"

var ApiContracts = require("authorizenet").APIContracts;
var ApiControllers = require("authorizenet").APIControllers;
var constants = require("./constants.js");

function cancelSubscription(subscriptionId) {
  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
  merchantAuthenticationType.setName(constants.apiLoginKey);
  merchantAuthenticationType.setTransactionKey(constants.transactionKey);

  var cancelRequest = new ApiContracts.ARBCancelSubscriptionRequest();
  cancelRequest.setMerchantAuthentication(merchantAuthenticationType);
  cancelRequest.setSubscriptionId(subscriptionId);

  var ctrl = new ApiControllers.ARBCancelSubscriptionController(cancelRequest.getJSON());

  ctrl.execute(function() {
    var apiResponse = ctrl.getResponse();

    var response = new ApiContracts.ARBCancelSubscriptionResponse(apiResponse);

    if (response != null) {
      if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
		return true
      } else {
		return false
		}
    } else {
		return false
	}
  })
}

if (require.main === module) {
  cancelSubscription("7236920", function() {});
}

export default cancelSubscription;
