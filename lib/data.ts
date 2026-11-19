// Datos de ejemplo — Farmacia Demo. Ningún dato es real.
// Precios en MXN. Fechas relativas a la fecha de hoy del demo (18 nov 2026).

export type Medicamento = {
  id: string;
  nombre: string;
  presentacion: string;
  categoria: string;
  precio: number;
  costo: number;
  stock: number;
  stockMinimo: number;
  caducidad: string;
  proveedor: string;
  requiereReceta: boolean;
};

export const medicamentos: Medicamento[] = [
  { id: "MED-001", nombre: "Paracetamol", presentacion: "500 mg · caja 20 tabletas", categoria: "Analgésicos", precio: 42, costo: 24, stock: 320, stockMinimo: 60, caducidad: "2027-08-15", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: false },
  { id: "MED-002", nombre: "Amoxicilina", presentacion: "500 mg · caja 12 cápsulas", categoria: "Antibióticos", precio: 98, costo: 61, stock: 145, stockMinimo: 40, caducidad: "2027-03-10", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: true },
  { id: "MED-003", nombre: "Omeprazol", presentacion: "20 mg · caja 14 cápsulas", categoria: "Gastrointestinales", precio: 76, costo: 44, stock: 210, stockMinimo: 50, caducidad: "2027-11-02", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: false },
  { id: "MED-004", nombre: "Ibuprofeno", presentacion: "400 mg · caja 20 tabletas", categoria: "Analgésicos", precio: 58, costo: 33, stock: 260, stockMinimo: 60, caducidad: "2027-06-21", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: false },
  { id: "MED-005", nombre: "Loratadina", presentacion: "10 mg · caja 10 tabletas", categoria: "Antihistamínicos", precio: 64, costo: 38, stock: 38, stockMinimo: 40, caducidad: "2027-02-14", proveedor: "Grupo Farmacéutico Península", requiereReceta: false },
  { id: "MED-006", nombre: "Metformina", presentacion: "850 mg · caja 30 tabletas", categoria: "Control de diabetes", precio: 112, costo: 70, stock: 180, stockMinimo: 45, caducidad: "2027-09-30", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: true },
  { id: "MED-007", nombre: "Losartán", presentacion: "50 mg · caja 30 tabletas", categoria: "Cardiovasculares", precio: 134, costo: 82, stock: 95, stockMinimo: 30, caducidad: "2027-05-18", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: true },
  { id: "MED-008", nombre: "Atorvastatina", presentacion: "20 mg · caja 30 tabletas", categoria: "Cardiovasculares", precio: 168, costo: 104, stock: 74, stockMinimo: 30, caducidad: "2027-04-25", proveedor: "Grupo Farmacéutico Península", requiereReceta: true },
  { id: "MED-009", nombre: "Salbutamol", presentacion: "Inhalador 100 mcg · 200 dosis", categoria: "Respiratorios", precio: 186, costo: 118, stock: 52, stockMinimo: 20, caducidad: "2027-01-20", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: true },
  { id: "MED-010", nombre: "Diclofenaco", presentacion: "75 mg · caja 10 tabletas", categoria: "Analgésicos", precio: 72, costo: 41, stock: 140, stockMinimo: 40, caducidad: "2027-07-08", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: false },
  { id: "MED-011", nombre: "Vitamina C", presentacion: "1 g · caja 10 tabletas efervescentes", categoria: "Vitaminas y suplementos", precio: 89, costo: 52, stock: 230, stockMinimo: 50, caducidad: "2027-12-01", proveedor: "Grupo Farmacéutico Península", requiereReceta: false },
  { id: "MED-012", nombre: "Suero oral", presentacion: "Electrolitos · caja 6 sobres", categoria: "Cuidado general", precio: 54, costo: 30, stock: 190, stockMinimo: 50, caducidad: "2027-10-11", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: false },
  { id: "MED-013", nombre: "Naproxeno", presentacion: "550 mg · caja 12 tabletas", categoria: "Analgésicos", precio: 67, costo: 39, stock: 26, stockMinimo: 40, caducidad: "2026-12-19", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: false },
  { id: "MED-014", nombre: "Azitromicina", presentacion: "500 mg · caja 3 tabletas", categoria: "Antibióticos", precio: 145, costo: 89, stock: 88, stockMinimo: 25, caducidad: "2027-08-03", proveedor: "Grupo Farmacéutico Península", requiereReceta: true },
  { id: "MED-015", nombre: "Cetirizina", presentacion: "10 mg · caja 10 tabletas", categoria: "Antihistamínicos", precio: 59, costo: 34, stock: 165, stockMinimo: 40, caducidad: "2027-06-30", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: false },
  { id: "MED-016", nombre: "Insulina glargina", presentacion: "100 UI/ml · pluma 3 ml", categoria: "Control de diabetes", precio: 486, costo: 342, stock: 18, stockMinimo: 12, caducidad: "2027-02-28", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: true },
  { id: "MED-017", nombre: "Alcohol etílico 70%", presentacion: "Botella 500 ml", categoria: "Cuidado general", precio: 36, costo: 19, stock: 280, stockMinimo: 60, caducidad: "2028-01-15", proveedor: "Grupo Farmacéutico Península", requiereReceta: false },
  { id: "MED-018", nombre: "Budesonida nasal", presentacion: "Spray 64 mcg · 120 dosis", categoria: "Respiratorios", precio: 212, costo: 136, stock: 41, stockMinimo: 15, caducidad: "2027-03-22", proveedor: "FarmaSur S.A. de C.V.", requiereReceta: true },
  { id: "MED-019", nombre: "Complejo B", presentacion: "Caja 30 tabletas", categoria: "Vitaminas y suplementos", precio: 94, costo: 56, stock: 120, stockMinimo: 30, caducidad: "2027-09-12", proveedor: "Distribuidora Médica del Noroeste", requiereReceta: false },
  { id: "MED-020", nombre: "Clorfenamina", presentacion: "4 mg · caja 20 tabletas", categoria: "Antihistamínicos", precio: 38, costo: 21, stock: 205, stockMinimo: 50, caducidad: "2027-05-05", proveedor: "Grupo Farmacéutico Península", requiereReceta: false },
];

export type VentaDiaria = { fecha: string; dia: string; ventas: number; tickets: number };
export const ventas14Dias: VentaDiaria[] = [
  { fecha: "05 nov", dia: "mié", ventas: 14280, tickets: 58 },
  { fecha: "06 nov", dia: "jue", ventas: 15890, tickets: 61 },
  { fecha: "07 nov", dia: "vie", ventas: 17420, tickets: 66 },
  { fecha: "08 nov", dia: "sáb", ventas: 19850, tickets: 74 },
  { fecha: "09 nov", dia: "dom", ventas: 12340, tickets: 49 },
  { fecha: "10 nov", dia: "lun", ventas: 13670, tickets: 55 },
  { fecha: "11 nov", dia: "mar", ventas: 14920, tickets: 59 },
  { fecha: "12 nov", dia: "mié", ventas: 16230, tickets: 63 },
  { fecha: "13 nov", dia: "jue", ventas: 17110, tickets: 65 },
  { fecha: "14 nov", dia: "vie", ventas: 18940, tickets: 71 },
  { fecha: "15 nov", dia: "sáb", ventas: 21480, tickets: 79 },
  { fecha: "16 nov", dia: "dom", ventas: 13120, tickets: 52 },
  { fecha: "17 nov", dia: "lun", ventas: 14860, tickets: 57 },
  { fecha: "18 nov", dia: "mar", ventas: 18450, tickets: 68 },
];

export type Ticket = {
  folio: string;
  hora: string;
  cliente: string;
  articulos: { nombre: string; cantidad: number; precio: number }[];
  pago: "Efectivo" | "Tarjeta" | "Transferencia";
};
export const ticketsHoy: Ticket[] = [
  { folio: "V-2041", hora: "08:12", cliente: "Mostrador", articulos: [{ nombre: "Paracetamol 500 mg", cantidad: 2, precio: 42 }, { nombre: "Suero oral", cantidad: 1, precio: 54 }], pago: "Efectivo" },
  { folio: "V-2042", hora: "08:47", cliente: "María G.", articulos: [{ nombre: "Omeprazol 20 mg", cantidad: 1, precio: 76 }, { nombre: "Vitamina C", cantidad: 1, precio: 89 }], pago: "Tarjeta" },
  { folio: "V-2043", hora: "09:05", cliente: "Mostrador", articulos: [{ nombre: "Amoxicilina 500 mg", cantidad: 1, precio: 98 }, { nombre: "Loratadina 10 mg", cantidad: 1, precio: 64 }], pago: "Efectivo" },
  { folio: "V-2044", hora: "09:31", cliente: "José R.", articulos: [{ nombre: "Metformina 850 mg", cantidad: 2, precio: 112 }, { nombre: "Losartán 50 mg", cantidad: 1, precio: 134 }], pago: "Transferencia" },
  { folio: "V-2045", hora: "10:02", cliente: "Mostrador", articulos: [{ nombre: "Ibuprofeno 400 mg", cantidad: 1, precio: 58 }, { nombre: "Alcohol etílico 70%", cantidad: 2, precio: 36 }], pago: "Efectivo" },
  { folio: "V-2046", hora: "10:26", cliente: "Ana L.", articulos: [{ nombre: "Salbutamol inhalador", cantidad: 1, precio: 186 }, { nombre: "Cetirizina 10 mg", cantidad: 1, precio: 59 }], pago: "Tarjeta" },
  { folio: "V-2047", hora: "11:14", cliente: "Mostrador", articulos: [{ nombre: "Paracetamol 500 mg", cantidad: 3, precio: 42 }, { nombre: "Clorfenamina 4 mg", cantidad: 1, precio: 38 }], pago: "Efectivo" },
  { folio: "V-2048", hora: "11:52", cliente: "Carlos M.", articulos: [{ nombre: "Atorvastatina 20 mg", cantidad: 1, precio: 168 }, { nombre: "Omeprazol 20 mg", cantidad: 1, precio: 76 }], pago: "Tarjeta" },
];

export type Merma = {
  id: string;
  fecha: string;
  articulo: string;
  cantidad: number;
  motivo: "Caducidad" | "Daño" | "Robo" | "Error de conteo";
  costo: number;
};
export const mermas: Merma[] = [
  { id: "M-118", fecha: "18 nov", articulo: "Naproxeno 550 mg", cantidad: 4, motivo: "Caducidad", costo: 156 },
  { id: "M-117", fecha: "17 nov", articulo: "Alcohol etílico 70%", cantidad: 2, motivo: "Daño", costo: 38 },
  { id: "M-116", fecha: "16 nov", articulo: "Loratadina 10 mg", cantidad: 6, motivo: "Caducidad", costo: 228 },
  { id: "M-115", fecha: "15 nov", articulo: "Suero oral", cantidad: 3, motivo: "Daño", costo: 90 },
  { id: "M-114", fecha: "14 nov", articulo: "Paracetamol 500 mg", cantidad: 5, motivo: "Error de conteo", costo: 120 },
  { id: "M-113", fecha: "12 nov", articulo: "Vitamina C", cantidad: 2, motivo: "Caducidad", costo: 104 },
  { id: "M-112", fecha: "11 nov", articulo: "Ibuprofeno 400 mg", cantidad: 3, motivo: "Daño", costo: 99 },
  { id: "M-111", fecha: "10 nov", articulo: "Cetirizina 10 mg", cantidad: 4, motivo: "Caducidad", costo: 136 },
];

export type Proveedor = {
  nombre: string;
  contacto: string;
  telefono: string;
  email: string;
  entrega: string;
  articulos: number;
};
export const proveedores: Proveedor[] = [
  { nombre: "Distribuidora Médica del Noroeste", contacto: "Lic. Rosa Almeida", telefono: "646 555 0142", email: "ventas@dmnoroeste.example.mx", entrega: "24–48 h", articulos: 9 },
  { nombre: "FarmaSur S.A. de C.V.", contacto: "Ing. Pablo Herrera", telefono: "664 555 8890", email: "pedidos@farmasur.example.mx", entrega: "48 h", articulos: 7 },
  { nombre: "Grupo Farmacéutico Península", contacto: "C.P. Diana Fuentes", telefono: "999 555 2210", email: "contacto@gfpeninsula.example.mx", entrega: "72 h", articulos: 6 },
];

export type Compra = {
  folio: string;
  fecha: string;
  proveedor: string;
  articulos: number;
  total: number;
  estado: "Recibida" | "En tránsito" | "Pendiente";
};
export const compras: Compra[] = [
  { folio: "OC-0931", fecha: "18 nov", proveedor: "Distribuidora Médica del Noroeste", articulos: 12, total: 18420, estado: "En tránsito" },
  { folio: "OC-0930", fecha: "17 nov", proveedor: "FarmaSur S.A. de C.V.", articulos: 8, total: 12750, estado: "Recibida" },
  { folio: "OC-0929", fecha: "15 nov", proveedor: "Grupo Farmacéutico Península", articulos: 10, total: 9860, estado: "Recibida" },
  { folio: "OC-0928", fecha: "14 nov", proveedor: "Distribuidora Médica del Noroeste", articulos: 6, total: 7340, estado: "Recibida" },
  { folio: "OC-0927", fecha: "12 nov", proveedor: "FarmaSur S.A. de C.V.", articulos: 9, total: 15230, estado: "Recibida" },
  { folio: "OC-0926", fecha: "10 nov", proveedor: "Grupo Farmacéutico Península", articulos: 5, total: 5210, estado: "Pendiente" },
];

export type TopVendido = { nombre: string; unidades: number; ventas: number };
export const masVendidos: TopVendido[] = [
  { nombre: "Paracetamol 500 mg", unidades: 486, ventas: 20412 },
  { nombre: "Ibuprofeno 400 mg", unidades: 312, ventas: 18096 },
  { nombre: "Omeprazol 20 mg", unidades: 268, ventas: 20368 },
  { nombre: "Suero oral", unidades: 241, ventas: 13014 },
  { nombre: "Vitamina C", unidades: 198, ventas: 17622 },
  { nombre: "Loratadina 10 mg", unidades: 176, ventas: 11264 },
  { nombre: "Amoxicilina 500 mg", unidades: 154, ventas: 15092 },
  { nombre: "Cetirizina 10 mg", unidades: 143, ventas: 8437 },
];

export type VentaCategoria = { categoria: string; ventas: number; porcentaje: number };
export const ventasPorCategoria: VentaCategoria[] = [
  { categoria: "Analgésicos", ventas: 54200, porcentaje: 29 },
  { categoria: "Gastrointestinales", ventas: 28400, porcentaje: 15 },
  { categoria: "Vitaminas y suplementos", ventas: 26100, porcentaje: 14 },
  { categoria: "Antibióticos", ventas: 24900, porcentaje: 13 },
  { categoria: "Antihistamínicos", ventas: 21800, porcentaje: 12 },
  { categoria: "Cardiovasculares", ventas: 17400, porcentaje: 9 },
  { categoria: "Control de diabetes", ventas: 9800, porcentaje: 5 },
  { categoria: "Respiratorios", ventas: 5600, porcentaje: 3 },
];

export function formatoMXN(n: number): string {
  return n.toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
}

export function diasParaCaducidad(fecha: string, referencia = "2026-11-18"): number {
  const ref = new Date(referencia + "T00:00:00");
  const cad = new Date(fecha + "T00:00:00");
  return Math.round((cad.getTime() - ref.getTime()) / 86400000);
}
