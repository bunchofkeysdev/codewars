function none(arr, fun) {
    return !arr.some(fun)
}


//shorter

const none = (arr, fun) => !arr.some(fun)