# 把网站分享给朋友

GitHub 保存代码，GitHub Pages 提供能直接浏览的网站链接。当前只做好了本地配置，还没有上传或发布。

## 1. 创建仓库

登录 https://github.com/new ，仓库名建议 `double-yolk-chicks`，选 Public，先不要勾选 README、.gitignore 或 license，然后创建。

免费 GitHub Pages 使用公开仓库，网站和上传的素材也会公开。

## 2. 上传项目

在本项目目录打开终端，依次运行下面的命令，把 `你的用户名` 换成实际 GitHub 用户名。首次使用 Git 时，如提示设置姓名和邮箱，请按提示设置。

```sh
git init
git add .
git commit -m "Initial Double Yolk Chicks website"
git branch -M main
git remote add origin https://github.com/你的用户名/double-yolk-chicks.git
git push -u origin main
```

GitHub 若要求登录，请使用 GitHub Desktop、GitHub CLI 或个人访问令牌完成认证；不是填写普通账号密码。也可以使用 GitHub Desktop 将此文件夹初始化为仓库，再用 Publish repository 上传（取消 Keep this code private）。

`.gitignore` 已排除 node_modules 和 dist，不要手工上传它们。`drawings/` 是原始素材目录；若不想公开它，可在上传前将 `drawings/` 加入 `.gitignore`。网站实际读取 `public/artwork/`，该文件夹需要上传。

## 3. 开启 GitHub Pages

进入仓库 → Settings → Pages，在 Build and deployment 下把 Source 选为 GitHub Actions。

## 4. 手动发布

进入 Actions → Publish website to GitHub Pages → Run workflow → main → Run workflow。

等待运行完成，回到 Settings → Pages 查看网址。一般为：

`https://你的用户名.github.io/double-yolk-chicks/`

把这个网址发给朋友。`127.0.0.1` 的本地地址不能发给别人访问。

这个项目的工作流仅在你点击 Run workflow 时发布，不会因提交自动公开更新。以后修改后先提交并推送，再手动运行一次即可。

配置已使用相对资源路径，支持 GitHub Pages 仓库子目录。
