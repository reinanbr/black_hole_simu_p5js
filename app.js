
var black_hole
var temp
var bola
var particle

var particles = []
var temps = []
var tempsMed
var N = 900

var k
function setup(){
  gravity = createVector(0,13.8)
  wind = createVector(0.01,0)
  c = 20
  mag = 0.9
  G = 1
  
  
 // dimensionLimit = createVector(4050,3500)
  createCanvas(1000, 900);
  //bola = new Move(100,100)
  //bola.vel = p5.Vector.random2D()
  //bola.r = 0.5
  black_hole = new Move(500,450)
  black_hole.mass = 8000
  for(let i=0; i<N; i++){
    
    boll = new Move(10,10)
    boll.r = 0.5
    boll.vel = p5.Vector.random2D()
    boll.pos = p5.Vector.mult(p5.Vector.random2D(),0.1)
    boll.mass = 4
    particles.push(boll)
  }
  
 // system = new ParticleSystem(createVector(width / 2, 50));
}

dt = new Date()
time_init = dt.valueOf()
var dt_c
var time_c
function draw() {
 // dt_c = new Date()
  //time_c = dt_c.valueOf()-time_init
  //normalVel = Math.sqrt(bola.vel.x**2+bola.vel.y**2)
  
 // pVel = `<p><b>normal da velocidade:</b> ${round(normalVel,2)}m/s</p>`
  
  //pHight = `<p><b>altura:</b> ${round(abs(bola.pos.y-dimensionLimit.y),2)}m</p>`
  
  //pMoment = `<p><b>normal do momento:</b> ${round(normalVel*bola.mass,2)}kg*m/s</p><p><b>massa do objeto:</b> ${bola.mass}kg</p>`
  
  //pTimeCrono = `<p><b>time system:</b> ${round(time_c/1000,1)}s</p>`
  //pForces = `<p><b>força da gravidade:</b> ${gravity.y}m/s²</p><p><b></b></p>`
  
  //$('#force').html(`${pVel}${pHight}${pMoment}${pForces}${pTimeCrono}<p><b>Temperatura: </b>${bola.temp}K</p>`)
  
  k = 0.15
  background(0);
  //bola.addForce(gravity)
  //bola.addForce(wind)
  
  
  
  black_hole.show()
  
  
  
  //bola.atract(black_hole)
 // console.log(particles)
  temps=[] 
  for(let i in particles){
    //console.log(particle)
    particles[i].atract(black_hole)
    particles[i].update()
    particles[i].show()
    temps.push(particles[i].temp)
    
      
    
    
    // for(let p in particles){
    //   if(!(particles[i]==particles[p])){
    //     particles[i].atract(particles[p])
    //   }
    // }
    
  }
  tempsMed = temps.reduce((a,b)=>{
    return (a+b)/temps.length
  })  
  $('#info').html(`<p>Temp: ${round(tempsMed*100,2)}K</p>`)
  //bola.resi(k)
  //bola.update()
 // bola.limitDimension()
  //bola.show()
  //system.addParticle();
  //system.run();
  
}



