import NavBar from "./navBar"

function Layout({ children }) {
  return (
      <>
        <NavBar/>
        <main>{ children }</main>
      </>
  )
}
export default Layout