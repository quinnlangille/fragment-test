import { FragmentType, gql, useFragment } from '../../src/gql'
import styled from 'styled-components';

const Product_Info_ImageFragment = gql(/* GraphQL */ `
  fragment Product_Info_Image on Product {
    images
  }
`);

const Image = styled.img`
  max-width: 100%;
`

export function ProductImage(props: { product: FragmentType<typeof Product_Info_ImageFragment>}) {
  const product = useFragment(Product_Info_ImageFragment, props.product)
  return (
        <Image className='product__image' src={product?.images?.[0].replace('__IMAGE_PARAMS__', 'b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto')} alt="" />
  )
}