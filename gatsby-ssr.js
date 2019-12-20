import ReduxProvider from './src/store/redux_wrapper'

export const wrapRootElement = ReduxProvider

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents()
  console.log('the headcomponents are ', headComponents)
  // replaceHeadComponents(headComponents)
}
