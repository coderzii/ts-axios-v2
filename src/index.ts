import { AxisoRequestConfig } from './types'
import xhr from './xhr'
function axios(config: AxisoRequestConfig): void {
  xhr(config)
}

export default axios
