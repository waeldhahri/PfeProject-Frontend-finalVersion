
export class Objective {
  objectifId!: number;

  objectifTitle !: String;
  objectifType !: String;

  description!:String;
  objectifStart!: Date;
  dateLimite !:Date ;

  days?: string = '00';
  hours?: string = '00';
  minutes?: string = '00';
  seconds?: string = '00';
  intervalId?: any;

}
