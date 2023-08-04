export type SolutionScreenshots =
  | never[]
  | [string]
  | [string, string]
  | [string, string, string]
  | [string, string, string, string]
  | [string, string, string, string, string];

export type PackageSolutionCategories =
  | never[]
  | [
      | "Accounting + Finance"
      | "Collaboration"
      | "Content management"
      | "CRM"
      | "Data + analytics"
      | "File managers"
      | "IT/admin"
      | "Legal + HR"
      | "News + weather"
      | "Productivity"
      | "Project management"
      | "Reference"
      | "Sales + marketing"
      | "Site Design"
      | "Social"
      | "Workflow & Process Management"
  ]
  | [
    (
        | "Accounting + Finance"
        | "Collaboration"
        | "Content management"
        | "CRM"
        | "Data + analytics"
        | "File managers"
        | "IT/admin"
        | "Legal + HR"
        | "News + weather"
        | "Productivity"
        | "Project management"
        | "Reference"
        | "Sales + marketing"
        | "Site Design"
        | "Social"
        | "Workflow & Process Management"
    ),
    (
        | "Accounting + Finance"
        | "Collaboration"
        | "Content management"
        | "CRM"
        | "Data + analytics"
        | "File managers"
        | "IT/admin"
        | "Legal + HR"
        | "News + weather"
        | "Productivity"
        | "Project management"
        | "Reference"
        | "Sales + marketing"
        | "Site Design"
        | "Social"
        | "Workflow & Process Management"
    )
  ]
  | [
    (
        | "Accounting + Finance"
        | "Collaboration"
        | "Content management"
        | "CRM"
        | "Data + analytics"
        | "File managers"
        | "IT/admin"
        | "Legal + HR"
        | "News + weather"
        | "Productivity"
        | "Project management"
        | "Reference"
        | "Sales + marketing"
        | "Site Design"
        | "Social"
        | "Workflow & Process Management"
    ),
    (
        | "Accounting + Finance"
        | "Collaboration"
        | "Content management"
        | "CRM"
        | "Data + analytics"
        | "File managers"
        | "IT/admin"
        | "Legal + HR"
        | "News + weather"
        | "Productivity"
        | "Project management"
        | "Reference"
        | "Sales + marketing"
        | "Site Design"
        | "Social"
        | "Workflow & Process Management"
    ),
    (
        | "Accounting + Finance"
        | "Collaboration"
        | "Content management"
        | "CRM"
        | "Data + analytics"
        | "File managers"
        | "IT/admin"
        | "Legal + HR"
        | "News + weather"
        | "Productivity"
        | "Project management"
        | "Reference"
        | "Sales + marketing"
        | "Site Design"
        | "Social"
        | "Workflow & Process Management"
    )
  ];

export interface SolutionDescription {
  default: string;
  [k: string]: string;
}

export interface PackageSolutionConfig {
  $schema?: string;
  paths?: {
    /**
     * The packaging root folder
     * @default "./sharepoint"
     */
    packageDir?: string;

    /**
     * The folder to write the raw package to disk for debugging.
     * @default "solution/debug"
     */
    debugDir?: string;

    /**
     * The name of the sppkg to create (including extension)
     * @default "ClientSolution.sppkg"
     */
    zippedPackage?: string;

    /**
     * The folder containing the raw feature_xml to import into the package.
     * @default "feature_xml"
     */
    featureXmlDir?: string;

    /**
     * The folder containing SharePoint assets (elements.xml, upgrade actions, etc.).
     * @default "assets"
     */
    sharepointAssetDir?: string;
  };
  solution: {
    /**
     * Non localized name to identify the package
     */
    name: string;

    /**
     * A GUID identifier for this particular package
     */
    id: string;

    /**
     * Localizable string for the title of the package. Can either be a non-localized string, or `$Resources:<stringId>;` if localized resources are provided for the package through a .resx file
     */
    title?: string;

    /**
     * The list of cultures which this package can be used with. Follows LL-CC for each locale.
     */
    supportedLocales?: string[];

    /**
     * Version of the package, may not match with the version of the components.
     */
    version?: string;

    /**
     * Relative path to the icon file. Base path is the base package directory.
     */
    iconPath?: string;

    /**
     * If true, allow the tenant admin the choice of being able to deploy the components to all sites immediately without running any feature deployment or adding apps in sites.
     */
    skipFeatureDeployment?: boolean;

    /**
     * If true, all client-side resources will be automatically included in the package and will be deployed to your SharePoint tenancy.
     */
    includeClientSideAssets?: boolean;

    /**
     * If omitted, a feature will be created to contain the components.
     */
    features?: {
      title: string;
      description: string;
      id: string;
      version?: string;
      componentIds?: string[];
      assets?: {
        elementFiles?: string[];
        elementManifests?: string[];
        upgradeActions?: string[];
      };
    }[];
    webApiPermissionRequests?: {
      resource: string;
      scope: string;
      appId?: string;
      replyUrl?: string;
    };
    isDomainIsolated?: boolean;
    developer?: {
      name: string;
      websiteUrl: string;
      privacyUrl: string;
      termsOfUseUrl: string;
      mpnId: string;
      [k: string]: unknown;
    };
    metadata: {
      shortDescription: SolutionDescription;
      longDescription: SolutionDescription;
      screenshotPaths?: SolutionScreenshots;
      videoUrl?: string;
      categories?: PackageSolutionCategories;
    };
  };
}
