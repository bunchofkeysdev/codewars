const getStatus = isBusy => ({ status: isBusy ? 'busy' : 'available' })


// second

function getStatus(isBusy) {
    var msg = (isBusy ? "busy" : "available");
    return {
        status: msg
    };
}