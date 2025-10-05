import { multiselect } from '@clack/prompts'
import { MODULES } from '@create-uni/config'

export default () => (
  multiselect({
    message: '选择需要的库:',
    options: MODULES,
    required: false,
  })
)
