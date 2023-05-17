import { AbstractForm } from './AbstractForm.js';

/**
 * Déssine un Soleil
 */
export class Sousmarin extends AbstractForm {
  // Valeur par défault pour éviter les erreurs lors d'argurments vides
  constructor(
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    fillColor = '',
    strokeColor = '',
    strokeWidth = 2,
    pesenteur = false,
    ordreConstruction = 9
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

    // Code pour le Sousmarin
    ctx.beginPath() //entré du sousmarin
    ctx.lineWidth = 600;
    ctx.lineCap = "round"
    ctx.strokeStyle = 'yellow';
    ctx.moveTo(this.x + 1600, this.y + 100, new_y);
    ctx.lineTo(this.x + 1600, this.y + 470)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath() //façade en bois
    ctx.lineWidth = 10;
    ctx.lineCap = "round"
    ctx.moveTo(this.x + 1500, this.y + 530)
    ctx.quadraticCurveTo(this.x + 1500, this.y + 50,this.x + 1400, this.y + 50)
    ctx.quadraticCurveTo(this.x + 1400, this.y - 50,this.x + 1335, this.y - 25)
    ctx.quadraticCurveTo(this.x + 1270, this.y - 15,this.x + 1310, this.y + 530)
    ctx.fillStyle='#BA8C63'
    ctx.fill()
    ctx.closePath()

    ctx.beginPath() //porte
    ctx.lineWidth = 5;
    ctx.fillStyle = 'black';
    ctx.moveTo(this.x + 1400, this.y + 530)
    ctx.quadraticCurveTo(this.x + 1400, this.y + 250,this.x + 1299, this.y + 100)
    ctx.quadraticCurveTo(this.x + 1290, this.y + 150,this.x + 1300, this.y + 530)
    ctx.fill()
    ctx.strokeStyle='grey'
    ctx.stroke()
    ctx.closePath()

    

    ctx.beginPath() //barriere
    ctx.strokeStyle = 'grey';
    ctx.moveTo(this.x + 100, this.y + 250); // barre vertical (1er en partant de la gauche)
    ctx.lineTo(this.x + 100, this.y + 530)
    ctx.moveTo(this.x + 140, this.y + 250); //2eme
    ctx.lineTo(this.x + 140, this.y + 530)
    ctx.moveTo(this.x + 180, this.y + 250); //3eme
    ctx.lineTo(this.x + 180, this.y + 530)
    ctx.moveTo(this.x + 220, this.y + 250); //4eme
    ctx.lineTo(this.x + 220, this.y + 530)
    ctx.moveTo(this.x + 260, this.y + 250); //5eme
    ctx.lineTo(this.x + 260, this.y + 530)
    ctx.moveTo(this.x + 300, this.y + 250); //6eme
    ctx.lineTo(this.x + 300, this.y + 530)
    ctx.moveTo(this.x + 340, this.y + 250); //7eme
    ctx.lineTo(this.x + 340, this.y + 530)
    ctx.moveTo(this.x + 380, this.y + 250); //8eme
    ctx.lineTo(this.x + 380, this.y + 530)
    ctx.moveTo(this.x + 420, this.y + 250); //9eme
    ctx.lineTo(this.x + 420, this.y + 530)
    ctx.moveTo(this.x + 460, this.y + 250); //10
    ctx.lineTo(this.x + 460, this.y + 530)
    ctx.moveTo(this.x + 500, this.y + 250); //11
    ctx.lineTo(this.x + 500, this.y + 530)
    ctx.moveTo(this.x + 540, this.y + 250); //12
    ctx.lineTo(this.x + 540, this.y + 530)
    ctx.moveTo(this.x + 580, this.y + 250); //13
    ctx.lineTo(this.x + 580, this.y + 530)
    ctx.moveTo(this.x + 620, this.y + 250); //14
    ctx.lineTo(this.x + 620, this.y + 530)
    ctx.moveTo(this.x + 660, this.y + 250); //15
    ctx.lineTo(this.x + 660, this.y + 530)
    ctx.moveTo(this.x + 700, this.y + 250); //16
    ctx.lineTo(this.x + 700, this.y + 530)
    ctx.moveTo(this.x + 740, this.y + 250); //17
    ctx.lineTo(this.x + 740, this.y + 530)
    ctx.moveTo(this.x + 780, this.y + 250); //18
    ctx.lineTo(this.x + 780, this.y + 530)
    ctx.moveTo(this.x + 820, this.y + 250); //19
    ctx.lineTo(this.x + 820, this.y + 530)
    ctx.moveTo(this.x + 860, this.y + 250); //20
    ctx.lineTo(this.x + 860, this.y + 530)
    ctx.moveTo(this.x + 900, this.y + 250); //21
    ctx.lineTo(this.x + 900, this.y + 530)
    ctx.moveTo(this.x + 940, this.y + 250); //22
    ctx.lineTo(this.x + 940, this.y + 530)
    ctx.moveTo(this.x + 980, this.y + 250); //23
    ctx.lineTo(this.x + 980, this.y + 530)
    ctx.moveTo(this.x + 1020, this.y + 250); //24
    ctx.lineTo(this.x + 1020, this.y + 530)
    ctx.moveTo(this.x + 1060, this.y + 250); //25
    ctx.lineTo(this.x + 1060, this.y + 530)
    ctx.moveTo(this.x + 1100, this.y + 250); //26
    ctx.lineTo(this.x + 1100, this.y + 530)
    ctx.moveTo(this.x + 1140, this.y + 250); //27
    ctx.lineTo(this.x + 1140, this.y + 530)
    ctx.moveTo(this.x + 1180, this.y + 250); //28
    ctx.lineTo(this.x + 1180, this.y + 530)
    ctx.moveTo(this.x + 1220, this.y + 250); //29
    ctx.lineTo(this.x + 1220, this.y + 530)
    ctx.moveTo(this.x + 1260, this.y + 250); //30
    ctx.lineTo(this.x + 1260, this.y + 530)
    ctx.moveTo(this.x + 1300, this.y + 250); //31 (la 1er qui "touche" la facade en bois)
    ctx.lineTo(this.x + 1300, this.y + 530)
    ctx.moveTo(this.x + 1340, this.y + 250); //32
    ctx.lineTo(this.x + 1340, this.y + 530)
    ctx.moveTo(this.x + 1380, this.y + 250); //33
    ctx.lineTo(this.x + 1380, this.y + 530)
    ctx.moveTo(this.x + 1420, this.y + 250); //34
    ctx.lineTo(this.x + 1420, this.y + 530)
    ctx.moveTo(this.x + 1460, this.y + 250); //35
    ctx.lineTo(this.x + 1460, this.y + 530)
    ctx.moveTo(this.x + 1500, this.y + 250); //36
    ctx.lineTo(this.x + 1500, this.y + 530)
    ctx.moveTo(this.x + 1540, this.y + 250); //37
    ctx.lineTo(this.x + 1540, this.y + 530)
    ctx.moveTo(this.x + 1580, this.y + 250); //38
    ctx.lineTo(this.x + 1580, this.y + 530)
    ctx.moveTo(this.x + 1620, this.y + 250); //39 (non visible)
    ctx.lineTo(this.x + 1620, this.y + 530)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath() //barre horizontal
    ctx.lineWidth = 20;
    ctx.strokeStyle='#BF9972'
    ctx.moveTo(this.x + 90, this.y + 250); 
    ctx.lineTo(this.x + 1620, this.y + 250)
    ctx.stroke()
    ctx.closePath()

    ctx.beginPath() //base sousmarin
    ctx.lineWidth = 100;
    ctx.strokeStyle = 'yellow';
    ctx.moveTo(this.x + 90, this.y + 575);
    ctx.lineTo(this.x + 1620, this.y + 575);
    ctx.lineCap = "round"
    ctx.stroke()
    ctx.closePath()

   
    

    ctx.restore()
  }

  /**
   * get array of forms
   * @return {[Sousmarin,...]}
   */
  static buildForms() {
    const mySousmarin = new Sousmarin(200, 100, 0, 0, '#ffc761', '', 2, false, 1)
    let max = ~~(Math.random() * 0) + 1 // Le Sousmarin apparait toujours
    let forms = []
    for (let i = 0; i < max; i++) {
      forms.push(
        new Sousmarin(
          ~~(Math.random() * 3 * mySousmarin.x - 100),
          mySousmarin.y + 25,
          ~~(Math.random() * 3 * mySousmarin.width + 0),
          ~~(Math.random() * mySousmarin.height + 10),
          mySousmarin.fillColor,
          mySousmarin.strokeColor,
          '',
          
        )
      )
    }
    // retourne un tableau d'objets de type Mongolfiere
    return forms
  }

}
