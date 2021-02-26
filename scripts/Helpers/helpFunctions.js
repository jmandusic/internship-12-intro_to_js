function autoIncrement(objectsArray) {
  for (let index = 0; index < objectsArray.length; index++) {
    objectsArray[index].id = index + 1;
  }
}
//when changing objectsArray call again
