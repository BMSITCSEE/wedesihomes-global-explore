const sampleProperties = [
  {
    name: "Modern Student Hub Dublin",
    description: "A contemporary student accommodation in the heart of Dublin, just minutes away from Trinity College and University College Dublin.",
    propertyType: "apartment",
    price: {
      amount: 800,
      currency: "EUR",
      period: "month"
    },
    location: {
      address: "15 Temple Bar, Dublin 2, Ireland",
      coordinates: {
        lat: 53.3441,
        lng: -6.2675
      },
      nearbyUniversities: [
        {
          name: "Trinity College Dublin",
          distance: 0.5
        },
        {
          name: "University College Dublin",
          distance: 4.2
        }
      ]
    },
    images: [
      {
        url: "/assets/dublin-property-1.jpg",
        caption: "Modern living space"
      },
      {
        url: "/assets/dublin-property-2.jpg", 
        caption: "Fully equipped kitchen"
      }
    ],
    amenities: ["WiFi", "Gym", "Laundry", "Security", "Study Room", "Kitchen"],
    roomDetails: {
      totalRooms: 20,
      availableRooms: 5,
      bathroomType: "shared"
    },
    verified: true,
    featured: true,
    availability: true
  }
];

module.exports = { sampleProperties };
