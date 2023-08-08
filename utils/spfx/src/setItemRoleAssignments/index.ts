import { getBoolean } from "@genkit/guards";
import { getSpfxErrorMessage } from "../index";
import type { IItem } from "@pnp/sp/items";

/**
 * Sets the role assignments for the specified item.
 *
 * @param item Page, ListItem, File or Folder
 * @param userId the id of the user to assign the role to
 * @param roleDefinitionId the id of the role definition to assign
 * @param clearExisting if true, breaks inheritance and clears existing role assignments
 * @returns object with property error if an error occurs, otherwise undefined
 *
 * @example
 * ```ts
 * const { error } = await setItemRoleAssignments(item, 10, 1073741827);
 * ```
 */
async function setItemRoleAssignments(item: IItem, userId: number, roleDefinitionId: number, clearExisting: boolean = true) {
  try {
    if (getBoolean(clearExisting, { default: true })) {
      await item.breakRoleInheritance(true);
    }

    await item.roleAssignments.add(userId, roleDefinitionId);

    return undefined;
  }
  catch (error) {
    const message = await getSpfxErrorMessage(error);

    return { error: message };
  }
}

export { setItemRoleAssignments };
