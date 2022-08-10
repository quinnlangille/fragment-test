import { FragmentType, gql, useFragment } from '../src/gql'
import styled from 'styled-components';
import { ProductImage } from './product/image';
import { ProductName } from './product/name';
import { ProductDescription } from './product/description';

const Product_Detail_Fragment = gql(/* GraphQL */ `
  fragment Product_Detail on Product {
    ...Product_Info_Name
    ...Product_Info_Image
    ...Product_Info_Description
  }
`);

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  width: 100%;
  margin: auto 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr 1fr;
    margin: auto;

    .product__image {
        order: 1;
    }

    .product__name {
        order: 2;
    }

    .product__description {
        order: 3;
    }
  }
`

export function Product(props: { product: FragmentType<typeof Product_Detail_Fragment>}) {
  const product = useFragment(Product_Detail_Fragment, props.product)
  return (
    <ProductDetail>
        <ProductDescription product={product} />
        <ProductImage product={product} />
        <ProductName product={product} />
    </ProductDetail>
  )
}