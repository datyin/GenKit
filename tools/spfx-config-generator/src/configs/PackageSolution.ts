import { getArray, getString, isObject, isStringNotEmpty } from "@genkit/guards";
import type { PackageSolutionConfig, SolutionDescription } from "./PackageSolution.types";
import type { DeepPartial } from "../types";

/**
 * Get the name of the solution from the package.json and prepend a prefix if provided.
 * @param pkg The package.json
 * @param prefix The prefix to prepend to the name of the solution.
 * @returns Formatted name of the solution.
 */
function getName(pkg: Record<string, any>, prefix: string = ""): string {
  const name = getString(pkg.name)
    .trim()
    .toLowerCase()
    .replace(/@/g, "") // Remove @ from scoped packages
    .replace(/[_\/]+/g, "-") // Replace underscores and slashes with dashes
  ;

  if (isStringNotEmpty(prefix)) {
    return `${prefix}-${name}`;
  }

  return name;
}

function getDescription(pkg: Record<string, any>, override?: DeepPartial<PackageSolutionConfig>) {
/**
   * Short description:
   *
   * `Overrides > package.json.description > "Short Description"`
   *
   * @remark There is hard-coded fallback value because this is a required field.
   */
  let shortDescription: SolutionDescription = { default: getString(pkg.description).trim() || "Short Description" };

  if (isObject<SolutionDescription>(override?.solution.metadata?.shortDescription)) {
    shortDescription = override!.solution.metadata!.shortDescription;
  }

  /**
 * Long description:
 *
 * `Overrides > package.json.description > "Long Description"`
 *
 * @remark There is hard-coded fallback value because this is a required field.
 */
  let longDescription: SolutionDescription = { default: getString(pkg.description).trim() || "Long Description" };

  if (isObject<SolutionDescription>(override?.solution.metadata?.longDescription)) {
    longDescription = override!.solution.metadata!.longDescription;
  }

  return {
    shortDescription,
    longDescription
  };
}

async function generatePackageSolution(pkg: Record<string, any>, override?: DeepPartial<PackageSolutionConfig>): Promise<PackageSolutionConfig> {
  const name = getName(pkg, "");
  const { shortDescription, longDescription } = getDescription(pkg, override);

  const supportedLocales = getArray<string>(override?.solution?.supportedLocales, {
    default: [],
    filter: (locale: unknown) => {
      return (/^[a-z]{2}-[a-z]{2}$/i).test(getString(locale));
    }
  });

  return {
    $schema: "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
    solution: {
      name,
      id: "0000-0000-0000-0000",
      version: `${pkg.version || "0.0.0"}.0`,
      includeClientSideAssets: true,
      skipFeatureDeployment: true,
      isDomainIsolated: false,
      developer: {
        name: pkg?.author?.name || "bat-groupware GmbH",
        websiteUrl: pkg?.author?.url || "https://www.bat.at/",
        privacyUrl: "",
        termsOfUseUrl: "",
        mpnId: "Undefined-1.14.0"
      },
      supportedLocales,
      metadata: {
        shortDescription,
        longDescription,
        screenshotPaths: [],
        videoUrl: "",
        categories: []
      },
      features: [
        {
          title: "SPFX Features",
          description: "The feature that activates elements this solution.",
          id: "5d36948b-fc80-4ee7-8eaf-8a9bd7783a12",
          version: "1.0.0.0"
        }
      ]
    },
    paths: {
      packageDir: "./sharepoint",
      debugDir: "solution/debug",
      featureXmlDir: "feature_xml",
      sharepointAssetDir: "assets",
      zippedPackage: `solution/${name}.sppkg`
    }
  };
}

export { generatePackageSolution };
