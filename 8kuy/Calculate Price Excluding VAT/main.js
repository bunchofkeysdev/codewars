//return price without vat
function excludingVatPrice(price) {
    // your code
    return price == undefined ? -1 : +(price / 1.15).toFixed(2)

}