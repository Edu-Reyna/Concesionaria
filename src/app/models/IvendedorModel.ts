export default interface IvendedorModel {
    id?: number;
    nombre: string;
    apellido: string;
    password: string;
    email: string;
    rol: Number;
    ventas_realizadas: string[];
}