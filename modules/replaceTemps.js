module.exports = (temp, product) => {
  let output = temp.replaceAll('{%PRODUCTNAME%}', product.productName);
  output = output.replaceAll('{%ID%}', product.id);
  output = output.replaceAll('{%IMAGE%}', product.image);
  output = output.replaceAll('{%FROM%}', product.from);
  output = output.replaceAll('{%NUITRIENTS%}', product.nutrients);
  output = output.replaceAll('{%QUANTITY%}', product.quantity);
  output = output.replaceAll('{%PRICE%}', product.price);
  output = output.replaceAll('{%DESCRIPTION%}', product.description);

  if (!product.organic)
    output = output.replaceAll('{%NOT_ORGANIC%}', 'not-organic');

  return output;
};
