export default interface IvendedorModel {
    _id?: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    ventas_realizadas: string[];
    rol: Number;
}