//Union types

type Status = "pending"|"approved"|"rejected";

function setStatus(status:Status):void{
    console.log(`Status set to ${status}`);
    
}
setStatus("approved")
//Intersection types (AND)


interface Colorfull{
    color:string;
}

interface Circle{
    radius:number;
}

type ColorFulCircle=Colorfull & Circle;




