import scene from '../../components/scene/SceneSetup';
import { SpotLight, AmbientLight } from "three";

const light = new SpotLight("#ff9999");
light.position.set(5, 2.5, 3.75);
light.intensity = 1;
light.penumbra = .25;
light.castShadow = true;

// const ambientLight = new AmbientLight("#999");

scene.add(light);
// scene.add(ambientLight);