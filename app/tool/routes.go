package tool

import (
	"github.com/gofiber/fiber/v2"
	"web-tool/app/tool/controllers/welcome"
)

func RoutesRegister(route fiber.Router) {
	route.Get("/welcome", welcome.Welcome)
}
