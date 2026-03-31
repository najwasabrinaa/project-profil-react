import {Link} from 'react-router-dom';
import najwaFoto from '../assets/najwa.jpeg';
import binaFoto from '../assets/bina.jpeg';
import difaFoto from '../assets/Difa Octavia Firdayani.jpeg';

function Home() {
  const anggota = [
    { nama: 'Najwa Sabrina Khairani',
      prodi: 'Teknologi Informasi',
      domisili: 'Pati',
      path: '/NajwaSabrina',
      foto: najwaFoto,
    },
    { nama: 'Difa Octavia Firdayani',
      prodi: 'Teknologi Informasi',
      domisili: 'Malang',
      path: '/DifaOctavia',
      foto: difaFoto,
    },
    { nama: 'Shabrina Aulia Putri',
      prodi: 'Teknologi Informasi',
      domisili: 'Bogor',
      path: '/ShabrinaAulia',
      foto: binaFoto,
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-200 flex flex-col items-center justify-center px-6 py-12'>
      <div className='text-center mb-10'>
        <div className='inline-block bg-pink-100 border border-pink-300 rounded-2xl px-6 py-2 mb-4'>
          <span className='text-pink-600 text-sm font-medium tracking-widest uppercase'>Project Pemrograman Web </span>
        </div>
        <h1 className='text-5xl font-extrabold text-pink-600 mb-2'>Kelompok 3 T2E</h1>
        <p className='text-pink-400 text-base'>Teknologi Informasi - Universitas Brawijaya</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl'>
        {anggota.map((a) => (
          <Link
            to={a.path}
            key={a.path}
            className='bg-white border border-pink-200 rounded-2xl p-6 text-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 shadow-md'
          >
            <div className='w-20 h-20 rounded-full overflow-hidden border-4 border-pink-300 shadow-md'>
              <img src={a.foto} alt={a.nama} className='w-full h-full object-cover'/>
            </div>
            <h2 className='text-lg font-bold text-pink-700 leading-tight'>{a.nama}</h2>
            <div className='w-full mt-1 text-sm'>
              <div className='flex justify-between border-b border-pink-100 py-1'>
                <span className='text-pink-400'>Program Studi</span>
                <span className='font-medium text-gray-600 text-right'>{a.prodi}</span>
              </div>
              <div className='flex justify-between py-1'>
                <span className='text-pink-400'>Domisili</span>
                <span className='font-medium text-gray-600 text-right'>{a.domisili}</span>
              </div>
            </div>
            <span className='mt-2 text-xs text-pink-400 hover:text-pink-600 transition-colors font-medium'>Lihat Profil →</span>
          </Link>
        ))}
      </div>

      <p className='mt-12 text-pink-300 text-xs'>Kelompok 3 T2E - Universitas Brawijaya</p>
    </div>
  );
}
export default Home;