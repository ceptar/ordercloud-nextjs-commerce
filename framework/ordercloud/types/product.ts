interface RawVariantSpec {
  SpecID: string
  Name: string
  OptionID: string
  Value: string
  PriceMarkupType: string
  PriceMarkup: string | null
}

export interface RawSpec {
  ID: string
  Name: string
  Options: {
    ID: string
    Value: string
    xp: {
      hexColor?: string
    }
  }[]
}

export interface RawVariant {
  ID: string
  Specs: RawVariantSpec[]
}

export interface RawImages {
  ThumbnailUrl: string
  Url: string
}

export interface RawPriceBreaks {
  Quantity: number
  Price: number
}

export interface RawProduct {
  OwnerID: string
  DefaultPriceScheduleID: string | null
  AutoForward: boolean
  ID: string
  Name: string
  Description: string
  QuantityMultiplier: number
  ShipWeight: null
  ShipHeight: null
  ShipWidth: null
  ShipLength: null
  Active: boolean
  SpecCount: number
  VariantCount: number
  ShipFromAddressID: null
  Inventory: null
  DefaultSupplierID: null
  AllSuppliersCanSell: boolean
  PriceSchedule: {
    PriceBreaks: RawPriceBreaks[]
  }
  xp: {
    Price: number
    Currency: string
    Images?: RawImages[]
    Variants?: RawVariant[]
    Specs?: RawSpec[]
  }
}
