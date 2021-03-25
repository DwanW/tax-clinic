import React from "react"

interface SectionContainerProps {
  title: string
  center?: Boolean
  id?: string
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  center,
  id,
  children,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id={id ? id : undefined}>
      <div
        className={`sm:px-4 py-6 text-xl sm:text-2xl md:text-3xl tracking-wide font-bold text-gray-700 ${
          center && "text-center"
        } `}
      >
        {title}
      </div>
      <div className="sm:px-8 py-4 text-base text-gray-500 sm:text-lg md:text-xl">
        {children}
      </div>
    </div>
  )
}

export default SectionContainer
