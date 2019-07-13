import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import vertShader from './shader.vert';
import fragShader from './shader.frag';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

var renderer = new THREE.WebGLRenderer({
  canvas
});

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
var controls = new OrbitControls( camera, renderer.domElement );
camera.position.set(0, 10, 10);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);
controls.update();

initPlane();

function initPlane() {
  const waterWidth = 10;
  const waterHeight = 10;
  const subdivs = 5;
  var geometry = new THREE.PlaneBufferGeometry(waterWidth, waterHeight, subdivs, subdivs);
  var material = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        value: 1.0
      }
    },
    vertexShader: vertShader,
    fragmentShader: fragShader,
  });
  var planeMesh = new THREE.Mesh(geometry, material);
  scene.add(planeMesh);
}

// Responsive canvas
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

function animate(time) {
  time *= 0.001;

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
	}
	
	controls.update();

  renderer.render(scene, camera);
  // Next frame
  requestAnimationFrame(animate);
}
animate();