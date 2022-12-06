let system;
var forceX
var forceY
var accForce
var c
var temp
var mag
var G


class Move{
  constructor(x,y){
    this.mag = mag
    this.mass = 10
    this.r = 32
    this.pos = createVector(x,y)
    this.vel = createVector(1,1)
    this.acc = createVector(0,0)
  }
  addForce(vectorForce){
    //console.log(vectorForce.y)
    forceX = vectorForce.x/this.mass
    forceY = vectorForce.y/this.mass
    accForce = createVector(forceX,forceY)
    this.acc.add(accForce)
  }
  update(){
    this.temp = round(Math.sqrt(this.vel.x**2+this.vel.y**2)*255/c)
    this.acc.setMag(this.mag)
    this.vel.add(this.acc)
    this.vel.limit(c)
    this.pos.add(this.vel)
    // a soma de todas as forças é igual a zero
    this.acc = createVector(0,0)
  }
  
  resi(k){
    this.acc.add(createVector-this.vel.x*k,-this.vel.y*k)
  }
  
  atract(other){
    let force = p5.Vector.sub(other.pos,this.pos)
    let disSq = constrain(force.magSq(),955,10)
    
    let strong = G*(this.mass*other.mass)/disSq
    force.setMag(strong)
    this.addForce(force)
    
  }
  
  limitDimension(){
    
    if (this.pos.x >= dimensionLimit.x-this.r){
      this.pos.x = dimensionLimit.x-this.r
      this.vel.x = - this.vel.x
    }else if (this.pos.x <= this.r){
      this.pos.x = this.r
      this.vel.x = - this.vel.x
    }
    if (this.pos.y >= dimensionLimit.y-this.r){
      this.pos.y = dimensionLimit.y-this.r
      this.vel.y = - this.vel.y
    }else if (this.pos.y <= this.r){
      this.pos.y = this.r
      this.vel.y = - this.vel.y
    }
  }
  
  show(){
    stroke(0)
    fill(0)
    stroke(this.temp*2,20,10)
    strokeWeight(2)
    fill(this.temp*2,20,10)
    ellipse(this.pos.x,this.pos.y,this.r)
  }
}
