import commonConfig from './common.config'
import ProductionConfig from './production.config'

export class ConfigModel {
  IMAGE_CDN_URL?: string
}

let config: ConfigModel = commonConfig
config = Object.assign(config, ProductionConfig)

export default config
