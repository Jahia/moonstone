# Contributing

Jahia respect some rules before committing. If your are in the company, you must respect these rules.
If your are a generous contributor, you are encouraged to follow those rules, but every help is accepted.

-   [Development Flow](#development-flow)
-   [Coding Rules](#rules)
-   [Commit Message Guidelines](#commit)

## <a name="development-flow"></a> Development flow

Each released Jahia product has its own lifecycle. Each release has a maintenance lifecycle too.

In order to simplify, the release process we use respects the [Trunk Based Git Flow](https://trunkbaseddevelopment.com/).

The main branch on each of Jaha's reposirory is named _master_. This is our trunk.

![Diagram trunk base](https://trunkbaseddevelopment.com/trunk1.png)

### Pull request

As team at Jahia is composed of more than two people, as Trunk Based documentation say, you cannot directly push commit to _master_ branch. You have to create a branch, code by respecting [Coding Rules](#rules), [Commit](#commit) and push. At this point, your code will be reviewed by an employee of Jahia.

In case of fixes requested by the reviewer, you should:

-   Make the required updates.
-   Re-run test, lint and make sur your code is OK
-   Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

```
    git rebase master -i
    git push -f
```

Then another review will occur and you pull request will probably be accepted.

### Forks

Even if you don't have write access to the repositories, you can still do a Pull Request to propose your patch. You need to create a fork of the repositories you want to change. Once your fork is created, you will use it to push your changes and create the Pull Request. Pull Request generic usage can be seen at : https://help.github.com/articles/using-pull-requests/

On repository page, click on "Fork" button on the top-right. Jahia Employees can directly fork private repositories, they can't make them public accidentally.

### Release process

Each Release should start by creating a branch named according to the release version. All version (MAJOR, MINOR) should appear int he branch name except the PATCH version.

A git tag should be created as well with the same name plus the PATCH version in it.

If a fix has to be done, you have to reproduce it on the master branch, fix it, then do the pull request. If the fix cannot be done on master, because the code has been refactored, the fix can be done directly on the release branch.

After the fix is on the master branch you can cherry-pick the commit to the release branch and release the fix to a previous version.

We usually have at most two major releases branches maintained at the same time. In case we have two branches, fixes will be cherry-picked on both branches.

## <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as you are working:

-   Code should compile
-   Respect rule of the Linter
-   Test should pass
-   Code must be consistent with the rest of the code of the repository (big refactoring must be in a specific commit)
-   Code should be reviewed by someone from Jahia

### CSS rules

Each component may have a single scss file associated to a component, named like the component, which need to be imported as a classnames mapping object into the component : `import styles from './[Component].scss';
`. You should always takes the classnames from this object as the names will be modified at compilation time.

List of classes applied on an element is generated with [clsx](https://www.npmjs.com/package/clsx).

CSS files follow BEM like rules, with some syntactic modification : A class must follow the following convention : `[Block]_[Element].[Modifier]`, (with `_[Element]` and `.[Modifier]` being optional). 
Note that using `.` as separator for [Modifier] actually declares a separate class, but you should not use a `.[Modifier]` rule directly.

- [Block] is always the component name - so all classes inside a component scss file must start with the same [Block] prefix. The `[Block]` class is unconditionnaly set on the root element of the component.
- [Element] is a name describing an internal element of the component. `[Block]_[Element]` class is unconditionnally set on this (these) element(s). 
- [Modifier] is the name variant, that can be conditionnaly applied or not on an element. A `[Modifier]` class is added based on internal conditions on any element, along with the `[Block]` or `[Block]_[Element]` class.

Global classes are available for flexbox layout, and can be found in `globals` folder. 

Colors and spacings should be defined using only the variables defined in `tokens` folder. 

## <a name="commit"></a> Commit Message Guidelines

Jahia rely a lot on Jira for development process.

### Commit Message Format

Each commit message consists of a header and a body. The header has a special format that includes a _TaskID_ and a _subject_:

```
<TaskID>: <subject>
<BLANK LINE>
<body>
```

Only the _header_ is mandatory.

The _TaskID_ is the task from Jira, for example **BACKLOG-10153** or **QA-11717**.

The _subject_ contains a succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize the first letter
-   no dot (.) at the end

#### Samples

```
BACKLOG-10153: handle simple click in image picker
```

or with more details:

```
BACKLOG-10153: handle simple click in image picker

Handle simple click meant to add the selectable variant to Card in the design system
```
