export abstract class Person {
  constructor(protected id: string, protected name: string) {}

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  abstract displayDetails(): void;
}

export default Person;

