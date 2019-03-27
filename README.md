# Almundo
Este proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0. implementa [@angular/materia](https://material.angular.io) + [@ngrx](https://ngrx.io/)


## Redux
Como arquitectura de datos basa en estados

```
 > npm install
```

## Modo Desarrollo

Ejecuta el comando `ng server` para levantar servidor. Navegar a `http://localhost:4200/`. La app automáticamente recarga el navegado si hay cambios en los archivos.

## Build

Ejecuta el comando`ng build` para transpilar el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`. Use el indicador `-prod` o el comando `--prod` para una transpilacion de producción.


## Configuracion

El archivo urls.json dentro de la carpeta ./assets/config pose los atributos almundoApi Host de los servicios, ruta publica donde esta desplegado el proyecto almundo-API y assets ruta publica donde esta desplegado los assetes de la aplicación

## Estructura del proyecto
 ```
-app
--modules
---hotels
----components
-----card-hotel
-----filter
-----store
---shared
----animations
----interfaces
----models
----services
--store
--components
---header
-assets
--config
---config.json
```
### Modulos

#### Shared Modulo

Contiene los componentes, modules, interfaces, servicios, importaciones, declaraciones que puedan ser utilizados por otros modulos

##### contenido
Componentes: 

Interfaces:
  hotel: Esta interfas define un hotel y puede ser accedida desde cualquier otro modulo
Module:
  hotel: Esta Modelo define un hotel y puede ser accedida desde cualquier otro modulo
Services:
 hotel.services: Servicio para obtener los hoteles filtrados
 url.services: Servicio para obtener las urls de la api y assets
 Animations:
  animaciones angular

  
  
##### uso

En los módulos donde se quiera utilizar archivo de configuración del modulo debe importar SharedModule 

```
import { SharedModule } from '.../shared/shared.module';
@NgModule({
  imports: [
    ...,
    SharedModule
  ],...);
```

### Modulos

#### Hotels Modulo

Contiene los componentes, importaciones, declaraciones utilizados en la vista de hoteles

##### contenido
componentes: 
  Card-hotel: Este componente contine el template view de un hotel,
  Filter: Este componente contine el template view de los filtros se comunica con el Store para ejecutar las accionde de filtrar,


##### uso
En los módulos donde se quiera utilizar archivo de configuración del modulo debe importar SharedModule 

```
import { HotelsModule  } from '.../modules/hotels/hotels.module';
@NgModule({
  imports: [
    ...,
    HotelsModule
  ],...);
```



### Rutas
Contiene la configuración rutas del proyecto

### Rutal disponibles

Lista de hoteles
```
http://localhost:4200/
```


## Autor

* **John Alexander Fonseca Tumay**
