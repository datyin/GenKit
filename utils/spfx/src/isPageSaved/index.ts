import { getSpfxErrorMessage, pnp } from "..";
import type { WebPartContext } from "@microsoft/sp-webpart-base";

async function isPageSaved(context: WebPartContext | undefined | null = undefined): Promise<boolean> {
  const ctx = context || pnp.context;

  if (!ctx) {
    return false;
  }

  if (!pnp.sp) {
    return false;
  }

  if (!pnp.context?.pageContext?.list?.id) {
    console.error("isPageSaved", "Page List ID is not available.");
    return false;
  }

  if (!pnp.context?.pageContext?.listItem?.id) {
    console.error("isPageSaved", "Page List Item ID is not available.");
    return false;
  }

  try {
    const item = await pnp.sp.web.lists.getById(pnp.context.pageContext.list.id.toString()).items.getById(pnp.context.pageContext.listItem.id)();

    if (item == null || item?.Title == null || item?.Title === "") {
      return false;
    }

    return true;
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    console.error("isPageSaved", message);
    return false;
  }
}

export { isPageSaved };
