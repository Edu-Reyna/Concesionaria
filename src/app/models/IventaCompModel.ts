export default interface IVentaCompModel {
  _id: string;
  auto: {
    _id: string;
    anio: number;
    codigo: string;
    combustible: string;
    descripcion: string;
    estado: string;
    fecha_creacion: string;
    imagen: string;
    kilometraje: string;
    marca: string;
    modelo: string;
    precio: string;
    tipo: string;
    transmision: string;
    __v: number;
  };
  comprador: {
    _id: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: number;
    autos_comprados: string[];
    __v: number;
  };
  vendedor: {
    _id: string;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: number;
    ventas_realizadas: string[];
    __v: number;
  };
  fecha_venta: string;
  precio_final: number;
  __v: number;
}