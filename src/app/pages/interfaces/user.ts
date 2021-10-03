export class User{
    id: number;
    uuid: string;
    name: string;
    ap_patern: string;
    ap_matern: string;
    curp: string;
    cell_phone: string;
    telefone:string;
    email: string;
    password: string;
    living_place:  any;
    blood_type:  any;
    disability:  any;
    ethnic_group:  any;
    religion:  any;
    socioeconomic_level:  any;
    age:  any;
    persons_id?: any;
    hospitals_id?: any;
    token: string;
    rol:any
    photo:any;
    person:any;
    constructor() {
        this.hospitals_id = 0;
      }
}