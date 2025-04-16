export default interface IventaModel {
    _id?: string;
    auto: string;
    vendedor: string;
    comprador: string;  
    fecha_venta? : Date;
    precio_final: Number;
}