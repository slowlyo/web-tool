package routes

import (
	"github.com/gofiber/fiber/v2"
	"web-tool/app/tool"
)

func Register(app *fiber.App) {
	api := app.Group("/api")

	tool.RoutesRegister(api)
}
