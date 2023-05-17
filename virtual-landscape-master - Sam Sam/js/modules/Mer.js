import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Sol
 */
export class Mer extends AbstractForm {
  // add default values to avoid errors on empty arguments
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 5,
    pesenteur = true,
    ordreConstruction = 10
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
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y

    ctx.beginPath(); // Mer
    ctx.fillRect(this.x + 0, this.y + 0, 1600, 50, new_y);
    
    ctx.closePath()
    
    ctx.restore();
  }
  

  /**
   * get array of forms
   * @return {[Mer,...]}   
   */
  static buildForms() {
    const myMer = new Mer(0, 670, 0, 0, 'rgba(5,195,221,0.7)', '', 2, true, 10)
    let max = ~~(Math.random() *0) + 1 // Le Sol est constament visible
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Mer(
          myMer.x,
          myMer.y,
          myMer.width,
          myMer.height,
          myMer.fillColor,
          myMer.strokeColor,
          '',
        )
      )
    }
    // retourne mon tableau d'objets Sol
    return forms
  }

}
