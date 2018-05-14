// import _ from 'lodash';

// function component() {
//   var element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }

//document.body.appendChild(component());

module.exports =  getTotal = (price,quantity) => {
    console.log(price,quantity);

    let total = price * quantity;
    
    return total;
}
