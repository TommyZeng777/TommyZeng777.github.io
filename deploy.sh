#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github pages
echo 'tommyzeng.com' > CNAME

# git init
# git add .
# git commit -m 'deploy'


# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# git remote add origin git@github.com:TommyZeng777/TommyZeng777.github.io.git
# git branch -M main
# git push -f git@github.com:TommyZeng777/TommyZeng777.github.io.git main:gh-pages

# cd -

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy 脚本部署'
  githubUrl=git@github.com:TommyZeng777/TommyZeng777.github.io.git
  # giteeUrl=git@gitee.com:kele-bingtang/Kele-Bingtang.git
else
  msg='来自 Github actions 的自动部署'
  githubUrl=https://TommyZeng777:${GITHUB_TOKEN}@github.com/TommyZeng777/TommyZeng777.github.io.git
  git config --global user.name "TommyZeng777"
  git config --global user.email "tommyzeng1031@gmail.com"

fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到 Github gh-pages 分支


# 退回开始所在目录
cd - 
# 删除打包项目
rm -rf docs/.vuepress/dist


# deploy to coding pages
# echo 'www.xugaoyi.com\nxugaoyi.com' > CNAME  # 自定义域名
# echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

# if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
#   codingUrl=git@e.coding.net:xgy/xgy.git
# else
#   codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/xgy/xgy.git
# fi
# git add -A
# git commit -m "${msg}"
# git push -f $codingUrl master # 推送到coding


