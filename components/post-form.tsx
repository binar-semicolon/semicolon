import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

type FormValues = {
  twittContent: string;
};

const PostForm = () => {
  const methods = useForm<FormValues>();

  const handleSubmit = (data: FormValues) => {
    // Handle form submission logic
    console.log("Tweet posted:", data.twittContent);
  };

  return (
    <FormProvider {...methods}>
      <form id="twittForm" onSubmit={methods.handleSubmit(handleSubmit)}>
        <div className="pt-[20px] pb-[16px] px-4 border-b-2 border-line">
          <div
            id="instantFeedback"
            className="mt-3 mb-2 instant-feedback flex flex-row p-3 rounded-xl text-base bg-red-500 text-white font-bold"
          >
            <p>Error upload</p>
          </div>
          <div className="flex items-start justify-start">
            <Image
              src="/images/az-profile.jpg"
              id="ownerPhoto"
              alt="photo profile"
              width={26}
              height={26}
              className="object-cover w-[46px] h-[46px] rounded-full mr-3"
            />
            <FormField
              name="twittContent"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <textarea
                      {...field}
                      placeholder="What is happening?!"
                      id="twittContent"
                      className="flex-grow h-[100px] py-3 bg-black text-white text-base placeholder:text-lg focus:outline-none focus:ring-0 focus:font-semibold resize-none focus:border-transparent overflow-hidden"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-[90%] flex justify-between items-center ml-[54px] mr-4 pt-[17px]">
            <div className="flex justify-center items-center gap-2.5">
              {["🤩 Happy", "😥 Sad", "🤯 Shocked"].map((feeling) => (
                <div
                  key={feeling}
                  data-feeling={feeling}
                  className="item-feeling cursor-pointer border-line flex justify-center items-center rounded-full px-3 py-1.5 border-2 gap-1.5"
                >
                  <p>{feeling.split(" ")[0]}</p>
                  <p className="text-sm font-semibold">
                    {feeling.split(" ")[1]}
                  </p>
                </div>
              ))}
            </div>
            <Button type="submit">
              <span className="cursor-pointer font-bold">Post</span>
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default PostForm;
