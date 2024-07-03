/// <reference path="Subject.ts" />
    
class Java {
	getRequirements(): string {
	    return "Here is the list of requirements for Java";
	}

	getAvailableTeacher(): string {
	    if (this.teacher && this.teacher.experienceTeachingJava > 0) {			    return `Available Teacher: ${this.teacher.firstName}`
	    } else {	
		    return "No available teacher";
	   }
       }
    }
}
