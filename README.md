# Electron, Semantic-UI Example
Start developing Electron application easily with the included tooling.

Using gulp, webpack, semantic-ui, react, reflux, lowdb, less, babel(es6)

# Install
```
git clone git@github.com:ironhee/electron-semantic-ui-example.git
```
# Setup

1. Install [NVM](https://github.com/creationix/nvm)
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.4/install.sh | bash
```

2. Install node 0.11.13 ([Electron native-node-module-compatibility](http://electron.atom.io/docs/v0.27.0/tutorial/using-native-node-modules/#native-node-module-compatibility))
```
nvm install 0.11.13
nvm use 0.11.13
```

4. Install [Bower](https://github.com/bower/bower)
```
npm install -g bower
```

3. Install Packages
```
npm install
bower install
```

4. Install [Gulp](https://github.com/gulpjs/gulp)
```
npm install -g gulp
```

5. Build Source
```
gulp build
```

# Develop
Electron watch: ```npm run dev```

Source watch ```gulp watch```
