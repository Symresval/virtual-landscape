import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine une Lune
 */
export class Lune extends AbstractForm {
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
    ordreConstruction = 2
  ) {
    super(x, y, width, height, fillColor, strokeColor, strokeWidth, pesenteur, ordreConstruction)
  }


  /**
   * Dessine la forme spécifique à cette classe
   * @param ctx contexte 2D du canvas
   */
  draw(ctx) {
    ctx.save()
    ctx.beginPath();

    // On définit les styles
    ctx.fillStyle = this.fillColor
    ctx.lineWidth = this.strokeWidth

    // Debut de mon chef d'oeuvre
   
    ctx.strokeStyle = this.strokeColor

    // pousse l'objet au bas de l'écran (je l'ai modif pour que l'objet s'affiche seulement en haut)
    let new_y = this.y

   
    ctx.arc(this.x + 0, this.y + 0, 500, 0, Math.PI * 2, true);  // Lune
    ctx.fill();
    ctx.closePath()

    ctx.restore()
  }
  

  /**
   * get array of forms
   * @return {[Lune,...]}
   */
  static buildForms() {
    const myLune = new Lune(200, 245, 0, 0, 'white', '', 2, true, 2)
    let max = ~~(Math.random() * 0) + 1 //La lune apparait tout le temps
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Lune(
          ~~(Math.random() * 3 * myLune.x + 0),
          myLune.y - 15,
          ~~(Math.random() * 3 * myLune.width + 0),
          ~~(Math.random() * myLune.height + 10),
          myLune.fillColor,
          myLune.strokeColor,
          '',
        )
      )
    }
    // Retourne mon tableau d'objets Lune
    return forms
  }

}
