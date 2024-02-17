package main

import (
	"context"
	"fmt"
	"os/exec"
	"log"
	"bytes"
    "strings"
    "strconv"
)


const direcion = "/proc"
const ShellToUse = "cat"
const ls ="ls"
const comando = "ram_201313997"


const meminfo = "meminfo"


// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}


//funciones de lectura command golang RAM en uso
func get_ram_kernel(command string) (string, string, error) {
    var stdout bytes.Buffer
    var stderr bytes.Buffer


    //obtener dato de ram utilizada actual (se actualiza cada tiempo parametrizado)
    cmd := exec.Command(ShellToUse,comando)
    cmd.Dir = "/proc"
    cmd.Stdout = &stdout
    cmd.Stderr = &stderr
    err := cmd.Run()

    return stdout.String(), stderr.String(), err

}


//funcion de lectura de command golang - RAM Total

func get_ram_actual(command string) (string, string, error) {
    var stdout bytes.Buffer
    var stderr bytes.Buffer

	//Obtener el dato de RAM total

    cmd := exec.Command(ShellToUse, meminfo)
    cmd.Dir = "/proc"
    cmd.Stdout = &stdout
    cmd.Stderr = &stderr
    err := cmd.Run()

    var ram_actual = split_ram_actual(stdout.String())

    return ram_actual, stderr.String(), err
}


func split_ram_actual(ram_actual string) string {

	// hacer split de valor que nos interesa - Ram Total , valor mostrado siempre en kB
    numeros := strings.Split(ram_actual,"kB")
    fmt.Println("Primer Split : ", numeros)
    var valor_ram = split_text_ram_actual(numeros[0])


    return valor_ram
}

func split_text_ram_actual(ram_actual string) string {

	//se recibe titulo : numero 0 1 2 
	numeros := strings.Split(ram_actual,":")
	fmt.Println("Segundo split : ", numeros)

    return strings.TrimSpace(numeros[1])

}


func porcentaje(actual string, total string) (float64,float64) {

	actual_nuevo, err := strconv.ParseFloat(actual,64)
	total_nuevo, err1 := strconv.ParseFloat(total,64)


	fmt.Println("actual conversion: ", actual_nuevo)
	fmt.Println("total conversion: ", total_nuevo)
	fmt.Println("err conversion: ", err)
	fmt.Println("err1: ", err1)

	var porcentaje_calculo = actual_nuevo/total_nuevo
	var usado = porcentaje_calculo * 100
	var libre = 100 - usado

	return usado, libre
}	

func (a *App) Obtener_ram() string {

	//Obtener ram actual
    out, errout, err := get_ram_kernel("ls -ltr")
    if err != nil {
        log.Printf("error: %v\n", err)
    }
    fmt.Println(out)
    fmt.Println(errout)

    //obtener ram total en string del meminfo
    out_actual, errout_actual, err_actual := get_ram_actual("ls -ltr")
    if err_actual != nil {
        log.Printf("error: %v\n", err_actual)
    }


    fmt.Println(out_actual)
    fmt.Println(errout_actual)

    usado, libre := porcentaje(out,out_actual)
    fmt.Println(usado,libre)

	return fmt.Sprintf("RAM usada: %skB, RAM Total: %skB ... ... Porcentaje de uso: %.2f, Porcentaje libre: %.2f", out, out_actual,usado,libre)

}

