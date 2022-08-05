import React from 'react';
import { gql } from "@apollo/client";
import client from "../../src/apollo-client";
import { PLPQuery } from '..';
import { Product } from '../../components/Product';
import { GetProductByIdQuery } from '../../src/gql/graphql';

const PDPQuery = gql(/* GraphQL */ `
    query getProductById($id: ID!) {
        productById(id: $id) {
          id
          ...Product_Info
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
      fallback: false, // can also be true or 'blocking'
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