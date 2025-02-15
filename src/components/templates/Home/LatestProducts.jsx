import React from 'react'
import LatestProductsServer from '@/components/server/LatestProductsServer'
import LatestProductsContainer from '@/components/modules/LatestProductsContainer'

const LatestProducts = () => {
  return (
    <LatestProductsServer>
        <LatestProductsContainer />
    </LatestProductsServer>
  )
}

export default LatestProducts