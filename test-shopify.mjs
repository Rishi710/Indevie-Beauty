const domain = "indevie.com";
const storefrontAccessToken = "cc6cccedf6eb1a688a6ba65bce7e63d6";
const API_VERSION = "2024-01";

async function testShopifyConnection() {
  console.log(`Testing Shopify connection to: ${domain}`);
  
  if (!domain || !storefrontAccessToken) {
    console.error("Missing Shopify domain or access token in .env.local");
    return;
  }

  const endpoint = `https://${domain}/api/${API_VERSION}/graphql.json`;
  
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            availableForSale
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  try {
    console.log(`Fetching from: ${endpoint}`);
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        const text = await response.text();
        console.error("Response body:", text);
        return;
    }

    const json = await response.json();
    const data = json.data;
    const errors = json.errors;

    if (errors) {
      console.error("GraphQL Errors:", JSON.stringify(errors, null, 2));
      return;
    }

    console.log("Successfully connected to Shopify!");
    if (data?.products?.edges?.length > 0) {
        console.log("Products found:");
        data.products.edges.forEach(({ node }) => {
            console.log(`- ${node.title} (${node.priceRange.minVariantPrice.amount} ${node.priceRange.minVariantPrice.currencyCode})`);
        });
    } else {
        console.log("No products found in the store.");
    }

  } catch (error) {
    console.error("Error making request:", error);
  }
}

testShopifyConnection();
