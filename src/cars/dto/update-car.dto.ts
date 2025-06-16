import { IsOptional, IsString, IsUUID } from "class-validator";



export class updateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: 'Necesito que ingreses marca!' })
    @IsOptional()
    readonly brand?: string;

    @IsString({ message: 'Se requiere el modelo del auto' })
    @IsOptional()
    readonly model?: string;

}