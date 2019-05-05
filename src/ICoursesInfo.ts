export default interface CourseCatInfo{
    level_subject:string;
    color:string;
    
    courses: Course[];
}
interface Course{
    name: string;
    size: number;
    schedule: string; //format undetermined
    classtime: number; //in hrs
    description: string;
    isFull: boolean;
}
interface courseSchedule{
    
}