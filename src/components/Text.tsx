interface TextProps {
  text: string, 
  type: string
}

const format: { [key: string]: string } = {
  "xs" : "font-inter font-normal text-xs",
  "s" : "font-nunito font-normal text-lg",
  "m" : "font-nunito font-normal text-2xl",
  "l" : "font-inter font-normal text-3xl",
  "xl" : "font-gelica font-bold text-4xl",
  "xxl" : "font-gelica font-bold text-5xl",
  "xxxl" : "font-inter font-normal text-6xl",
  "xxxxl" : "font-gelica font-bold text-7xl",
}

export default function Text( {text, type} : TextProps ) {

  return (
    <p className={`${format[type]} text-center`}> {text} </p>
  )
}