import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react"

interface State {
  user: string
  width: number
}

interface ContextAppType {
  state: State
  setState: Dispatch<SetStateAction<State>>
}

export const ContextApp = createContext<ContextAppType | undefined>(undefined)

interface ProviderAppProps {
  children: ReactNode
}

export const ProviderApp = ({ children }: ProviderAppProps) => {
  const [state, setState] = useState<State>(() => {
    const storedUser = localStorage.getItem("user")
    const width = window.innerWidth
    return {
      user: storedUser || "Jorge Usuga",
      width: width,
    }
  })

  useEffect(() => {
    const handleResize = () => {
      setState((prevState) => ({
        ...prevState,
        width: window.innerWidth,
      }))
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("user", state.user)
  }, [state.user])

  return (
    <ContextApp.Provider value={{ state, setState }}>
      {children}
    </ContextApp.Provider>
  )
}
