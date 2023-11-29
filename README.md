# CURSO DE MAQUETACION NIVEL 1
## FASE 3: APLICACION PARA GESTION DE CERTIFICADOS DE ESTUDIANTES

## Introducción y forma de trabajo
Estaremos trabajando en tres vistas las cuales seran totalmente funcionales pero debes considerar ciertas cosas, asi que lee este README con atención
### Reglas sobre git
- NUNCA se sube cambios a las ramas **main**, **develop** o **features**
- Las nuevas ramas siempre se crean a partir de **features** y previa consulta al lider del proyecto
- Las ramas nuevas siguen la siguiente nomenclatura
  - feature/nombre: cuando se esta desarrollando alguna nueva caracteristica
  - fix/nombre: Cuando se va corregir alguno error o bug
- Las solicitudes de integracion o Pull Request (PR) deben ser solicitadas siempre contra **features**
- Usa el flujo de trabajo
  - git add [archivo]
  - git commit -m "algun mensaje"
  - git pull
  - git push
- No usar comandos de git que consigas por internet, si tienes alguna duda o problema consulta con tu lider de equipo
- NUNCA se sube cambios a las ramas **main**, **develop** o **features**
  - Sí, esta repetido porque es importantisimo
  - Este error implica dañar el proyecto y el trabajo de tus compañeros

### Sugerencias sobre git
- No esperes a terminar todo el trabajo para subir tus cambios
  - Si terminas una parte concreta puedes subirlo para que la revision no sea tan cansona
  - Tampoco subas cambios cada vez que escribas una linea

### Vista: Perfil
- En esta se debe mostrar toda la informacion del usuario logeado.
- Estos usuarios seran los estudiantes de Kavav Digital (Academia).
- Debe poseer en el sidebar
  - Imagen o Avatar
  - Nombre del estudiante
  - Nombre usuario en github, linkeado al github del usuario
  - Puntuacion general en los cursos realizados
- Debe poseer en la columna principal
  - Los cursos realizados a modo de tarjetas donde indicara su puntaje
  - Los proximos cursos disponibles
- Layout propuesto:
   - ![image](https://github.com/zenx5/curso-fase-3/assets/26119733/37a48bcb-3710-42a3-a42b-011043efbb6f)


### Vista: Login
- Es un box centrado tanto en horizontal como en vertical
- Fondo opaco, se puede usar un slate o un gray suave
- Debe poseer el campo email y el campo contraseña
- Debe poseer el boton de acceder
- Debe poseer un boton de acceder con Github
- Layout propuesto:
  - ![image](https://github.com/zenx5/curso-fase-3/assets/26119733/31229280-79bb-427d-a143-f0840e948e85)


### Vista: Consulta
- es un input para busquedas a un 1/3 del top de la web
- Al consultar el codigo del certificado o el email del estudiante debe desplegar una card donde se vea:
  - Dos columnas, donde en la primera aparece:
    - Imagen o Avatar
    - Nombre del estudiante
    - Nombre usuario en github, linkeado al github del usuario
    - Puntuacion general en los cursos realizados
  - En la segunda columna debe mostrarse:
    - Si se consulto el email: Listado de los cursos realizados y su puntaje
    - Si se consulto el certificado: Nombre del curso, temas tratados, calificacion del curso, Horas dictadas, horas asistidas
- Layout propuesto:
  - ![image](https://github.com/zenx5/curso-fase-3/assets/26119733/1a850c53-2f99-4d3f-a6eb-ac30dd733337)


