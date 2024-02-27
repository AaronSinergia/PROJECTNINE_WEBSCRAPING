DOCUMENTACIÓN DIRECTORIO BAJOS ELECTRICOS Y USUARIOS BBDD (SPANISH)
+++++++++++++++++++++++++++++++++++++++++++++++

(Si quieres hacer pruebas con usuario Admin haz login con las siguientes credenciales:
{
"userName": "AaronSinergia",
"password": "AaronSinergia123"
}
)

API_URL
++++++
Endpoint sobre BAJOS ELÉCTRICOS (incluye info sobre BANDAS relacionadas):
http://localhost:3000/api/v1/bassGuitars

Endpoint sobre USUARIOS:
http://localhost:3000/api/v1/users

Endpoint que activa la funcionalidad de hacer Scrap en la web Thomann, en el apartado bajos eléctricos Ibanez.
http://localhost:3000/api/v1/thoman_scrapped
++++++

Como puedo gestionar distinto el tipo de información con mi api:

1 - Consultar info (GET): Usa la url básica proporcionada arriba en el caso de BAJOS ELÉCTRICOS. Y la url básica de USUARIOS, SÓLO funciona, si te logeas con el usuario Admin.

2 - Crear info/registrar usuario nuevo (POST): Usa la url: http://localhost:3000/api/v1/bassGuitars/bassGuitarScrapeds (Cargala info scrapeada en la api) (SÓLO funciona, si te logeas con el usuario Admin).

3 - Registrate/Logueate con tu usuario para obtener permisos especiales: Añadiendo al endpoint de USUARIOS: "/register" o "/login".

5 - Borrar USUARIOS: Una vez logeado (sólo si eres administrador) Añade al final de la url el id de elemento a eliminar. (Ej. "/3423523466")

DOCUMENTATION FOR ELECTRIC BASS DIRECTORY AND DATABASE USERS (ENGLISH)
+++++++++++++++++++++++++++++++++++++++++++++++

(If you want to test with an Admin user, log in with the following credentials:
{
"userName": "AaronSinergia",
"password": "AaronSinergia123"
}
)

API_URL
++++++
Endpoint for ELECTRIC BASSES (includes information about related BANDS):
http://localhost:3000/api/v1/bassGuitars

Endpoint for USERS:
http://localhost:3000/api/v1/users

Endpoint that activates the Scrap functionality on the Thomann website, specifically for Ibanez electric basses.
http://localhost:3000/api/v1/thoman_scrapped
++++++

How to manage different types of information with my API:

1 - Retrieve information (GET): Use the basic URL provided above for ELECTRIC BASSES. And the basic URL for USERS only works if you log in with the Admin user.

2 - Create information/register new user (POST): Use the URL: http://localhost:3000/api/v1/bassGuitars/bassGuitarScrapeds (Load scraped info into the API) (Only works if you log in with the Admin user).

3 - Register/Login with your user to obtain special permissions: Add to the USERS endpoint: "/register" or "/login".

5 - Delete USERS: Once logged in (only if you are an administrator), add the element id to the end of the URL to delete it. (E.g., "/3423523466")
