export type Method =
  | 'GET'
  | 'get'
  | 'POST'
  | 'post'
  | 'DELETE'
  | 'delete'
  | 'PUT'
  | 'put'
  | 'OPTIONS'
  | 'options'
  | 'PATCH'
  | 'patch'

export interface AxisoRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
