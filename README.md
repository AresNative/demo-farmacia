# FarmaDemo — Sistema de Administración para Farmacias

Demo de un sistema de administración para farmacias: dashboard con ventas del día,
ticket promedio y productos más vendidos, ventas, inventario con alertas de stock bajo
y caducidad próxima, mermas, catálogo de artículos, compras a proveedores y reportería.

**Todos los datos son de ejemplo (ficticios).** No hay login, no hay backend y no se
hace ninguna llamada a APIs externas.

## Origen

Basado en el sistema de administración de **Mercado Liz** (mercado-liz-reporteria) de
**Juan José Eusebio Rodríguez** — Full-Stack Developer con más de 7 años de experiencia
(.NET 8, SQL Server, React/TypeScript). El sistema original controla ventas, compras,
mermas e inventario en tiempo real para un supermercado; esta demo lo adapta al giro de
una farmacia para mostrar a posibles clientes lo que se puede construir para su negocio.

- GitHub: https://github.com/AresNative
- Portafolio: https://eusebio.dev

## Stack

- Next.js 16 (App Router) con `output: 'export'` — salida 100% estática
- React 19 + TypeScript
- Tailwind CSS 4
- lucide-react (iconos)

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Dashboard: ventas del día, ticket promedio, productos vendidos, gráfico de 14 días, alertas de inventario, top vendidos, últimas ventas |
| `/ventas` | Ventas por día y tickets del día con forma de pago |
| `/inventario` | Existencias, alertas de stock bajo y de caducidad próxima |
| `/mermas` | Mermas por motivo (caducidad, daño, error de conteo) y registro |
| `/articulos` | Catálogo de medicamentos por categoría, con receta y precio |
| `/compras` | Órdenes de compra y directorio de proveedores |
| `/reporteria` | Ventas por periodo, por categoría y top de productos |

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo en http://localhost:3000
npm run build    # genera la carpeta out/ (export estático)
```

Para servir la versión construida:

```bash
npx serve out
```

## Demo en vivo

https://farmacia-eusebio.web.app

## Licencia

Demo con fines de demostración comercial. Datos ficticios.
