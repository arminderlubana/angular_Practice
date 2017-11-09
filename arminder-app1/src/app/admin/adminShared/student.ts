export class Student{
    public id: number=null;
    public lastName: string=null;
    public firstMidName: string=null;
    public comment: string=null;
    public class : string=null;
    public enrollmentDate : string=null;

        // constructor(
        //     public id: number,
        //     public LastName: string,
        //     public FirstName: string,
        //     public comment: string,
        //     public Class : string,
        //     public EnrollmentDate : string
    
        // ){}
        constructor(instanceData?: Student) {
            if (instanceData) {
              this.deserialize(instanceData);
            }
          }

          private deserialize(instanceData: Student) {
            // Note this.active will not be listed in keys since it's declared, but not defined
            const keys = Object.keys(this);
        
            for (const key of keys) {
              if (instanceData.hasOwnProperty(key)) {
                this[key] = instanceData[key];
              }
            }
            //console.log(instanceData);
          }
        
    }