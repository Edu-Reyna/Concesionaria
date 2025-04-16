export default interface IvehiculoModel {
    _id?: string;
    marca : String;
    modelo : String;
    precio : String;
    anio : Number;
    kilometraje : String;
    imagen : File | String;
    tipo : String;
    transmision : String;
    combustible : String;
    estado : String;
    fecha_creacion? : Date;
    codigo : String;
    descripcion : String;
}