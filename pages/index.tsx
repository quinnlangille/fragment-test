import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { gql } from '../src/gql';
import { GetProductsQuery, ProductEdge } from '../src/gql/graphql';
import { Product } from '../components/Product';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import client from '../src/apollo-client';

export const PLPQuery = gql(/* GraphQL */ `
  query getProducts($first: Int!, $with: ProductOptionInput!, $where: [ProductFilterInput!]) {
    connectedProducts(first: $first, with: $with, where: $where) {
          edges {
              node {
                  id
                  ...Product_Info
              }
          }
      }
  }
`);

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 4fr));
`

type ProductData = GetProductsQuery["connectedProducts"]["edges"];

const Home: NextPage = (props: any) => {
  const router = useRouter()
  const [products, setProducts] = useState([] as ProductData[])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data, loading, error } = await client.query({
        query: PLPQuery,
        variables: {
          first: 60,
          with: {
            lang: "EN",
            country: "CA"
          },
          where: {
            ...(router?.query?.gender && { gender: { equals: router?.query?.gender as string } }),
            ...(router?.query?.brand && { brandId: { in: Array.isArray(router?.query?.brand) ? router.query.brand : [] } })
          }
        }
      })

      setLoading(loading);

      if (data?.connectedProducts?.edges) {
        setLoading(false);
        setProducts(data.connectedProducts?.edges as ProductData[])
      }
    }

    fetchData();
  }, [router.query])

  if (loading) {
    return <p>Loading...</p>
  }

  const buildProducts = (products: ProductData[]) => {
    const p = products?.map((product: any) => {
      if (product?.node) {
        console.log(product.node)
        return (
          <a href={`/product/${product?.node?.id}`}>
            <Product key={product?.node?.id} product={product?.node} />
          </a>
        )
      }
    })

    return p
  }

  return (
    <ProductGrid>
      {buildProducts(products)}
    </ProductGrid>
  )
}

export default Home

