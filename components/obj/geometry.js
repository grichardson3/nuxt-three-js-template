import scene from '../../components/scene/SceneSetup';
import {
    BoxGeometry, CapsuleGeometry, CircleGeometry, ConeGeometry, CylinderGeometry, DodecahedronGeometry, EdgesGeometry, ExtrudeGeometry, IcosahedronGeometry, LatheGeometry, Mesh, OctahedronGeometry, PlaneGeometry, PolyhedronGeometry, RingGeometry, ShapeGeometry, SphereGeometry, TetrahedronGeometry, TorusGeometry, TorusKnotGeometry, TubeGeometry, WireframeGeometry
} from "three"; // Geometry
import {
    LineBasicMaterial, LineDashedMaterial, Material, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, PointsMaterial, RawShaderMaterial, ShaderMaterial, ShadowMaterial, SpriteMaterial
} from "three" // Materials

// Box
const box = new Mesh(new BoxGeometry(1, 1, 1), new MeshPhysicalMaterial({
    color: "#999",
    metalness: 0,
    roughness: 0.25,
    clearcoat: 1.0,
    clearcoatRoughness: 1.0,
    reflectivity: 1.0
}));
box.position.set(2, 0, 2);
box.castShadow = true;
scene.add(box);

// Capsule
const capsule = new Mesh(new CapsuleGeometry(.5 /* radius */, .5 /* length */, 16 /* capSubdivisions */, 32 /* radialSegments */), new MeshToonMaterial({
    color: "#ff99ff",
    metalness: 0,
    roughness: 0.25,
    clearcoat: 1.0,
    clearcoatRoughness: 1.0,
    reflectivity: 0.3
}));
capsule.position.set(-2, 0, 2);
capsule.castShadow = true;
scene.add(capsule);

// console.log(scene);