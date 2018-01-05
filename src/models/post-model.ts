/**
 * Created by astimlee on 3/08/2017.
 */
export class Post {

  constructor(public code:string,
              public userCode:any,
              public type:string,
              public date:any,
              public title:string,
              public description:string,
              public backgroundImage:string,
              public image:string,
              public viewCount:any,
              public fireCount:any,
              public iceCount:any,
              public eventCode:any) {

    this.code = code;
    this.userCode = userCode;
    this.type = type;
    this.date = date;
    this.title = title;
    this.description = description;
    this.backgroundImage = backgroundImage;
    this.image = image;
    this.viewCount = viewCount;
    this.fireCount = fireCount;
    this.iceCount = iceCount;
    this.eventCode = eventCode;


  }

}
