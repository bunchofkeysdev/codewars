function match(candidate, job) {
    if (candidate.minSalary == undefined || job.maxSalary == undefined) {
        throw `error`
    }
    else {
        return candidate.minSalary - (candidate.minSalary * 0.10) <= job.maxSalary

    }
}