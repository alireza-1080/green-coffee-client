import React from 'react'
import HomePageNavigation from '@/components/modules/Header/HomePageNavigation.jsx'
import HeaderServer from '@/components/server/HeaderServer.jsx'

const About = () => {
  return (
    <div>
      <HeaderServer>
        <HomePageNavigation />
      </HeaderServer>
      <div className="px-5 py-10 sm:py-14 lg:py-20 bg-gray-100 flex flex-col items-center gap-12 lg:gap-20 lg:container lg:mx-auto">
        <div className="flex flex-col items-center gap-4 lg:gap-8 lg:w-3/4">
          <h1 className="text-green-dark font-bold text-xl md:text-2xl">About Green Coffee</h1>
          <p className="text-center text-gray-dark sm:text-lg md:text-xl md:leading-relaxed">
            At Green Coffee, we believe that a great cup of coffee is more than just a beverage—it’s an experience, a
            ritual, and a connection to the hands that nurtured each bean. Our mission is to bring coffee lovers the
            finest, ethically sourced beans while supporting sustainable farming practices that protect our planet. We
            take pride in working directly with farmers who share our commitment to quality, ensuring that every batch
            of coffee we offer is rich in flavor, freshness, and authenticity. Whether you enjoy a bold espresso, a
            smooth latte, or a pour-over that brings out every note, we’re here to elevate your coffee experience. Green
            Coffee is more than just a brand—it’s a community of passionate coffee enthusiasts who appreciate the
            journey from bean to cup.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:gap-8 lg:w-3/4">
          <h2 className="text-green-dark font-bold text-xl md:text-2xl">Story of Green Coffee</h2>
          <p className="text-center text-gray-dark sm:text-lg md:text-xl md:leading-relaxed">
            Green Coffee was born from a simple but powerful idea: great coffee should be both delicious and
            responsible. Our journey started with a deep appreciation for the art of coffee-making and a desire to make
            a positive impact on the industry. As coffee lovers, we knew that the best brews come from carefully
            cultivated beans, grown with care and harvested with integrity. We built Green Coffee on a foundation of
            sustainability and transparency, sourcing only the finest green coffee beans from farmers who prioritize
            ethical and eco-friendly practices. From small, family-run farms to renowned estates, we ensure that every
            step—from cultivation to roasting—is done with precision and passion. Today, we continue to push the
            boundaries of what great coffee can be. We invite you to be part of our journey—one that celebrates quality,
            sustainability, and the simple joy of a well-brewed cup. Because at Green Coffee, every sip tells a story.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 lg:gap-8 lg:w-3/4">
          <h2 className="text-green-dark font-bold text-xl md:text-2xl">Why Green Coffee?</h2>
          <p className="text-center text-gray-dark sm:text-lg md:text-xl md:leading-relaxed">
            At Green Coffee, we believe that every cup should tell a story—one of quality, sustainability, and passion.
            Our commitment to ethically sourced, high-quality beans ensures that every sip is as fresh and flavorful as
            nature intended. Unlike mass-produced coffee, we prioritize direct trade relationships with farmers,
            ensuring fair wages, responsible farming, and eco-friendly practices. This not only results in
            better-tasting coffee but also supports communities and preserves the environment. We carefully select,
            roast, and craft each blend with precision, bringing out the unique flavors that define specialty coffee.
            Whether you’re a seasoned coffee enthusiast or just beginning your journey, Green Coffee offers a premium
            experience that is both delicious and responsible. Because great coffee isn't just about taste—it's about
            impact. ☕🌱
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
