function employeeData(dataArr) {
    let employees = [];
    let regex = /^([A-Z][a-zA-Z]*) - ([1-9]\d*) - ([a-zA-Z0-9\- ]+)$/;
    for (let data of dataArr) {
        let match = regex.exec(data);
        if (match === null) {
            continue;
        }
        let name = match[1];
        let salary = match[2];
        let position = match[3];

        employees.push({
            name: name,
            salary: salary,
            position: position
        });
    }

    for (let employee of employees) {
        console.log(`Name: ${employee.name}\nPosition: ${employee.position}\nSalary: ${employee.salary}`)
    }
}
