# Proyecto 1

LUIS NOE MARTINEZ RIVERA 201313997

## VIDEO PROYECTO 1

+ [Proyecto 1  - Entrega](https://youtu.be/)


## SERVIDOR LOCAL UBUNTU 22.04

+ Ip local de conexión 192.168.1.20/24

## CONFIGURACION

### MODULOS KERNEL

+ sys/sysinfo.h
+ linux/mm.h
+ ram.c - Metodos para obtencion de uso de ram en Kernel
+ cpu.c - Metodos para obtencion de uso de cpu en Kernel
+ comando: sudo insmod ram.ko, modulo ; en carpeta de Kernel
+ comando: cd /proc
+ comando: ls ... ram_so1_1s2024
+ comanndo: cat ram_so1_1s2024
+ repetir con cpu.ko
+ Finalizar: sudo rmmod ram.ko eliminar modulo en carpeta /proc


+ cat stat - obtener el uso del cpu
+ cpu  --    --  --     idle   --   -- --  -- -- -- 
+ cpu  84034 200 93568 3032902 3372 0 8586 0 0 0
+ Se descarta el "cpu"
+ Suman todos los valores
+ Se divide la columa idle entre valor total para obtener el porcentaje de idle
+ Diferencia a 1 y porcentaje para el %uso de cpu

### BACKEND

+ go mod init e
+ go get github.com/gin-gonic/gin
+ dockerfile

### FRONTEND

+ npx create-react-app proyecto1-app
+ npm start
+ dockerfile
+ docker build -t docker

### DATABASE

+ local mysql -u root -p
+ docker-compose up -d

## INSTRUCCIONES


## VERSIONES

+ node -v v18.19.1
+ npm 10.2.4
+ curl 7.81.0
+ go version go1.18.1 linux/amd64


## COMANDOS DOCKER

+ docker login
+ docker images
+ docker ps -a 
+ docker build -t nombre-app .
+ docker volume ls
+ docker-compose build


+ docker rm container-id
+ docker rmi image-id -f
+ docker rm -v container-id 
+ docker volume rm name_volume
+ docker volume prune
+ docker system prune -a

## ANEXOS

+ VirtualBox [Problemas comunes VirtualBox](https://www.youtube.com/watch?v=N-YJN4NQMl8)
+ VirtualBox UI Ubuntu Server 22.04 [Instalar UI minimal ubuntu server 22.04](https://www.layerstack.com/resources/tutorials/How-to-install-Graphical-User-Interface-GUI-for-Ubuntu-22-Cloud-Servers)
+ Instalar npm ubuntu 20.04 [Instalación de npm en ubuntu 20.04 - Terminal](https://www.hostinger.com/tutorials/how-to-install-node-ubuntu?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=9077183&gad_source=1&gclid=CjwKCAiArLyuBhA7EiwA-qo80K3AW9v4WeSNSQBE95mEfSa-6Zi6O9f3cdR7Plz3QpYjRN9G_1qQChoCYXsQAvD_BwE)
+ Instalar wails[Instalador de wails](https://dev.to/farooquememon385/install-wails-on-linux-kph)