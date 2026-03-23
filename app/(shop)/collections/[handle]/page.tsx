import React from 'react';

export default async function CollectionPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  return <div>Collection: {handle}</div>;
}