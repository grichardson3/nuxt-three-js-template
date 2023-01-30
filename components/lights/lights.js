import scene from '../../components/scene/SceneSetup';
import { SpotLight, AmbientLight } from "three";

const light2 = new SpotLight("#00ff00");
light2.position.set(-10, 0, 4);
light2.intensity = .33;
light2.penumbra = .25;
light2.castShadow = true;

// const ambientLight = new AmbientLight("#999");

scene.add(light2);
// scene.add(ambientLight);