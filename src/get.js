/**
 * @typedef {object} MediaSizes
 * @property {HTMLImageElement|HTMLVideoElement} media - The media element itself.
 * @property {number} width - The calculated width.
 * @property {number} height - The calculated height.
 * @property {number} mediaWidth - The initial width of the media element.
 * @property {number} mediaHeight - The initial height of the media element.
 * @property {number} scale - Scaling.
 * @property {number} x - The x-axis coordinate of the top left corner.
 * @property {number} y - The y-axis coordinate of the top left corner.
 */

/**
 * @typedef MediaSizeGetProp
 * @augments MediaSizeCommonProp
 * 
 * @property {number} [width=500] - Container width.
 * @property {number} [height=500] - Container height.
 * 
 */

/**
 * @description Get image/video size according to the CSS rules: cover|contain.
 * Note that the resources must be loaded before applying sizes to them.
 * 
 * @param {MediaSizeGetProp} data
 * 
 * @returns {MediaSizes} Returns size values.
 * 
 * @memberof nodeBackgroundSize
 * 
 */
function get(data) {

    // prop
    let prop = {
        media: false,
        rule: 'cover',
        width: 1000,
        height: 1000,
        scale: 1
    };
    prop = Object.assign(prop, data);

    // variables
    let calculatedWidth = 0,
        calculatedHeight = 0,
        calculatedX = 0,
        calculatedY = 0,
        mediaWidth = 0,
        mediaHeight = 0;

    // get media element
    const media = prop.media;

    // get initial sizes
    if (media.tagName == 'VIDEO') {
        mediaWidth = media.videoWidth;
        mediaHeight = media.videoHeight;
    }
    else {
        mediaWidth = media.width;
        mediaHeight = media.height;
    }

    // get constant sizes of the parent element
    const instantWidth = prop.width;
    const instantHeight = prop.height;

    // cover sizes
    if (prop.rule === 'cover') {

        calculatedWidth = instantWidth * prop.scale;
        calculatedHeight = mediaHeight * calculatedWidth / mediaWidth;

        if (calculatedHeight < instantHeight) {
            calculatedHeight = instantHeight * prop.scale;
            calculatedWidth = mediaWidth * calculatedHeight / mediaHeight;
        }

    }
    // cover sizes
    else if (prop.rule === 'contain') {

        if (mediaWidth > mediaHeight) {
            calculatedWidth = instantWidth * prop.scale;
            calculatedHeight = mediaHeight * calculatedWidth / mediaWidth;
        }
        else if (mediaHeight >= mediaWidth) {
            calculatedHeight = instantHeight * prop.scale;
            calculatedWidth = mediaWidth * calculatedHeight / mediaHeight;
        }

    }

    calculatedX = (instantWidth - calculatedWidth) / 2;
    calculatedY = (instantHeight - calculatedHeight) / 2;

    // return object
    return {
        media: prop.media,
        width: calculatedWidth,
        height: calculatedHeight,
        mediaWidth: mediaWidth,
        mediaHeight: mediaHeight,
        scale: prop.scale,
        x: calculatedX,
        y: calculatedY
    }

}

export default get;