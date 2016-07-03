/**
 * Class that allow us to swap substrings in string
 */
var StringSwaper = (function () {
    function StringSwaper() {
    }
    /**
     * Swaps substrings 'a' and 'b' in string 'context'
     * @param a Substring that we need to replace with second substring
     * @param b Substring that we need to replace with first substring
     * @param context String that contain 'a' and 'b' subtrings
     * @returns {string} String 'context' with substrings 'a' and 'b' swapped
     */
    StringSwaper.prototype.swap = function (a, b, context) {
        var regexp = new RegExp("(" + a + "|" + b + ")", "g");
        return context.replace(regexp, function (x) { return (x === a ? b : a); });
    };
    return StringSwaper;
}());
