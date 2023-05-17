import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une Mongolfiere
 */
export class Katana extends AbstractForm {
  //  Valeur par défault pour éviter les erreurs lors d'argurments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
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

    // Code pour la Mongolfiere
    ctx.moveTo(this.x + 0, this.y + 0); //foureau
    ctx.bezierCurveTo(this.x + 0,this.y + 300,this.x + 40,this.y + 300,this.x + 40,this.y + 300,)
    ctx.bezierCurveTo(this.x + 60,this.y + 300,this.x + 20,this.y + 300,this.x + 20,this.y + 0,)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath() // croix blache
    ctx.rect(this.x + 9, this.y + 0, 5, 20, new_y);
    ctx.rect(this.x + 5, this.y + 3.5, 13, 10, new_y);
    ctx.rect(this.x + 9, this.y + 50, 5, 20, new_y);
    ctx.rect(this.x + 5, this.y + 53.5, 13, 10, new_y);
    ctx.rect(this.x + 11, this.y + 100, 5, 20, new_y);
    ctx.rect(this.x + 7, this.y + 103.5, 13, 10, new_y);
    ctx.fillStyle='white'
    ctx.fill()
    ctx.closePath()

    
    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Katana ,...]}
   */
  static buildForms() {
    const myKatana  = new Katana (250, 350, 0, 0, 'black', '', 2, false, 2)
    let max = ~~(Math.random() * 0) + 1 // Le Katana sera toujours présent 
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Katana(
          ~~(Math.random() * 3 * myKatana.x + 400),
          myKatana.y + 25,
          ~~(Math.random() * 3 * myKatana.width + 0),
          ~~(Math.random() * myKatana.height + 10),
          myKatana.fillColor,
          myKatana.strokeColor,
          '',
          
        )
      )
    }
    // retourne un tableau d'objets de type Mongolfiere
    return forms
  }

}
