import React from 'react';
import { gql } from "../../src/gql";
import client from "../../src/apollo-client";
import { PLPQuery } from '..';
import { Product } from '../../components/PDPProduct';
import { GetProductByIdQuery } from '../../src/gql/graphql';

const PDPQuery = gql(/* GraphQL */ `
    query getProductById($id: ID!) {
        productById(id: $id) {
          id
          ...Product_Detail
        }
    }
`);

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
    const { data, loading, error } = await client.query({
        query: PLPQuery,
        variables: {
          first: 120,
          with: {
            lang: "EN",
            country: "CA"
          },
        }
      })

    const ids = data?.connectedProducts?.edges?.map((product) => ({ params: { id: product?.node?.id } }));
    return {
      paths: ids,
      fallback: 'blocking', // can also be true or 'blocking'
    }
  }

export async function getStaticProps(context: any) {
    console.log({ context, PDPQuery })
      const { data, errors } = await client.query({
          query: PDPQuery,
          variables: {
            id: context.params.id,
          }
      });

    return {
      props: {
        product: data.productById,
      },
      revalidate: 60,
   };
}

type ProductData = GetProductByIdQuery["productById"];

export default function ProductDetail({ product }: { product: ProductData}) {
  if (product) {
    return (
        <div>
            <Product key={product.id} product={product} />
        </div>
    )
  }
}