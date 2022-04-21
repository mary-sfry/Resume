
export function js_number_format (num) {
    var str = num.toString();
    if (str && str.length > 3) {
        str = str.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    return str;
}
