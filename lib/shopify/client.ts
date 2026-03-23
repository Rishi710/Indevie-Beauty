import { GraphQLClient } from "graphql-request";

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const version = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_VERSION || "2024-01";

if (!domain || !token) {
  const missing = [];
  if (!domain) missing.push("NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN");
  if (!token) missing.push("NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN");
  
  if (process.env.NODE_ENV === "production" || process.env.NEXT_PHASE === "phase-production-build" || process.env.NODE_V6_PATH) {
    console.error(`
      \x1b[31m[ERROR] Shopify Environment Variables Missing\x1b[0m
      --------------------------------------------------
      The following required environment variables are not set:
      ${missing.map(m => ` - ${m}`).join("\n")}
      
      Please add these to your Vercel project settings or run:
      \x1b[36mnpx vercel env pull\x1b[0m
      --------------------------------------------------
    `);
  }
}

const endpoint = `https://${domain || "undefined-store.myshopify.com"}/api/${version}/graphql.json`;

export const shopifyClient = new GraphQLClient(endpoint, {
  headers: {
    "X-Shopify-Storefront-Access-Token": token || "",
  },
});