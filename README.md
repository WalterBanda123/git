Git.js: A JavaScript Implementation of Git Functionality
Git.js is a JavaScript-based simulation of core Git functionalities, allowing users to create repositories, commit changes, manage branches, and navigate commit histories within a JavaScript environment. This project serves as an educational tool to understand Git's internal mechanisms and can be extended for various applications.​

Features
Repository Initialization: Create a new Git.js repository instance.​
Committing Changes: Simulate committing changes with messages.​
Branch Management: Create, switch, and manage branches.​

http://kushagra.dev/blog/build-git-learn-git/

Commit History: Traverse and display the commit history of the current branch.​
Installation
To integrate Git.js into your project, include the Git.js script in your HTML file:​

html
Copy
Edit
<script src="path/to/git.js"></script>
Alternatively, if using a module system, import the Git class:​

javascript
Copy
Edit
import { Git } from 'path/to/git.js';
Usage
Below is an example of how to utilize Git.js:​

javascript
Copy
Edit
// Initialize a new repository
const repo = new Git("my_Demo_Repo");

// Commit changes
repo.commit("Initial commit!");
repo.commit("First feature added!");
repo.commit("Second feature added!");

// Display commit history
const log = repo.log();
console.log(log);

// Branch management
repo.checkout("new-feature-branch");
repo.commit("Developing new feature");

// Switch back to master
repo.checkout("master");
API Reference
Git Class
constructor(title: string): Initializes a new Git.js repository with the given title.​

commit(message: string): Commit: Creates a new commit with the provided message and updates the HEAD of the current branch.​

log(): Commit[]: Returns an array of commits representing the history of the current branch.​

checkout(branchName: string): this: Switches to an existing branch or creates a new one if it doesn't exist, setting it as the current branch.​

Commit Class
constructor(id: string, parent: Commit | null, message: string): Represents a commit object containing a unique identifier, a reference to the parent commit, and a commit message.​
Branch Class
constructor(title: string, commit: Commit | null): Represents a branch object containing a title and a reference to the latest commit in that branch.​
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your enhancements or bug fixes.​

Acknowledgments
This project was inspired by the need to understand and simulate Git's core functionalities using JavaScript.​
