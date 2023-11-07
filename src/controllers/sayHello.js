import { parseMyData } from "../utils/parseMyData.js";

/**
 * Say hello.
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @returns {Promise<void>}
 */
export const sayHello = async (req, res) => {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: "Hello World" });
        }, 1000);
    });
    res.json(parseMyData(data));
};
