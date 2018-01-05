/**
 * Created by astimlee on 19/09/2017.
 */


export class Message {

  constructor(public code:string,
              public user:string,
              public participant:string,
              public message:string,
              public attachment:any


  ) {

    this.code = code;
    this.user = user;
    this.participant = participant;
    this.message = message;
    this.attachment = attachment;

  }

}
