// app/not-authorized/page.tsx
export default function notAuthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Access Denied</h1>
      <p>Kamu gak bisa akses halaman ini, silahkan hubungi admin</p>
    </div>
  );
}
