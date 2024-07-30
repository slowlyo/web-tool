package core

import (
	"encoding/json"
	"github.com/gofiber/fiber/v2"
	"os"
)

type AppConfig struct {
	AppName string `json:"app_name"`
	Prod    bool   `json:"prod"`
}

type AppMenu struct {
	Name     string    `json:"name"`
	Path     string    `json:"path"`
	UUID     string    `json:"uuid"`
	Children []AppMenu `json:"children"`
}

type App struct {
	Config AppConfig `json:"config"`
	Menus  []AppMenu `json:"menus"`
}

var AppPath = "./data/app.json"

var appTemplate = App{
	Config: AppConfig{
		AppName: "Web Tool",
	},
	Menus: []AppMenu{
		{
			Name: "Welcome",
			Path: "/welcome",
			UUID: "welcome",
		},
	},
}

var welcomePageSchema = fiber.Map{
	"type": "page",
	"body": []fiber.Map{
		{
			"type": "html",
			"html": "<h1>Welcome to Web Tool</h1>",
		},
	},
}

func Init() {
	if IsFile(AppPath) {
		return
	}

	MakeDir("./data")
	MakeDir("./data/pages")

	if err := WriteJson(AppPath, appTemplate); err != nil {
		panic(err)
	}

	if err := WriteJson("./data/pages/welcome.json", welcomePageSchema); err != nil {
		panic(err)
	}
}

func GetApp() App {
	var app App

	f, err := os.Open(AppPath)
	defer f.Close()
	if err != nil {
		panic(err)
	}

	decoder := json.NewDecoder(f)
	if err := decoder.Decode(&app); err != nil {
		panic(err)
	}

	app.Config.Prod = IsProd()

	return app
}

func MakeDir(dir string) {
	if _, err := os.Stat(dir); os.IsNotExist(err) {
		if err := os.Mkdir(dir, 0755); err != nil {
			panic(err)
		}
	}
}

func IsFile(path string) bool {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return false
	} else {
		return true
	}
}

func WriteJson(path string, data any) error {
	f, err := os.OpenFile(path, os.O_CREATE|os.O_WRONLY, 0755)
	defer f.Close()
	if err != nil {
		return err
	}

	content, err := json.Marshal(data)
	if err != nil {
		return err
	}

	if _, err := f.WriteString(string(content)); err != nil {
		return err
	}

	return nil
}

func ReadJson(path string) any {
	var data any

	if IsFile(path) {
		f, err := os.Open(path)
		defer f.Close()
		if err != nil {
			panic(err)
		}

		decoder := json.NewDecoder(f)
		if err := decoder.Decode(&data); err != nil {
			panic(err)
		}
	}

	return data
}

func PagePath(path string) string {
	return "./data/pages/" + path + ".json"
}

func SetProd(prod *bool) {
	if *prod {
		_ = os.WriteFile("./data/.prod", nil, 0644)
	} else {
		_ = os.Remove("./data/.prod")
	}
}

func IsProd() bool {
	return IsFile("./data/.prod")
}
