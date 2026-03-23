import React from 'react';

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  return <div>Product: {handle}</div>;
}