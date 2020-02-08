import { ts, errors } from "@ts-morph/common";
import { JSDocTypeParameteredTag } from "./base";
import { JSDocTag } from "./JSDocTag";

export const JSDocTemplateTagBase = JSDocTypeParameteredTag(JSDocTag);
/**
 * JS doc template tag node.
 */
export class JSDocTemplateTag extends JSDocTemplateTagBase<ts.JSDocTemplateTag> {
    /** Gets the template tag's constraint if it exists or returns undefined. */
    getConstraint() {
        return this._getNodeFromCompilerNodeIfExists(this.compilerNode.constraint);
    }

    /** Gets the template tag's constraint if it exists or throws otherwise. */
    getConstraintOrThrow() {
        return errors.throwIfNullOrUndefined(this.getConstraint(), "Expected to find the JS doc template tag's constraint.");
    }
}
