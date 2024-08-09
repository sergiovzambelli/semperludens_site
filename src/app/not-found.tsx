import LogoSL from '@/components/LogoSL'
import Text from '@/components/Text'
import Button from '@/components/Button'
 
export default function NotFound() {
  return (
    <div className='h-dvh bg-blue-50 flex flex-col items-center justify-center gap-10'>
      <LogoSL height={500} width={500} />
      <div className='flex flex-col gap-6'>
        <Text 
          text='Oh no, questa pagina non esiste' 
          type='xl' 
          className='text-white'
        />
        <Text 
          text='È normale che tu ti sia perso, deve essere difficile orientarsi per un Avventuriero novizio come te.<br>Non preoccuparti, il salone principale è qui di fianco!' 
          type='s' 
          className='text-white text-center'
        />
      </div>

      <Button text={'Torna al salone principale'} icon='empty_arrow' url='/'/>
    </div>
  )
}