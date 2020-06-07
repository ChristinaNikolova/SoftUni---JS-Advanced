class Forum {
  constructor() {
    this._users = [];
    this._questions = [];
    this._id = 1;
  }

  register(username, password, repeatPassword, email) {
    if (
      username === "" ||
      password === "" ||
      repeatPassword === "" ||
      email === ""
    ) {
      throw new Error("Input can not be empty");
    }

    if (password !== repeatPassword) {
      throw new Error("Passwords do not match");
    }

    if (
      this._users.some((x) => x.username === username) ||
      this._users.some((x) => x.email === email)
    ) {
      throw new Error("This user already exists!");
    }

    let user = {
      username: username,
      password: password,
      email: email,
      isLogin: false,
    };

    this._users.push(user);

    return `${username} with ${email} was registered successfully!`;
  }

  login(username, password) {
    let user = this._users.find((x) => x.username === username);

    if (user === undefined) {
      throw new Error("There is no such user");
    }

    if (user.password === password) {
      user.isLogin = true;
      return "Hello! You have logged in successfully";
    }
  }

  logout(username, password) {
    let user = this._users.find((x) => x.username === username);

    if (user === undefined) {
      throw new Error("There is no such user");
    }

    if (user.password === password) {
      user.isLogin = false;
      return "You have logged out successfully";
    }
  }

  postQuestion(username, question) {
    let user = this._users.find((x) => x.username === username);

    if (user === undefined || user.isLogin === false) {
      throw new Error("You should be logged in to post questions");
    }

    if (question === "") {
      throw new Error("Invalid question");
    }

    let newQuestion = {
      id: this._id,
      username: username,
      question: question,
      answers: [],
    };

    this._id++;
    this._questions.push(newQuestion);

    return "Your question has been posted successfully";
  }

  postAnswer(username, questionId, answer) {
    let user = this._users.find((x) => x.username === username);

    if (user === undefined || user.isLogin === false) {
      throw new Error("You should be logged in to post answers");
    }

    if (answer === "") {
      throw new Error("Invalid answer");
    }

    let question = this._questions.find((x) => x.id === questionId);

    if (question === undefined) {
      throw new Error("There is no such question");
    }

    let newAnswer = {
      username: username,
      answer: answer,
    };

    question.answers.push(newAnswer);

    return "Your answer has been posted successfully";
  }

  showQuestions() {
    let result = "";

    for (const question of this._questions) {
      result +=
        `Question ${question.id} by ${question.username}: ${question.question}` +
        "\n";

      for (const answer of question.answers) {
        result += `---${answer.username}: ${answer.answer}` + "\n";
      }
    }

    return result.trim();
  }
}

let forum = new Forum();

forum.register("Michael", "123", "123", "michael@abv.bg");
forum.register("Stoyan", "123ab7", "123ab7", "some@gmail@.com");
forum.login("Michael", "123");
forum.login("Stoyan", "123ab7");

forum.postQuestion("Michael", "Can I rent a snowboard from your shop?");
forum.postAnswer("Stoyan", 1, "Yes, I have rented one last year.");
forum.postQuestion(
  "Stoyan",
  "How long are supposed to be the ski for my daughter?"
);
forum.postAnswer("Michael", 2, "How old is she?");
forum.postAnswer("Michael", 2, "Tell us how tall she is.");

console.log(forum.showQuestions());
