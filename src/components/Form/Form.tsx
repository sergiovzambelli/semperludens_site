import Checkbox from "./Checkbox";
import Input from "./Input";
import Textarea from "./Textarea";
import text from "@/utils/text.json"

export default function Form() {
  return(
    <form className="flex flex-col gap-4 w-full">
      <Input placeholder={text.form.name_placeholder} label={text.form.name} required/>
      <Input placeholder={text.form.surname_placeholder} label={text.form.surname} required/>
      <Input placeholder={text.form.object_placeholder} label={text.form.object} required/>
      <Textarea placeholder={text.form.body_placeholder} label={text.form.body} required rows={8}/>
      <Checkbox text={text.form.checkbox}/>
    </form>
  )
}