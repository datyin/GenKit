import { getArray, isStringNotEmpty } from "@genkit/guards";
import { getSpfxErrorMessage } from "..";
import type { IItem } from "@pnp/sp/items";
import type { IRoleAssignmentInfo } from "@pnp/sp/security";

interface GetItemRoleAssignmentsOptions {
  expand?: string[];
  select?: string[];
}

interface GetItemRoleAssignmentsResponse {
  assignments: IRoleAssignmentInfo[];
  error?: string;
}

async function getItemRoleAssignments(item: IItem, options: GetItemRoleAssignmentsOptions = {}): Promise<GetItemRoleAssignmentsResponse> {
  try {
    const expand = getArray<string>(options.expand, { filter: isStringNotEmpty });
    const select = getArray<string>(options.expand, { filter: isStringNotEmpty });

    const assignments = await item.roleAssignments.expand(...expand).select(...select)();

    return { assignments };
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { assignments: [], error: message };
  }
}

export { getItemRoleAssignments };
export type { GetItemRoleAssignmentsOptions, GetItemRoleAssignmentsResponse };
