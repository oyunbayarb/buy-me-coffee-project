export const PersonalInfoSection = () => {
  <div>
    <p>Add a photo</p>
    <Input
      className="size-full rounded-full border-dashed border-black absolute"
      type="file"
      onChange={handleFileChange}
    />
    <img src={file} className="absolute size-[160px]" />
  </div>;
};
