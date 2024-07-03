namespace Subjects {
    export interface Teacher {
        firstName: string;
        lastName: string;
	experienceTeachingC?: number;
    }

class Cpp extends Subject {
	getRequirements(): string {
		return "Here is the list of requirements for Cpp";
	}
	
	getAvailableTeacher(): string {
		if (this.teacher && this.teacher.experienceTeachingC >0) {
			return `Available Teacher: ${this.teacher.firstName}`;
		} else {
			return "No availabe teacher";
		}
	}
}
}
