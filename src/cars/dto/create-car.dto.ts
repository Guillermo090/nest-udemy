import { IsString } from "class-validator";



export class createCarDto {

    @IsString({ message: 'Necesito que ingreses marca!' })
    readonly brand: string;

    @IsString()
    readonly model: number;

}