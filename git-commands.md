# Git Commands

// ...existing code...

## Merge Branch

To merge a Git branch into another branch, use the following commands:

```sh
git checkout <target-branch>
git merge <source-branch>
```

Replace `<target-branch>` with the name of the branch you want to merge into, and `<source-branch>` with the name of the branch you want to merge.

### Example

To merge a branch named `feature-branch` into `main`, use:

```sh
git checkout main
git merge feature-branch
```

This command checks out the `main` branch and merges the `feature-branch` into it.
