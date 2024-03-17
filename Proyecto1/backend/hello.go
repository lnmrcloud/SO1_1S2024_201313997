package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"bytes"
	"fmt"
	"os/exec"
)

const direcion = "/server-go"
const ShellToUse = "cat"
const ls = "ls"
const comando = "ram_so1_1s2024"
const meminfo = "meminfo"

type data struct {
	Carne  string //json:id
	Nombre string //json:tittle
}

func get_ram_kernel(command string) (string, string, error) {
	var stdout bytes.Buffer
	var stderr bytes.Buffer

	//obtener dato de ram utilizada actual (se actualiza cada tiempo parametrizado)
	cmd := exec.Command(ShellToUse, comando)
	cmd.Dir = "/proc"
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	err := cmd.Run()

	return stdout.String(), stderr.String(), err

}

func main() {
	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("Ok")
	})

	app.Get("/ram_kernel", func(c *fiber.Ctx) error {
		out, errout, err := get_ram_kernel("ls -ltr")
		if err != nil {
			log.Printf("error: %v\n", err)
		}
		fmt.Println(out)
		fmt.Println(errout)

		return c.SendString(out)
	})

	app.Get("/data", func(c *fiber.Ctx) error {

		datos := []data{
			{
				Carne:  "201313997",
				Nombre: "Luis Noe Martinez Rivera",
			},
		}
		return c.JSON(datos)
	})
	log.Fatal(app.Listen(":9000"))

}
