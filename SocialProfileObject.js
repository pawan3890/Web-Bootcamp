// Social Profile Object
const socialProfile = {
  fullName: "Pawan Paudyal", // attributes
  email: "pawanpaudyal3@gmail.com",
  numberOfLike: 100,
  comments: ["Hey", "Hello", "Hi"],
  bookmarks: false,
  friendsName: ["Roshan", "Prashant", "Prasiddha"],

  // Increment likes
  like() {
    this.numberOfLike++;
  },

  // Update profile details
  editProfile(newName, newEmail) {
    this.fullName = newName;
    this.email = newEmail;
  },

  // Add a comment
  addComment(comment) {
    this.comments.push(comment);
  },

  // Remove a comment
  removeComment(comment) {
    this.comments = this.comments.filter(c => c !== comment);
  },

  // Add a friend
  addFriend(friendName) {
    this.friendsName.push(friendName);
  },

  // Remove a friend
  removeFriend(friendName) {
    this.friendsName = this.friendsName.filter(
      friend => friend !== friendName
    );
  },

  // Toggle bookmark status
  toggleBookmark() {
    this.bookmarks = !this.bookmarks;
  }
};

// Examples
socialProfile.like();
console.log(socialProfile.numberOfLike); // 101

socialProfile.editProfile("Pawan Paudyal", "pawanpaudyal3@gmail.com");

socialProfile.addComment("Nice post!");
socialProfile.removeComment("Hello");

socialProfile.addFriend("Ram");
socialProfile.removeFriend("Prasiddha");

socialProfile.toggleBookmark();

console.log(socialProfile);