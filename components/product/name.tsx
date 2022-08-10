import { FragmentType, gql, useFragment } from '../../src/gql'
import styled from 'styled-components';

const Product_Info_NameFragment = gql(/* GraphQL */ `
  fragment Product_Info_Name on Product {
    nameByLanguage
  }
`);


export function ProductName(props: { product: FragmentType<typeof Product_Info_NameFragment>}) {
  const product = useFragment(Product_Info_NameFragment, props.product)
  return <p className='product__name'>{product?.nameByLanguage?.en}</p>
}