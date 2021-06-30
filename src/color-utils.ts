function standardizeColor(str: string, ctx?) {
	if (!ctx) {
		    
		const can = document.createElement('canvas');
		ctx = can.getContext("2d") as CanvasRenderingContext2D;

	}
    ctx.fillStyle = str;
    return ctx.fillStyle;
}

export function convertNamedColorsToHex(colors: string[], filterFunc = filterByBrightness) {
	return colors.map(c => standardizeColor(c)).filter(filterFunc);
}

const filterByBrightness = (hex: string) => {
	// @ts-ignore
	return hexBrightness(hex) > .8;
}

function hexBrightness(hex) {
    var regExp = hex.length < 6 ? /^#(([a-f\d]))(([a-f\d]))(([a-f\d]))$/i : /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;

    var result = regExp.exec(hex);
    if (result) {
        var r = parseInt("" + result[1] + result[2], 16),
            g = parseInt("" + result[3] + result[4], 16),
            b = parseInt("" + result[5] + result[6], 16),
            max = Math.max(r, g, b),
            min = Math.min(r, g, b),
            l = (max + min) / 2;
        return l / 255;
    }
    return null;
}