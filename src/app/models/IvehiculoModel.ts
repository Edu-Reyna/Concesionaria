export default interface IvehiculoModel {
    id?: number;
    marca : String;
    modelo : String;
    precio : String;
    anio : Number;
    kilometraje : String;
    imagen : String;
    tipo : String;
    transmision : String;
    combustible : String;
    estado : String;
    fecha_creacion? : Date;
    codigo : String;
    descripcion : String;
}