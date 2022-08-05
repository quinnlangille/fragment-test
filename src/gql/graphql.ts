/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AutocompleteFilterInput = {
  brandId?: InputMaybe<KeywordFilterInput>;
  categoryId?: InputMaybe<KeywordFilterInput>;
  channel?: InputMaybe<KeywordFilterInput>;
  discountPrice?: InputMaybe<NumericDiscountFilterInput>;
  displayable?: InputMaybe<KeywordFilterInput>;
  gender?: InputMaybe<EqualsFilterInput>;
  inStock?: InputMaybe<KeywordFilterInput>;
  listableCountry?: InputMaybe<KeywordFilterInput>;
  regularPrice?: InputMaybe<NumericFilterInput>;
  salePrice?: InputMaybe<NumericFilterInput>;
  shippableCountry?: InputMaybe<KeywordFilterInput>;
};

export type AutosuggestionFilterInput = {
  brandId?: InputMaybe<KeywordFilterInput>;
  categoryId?: InputMaybe<KeywordFilterInput>;
  channel?: InputMaybe<KeywordFilterInput>;
  discountPrice?: InputMaybe<NumericDiscountFilterInput>;
  displayable?: InputMaybe<KeywordFilterInput>;
  gender?: InputMaybe<EqualsFilterInput>;
  inStock?: InputMaybe<KeywordFilterInput>;
  listableCountry?: InputMaybe<KeywordFilterInput>;
  regularPrice?: InputMaybe<NumericFilterInput>;
  salePrice?: InputMaybe<NumericFilterInput>;
  shippableCountry?: InputMaybe<KeywordFilterInput>;
};

export type AutosuggestionMetadata = {
  __typename?: 'AutosuggestionMetadata';
  brandCategoryMetadata?: Maybe<Array<BrandCategoryMetadata>>;
  categoryBrandMetadata?: Maybe<Array<CategoryBrandMetadata>>;
};

export type AutosuggestionOptionInput = {
  country: Scalars['String'];
  lang?: InputMaybe<Scalars['String']>;
  /** Deprecated Please use lang */
  language?: InputMaybe<ProductLanguage>;
  partialMatch: Scalars['Boolean'];
  query: Scalars['String'];
  size: Scalars['Int'];
};

export type Brand = {
  __typename?: 'Brand';
  /** @deprecated This field is deprecated and will be removed */
  active?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['JSON']>;
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['JSON']>;
  /** Number of products for this brand - This field is only available under `ProductMetadata` */
  productCount?: Maybe<Scalars['Int']>;
  seoKeyword: Scalars['JSON'];
};


export type BrandDescriptionArgs = {
  gender: Gender;
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type BrandNameArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type BrandSeoKeywordArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};

export type BrandAggregationAutocomplete = {
  __typename?: 'BrandAggregationAutocomplete';
  brand?: Maybe<Brand>;
  /** @deprecated Please use AutocompleteMetadata */
  categories: Array<CategoryTermAggregationBucket>;
  docCount?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

export type BrandCategoryAggregationBucket = {
  __typename?: 'BrandCategoryAggregationBucket';
  allCategoryIds?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  docCount?: Maybe<Scalars['Int']>;
};

export type BrandCategoryAggregationOutput = {
  __typename?: 'BrandCategoryAggregationOutput';
  cardinality?: Maybe<Scalars['Int']>;
  terms: Array<BrandCategoryAggregationBucket>;
};

export type BrandCategoryAutocomplete = {
  __typename?: 'BrandCategoryAutocomplete';
  /** @deprecated Please use AutocompleteMetadata */
  brandsAutocomplete: BrandsAutocomplete;
  /** @deprecated Please use AutocompleteMetadata */
  categoriesAutocomplete: CategoriesAutocomplete;
};

export type BrandCategoryMetadata = {
  __typename?: 'BrandCategoryMetadata';
  brand?: Maybe<Brand>;
  categories?: Maybe<Array<Category>>;
};

export type BrandConnection = {
  __typename?: 'BrandConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<BrandEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type BrandEdge = {
  __typename?: 'BrandEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Brand>;
};

export type BrandKeywordAggregationsOutput = {
  __typename?: 'BrandKeywordAggregationsOutput';
  cardinality?: Maybe<Scalars['Int']>;
  key: Scalars['String'];
  terms: Array<BrandTermAggregationBucket>;
  termsJSON: Scalars['JSON'];
};


export type BrandKeywordAggregationsOutputTermsJsonArgs = {
  language: ReferenceLanguage;
};

export type BrandList = {
  __typename?: 'BrandList';
  hits?: Maybe<Array<Maybe<Brand>>>;
};

export type BrandTermAggregationBucket = {
  __typename?: 'BrandTermAggregationBucket';
  brand?: Maybe<Brand>;
  docCount?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

export type BrandsAutocomplete = {
  __typename?: 'BrandsAutocomplete';
  /** @deprecated Please use AutocompleteMetadata */
  brands: Array<BrandAggregationAutocomplete>;
  totalDocCount?: Maybe<Scalars['Int']>;
};

export type ByLanguage = {
  __typename?: 'ByLanguage';
  all?: Maybe<Scalars['JSON']>;
  en?: Maybe<Scalars['String']>;
  fr?: Maybe<Scalars['String']>;
  ja?: Maybe<Scalars['String']>;
  ko?: Maybe<Scalars['String']>;
  zh?: Maybe<Scalars['String']>;
};

export type CategoriesAutocomplete = {
  __typename?: 'CategoriesAutocomplete';
  /** @deprecated Please use AutocompleteMetadata */
  categories: Array<CategoryAggregationAutocomplete>;
  totalDocCount?: Maybe<Scalars['Int']>;
};

export type Category = {
  __typename?: 'Category';
  /** @deprecated This field is deprecated and will be removed */
  allCategoryIds?: Maybe<Scalars['String']>;
  /** @deprecated This field is deprecated and will be removed */
  allCategoryName?: Maybe<Scalars['JSON']>;
  /** @deprecated This field is deprecated and will be removed */
  allCategorySeoKeywords?: Maybe<Scalars['JSON']>;
  /** @deprecated This field is deprecated and will be removed */
  childPath?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Category>>;
  description?: Maybe<Scalars['JSON']>;
  gender?: Maybe<Gender>;
  id: Scalars['Int'];
  /** @deprecated This field is deprecated and will be removed */
  level?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['JSON']>;
  /** @deprecated This field is deprecated and will be removed */
  parentCategoryId?: Maybe<Scalars['Int']>;
  /** @deprecated This field is deprecated and will be removed */
  parentPath?: Maybe<Scalars['String']>;
  parents?: Maybe<Array<Category>>;
  /** Number of products for this category - This field is only available under `ProductMetadata` */
  productCount?: Maybe<Scalars['Int']>;
  /** @deprecated This field will be removed */
  referenceSizeSystem?: Maybe<SizeSystem>;
  seoKeyword: Scalars['JSON'];
  /** @deprecated This field will be removed */
  sizeGuide?: Maybe<SizeGuide>;
  sizeSystems?: Maybe<Array<Maybe<SizeSystem>>>;
  /** @deprecated This field is deprecated and will be removed */
  topCategoryId?: Maybe<Scalars['Int']>;
};


export type CategoryAllCategoryNameArgs = {
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type CategoryAllCategorySeoKeywordsArgs = {
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type CategoryChildrenArgs = {
  gender?: InputMaybe<Gender>;
};


export type CategoryDescriptionArgs = {
  gender: Gender;
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type CategoryNameArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type CategorySeoKeywordArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};

export type CategoryAggregationAutocomplete = {
  __typename?: 'CategoryAggregationAutocomplete';
  /** @deprecated Please use AutocompleteMetadata */
  brands: Array<BrandTermAggregationBucket>;
  category?: Maybe<Category>;
  docCount?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};


export type CategoryAggregationAutocompleteCategoryArgs = {
  gender?: InputMaybe<Gender>;
  language?: InputMaybe<ProductLanguage>;
};

export type CategoryBrandMetadata = {
  __typename?: 'CategoryBrandMetadata';
  brands?: Maybe<Array<Brand>>;
  category?: Maybe<Category>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<CategoryEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Category>;
};

export type CategoryKeywordAggregationsOutput = {
  __typename?: 'CategoryKeywordAggregationsOutput';
  cardinality?: Maybe<Scalars['Int']>;
  key: Scalars['String'];
  terms: Array<CategoryTermAggregationBucket>;
  termsJSON: Scalars['JSON'];
  tree: Array<CategoryTreeItem>;
  treeJSON: Array<Scalars['JSON']>;
};


export type CategoryKeywordAggregationsOutputTermsJsonArgs = {
  language?: InputMaybe<ReferenceLanguage>;
};


export type CategoryKeywordAggregationsOutputTreeArgs = {
  language: ReferenceLanguage;
  selected: Array<Scalars['String']>;
};


export type CategoryKeywordAggregationsOutputTreeJsonArgs = {
  language: ReferenceLanguage;
  selected: Array<Scalars['String']>;
};

export type CategoryList = {
  __typename?: 'CategoryList';
  hits?: Maybe<Array<Maybe<Category>>>;
};

export type CategoryTermAggregationBucket = {
  __typename?: 'CategoryTermAggregationBucket';
  category?: Maybe<Category>;
  docCount?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

export type CategoryTreeItem = {
  __typename?: 'CategoryTreeItem';
  children: Array<CategoryTreeItem>;
  docCount?: Maybe<Scalars['Int']>;
  expanded?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  selected?: Maybe<Scalars['Boolean']>;
  seoKeyword: Scalars['String'];
};

export enum Channel {
  All = 'All',
  Store = 'Store',
  Website = 'Website'
}

export type Collection = {
  __typename?: 'Collection';
  ids?: Maybe<Array<Maybe<Scalars['Int']>>>;
  name?: Maybe<Scalars['String']>;
  products?: Maybe<ProductConnection>;
};


export type CollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  sort?: InputMaybe<Order>;
  where?: InputMaybe<Array<ProductFilterInput>>;
  with: ProductOptionInput;
};

export type Country = {
  __typename?: 'Country';
  code?: Maybe<Scalars['String']>;
  currency?: Maybe<Currency>;
  name?: Maybe<Scalars['String']>;
  priceDisplayRule?: Maybe<Scalars['String']>;
  provinces?: Maybe<Array<Maybe<Province>>>;
  showOrigin?: Maybe<Scalars['Boolean']>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<ReferenceLanguage>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<CountryEdge>>>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Country>;
};

export type CountsByGender = {
  __typename?: 'CountsByGender';
  count: Scalars['Int'];
  gender: Scalars['String'];
};

export type Currency = {
  __typename?: 'Currency';
  code?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  fullFormat?: Maybe<Scalars['String']>;
};

export type EqualsFilterInput = {
  /** adjusting the relevance score depending on your needs */
  boost?: InputMaybe<Scalars['Int']>;
  equals?: InputMaybe<Scalars['String']>;
  /** if true, filter documents by this field, else don't filter but contribute to the document score */
  required?: InputMaybe<Scalars['Boolean']>;
};

export type ExtendedStatsAggregationOutput = {
  __typename?: 'ExtendedStatsAggregationOutput';
  avg?: Maybe<Scalars['Float']>;
  count: Scalars['Int'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  stdDeviation?: Maybe<Scalars['Float']>;
  stdDeviationBounds: StandardDeviationBounds;
  sum: Scalars['Float'];
  sumOfSquares?: Maybe<Scalars['Float']>;
  variance?: Maybe<Scalars['Float']>;
};

export type FallbackMetadata = {
  __typename?: 'FallbackMetadata';
  brands?: Maybe<Array<Brand>>;
  genders?: Maybe<Array<Metadata>>;
  type?: Maybe<FallbackType>;
};

/** types of search fallbacks to execute */
export enum FallbackType {
  /** executes a search for related brands when an unsupported brand is searched on */
  BrandSuggestion = 'BRAND_SUGGESTION',
  /** executes a search for latest arrivals */
  LatestArrivals = 'LATEST_ARRIVALS'
}

export enum Gender {
  All = 'all',
  Men = 'men',
  Women = 'women'
}

export type KeywordAggregationsOutput = {
  __typename?: 'KeywordAggregationsOutput';
  cardinality?: Maybe<Scalars['Int']>;
  terms: Array<TermAggregationBucket>;
};

export type KeywordFilterInput = {
  /** adjusting the relevance score depending on your needs */
  boost?: InputMaybe<Scalars['Int']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  /** if true, filter documents by this field, else don't filter but contribute to the document score */
  required?: InputMaybe<Scalars['Boolean']>;
};

export type Measurement = {
  __typename?: 'Measurement';
  metricName: Scalars['String'];
  value: Scalars['Float'];
};


export type MeasurementValueArgs = {
  unit: SizeUnit;
};

export type Meta = {
  __typename?: 'Meta';
  count?: Maybe<Scalars['Int']>;
  fallback?: Maybe<SearchFallback>;
  nextPage?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  previousPage?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type Metadata = {
  __typename?: 'Metadata';
  key?: Maybe<Scalars['String']>;
  productCount?: Maybe<Scalars['Int']>;
};

export type MetricPosition = {
  __typename?: 'MetricPosition';
  metricName: Scalars['String'];
  offsetLeft: Scalars['Int'];
  offsetTop: Scalars['Int'];
};

export type Model = {
  __typename?: 'Model';
  measurements?: Maybe<Array<Measurement>>;
  sizeWorn?: Maybe<Size>;
};


export type ModelSizeWornArgs = {
  country?: InputMaybe<Scalars['String']>;
};

export type NumericAggregationsOutput = {
  __typename?: 'NumericAggregationsOutput';
  extendedStats?: Maybe<ExtendedStatsAggregationOutput>;
  filterZero: Scalars['Int'];
  histogram: Array<NumericHistogramBucket>;
  stats?: Maybe<StatsAggregationOutput>;
};


export type NumericAggregationsOutputHistogramArgs = {
  interval?: InputMaybe<Scalars['Float']>;
};

export type NumericBetweenFilterInput = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type NumericDiscountFilterInput = {
  between?: InputMaybe<NumericBetweenFilterInput>;
  /** adjusting the relevance score depending on your needs */
  boost?: InputMaybe<Scalars['Int']>;
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
  /** if true, filter documents by this field, else don't filter but contribute to the document score */
  required?: InputMaybe<Scalars['Boolean']>;
};

export type NumericFilterInput = {
  between?: InputMaybe<NumericBetweenFilterInput>;
  /** adjusting the relevance score depending on your needs */
  boost?: InputMaybe<Scalars['Int']>;
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
  /** if true, filter documents by this field, else don't filter but contribute to the document score */
  required?: InputMaybe<Scalars['Boolean']>;
};

export type NumericHistogramBucket = {
  __typename?: 'NumericHistogramBucket';
  docCount: Scalars['Float'];
  gte: Scalars['Float'];
  key: Scalars['Float'];
  lt: Scalars['Float'];
};

export type Order = {
  orderBy?: InputMaybe<Array<InputMaybe<OrderBy>>>;
  orderByPreference?: InputMaybe<OrderByPreference>;
  orderByPrivateSales?: InputMaybe<OrderByPrivateSale>;
};

export type OrderBy = {
  direction: OrderByOption;
  field: OrderByField;
  privateSaleNames?: InputMaybe<Array<Scalars['String']>>;
  version?: InputMaybe<Scalars['String']>;
};

export enum OrderByField {
  Discount = 'discount',
  Id = 'id',
  ImpulseBuy = 'impulse_buy',
  Markdown = 'markdown',
  NewArrivals = 'new_arrivals',
  Position = 'position',
  Price = 'price',
  Sale = 'sale',
  Trending = 'trending'
}

export enum OrderByOption {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderByPreference = {
  field: OrderByPreferenceField;
  scores: Array<PreferenceScores>;
  version?: InputMaybe<Scalars['String']>;
};

export enum OrderByPreferenceField {
  ImpulseBuy = 'impulse_buy',
  Markdown = 'markdown',
  NewArrivals = 'new_arrivals',
  Trending = 'trending'
}

export type OrderByPrivateSale = {
  direction: OrderByOption;
  field: OrderByPrivateSaleField;
  privateSaleNames: Array<Scalars['String']>;
};

export enum OrderByPrivateSaleField {
  Discount = 'discount',
  Price = 'price',
  Sale = 'sale'
}

/** PageInfo cursor, as defined in https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor corresponding to the last nodes in edges. Null if the connection is empty. */
  endCursor?: Maybe<Scalars['String']>;
  /** Used to indicate whether more edges exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean'];
  /** Used to indicate whether more edges exist prior to the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean'];
  /** The cursor corresponding to the first nodes in edges. Null if the connection is empty. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
  totalProducts?: Maybe<Scalars['Int']>;
};

export type PreferenceScores = {
  brandId: Scalars['Float'];
  categoryIds?: InputMaybe<Array<Scalars['Float']>>;
  score: Scalars['Float'];
};

export type Price = {
  __typename?: 'Price';
  activePrice: Scalars['JSON'];
  country?: Maybe<Scalars['String']>;
  currency: Scalars['String'];
  discountPercentage: Scalars['Float'];
  format: Scalars['String'];
  isFinalSale: Scalars['Boolean'];
  /** lowest available price for the user regarding passed discount names */
  lowestPrice: Scalars['JSON'];
  regularPrice: Scalars['JSON'];
  sale?: Maybe<Scalars['JSON']>;
  salePrice: Scalars['JSON'];
};


export type PriceActivePriceArgs = {
  formatted?: InputMaybe<Scalars['Boolean']>;
};


export type PriceLowestPriceArgs = {
  discountNames?: InputMaybe<Array<Scalars['String']>>;
  formatted?: InputMaybe<Scalars['Boolean']>;
};


export type PriceRegularPriceArgs = {
  formatted?: InputMaybe<Scalars['Boolean']>;
};


export type PriceSaleArgs = {
  direction?: InputMaybe<OrderByOption>;
  formatted?: InputMaybe<Scalars['Boolean']>;
  names?: InputMaybe<Array<Scalars['String']>>;
  take?: InputMaybe<Scalars['Int']>;
};


export type PriceSalePriceArgs = {
  formatted?: InputMaybe<Scalars['Boolean']>;
};

export type PriceMetadata = {
  __typename?: 'PriceMetadata';
  privateSalePriceCount?: Maybe<Scalars['Int']>;
  regularPriceCount?: Maybe<Scalars['Int']>;
  salePriceCount?: Maybe<Scalars['Int']>;
};


export type PriceMetadataPrivateSalePriceCountArgs = {
  country: Scalars['String'];
};

export type PrivateSaleTermAggregationsOutput = {
  __typename?: 'PrivateSaleTermAggregationsOutput';
  filterCountry: Scalars['Int'];
};


export type PrivateSaleTermAggregationsOutputFilterCountryArgs = {
  country: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  allCategoryIds?: Maybe<Array<Scalars['String']>>;
  /** @deprecated Please use allCategorySeoKeywordsByLanguage instead */
  allCategorySeoKeywords: ByLanguage;
  allCategorySeoKeywordsByLanguage?: Maybe<Scalars['JSON']>;
  /** @deprecated Please use priceByCountry to access prices info */
  allPrices: Scalars['JSON'];
  /** @deprecated Please use newBrand to access federated Product Brand info */
  brand: ProductBrand;
  /** @deprecated Please use newCategory to access federated Product Category info */
  category: ProductCategory;
  /** @deprecated Please use compositionByLanguage instead */
  composition?: Maybe<ByLanguage>;
  compositionByLanguage?: Maybe<Scalars['JSON']>;
  /** @deprecated Please use country to access federated Product Country info */
  countryOfOrigin?: Maybe<Scalars['String']>;
  countryOrigin?: Maybe<Country>;
  creationDate: Scalars['DateTime'];
  /** @deprecated Please use descriptionByLanguage instead */
  description: ByLanguage;
  descriptionByLanguage?: Maybe<Scalars['JSON']>;
  display?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  /** Is the product everything-else gender or not */
  isGenderless?: Maybe<Scalars['Boolean']>;
  listableCountries?: Maybe<Array<Scalars['String']>>;
  /** model wearing the product on the website */
  model?: Maybe<Model>;
  /** @deprecated Please use nameByLanguage instead */
  name: ByLanguage;
  nameByLanguage?: Maybe<Scalars['JSON']>;
  newBrand?: Maybe<Brand>;
  newCategory?: Maybe<Category>;
  position?: Maybe<Scalars['Float']>;
  /** @deprecated Please use priceByCountry to access prices info */
  price: Price;
  priceByCountry?: Maybe<Array<Price>>;
  /** @deprecated Please use primaryColorByLanguage instead */
  primaryColor: ByLanguage;
  primaryColorByLanguage?: Maybe<Scalars['JSON']>;
  productCode: Scalars['String'];
  scores?: Maybe<Scalars['JSON']>;
  /** @deprecated Please use seoKeywordByLanguage instead */
  seoKeyword: ByLanguage;
  seoKeywordByLanguage?: Maybe<Scalars['JSON']>;
  shippableCountries?: Maybe<Array<Scalars['String']>>;
  sizeChart?: Maybe<SizeChart>;
  sizesDetails?: Maybe<Array<SizeDetail>>;
  styledWithProducts?: Maybe<Array<Product>>;
  variants?: Maybe<Array<ProductVariant>>;
  vendorCode?: Maybe<Scalars['String']>;
  vendorColor?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};


export type ProductAllCategorySeoKeywordsByLanguageArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ProductLanguage>>>;
};


export type ProductCompositionByLanguageArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ProductLanguage>>>;
};


export type ProductDescriptionByLanguageArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ProductLanguage>>>;
};


export type ProductImagesArgs = {
  take?: InputMaybe<Scalars['Int']>;
};


export type ProductListableCountriesArgs = {
  countries?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductNameByLanguageArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ProductLanguage>>>;
};


export type ProductPriceArgs = {
  country: Scalars['String'];
};


export type ProductPriceByCountryArgs = {
  country?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type ProductPrimaryColorByLanguageArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ProductLanguage>>>;
};


export type ProductSeoKeywordByLanguageArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ProductLanguage>>>;
};


export type ProductShippableCountriesArgs = {
  countries?: InputMaybe<Array<Scalars['String']>>;
};


export type ProductWebsiteUrlArgs = {
  genderTranslations?: InputMaybe<Scalars['JSON']>;
  lang?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<ProductLanguage>;
  productTranslation?: InputMaybe<Scalars['String']>;
  translations?: InputMaybe<WebsiteUrlTranslations>;
};

export type ProductAggregations = {
  __typename?: 'ProductAggregations';
  allCategoryIds?: Maybe<CategoryKeywordAggregationsOutput>;
  brandCategory?: Maybe<BrandCategoryAggregationOutput>;
  brandId?: Maybe<BrandKeywordAggregationsOutput>;
  categoryId?: Maybe<KeywordAggregationsOutput>;
  hasPrivateSale?: Maybe<PrivateSaleTermAggregationsOutput>;
  primaryColor?: Maybe<KeywordAggregationsOutput>;
  regularPrice?: Maybe<NumericAggregationsOutput>;
  salePrice?: Maybe<NumericAggregationsOutput>;
  size?: Maybe<KeywordAggregationsOutput>;
};


export type ProductAggregationsAllCategoryIdsArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsBrandCategoryArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsBrandIdArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsCategoryIdArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsHasPrivateSaleArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsPrimaryColorArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsRegularPriceArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsSalePriceArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};


export type ProductAggregationsSizeArgs = {
  filterSelf?: InputMaybe<Scalars['Boolean']>;
};

export type ProductBrand = {
  __typename?: 'ProductBrand';
  descriptionFemale: ByLanguage;
  descriptionMale: ByLanguage;
  gender: Array<Gender>;
  id: Scalars['ID'];
  name: ByLanguage;
  seoKeyword: ByLanguage;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  /** @deprecated This field will be removed from the schema in the next weeks */
  childPath?: Maybe<Scalars['String']>;
  descriptionFemale: ByLanguage;
  descriptionMale: ByLanguage;
  gender: Array<Gender>;
  id: Scalars['ID'];
  name: ByLanguage;
  parentCategoryId?: Maybe<Scalars['Int']>;
  parentPath?: Maybe<Scalars['String']>;
  parentPathNamed?: Maybe<ByLanguage>;
  seoKeyword: ByLanguage;
  sizes?: Maybe<Array<Scalars['String']>>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Edge-Types */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  metadata?: Maybe<ProductMetadata>;
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-undefined.PageInfo */
  pageInfo: PageInfo;
  paginationInfo?: Maybe<PaginationInfo>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Cursor */
  cursor: Scalars['String'];
  /** https://facebook.github.io/relay/graphql/connections.htm#sec-Node */
  node?: Maybe<Product>;
};

export type ProductFilterInput = {
  allCategoryIds?: InputMaybe<KeywordFilterInput>;
  allCategorySeoKeywords?: InputMaybe<KeywordFilterInput>;
  brandId?: InputMaybe<KeywordFilterInput>;
  brandName?: InputMaybe<KeywordFilterInput>;
  brandSeoKeyword?: InputMaybe<KeywordFilterInput>;
  categoryId?: InputMaybe<KeywordFilterInput>;
  categoryName?: InputMaybe<KeywordFilterInput>;
  categoryParentPathNamed?: InputMaybe<KeywordFilterInput>;
  categorySeoKeyword?: InputMaybe<KeywordFilterInput>;
  channel?: InputMaybe<KeywordFilterInput>;
  composition?: InputMaybe<KeywordFilterInput>;
  countryOfOrigin?: InputMaybe<KeywordFilterInput>;
  description?: InputMaybe<KeywordFilterInput>;
  discountPrice?: InputMaybe<NumericDiscountFilterInput>;
  displayable?: InputMaybe<KeywordFilterInput>;
  gender?: InputMaybe<EqualsFilterInput>;
  id?: InputMaybe<KeywordFilterInput>;
  inStock?: InputMaybe<KeywordFilterInput>;
  listableCountry?: InputMaybe<KeywordFilterInput>;
  name?: InputMaybe<KeywordFilterInput>;
  position?: InputMaybe<NumericFilterInput>;
  primaryColor?: InputMaybe<KeywordFilterInput>;
  productCode?: InputMaybe<KeywordFilterInput>;
  regularPrice?: InputMaybe<NumericFilterInput>;
  salePrice?: InputMaybe<NumericFilterInput>;
  seoKeyword?: InputMaybe<KeywordFilterInput>;
  shippableCountry?: InputMaybe<KeywordFilterInput>;
  size?: InputMaybe<KeywordFilterInput>;
};

export type ProductHit = {
  __typename?: 'ProductHit';
  doc: Product;
  score: Scalars['Float'];
};

/** language in which you would like to translate your product */
export enum ProductLanguage {
  En = 'EN',
  Fr = 'FR',
  Ja = 'JA',
  Ko = 'KO',
  Zh = 'ZH'
}

export type ProductMetadata = {
  __typename?: 'ProductMetadata';
  brandCategories?: Maybe<Array<BrandCategoryMetadata>>;
  brands?: Maybe<Array<Brand>>;
  categories?: Maybe<Array<Category>>;
  colors?: Maybe<Array<Metadata>>;
  fallbacks?: Maybe<FallbackMetadata>;
  prices?: Maybe<PriceMetadata>;
  sizes?: Maybe<Array<Metadata>>;
};

export type ProductOptionInput = {
  country: Scalars['String'];
  /** list of fallback searches to execute if a direct search does not return results - fallbacks will be attempted in the order they are provided */
  fallbacks?: InputMaybe<Array<FallbackType>>;
  lang?: InputMaybe<Scalars['String']>;
  /** Deprecated Please use lang */
  language?: InputMaybe<ProductLanguage>;
  query?: InputMaybe<Scalars['String']>;
  rescoreBoostVersion?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
};

export type ProductSearchResults = {
  __typename?: 'ProductSearchResults';
  aggs?: Maybe<ProductAggregations>;
  hits: Array<ProductHit>;
  meta: Meta;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  /**
   * Size that may be more familiar to the customer
   * @deprecated Deprecated please use the Size field
   */
  alternateSize?: Maybe<Size>;
  /**
   * Size in which the product was purchased by the buyer
   * @deprecated Deprecated please use the Size field
   */
  buyerSize?: Maybe<Size>;
  externalSizeId?: Maybe<Scalars['Int']>;
  gtin?: Maybe<Scalars['String']>;
  measurements?: Maybe<Array<Measurement>>;
  product?: Maybe<Product>;
  size?: Maybe<Size>;
  sku: Scalars['String'];
  stock?: Maybe<Scalars['Int']>;
};


export type ProductVariantAlternateSizeArgs = {
  country?: InputMaybe<Scalars['String']>;
};


export type ProductVariantSizeArgs = {
  country: Scalars['String'];
};

export type Province = {
  __typename?: 'Province';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type ProvinceNameArgs = {
  lang?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated Please use Autosuggestion */
  autocomplete: BrandCategoryAutocomplete;
  autosuggestion?: Maybe<AutosuggestionMetadata>;
  /** @deprecated Please use brandById or brandBySeoKeyword to fetch Brand */
  brand?: Maybe<Brand>;
  brandById?: Maybe<Brand>;
  brandBySeoKeyword?: Maybe<Brand>;
  /** @deprecated Please use connectedBrands */
  brands?: Maybe<BrandList>;
  /** @deprecated Please use connectedCategories */
  categories?: Maybe<CategoryList>;
  /** @deprecated Please use categoryById or categoryBySeoKeyword to fetch Category */
  category?: Maybe<Category>;
  categoryById?: Maybe<Category>;
  categoryBySeoKeyword?: Maybe<Category>;
  collectionByName?: Maybe<Collection>;
  connectedBrands?: Maybe<BrandConnection>;
  connectedCategories?: Maybe<CategoryConnection>;
  connectedProducts: ProductConnection;
  countries?: Maybe<CountryConnection>;
  countryByCode?: Maybe<Country>;
  getSizeGuide?: Maybe<SizeGuide>;
  /** @deprecated Please use productById or productByCode to fetch Product */
  product: Product;
  productByCode?: Maybe<Product>;
  productById?: Maybe<Product>;
  /** @deprecated Please use connectedProducts */
  products: ProductSearchResults;
};


export type QueryAutocompleteArgs = {
  country: Scalars['String'];
  filters?: InputMaybe<Array<AutocompleteFilterInput>>;
  language: ProductLanguage;
  partialMatch?: InputMaybe<Scalars['Boolean']>;
  query: Scalars['String'];
  size?: InputMaybe<Scalars['Int']>;
};


export type QueryAutosuggestionArgs = {
  where?: InputMaybe<Array<AutosuggestionFilterInput>>;
  with: AutosuggestionOptionInput;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<ReferenceLanguage>;
  seoKeyword?: InputMaybe<Scalars['String']>;
};


export type QueryBrandByIdArgs = {
  id: Scalars['Int'];
};


export type QueryBrandBySeoKeywordArgs = {
  lang: Scalars['String'];
  seoKeyword: Scalars['String'];
};


export type QueryBrandsArgs = {
  ids?: InputMaybe<Array<Scalars['Int']>>;
};


export type QueryCategoriesArgs = {
  ids?: InputMaybe<Array<Scalars['Int']>>;
};


export type QueryCategoryArgs = {
  gender?: InputMaybe<Gender>;
  id?: InputMaybe<Scalars['Int']>;
  language?: InputMaybe<ReferenceLanguage>;
  seoKeyword?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCategoryBySeoKeywordArgs = {
  gender: Gender;
  lang: Scalars['String'];
  seoKeyword: Scalars['String'];
};


export type QueryCollectionByNameArgs = {
  name: Scalars['String'];
};


export type QueryConnectedBrandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryConnectedCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryConnectedProductsArgs = {
  after?: InputMaybe<Scalars['String']>;
  first: Scalars['Int'];
  sort?: InputMaybe<Order>;
  where?: InputMaybe<Array<ProductFilterInput>>;
  with: ProductOptionInput;
};


export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  codes?: InputMaybe<Array<Scalars['String']>>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCountryByCodeArgs = {
  code: Scalars['String'];
};


export type QueryGetSizeGuideArgs = {
  brandId: Scalars['Int'];
  categoryId: Scalars['Int'];
};


export type QueryProductArgs = {
  id: Scalars['String'];
};


export type QueryProductByCodeArgs = {
  code: Scalars['String'];
};


export type QueryProductByIdArgs = {
  country?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  country: Scalars['String'];
  fallbacks?: InputMaybe<Array<FallbackType>>;
  filters?: InputMaybe<Array<InputMaybe<ProductFilterInput>>>;
  language: ProductLanguage;
  orderBy?: InputMaybe<Array<OrderBy>>;
  orderByPreference?: InputMaybe<OrderByPreference>;
  orderByPrivateSales?: InputMaybe<OrderByPrivateSale>;
  query?: InputMaybe<Scalars['String']>;
  rescoreBoostVersion?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['Int']>;
};

/** language in which you would like to translate your product */
export enum ReferenceLanguage {
  En = 'EN',
  Fr = 'FR',
  Ja = 'JA',
  Ko = 'KO',
  Zh = 'ZH'
}

export type SearchFallback = {
  __typename?: 'SearchFallback';
  /** in the scenario where fallbackType is BRAND_SUGGESTION, an aggregation on those suggested brands */
  brandSuggestions?: Maybe<BrandKeywordAggregationsOutput>;
  fallbackType?: Maybe<FallbackType>;
  /** in the scenario where fallbackType is LATEST_ARRIVALS, other genders that have a match on the original query are suggested */
  genderRedirects?: Maybe<Array<CountsByGender>>;
};

export type Size = {
  __typename?: 'Size';
  /** @deprecated This field will be removed, Please use Size in the ProductVariant */
  brandId?: Maybe<Scalars['Int']>;
  /** @deprecated This field will be removed, Please use Size in the ProductVariant */
  categoryId?: Maybe<Scalars['Int']>;
  conversion?: Maybe<Scalars['String']>;
  /** @deprecated This field will be removed, Please use Size in the ProductVariant */
  country?: Maybe<Scalars['String']>;
  displayOrder?: Maybe<Scalars['Int']>;
  /** @deprecated This field will be removed, Please use Size in the ProductVariant */
  externalSizeId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** @deprecated This field will be removed, Please use Size in the ProductVariant */
  isBrandSizing?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** Number of products for this size - This field is only available under `ProductMetadata` */
  productCount?: Maybe<Scalars['Int']>;
  /** @deprecated Please use Size in the ProductVariant */
  referenceSize?: Maybe<Size>;
  sizeSystem?: Maybe<SizeSystem>;
};

export type SizeChart = {
  __typename?: 'SizeChart';
  /** @deprecated This field is deprecated and will be removed */
  brandId?: Maybe<Scalars['String']>;
  /** @deprecated This field is deprecated and will be removed */
  categoryId: Scalars['String'];
  /** @deprecated This field is deprecated and will be removed */
  isBrandSizing?: Maybe<Scalars['Boolean']>;
  /** @deprecated This field is deprecated and will be removed */
  referenceSizeSystem?: Maybe<SizeSystem>;
  /** @deprecated This field is deprecated and will be removed, Please query chart inside SizeGuide */
  sizeSystems?: Maybe<Array<Maybe<SizeSystem>>>;
};

export type SizeDetail = {
  __typename?: 'SizeDetail';
  gtin?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  nameSystemCode: ByLanguage;
  number: Scalars['String'];
  numberSystemCode: ByLanguage;
  sequence: Scalars['Int'];
  sku: Scalars['String'];
  stock: Scalars['Int'];
};

export type SizeGuide = {
  __typename?: 'SizeGuide';
  conversionTable?: Maybe<Array<Maybe<SizeSystem>>>;
  image?: Maybe<Scalars['String']>;
  metricPositions?: Maybe<Array<Maybe<MetricPosition>>>;
};

export type SizeSystem = {
  __typename?: 'SizeSystem';
  code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  sizes?: Maybe<Array<Maybe<Size>>>;
  type?: Maybe<Scalars['String']>;
};


export type SizeSystemCodeArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};


export type SizeSystemNameArgs = {
  lang?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  language?: InputMaybe<Array<InputMaybe<ReferenceLanguage>>>;
};

/** unit size in which you would like to convert the sizes */
export enum SizeUnit {
  Cm = 'cm',
  Inch = 'inch'
}

export type StandardDeviationBounds = {
  __typename?: 'StandardDeviationBounds';
  lower?: Maybe<Scalars['Float']>;
  upper?: Maybe<Scalars['Float']>;
};

export type StatsAggregationOutput = {
  __typename?: 'StatsAggregationOutput';
  avg?: Maybe<Scalars['Float']>;
  count: Scalars['Int'];
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum: Scalars['Float'];
};

export type TermAggregationBucket = {
  __typename?: 'TermAggregationBucket';
  docCount?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
};

export type WebsiteUrlTranslations = {
  everythingElse: Scalars['String'];
  men: Scalars['String'];
  product: Scalars['String'];
  women: Scalars['String'];
};

export type Product_InfoFragment = { __typename?: 'Product', nameByLanguage?: any | null, images?: Array<string> | null } & { ' $fragmentName': 'Product_InfoFragment' };

export type GetProductsQueryVariables = Exact<{
  first: Scalars['Int'];
  with: ProductOptionInput;
  where?: InputMaybe<Array<ProductFilterInput> | ProductFilterInput>;
}>;


export type GetProductsQuery = { __typename?: 'Query', connectedProducts: { __typename?: 'ProductConnection', edges?: Array<{ __typename?: 'ProductEdge', node?: (
        { __typename?: 'Product', id: string }
        & { ' $fragmentRefs': { 'Product_InfoFragment': Product_InfoFragment } }
      ) | null } | null> | null } };

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductByIdQuery = { __typename?: 'Query', productById?: (
    { __typename?: 'Product', id: string }
    & { ' $fragmentRefs': { 'Product_InfoFragment': Product_InfoFragment } }
  ) | null };

export const Product_InfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Product_Info"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Product"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nameByLanguage"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]} as unknown as DocumentNode<Product_InfoFragment, unknown>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"with"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductOptionInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductFilterInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connectedProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"with"},"value":{"kind":"Variable","name":{"kind":"Name","value":"with"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Product_Info"}}]}}]}}]}}]}},...Product_InfoFragmentDoc.definitions]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProductById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Product_Info"}}]}}]}},...Product_InfoFragmentDoc.definitions]} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;