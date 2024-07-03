/// <reference path="Subject.ts" />

class React {
	getRequirements(): string {
	    return "Here is the list of requirements for React";
	}

	getAvailableTeacher(): string {
		if (this.teacher && this.teacher.experienceTeachingReact > 0) {
			return `Available Teacher: ${this.teacher.firstName}`;
		} else {
		     return "No available teacher";
		}
        }
}
