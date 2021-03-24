import { Footer, Header, Main, Wrapper } from './'


export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}
