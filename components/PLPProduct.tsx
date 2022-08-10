import { FragmentType, gql, useFragment } from '../src/gql'
import styled from 'styled-components';
import { ProductImage } from './product/image';
import { ProductName } from './product/name';

const Product_InfoFragment = gql(/* GraphQL */ `
  fragment Product_Info on Product {
    ...Product_Info_Name
    ...Product_Info_Image
  }
`);

const ProductTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

export function Product(props: { product: FragmentType<typeof Product_InfoFragment>}) {
  const product = useFragment(Product_InfoFragment, props.product)
  return (
    <ProductTile>
        <ProductImage product={product} />
        <ProductName product={product} />
    </ProductTile>
  )
}