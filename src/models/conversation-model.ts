/**
 * Created by astimlee on 19/09/2017.
 */


export class Conversation {

  constructor(public code:string,
              public participant1:string,
              public participant2:string,
              public lastMessage:string
  ) {

    this.code = code;
    this.participant1 = participant1;
    this.participant2 = participant2;
    this.lastMessage = lastMessage;
  }

}
