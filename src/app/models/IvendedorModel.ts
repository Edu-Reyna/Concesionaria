export default interface IvendedorModel {
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    ventas_realizadas: string[];
    rol: Number;
}