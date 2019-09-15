import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

setOptions({
  addonPanelInRight: true
})

const req = require.context('..src/components', true, /\.stories\.(js|jsx)$/)

function loadStories () {
  // You can require as many stories as you need.
  req.keys().forEach((filename) => req(filename))
}ss

configure(loadStories, module)
