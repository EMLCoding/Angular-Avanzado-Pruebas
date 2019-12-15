# Pruebas
    Para agrupar pruebas: describe();
    Es una prueba específica: it();

    Para lanzar la aplicación en modo pruebas hay que usar: ng test
    Si queremos que nos muestre el porcentaje del programa cubierto por pruebas: ng test --code-coverage . Esto crea una carpeta 'coverage' en el proyecto con un archivo 'index.html' donde se pueden ver las estadísticas de cobertura

# Ciclos de vida de las pruebas
    beforeAll() -> se ejecuta antes que cualquier 'it' pero SOLO UNA VEZ
    beforeEcha() -> se ejecuta una vez antes que cada prueba
    afterAll() -> se ejecuta una vez despues de terminar todas las pruebas
    afterEach() -> se ejecuta una vez después de cada una de las pruebas