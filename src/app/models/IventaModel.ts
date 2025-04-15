export default interface IventaModel {
    id?: number;
    auto: string;
    vendedor: string;
    comprador: string;  
    fecha_venta? : Date;
    precio_final: Number;
}