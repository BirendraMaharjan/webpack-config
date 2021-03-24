echo "# webpack-config" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/BirendraMaharjan/webpack-config.git
git push -u origin main

npm init -y

#### webpack

npm i -D webpack webpack-cli webpack-dev-server
npm install or npm i

#### babel

npm i -D babel-loader @babel/core @babel/preset-env

### node env

npm i -D cross-env
