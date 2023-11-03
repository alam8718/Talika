import { createContext, useContext } from 'react'

export const TalikaContext = createContext({
  todos: [
    {
      id: 1,
      todo: 'Todo message',
      completed: false
    }
  ],
  addTalika: (todo) => { },
  updateTalika: (id, todo) => { },
  deleteTalika: (id) => { },
  toggleComplete: (id) => { }

});
//exporting the provider
export const TalikaProvider = TalikaContext.Provider

// exporting a custom hook 
export const useTalika = () => {
  return useContext(TalikaContext)
}