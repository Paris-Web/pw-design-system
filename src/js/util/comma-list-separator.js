export default (index, array) => {
  if (array.length > 1 && index !== array.length - 1) {
    return index < array.length - 2 ? ", " : " et "
  }
}