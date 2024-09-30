package main

import (
	"embed"
	"flag"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"log"
	"net/http"
	"strconv"
	"web-tool/pkg/response"
	"web-tool/routes"
)

var (
	//go:embed web/*
	dist embed.FS
	// 运行端口
	port = flag.Int("port", 3000, "Port to listen on")
	// 是否使用打包的静态文件
	useEmbed = true
	// 最大尝试次数
	maxAttempts = 100
)

func main() {
	flag.Parse()

	app := fiber.New(fiber.Config{
		AppName: "Web Tool",
		ErrorHandler: func(ctx *fiber.Ctx, err error) error {
			return ctx.JSON(response.Fail(err.Error()))
		},
	})

	app.Use(logger.New())
	app.Use(recover.New())

	routes.Register(app)

	if useEmbed {
		app.Use("/", filesystem.New(filesystem.Config{
			Root:       http.FS(dist),
			Browse:     true,
			PathPrefix: "web",
		}))
	} else {
		app.Static("/", "./web")
	}

	// not found
	app.Use(func(c *fiber.Ctx) error {
		return c.Redirect("/")
	})

	for i := 0; i < maxAttempts; i++ {
		portStr := strconv.Itoa(*port + i)

		// 尝试监听端口
		if err := app.Listen(":" + portStr); err != nil {
			log.Printf("Failed to listen on port %s: %v", portStr, err)
			if i == maxAttempts-1 {
				log.Fatalf("All attempts to listen on a port have failed")
			}
			continue
		}
	}
}
