## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<br>
Add brings the files that you wanted to add onto the stage. It doesn't add the files into the repository. Rather the files are in a sort of limbo waiting for the final okay. However, the repository is well aware of the files.
#### branch
<br>
This allows the developer to create a branch of the original file. It's basically a clone of the file that a developer can work on and add and finally commit. With branch, multiple developers can work on and change a single master file at the same time on their own branches. Later the developers can merge the branches to the original so that the final file has all the updated commits added. 
#### checkout
<br>
Checkout allows a developer to move from one repository to the other. By typing checkout "Name of the repository" the developer can move from one repository to the other. Of course if you are already in the repository that you want to checkout to, the console will let you know.

#### clone
<br>
Clone will allow you to download a copy of your repository and store it locally or on the internet based on where you would like to move the repo files.

#### commit
<br>
This is gits main command. It's the red button that allows you to initiate the code rocket you have developed. When you commit the changes you have made to the file, git takes a snapshot of everything made so far and 'commits' it. This will make everything you have coded and changes up to date with your most recent commit.

#### fetch
<br>
Git gathers the commits from a target branch that's not in your current branch and stores it into the local repository. Nothing more. There is no merging or anything other action outside of that. It just grabs things and brings it to the repo and keeps it there.
#### log
<br>
Log displays snapshots that have already been committed. It li785sts out the project history and allows you to filter and search for specific commits. With git log you can see the number of commits, if any commits have been pushed to the origin, all the commits that have affected a specific file, etc. It's a surprisingly powerful tool. 
#### merge
<br>
Merge allows you to take the branch you were working on and merge it together with the master branch so that the original file is all updated.

#### pull
<br>
Pull will basically fetch all recent commits from your most up-to-date repository into the local branch you are working on and merge it with the current branch. It's basically a fetch+merge in one. 
#### push
<br>
You basically push all the changes and updates you've been working on locally to your remote repository (ex. Github) so that you can see it there.

#### reset
<br>
Git Reset is the dangerous way to undo and work. Basically you're doing a permanent undo. You can reset commited work, or work in the staging area or in your local files.
 
#### rm
<br>
rm removes files from the working tree and from the index. You basically remove the file from the git control and from the system.

#### status
<br>
It gives you a status of everything in the working directory and the staging area. It doesn't give you a status update of the commited work.

## Release 4: Git Workflow

- Push files to a remote repository

cd to repository
git status
git add 
git commit -m "note"
git push

- Fetch changes

git fetch
git merge

- Commit locally

git add
git commit -m "note"


## Release 5: Reflection
My strategy for this challenge was to read all the recommended articles pertaining to this topic and apply it. It was a very straightforward approach but I had problems trying to conceptually understand what was happening with all the commands including the relationship between the terminal and the remote repositories. I really wanted to get a decent understanding on the concept of git so I used alot of resources to get somewhat of a handle on them such as atlassian.com, thelucid.com, help.github.com, and stackoverflow.com. I had questions on how everything was really working and how git connected from the terminal to a remote source. I just get the feeling that I need to keep reading up on git because there's like a vague spatial/path awareness that's not clicking with me at the moment. I have a better understanding of all the git concepts especially the difference between "fetch" and "pull" because I thought they were basically doing the same things but I didn't see the nuances. I feel somewhat confident but again I'm going to need to let what I've learned just stew for a bit in my head. I enjoyed working with the terminal and seeing the necessary results on my remote/local files. Nothing was really tedious except for the whole researching aspect, I kept reading different methods of doing the same thing but it would get very specific and advanced so much that I would end up getting lost in the explanations; this happened multiple times.
