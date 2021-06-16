"use strict"

//const ApiContracts = () =>  import("authorizenet").APIContracts
//const APIControllers = () => import("authorizenet").APIControllers
var ApiContracts = require("authorizenet").APIContracts;
var ApiControllers = require("authorizenet").APIControllers;
var constants = require("./constants.js");
var utils = require("./utils.js");

function createSubscription(first_name, last_name, cardNumber, cardDate, cardCvv, email= "") {
  var merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType()
  merchantAuthenticationType.setName(constants.apiLoginKey)
  merchantAuthenticationType.setTransactionKey(constants.transactionKey)

  var interval = new ApiContracts.PaymentScheduleType.Interval()
  interval.setLength(12)
  interval.setUnit(ApiContracts.ARBSubscriptionUnitEnum.MONTHS)

  var paymentScheduleType = new ApiContracts.PaymentScheduleType()
  paymentScheduleType.setInterval(interval)
  paymentScheduleType.setStartDate(utils.getDate())
  paymentScheduleType.setTotalOccurrences(5)

  paymentScheduleType.setTrialOccurrences(0)

  var creditCard = new ApiContracts.CreditCardType()
  creditCard.setCardNumber(cardNumber)
  creditCard.setExpirationDate(cardDate)
  creditCard.setCardCode(cardCvv)

  var payment = new ApiContracts.PaymentType()
  payment.setCreditCard(creditCard)

  // var customer = new ApiContracts.CustomerType()
  // customer.setType(ApiContracts.CustomerTypeEnum.INDIVIDUAL)
  // customer.setId(utils.getRandomString('Id'))
  // customer.setPhoneNumber('1232122122')
  // customer.setFaxNumber('1232122122')
  // customer.setTaxId('911011011')

  var nameAndAddressType = new ApiContracts.NameAndAddressType()
  nameAndAddressType.setFirstName(first_name)
  nameAndAddressType.setLastName(last_name)
  // nameAndAddressType.setCompany(utils.getRandomString('Company'))
  // nameAndAddressType.setAddress(utils.getRandomString('Address'))
  // nameAndAddressType.setCity(utils.getRandomString('City'))
  // nameAndAddressType.setState(utils.getRandomString('State'))
  // nameAndAddressType.setZip('98004')
  // nameAndAddressType.setCountry('USA')

  var arbSubscription = new ApiContracts.ARBSubscriptionType()
  arbSubscription.setName("Landing Premium Subscription")
  arbSubscription.setPaymentSchedule(paymentScheduleType)
  arbSubscription.setAmount("1")
  arbSubscription.setTrialAmount("1")
  arbSubscription.setPayment(payment)
  if (email != "") {
      var customer = new ApiContracts.CustomerType()
      customer.setEmail(email)
      arbSubscription.setCustomer(customer)
  }
  arbSubscription.setBillTo(nameAndAddressType)

  var createRequest = new ApiContracts.ARBCreateSubscriptionRequest()
  createRequest.setMerchantAuthentication(merchantAuthenticationType)
  createRequest.setSubscription(arbSubscription)

  var ctrl = new ApiControllers.ARBCreateSubscriptionController(createRequest.getJSON())

  ctrl.execute(function() {
    var apiResponse = ctrl.getResponse()

    var response = new ApiContracts.ARBCreateSubscriptionResponse(apiResponse)

    if (response != null) {
      if (response.getMessages().getResultCode() == ApiContracts.MessageTypeEnum.OK) {
        return response.getSubscriptionId
      } else {
        return false
      }
    } else {
      return false
    }
  })
}

if (require.main === module) {
  createSubscription(function() {})
}

export default createSubscription
