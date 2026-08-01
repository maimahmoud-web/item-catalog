export interface Item{
     id?: number
    code_number:string
     name:string
     price:number 
      type: string;
      weightKg?: number;
    durationHours?: number;
}

export interface Product extends Item{
     weightKg: number;
}

export interface Service extends Item{
     durationHours: number;
}