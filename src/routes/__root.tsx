// import Footer from '@/components/Footer'
// import Header from '@/components/Header'
import { createRootRoute, Outlet } from '@tanstack/react-router'

export default function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})