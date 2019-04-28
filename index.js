var recipes = {spices:"paprika"}

function updateObjectWithKeyAndValue(object, key, value){
  recipes["spices"]="paprika"
  return recipes
}

function updateObjectWithKeyAndValue(object,key,value){
  return Object.assign({},object,{[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object,key, value){
 object[key] = value

  return object
}

function deleteFromObjectByKey(object, key)
return delete 
return object.assign({},object,{[key]});
}