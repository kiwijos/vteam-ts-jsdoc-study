/**
 * My very own type.
 * @typedef {{data: string}} myVeryOwnType
 */

/**
 * Parse my data.
 * @param {myVeryOwnType} obj
 * @returns {string}
 */
export function parseMyData(obj) {
    return obj.data;
}
