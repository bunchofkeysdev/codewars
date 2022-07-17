const describeAge = (age, line = "You're a(n)") => age <= 12 ? line + " kid" : age <= 17 ? line + " teenager" : age <= 64 ? line + " adult" : line + " elderly"

//second

function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
}

//third

var describeAge = a => `You're a(n) ${a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"}`;