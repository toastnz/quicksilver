/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

import * as THREE from 'three';
import Stats from 'stats-js';

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

/** Class representing an animation */
class Animation {
    constructor() {

        // Create a scene, that will hold all our elements such as objects, cameras and lights.
        this.scene = new THREE.Scene();

        // Create a camera, which defines where we're looking at.
        this.camera = new THREE.PerspectiveCamera(75, this.getAspect(), 0.1, 1000);

        // Create a render and set the size
        this.initRenderer();

        // Initialise the main animation sequence
        this.init();

    }


    /**
     * Initialise the statistics module
     *
     * @param {number} [type=0] 0: fps, 1: ms, 2: mb, 3+: custom
     * @returns object 
     * @memberof Animation
     */
    initStats(type = 0) {
        this.stats = new Stats();
        this.stats.showPanel(type);
        document.body.appendChild(this.stats.dom);
    }


    /**
     * Initialise the renderer object
     *
     * @param {*} [props={}]
     * @memberof Animation
     */
    initRenderer(props = {}) {

        let options = Object.assign(props, { antialias: true, canvas: document.getElementById('animation') })

        this.renderer = new THREE.WebGLRenderer(options);

        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMapSoft = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        this.renderer.setClearColor(new THREE.Color(0x000000));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    init() {

        // Initialise the statistics module
        this.initStats();

        this.renderer.setPixelRatio(2);
        this.renderer.setSize(window.innerWidth, window.innerHeight);


        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshBasicMaterial({ color: 0x333333 });
        var cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);

        this.camera.position.z = 15;

        this.render();

    }


    /**
     * Get's the aspet ratio of the current scene
     *
     * @returns {number} the ratio 
     * @memberof Animation
     */
    getAspect() {
        return window.innerWidth / window.innerHeight;
    }



    /**
     * Render the scene
     *
     * @memberof Animation
     */
    render() {
        this.stats.update();
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

 
}

// let _animation = new Animation();