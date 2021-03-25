import * as React from "react"
import MobileMenu from "./HeaderSubComponents/MobileMenu"
import DesktopMenu from "./HeaderSubComponents/DesktopMenu"

interface HeaderProps {
  siteTitle: String
}

const Header: React.FC<HeaderProps> = ({ siteTitle = `` }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isFadeIn, setIsFadeIn] = React.useState(true)

  const openMenu = () => {
    setMobileMenuOpen(true)
    setIsFadeIn(true)
  }

  return (
    <div className="sticky top-0 bg-white z-50">
      <DesktopMenu openMenu={openMenu} />
      <MobileMenu
        isFadeIn={isFadeIn}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsFadeIn={setIsFadeIn}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  )
}

export default Header
