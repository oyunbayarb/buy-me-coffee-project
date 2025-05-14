export default function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex h-screen">
      <div className="flex w-[50%] h-full">{children}</div>
    </div>
  );
}
