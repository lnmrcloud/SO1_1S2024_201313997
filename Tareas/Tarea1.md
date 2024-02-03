# Tarea 1

LUIS NOE MARTINEZ RIVERA 201313997

## REST API

### CONFIGURACION GO

+   go mod init e
+   go get github.com/gin-gonic/gin

## DOCKER REST API

+ docker build -t restapi-tarea1 .
+ docker images
+ docker run -p 9000:9000 e4a09ba915a0
+ docker ps
+ docker stop 495a63bf8744

## FRONT-END

## DOCKER FRONT-END

+ docker build -t frontend-tarea1 . 
+ docker images
+ docker run -p 3000:3000 3322f48e18e0
+ docker ps
+ docker stop tag-container

## RESUMEN

+ Verificación de imagenes

![Verificación de imagenes](2%20Docker%20images%20-%20tarea%201.PNG)


+ Verificacion de contenedores

![Verificacion de contenedores](1%20Docker%20ps%20-%20tarea%201.PNG)

+ Probando app mas servicio

![Probando app mas servicio](3%20Servicios%20-%20Tarea1.PNG)

+ Servicios en contenedores activos

![Servicios en contenedores activos](4%20Docker%20ps%20-%20ejecucion%20-%20tarea1.PNG)
