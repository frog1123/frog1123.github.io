function formatValue(value) {
    if (isNaN(value.layer) || isNaN(value.sign) || isNaN(value.mag)) {
        return "NaN";
    }
    if (value.mag === Number.POSITIVE_INFINITY || value.layer === Number.POSITIVE_INFINITY) {
        return value.sign === 1 ? "Infinity" : "-Infinity";
    }
    if (value.m ==0) {
        return value.m.toFixed(3)
    }
    if (value.layer === 0) {
        if (value.mag < 1e5 && value.mag > 1e-4 || value.mag === 0) {
            return (value.sign * value.mag).toFixed(3).toString();
        }
        var tempm = Math.round(value.m)
        if (tempm >= 10) {
            tempm /= Math.Pow(10, Math.log10(tempm))
            value.e += Math.log10(tempm)
        }
        return tempm.toFixed(3) + "e" + value.e.toLocaleString();
    }
    else if (value.layer === 1) {
        var tempm = Math.round(value.m)
        if (tempm >= 10) {
            tempm /= Math.Pow(10, Math.log10(tempm))
            value.e += Math.log10(tempm)
        }
        return tempm.toFixed(3) + "e" + value.e.toLocaleString();
    }
    else {
        return (value.sign === -1 ? "-" : "") + "e".repeat(value.layer) + value.mag.toLocaleString();
    }
}