# threejs-glsl-dev

Built with:
* [webpack](https://github.com/webpack/webpack)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [threejs](https://github.com/mrdoob/three.js)
* [glslify-loader](https://github.com/glslify/glslify-loader)

This is a ready-to-use base to build a threejs project with custom shaders, written as separate files (makes it possible to use a linter).

Install by downloading and running: ```npm install```

Start live-reload server with: ``` npm start ```

Build (in `/dist` folder) with: ```npm run build``` 

Shaders can be imported in `index.js` by doing: `import shader from './shader.vert'`