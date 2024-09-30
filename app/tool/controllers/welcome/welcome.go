package welcome

import (
	"github.com/gofiber/fiber/v2"
	"web-tool/pkg/response"
)

func Welcome(c *fiber.Ctx) error {
	return c.JSON(response.Ok("Welcome!"))
}
