class Enemie {
    constructor (description, phone_number, org, image)
    {
        this.description = description;
        this.phone_number = phone_number;
        this.org = org;
        this.image = image;
    }
}

const enemies = [];

enemies.push(new Enemie("חמינאי, השטיח הכי אדום בפרס ",  "61151", "איראן", "./img/sinuwar.png"));

enemies.push(new Enemie("סינוואר, יימצא את הגבינה הכי מהר",  "61151", "עזה", "./img/sinuwar.png"));

export default enemies;