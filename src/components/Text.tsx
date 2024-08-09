interface TextProps {
  text: string, 
  type: string, 
  className?: string
}

const format: { [key: string]: string } = {
  "xs" : "font-inter font-normal text-s lg:text-m",
  "s" : "font-nunito font-normal text-lg lg:text-xl",
  "m" : "font-nunito font-normal text-2xl lg:text-3xl",
  "l" : "font-inter font-normal text-3xl lg:text-4xl",
  "xl" : "font-gelica font-bold text-4xl lg:text-5xl",
  "xxl" : "font-gelica font-bold text-5xl lg:text-6xl",
  "xxxl" : "font-inter font-normal text-6xl lg:text-7xl",
  "xxxxl" : "font-gelica font-bold text-7xl lg:text-8xl",
}

export default function Text( {text, type, className = ""} : TextProps ) {

  return (
      <p className={`${format[type]} ${className}`} dangerouslySetInnerHTML={{ __html: text }}></p>
  )
}