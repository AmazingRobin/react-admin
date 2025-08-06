import handle from './index'


const reducer = ( state = {...handle.state}, action: { type: string}) => {
  const newState = structuredClone(state);
  const han: { [key: string]: string } = handle.actionNames;
  for( const key in han){
    if( action.type === han[key]){
      ((handle.action as unknown) as Record<string, (state: typeof newState, action: { type: string }) => void>)[han[key]](newState, action);
      break;
    }
  }
  return newState;
}

export default reducer;