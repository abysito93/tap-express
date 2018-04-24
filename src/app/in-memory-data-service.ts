import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const mainCourses = [
            { id: 1, name: "Asopao de Gandules", price: 3.95, veg: false },
            { id: 2, name: "Pollo Rostizado", price: 4.50, veg: false },
            { id: 3, name: "Pasta a la Primavera", price: 4.75, veg: true },
            { id: 4, name: "Filete de Cerdo Encebollado", price: 4.95, veg: false },
            { id: 5, name: "Pechuga de Pollo a la Plancha", price: 5.50, veg: false },
            { id: 6, name: "Serenata de Bacalao", price: 5.75, veg: false },
            { id: 7, name: "Ensalada de Mariscos", price: 5.95, veg: false },
            { id: 8, name: "Chicharrones de Pescado", price: 5.95, veg: false },
            { id: 9, name: "Bistec al Pimiento", price: 6.25, veg: false },
            { id: 10, name: "Churrasco al Caldero", price: 8.25, veg: false }
        ];

        const mainCourses2 = [
            { id: 1, name: "Sopa de Res y Fideo", price: 0.00, veg: false },
            { id: 2, name: "Pollo Rostizado", price: 0.00, veg: false },
            { id: 3, name: "Papas Salteadas", price: 0.00, veg: true },
            { id: 4, name: "Carne de Res con Brocoli", price: 0.00, veg: false },
            { id: 5, name: "Pechuga de Pollo a la Plancha", price: 0.00, veg: false },
            { id: 6, name: "Pavo al Horno", price: 0.00, veg: false },
            { id: 7, name: "Churrasco al Caldero", price: 0.00, veg: false }
        ]

        const complements = [
            { id: 1, name: "Arroz Blanco" },
            { id: 2, name: "Arroz Blanco con Habichuelas" },
            { id: 3, name: "Arroz Guisado" },
            { id: 4, name: "Arroz Guisado con Habichuelas" },
            { id: 5, name: "Habichuela" },
            { id: 6, name: "Tostones" },
            { id: 7, name: "Amarillos" },
            { id: 8, name: "Ensalada Verde" },
            { id: 9, name: "Vegetales" }
        ];

        const sandwiches = [
            { id: 1, name: "Tostadas" },
            { id: 2, name: "Pastrami" },
            { id: 3, name: "Jamon, Queso y Huevo" },
            { id: 4, name: "Jamon y Queso" },
            { id: 5, name: "Tripleta" },
            { id: 6, name: "Atún" },
            { id: 7, name: "Media Noche" },
            { id: 8, name: "Cubano" }
        ];

        const pastaMeats = [
            { id: 1, name: "Churrasco" },
            { id: 2, name: "Pollo" },
            { id: 3, name: "Camarones" }
        ];

        const pasta = [
            { id: 1, name: "Penne" },
            { id: 2, name: "Triccoli" }
        ];

        const breakfast = [
            { id: 1, name: "Revoltillo" },
            { id: 2, name: "Avena" }
        ];

        const wraps = [

        ];

        return { mainCourses, complements, sandwiches, pastaMeats, pasta, breakfast, wraps };
    }
}