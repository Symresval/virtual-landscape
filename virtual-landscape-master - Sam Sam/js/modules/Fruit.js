import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Canyon 
 */
export class Fruit extends AbstractForm {
  //  Valeur par défault pour éviter les erreurs lors d'argurments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 5,
    pesenteur = false,
    ordreConstruction = 3
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()

    // On définit les styles
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // Debut de mon chef d'oeuvre
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y
    
    ctx.beginPath(); //fruit (ope ope no mi)
    ctx.moveTo(this.x + 75, this.y + 40, new_y);
    ctx.bezierCurveTo(this.x + 75, this.y + 37, this.x + 70, this.y + 25, this.x + 50,  this.y + 25);
    ctx.bezierCurveTo(this.x + 20, this.y + 25, this.x + 20, this.y + 62.5, this.x + 20,  this.y + 62.5);
    ctx.bezierCurveTo(this.x + 20, this.y + 80, this.x + 40, this.y + 102, this.x + 75,  this.y + 120);
    ctx.bezierCurveTo(this.x + 110, this.y + 102, this.x + 130, this.y + 80, this.x + 130,  this.y + 62.5);
    ctx.bezierCurveTo(this.x + 130, this.y + 62.5, this.x + 130, this.y + 25, this.x + 100,  this.y + 25);
    ctx.bezierCurveTo(this.x + 85, this.y + 25, this.x + 75, this.y + 37, this.x + 75, this.y + 40);
    ctx.fill();
    ctx.closePath()

    ctx.beginPath() //tige
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'green';
    ctx.moveTo(this.x + 75, this.y + 39, new_y);
    ctx.lineTo(this.x + 75, this.y + 17)
    ctx.quadraticCurveTo(this.x + 85, this.y + 10, this.x + 105,  this.y + 17)
    ctx.moveTo(this.x + 75, this.y + 17);
    ctx.bezierCurveTo(this.x + 75, this.y + 17, this.x + 45,  this.y + 25, this.x + 42,  this.y + 10)
    ctx.bezierCurveTo(this.x + 42, this.y + 1, this.x + 42, this.y + 0, this.x + 50,  this.y - 5);
    ctx.bezierCurveTo(this.x + 50,  this.y - 5, this.x + 55, this.y - 10, this.x + 70,  this.y - 0);
    ctx.stroke()
    ctx.closePath()
   
    
    ctx.restore();
  }
  

  /**
   * get array of forms
   * @return {[Fruit,...]}
   */
  static buildForms() {
    // create a new rectangle object using the Immeuble class
    const myFruit = new Fruit(100, 505, 0, 0, 'red', '', 2, true, 3)
    let max = ~~(Math.random() * 0) + 1  // Le fruit est tout le temps present
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Fruit(
          Math.random() * 3 * myFruit.x + 400,
          myFruit.y - 260,
          myFruit.width,
          myFruit.height,
          myFruit.fillColor,
          myFruit.strokeColor,
          '',
         
        )
      )
    }
    // retourne un tableau d'objets Canyon
    return forms
  }

}
