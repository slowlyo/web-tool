package amis

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/utils"
	"os"
	"web-tool/pkg/core"
	"web-tool/pkg/response"
)

func App(c *fiber.Ctx) error {
	return c.JSON(response.Success("ok", core.GetApp()))
}

func Schema(c *fiber.Ctx) error {
	uuid := c.Query("uuid")

	filePath := "./data/pages/" + uuid + ".json"

	if !core.IsFile(filePath) {
		return c.JSON(response.Fail("页面不存在"))
	}

	return c.JSON(response.Success("ok", core.ReadJson(filePath)))
}

type reqParams struct {
	UUID   string    `json:"uuid"`
	Name   string    `json:"name"`
	Path   string    `json:"path"`
	Schema fiber.Map `json:"schema"`
}

func Save(c *fiber.Ctx) error {
	params := new(reqParams)

	if err := c.BodyParser(params); err != nil {
		return c.JSON(response.Fail("参数错误"))
	}

	isEdit := true
	uuid := params.UUID

	if uuid == "" {
		uuid = utils.UUID()
		isEdit = false
	}

	app := core.GetApp()

	menu := core.AppMenu{
		Name: params.Name,
		Path: params.Path,
		UUID: uuid,
	}

	for _, v := range app.Menus {
		if v.Path == menu.Path && !isEdit {
			return c.JSON(response.Fail("路径重复"))
		}
	}

	if isEdit {
		for i, v := range app.Menus {
			if v.UUID == uuid {
				app.Menus[i] = menu
			}
		}
	} else {
		app.Menus = append(app.Menus, menu)
	}

	if err := core.WriteJson(core.AppPath, app); err != nil {
		return c.JSON(response.Fail("保存失败"))
	}

	filePath := "./data/pages/" + uuid + ".json"

	if err := core.WriteJson(filePath, params.Schema); err != nil {
		return c.JSON(response.Fail("保存失败"))
	}

	return c.JSON(response.Ok("保存成功"))
}

func Del(c *fiber.Ctx) error {
	params := new(reqParams)

	if err := c.BodyParser(params); err != nil {
		return c.JSON(response.Fail("参数错误"))
	}

	app := core.GetApp()

	for i, v := range app.Menus {
		if v.UUID == params.UUID {
			app.Menus = append(app.Menus[:i], app.Menus[i+1:]...)
		}
	}

	if err := core.WriteJson(core.AppPath, app); err != nil {
		return c.JSON(response.Fail("保存失败"))
	}

	if err := os.Remove(core.PagePath(params.UUID)); err != nil {
		return c.JSON(response.Fail("删除失败"))
	}

	return c.JSON(response.Success("删除成功", params))
}

func SaveConfig(c *fiber.Ctx) error {
	params := new(core.App)

	if err := c.BodyParser(params); err != nil {
		return c.JSON(response.Fail("参数错误"))
	}

	if err := core.WriteJson(core.AppPath, params); err != nil {
		return c.JSON(response.Fail("保存失败"))
	}

	return c.JSON(response.Success("保存成功", nil))
}
