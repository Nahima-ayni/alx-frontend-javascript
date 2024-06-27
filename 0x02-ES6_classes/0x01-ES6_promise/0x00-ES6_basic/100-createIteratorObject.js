export default function createIteratorObject(report) {
    let employees = [];
    for (let department in report.allEmployees) {
        employees = employees.concat(report.allEmployees[department]);
    }

    return employees[Symbol.iterator]();
}
