import get from "./get";

/**
 * @typedef MediaSizeApplyProp
 * @memberof nodeBackgroundSize
 * @augments nodeBackgroundSize.MediaSizeCommonProp
 * 
 * @property {HTMLElement} [parent] - Relative element to which the sizes will be calculated. 
 * If undefined, the direct parent will be taken.
 * 
 */

/**
 * @description Apply image/video sizes.
 * Note that the resources must be loaded before applying sizes to them.
 * 
 * @param {nodeBackgroundSize.MediaSizeApplyProp} data
 * 
 * @memberof nodeBackgroundSize
 * 
 */
function apply(data) {

    // prop
    let prop = {
        media: false,
        rule: 'cover',
        scale: 1
    };
    prop = Object.assign(prop, data);

    // get media
    const media = prop.media;

    // get parent
    if (typeof prop.parent == "undefined") {
        prop.parent = media.parentElement;
    }

    // get parent sizes
    const parentWidth = prop.parent.clientWidth;
    const parentHeight = prop.parent.clientHeight;

    // calculate sizes
    const sizes = get({
        media: media,
        rule: prop.rule,
        width: parentWidth,
        height: parentHeight,
        scale: prop.scale
    });

    // apply sizes
    media.style.position = 'absolute';
    media.style.left = sizes.x + 'px';
    media.style.top = sizes.y + 'px';
    media.style.width = sizes.width + 'px';
    media.style.height = sizes.height + 'px';


}

export default apply;