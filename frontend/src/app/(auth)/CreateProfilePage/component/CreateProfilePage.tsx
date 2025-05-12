"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Coffee} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {Input} from "@/components/ui/input";
import {ButtonComponent} from "../../SignUpPage/component";
import {ChangeEventHandler, useState} from "react";

const formSchema = z.object({
  name: z.string().min(5, {message: "Name must be at least 5 characters."}),
});

const handleOnContinueButton = (values: z.infer<typeof formSchema>) => {
  console.log(values.name);
};

export const CreateProfilePage = () => {
  const [file, setFile] = useState<any>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "name",
    },
  });

  const handleFileChange = (event: ChangeEventHandler<HTMLInputElement>) => {
    setFile(URL.createObjectURL(event!.target.files[0]));
  };

  return (
    <div className="flex-col items-center p-10 flex gap-[200px]">
      <div className="flex gap-[500px]">
        <div className="flex gap-2 items-center font-bold">
          <Coffee className="size-8" />
          Buy Me Coffee
        </div>
        <div>
          <ButtonComponent buttonText="Log out" />
        </div>
      </div>
      <div className="w-[430px] h-[631px] flex gap-5 flex-col">
        <Form {...form}>
          <p className="font-semibold text-2xl">Complete your profile page</p>
          <div className="size-[160px] relative">
            <p>Add a photo</p>
            <Input
              className="size-full rounded-full border-dashed border-black absolute"
              type="file"
              onChange={handleFileChange}
            />
            <img src={file} className="size-[160px] rounded-full" />
          </div>
          <form
            onSubmit={form.handleSubmit(handleOnContinueButton)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <p>About</p>
              <Textarea placeholder="Write about yourself here" />
            </div>
            <div>
              <p>Social media URL</p>
              <Textarea placeholder="https://" />
            </div>
            <ButtonComponent buttonText="Continue" />
          </form>
        </Form>
      </div>
    </div>
  );
};
