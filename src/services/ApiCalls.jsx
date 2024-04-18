export const  getallproducts = async () => {
   const response = await fetch('https://dummyjson.com/products')
   const products = await response.json();
   return products;

}

export const  getproductbyid = async (id) => {
    // console.log(id)
    const response = await fetch('https://dummyjson.com/products/1')
    const data = await response.json();
    return data;
 
 }