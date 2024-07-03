interface DirectorInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workDirectorTasks(): string;
}

interface TeacherInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workTeacherTasks(): string;
}

class Director implements DirectorInterface {
        workFromHome() {
                return "Working from home"
        }
        getToWork() {
                return "Getting a coffee break"
        }
        workDirectorTasks() {
                return "Getting to director tasks"
        }
}

class Teacher implements TeacherInterface {
        workFromHome() {
                return "Cannot work from home"
        }
        getCoffeeBreak() {
                return "Cannot have a break"
        }
        workTeacherTasks() {
                return "Getting to work"
        }

function createEmployee(salary: number) {
        if salary < 500 {
                return new Teacher();
	} else {
                return new Director();
        }
}

function isDirector(employee: DirectorInterface | TeacherInterface)employee is DirectorInterface {
  return (employee as DirectorInterface).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface) {
   if (isDirector(employee)) {
     console.log(employee.workDirectorTasks();)
  } else {
    console.log(employee.workTeacherTasks());
 }
}

type Subjects = 'Math' | 'History';
function teachClass(todayClass: Subjects): string | boolean {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  } else {
    return 'undefined';
  }
}

