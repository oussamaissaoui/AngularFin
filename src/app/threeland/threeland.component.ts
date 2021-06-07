import { Component, OnInit,AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Stats from 'three/examples/jsm/libs/stats.module';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';



      import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
      import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
			import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';

      

      import { CSS3DRenderer, CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { Router } from '@angular/router';




@Component({
  selector: 'app-threeland',
  templateUrl: './threeland.component.html',
  styleUrls: ['./threeland.component.css']
})


export class THREElandComponent implements OnInit {

  constructor(private renderertwo: Renderer2, private el: ElementRef, private router:Router) { }


  Addbutton(){
    alert('hhhhh')
  };

  
  ActivateGlitch:boolean=false;

  ngOnInit(): void {

    let stats;
    let obiii;

    let glitchPass;

			

			let objects;

			let mouseX = 0, mouseY = 0;

			let windowHalfX = window.innerWidth / 2;
			let windowHalfY = window.innerHeight / 2;

      function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX ) * 10;
				mouseY = ( event.clientY - windowHalfY ) * 10;
        

			}

			document.addEventListener( 'mousemove', onDocumentMouseMove );

      
      
      
      
      




    const scene = new THREE.Scene();
    //scene.background = new THREE.Color( 0xffffff )
    //scene.fog = new THREE.Fog( 0xffffff, 1, 1000 ); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //scene.fog = new THREE.FogExp2( 0xffffff, 0 );
      //scene.add( new THREE.AmbientLight( 0x222222 ) );

     let  light = new THREE.DirectionalLight( 0xffffff );
				light.position.set( 2, 2, 1 );
        
        //scene.add( light );
				
        
        const Alight = new THREE.AmbientLight( "rgb(46, 46, 46)" ); // soft white light
        Alight.intensity=0.4;
        
       scene.add( Alight );


    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 85;


   
    
    
    /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


const canvas: any = document.querySelector('#canvas');
    


const renderer = new THREE.WebGLRenderer({ canvas });



renderer.setSize(window.innerWidth, window.innerHeight);
    
    
    renderer.setPixelRatio(window.devicePixelRatio);


    let controls = new OrbitControls( camera,renderer.domElement);  ///// ORBITTTTT
    



    /////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


let loader3 = new THREE.FontLoader();
loader3.load( '../../assets/helvetiker_regular.typeface.json', function ( font ) {

  var text1 = new THREE.TextGeometry( "User", {

    font: font,

    size: 6,
    height: 2,
    curveSegments: 12,

    bevelThickness: 1,
    bevelSize: 1,
    bevelEnabled: false

  });
  var text2 = new THREE.TextGeometry( "Visitor", {

    font: font,

    size: 6,
    height: 2,
    curveSegments: 12,

    bevelThickness: 1,
    bevelSize: 1,
    bevelEnabled: false

  });




  
  const mat = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
  let textMaterial = new THREE.MeshPhongMaterial( 
    { color:"rgb(255, 255, 255, 0.198)", specular: "rgb(255, 255, 255, 0.198)" }
  );

  var mesh = new THREE.Mesh( text1, textMaterial );
  mesh.position.x=35;
  mesh.position.y=-10;
  mesh.position.z=-20;

  var mesh2 = new THREE.Mesh( text2, textMaterial );
  mesh2.position.x=-60;
  mesh2.position.y=-10;
  mesh2.position.z=4;

  

  scene.add( mesh,mesh2 );
 

});  




  /////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  

  
   

    let composer = new EffectComposer( renderer );
    composer.addPass( new RenderPass( scene, camera ) );

    glitchPass = new GlitchPass();
    
    //glitchPass.effectGlitch.renderToScreen = true
    
    console.log( 'asba',glitchPass)
    
    glitchPass.goWild=false;
    glitchPass.clear=false;

    

   let ActivateGlitch : boolean=false;

   composer.addPass( glitchPass );
   
   if (this.ActivateGlitch)
  {    };




/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

  //const interaction = new Interaction(renderer, scene, camera);
  



/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
  

	  const loader = new OBJLoader();
			//	loader.load( '../../assets/247_House 15_obj.obj', function ( obj ) {
          loader.load( '../../assets/WaltHead.obj', function ( obj ) {
          


				let object = obj;
        obiii=obj;
					object.scale.multiplyScalar( 0.8   );
					
          
          object.position.y = -30;
          object.position.x = 0;
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          object.name='ob';
          
          
          
          //object.position.x=2;
          //object.position.y=2;
          //object.position.z=1;
					
          
          scene.add( object );
console.log('ooooooooooooob',object)


				} 
        
        );


/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

        const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );

        let light1 = new THREE.PointLight( 0xff0040, 2, 50 );
				light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
				scene.add( light1 );

				let light2 = new THREE.PointLight( 0x0040ff, 2, 50 );
				light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
				scene.add( light2 );

				let light3 = new THREE.PointLight( 0x80ff80, 2, 50 );
				light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
				scene.add( light3 );

				let light4 = new THREE.PointLight( 0xffaa00, 2, 50 );
				light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
				scene.add( light4 );

        let light5 = new THREE.PointLight( 0xffaa00, 2, 50 );
				light5.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x000000} ) ) );
        light5.intensity=0.8;
				scene.add( light5 );

        

        
        //console.log(interaction)

        function setDelay(i) {
          setTimeout(function(){
            alert('zeb')
          }, 10000);}

          //setDelay(5);


        

          //Addbutton();
          

          //alert('asba')
        
    
    
    
   

      

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function onMouseMove( event ) { 
  // calculate mouse position in normalized device coordinates 
  // (-1 to +1) for both components 
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1; 
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1; 
  
} 













  

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    
    //document.body.appendChild(renderer.domElement);


    //let canv=this.el.nativeElement.getElementsByTagName('canvaas');
    

    let ff = this.el.nativeElement.children;
    console.log('cannnNNNNNNNNNNNNNnnnnnnnn',ff)
    //ff.setAttribute('style', ' position: absolute; z-index: 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999;');



    /*
    const button = this.renderertwo.createElement('button');
const buttonText = this.renderertwo.createText('Click me');

this.renderertwo.appendChild(button, buttonText);

let canv=this.el.nativeElement.getElementsByTagName('canvas');
this.renderertwo.appendChild( button,button); // use this.el.nativeElement to insert into template root
//this.renderertwo.listen(button, 'click', () => this.addNewButton());
console.log('hhhhhhhhhhhhhh',canv);*/

 
    

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


  

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////


    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });


    const cube = new THREE.Mesh(geometry, material);
    cube.position.x=3;
    cube.position.y=3;
    cube.position.z=1;
    
   //scene.add(cube);
   
 

   


   
 
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



    const animate = function () {


      requestAnimationFrame(animate);

      window.addEventListener( 'click', onMouseMove,false );
      

        // update the picking ray with the camera and mouse position
        raycaster.setFromCamera( mouse, camera );
      
        // calculate objects intersecting the picking ray
        const intersects:any = raycaster.intersectObjects( scene.children );

        // IMMMMMMPOOOORTAAAAANNNNTTTT as fuck !!!!!!!!!!! add second parameter 'true' lel var intersect bech tdétecti all objcets
      
        

        for ( let i = 0; i < intersects.length; i ++ ) {
      
          console.log( intersects[ i ].distance ); 
          
          if (intersects[i].distance>90 && intersects[i].distance<95 ){
            
            window.location.href = 'http://localhost:4200/home';
            //this.router.navigateByUrl(`www.google.com`);
            
           //window.location.reload()
            //console.log('zabzoub')
            //alert('zeb2')
           
            function setDelay() {
              //glitchPass.curF-=6;
              //composer.addPass( glitchPass )
              //ActivateGlitch=true;
             // console.log(ActivateGlitch)
             //alert('zeb')
              
             setTimeout(function(){
              
                
              }, 1000);}
    
            //setDelay();
           
          }

          if (intersects[i].distance>99){
            
            //alert("INNNNNFFF 9000 User")
            
            
            
            //this.router.navigate('AdList');
            
            //this.router.navigateByUrl('www.google.com');
            
            
            //this.router.navigateByUrl(`www.google.com`);
            
            window.location.href = 'http://localhost:4200/login';
            //console.log('zabzoub')
            //alert('zeb2')
           
            function setDelay() {
              //glitchPass.curF-=6;
              //composer.addPass( glitchPass )
              //ActivateGlitch=true;
             // console.log(ActivateGlitch)
             //alert('zeb')
              
             setTimeout(function(){
              
                
              }, 1000);}
    
            //setDelay();
           
          }
         
         

          //intersects[ i ].distance.set(30) 
          //intersects[ i ].material.color.set( 0xff0000 );
      
        }
        
      
        
        //renderer.render( scene, camera );
      
      //console.log(intersects)

      



      const time = Date.now() * 0.0005;
				const delta = new THREE.Clock().getDelta();

				//obiii.rotation.y +=mouseY*Math.random()*0.000008;
        
        obiii.rotation.x+=mouseY*0.0000003;
        obiii.rotation.y =mouseX*0.00031;


                                                        //glitchPass.curF=22;
        //obiii.rotation.z=mouseY*0.00008;

				light1.position.x = Math.sin( time * 0.7 ) * 30;
				light1.position.y = Math.cos( time * 0.5 ) * 40;
				light1.position.z = Math.cos( time * 0.3 ) * 30;


       light5.position.x=mouseX*0.0075;
       light5.position.y=-mouseY*0.01;
       light5.position.z=22;


		




				light2.position.x = Math.cos( time * 0.3 ) * 30;
				light2.position.y = Math.sin( time * 0.5 ) * 40;
				light2.position.z = Math.sin( time * 0.7 ) * 30;

				light3.position.x = Math.sin( time * 0.7 ) * 30;
				light3.position.y = Math.cos( time * 0.3 ) * 40;
				light3.position.z = Math.sin( time * 0.7 ) * 30;

				light4.position.x = Math.sin( time * 0.3 ) * 30;
				light4.position.y = Math.cos( time * 0.7 ) * 40;
				light4.position.z = Math.sin( time * 0.7 ) * 30;







      cube.rotation.x += 0.01;
      //cube.rotation.x = mouseX/1500;
      //cube.rotation.y=mouseY/1500;
      cube.rotation.y += 0.01;

      
      
      composer.render();
      
     // camera.position.x=1;
//camera.position.y=1;
  //  camera.position.z = 520;
   };

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////



    

   
   animate();
  }

  ngAfterViewInit() {
    const hostElem = this.el.nativeElement;
    console.log('CHILLLLLLLLLLLLLLLLLLLLDDDDDDDD',hostElem);
    console.log('PAREEEEEEEEEEEEEEEEEEENT',hostElem.parentNode);
  }

}
