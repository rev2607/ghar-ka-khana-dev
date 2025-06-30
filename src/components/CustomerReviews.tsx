import React from 'react';
import { Star } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: 'Priya Sharma',
    image: '/placeholder.svg',
    rating: 5,
    review: 'Absolutely delicious! Tastes just like home-cooked food. The delivery is always on time.',
  },
  {
    name: 'Amit Patel',
    image: '/placeholder.svg',
    rating: 4,
    review: 'Great quality and quantity for the price. The weekly menu keeps things interesting.',
  },
  {
    name: 'Sunita Rao',
    image: '/placeholder.svg',
    rating: 5,
    review: 'A lifesaver for a busy professional like me. Healthy, hygienic, and incredibly convenient.',
  },
];

const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star
                key={i}
                className={`w-3 h-3 md:w-4 md:h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        );
    }
    return stars;
};

const CustomerReviews = () => {
  return (
    <div className="bg-white p-3 md:p-4 rounded-lg border-2 border-red-800 shadow-lg max-w-xs md:max-w-sm">
      <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-brand-brown text-center">What Our Customers Say</h4>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
                <div className="flex items-start gap-2 md:gap-3">
                    <img src={review.image} alt={review.name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-brand-orange" />
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h5 className="font-semibold text-xs md:text-sm">{review.name}</h5>
                            <div className="flex items-center">{renderStars(review.rating)}</div>
                        </div>
                        <p className="text-xs text-gray-600 mt-1">{review.review}</p>
                    </div>
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CustomerReviews; 