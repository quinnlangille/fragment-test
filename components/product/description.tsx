import styled from 'styled-components';
import { FragmentType, gql, useFragment } from '../../src/gql'

const Product_Info_DescriptionFragment = gql(/* GraphQL */ `
  fragment Product_Info_Description on Product {
    descriptionByLanguage
  }
`);

const Description = styled.p`
    font-size: 0.8rem;
    width: 70%;
    text-align: left;
`


export function ProductDescription(props: { product: FragmentType<typeof Product_Info_DescriptionFragment>}): JSX.Element {
  const product = useFragment(Product_Info_DescriptionFragment, props.product)
  return <Description className='product__description'>{product?.descriptionByLanguage?.en}</Description>
}