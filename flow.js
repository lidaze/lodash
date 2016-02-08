import createFlow from './_createFlow';

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @category Util
 * @param {...(Function|Function[])} [funcs] Functions to invoke.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow(_.add, square);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

export default flow;
