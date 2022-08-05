import { FragmentType, gql, useFragment } from '../src/gql'
import styled from 'styled-components';

const Product_InfoFragment = gql(/* GraphQL */ `
  fragment Product_Info on Product {
    nameByLanguage
    images
  }
`);

const ProductTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const ProductImage = styled.img`
  max-width: 100%;
`

export function Product(props: { product: FragmentType<typeof Product_InfoFragment>}) {
  const product = useFragment(Product_InfoFragment, props.product)
  return (
    <ProductTile>
        <ProductImage src={product?.images?.[0].replace('__IMAGE_PARAMS__', 'b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto')} alt="" />
        <p>{product?.nameByLanguage?.en}</p>
    </ProductTile>
  )
}