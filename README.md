# Gifts For Less

## Deploy Process

### Set up remotes
```
git remote -v
origin	https://github.com/chaz9127/gifts_for_less.git (fetch)
origin	https://github.com/chaz9127/gifts_for_less.git (push)
production	https://git.heroku.com/gifts-for-less.git (fetch)
production	https://git.heroku.com/gifts-for-less.git (push)
staging	https://git.heroku.com/gifts-for-less-staging.git (fetch)
staging	https://git.heroku.com/gifts-for-less-staging.git (push)
```

### Push to staging

```
git push origin development

git checkout staging

git merge development

git push origin staging

git push staging staging:master
```

### Push to Production
```
git checkout master

git merge staging

git push origin master

git push production master:master
```
