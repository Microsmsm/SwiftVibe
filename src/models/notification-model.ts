/**
 * Created by astimlee on 20/09/2017.
 */

export class Notification {

  constructor(public code:string,
              public sender:string,
              public recipient:string,
              public action:string,
              public text:string,
              public data:any,
              public seen:boolean
  ) {

    this.code = code;
    this.sender = sender;
    this.recipient = recipient;
    this.action = action;
    this.text = text;
    this.data = data;
    this.seen = seen;
  }

}
