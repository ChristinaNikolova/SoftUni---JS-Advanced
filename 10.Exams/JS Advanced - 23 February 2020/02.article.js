class Article {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
    this._id = 1;
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has 0 likes`;
    }

    if (this._likes.length === 1) {
      return `${this._likes[0]} likes this article!`;
    }

    return `${this._likes[0]} and ${
      this._likes.length - 1
    } others like this article!`;
  }

  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same article twice!");
    }

    if (username === this.creator) {
      throw new Error("You can't like your own articles!");
    }

    this._likes.push(username);

    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this article!");
    }

    let indexUser = this._likes.indexOf(username);
    this._likes.splice(indexUser, 1);

    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    if (id === undefined || !this._comments.some((x) => x.Id === id)) {
      let newComment = {
        Id: this._id,
        Username: username,
        Content: content,
        Replies: [],
      };

      this._id++;
      this._comments.push(newComment);

      return `${username} commented on ${this.title}`;
    } else if (this._comments.some((x) => x.Id === id)) {
      let targetComment = this._comments.find((x) => x.Id === id);

      let replyId = id + "." + (targetComment.Replies.length + 1);

      let reply = {
        Id: replyId,
        Username: username,
        Content: content,
      };

      targetComment.Replies.push(reply);

      return "You replied successfully";
    }
  }

  toString(sortingType) {
    let result = "";
    result +=
      `Title: ${this.title}` +
      "\n" +
      `Creator: ${this.creator}` +
      "\n" +
      `Likes: ${this._likes.length}` +
      "\n" +
      "Comments:" +
      "\n";

    if (sortingType === "asc") {
      for (const comment of this._comments.sort((a, b) => a.Id - b.Id)) {
        result +=
          `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + "\n";

        for (const reply of comment.Replies.sort((a, b) => a.Id - b.Id)) {
          result +=
            `--- ${reply.Id}. ${reply.Username}: ${reply.Content}` + "\n";
        }
      }
    } else if (sortingType === "desc") {
      for (const comment of this._comments.sort((a, b) => b.Id - a.Id)) {
        result +=
          `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + "\n";

        for (const reply of comment.Replies.sort((a, b) => b.Id - a.Id)) {
          result +=
            `--- ${reply.Id}. ${reply.Username}: ${reply.Content}` + "\n";
        }
      }
    } else if (sortingType === "username") {
      for (const comment of this._comments.sort((a, b) =>
        a.Username.localeCompare(b.Username)
      )) {
        result +=
          `-- ${comment.Id}. ${comment.Username}: ${comment.Content}` + "\n";

        for (const reply of comment.Replies.sort((a, b) =>
          a.Username.localeCompare(b.Username)
        )) {
          result +=
            `--- ${reply.Id}. ${reply.Username}: ${reply.Content}` + "\n";
        }
      }
    }

    return result.trim();
  }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
