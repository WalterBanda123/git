

(function () {
    class Git {
        constructor(title) {
            this.title = title
            this.lastCommit = -1
            this.branches = []
            const master = new Branch("master", null)
            this.branches.push(master)
            this.HEAD = master
        }
    }

    class Commit {
        constructor(id, parent, message) {
            this.id = id
            this.parent = parent
            this.message = message
        }
    }

    Git.prototype.commit = function (message) {
        const _id = crypto.randomUUID()
        const commit = new Commit(_id, this.HEAD.commit, message);
        this.HEAD.commit = commit
        return commit;
    }

    Git.prototype.log = function () {
        let commit = this.HEAD.commit
        const history = []

        while (commit !== null) {
            history.push(commit)
            commit = commit.parent
        }
        return history
    }

    Git.prototype.checkout = function (branchName) {
        for (const branch of this.branches) {
            if (branch.title === branchName) {
                console.log("Switched to existing branch " + branchName)
                this.HEAD = branch
                return this
            }
        }

        const newBranch = new Branch(branchName, this.HEAD.commit)
        this.branches.push(newBranch);
        this.HEAD = newBranch
        console.log("Switched to new branch " + newBranch.title)
        return this
    }

    class Branch {
        constructor(title, commit) {
            this.title = title;
            this.commit = commit
        }
    }

    this.Git = Git
})()

// console.log("Git.log() my_Demo_Repo")
const repo = new Git("my_Demo_Repo")
repo.commit("Initial commit!")
repo.commit("first commit!")
repo.commit("second commit!")

console.log(repo)

const log = repo.log();
console.log(log)
