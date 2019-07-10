# <<GIT Branch and Merge Conflict Scenario 정리>>
## 초기 Setting
* 초기에 빈 폴더를 생성해서 git init으로 초기화
* Initial state에는 tempfile이 존재
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat tempfile
code space of initial tempfile
==============================

==============================
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git init
Initialized empty Git repository in /home/seungho/Desktop/co_op/gitpractice/.git/
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git status
On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
	new file:   tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'initial state'
[master (root-commit) aeb21f4] initial state
 1 file changed, 4 insertions(+)
 create mode 100644 tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git log
commit aeb21f45f7e50f0bc05e680ae5dea724fa30c95b (HEAD -> master)
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:20:10 2019 -0700
    initial state
```

## 1. CONFLICT(content)
: 서로 다른 branch에서 같은 파일의 같은 부분을 수정했을 경우 Merge Conflict 발생
① 새로운 branch new 생성
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git branch new
```

② new branch로 이동
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout new
```

③ new branch에서 tempfile 수정
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat tempfile
code space of initial tempfile
==============================
tempfile edited by new
==============================
```

③ new branch에서 commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'edit tempfile by new'
[new e78e37d] edit tempfile by new
 1 file changed, 1 insertion(+), 1 deletion(-)
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git log
commit e78e37d24ac08895d4f7d2fa8a33d28f7ab79a90 (HEAD -> new)
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:29:42 2019 -0700
    edit tempfile by new
```

④ master branch로 이동
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout master
Switched to branch 'master'
```

⑤ master branch에서 tempfile 수정
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat tempfile
code space of initial tempfile
==============================
tempfile edited by master
==============================
```
⑥ master branch에서 commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'edit tempfile by master'
[master 6a31f7f] edit tempfile by master
 1 file changed, 1 insertion(+), 1 deletion(-)
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git log
commit 6a31f7fc2277523a4a77236a9a1399bd289a929a (HEAD -> master)
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:34:23 2019 -0700
    edit tempfile by master
```

⑦ new branch를 merge 시도 → Conflict 발생
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git merge new
Auto-merging tempfile
CONFLICT (content): Merge conflict in tempfile
Automatic merge failed; fix conflicts and then commit the result.
```

⑧ tempfile로 conflict 내용 확인
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat tempfile
code space of initial tempfile
==============================
<<<<<<< HEAD
tempfile edited by master
=======
tempfile edited by new
>>>>>>> new
==============================
```

⑨ tempfile수정
 - 해당 과정에서는 conflict 부분을 삭제해 주었지만 실제 경우에는 conflict가 발생하지 않도록 file을 수정하는 작업이 필요.
 ```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat tempfile
code space of initial tempfile
==============================
tempfile edited by master
tempfile edited by new
==============================
```

⑩ 변경된 tempfile commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'conflict handle'
[master 24b667c] conflict handle
```

⑪ New branch 삭제 및 status, log 확인
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git branch -d new
Deleted branch new (was e78e37d).
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git status
On branch master
nothing to commit, working tree clean
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git log
commit 24b667cfabb649c07c35ee27626f404fcdf654d6 (HEAD -> master)
Merge: 6a31f7f e78e37d
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:42:10 2019 -0700
    conflict handle
commit 6a31f7fc2277523a4a77236a9a1399bd289a929a
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:34:23 2019 -0700
    edit tempfile by master
commit e78e37d24ac08895d4f7d2fa8a33d28f7ab79a90
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:29:42 2019 -0700
    edit tempfile by new
commit aeb21f45f7e50f0bc05e680ae5dea724fa30c95b
Author: Seungho Yang <kidzmon@naver.com>
Date:   Wed Jul 3 01:20:10 2019 -0700
    initial state
```

## 2. CONFLICT(modify/deleted)
: 한 branch에서는 파일을 삭제하고 한 branch에서는 파일을 수정했을 경우 Merge conflict 발생
① 새로운 branch new 생성
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git branch new
```

② master branch에서 tempfile 삭제 후 commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# rm tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# ls -al
total 12
drwxr-xr-x 3 root root 4096 Jul  3 01:52 .
drwxr-xr-x 3 root root 4096 Jul  3 01:49 ..
drwxr-xr-x 8 root root 4096 Jul  3 01:50 .git
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'remove tempfile by master'
[master a71c4d8] remove tempfile by master
 1 file changed, 4 deletions(-)
 delete mode 100644 tempfile
 ```

③ new branch로 이동 후 tempfile 수정
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout new
Switched to branch 'new'
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim tempfile
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat tempfile
code space of initial tempfile
==============================
edit tempfile by new
==============================
```

④ new branch commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'edit tempfile by new'
[new 3924b4d] edit tempfile by new
 1 file changed, 1 insertion(+), 1 deletion(-)
 ```

⑤ Master branch로 이동 후 merge 시도 → Conflict 발생
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout master
Switched to branch 'master'
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git merge new
CONFLICT (modify/delete): tempfile deleted in HEAD and modified in new. Version new of tempfile left in tree.
Automatic merge failed; fix conflicts and then commit the result.
```

## 3. CONFLICT(rename/rename)
: 한 파일을 서로 다른 branch에서 각각 이름을 변경하였을 경우 Merge conflict 발생
① 새로운 branch new 생성
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git branch new
```

② new branch로 이동
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout new
```

③ new branch에서 tempfile 이름 수정
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# mv tempfile tempfile_new
```

④ new branch commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'edit tempfile name by new'
[new 2fe3de4] edit tempfile name by new
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename tempfile => tempfile_new (100%)
 ```

⑤ Master branch로 이동 후 tempfile 이름 수정
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout master
Switched to branch 'master'
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# mv tempfile tempfile_master
```

⑥ Master branch commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'edit tempfile name by master'
[master 744720e] edit tempfile name by master
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename tempfile => tempfile_master (100%)
 ```

⑦ Merge 시도 → Conflict 발생
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git merge new
CONFLICT (rename/rename): Rename "tempfile"->"tempfile_master" in branch "HEAD" rename "tempfile"->"tempfile_new" in "new"
Automatic merge failed; fix conflicts and then commit the result.
```

## 4. CONFLICT(add/add)
: 서로 다른 branch에서 같은 이름의 파일을 생성할 경우 Merge conflict 발생
① 새로운 branch new 생성
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git branch new
```

② new branch로 이동
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git checkout new
```

③ new branch에서 temp1 파일 생성
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim temp1
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat temp1
==============================
code space of new branch
==============================
```

④ new branch commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'make temp1 in new'
[new 053acb1] make temp1 in new
 1 file changed, 3 insertions(+)
 create mode 100644 temp1
 ```

⑤ master branch로 이동 후 같은 이름의 temp1 파일 생성
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# vim temp1
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# cat temp1
==============================
code space of master branch
==============================
```

⑤ master branch commit
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git add .
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git commit -a -m 'make temp1 in master'
[master 867ed41] make temp1 in master
 1 file changed, 3 insertions(+)
 create mode 100644 temp1
```

⑥ Merge 시도 → Conflict 발생
```
root@ubuntu:/home/seungho/Desktop/co_op/gitpractice# git merge new
Auto-merging temp1
CONFLICT (add/add): Merge conflict in temp1
Automatic merge failed; fix conflicts and then commit the result.
```
