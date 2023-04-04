/**
 * Do not edit directly
 * Generated on Tue, 04 Apr 2023 07:32:55 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "Primary": DesignToken,
  "border-color": DesignToken,
  "fsSmall": DesignToken,
  "fsPrimary": DesignToken,
  "fsLarge": DesignToken
}