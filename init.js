/**
 * DON'T TOUCH!!
 */

import './style.css';
import * as THREE from 'three';
const canvas = document.querySelector('.webgl');
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const scene = new THREE.Scene();

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height
);
scene.add(camera);

export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  renderer.setSize(sizes.width, sizes.height);
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
});

export const objectArray = [];

const sphereGeometry = new THREE.SphereBufferGeometry(0.5, 32, 32);
const boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();

export const createSphere = () => {
  const sphere = new THREE.Mesh(sphereGeometry, material);
  scene.add(sphere);
  objectArray.push(sphere);
};

export const createCube = () => {
  const cube = new THREE.Mesh(boxGeometry, material);
  scene.add(cube);
  objectArray.push(cube);
};
