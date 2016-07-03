/**
 * Class that allow us to swap substrings in string
 */
export default class StringSwaper {
    /**
     * Swaps substrings 'a' and 'b' in string 'context'
     * @param a Substring that we need to replace with second substring
     * @param b Substring that we need to replace with first substring
     * @param context String that contain 'a' and 'b' subtrings
     * @returns {string} String 'context' with substrings 'a' and 'b' swapped
     */
    swap(a: string, b: string, context: string): string {
        let regexp = new RegExp(`(${a}|${b})`, `g`);
        return context.replace(regexp, (x) => (x === a ? b : a));
    }
}