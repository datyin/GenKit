/**
 * List of SPFx packages
 */
const spfxPackages = [
  "@microsoft/sp-adaptive-card-extension-base",
  "@microsoft/sp-application-base",
  "@microsoft/sp-component-base",
  "@microsoft/sp-core-library",
  "@microsoft/sp-diagnostics",
  "@microsoft/sp-dialog",
  "@microsoft/sp-dynamic-data",
  "@microsoft/sp-extension-base",
  "@microsoft/sp-http",
  "@microsoft/sp-http-base",
  "@microsoft/sp-http-msgraph",
  "@microsoft/sp-image-helper",
  "@microsoft/sp-list-subscription",
  "@microsoft/sp-listview-extensibility",
  "@microsoft/sp-loader",
  "@microsoft/sp-lodash-subset",
  "@microsoft/sp-module-interfaces",
  "@microsoft/sp-odata-types",
  "@microsoft/sp-page-context",
  "@microsoft/sp-property-pane",
  "@microsoft/sp-search-extensibility",
  "@microsoft/sp-top-actions",
  "@microsoft/sp-webpart-base"
] as const;

type SpfxPackage = typeof spfxPackages[number];

export { spfxPackages };
export type { SpfxPackage };
