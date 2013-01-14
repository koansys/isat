/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2013 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */

/*global define*/
define('Core/defaultValue',[],function() {
    

    /**
     * Returns the first parameter if not undefined, otherwise the second parameter.
     * Useful for setting a default value for a parameter.
     *
     * @exports defaultValue
     *
     * @example
     * param = defaultValue(param, 'default');
     */
    var defaultValue = function(a, b) {
        if (typeof a !== 'undefined') {
            return a;
        }
        return b;
    };

    return defaultValue;
});
/*global define*/
define('Core/DeveloperError',[],function() {
    

    /**
     * Constructs an exception object that is thrown due to a developer error, e.g., invalid argument,
     * argument out of range, etc.  This exception should only be thrown during development;
     * it usually indicates a bug in the calling code.  This exception should never be
     * caught; instead the calling code should strive not to generate it.
     * <br /><br />
     * On the other hand, a {@link RuntimeError} indicates an exception that may
     * be thrown at runtime, e.g., out of memory, that the calling code should be prepared
     * to catch.
     *
     * @alias DeveloperError
     *
     * @param {String} [message=undefined] The error message for this exception.
     *
     * @see RuntimeError
     * @constructor
     */
    var DeveloperError = function(message) {
        /**
         * 'DeveloperError' indicating that this exception was thrown due to a developer error.
         * @type String
         * @constant
         */
        this.name = 'DeveloperError';

        /**
         * The explanation for why this exception was thrown.
         * @type String
         * @constant
         */
        this.message = message;

        /**
         * The Error object containing the stack trace.
         * @type Error
         * @constant
         *
         * @see <a href='https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error'>Error object on Mozilla Developer Network</a>.
         */
        this.error = new Error();
    };

    DeveloperError.prototype.toString = function () {
        var str = this.name + ': ' + this.message;
        if (typeof this.error !== 'undefined') {
            if (typeof this.error.stack !== 'undefined') {
                str += '\n' + this.error.stack.toString();
            } else {
                str += '\n' + this.error.toString();
            }
        }
        return str;
    };

    return DeveloperError;
});

/*global define*/
define('Core/Math',[
        './defaultValue',
        './DeveloperError'
       ], function(
         defaultValue,
         DeveloperError) {
    

    /**
     * Math functions.
     * @exports CesiumMath
     */
    var CesiumMath = {};

    /**
     * 0.1
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON1 = 0.1;

    /**
     * 0.01
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON2 = 0.01;

    /**
     * 0.001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON3 = 0.001;

    /**
     * 0.0001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON4 = 0.0001;

    /**
     * 0.00001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON5 = 0.00001;

    /**
     * 0.000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON6 = 0.000001;

    /**
     * 0.0000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON7 = 0.0000001;

    /**
     * 0.00000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON8 = 0.00000001;

    /**
     * 0.000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON9 = 0.000000001;

    /**
     * 0.0000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON10 = 0.0000000001;

    /**
     * 0.00000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON11 = 0.00000000001;

    /**
     * 0.000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON12 = 0.000000000001;

    /**
     * 0.0000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON13 = 0.0000000000001;

    /**
     * 0.00000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON14 = 0.00000000000001;

    /**
     * 0.000000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON15 = 0.000000000000001;

    /**
     * 0.0000000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON16 = 0.0000000000000001;

    /**
     * 0.00000000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON17 = 0.00000000000000001;

    /**
     * 0.000000000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON18 = 0.000000000000000001;

    /**
     * 0.0000000000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON19 = 0.0000000000000000001;

    /**
     * 0.00000000000000000001
     * @constant
     * @type Number
     */
    CesiumMath.EPSILON20 = 0.00000000000000000001;

    /**
     * 3.986004418e14
     * @constant
     * @type Number
     */
    CesiumMath.GRAVITATIONALPARAMETER = 3.986004418e14;

    /**
     * Returns the sign of the value; 1 if the value is positive, -1 if the value is
     * negative, or 0 if the value is 0.
     *
     * @param {Number} value The value to return the sign of.
     *
     * @return {Number} The sign of value.
     */
    CesiumMath.sign = function(value) {
        if (value > 0) {
            return 1;
        }
        if (value < 0) {
            return -1;
        }

        return 0;
    };

    /**
     * Returns the hyperbolic sine of a {@code Number}.
     * The hyperbolic sine of <em>value</em> is defined to be
     * (<em>e<sup>x</sup>&nbsp;-&nbsp;e<sup>-x</sup></em>)/2.0
     * where <i>e</i> is Euler's number, approximately 2.71828183.
     *
     * <p>Special cases:
     *   <ul>
     *     <li>If the argument is NaN, then the result is NaN.</li>
     *
     *     <li>If the argument is infinite, then the result is an infinity
     *     with the same sign as the argument.</li>
     *
     *     <li>If the argument is zero, then the result is a zero with the
     *     same sign as the argument.</li>
     *   </ul>
     *</p>
     *
     * @param value The number whose hyperbolic sine is to be returned.
     *
     * @return The hyperbolic sine of {@code value}.
     *
     */
    CesiumMath.sinh = function(value) {
        var part1 = Math.pow(Math.E, value);
        var part2 = Math.pow(Math.E, -1.0 * value);

        return (part1 - part2) * 0.5;
    };

    /**
     * Returns the hyperbolic cosine of a {@code Number}.
     * The hyperbolic cosine of <strong>value</strong> is defined to be
     * (<em>e<sup>x</sup>&nbsp;+&nbsp;e<sup>-x</sup></em>)/2.0
     * where <i>e</i> is Euler's number, approximately 2.71828183.
     *
     * <p>Special cases:
     *   <ul>
     *     <li>If the argument is NaN, then the result is NaN.</li>
     *
     *     <li>If the argument is infinite, then the result is positive infinity.</li>
     *
     *     <li>If the argument is zero, then the result is {@code 1.0}.</li>
     *   </ul>
     *</p>
     *
     * @param value The number whose hyperbolic cosine is to be returned.
     *
     * @return The hyperbolic cosine of {@code value}.
     */
    CesiumMath.cosh = function(value) {
        var part1 = Math.pow(Math.E, value);
        var part2 = Math.pow(Math.E, -1.0 * value);

        return (part1 + part2) * 0.5;
    };

    /**
     * DOC_TBA
     */
    CesiumMath.lerp = function(p, q, time) {
        return ((1.0 - time) * p) + (time * q);
    };

    /**
     * 1/pi
     *
     * @constant
     * @type {Number}
     * @see czm_pi
     */
    CesiumMath.PI = Math.PI;

    /**
     * 1/pi
     *
     * @constant
     * @type {Number}
     * @see czm_oneOverPi
     */
    CesiumMath.ONE_OVER_PI = 1.0 / Math.PI;

    /**
     * pi/2
     *
     * @constant
     * @type {Number}
     * @see czm_piOverTwo
     */
    CesiumMath.PI_OVER_TWO = Math.PI * 0.5;

    /**
     * pi/3
     * <br /><br />
     *
     * @constant
     * @type {Number}
     * @see czm_piOverThree
     */
    CesiumMath.PI_OVER_THREE = Math.PI / 3.0;

    /**
     * pi/4
     *
     * @constant
     * @type {Number}
     * @see czm_piOverFour
     */
    CesiumMath.PI_OVER_FOUR = Math.PI / 4.0;

    /**
     * pi/6
     *
     * @constant
     * @type {Number}
     * @see czm_piOverSix
     */
    CesiumMath.PI_OVER_SIX = Math.PI / 6.0;

    /**
     * 3pi/2
     *
     * @constant
     * @type {Number}
     * @see czm_threePiOver2
     */
    CesiumMath.THREE_PI_OVER_TWO = (3.0 * Math.PI) * 0.5;

    /**
     * 2pi
     *
     * @constant
     * @type {Number}
     * @see czm_twoPi
     */
    CesiumMath.TWO_PI = 2.0 * Math.PI;

    /**
     * 1/2pi
     *
     * @constant
     * @type {Number}
     * @see czm_oneOverTwoPi
     */
    CesiumMath.ONE_OVER_TWO_PI = 1.0 / (2.0 * Math.PI);

    /**
     * The number of radians in a degree.
     *
     * @constant
     * @type {Number}
     * @see czm_radiansPerDegree
     */
    CesiumMath.RADIANS_PER_DEGREE = Math.PI / 180.0;

    /**
     * The number of degrees in a radian.
     *
     * @constant
     * @type {Number}
     * @see czm_degreesPerRadian
     */
    CesiumMath.DEGREES_PER_RADIAN = 180.0 / Math.PI;

    /**
     * Converts degrees to radians.
     * @param {Number} degrees The angle to convert in degrees.
     * @return {Number} The corresponding angle in radians.
     */
    CesiumMath.toRadians = function(degrees) {
        return degrees * CesiumMath.RADIANS_PER_DEGREE;
    };

    /**
     * Converts radians to degrees.
     * @param {Number} radians The angle to convert in radians.
     * @return {Number} The corresponding angle in degrees.
     */
    CesiumMath.toDegrees = function(radians) {
        return radians * CesiumMath.DEGREES_PER_RADIAN;
    };

    /**
     * Converts a longitude value, in radians, to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
     *
     * @param {Number} angle The longitude value, in radians, to convert to the range [<code>-Math.PI</code>, <code>Math.PI</code>).
     *
     * @return {Number} The equivalent longitude value in the range [<code>-Math.PI</code>, <code>Math.PI</code>).
     *
     * @example
     * // Convert 270 degrees to -90 degrees longitude
     * var longitude = CesiumMath.convertLongitudeRange(CesiumMath.toRadians(270.0));
     */
    CesiumMath.convertLongitudeRange = function(angle) {
        var twoPi = CesiumMath.TWO_PI;

        var simplified = angle - Math.floor(angle / twoPi) * twoPi;

        if (simplified < -Math.PI) {
            return simplified + twoPi;
        }
        if (simplified >= Math.PI) {
            return simplified - twoPi;
        }

        return simplified;
    };

    /**
     * Alters the value of input x such that <code>-CesiumMath.PI</code> <= x <= <code>CesiumMath.PI</code>
     * @param {Number} angle in radians
     * @return {Number} The angle in the range ()<code>-CesiumMath.PI</code>, <code>CesiumMath.PI</code>).
     */
    CesiumMath.negativePiToPi = function(x) {
        var epsilon10 = CesiumMath.EPSILON10;
        var pi = CesiumMath.PI;
        var two_pi = CesiumMath.TWO_PI;
        while (x < -(pi + epsilon10)) {
            x += two_pi;
        }
        if (x < -pi) {
            return -pi;
        }
        while (x > pi + epsilon10) {
            x -= two_pi;
        }
        return x > pi ? pi : x;
    };

    /**
     * DOC_TBA
     */
    CesiumMath.equalsEpsilon = function(left, right, epsilon) {
        epsilon = epsilon || 0.0;
        return Math.abs(left - right) <= epsilon;
    };

    var factorials = [1];

    /**
     * Computes the factorial of the provided number.
     *
     * @memberof CesiumMath
     *
     * @param {Number} n The number whose factorial is to be computed.
     *
     * @return {Number} The factorial of the provided number or undefined if the number is less than 0.
     *
     * @see <a href='http://en.wikipedia.org/wiki/Factorial'>Factorial on Wikipedia</a>.
     *
     * @example
     * //Compute 7!, which is equal to 5040
     * var computedFactorial = CesiumMath.factorial(7);
     *
     * @exception {DeveloperError} A number greater than or equal to 0 is required.
     */
    CesiumMath.factorial = function(n) {
        if (typeof n !== 'number' || n < 0) {
            throw new DeveloperError('A number greater than or equal to 0 is required.');
        }

        var length = factorials.length;
        if (n >= length) {
            var sum = factorials[length - 1];
            for ( var i = length; i <= n; i++) {
                factorials.push(sum * i);
            }
        }
        return factorials[n];
    };

    /**
     * Increments a number with a wrapping to a minimum value if the number exceeds the maximum value.
     *
     * @memberof CesiumMath
     *
     * @param {Number} [n] The number to be incremented.
     * @param {Number} [maximumValue] The maximum incremented value before rolling over to the minimum value.
     * @param {Number} [minimumValue=0.0] The number reset to after the maximum value has been exceeded.
     *
     * @return {Number} The incremented number.
     *
     * @example
     * var n = CesiumMath.incrementWrap(5, 10, 0); // returns 6
     * var n = CesiumMath.incrementWrap(10, 10, 0); // returns 0
     *
     * @exception {DeveloperError} Maximum value must be greater than minimum value.
     */
    CesiumMath.incrementWrap = function(n, maximumValue, minimumValue) {
        minimumValue = defaultValue(minimumValue, 0.0);

        if (maximumValue <= minimumValue) {
            throw new DeveloperError('Maximum value must be greater than minimum value.');
        }

        ++n;
        if (n > maximumValue) {
            n = minimumValue;
        }
        return n;
    };

    /**
     * Determines if a positive integer is a power of two.
     *
     * @memberof CesiumMath
     *
     * @param {Number} n The positive integer to test.
     *
     * @return {Boolean} <code>true</code> if the number if a power of two; otherwise, <code>false</code>.
     *
     * @example
     * var t = CesiumMath.isPowerOfTwo(16); // true
     * var f = CesiumMath.isPowerOfTwo(20); // false
     *
     * @exception {DeveloperError} A number greater than or equal to 0 is required.
     */
    CesiumMath.isPowerOfTwo = function(n) {
        if (typeof n !== 'number' || n < 0) {
            throw new DeveloperError('A number greater than or equal to 0 is required.');
        }

        var m = n | 0;
        return (m !== 0) && ((m & (m - 1)) === 0);
    };

    /**
     * Constraint a value to lie between two values.
     *
     * @memberof CesiumMath
     *
     * @param {Number} value The value to constrain.
     * @param {Number} min The minimum value.
     * @param {Number} max The maximum value.
     * @returns The value clamped so that min <= value <= max.
     */
    CesiumMath.clamp = function(value, min, max) {
        return value < min ? min : value > max ? max : value;
    };

    return CesiumMath;
});

/*global define*/
define('Core/freezeObject',[],function() {
    

    /**
     * Freezes an object, using Object.freeze if available, otherwise returns
     * the object unchanged.  This function should be used in setup code to prevent
     * errors from completely halting JavaScript execution in legacy browsers.
     *
     * @exports freezeObject
     */
    var freezeObject = Object.freeze;
    if (typeof freezeObject === 'undefined') {
        freezeObject = function(o) {
            return o;
        };
    }

    return freezeObject;
});
/*global define*/
define('Core/Cartesian3',[
        './defaultValue',
        './DeveloperError',
        './freezeObject'
    ], function(
        defaultValue,
        DeveloperError,
        freezeObject) {
    

    /**
     * A 3D Cartesian point.
     * @alias Cartesian3
     * @constructor
     *
     * @param {Number} [x=0.0] The X component.
     * @param {Number} [y=0.0] The Y component.
     * @param {Number} [z=0.0] The Z component.
     *
     * @see Cartesian2
     * @see Cartesian4
     */
    var Cartesian3 = function(x, y, z) {
        /**
         * The X component.
         * @type Number
         */
        this.x = defaultValue(x, 0.0);

        /**
         * The Y component.
         * @type Number
         */
        this.y = defaultValue(y, 0.0);

        /**
         * The Z component.
         * @type Number
         */
        this.z = defaultValue(z, 0.0);
    };

    /**
     * Converts the provided Spherical into Cartesian3 coordinates.
     * @memberof Cartesian3
     *
     * @param {Spherical} spherical The Spherical to be converted to Cartesian3.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} spherical is required.
     */
    Cartesian3.fromSpherical = function(spherical, result) {
        if (typeof spherical === 'undefined') {
            throw new DeveloperError('spherical is required');
        }
        if (typeof result === 'undefined') {
            result = new Cartesian3();
        }
        var clock = spherical.clock;
        var cone = spherical.cone;
        var magnitude = defaultValue(spherical.magnitude, 1.0);
        var radial = magnitude * Math.sin(cone);
        result.x = radial * Math.cos(clock);
        result.y = radial * Math.sin(clock);
        result.z = magnitude * Math.cos(cone);
        return result;
    };

    /**
     * Duplicates a Cartesian3 instance.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian to duplicate.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.clone = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }

        if (typeof result === 'undefined') {
            return new Cartesian3(cartesian.x, cartesian.y, cartesian.z);
        }

        result.x = cartesian.x;
        result.y = cartesian.y;
        result.z = cartesian.z;
        return result;
    };

    /**
     * Creates a Cartesian3 instance from an existing Cartesian4.  This simply takes the
     * x, y, and z properties of the Cartesian4 and drops w.
     * @function
     *
     * @param {Cartesian4} cartesian The Cartesian4 instance to create a Cartesian3 instance from.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.fromCartesian4 = Cartesian3.clone;

    /**
     * Computes the value of the maximum component for the supplied Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} The cartesian to use.
     * @return {Number} The value of the maximum component.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.getMaximumComponent = function(cartesian) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        return Math.max(cartesian.x, cartesian.y, cartesian.z);
    };

    /**
     * Computes the value of the minimum component for the supplied Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} The cartesian to use.
     * @return {Number} The value of the minimum component.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.getMinimumComponent = function(cartesian) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        return Math.min(cartesian.x, cartesian.y, cartesian.z);
    };

    /**
     * Computes the provided Cartesian's squared magnitude.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian instance whose squared magnitude is to be computed.
     * @return {Number} The squared magnitude.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.magnitudeSquared = function(cartesian) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        return cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z;
    };

    /**
     * Computes the Cartesian's magnitude (length).
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian instance whose magnitude is to be computed.
     * @return {Number} The magnitude.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.magnitude = function(cartesian) {
        return Math.sqrt(Cartesian3.magnitudeSquared(cartesian));
    };

    /**
     * Computes the normalized form of the supplied Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian to be normalized.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.normalize = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        var magnitude = Cartesian3.magnitude(cartesian);
        if (typeof result === 'undefined') {
            return new Cartesian3(cartesian.x / magnitude, cartesian.y / magnitude, cartesian.z / magnitude);
        }
        result.x = cartesian.x / magnitude;
        result.y = cartesian.y / magnitude;
        result.z = cartesian.z / magnitude;
        return result;
    };

    /**
     * Computes the dot (scalar) product of two Cartesians.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} left The first Cartesian.
     * @param {Cartesian3} right The second Cartesian.
     * @return {Number} The dot product.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.dot = function(left, right) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        return left.x * right.x + left.y * right.y + left.z * right.z;
    };

    /**
     * Computes the componentwise product of two Cartesians.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} left The first Cartesian.
     * @param {Cartesian3} right The second Cartesian.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.multiplyComponents = function(left, right, result) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(left.x * right.x, left.y * right.y, left.z * right.z);
        }
        result.x = left.x * right.x;
        result.y = left.y * right.y;
        result.z = left.z * right.z;
        return result;
    };

    /**
     * Computes the componentwise sum of two Cartesians.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} left The first Cartesian.
     * @param {Cartesian3} right The second Cartesian.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.add = function(left, right, result) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(left.x + right.x, left.y + right.y, left.z + right.z);
        }
        result.x = left.x + right.x;
        result.y = left.y + right.y;
        result.z = left.z + right.z;
        return result;
    };

    /**
     * Computes the componentwise difference of two Cartesians.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} left The first Cartesian.
     * @param {Cartesian3} right The second Cartesian.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.subtract = function(left, right, result) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(left.x - right.x, left.y - right.y, left.z - right.z);
        }
        result.x = left.x - right.x;
        result.y = left.y - right.y;
        result.z = left.z - right.z;
        return result;
    };

    /**
     * Multiplies the provided Cartesian componentwise by the provided scalar.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian to be scaled.
     * @param {Number} scalar The scalar to multiply with.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian3.multiplyByScalar = function(cartesian, scalar, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (typeof scalar !== 'number') {
            throw new DeveloperError('scalar is required and must be a number.');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(cartesian.x * scalar,  cartesian.y * scalar,  cartesian.z * scalar);
        }
        result.x = cartesian.x * scalar;
        result.y = cartesian.y * scalar;
        result.z = cartesian.z * scalar;
        return result;
    };

    /**
     * Divides the provided Cartesian componentwise by the provided scalar.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian to be divided.
     * @param {Number} scalar The scalar to divide by.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian3.divideByScalar = function(cartesian, scalar, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (typeof scalar !== 'number') {
            throw new DeveloperError('scalar is required and must be a number.');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(cartesian.x / scalar, cartesian.y / scalar, cartesian.z / scalar);
        }
        result.x = cartesian.x / scalar;
        result.y = cartesian.y / scalar;
        result.z = cartesian.z / scalar;
        return result;
    };

    /**
     * Negates the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian to be negated.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.negate = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(-cartesian.x, -cartesian.y, -cartesian.z);
        }
        result.x = -cartesian.x;
        result.y = -cartesian.y;
        result.z = -cartesian.z;
        return result;
    };

    /**
     * Computes the absolute value of the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian whose absolute value is to be computed.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.abs = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required');
        }
        if (typeof result === 'undefined') {
            return new Cartesian3(Math.abs(cartesian.x), Math.abs(cartesian.y), Math.abs(cartesian.z));
        }
        result.x = Math.abs(cartesian.x);
        result.y = Math.abs(cartesian.y);
        result.z = Math.abs(cartesian.z);
        return result;
    };

    var lerpScratch = new Cartesian3();
    /**
     * Computes the linear interpolation or extrapolation at t using the provided cartesians.
     * @memberof Cartesian3
     *
     * @param start The value corresponding to t at 0.0.
     * @param end The value corresponding to t at 1.0.
     * @param t The point along t at which to interpolate.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} start is required.
     * @exception {DeveloperError} end is required.
     * @exception {DeveloperError} t is required and must be a number.
     */
    Cartesian3.lerp = function(start, end, t, result) {
        if (typeof start === 'undefined') {
            throw new DeveloperError('start is required.');
        }
        if (typeof end === 'undefined') {
            throw new DeveloperError('end is required.');
        }
        if (typeof t !== 'number') {
            throw new DeveloperError('t is required and must be a number.');
        }
        Cartesian3.multiplyByScalar(end, t, lerpScratch);
        result = Cartesian3.multiplyByScalar(start, 1.0 - t, result);
        return Cartesian3.add(lerpScratch, result, result);
    };

    var angleBetweenScratch = new Cartesian3();
    var angleBetweenScratch2 = new Cartesian3();
    /**
     * Returns the angle, in radians, between the provided Cartesians.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} left The first Cartesian.
     * @param {Cartesian3} right The second Cartesian.
     * @return {Number} The angle between the Cartesians.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.angleBetween = function(left, right) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }
        Cartesian3.normalize(left, angleBetweenScratch);
        Cartesian3.normalize(right, angleBetweenScratch2);
        var cosine = Cartesian3.dot(angleBetweenScratch, angleBetweenScratch2);
        var sine = Cartesian3.cross(angleBetweenScratch, angleBetweenScratch2, angleBetweenScratch).magnitude();
        return Math.atan2(sine, cosine);
    };

    var mostOrthogonalAxisScratch = new Cartesian3();
    /**
     * Returns the axis that is most orthogonal to the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} cartesian The Cartesian on which to find the most orthogonal axis.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The most orthogonal axis.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Cartesian3.mostOrthogonalAxis = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required.');
        }

        var f = Cartesian3.normalize(cartesian, mostOrthogonalAxisScratch);
        Cartesian3.abs(f, f);

        if (f.x <= f.y) {
            if (f.x <= f.z) {
                result = Cartesian3.clone(Cartesian3.UNIT_X, result);
            } else {
                result = Cartesian3.clone(Cartesian3.UNIT_Z, result);
            }
        } else {
            if (f.y <= f.z) {
                result = Cartesian3.clone(Cartesian3.UNIT_Y, result);
            } else {
                result = Cartesian3.clone(Cartesian3.UNIT_Z, result);
            }
        }

        return result;
    };

    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [left] The first Cartesian.
     * @param {Cartesian3} [right] The second Cartesian.
     * @return {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    Cartesian3.equals = function(left, right) {
        return (left === right) ||
               ((typeof left !== 'undefined') &&
                (typeof right !== 'undefined') &&
                (left.x === right.x) &&
                (left.y === right.y) &&
                (left.z === right.z));
    };

    /**
     * Compares the provided Cartesians componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [left] The first Cartesian.
     * @param {Cartesian3} [right] The second Cartesian.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Cartesian3.equalsEpsilon = function(left, right, epsilon) {
        if (typeof epsilon !== 'number') {
            throw new DeveloperError('epsilon is required and must be a number.');
        }
        return (left === right) ||
               ((typeof left !== 'undefined') &&
                (typeof right !== 'undefined') &&
                (Math.abs(left.x - right.x) <= epsilon) &&
                (Math.abs(left.y - right.y) <= epsilon) &&
                (Math.abs(left.z - right.z) <= epsilon));
    };

    /**
     * Computes the cross (outer) product of two Cartesians.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} left The first Cartesian.
     * @param {Cartesian3} right The second Cartesian.
     * @return {Number} The cross product.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.cross = function(left, right, result) {
        if (typeof left === 'undefined') {
            throw new DeveloperError('left is required');
        }
        if (typeof right === 'undefined') {
            throw new DeveloperError('right is required');
        }

        var leftX = left.x;
        var leftY = left.y;
        var leftZ = left.z;
        var rightX = right.x;
        var rightY = right.y;
        var rightZ = right.z;

        var x = leftY * rightZ - leftZ * rightY;
        var y = leftZ * rightX - leftX * rightZ;
        var z = leftX * rightY - leftY * rightX;

        if (typeof result === 'undefined') {
            return new Cartesian3(x, y, z);
        }
        result.x = x;
        result.y = y;
        result.z = z;
        return result;
    };

    /**
     * An immutable Cartesian3 instance initialized to (0.0, 0.0, 0.0).
     * @memberof Cartesian3
     */
    Cartesian3.ZERO = freezeObject(new Cartesian3(0.0, 0.0, 0.0));

    /**
     * An immutable Cartesian3 instance initialized to (1.0, 0.0, 0.0).
     * @memberof Cartesian3
     */
    Cartesian3.UNIT_X = freezeObject(new Cartesian3(1.0, 0.0, 0.0));

    /**
     * An immutable Cartesian3 instance initialized to (0.0, 1.0, 0.0).
     * @memberof Cartesian3
     */
    Cartesian3.UNIT_Y = freezeObject(new Cartesian3(0.0, 1.0, 0.0));

    /**
     * An immutable Cartesian3 instance initialized to (0.0, 0.0, 1.0).
     * @memberof Cartesian3
     */
    Cartesian3.UNIT_Z = freezeObject(new Cartesian3(0.0, 0.0, 1.0));

    /**
     * Computes the value of the maximum component for this Cartesian.
     * @memberof Cartesian3
     *
     * @return {Number} The value of the maximum component.
     */
    Cartesian3.prototype.getMaximumComponent = function() {
        return Cartesian3.getMaximumComponent(this);
    };

    /**
     * Computes the value of the minimum component for this Cartesian.
     * @memberof Cartesian3
     *
     * @return {Number} The value of the minimum component.
     */
    Cartesian3.prototype.getMinimumComponent = function() {
        return Cartesian3.getMinimumComponent(this);
    };

    /**
     * Duplicates this Cartesian3 instance.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     */
    Cartesian3.prototype.clone = function(result) {
        return Cartesian3.clone(this, result);
    };

    /**
     * Computes this Cartesian's squared magnitude.
     * @memberof Cartesian3
     *
     * @return {Number} The squared magnitude.
     */
    Cartesian3.prototype.magnitudeSquared = function() {
        return Cartesian3.magnitudeSquared(this);
    };

    /**
     * Computes this Cartesian's magnitude (length).
     * @memberof Cartesian3
     *
     * @return {Number} The magnitude.
     */
    Cartesian3.prototype.magnitude = function() {
        return Cartesian3.magnitude(this);
    };

    /**
     * Computes the normalized form of this Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     */
    Cartesian3.prototype.normalize = function(result) {
        return Cartesian3.normalize(this, result);
    };

    /**
     * Computes the dot (scalar) product of this Cartesian and a supplied cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} right The right hand side Cartesian.
     * @return {Number} The dot product.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.prototype.dot = function(right) {
        return Cartesian3.dot(this, right);
    };

    /**
     * Computes the componentwise product of this Cartesian and the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} right The right hand side Cartesian.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.prototype.multiplyComponents = function(right, result) {
        return Cartesian3.multiplyComponents(this, right, result);
    };

    /**
     * Computes the componentwise sum of this Cartesian and the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} right The right hand side Cartesian.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.prototype.add = function(right, result) {
        return Cartesian3.add(this, right, result);
    };

    /**
     * Computes the componentwise difference of this Cartesian and the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} right The right hand side Cartesian.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.prototype.subtract = function(right, result) {
        return Cartesian3.subtract(this, right, result);
    };

    /**
     * Multiplies this Cartesian componentwise by the provided scalar.
     * @memberof Cartesian3
     *
     * @param {Number} scalar The scalar to multiply with.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian3.prototype.multiplyByScalar = function(scalar, result) {
        return Cartesian3.multiplyByScalar(this, scalar, result);
    };

    /**
     * Divides this Cartesian componentwise by the provided scalar.
     * @memberof Cartesian3
     *
     * @param {Number} scalar The scalar to divide by.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} scalar is required and must be a number.
     */
    Cartesian3.prototype.divideByScalar = function(scalar, result) {
        return Cartesian3.divideByScalar(this, scalar, result);
    };

    /**
     * Negates this Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     */
    Cartesian3.prototype.negate = function(result) {
        return Cartesian3.negate(this, result);
    };

    /**
     * Computes the absolute value of this Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     */
    Cartesian3.prototype.abs = function(result) {
        return Cartesian3.abs(this, result);
    };

    /**
     * Computes the linear interpolation or extrapolation at t using this Cartesian
     * and the provided cartesian.  This cartesian is assumed to be t at 0.0.
     * @memberof Cartesian3
     *
     * @param end The value corresponding to t at 1.0.
     * @param t The point along t at which to interpolate.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if one was not provided.
     *
     * @exception {DeveloperError} end is required.
     * @exception {DeveloperError} t is required and must be a number.
     */
    Cartesian3.prototype.lerp = function(end, t, result) {
        return Cartesian3.lerp(this, end, t, result);
    };

    /**
     * Returns the angle, in radians, between this Cartesian and the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} right The right hand side Cartesian.
     * @return {Number} The angle between the Cartesians.
     *
     * @exception {DeveloperError} left is required.
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.prototype.angleBetween = function(right) {
        return Cartesian3.angleBetween(this, right);
    };

    /**
     * Returns the axis that is most orthogonal to the this Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The most orthogonal axis.
     */
    Cartesian3.prototype.mostOrthogonalAxis = function(result) {
        return Cartesian3.mostOrthogonalAxis(this, result);
    };

    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [right] The right hand side Cartesian.
     * @return {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    Cartesian3.prototype.equals = function(right) {
        return Cartesian3.equals(this, right);
    };

    /**
     * Compares this Cartesian against the provided Cartesian componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} [right] The right hand side Cartesian.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true</code> if they are within the provided epsilon, <code>false</code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Cartesian3.prototype.equalsEpsilon = function(right, epsilon) {
        return Cartesian3.equalsEpsilon(this, right, epsilon);
    };

    /**
     * Creates a string representing this Cartesian in the format '(x, y, z)'.
     * @memberof Cartesian3
     *
     * @return {String} A string representing this Cartesian in the format '(x, y, z)'.
     */
    Cartesian3.prototype.toString = function() {
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
    };

    /**
     * Computes the cross (outer) product of this and the provided Cartesian.
     * @memberof Cartesian3
     *
     * @param {Cartesian3} right The right hand side Cartesian.
     * @return {Number} The cross product.
     *
     * @exception {DeveloperError} right is required.
     */
    Cartesian3.prototype.cross = function(right, result) {
        return Cartesian3.cross(this, right, result);
    };

    return Cartesian3;
});

/*global define*/
define('Core/Cartographic',[
        './defaultValue',
        './DeveloperError',
        './freezeObject',
        './Math'
    ], function(
        defaultValue,
        DeveloperError,
        freezeObject,
        CesiumMath) {
    

    /**
     * A position defined by longitude, latitude, and height.
     * @alias Cartographic
     * @constructor
     *
     * @param {Number} [longitude=0.0] The longitude, in radians.
     * @param {Number} [latitude=0.0] The latitude, in radians.
     * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
     *
     * @see Ellipsoid
     */
    var Cartographic = function(longitude, latitude, height) {
        /**
         * The longitude, in radians.
         * @type Number
         */
        this.longitude = defaultValue(longitude, 0.0);

        /**
         * The latitude, in radians.
         * @type Number
         */
        this.latitude = defaultValue(latitude, 0.0);

        /**
         * The height, in meters, above the ellipsoid.
         * @type Number
         */
        this.height = defaultValue(height, 0.0);
    };

    /**
     * Creates a new Cartographic instance from longitude and latitude
     * specified in degrees.  The values in the resulting object will
     * be in radians.
     * @memberof Cartographic
     *
     * @param {Number} [longitude=0.0] The longitude, in degrees.
     * @param {Number} [latitude=0.0] The latitude, in degrees.
     * @param {Number} [height=0.0] The height, in meters, above the ellipsoid.
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided.
     */
    Cartographic.fromDegrees = function(longitude, latitude, height, result) {
        longitude = CesiumMath.toRadians(defaultValue(longitude, 0.0));
        latitude = CesiumMath.toRadians(defaultValue(latitude, 0.0));
        height = defaultValue(height, 0.0);

        if (typeof result === 'undefined') {
            return new Cartographic(longitude, latitude, height);
        }

        result.longitude = longitude;
        result.latitude = latitude;
        result.height = height;
        return result;
    };

    /**
     * Duplicates a Cartographic instance.
     * @memberof Cartographic
     *
     * @param {Cartographic} cartographic The cartographic to duplicate.
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided.
     *
     * @exception {DeveloperError} cartographic is required.
     */
    Cartographic.clone = function(cartographic, result) {
        if (typeof cartographic === 'undefined') {
            throw new DeveloperError('cartographic is required');
        }
        if (typeof result === 'undefined') {
            return new Cartographic(cartographic.longitude, cartographic.latitude, cartographic.height);
        }
        result.longitude = cartographic.longitude;
        result.latitude = cartographic.latitude;
        result.height = cartographic.height;
        return result;
    };

    /**
     * Compares the provided cartographics componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @memberof Cartographic
     *
     * @param {Cartographic} [left] The first cartographic.
     * @param {Cartographic} [right] The second cartographic.
     * @return {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    Cartographic.equals = function(left, right) {
        return (left === right) ||
                ((typeof left !== 'undefined') &&
                 (typeof right !== 'undefined') &&
                 (left.longitude === right.longitude) &&
                 (left.latitude === right.latitude) &&
                 (left.height === right.height));
    };

    /**
     * Compares the provided cartographics componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     * @memberof Cartographic
     *
     * @param {Cartographic} [left] The first cartographic.
     * @param {Cartographic} [right] The second cartographic.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Cartographic.equalsEpsilon = function(left, right, epsilon) {
        if (typeof epsilon !== 'number') {
            throw new DeveloperError('epsilon is required and must be a number.');
        }
        return (left === right) ||
               ((typeof left !== 'undefined') &&
                (typeof right !== 'undefined') &&
                (Math.abs(left.longitude - right.longitude) <= epsilon) &&
                (Math.abs(left.latitude - right.latitude) <= epsilon) &&
                (Math.abs(left.height - right.height) <= epsilon));
    };

    /**
     * Creates a string representing the provided cartographic in the format '(longitude, latitude, height)'.
     * @memberof Cartographic
     *
     * @param {Cartographic} cartographic The cartographic to stringify.
     * @return {String} A string representing the provided cartographic in the format '(longitude, latitude, height)'.
     *
     * @exception {DeveloperError} cartographic is required.
     */
    Cartographic.toString = function(cartographic) {
        if (typeof cartographic === 'undefined') {
            throw new DeveloperError('cartographic is required');
        }
        return '(' + cartographic.longitude + ', ' + cartographic.latitude + ', ' + cartographic.height + ')';
    };

    /**
     * An immutable Cartographic instance initialized to (0.0, 0.0, 0.0).
     *
     * @memberof Cartographic
     */
    Cartographic.ZERO = freezeObject(new Cartographic(0.0, 0.0, 0.0));

    /**
     * Duplicates this instance.
     * @memberof Cartographic
     *
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if one was not provided.
     */
    Cartographic.prototype.clone = function(result) {
        return Cartographic.clone(this, result);
    };

    /**
     * Compares the provided against this cartographic componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @memberof Cartographic
     *
     * @param {Cartographic} [right] The second cartographic.
     * @return {Boolean} <code>true</code> if left and right are equal, <code>false</code> otherwise.
     */
    Cartographic.prototype.equals = function(right) {
        return Cartographic.equals(this, right);
    };

    /**
     * Compares the provided against this cartographic componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     * @memberof Cartographic
     *
     * @param {Cartographic} [right] The second cartographic.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true</code> if left and right are within the provided epsilon, <code>false</code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Cartographic.prototype.equalsEpsilon = function(right, epsilon) {
        return Cartographic.equalsEpsilon(this, right, epsilon);
    };

    /**
     * Creates a string representing this cartographic in the format '(longitude, latitude, height)'.
     * @memberof Cartographic
     *
     * @return {String} A string representing the provided cartographic in the format '(longitude, latitude, height)'.
     */
    Cartographic.prototype.toString = function() {
        return Cartographic.toString(this);
    };

    return Cartographic;
});

/*global define*/
define('Core/Ellipsoid',[
        './freezeObject',
        './defaultValue',
        './DeveloperError',
        './Math',
        './Cartesian3',
        './Cartographic'
       ], function(
         freezeObject,
         defaultValue,
         DeveloperError,
         CesiumMath,
         Cartesian3,
         Cartographic) {
    

    /**
     * A quadratic surface defined in Cartesian coordinates by the equation
     * <code>(x / a)^2 + (y / b)^2 + (z / c)^2 = 1</code>.  Primarily used
     * by Cesium to represent the shape of planetary bodies.
     *
     * Rather than constructing this object directly, one of the provided
     * constants is normally used.
     * @alias Ellipsoid
     * @constructor
     * @immutable
     *
     * @param {Number} [x=0] The radius in the x direction.
     * @param {Number} [y=0] The radius in the y direction.
     * @param {Number} [z=0] The radius in the z direction.
     *
     * @exception {DeveloperError} All radii components must be greater than or equal to zero.
     *
     * @see Ellipsoid.fromCartesian3
     * @see Ellipsoid.WGS84
     * @see Ellipsoid.UNIT_SPHERE
     */
    var Ellipsoid = function(x, y, z) {
        x = defaultValue(x, 0.0);
        y = defaultValue(y, 0.0);
        z = defaultValue(z, 0.0);

        if (x < 0.0 || y < 0.0 || z < 0.0) {
            throw new DeveloperError('All radii components must be greater than or equal to zero.');
        }

        this._radii = new Cartesian3(x, y, z);

        this._radiiSquared = new Cartesian3(x * x,
                                            y * y,
                                            z * z);

        this._radiiToTheFourth = new Cartesian3(x * x * x * x,
                                                y * y * y * y,
                                                z * z * z * z);

        this._oneOverRadii = new Cartesian3(x === 0.0 ? 0.0 : 1.0 / x,
                                            y === 0.0 ? 0.0 : 1.0 / y,
                                            z === 0.0 ? 0.0 : 1.0 / z);

        this._oneOverRadiiSquared = new Cartesian3(x === 0.0 ? 0.0 : 1.0 / (x * x),
                                                   y === 0.0 ? 0.0 : 1.0 / (y * y),
                                                   z === 0.0 ? 0.0 : 1.0 / (z * z));

        this._minimumRadius = Math.min(x, y, z);

        this._maximumRadius = Math.max(x, y, z);

        this._centerToleranceSquared = CesiumMath.EPSILON1;
    };

    /**
     * Computes an Ellipsoid from a Cartesian specifying the radii in x, y, and z directions.
     *
     * @param {Cartesian3} [radii=Cartesian3.ZERO] The ellipsoid's radius in the x, y, and z directions.
     * @return {Ellipsoid} A new Ellipsoid instance.
     *
     * @exception {DeveloperError} All radii components must be greater than or equal to zero.
     *
     * @see Ellipsoid.WGS84
     * @see Ellipsoid.UNIT_SPHERE
     */
    Ellipsoid.fromCartesian3 = function(cartesian) {
        if (typeof cartesian === 'undefined') {
            return new Ellipsoid();
        }
        return new Ellipsoid(cartesian.x, cartesian.y, cartesian.z);
    };

    /**
     * An Ellipsoid instance initialized to the WGS84 standard.
     * @memberof Ellipsoid
     *
     * @see czm_getWgs84EllipsoidEC
     */
    Ellipsoid.WGS84 = freezeObject(new Ellipsoid(6378137.0, 6378137.0, 6356752.3142451793));

    /**
     * An Ellipsoid instance initialized to radii of (1.0, 1.0, 1.0).
     * @memberof Ellipsoid
     */
    Ellipsoid.UNIT_SPHERE = freezeObject(new Ellipsoid(1.0, 1.0, 1.0));

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} The radii of the ellipsoid.
     */
    Ellipsoid.prototype.getRadii = function() {
        return this._radii;
    };

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} The squared radii of the ellipsoid.
     */
    Ellipsoid.prototype.getRadiiSquared = function() {
        return this._radiiSquared;
    };

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} The radii of the ellipsoid raised to the fourth power.
     */
    Ellipsoid.prototype.getRadiiToTheFourth = function() {
        return this._radiiToTheFourth;
    };

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} One over the radii of the ellipsoid.
     */
    Ellipsoid.prototype.getOneOverRadii = function() {
        return this._oneOverRadii;
    };

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} One over the squared radii of the ellipsoid.
     */
    Ellipsoid.prototype.getOneOverRadiiSquared = function() {
        return this._oneOverRadiiSquared;
    };

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} The minimum radius of the ellipsoid.
     */
    Ellipsoid.prototype.getMinimumRadius = function() {
        return this._minimumRadius;
    };

    /**
     * @memberof Ellipsoid
     * @return {Cartesian3} The maximum radius of the ellipsoid.
     */
    Ellipsoid.prototype.getMaximumRadius = function() {
        return this._maximumRadius;
    };

    /**
     * Computes the unit vector directed from the center of this ellipsoid toward the provided Cartesian position.
     * @memberof Ellipsoid
     *
     * @param {Cartesian3} cartesian The Cartesian for which to to determine the geocentric normal.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Ellipsoid.prototype.geocentricSurfaceNormal = Cartesian3.normalize;

    /**
     * Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
     * @memberof Ellipsoid
     *
     * @param {Cartographic} cartographic The cartographic position for which to to determine the geodetic normal.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
     *
     * @exception {DeveloperError} cartographic is required.
     */
    Ellipsoid.prototype.geodeticSurfaceNormalCartographic = function(cartographic, result) {
        if (typeof cartographic === 'undefined') {
            throw new DeveloperError('cartographic is required.');
        }

        var longitude = cartographic.longitude;
        var latitude = cartographic.latitude;
        var cosLatitude = Math.cos(latitude);

        var x = cosLatitude * Math.cos(longitude);
        var y = cosLatitude * Math.sin(longitude);
        var z = Math.sin(latitude);

        if (typeof result === 'undefined') {
            result = new Cartesian3();
        }
        result.x = x;
        result.y = y;
        result.z = z;
        return Cartesian3.normalize(result, result);
    };

    /**
     * Computes the normal of the plane tangent to the surface of the ellipsoid at the provided position.
     * @memberof Ellipsoid
     *
     * @param {Cartesian3} cartesian The Cartesian position for which to to determine the surface normal.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Ellipsoid.prototype.geodeticSurfaceNormal = function(cartesian, result) {
        result = Cartesian3.multiplyComponents(cartesian, this._oneOverRadiiSquared, result);
        return Cartesian3.normalize(result, result);
    };

    var cartographicToCartesianNormal = new Cartesian3();
    var cartographicToCartesianK = new Cartesian3();

    /**
     * Converts the provided cartographic to Cartesian representation.
     * @memberof Ellipsoid
     *
     * @param {Cartographic} cartographic The cartographic position.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
     *
     * @exception {DeveloperError} cartographic is required.
     *
     * @example
     * //Create a Cartographic and determine it's Cartesian representation on a WGS84 ellipsoid.
     * var position = new Cartographic(Math.toRadians(21), Math.toRadians(78), 5000);
     * var cartesianPosition = Ellipsoid.WGS84.cartographicToCartesian(position);
     */
    Ellipsoid.prototype.cartographicToCartesian = function(cartographic, result) {
        //`cartographic is required` is thrown from geodeticSurfaceNormalCartographic.
        var n = cartographicToCartesianNormal;
        var k = cartographicToCartesianK;
        this.geodeticSurfaceNormalCartographic(cartographic, n);
        Cartesian3.multiplyComponents(this._radiiSquared, n, k);
        var gamma = Math.sqrt(Cartesian3.dot(n, k));
        Cartesian3.divideByScalar(k, gamma, k);
        Cartesian3.multiplyByScalar(n, cartographic.height, n);
        return Cartesian3.add(k, n, result);
    };

    /**
     * Converts the provided array of cartographics to an array of Cartesians.
     * @memberof Ellipsoid
     *
     * @param {Array} cartographics An array of cartographic positions.
     * @param {Array} [result] The object onto which to store the result.
     * @return {Array} The modified result parameter or a new Array instance if none was provided.
     *
     * @exception {DeveloperError} cartographics is required.
     *
     * @example
     * //Convert an array of Cartographics and determine their Cartesian representation on a WGS84 ellipsoid.
     * var positions = [new Cartographic(Math.toRadians(21), Math.toRadians(78), 0),
     *                  new Cartographic(Math.toRadians(21.321), Math.toRadians(78.123), 100),
     *                  new Cartographic(Math.toRadians(21.645), Math.toRadians(78.456), 250)
     * var cartesianPositions = Ellipsoid.WGS84.cartographicArrayToCartesianArray(positions);
     */
    Ellipsoid.prototype.cartographicArrayToCartesianArray = function(cartographics, result) {
        if (typeof cartographics === 'undefined') {
            throw new DeveloperError('cartographics is required.');
        }

        var length = cartographics.length;
        if (typeof result === 'undefined') {
            result = new Array(length);
        } else {
            result.length = length;
        }
        for ( var i = 0; i < length; i++) {
            result[i] = this.cartographicToCartesian(cartographics[i], result[i]);
        }
        return result;
    };

    var cartesianToCartographicN = new Cartesian3();
    var cartesianToCartographicP = new Cartesian3();
    var cartesianToCartographicH = new Cartesian3();

    /**
     * Converts the provided cartesian to cartographic representation.
     * The cartesian is undefined at the center of the ellipsoid.
     * @memberof Ellipsoid
     *
     * @param {Cartesian3} cartesian The Cartesian position to convert to cartographic representation.
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter, new Cartographic instance if none was provided, or undefined if the cartesian is at the center of the ellipsoid.
     *
     * @exception {DeveloperError} cartesian is required.
     *
     * @example
     * //Create a Cartesian and determine it's Cartographic representation on a WGS84 ellipsoid.
     * var position = new Cartesian(17832.12, 83234.52, 952313.73);
     * var cartographicPosition = Ellipsoid.WGS84.cartesianToCartographic(position);
     */
    Ellipsoid.prototype.cartesianToCartographic = function(cartesian, result) {
        //`cartesian is required.` is thrown from scaleToGeodeticSurface
        var p = this.scaleToGeodeticSurface(cartesian, cartesianToCartographicP);

        if (typeof p === 'undefined') {
            return undefined;
        }

        var n = this.geodeticSurfaceNormal(p, cartesianToCartographicN);
        var h = Cartesian3.subtract(cartesian, p, cartesianToCartographicH);

        var longitude = Math.atan2(n.y, n.x);
        var latitude = Math.asin(n.z);
        var height = CesiumMath.sign(Cartesian3.dot(h, cartesian)) * Cartesian3.magnitude(h);

        if (typeof result === 'undefined') {
            return new Cartographic(longitude, latitude, height);
        }
        result.longitude = longitude;
        result.latitude = latitude;
        result.height = height;
        return result;
    };

    /**
     * Converts the provided array of cartesians to an array of cartographics.
     * @memberof Ellipsoid
     *
     * @param {Array} cartesians An array of Cartesian positions.
     * @param {Array} [result] The object onto which to store the result.
     * @return {Array} The modified result parameter or a new Array instance if none was provided.
     *
     * @exception {DeveloperError} cartesians is required.
     *
     * @example
     * //Create an array of Cartesians and determine their Cartographic representation on a WGS84 ellipsoid.
     * var positions = [new Cartesian(17832.12, 83234.52, 952313.73),
     *                  new Cartesian(17832.13, 83234.53, 952313.73),
     *                  new Cartesian(17832.14, 83234.54, 952313.73)]
     * var cartographicPositions = Ellipsoid.WGS84.cartesianArrayToCartographicArray(positions);
     */
    Ellipsoid.prototype.cartesianArrayToCartographicArray = function(cartesians, result) {
        if (typeof cartesians === 'undefined') {
            throw new DeveloperError('cartesians is required.');
        }

        var length = cartesians.length;
        if (typeof result === 'undefined') {
            result = new Array(length);
        } else {
            result.length = length;
        }
        for ( var i = 0; i < length; ++i) {
            result[i] = this.cartesianToCartographic(cartesians[i], result[i]);
        }
        return result;
    };

    var scaleToGeodeticSurfaceIntersection;
    var scaleToGeodeticSurfaceGradient = new Cartesian3();

    /**
     * Scales the provided Cartesian position along the geodetic surface normal
     * so that it is on the surface of this ellipsoid.  If the position is
     * at the center of the ellipsoid, this function returns undefined.
     * @memberof Ellipsoid
     *
     * @param {Cartesian3} cartesian The Cartesian position to scale.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter, a new Cartesian3 instance if none was provided, or undefined if the position is at the center.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Ellipsoid.prototype.scaleToGeodeticSurface = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required.');
        }

        var positionX = cartesian.x;
        var positionY = cartesian.y;
        var positionZ = cartesian.z;

        var oneOverRadii = this._oneOverRadii;
        var oneOverRadiiX = oneOverRadii.x;
        var oneOverRadiiY = oneOverRadii.y;
        var oneOverRadiiZ = oneOverRadii.z;

        var x2 = positionX * positionX * oneOverRadiiX * oneOverRadiiX;
        var y2 = positionY * positionY * oneOverRadiiY * oneOverRadiiY;
        var z2 = positionZ * positionZ * oneOverRadiiZ * oneOverRadiiZ;

        // Compute the squared ellipsoid norm.
        var squaredNorm = x2 + y2 + z2;
        var ratio = Math.sqrt(1.0 / squaredNorm);

        // As an initial approximation, assume that the radial intersection is the projection point.
        var intersection = Cartesian3.multiplyByScalar(cartesian, ratio, scaleToGeodeticSurfaceIntersection);

        //* If the position is near the center, the iteration will not converge.
        if (squaredNorm < this._centerToleranceSquared) {
            return !isFinite(ratio) ? undefined : Cartesian3.clone(intersection, result);
        }

        var oneOverRadiiSquared = this._oneOverRadiiSquared;
        var oneOverRadiiSquaredX = oneOverRadiiSquared.x;
        var oneOverRadiiSquaredY = oneOverRadiiSquared.y;
        var oneOverRadiiSquaredZ = oneOverRadiiSquared.z;

        // Use the gradient at the intersection point in place of the true unit normal.
        // The difference in magnitude will be absorbed in the multiplier.
        var gradient = scaleToGeodeticSurfaceGradient;
        gradient.x = intersection.x * oneOverRadiiSquaredX * 2.0;
        gradient.y = intersection.y * oneOverRadiiSquaredY * 2.0;
        gradient.z = intersection.z * oneOverRadiiSquaredZ * 2.0;

        // Compute the initial guess at the normal vector multiplier, lambda.
        var lambda = (1.0 - ratio) * Cartesian3.magnitude(cartesian) / (0.5 * Cartesian3.magnitude(gradient));
        var correction = 0.0;

        var func;
        var denominator;
        var xMultiplier;
        var yMultiplier;
        var zMultiplier;
        var xMultiplier2;
        var yMultiplier2;
        var zMultiplier2;
        var xMultiplier3;
        var yMultiplier3;
        var zMultiplier3;

        do {
            lambda -= correction;

            xMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredX);
            yMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredY);
            zMultiplier = 1.0 / (1.0 + lambda * oneOverRadiiSquaredZ);

            xMultiplier2 = xMultiplier * xMultiplier;
            yMultiplier2 = yMultiplier * yMultiplier;
            zMultiplier2 = zMultiplier * zMultiplier;

            xMultiplier3 = xMultiplier2 * xMultiplier;
            yMultiplier3 = yMultiplier2 * yMultiplier;
            zMultiplier3 = zMultiplier2 * zMultiplier;

            func = x2 * xMultiplier2 + y2 * yMultiplier2 + z2 * zMultiplier2 - 1.0;

            // "denominator" here refers to the use of this expression in the velocity and acceleration
            // computations in the sections to follow.
            denominator = x2 * xMultiplier3 * oneOverRadiiSquaredX + y2 * yMultiplier3 * oneOverRadiiSquaredY + z2 * zMultiplier3 * oneOverRadiiSquaredZ;

            var derivative = -2.0 * denominator;

            correction = func / derivative;
        } while (Math.abs(func) > CesiumMath.EPSILON12);

        if (typeof result === 'undefined') {
            return new Cartesian3(positionX * xMultiplier, positionY * yMultiplier, positionZ * zMultiplier);
        }
        result.x = positionX * xMultiplier;
        result.y = positionY * yMultiplier;
        result.z = positionZ * zMultiplier;
        return result;
    };

    /**
     * Scales the provided Cartesian position along the geocentric surface normal
     * so that it is on the surface of this ellipsoid.
     * @memberof Ellipsoid
     *
     * @param {Cartesian3} cartesian The Cartesian position to scale.
     * @param {Cartesian3} [result] The object onto which to store the result.
     * @return {Cartesian3} The modified result parameter or a new Cartesian3 instance if none was provided.
     *
     * @exception {DeveloperError} cartesian is required.
     */
    Ellipsoid.prototype.scaleToGeocentricSurface = function(cartesian, result) {
        if (typeof cartesian === 'undefined') {
            throw new DeveloperError('cartesian is required.');
        }

        var positionX = cartesian.x;
        var positionY = cartesian.y;
        var positionZ = cartesian.z;
        var oneOverRadiiSquared = this._oneOverRadiiSquared;

        var beta = 1.0 / Math.sqrt((positionX * positionX) * oneOverRadiiSquared.x +
                                   (positionY * positionY) * oneOverRadiiSquared.y +
                                   (positionZ * positionZ) * oneOverRadiiSquared.z);

        return Cartesian3.multiplyByScalar(cartesian, beta, result);
    };

    /**
     * Transforms a Cartesian X, Y, Z position to the ellipsoid-scaled space by multiplying
     * its components by the result of {@link Ellipsoid#getOneOverRadii}.
     *
     * @memberof Ellipsoid
     *
     * @param {Cartesian3} position The position to transform.
     * @param {Cartesian3} [result] The position to which to copy the result, or undefined to create and
     *        return a new instance.
     * @returns {Cartesian3} The position expressed in the scaled space.  The returned instance is the
     *          one passed as the result parameter if it is not undefined, or a new instance of it is.
     */
    Ellipsoid.prototype.transformPositionToScaledSpace = function(position, result) {
        return Cartesian3.multiplyComponents(position, this._oneOverRadii, result);
    };

    /**
     * Compares this Ellipsoid against the provided Ellipsoid componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @memberof Ellipsoid
     *
     * @param {Ellipsoid} [right] The other Ellipsoid.
     * @return {Boolean} <code>true</code> if they are equal, <code>false</code> otherwise.
     */
    Ellipsoid.prototype.equals = function(right) {
        return (this === right) ||
               (typeof right !== 'undefined' &&
                Cartesian3.equals(this._radii, right._radii));
    };

    /**
     * Creates a string representing this Ellipsoid in the format '(radii.x, radii.y, radii.z)'.
     * @memberof Ellipsoid
     *
     * @return {String} A string representing this ellipsoid in the format '(radii.x, radii.y, radii.z)'.
     */
    Ellipsoid.prototype.toString = function() {
        return this._radii.toString();
    };

    return Ellipsoid;
});

/*global define*/
define('Core/Extent',[
        './freezeObject',
        './defaultValue',
        './Ellipsoid',
        './Cartographic',
        './DeveloperError',
        './Math'
    ], function(
        freezeObject,
        defaultValue,
        Ellipsoid,
        Cartographic,
        DeveloperError,
        CesiumMath) {
    

    /**
     * A two dimensional region specified as longitude and latitude coordinates.
     * @alias Extent
     * @constructor
     *
     * @param {Number} [west=0.0] The westernmost longitude in the range [-Pi, Pi].
     * @param {Number} [south=0.0] The southernmost latitude in the range [-Pi/2, Pi/2].
     * @param {Number} [east=0.0] The easternmost longitude in the range [-Pi, Pi].
     * @param {Number} [north=0.0] The northernmost latitude in the range [-Pi/2, Pi/2].
     */
    var Extent = function(west, south, east, north) {
        /**
         * The westernmost longitude in the range [-Pi, Pi].
         * @type Number
         */
        this.west = defaultValue(west, 0.0);

        /**
         * The southernmost latitude in the range [-Pi/2, Pi/2].
         * @type Number
         */
        this.south = defaultValue(south, 0.0);

        /**
         * The easternmost longitude in the range [-Pi, Pi].
         * @type Number
         */
        this.east = defaultValue(east, 0.0);

        /**
         * The northernmost latitude in the range [-Pi/2, Pi/2].
         * @type Number
         */
        this.north = defaultValue(north, 0.0);
    };

    /**
     * Duplicates this Extent.
     *
     * @param {Extent} [result] The object onto which to store the result.
     * @return {Extent} The modified result parameter or a new Extent instance if none was provided.
     */
    Extent.prototype.clone = function(result) {
        if (typeof result === 'undefined') {
            return new Extent(this.west, this.south, this.east, this.north);
        }
        result.west = this.west;
        result.south = this.south;
        result.east = this.east;
        result.north = this.north;
        return result;
    };

    /**
     * Compares the provided Extent with this Extent componentwise and returns
     * <code>true</code> if they are equal, <code>false</code> otherwise.
     * @memberof Cartesian3
     *
     * @param {Extent} [other] The Extent to compare.
     * @return {Boolean} <code>true</code> if the Extents are equal, <code>false</code> otherwise.
     */
    Extent.prototype.equals = function(other) {
        return typeof other !== 'undefined' &&
               this.west === other.west &&
               this.south === other.south &&
               this.east === other.east &&
               this.north === other.north;
    };

    /**
     * Compares the provided Extent with this Extent componentwise and returns
     * <code>true</code> if they are within the provided epsilon,
     * <code>false</code> otherwise.
     * @memberof Extent
     *
     * @param {Extent} [other] The Extent to compare.
     * @param {Number} epsilon The epsilon to use for equality testing.
     * @return {Boolean} <code>true</code> if the Extents are within the provided epsilon, <code>false</code> otherwise.
     *
     * @exception {DeveloperError} epsilon is required and must be a number.
     */
    Extent.prototype.equalsEpsilon = function(other, epsilon) {
        if (typeof epsilon !== 'number') {
            throw new DeveloperError('epsilon is required and must be a number.');
        }

        return typeof other !== 'undefined' &&
               (Math.abs(this.west - other.west) <= epsilon) &&
               (Math.abs(this.south - other.south) <= epsilon) &&
               (Math.abs(this.east - other.east) <= epsilon) &&
               (Math.abs(this.north - other.north) <= epsilon);
    };

    /**
     * Checks this Extent's properties and throws if they are not in valid ranges.
     *
     * @exception {DeveloperError} <code>north</code> is required to be a number.
     * @exception {DeveloperError} <code>south</code> is required to be a number.
     * @exception {DeveloperError} <code>east</code> is required to be a number.
     * @exception {DeveloperError} <code>west</code> is required to be a number.
     * @exception {DeveloperError} <code>north</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
     * @exception {DeveloperError} <code>south</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
     * @exception {DeveloperError} <code>east</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
     * @exception {DeveloperError} <code>west</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
     */
    Extent.prototype.validate = function() {
        var north = this.north;
        if (typeof north !== 'number') {
            throw new DeveloperError('north is required to be a number.');
        }

        if (north < -CesiumMath.PI_OVER_TWO || north > CesiumMath.PI_OVER_TWO) {
            throw new DeveloperError('north must be in the interval [-Pi/2, Pi/2].');
        }

        var south = this.south;
        if (typeof south !== 'number') {
            throw new DeveloperError('south is required to be a number.');
        }

        if (south < -CesiumMath.PI_OVER_TWO || south > CesiumMath.PI_OVER_TWO) {
            throw new DeveloperError('south must be in the interval [-Pi/2, Pi/2].');
        }

        var west = this.west;
        if (typeof west !== 'number') {
            throw new DeveloperError('west is required to be a number.');
        }

        if (west < -Math.PI || west > Math.PI) {
            throw new DeveloperError('west must be in the interval [-Pi, Pi].');
        }

        var east = this.east;
        if (typeof east !== 'number') {
            throw new DeveloperError('east is required to be a number.');
        }

        if (east < -Math.PI || east > Math.PI) {
            throw new DeveloperError('east must be in the interval [-Pi, Pi].');
        }
    };

    /**
     * Computes the southwest corner of this extent.
     * @memberof Extent
     *
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
     */
    Extent.prototype.getSouthwest = function(result) {
        if (typeof result === 'undefined') {
            return new Cartographic(this.west, this.south);
        }
        result.longitude = this.west;
        result.latitude = this.south;
        result.height = 0.0;
        return result;
    };

    /**
     * Computes the northwest corner of this extent.
     * @memberof Extent
     *
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
     */
    Extent.prototype.getNorthwest = function(result) {
        if (typeof result === 'undefined') {
            return new Cartographic(this.west, this.north);
        }
        result.longitude = this.west;
        result.latitude = this.north;
        result.height = 0.0;
        return result;
    };

    /**
     * Computes the northeast corner of this extent.
     * @memberof Extent
     *
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
     */
    Extent.prototype.getNortheast = function(result) {
        if (typeof result === 'undefined') {
            return new Cartographic(this.east, this.north);
        }
        result.longitude = this.east;
        result.latitude = this.north;
        result.height = 0.0;
        return result;
    };

    /**
     * Computes the southeast corner of this extent.
     * @memberof Extent
     *
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
     */
    Extent.prototype.getSoutheast = function(result) {
        if (typeof result === 'undefined') {
            return new Cartographic(this.east, this.south);
        }
        result.longitude = this.east;
        result.latitude = this.south;
        result.height = 0.0;
        return result;
    };

    /**
     * Computes the center of this extent.
     * @memberof Extent
     *
     * @param {Cartographic} [result] The object onto which to store the result.
     * @return {Cartographic} The modified result parameter or a new Cartographic instance if none was provided.
     */
    Extent.prototype.getCenter = function(result) {
        if (typeof result === 'undefined') {
            return new Cartographic((this.west + this.east) * 0.5, (this.south + this.north) * 0.5);
        }
        result.longitude = (this.west + this.east) * 0.5;
        result.latitude = (this.south + this.north) * 0.5;
        result.height = 0.0;
        return result;
    };

    /**
     * Computes the intersection of this extent with the provided extent.
     * @memberof Extent
     *
     * @param otherExtent The extent to intersect with this extent.
     * @param {Extent} [result] The object onto which to store the result.
     * @return {Extent} The modified result parameter or a new Extent instance if none was provided.
     *
     * @exception {DeveloperError} otherExtent is required.
     */
    Extent.prototype.intersectWith = function(otherExtent, result) {
        if (typeof otherExtent === 'undefined') {
            throw new DeveloperError('otherExtent is required.');
        }
        var west = Math.max(this.west, otherExtent.west);
        var south = Math.max(this.south, otherExtent.south);
        var east = Math.min(this.east, otherExtent.east);
        var north = Math.min(this.north, otherExtent.north);
        if (typeof result === 'undefined') {
            return new Extent(west, south, east, north);
        }
        result.west = west;
        result.south = south;
        result.east = east;
        result.north = north;
        return result;
    };

    /**
     * Returns true if the provided cartographic is on or inside the extent, false otherwise.
     * @memberof Extent
     *
     * @param {Cartographic} cartographic The cartographic to test.
     * @returns {Boolean} true if the provided cartographic is inside the extent, false otherwise.
     *
     * @exception {DeveloperError} cartographic is required.
     */
    Extent.prototype.contains = function(cartographic) {
        if (typeof cartographic === 'undefined') {
            throw new DeveloperError('cartographic is required.');
        }
        return cartographic.longitude >= this.west &&
               cartographic.longitude <= this.east &&
               cartographic.latitude >= this.south &&
               cartographic.latitude <= this.north;
    };

    /**
     * Determines if the extent is empty, i.e., if <code>west === east</code>
     * and <code>south === north</code>.
     *
     * @memberof Extent
     *
     * @return {Boolean} True if the extent is empty; otherwise, false.
     */
    Extent.prototype.isEmpty = function() {
        return (this.west === this.east) && (this.south === this.north);
    };

    var subsampleLlaScratch = new Cartographic();
    /**
     * Samples this Extent so that it includes a list of Cartesian points suitable for passing to
     * {@link BoundingSphere#fromPoints}.  Sampling is necessary to account
     * for extents that cover the poles or cross the equator.
     *
     * @param {Ellipsoid} [ellipsoid=Ellipsoid.WGS84] The ellipsoid to use.
     * @param {Array} [result] The array of Cartesians onto which to store the result.
     * @return {Array} The modified result parameter or a new Array of Cartesians instances if none was provided.
     */
    Extent.prototype.subsample = function(ellipsoid, result) {
        ellipsoid = defaultValue(ellipsoid, Ellipsoid.WGS84);

        if (typeof result === 'undefined') {
            result = [];
        }
        var length = 0;

        var north = this.north;
        var south = this.south;
        var east = this.east;
        var west = this.west;

        var lla = subsampleLlaScratch;
        lla.longitude = west;
        lla.latitude = north;
        result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
        length++;

        lla.longitude = east;
        result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
        length++;

        lla.latitude = south;
        result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
        length++;

        lla.longitude = west;
        result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
        length++;

        if (north < 0.0) {
            lla.latitude = north;
        } else if (south > 0.0) {
            lla.latitude = south;
        } else {
            lla.latitude = 0.0;
        }

        for ( var i = 1; i < 8; ++i) {
            var temp = -Math.PI + i * CesiumMath.PI_OVER_TWO;
            if (west < temp && temp < east) {
                lla.longitude = temp;
                result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
                length++;
            }
        }

        if (lla.latitude === 0.0) {
            lla.longitude = west;
            result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
            length++;
            lla.longitude = east;
            result[length] = ellipsoid.cartographicToCartesian(lla, result[length]);
            length++;
        }
        result.length = length;
        return result;
    };

    /**
     * The largest possible extent.
     * @memberof Extent
     * @type Extent
    */
    Extent.MAX_VALUE = freezeObject(new Extent(-Math.PI, -CesiumMath.PI_OVER_TWO, Math.PI, CesiumMath.PI_OVER_TWO));

    return Extent;
});

/*global define*/
define('Core/Enumeration',[],function() {
    

    /**
     * Constructs an enumeration that contains both a numeric value and a name.
     * This is used so the name of the enumeration is available in the debugger.
     *
     * @param {Number} [value=undefined] The numeric value of the enumeration.
     * @param {String} [name=undefined] The name of the enumeration for debugging purposes.
     * @param {Object} [properties=undefined] An object containing extra properties to be added to the enumeration.
     *
     * @alias Enumeration
     * @constructor
     * @example
     * // Create an object with two enumerations.
     * var filter = {
     *     NEAREST : new Enumeration(0x2600, 'NEAREST'),
     *     LINEAR : new Enumeration(0x2601, 'LINEAR')
     * };
     */
    var Enumeration = function(value, name, properties) {
        /**
         * The numeric value of the enumeration.
         * @type Number
         */
        this.value = value;

        /**
         * The name of the enumeration for debugging purposes.
         * @type String
         */
        this.name = name;

        if (typeof properties !== 'undefined') {
            for ( var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                }
            }
        }
    };

    /**
     * Returns the numeric value of the enumeration.
     *
     * @memberof Enumeration
     *
     * @return {Number} The numeric value of the enumeration.
     */
    Enumeration.prototype.valueOf = function() {
        return this.value;
    };

    /**
     * Returns the name of the enumeration for debugging purposes.
     *
     * @memberof Enumeration
     *
     * @return {String} The name of the enumeration for debugging purposes.
     */
    Enumeration.prototype.toString = function() {
        return this.name;
    };

    return Enumeration;
});
/*global define*/
define('Core/ComponentDatatype',['./Enumeration'], function(Enumeration) {
    

    // Earlier versions of IE do not support typed arrays, and as a result,
    // using them below will cause the setup function itself to fail, causing
    // the page to abort load, and preventing us from prompting to install
    // Chrome Frame.  To avoid this, bail out early and return a dummy object,
    // since we won't be able to create a WebGL context anyway.
    if (typeof Int8Array === 'undefined') {
        return {};
    }

    /**
     * DOC_TBA
     *
     * @alias ComponentDatatype
     * @enumeration
     */
    var ComponentDatatype = {};

    /**
     * DOC_TBA
     *
     * @constant
     * @type {Enumeration}
     * @memberOf ComponentDatatype
     */
    ComponentDatatype.BYTE = new Enumeration(0x1400, 'BYTE');
    ComponentDatatype.BYTE.sizeInBytes = Int8Array.BYTES_PER_ELEMENT;
    ComponentDatatype.BYTE.toTypedArray = function(values) {
        return new Int8Array(values);
    };

    ComponentDatatype.BYTE.createArrayBufferView = function(buffer, byteOffset) {
        return new Int8Array(buffer, byteOffset);
    };

    /**
     * DOC_TBA
     *
     * @constant
     * @type {Enumeration}
     * @memberOf ComponentDatatype
     */
    ComponentDatatype.UNSIGNED_BYTE = new Enumeration(0x1401, 'UNSIGNED_BYTE');
    ComponentDatatype.UNSIGNED_BYTE.sizeInBytes = Uint8Array.BYTES_PER_ELEMENT;
    ComponentDatatype.UNSIGNED_BYTE.toTypedArray = function(values) {
        return new Uint8Array(values);
    };

    ComponentDatatype.UNSIGNED_BYTE.createArrayBufferView = function(buffer, byteOffset) {
        return new Uint8Array(buffer, byteOffset);
    };

    /**
     * DOC_TBA
     *
     * @constant
     * @type {Enumeration}
     * @memberOf ComponentDatatype
     */
    ComponentDatatype.SHORT = new Enumeration(0x1402, 'SHORT');
    ComponentDatatype.SHORT.sizeInBytes = Int16Array.BYTES_PER_ELEMENT;
    ComponentDatatype.SHORT.toTypedArray = function(values) {
        return new Int16Array(values);
    };

    ComponentDatatype.SHORT.createArrayBufferView = function(buffer, byteOffset) {
        return new Int16Array(buffer, byteOffset);
    };

    /**
     * DOC_TBA
     *
     * @constant
     * @type {Enumeration}
     * @memberOf ComponentDatatype
     */
    ComponentDatatype.UNSIGNED_SHORT = new Enumeration(0x1403, 'UNSIGNED_SHORT');
    ComponentDatatype.UNSIGNED_SHORT.sizeInBytes = Uint16Array.BYTES_PER_ELEMENT;
    ComponentDatatype.UNSIGNED_SHORT.toTypedArray = function(values) {
        return new Uint16Array(values);
    };

    ComponentDatatype.UNSIGNED_SHORT.createArrayBufferView = function(buffer, byteOffset) {
        return new Uint16Array(buffer, byteOffset);
    };

    /**
     * DOC_TBA
     *
     * @constant
     * @type {Enumeration}
     * @memberOf ComponentDatatype
     */
    ComponentDatatype.FLOAT = new Enumeration(0x1406, 'FLOAT');
    ComponentDatatype.FLOAT.sizeInBytes = Float32Array.BYTES_PER_ELEMENT;
    ComponentDatatype.FLOAT.toTypedArray = function(values) {
        return new Float32Array(values);
    };

    ComponentDatatype.FLOAT.createArrayBufferView = function(buffer, byteOffset) {
        return new Float32Array(buffer, byteOffset);
    };

    /**
     * DOC_TBA
     */
    ComponentDatatype.validate = function(componentDatatype) {
        return ((componentDatatype === ComponentDatatype.BYTE) ||
                (componentDatatype === ComponentDatatype.UNSIGNED_BYTE) ||
                (componentDatatype === ComponentDatatype.SHORT) ||
                (componentDatatype === ComponentDatatype.UNSIGNED_SHORT) ||
                (componentDatatype === ComponentDatatype.FLOAT));
    };

    return ComponentDatatype;
});

/*global define*/
define('Core/PrimitiveType',['./Enumeration'], function(Enumeration) {
    

    /**
     * DOC_TBA
     *
     * @exports PrimitiveType
     */
    var PrimitiveType = {
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        POINTS : new Enumeration(0x0000, 'POINTS'),
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        LINES : new Enumeration(0x0001, 'LINES'),
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        LINE_LOOP : new Enumeration(0x0002, 'LINE_LOOP'),
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        LINE_STRIP : new Enumeration(0x0003, 'LINE_STRIP'),
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        TRIANGLES : new Enumeration(0x0004, 'TRIANGLES'),
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        TRIANGLE_STRIP : new Enumeration(0x0005, 'TRIANGLE_STRIP'),
        /**
         * DOC_TBA
         *
         * @constant
         * @type {Enumeration}
         */
        TRIANGLE_FAN : new Enumeration(0x0006, 'TRIANGLE_FAN'),

        /**
         * DOC_TBA
         *
         * @param primitiveType
         *
         * @returns {Boolean}
         */
        validate : function(primitiveType) {
            return ((primitiveType === PrimitiveType.POINTS) ||
                    (primitiveType === PrimitiveType.LINES) ||
                    (primitiveType === PrimitiveType.LINE_LOOP) ||
                    (primitiveType === PrimitiveType.LINE_STRIP) ||
                    (primitiveType === PrimitiveType.TRIANGLES) ||
                    (primitiveType === PrimitiveType.TRIANGLE_STRIP) ||
                    (primitiveType === PrimitiveType.TRIANGLE_FAN));
        }
    };

    return PrimitiveType;
});

/*global define*/
define('Core/ExtentTessellator',[
        './defaultValue',
        './DeveloperError',
        './Math',
        './Ellipsoid',
        './Extent',
        './Cartesian3',
        './ComponentDatatype',
        './PrimitiveType'
    ], function(
        defaultValue,
        DeveloperError,
        CesiumMath,
        Ellipsoid,
        Extent,
        Cartesian3,
        ComponentDatatype,
        PrimitiveType) {
    

    /**
     * Contains class functions to create a mesh or vertex array from a cartographic extent.
     *
     * @exports ExtentTessellator
     *
     * @see CubeMapEllipsoidTessellator
     * @see BoxTessellator
     * @see PlaneTessellator
     */
    var ExtentTessellator = {};

    /**
     * Compute vertices from a cartographic extent.  This function is different from
     * {@link ExtentTessellator#compute} and {@link ExtentTessellator#computeBuffers}
     * in that it assumes that you have already allocated output arrays of the correct size.
     *
     * @param {Extent} description.extent A cartographic extent with north, south, east and west properties in radians.
     * @param {Number} description.width The number of vertices in the longitude direction.
     * @param {Number} description.height The number of vertices in the latitude direction.
     * @param {Number} description.granularityX The distance, in radians, between each longitude.
     * @param {Number} description.granularityY The distance, in radians, between each latitude.
     * @param {Number} description.surfaceHeight The height from the surface of the ellipsoid.
     * @param {Boolean} description.generateTextureCoordinates Whether to generate texture coordinates.
     * @param {Boolean} description.interleaveTextureCoordinates Whether to interleave the texture coordinates into the vertex array.
     * @param {Cartesian3} description.relativetoCenter The positions will be computed as <code>worldPosition.subtract(relativeToCenter)</code>.
     * @param {Cartesian3} description.radiiSquared The radii squared of the ellipsoid to use.
     * @param {Array|Float32Array} description.vertices The array to use to store computed vertices.
     * @param {Array|Float32Array} description.textureCoordinates The array to use to store computed texture coordinates, unless interleaved.
     * @param {Array|Float32Array} [description.indices] The array to use to store computed indices.  If undefined, indices will be not computed.
     */
    ExtentTessellator.computeVertices = function(description) {
        description = defaultValue(description, {});

        var extent = description.extent;
        var surfaceHeight = description.surfaceHeight;
        var width = description.width;
        var height = description.height;

        var granularityX = (extent.east - extent.west) / (width - 1);
        var granularityY = (extent.north - extent.south) / (height - 1);
        var generateTextureCoordinates = description.generateTextureCoordinates;
        var interleaveTextureCoordinates = description.interleaveTextureCoordinates;
        var relativeToCenter = description.relativeToCenter;

        var vertices = description.vertices;
        var textureCoordinates = description.textureCoordinates;
        var indices = description.indices;

        var radiiSquared = description.radiiSquared;
        var radiiSquaredX = radiiSquared.x;
        var radiiSquaredY = radiiSquared.y;
        var radiiSquaredZ = radiiSquared.z;

        var cos = Math.cos;
        var sin = Math.sin;
        var sqrt = Math.sqrt;

        // for computing texture coordinates
        var lonScalar = 1.0 / (extent.east - extent.west);
        var latScalar = 1.0 / (extent.north - extent.south);

        var vertexArrayIndex = 0;
        var textureCoordinatesIndex = 0;

        for ( var row = 0; row < height; ++row) {
            var latitude = extent.north - granularityY * row;
            var cosLatitude = cos(latitude);
            var nZ = sin(latitude);
            var kZ = radiiSquaredZ * nZ;

            var geographicV = (latitude - extent.south) * latScalar;

            var v = geographicV;

            for ( var col = 0; col < width; ++col) {
                var longitude = extent.west + granularityX * col;

                var nX = cosLatitude * cos(longitude);
                var nY = cosLatitude * sin(longitude);

                var kX = radiiSquaredX * nX;
                var kY = radiiSquaredY * nY;

                var gamma = sqrt((kX * nX) + (kY * nY) + (kZ * nZ));

                var rSurfaceX = kX / gamma;
                var rSurfaceY = kY / gamma;
                var rSurfaceZ = kZ / gamma;

                vertices[vertexArrayIndex++] = rSurfaceX + nX * surfaceHeight - relativeToCenter.x;
                vertices[vertexArrayIndex++] = rSurfaceY + nY * surfaceHeight - relativeToCenter.y;
                vertices[vertexArrayIndex++] = rSurfaceZ + nZ * surfaceHeight - relativeToCenter.z;

                if (generateTextureCoordinates) {
                    var geographicU = (longitude - extent.west) * lonScalar;

                    var u = geographicU;

                    if (interleaveTextureCoordinates) {
                        vertices[vertexArrayIndex++] = u;
                        vertices[vertexArrayIndex++] = v;
                    } else {
                        textureCoordinates[textureCoordinatesIndex++] = u;
                        textureCoordinates[textureCoordinatesIndex++] = v;
                    }
                }
            }
        }

        if (typeof indices !== 'undefined') {
            var index = 0;
            var indicesIndex = 0;
            for ( var i = 0; i < height - 1; ++i) {
                for ( var j = 0; j < width - 1; ++j) {
                    var upperLeft = index;
                    var lowerLeft = upperLeft + width;
                    var lowerRight = lowerLeft + 1;
                    var upperRight = upperLeft + 1;

                    indices[indicesIndex++] = upperLeft;
                    indices[indicesIndex++] = lowerLeft;
                    indices[indicesIndex++] = upperRight;
                    indices[indicesIndex++] = upperRight;
                    indices[indicesIndex++] = lowerLeft;
                    indices[indicesIndex++] = lowerRight;

                    ++index;
                }
                ++index;
            }
        }
    };

    /**
     * Creates a mesh from a cartographic extent.
     *
     * @param {Extent} description.extent A cartographic extent with north, south, east and west properties in radians.
     * @param {Ellipsoid} [description.ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the extent lies.
     * @param {Number} [description.granularity=0.1] The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
     * @param {Number} [description.surfaceHeight=0.0] The height from the surface of the ellipsoid.
     * @param {Cartesian3} [description.relativetoCenter=Cartesian3.ZERO] The positions will be computed as <code>worldPosition.subtract(relativeToCenter)</code>.
     * @param {Boolean} [description.generateTextureCoordinates=false] Whether to generate texture coordinates.
     *
     * @exception {DeveloperError} <code>description.extent</code> is required and must have north, south, east and west attributes.
     * @exception {DeveloperError} <code>description.extent.north</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
     * @exception {DeveloperError} <code>description.extent.south</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
     * @exception {DeveloperError} <code>description.extent.east</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
     * @exception {DeveloperError} <code>description.extent.west</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
     * @exception {DeveloperError} <code>description.extent.north</code> must be greater than <code>extent.south</code>.
     * @exception {DeveloperError} <code>description.extent.east</code> must be greater than <code>extent.west</code>.
     * @exception {DeveloperError} <code>description.context</code> is required.
     *
     * @return {Object} A mesh containing attributes for positions, possibly texture coordinates and indices
     * from the extent for creating a vertex array.
     *
     * @see Context#createVertexArrayFromMesh
     * @see MeshFilters.createAttributeIndices
     * @see MeshFilters.toWireframeInPlace
     * @see Extent
     *
     * @example
     * // Create a vertex array for rendering a wireframe extent.
     * var mesh = ExtentTessellator.compute({
     *     ellipsoid : Ellipsoid.WGS84,
     *     extent : new Extent(
     *         CesiumMath.toRadians(-80.0),
     *         CesiumMath.toRadians(39.0),
     *         CesiumMath.toRadians(-74.0),
     *         CesiumMath.toRadians(42.0)
     *     ),
     *     granularity : 0.01,
     *     surfaceHeight : 10000.0
     * });
     * mesh = MeshFilters.toWireframeInPlace(mesh);
     * var va = context.createVertexArrayFromMesh({
     *     mesh             : mesh,
     *     attributeIndices : MeshFilters.createAttributeIndices(mesh)
     * });
     */
    ExtentTessellator.compute = function(description) {
        description = defaultValue(description, {});

        var extent = description.extent;
        extent.validate();

        var ellipsoid = defaultValue(description.ellipsoid, Ellipsoid.WGS84);
        description.radiiSquared = ellipsoid.getRadiiSquared();
        description.relativeToCenter = defaultValue(description.relativeToCenter, Cartesian3.ZERO);

        var granularity = defaultValue(description.granularity, 0.1);
        description.surfaceHeight = defaultValue(description.surfaceHeight, 0.0);

        description.width = Math.ceil((extent.east - extent.west) / granularity) + 1;
        description.height = Math.ceil((extent.north - extent.south) / granularity) + 1;

        var vertices = [];
        var indices = [];
        var textureCoordinates = [];

        description.generateTextureCoordinates = defaultValue(description.generateTextureCoordinates, false);
        description.interleaveTextureCoordinates = false;
        description.vertices = vertices;
        description.textureCoordinates = textureCoordinates;
        description.indices = indices;

        ExtentTessellator.computeVertices(description);

        var mesh = {
            attributes : {},
            indexLists : [{
                primitiveType : PrimitiveType.TRIANGLES,
                values : indices
            }]
        };

        var positionName = defaultValue(description.positionName, 'position');
        mesh.attributes[positionName] = {
            componentDatatype : ComponentDatatype.FLOAT,
            componentsPerAttribute : 3,
            values : vertices
        };

        if (description.generateTextureCoordinates) {
            var textureCoordinatesName = defaultValue(description.textureCoordinatesName, 'textureCoordinates');
            mesh.attributes[textureCoordinatesName] = {
                componentDatatype : ComponentDatatype.FLOAT,
                componentsPerAttribute : 2,
                values : textureCoordinates
            };
        }

        return mesh;
    };

    /**
     * Creates arrays of vertex attributes and indices from a cartographic extent.
     *
     * @param {Extent} description.extent A cartographic extent with north, south, east and west properties in radians.
     * @param {Ellipsoid} [description.ellipsoid=Ellipsoid.WGS84] The ellipsoid on which the extent lies.
     * @param {Number} [description.granularity=0.1] The distance, in radians, between each latitude and longitude. Determines the number of positions in the buffer.
     * @param {Number} [description.surfaceHeight=0.0] The height from the surface of the ellipsoid.
     * @param {Cartesian3} [description.relativetoCenter=Cartesian3.ZERO] The positions will be computed as <code>worldPosition.subtract(relativeToCenter)</code>.
     * @param {Boolean} [description.generateTextureCoordinates=false] Whether to generate texture coordinates.
     * @param {Boolean} [description.interleaveTextureCoordinates=false] If texture coordinates are generated, whether to interleave the positions and texture coordinates in a single buffer.
     *
     * @exception {DeveloperError} <code>description.extent</code> is required and must have north, south, east and west attributes.
     * @exception {DeveloperError} <code>description.extent.north</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
     * @exception {DeveloperError} <code>description.extent.south</code> must be in the interval [<code>-Pi/2</code>, <code>Pi/2</code>].
     * @exception {DeveloperError} <code>description.extent.east</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
     * @exception {DeveloperError} <code>description.extent.west</code> must be in the interval [<code>-Pi</code>, <code>Pi</code>].
     * @exception {DeveloperError} <code>description.extent.north</code> must be greater than <code>extent.south</code>.     *
     * @exception {DeveloperError} <code>description.extent.east</code> must be greater than <code>extent.west</code>.
     *
     * @return {Object} An object with flattened arrays for vertex attributes and indices.
     *
     * @example
     * // Example 1:
     * // Create a vertex array for a solid extent, with separate positions and texture coordinates.
     * var buffers = ExtentTessellator.computeBuffers({
     *     ellipsoid : ellipsoid,
     *     extent : extent,
     *     generateTextureCoordinates : true
     * });
     *
     * var datatype = ComponentDatatype.FLOAT;
     * var usage = BufferUsage.STATIC_DRAW;
     * var positionBuffer = context.createVertexBuffer(datatype.toTypedArray(buffers.positions), usage);
     * var textureCoordinateBuffer = context.createVertexBuffer(datatype.toTypedArray(buffers.textureCoordinates), usage);
     * attributes = [{
     *         index : attributeIndices.position,
     *         vertexBuffer : positionBuffer,
     *         componentDatatype : datatype,
     *         componentsPerAttribute : 3
     *     }, {
     *         index : attributeIndices.textureCoordinates,
     *         vertexBuffer : textureCoordinateBuffer,
     *         componentDatatype : datatype,
     *         componentsPerAttribute : 2
     *     }];
     * var indexBuffer = context.createIndexBuffer(new Uint16Array(buffers.indices), usage, IndexDatatype.UNSIGNED_SHORT);
     * var va = context.createVertexArray(attributes, indexBuffer);
     *
     * @example
     * // Example 2:
     * // Create a vertex array for a solid extent, with interleaved positions and texture coordinates.
     * var buffers = ExtentTessellator.computeBuffers({
     *     ellipsoid : ellipsoid,
     *     extent : extent,
     *     generateTextureCoordinates : true,
     *     interleaveTextureCoordinates : true
     * });
     *
     * var datatype = ComponentDatatype.FLOAT;
     * var usage = BufferUsage.STATIC_DRAW;
     * var typedArray = datatype.toTypedArray(buffers.vertices);
     * var buffer = context.createVertexBuffer(typedArray, usage);
     * var stride = 5 * datatype.sizeInBytes;
     * var attributes = [{
     *         index : attributeIndices.position3D,
     *         vertexBuffer : buffer,
     *         componentDatatype : datatype,
     *         componentsPerAttribute : 3,
     *         normalize : false,
     *         offsetInBytes : 0,
     *         strideInBytes : stride
     *     }, {
     *         index : attributeIndices.textureCoordinates,
     *         vertexBuffer : buffer,
     *         componentDatatype : datatype,
     *         componentsPerAttribute : 2,
     *         normalize : false,
     *         offsetInBytes : 3 * datatype.sizeInBytes,
     *         strideInBytes : stride
     *     }];
     * var indexBuffer = context.createIndexBuffer(new Uint16Array(buffers.indices), usage, IndexDatatype.UNSIGNED_SHORT);
     * var vacontext.createVertexArray(attributes, indexBuffer);
     */
    ExtentTessellator.computeBuffers = function(description) {
        description = defaultValue(description, {});

        var extent = description.extent;
        extent.validate();

        var ellipsoid = defaultValue(description.ellipsoid, Ellipsoid.WGS84);
        description.radiiSquared = ellipsoid.getRadiiSquared();
        description.relativeToCenter = defaultValue(description.relativeToCenter, Cartesian3.ZERO);

        var granularity = defaultValue(description.granularity, 0.1);
        description.surfaceHeight = defaultValue(description.surfaceHeight, 0.0);

        description.width = Math.ceil((extent.east - extent.west) / granularity) + 1;
        description.height = Math.ceil((extent.north - extent.south) / granularity) + 1;

        var vertices = [];
        var indices = [];
        var textureCoordinates = [];

        description.generateTextureCoordinates = defaultValue(description.generateTextureCoordinates, false);
        description.interleaveTextureCoordinates = defaultValue(description.interleaveTextureCoordinates, false);
        description.vertices = vertices;
        description.textureCoordinates = textureCoordinates;
        description.indices = indices;

        ExtentTessellator.computeVertices(description);

        var result = {
            indices : indices
        };

        if (description.interleaveTextureCoordinates) {
            result.vertices = vertices;
        } else {
            result.positions = vertices;
            if (description.generateTextureCoordinates) {
                result.textureCoordinates = textureCoordinates;
            }
        }

        return result;
    };

    return ExtentTessellator;
});

/*global define*/
define('Workers/createTaskProcessorWorker',[],function() {
    

    /**
     * Creates an adapter function to allow a calculation function to operate as a Web Worker,
     * paired with TaskProcessor, to receive tasks and return results.
     *
     * @exports createTaskProcessorWorker
     *
     * @param {Function} workerFunction A function that takes as input two arguments:
     * a parameters object, and an array into which transferable result objects can be pushed,
     * and returns as output a result object.
     * @returns {Function} An adapter function that handles the interaction with TaskProcessor,
     * specifically, task ID management and posting a response message containing the result.
     *
     * @example
     * function doCalculation(parameters, transferableObjects) {
     *   // calculate some result using the inputs in parameters
     *   return result;
     * }
     *
     * return createTaskProcessorWorker(doCalculation);
     * // the resulting function is compatible with TaskProcessor
     *
     * @see TaskProcessor
     * @see <a href='http://www.w3.org/TR/workers/'>Web Workers</a>
     * @see <a href='http://www.w3.org/TR/html5/common-dom-interfaces.html#transferable-objects'>Transferable objects</a>
     */
    var createTaskProcessorWorker = function(workerFunction) {
        var postMessage;
        var transferableObjects = [];
        var responseMessage = {
            id : undefined,
            result : undefined
        };

        return function(event) {
            /*global self*/
            var data = event.data;

            responseMessage.id = data.id;
            transferableObjects.length = 0;
            responseMessage.result = workerFunction(data.parameters, transferableObjects);

            if (typeof postMessage === 'undefined') {
                postMessage = typeof self.webkitPostMessage !== 'undefined' ? self.webkitPostMessage : self.postMessage;
            }

            postMessage(responseMessage, transferableObjects);
        };
    };

    return createTaskProcessorWorker;
});
/*global define*/
define('Workers/createVerticesFromExtent',[
        '../Core/ExtentTessellator',
        './createTaskProcessorWorker'
    ], function(
        ExtentTessellator,
        createTaskProcessorWorker) {
    

    function createVerticesFromExtent(parameters, transferableObjects) {
        var vertices = new Float32Array(parameters.width * parameters.height * 5);
        transferableObjects.push(vertices.buffer);

        parameters.vertices = vertices;
        parameters.generateTextureCoordinates = true;
        parameters.interleaveTextureCoordinates = true;

        ExtentTessellator.computeVertices(parameters);

        return vertices.buffer;
    }

    return createTaskProcessorWorker(createVerticesFromExtent);
});