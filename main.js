//imports

import * as THREE from 'three';

//scene initialization

import {
  camera,
  scene,
  renderer,
  createSphere,
  createCube,
  objectArray,
} from './init';

//no need to touch any of the code above

//You can change the camera position on the X, Y, or Z axis

camera.position.set(0, 0, 15);

const clock = new THREE.Clock();

//Any code to initialize your objects should go here
//Any object created using createSphere() or createCube()
//Will be added to an array named 'objectArray'

createSphere();
createCube();
createSphere();
createCube();
createSphere();

for (let i = 0; i < objectArray.length; i++) {
  const margin = 3;
  //move objects 'back' in the x direction so they are centered on the screen
  //this could also be done by the moving the camera.
  const mid = (objectArray.length - 1) * 0.5 * margin;
  objectArray[i].position.x = i * margin - mid;
}

const loop = () => {
  //You can use the clock get elapsed time method to get the time elapsed since the start of the program

  const elapsedTime = clock.getElapsedTime();

  //Any code that will need to be updated on each frame should go here
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].position.y = Math.sin(-elapsedTime * 0.6) * i * 2;
    objectArray[i].position.x = Math.cos(-elapsedTime * 0.6) * i * 2;
  }

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
