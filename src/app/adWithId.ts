export class AdWithId{
    
    id:number;
    title:string;
        phoneNumber:number;
        description:string;
        surface:number;
        nbrPieces:number;
        prix:number;
        favorite:boolean;
        adresse:{
            rue:string,
            id:number,
            numTel:number,
            codePostal:number,
            location:String,
            gpsLatitude:number,
            gpsLongitude:number
        };
        autresCriteres:{
            id:number,
            terrasse:boolean,
            balcon:boolean,
            assenceur:boolean,
            cave:boolean,
            piscine:boolean,
            vueMer:boolean,
            parking:boolean,
            garage:boolean
        }
       
}