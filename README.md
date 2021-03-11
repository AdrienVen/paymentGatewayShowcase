# Payment Gateway Showcase
Showcase of my previous work using Vue.js, Node.js and Pug to implement a payment gateway using authorize.net. This was one of my main contributions to my previous employer, Codafi. By virtue of our agreement I am at liberty to showcase this work for professional purposes without breaking any confidentiality or non-compete agreement.

The [.js files](/showcase/src/components/scripts) were adapted from the [authorize.net sdk](https://github.com/AuthorizeNet/sdk-node/tree/master/test) to be used as standalone functions inside a component. The functions simply need to be imported and given the required arguments, allowing to seamlessly include them in a form checking function. Please note that in order for the functions to work, the API Login Key and the Transaction key provided in the constants.js file must be replaced with fresh ones from [authorize.net](https://www.authorize.net).

The [.vue files](/showcase/src/components/) were part of a much larger ecosystem of views and components,
thus they did not render in their initial state. I still have a little bit of work to do before they are viewable on Github pages.
