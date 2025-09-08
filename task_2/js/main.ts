interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): String;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): String;
}

class Director implements DirectorInterface {
  workFromHome(): string {
      return "Working from home";
  }

  getCoffeeBreak(): string {
      return "Getting a coffee break";
  }

  workDirectorTasks(): String {
      return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
      return "Cannot work from home";
  }

  getCoffeeBreak(): string {
      return "Cannot have a break";
  }

  workTeacherTasks(): String {
      return "Getting to work";
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
