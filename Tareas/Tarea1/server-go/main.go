package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

type data struct{
	Carne		string 			//json:id
	Nombre 		string			//json:tittle
}

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Get("/healthcheck",func(c *fiber.Ctx) error {
		return c.SendString("Ok")
	})

	app.Get("/data",func(c *fiber.Ctx) error {
		
		datos := []data{
			{
				Carne: "201313997",
				Nombre: "Luis Noe Martinez Rivera",
			},
		}
		return c.JSON(datos)
	})
	log.Fatal(app.Listen(":9000"))

}