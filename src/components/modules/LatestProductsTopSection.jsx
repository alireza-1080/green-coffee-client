import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const LatestProductsTopSection = () => {
  return (
    <div className="flex justify-between items-center px-2 py-6">
        <h1 className="font-bold">Latest Products</h1>
        <Link href="/products">
          <div className="flex items-center gap-1 group  xl:-translate-x-4">
            <p className="group-hover:text-green-dark">View All</p>
            <Image
              src={'/png/arrow-small-right.png'}
              width={300}
              height={300}
              alt="arrow-small-right"
              className="w-5 transition-all group-hover:translate-x-2"
            ></Image>
          </div>
        </Link>
      </div>
  )
}

export default LatestProductsTopSection