package settings

import "github.com/crgimenes/goconfig"

// Environments - Interface de configurações
type Environments struct {
	PORT string `cfgDefault:"8000"`
}

// GetEnvs - Carregas as configurações
func GetEnvs() (envs Environments) {
	envs = Environments{}
	err := goconfig.Parse(&envs)
	if err != nil {
		panic(err)
	}
	return
}
