/**
 * Created by astimlee on 29/08/2017.
 */


export class Event {

  constructor(public code:string,
              public userCode:any,
              public name:string,
              public details:string,
              public where:string,
              public genre:string,
              public dressCode:string,
              public date:any,
              public startTime:any,
              public endTime:any,
              public backgroundImage:string,
              public image:string,
              public viewCount:any,
              public engageCount:any
         ) {

    this.code = code;
    this.userCode = userCode;
    this.name = name;
    this.details = details;
    this.where = where;
    this.genre = genre;
    this.dressCode = dressCode;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.backgroundImage = backgroundImage;
    this.image = image;
    this.viewCount = viewCount;
    this.engageCount = engageCount;



  }

}

