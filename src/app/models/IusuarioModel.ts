export default interface IusuarioModel {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    autos_comprados: string[];
    rol: Number;
}