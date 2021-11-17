import type { Cart, OrdercloudCart, OrdercloudLineItem } from '../../types/cart'

export function formatCart(
  cart: OrdercloudCart,
  lineItems: OrdercloudLineItem[]
): Cart {

  console.info(lineItems);

  return {
    id: cart.ID,
    customerId: cart.FromUserID,
    email: cart.FromUser.Email,
    createdAt: cart.DateCreated,
    currency: {
      code: cart.FromUser?.xp?.currency ?? 'USD',
    },
    taxesIncluded: cart.TaxCost === 0,
    lineItems: lineItems.map((lineItem) => ({
      id: lineItem.ID,
      variantId: lineItem.Variant ? String(lineItem.Variant.ID) : '',
      productId: lineItem.ProductID,
      name: lineItem.Product.Name,
      quantity: lineItem.Quantity,
      discounts: [],
      path: lineItem.ProductID,
      variant: {
        id: lineItem.Variant ? String(lineItem.Variant.ID) : '',
        sku: lineItem.ID,
        name: lineItem.Product.Name,
        /*image: {
          url: "https://ordercloudheadstarttest.blob.core.windows.net/assets/8738f5db-a2c3-459b-bf7a-3a458e6d7bf5",
           lineItem.Product.xp?.Images?.[0]?.url, 
        },*/
        requiresShipping: Boolean(lineItem.ShippingAddress),
        price: lineItem.UnitPrice * 1.30,
        listPrice: lineItem.UnitPrice * 1.30,
      },
    })),
    lineItemsSubtotalPrice: cart.Subtotal * 1.30,
    subtotalPrice: cart.Subtotal * 1.30,
    totalPrice: cart.Total * 1.30,
    discounts: [],
  }
}
