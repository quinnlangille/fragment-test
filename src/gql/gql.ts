/* eslint-disable */
import * as graphql from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment Product_Detail on Product {\n    ...Product_Info_Name\n    ...Product_Info_Image\n    ...Product_Info_Description\n  }\n": graphql.Product_DetailFragmentDoc,
    "\n  fragment Product_Info on Product {\n    ...Product_Info_Name\n    ...Product_Info_Image\n  }\n": graphql.Product_InfoFragmentDoc,
    "\n  fragment Product_Info_Description on Product {\n    descriptionByLanguage\n  }\n": graphql.Product_Info_DescriptionFragmentDoc,
    "\n  fragment Product_Info_Image on Product {\n    images\n  }\n": graphql.Product_Info_ImageFragmentDoc,
    "\n  fragment Product_Info_Name on Product {\n    nameByLanguage\n  }\n": graphql.Product_Info_NameFragmentDoc,
    "\n  query getProducts($first: Int!, $with: ProductOptionInput!, $where: [ProductFilterInput!]) {\n    connectedProducts(first: $first, with: $with, where: $where) {\n          edges {\n              node {\n                  id\n                  ...Product_Info\n              }\n          }\n      }\n  }\n": graphql.GetProductsDocument,
    "\n    query getProductById($id: ID!) {\n        productById(id: $id) {\n          id\n          ...Product_Detail\n        }\n    }\n": graphql.GetProductByIdDocument,
};

export function gql(source: "\n  fragment Product_Detail on Product {\n    ...Product_Info_Name\n    ...Product_Info_Image\n    ...Product_Info_Description\n  }\n"): (typeof documents)["\n  fragment Product_Detail on Product {\n    ...Product_Info_Name\n    ...Product_Info_Image\n    ...Product_Info_Description\n  }\n"];
export function gql(source: "\n  fragment Product_Info on Product {\n    ...Product_Info_Name\n    ...Product_Info_Image\n  }\n"): (typeof documents)["\n  fragment Product_Info on Product {\n    ...Product_Info_Name\n    ...Product_Info_Image\n  }\n"];
export function gql(source: "\n  fragment Product_Info_Description on Product {\n    descriptionByLanguage\n  }\n"): (typeof documents)["\n  fragment Product_Info_Description on Product {\n    descriptionByLanguage\n  }\n"];
export function gql(source: "\n  fragment Product_Info_Image on Product {\n    images\n  }\n"): (typeof documents)["\n  fragment Product_Info_Image on Product {\n    images\n  }\n"];
export function gql(source: "\n  fragment Product_Info_Name on Product {\n    nameByLanguage\n  }\n"): (typeof documents)["\n  fragment Product_Info_Name on Product {\n    nameByLanguage\n  }\n"];
export function gql(source: "\n  query getProducts($first: Int!, $with: ProductOptionInput!, $where: [ProductFilterInput!]) {\n    connectedProducts(first: $first, with: $with, where: $where) {\n          edges {\n              node {\n                  id\n                  ...Product_Info\n              }\n          }\n      }\n  }\n"): (typeof documents)["\n  query getProducts($first: Int!, $with: ProductOptionInput!, $where: [ProductFilterInput!]) {\n    connectedProducts(first: $first, with: $with, where: $where) {\n          edges {\n              node {\n                  id\n                  ...Product_Info\n              }\n          }\n      }\n  }\n"];
export function gql(source: "\n    query getProductById($id: ID!) {\n        productById(id: $id) {\n          id\n          ...Product_Detail\n        }\n    }\n"): (typeof documents)["\n    query getProductById($id: ID!) {\n        productById(id: $id) {\n          id\n          ...Product_Detail\n        }\n    }\n"];

export function gql(source: string): unknown;
export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;