import type { Product } from '@commerce/types/product'

import type { RawProduct } from '../types/product'

export function normalize(product: RawProduct): Product {
  return {
    id: product.ID,
    name: product.Name,
    description: product.Description,
    slug: product.ID,
    images: product.xp?.Images?.length ? product.xp.Images.map((img) => ({
      url: img.Url
      })) 
      : [],
    price: {
      value: product.PriceSchedule?.PriceBreaks?.length ? product.PriceSchedule.PriceBreaks[0].Price : -1,
      currencyCode: product.xp.Currency,
    },
    variants: product.xp.Variants?.length
      ? product.xp.Variants.map((variant) => ({
          id: variant.ID,
          options: variant.Specs.map((spec) => ({
            id: spec.SpecID,
            __typename: 'MultipleChoiceOption',
            displayName: spec.Name,
            values: [
              {
                label: spec.Value,
              },
            ],
          })),
        }))
      : [
          {
            id: '',
            options: [],
          },
        ],
    options: product.xp.Specs?.length
      ? product.xp.Specs.map((spec) => ({
          id: spec.ID,
          displayName: spec.Name,
          values: spec.Options.map((option) => ({
            label: option.Value,
            ...(option.xp?.hexColor && { hexColors: [option.xp.hexColor] }),
          })),
        }))
      : [],
  }
}
