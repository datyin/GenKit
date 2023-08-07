import { getArray, isStringNotEmpty } from "@genkit/guards";
import { getSpfxErrorMessage } from "../getSpfxErrorMessage";
import { pnp } from "../onInitPNP";
import type { IItem } from "@pnp/sp/items";

interface GetPageItemOptions {
  expand?: string[];
  select?: string[];
}

interface GetPageItemResponse {
  item: IItem | undefined;
  error?: string;
}

async function getPageItem(options: GetPageItemOptions = {}): Promise<GetPageItemResponse> {
  if (!pnp.sp) {
    return { item: undefined, error: "PnP is not initialized." };
  }

  if (!pnp.context?.pageContext?.list?.id) {
    return { item: undefined, error: "Page List ID is not available." };
  }

  if (!pnp.context?.pageContext?.listItem?.id) {
    return { item: undefined, error: "Page List Item ID is not available." };
  }

  try {
    const expand = getArray<string>(options.expand, { filter: isStringNotEmpty });
    const select = getArray<string>(options.select, { filter: isStringNotEmpty });

    const item = pnp.sp.web.lists
      .getById(pnp.context.pageContext.list.id.toString())
      .items
      .getById(pnp.context.pageContext.listItem.id)
      .expand(...expand)
      .select(...select)
    ;

    return { item };
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { item: undefined, error: message };
  }
}

export { getPageItem };
export type { GetPageItemOptions, GetPageItemResponse };
