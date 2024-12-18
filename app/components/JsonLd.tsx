export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Resort",
    "name": "Mandala Farms",
    "description": "Luxury eco-friendly farm stay in Araku Valley",
    "url": "https://mandalafarmsarakuvalley.com",
    "telephone": "+919529652435",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mandala Farms",
      "addressLocality": "Araku Valley",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "531149",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Organic Farm",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Farm-to-Table Restaurant",
        "value": true
      }
    ],
    "priceRange": "₹₹₹",
    "image": [
      "https://mandalafarmsarakuvalley.com/hero_img.jpg",
      "https://mandalafarmsarakuvalley.com/bedroom.jpeg"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
} 