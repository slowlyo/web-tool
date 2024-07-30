package response

import "github.com/gofiber/fiber/v2"

func Success(msg string, data interface{}) fiber.Map {
	return fiber.Map{
		"status": 0,
		"msg":    msg,
		"data":   data,
	}
}

func Ok(msg string) fiber.Map {
	return fiber.Map{
		"status": 0,
		"msg":    msg,
		"data":   fiber.Map{},
	}
}

func Fail(msg string) fiber.Map {
	return fiber.Map{
		"status": 1,
		"msg":    msg,
		"data":   fiber.Map{},
	}
}
