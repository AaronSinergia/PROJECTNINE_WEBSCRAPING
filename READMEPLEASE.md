Hola!

He intentado ser original, usar una web distinta y en general apostar por funcionalidades que no he usado nunca e investigar.

He realizado un scrap de una web de venta de instrumentos musicales llamada "Thomann".

Me he traído unos elementos en concreto, que son bajos eléctricos de una marca, los he añadido a un json, luego he creado una semilla con la que he conseguido volcar el array en Mongo Atlas.

Una vez realizado esto, he creado una funcionalidad en package.json que permite con un shortcut realizar el scrapping de forma más cómoda, de dos formas:

1 - Por comando: npm run scrap
2 - A través de la api y sólo si tienes la clave de admin por la ruta: http://localhost:3000/api/v1/thoman_scrapped
