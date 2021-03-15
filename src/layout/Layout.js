import { Wrapper, Header, Main, Footer } from './'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}
