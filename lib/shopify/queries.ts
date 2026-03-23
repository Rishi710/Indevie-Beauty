// Shopify Queries
// export const productsQuery = "";
export const getProductsQuery = `
{
  products(first: 6) {
    edges {
      node {
        id
        title
        handle
        images(first:1){
          edges{
            node{
              url
            }
          }
        }
      }
    }
  }
}
`;