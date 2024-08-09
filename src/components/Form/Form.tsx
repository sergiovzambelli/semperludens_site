"use client";

import { useForm } from "react-hook-form";
import Button from "../Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Textarea from "./Textarea";
import text from "@/utils/text.json";
import { FormData, UserSchema } from "@/utils/types";
import { sendEmail } from "@/utils/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface FormProps {
  classname?: string;
}

export default function Form({ classname }: FormProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(UserSchema),
  });

  async function onSubmit(data: FormData) {
    const result = await sendEmail(data);

    if (result.success) {
      setMessage(`Il messaggio è stato inviato correttamente!`);
    } else {
      setMessage(`Non siamo riusciti a inviare il tuo messaggio, riprova più tardi.`);
    }

    reset();
  }

  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-4 w-full ${classname}`}
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <Input
          placeholder={text.form.name_placeholder}
          label={text.form.name}
          required
          register={register}
          name={"name"}
          error={errors.name}
        />
        <Input
          placeholder={text.form.email_placeholder}
          label={text.form.email}
          required
          register={register}
          name={"email"}
          error={errors.email}
        />
      </div>
      <Input
        placeholder={text.form.object_placeholder}
        label={text.form.object}
        required
        register={register}
        name={"object"}
        error={errors.object}
      />
      <Textarea
        placeholder={text.form.body_placeholder}
        label={text.form.body}
        required
        rows={8}
        register={register}
        name={"body"}
        error={errors.body}
      />
      <Checkbox
        text={text.form.checkbox}
        register={register}
        name={"checkbox"}
        error={errors.checkbox}
      />
      <div className="mt-8 flex lg:justify-center w-full">
        <Button text={text.form.submit} icon="empty_arrow" />
      </div>
      { message && 
        <div className="mt-6 rounded-xl bg-blue-70 px-8 py-4 text-white flex mx-auto max-w-[fit-content]">
          {message}
        </div>
      }
    </form>
  );
}
