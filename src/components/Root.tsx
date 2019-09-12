import * as React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { configureStore } from 'store/'
import 'majime'

const store = configureStore()

export const Root = () => {
  return (
    <Provider store={ store }>
      <View/>
    </Provider>
  )
}
