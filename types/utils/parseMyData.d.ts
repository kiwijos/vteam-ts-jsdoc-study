/**
 * My very own type.
 * @typedef {{data: string}} myVeryOwnType
 */
/**
 * Parse my data.
 * @param {myVeryOwnType} obj
 * @returns {string}
 */
export function parseMyData(obj: myVeryOwnType): string;
/**
 * My very own type.
 */
export type myVeryOwnType = {
    data: string;
};
