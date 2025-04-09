export default interface IusuarioModel {
    id?: number;
    nombre: string;
    apellido: string;
    password: string;
    email: string;
    rol: Number;
    autos_comprados: string[];
}