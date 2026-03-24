import HeroSlider from "@/components/HeroSlider";
export const dynamic = "force-dynamic";

export default async function Home() {
  let products = [];

  try {
    const { shopifyClient } = await import("@/lib/shopify/client");
    const { getProductsQuery } = await import("@/lib/shopify/queries");

    const data = await shopifyClient.request(getProductsQuery);
    products = data.products.edges;
  } catch (error) {
    console.error("Shopify error:", error);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSlider />

      <div className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-seasons italic mb-12 text-center">
          Featured Collections
        </h2>

        {products.length === 0 ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(({ node }: any) => (
              <div key={node.id}>
                <img src={node.images.edges[0]?.node.url} />
                <h3>{node.title}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}