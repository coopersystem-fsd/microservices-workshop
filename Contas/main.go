package main

import (
	"contas/settings"

	"github.com/gin-gonic/gin"
)

func main() {
	config := settings.GetEnvs()

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	port := ":" + config.PORT
	r.Run(port)
}
