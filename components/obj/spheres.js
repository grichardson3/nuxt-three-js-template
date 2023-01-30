import scene from '../../components/scene/SceneSetup';
import { Mesh, SphereGeometry, MeshLambertMaterial } from "three";

const sphere = new Mesh(new SphereGeometry(1, 32, 32), new MeshLambertMaterial({ color: "#888"}))
sphere.castShadow = true;

// scene.add(sphere);