export type IPpobType = 'electricity_token' | 'pulsa' | 'data_packages' | 'bpjs'

export type IMenuPpob = {
  icon: React.JSX.Element
  label: string
  type: IPpobType
}
