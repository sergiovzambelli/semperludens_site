"use client";

import { useForm } from "react-hook-form";
import Button from "../Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import text from "@/utils/text.json";
import { PlayerFormData } from "@/utils/types";
import Text from "../Text";
import { useDispatch } from "react-redux";
import { setPlayerData } from "@/lib/features/player/playerSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FormProps {
  classname?: string;
}

export default function PlayerForm({ classname }: FormProps) {
  const player_text = text.player_screen;

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PlayerFormData>();

  async function onSubmit(data: PlayerFormData) {
    dispatch(
      setPlayerData({
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
      })
    );

    router.push("/events/checkout");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col gap-12 w-full ${classname}`}
    >
      <div className="flex flex-col gap-4">
        <Input
          placeholder={player_text.form.name_placeholder}
          label={player_text.form.name}
          required
          register={register}
          name={"name"}
          error={errors.name}
          className="!text-2xl"
          classNameLabel="!text-2xl"
        />
        <Input
          placeholder={player_text.form.surname_placeholder}
          label={player_text.form.surname}
          required
          register={register}
          name={"surname"}
          error={errors.surname}
          className="!text-2xl"
          classNameLabel="!text-2xl"
        />
        <Input
          placeholder={player_text.form.phone_placeholder}
          label={player_text.form.phone}
          required
          register={register}
          name={"phone"}
          error={errors.phone}
          className="!text-2xl"
          classNameLabel="!text-2xl"
        />
      </div>

      <div className="flex flex-col gap-2 items-center">
        <Input
          placeholder={player_text.form.email_placeholder}
          label={player_text.form.email}
          required
          register={register}
          name={"email"}
          error={errors.email}
          className="!text-2xl"
          classNameLabel="!text-2xl"
        />
        <Text
          text={player_text.form.email_sub}
          type="s"
          className="text-grey text-center max-w-[400px]"
        />
      </div>

      <Checkbox
        text={player_text.form.checkbox}
        register={register}
        name={"checkbox"}
        error={errors.checkbox}
        classNameCheckbox="!min-h-10 !min-w-10"
        classNameText="!text-lg"
      />
      <Text
        text={player_text.form.mandatory}
        type="m"
        className="text-grey  text-center"
      />
      <div className="mt-8 flex flex-row justify-between  lg:justify-between w-full gap-16 ">
        <Link
          href={`/events/games`}
          className="bg-white text-blue-60 p-5 rounded-full"
        >
          <Text text="Indietro" type="m" className="!font-medium" />
        </Link>
        <button
          type="submit"
          className="bg-white text-blue-60 p-5 rounded-full"
        >
          <Text
            text={player_text.form.submit}
            type="m"
            className="!font-medium"
          />
        </button>
      </div>
    </form>
  );
}
