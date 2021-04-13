echo "# webpack-config" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/BirendraMaharjan/webpack-config.git
git push -u origin main

### npm init (-y for every this for yes)

npm init -y

#### webpack

npm i -D webpack webpack-cli webpack-dev-server
npm install or npm i

#### babel

npm i -D babel-loader @babel/core @babel/preset-env

#### node env

npm i -D cross-env

#### css

npm i -D css-loader mini-css-extract-plugin

#### scss

npm i -D sass sass-loader

### post css (for brwoser prefix)

npm i -D postcss postcss-preset-env postcss-loader
