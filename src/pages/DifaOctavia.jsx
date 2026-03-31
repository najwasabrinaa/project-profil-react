import {Link} from 'react-router-dom';
import foto from '../assets/Difa Octavia Firdayani.jpeg';

function ProfilDifa() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-200 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-3xl overflow-hidden border border-pink-200">
        <div className="bg-gradient-to-r from-pink-400 via-pink-500 to-rose-400 text-white text-center p-6">
          <img src={foto} alt='foto Difa' className="w-28 h-28 rounded-full mx-auto mb-3 border-4 border-white object-cover shadow-md"/>
          <h1 className="text-xl font-bold">Difa Octavia Firdayani</h1>
          <p className="text-sm opacity-90">Mahasiswi Teknologi Informasi</p>
        </div>

        <div className="p-6">
          <div className="bg-pink-50 border border-pink-100 rounded-xl p-4 text-gray-700 space-y-2 font-medium">
            <p><b className="text-pink-600">NIM :</b> 253140707111048</p>
            <p><b className="text-pink-600">Kelas :</b> T2E</p>
            <p><b className="text-pink-600">Program Studi :</b> Teknologi Informasi (D3)</p>
            <p><b className="text-pink-600">Domisili :</b> Malang, Jawa Timur</p>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className="bg-white border border-pink-100 rounded-xl shadow-sm p-5">
            <h2 className="text-xl font-bold text-pink-600 mb-3">Tentang Diri</h2>
            <p className="text-gray-600 leading-relaxed text-justify indent-10">
                Saya merupakan mahasiswi semester 2 program studi Teknologi Informasi (D3) di Universitas Brawijaya. 
                Sebagai putri daerah yang berasal dari Malang, Jawa Timur, 
                saya memiliki ketertarikan yang mendalam terhadap kekayaan budaya, 
                khususnya seni pertunjukan. Saya sangat menikmati keindahan gerak tari tradisional,
                panggung drama yang emosional, serta alunan alat musik khas dari berbagai daerah yang memiliki filosofi unik. 
                Selain kecintaan pada seni, saya adalah pribadi yang sangat mengagumi keindahan alam bebas. 
                Kegiatan luar ruangan seperti hiking menantang adrenalin dan travelling ke tempat-tempat baru menjadi hobi yang selalu menyegarkan pikiran.
                Bagi saya, perpaduan antara harmoni musik, ekspresi seni, dan petualangan di alam terbuka adalah sumber inspirasi terbesar dalam menjalani masa perkuliahan saya.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify indent-10 mt-3">
                Perjalanan akademik saya dimulai dengan sebuah pelajaran berharga tentang ketangguhan. 
                Meskipun sempat menghadapi kegagalan di jalur SNBT tahun lalu, 
                pengalaman tersebut justru menjadi pemantik semangat saya untuk berjuang lebih keras 
                melalui jalur Mandiri hingga akhirnya berhasil diterima di program studi ini. 
                Saya menyadari bahwa setiap tantangan adalah bagian dari proses pendewasaan diri. 
                Sebagai pribadi yang tekun dan memiliki rasa tanggung jawab tinggi, 
                saya selalu berupaya memberikan dedikasi penuh dalam setiap tugas yang diberikan.
                Walaupun saya merasa kemampuan saya saat ini masih dalam tahap awal dan perlu banyak asahan, 
                saya tidak pernah ragu untuk memberikan upaya terbaik yang saya miliki. 
                Besar harapan saya agar melalui wadah pendidikan ini, saya dapat terus bertumbuh,
                melampaui keterbatasan, serta mengembangkan seluruh potensi dan pengetahuan saya secara berkelanjutan demi masa depan yang lebih baik.
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
export default ProfilDifa;