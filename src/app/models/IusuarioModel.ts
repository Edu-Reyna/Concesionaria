export default interface IusuarioModel {
    _id?: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    autos_comprados: string[];
    rol: Number;
}