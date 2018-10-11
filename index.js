// Write your solution in this file!
const driver = { name: "Sam"};
//‣updateDriverWithKeyAndValue(driver, key, value)
function updateDriverWithKeyAndValue(driver, key, value){
 const newDriver = Object.assign({}, driver, {[key]: value});
 return newDriver;
}
//

//