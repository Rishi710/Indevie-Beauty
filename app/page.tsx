// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center p-24">
//       <h1 className="text-4xl font-bold">Welcome to Indevie Headless Store</h1>
//     </main>
//   );
// }


import { shopifyClient } from "@/lib/shopify/client";
import { getProductsQuery } from "@/lib/shopify/queries";
import HeroSlider from "@/components/HeroSlider";

interface ShopifyProductsResponse {
  products: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        handle: string;
        images: {
          edges: Array<{
            node: {
              url: string;
            };
          }>;
        };
      };
    }>;
  };
}

export default async function Home() {
  const data = await shopifyClient.request<ShopifyProductsResponse>(getProductsQuery);

  const products = data.products.edges;
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-seasons italic mb-12 text-center tracking-wide">Featured Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(({ node }) => (
            <div key={node.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={node.images.edges[0]?.node.url}
                  alt={node.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium tracking-tight text-gray-900 group-hover:text-black transition-colors">{node.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">View Product</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}