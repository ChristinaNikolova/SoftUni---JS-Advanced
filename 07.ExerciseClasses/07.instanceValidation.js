class CheckingAccount {
  constructor(clientId, email, firstName, lastName) {
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get clientId() {
    return this.innerClientId;
  }

  set clientId(clientId) {
    let pattern = /^[0-9]{6}$/;

    if (!clientId.match(pattern)) {
      throw new TypeError("Client ID must be a 6-digit number");
    }

    this.innerClientId = clientId;
  }

  get email() {
    return this.innerEmail;
  }

  set email(email) {
    let pattern = /[A-Za-z0-9_]+@[A-Za-z.]+/;

    if (!email.match(pattern)) {
      throw new TypeError("Invalid e-mail");
    }

    this.innerEmail = email;
  }

  get firstName() {
    return this.innerFirstName;
  }

  set firstName(name) {
    if (name.length < 3 || name.length > 20) {
      throw new TypeError(
        "First name must be between 3 and 20 characters long"
      );
    }

    let pattern = /[A-Za-z]{3,20}/;

    if (!name.match(pattern)) {
      throw new TypeError("First name must contain only Latin characters");
    }

    this.innerFirstName = name;
  }

  get lastName() {
    return this.innerLastName;
  }

  set lastName(name) {
    if (name.length < 3 || name.length > 20) {
      throw new TypeError("Last name must be between 3 and 20 characters long");
    }

    let pattern = /[A-Za-z]{3,20}/;

    if (!name.match(pattern)) {
      throw new TypeError("Last name must contain only Latin characters");
    }

    this.innerLastName = name;
  }
}
