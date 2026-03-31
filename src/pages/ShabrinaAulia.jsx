function ProfilNajwa() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl overflow-hidden border border-pink-200">
        <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 text-white text-center p-6">
          <img src={foto} alt='foto Najwa' className="w-28 h-28 rounded-full mx-auto mb-3 border-4 border-white object-cover shadow-md"/>
          <h1 className="text-xl font-bold">Najwa Sabrina Khairani</h1>
          <p className="text-sm opacity-90">Mahasiswi Teknologi Informasi</p>
        </div>

        <div className="p-6">
          <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 text-gray-700 space-y-2 font-medium">
            <p><b className="text-pink-600">NIM :</b> 253140700111022</p>
            <p><b className="text-pink-600">Kelas :</b> T2E</p>
            <p><b className="text-pink-600">Program Studi :</b> Teknologi Informasi (D3)</p>
            <p><b className="text-pink-600">Domisili :</b> Pati, Jawa Tengah</p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white border border-pink-100 rounded-xl shadow-sm p-5">
            <h2 className="text-xl font-bold text-pink-600 mb-3">Tentang Diri</h2>
            <p className="text-gray-600 leading-relaxed text-justify indent-10">
                Saya merupakan mahasiswi semester 2 dengan program studi Teknologi Informasi (D3)
                di Universitas Brawijaya. Saya berasal dari Pati, Jawa Tengah. Saya menikmati beberapa
                hiburan, seperti mendengarkan musik maupun menonton film.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify indent-10 mt-3">
                Setelah tahun lalu saya gagal di SNBP, saya mengikuti UTBK dan kemudian diterima
                di program studi ini. Saya merupakan seorang yang tekun dan bertanggung jawab.
                Meskipun kemampuan saya belum seberapa, saya selalu berusaha memberikan yang terbaik
                dalam mengerjakan tugas yang ada. Harapannya saya dapat terus mengembangkan
                pengetahuan dan kemampuan saya di program studi ini.
            </p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <Link to="/" className="inline-block text-sm text-pink-400 hover:text-pink-600 transition-colors"> ← Kembali ke Home </Link>
        </div>
      </div>
    </div>
  );
}
export default ProfilNajwa;