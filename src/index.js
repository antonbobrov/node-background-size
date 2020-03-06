import get from "./get";
import apply from "./apply";

/**
 * @typedef MediaSizeCommonProp
 * @property {HTMLImageElement|HTMLVideoElement} media - Media element.
 * @property {'cover'|'contain'} [rule=cover] - Available values: cover, contain.
 * @property {number} [scale=1] - Scaling.
 */

/**
 * Imitate CSS background-size: cover|cover property in JavaScript.
 * 
 * @module nodeBackgroundSize
 * @interface
 * @namespace
 * @author Anthony Bobrov {@link https://github.com/antonbobrov/node-background-size.git| GitHub}
 * 
 */

export {
    get,
    apply
};