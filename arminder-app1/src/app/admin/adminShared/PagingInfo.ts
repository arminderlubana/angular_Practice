import { Student } from "./student";

export class PagingInfo {
  public pageNumber: number=null;
  public pageSize: number=null;
  public totalNumberOfPages: number=null;
  public totalNumberOfRecords: number=null;
  private results: Student[] = [];

  public get Results(): Student[] {
    return this.results;
  }

  public set Results(taskData: Student[]) {
    this.results = taskData.map(task => new Student(task));
  }

  constructor(instanceData?: PagingInfo) {
    if (instanceData) {
      this.deserialize(instanceData);
    }
  }

  private deserialize(instanceData: PagingInfo) {
    // Note this.active will not be listed in keys since it's declared, but not defined
    const keys = Object.keys(this);
    
    for (const key of keys) {
     // console.log("out " + key);
      if (instanceData.hasOwnProperty(key)) {
        // console.log("in " + key);
        if(key=='result')
          {
            // var a:Student[] = instanceData[key];    
            this.Results  = instanceData[key];    

          }
        else
        this[key] = instanceData[key];
      }
    }
  // 
  }

  // constructor(
  //     public PageNumber: number,
  //     public PageSize: number,
  //     public TotalNumberOfPages: number,
  //     public TotalNumberOfRecords: number,
  //     public Results : Student[],


  // ){}
}