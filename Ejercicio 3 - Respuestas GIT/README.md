# Ejercicio 3
### Simulamos que se tienen el branch Master y el branch DEV, este último está adelantado dado que tiene nuevas funcionalidades.
> Se quiere revertir la última funcionalidad pusheada

Suponiendo que se quiere revertir un commit en la rama `dev`, el primer paso es situarnos en esa rama

`git checkout dev`

Después de eso, para poder revertir el último commit es necesario que obtengamos el **hash** del commit a revertir
 
`git log`

Esto nos devuelve una lista de commits sobre la rama en la que estamos parados, también es posible obtener este hash mediante la web gestora del repositorio, por ejemplo en GitHub es https://github.com/usuario/repositorio/commits/rama/

Una vez se tiene el hash del commit, hay que revertir esos cambios

`git revert <commit_hash>`

Posteriormente es posible que existan conflictos, si estos toman lugar primero habrá que resolverlos, y una vez resueltos continuamos stageando los cambios que provocó el revert
 
`git add .`

Por último, hay que subir los cambios

`git push origin dev` o simplemente`git push` si el origen ya está setteado. 

> Se quiere hacer un deploy en producción de la versión que llamaremos v1.2.0

Para hacer un deploy en producción de la versión v1.2.0, primero creamos un nuevo branch de release basado en el estado actual de la branch `dev`, esto nos permite separar los cambios específicos para esta versión

`git checkout -b release-v1.2.0`

En este nuevo branch, actualizamos el número de versión en el archivo correspondiente, por lo general en el `package.json`.

Posterior a eso, se agregan los cambios con `git add .` y se hace un `git push origin release-v1.2.0`.

Con los cambios preparados en la branch`release-v1.2.0`, se procede con el deploy en nuestro entorno de producción, y una vez realizado se podría fusionar la branch `release-v1.2.0` de vuelta a `master` para establecer la nueva versión como la última estable en producción.
