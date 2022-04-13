function formatDuration(seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}

// second
function formatDuration(seconds) {
    if (seconds == 0) return "now";
    var s = {
        "year": (60 * 60 * 24 * 365),
        "day": (60 * 60 * 24),
        "hour": (60 * 60),
        "minute": 60
    }
    var output = new Array();
    var years = Math.floor(seconds / s.year);
    if (years > 0) {
        output.push(years + " year" + (years == 1 ? "" : "s"));
        seconds = seconds % s.year;
    }
    var days = Math.floor(seconds / s.day);
    if (days > 0) {
        output.push(days + " day" + (days == 1 ? "" : "s"));
        seconds = seconds % s.day;
    }
    var hours = Math.floor(seconds / s.hour);
    if (hours > 0) {
        output.push(hours + " hour" + (hours == 1 ? "" : "s"));
        seconds = seconds % s.hour;
    }
    var minutes = Math.floor(seconds / s.minute);
    if (minutes > 0) {
        output.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
        seconds = seconds % s.minute;
    }
    if (seconds > 0) {
        output.push(seconds + " second" + (seconds == 1 ? "" : "s"));
    }
    if (output.length > 1) {
        var last = output.pop();
        return output.join(", ") + " and " + last;
    } else {
        return output[0];
    }
}