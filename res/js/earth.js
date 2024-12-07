// Setup Three.js scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    antialias: true, 
    alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.getElementById('earth-container').appendChild(renderer.domElement);

// Add Earth sphere
const geometry = new THREE.SphereGeometry(1, 32, 32);
const texture = new THREE.TextureLoader().load("/static/images/earth.jpg");
const material = new THREE.MeshStandardMaterial({
    map: texture,
    emissive: 0x444444,
    emissiveIntensity: 0.5
});
const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(5, 3, 5).normalize();
scene.add(light);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

camera.position.z = 3;

// Scroll event to handle horizontal rotation of Earth
let scrollY = 0;
window.addEventListener('scroll', () => {
    scrollY = window.scrollY; // Get the scroll position
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Apply rotation based on scroll position
    earth.rotation.y = scrollY * 0.01; // Adjust rotation speed here

    // Apply horizontal movement based on scroll
    earth.position.x = (scrollY * 2) / window.innerHeight - 1; // Move horizontally with scroll

    // Apply zoom effect based on scroll position
    const scale = Math.max(0.5, Math.min(1.5, 1 + scrollY * 0.001)); // Limit scale between 0.5 and 3
    earth.scale.set(scale, scale, scale);

    renderer.render(scene, camera);
}

animate();

// Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Manage text visibility based on scroll position
const earthText = document.getElementById('earth-text');
const earthScene = document.querySelector('.earth-scene');

window.addEventListener('scroll', () => {
    const rect = earthScene.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate how much of the section is in the viewport
    const visibleRatio = Math.max(0, Math.min(1, 1 - Math.abs(rect.top / viewportHeight)));

    // Apply visibility based on scroll
    if (visibleRatio > 0.1) {
        earthText.style.opacity = visibleRatio;
        earthText.style.transform = `translateY(-50%) translateX(${(1 - visibleRatio) * -20}px)`;
    } else {
        earthText.style.opacity = 0;
    }
});
