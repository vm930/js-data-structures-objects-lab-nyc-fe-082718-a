// Write your solution in this file!
const driver = { name: "Sam"};
//‣updateDriverWithKeyAndValue(driver, key, value)
function updateDriverWithKeyAndValue(driver, key, value){
 const newDriver = Object.assign({}, driver, {[key]: value});
 return newDriver;
}
//

//destructivelyUpdateDriverWithKeyAndValue(driver, key, value)

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   return Object.assign(driver,{[key]:value});
}

//deleteFromDriverByKey(driver, key)

function deleteFromDriverByKey(driver, key) {
  const newDriver = delete driver.key;
  return newDriver;
}

//destructivelyDeleteFromDriverByKey(driver, key)

function destructivelyDeleteFromDriverByKey(driver, key){
  return delete driver[key];
}