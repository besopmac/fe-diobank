import { PropsWithChildren } from "react"
import { Header } from './Header/Header';
import { Footer } from './Footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      { children }
      <Footer />
    </>
  )
}
