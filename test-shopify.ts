import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_VERSION || "2024-01";

async function testShopifyConnection() {
  console.log(`Testing Shopify connection to: ${domain}`);
  
  if (!domain || !storefrontAccessToken) {
    console.error("Missing Shopify domain or access token in .env.local");
    return;
  }

  // usually it's myshopify.com domain for API calls, but let's try exactly what's in env
  const endpoint = `https://${domain}/api/${API_VERSION}/graphql.json`;
  
  const query = `
    {
      products(first: 3) {
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

    const { data, errors } = await response.json();

    if (errors) {
      console.error("GraphQL Errors:", JSON.stringify(errors, null, 2));
      return;
    }

    console.log("Successfully connected to Shopify!");
    if (data?.products?.edges?.length > 0) {
        console.log("Products found:");
        data.products.edges.forEach(({ node }: any) => {
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
