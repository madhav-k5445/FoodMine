export class foodDetails{
    id!:number;
    name!:string;
    price!:number;
    favorate:boolean=false;
    stars:number=0;
    imageUrl!:string;
    origens!:string[];
    cookTime!:string;
    tags?:string[];
}