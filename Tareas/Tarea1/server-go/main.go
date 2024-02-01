package main

import (
	"fmt"

	"net/http"

	"github.com/gin-gonic/gin"
)

type todo struct{
	ID			string 			//json:id
	Item 		string			//json:tittle
	Completed 	bool			//json:completed
}

var todos = []todo{
	{ID:"1", Item:"Clean Room" , Completed:false},
	{ID:"2", Item:"Read book" , Completed:false},
}

func getTodos(context *gin.Context){
	context.IndentedJSON(http.StatusOK, todos)
}

func main() {
	fmt.Println("This is my first program in Go")
	router := gin.Default()
	router.GET("/todos", getTodos)
	router.Run("localhost:9000")
}