# Payment Gateway Showcase
Showcase of my previous work using Vue.js, Node.js and Pug to implement a payment interface using authorize.net. This was one of my main contributions to my previous employer, Codafi. By virtue of our agreement I am at liberty to showcase this work for professional purposes without breaking any confidentiality or non-compete agreement.

The [.js files](/showcase/src/components/scripts) were adapted from the [authorize.net sdk](https://github.com/AuthorizeNet/sdk-node/tree/master/test) to be used as standalone functions inside a component. The functions simply need to be imported and given the required arguments, allowing to seamlessly include them in a form checking function. Please note that in order for the functions to work, the API Login Key and the Transaction key provided in the constants.js file must be replaced with fresh ones from [authorize.net](https://www.authorize.net).

# WARNING: LONG LOAD TIME
The [.vue files](/showcase/src/components/) have been successfully [deployed on heroku](https://landing-showcase.herokuapp.com/). Only caveat is the excruciatingly long load time of the interface,
which I wager is due to the number of (unused) assets in the project. If the loading fails please close the tab and click again, the interface should display.
