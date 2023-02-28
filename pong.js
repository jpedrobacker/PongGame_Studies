//variáveis da bola
let xbola = 450;
let ybola = 250;
let diametro = 20;
let raio = diametro/2;
let vxbola = 6.2;
let vybola = 6;

//variáveis da minha raquete
let xraquete1 = 10;
let yraquete1= 200;
let wraquete = 10;
let hraquete= 100;

//Variáveis da raquete inimiga
let xraquete2= 880;
let yraquete2= 200;
let vraquete2 = 5;

//Placar do jogo
let meuspontos = 0;
let pontosoponente = 0;

function setup() {
  createCanvas(900, 500);
}

function draw() {
  background(0);
  fill(255)
  circle (xbola,ybola,diametro);
  movimentobola();
  colisaobola();
  raquetes(xraquete1 , yraquete1);
  raquetes(xraquete2 , yraquete2);
  movimentoraquete();
  colisaoraquete();
  colisaoraquete2();
  movimentoraquete2();
  placarfundo();
  incluiplacar();
  marcaponto();
  bolanaopresa();
}

function movimentobola(){
  xbola += vxbola;
  ybola += vybola;
}

function colisaobola(){
  if(xbola + raio > width || xbola - raio < 0){
    vxbola *= -1;
  }
  if(ybola + raio > height || ybola - raio < 0){
    vybola *= -1;
  }
}

function raquetes(x , y){
  fill(255)
  rect (x, y, wraquete ,hraquete);
}

//Minha raquete
function movimentoraquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete1 -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete1 += 10;
  }
}

function colisaoraquete(){
  if (xbola - raio < xraquete1 + wraquete && ybola - raio < yraquete1 + hraquete && ybola + raio > yraquete1){
    vxbola *= -1
  }
}

//Raquete do oponente
function movimentoraquete2(){
  if(keyIsDown(87)){
    yraquete2 -= 10;
  }
  if(keyIsDown(83)){
    yraquete2 += 10;
  }
}

function colisaoraquete2(){
  if(xbola + raio > xraquete2 && ybola + raio < yraquete2 + hraquete && ybola + raio > yraquete2){
  	vxbola *= -1;
  }
}

function incluiplacar(){
  textAlign(CENTER);
  textSize(26);
  fill(255);
  text(meuspontos, 250, 27);
  text(pontosoponente, 600, 27);
}

function placarfundo(){
  stroke(255);
  
  fill(color(255,140,0));
  rect (220, 2 ,60, 35);
  
  fill(color(255,140,0));
  rect (570, 2 ,60, 35);
}

function marcaponto(){
  if (xbola + raio > width ){
    meuspontos += 1;
  }
  if (xbola - raio < 0){
    pontosoponente += 1;
  }
}

function bolanaopresa(){
  if (xbola + raio < 0){
    console.log('bolinha ficou presa');
    xbola = 300;
    }
}