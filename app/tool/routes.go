package tool

import (
	"github.com/gofiber/fiber/v2"
	"web-tool/app/tool/controllers/amis"
)

func RoutesRegister(route fiber.Router) {
	route.Get("/_app", amis.App)
	route.Get("/_schema", amis.Schema)
	route.Post("/_save", amis.Save)
	route.Post("/_del", amis.Del)
	route.Post("/_config", amis.SaveConfig)
}
