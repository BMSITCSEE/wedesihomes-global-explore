
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      location: "Near Campus Center",
      price: "$800/month",
      beds: 1,
      baths: 1,
      sqft: 450,
      image: "🏠",
      features: ["Furnished", "WiFi Included", "Gym Access"]
    },
    {
      id: 2,
      title: "Shared 2-Bedroom",
      location: "Student District",
      price: "$600/month",
      beds: 2,
      baths: 1,
      sqft: 750,
      image: "🏡",
      features: ["Common Area", "Kitchen", "Study Room"]
    },
    {
      id: 3,
      title: "Premium 1-Bedroom",
      location: "Downtown Area",
      price: "$1000/month",
      beds: 1,
      baths: 1,
      sqft: 600,
      image: "🏢",
      features: ["Balcony", "Parking", "Security"]
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Properties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully selected accommodations, each designed to provide 
            the perfect balance of comfort, convenience, and community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                <span className="text-6xl">{property.image}</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{property.title}</CardTitle>
                <CardDescription className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-orange-600">{property.price}</span>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.beds}
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.baths}
                    </span>
                    <span className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqft}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
