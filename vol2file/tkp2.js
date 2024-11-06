var questions = [
  {
    question: 'Jika dalam rapat keputusan akhir ditentukan oleh Nina, maka...',
    answers: [
      { text: 'A. Pandangan Amir didahulukan.', points: 3 },
      { text: 'B. Pendapat Tini selalu ditolak.', points: 2 },
      { text: 'C. Tono mendapat hak suara terakhir.', points: 4 },
      { text: 'D. Suara Budi dianggap paling menentukan.', points: 1 },
      { text: 'E. Nina berperan sebagai pemimpin diskusi.', points: 5 }, // Benar
    ],
  },
  {
    question: 'Jika Budi bertugas mencatat hasil diskusi, maka...',
    answers: [
      { text: 'A. Budi harus menyimpulkan hasil akhir.', points: 2 },
      { text: 'B. Tino bertugas memimpin diskusi.', points: 5 }, // Benar
      { text: 'C. Dina bertugas mengajukan pendapat.', points: 3 },
      { text: 'D. Sinta bertugas menilai pendapat anggota.', points: 1 },
      { text: 'E. Hasil diskusi langsung dicetak.', points: 4 },
    ],
  },
  {
    question: 'Jika seluruh tim mendukung ide Mila, maka...',
    answers: [
      { text: 'A. Ide Mila dijadikan proyek utama.', points: 5 }, // Benar
      { text: 'B. Ide lain diabaikan.', points: 3 },
      { text: 'C. Semua ide diterima.', points: 1 },
      { text: 'D. Mila menjadi ketua tim.', points: 4 },
      { text: 'E. Hasilnya diumumkan ke publik.', points: 2 },
    ],
  },
  {
    question: 'Jika tugas kepemimpinan diserahkan pada Anton, maka...',
    answers: [
      { text: 'A. Anton berhak membuat aturan tim.', points: 5 }, // Benar
      { text: 'B. Anton harus mengikuti pendapat mayoritas.', points: 2 },
      { text: 'C. Anton menyusun laporan kegiatan.', points: 1 },
      { text: 'D. Semua tugas diberikan ke Anton.', points: 3 },
      { text: 'E. Anton memilih wakilnya.', points: 4 },
    ],
  },
  {
    question: 'Jika Rudi menjadi penanggung jawab utama, maka...',
    answers: [
      { text: 'A. Rudi harus menyusun rencana kerja.', points: 4 },
      { text: 'B. Semua anggota mendukung Rudi.', points: 2 },
      { text: 'C. Rudi menentukan jadwal kegiatan.', points: 5 }, // Benar
      { text: 'D. Rudi menyusun laporan keuangan.', points: 1 },
      { text: 'E. Rudi menjadi pengarah proyek.', points: 3 },
    ],
  },
  {
    question:
      'Jika yang bertanggung jawab atas komunikasi adalah Dina, maka...',
    answers: [
      { text: 'A. Dina wajib menyampaikan informasi terbaru.', points: 5 }, // Benar
      { text: 'B. Dina mengikuti keputusan tim.', points: 3 },
      { text: 'C. Dina memutuskan hal penting.', points: 2 },
      { text: 'D. Dina tidak memiliki hak suara.', points: 1 },
      { text: 'E. Dina membuat laporan penilaian.', points: 4 },
    ],
  },
  {
    question: 'Jika Mario diangkat sebagai koordinator lapangan, maka...',
    answers: [
      { text: 'A. Mario mengatur persiapan logistik.', points: 5 }, // Benar
      { text: 'B. Mario menjadi pencatat kegiatan.', points: 1 },
      { text: 'C. Mario mengarahkan komunikasi tim.', points: 2 },
      { text: 'D. Mario menyusun laporan akhir.', points: 3 },
      { text: 'E. Mario menentukan waktu kegiatan.', points: 4 },
    ],
  },
  {
    question: 'Jika Linda bertanggung jawab pada dokumentasi, maka...',
    answers: [
      { text: 'A. Linda menyusun dokumentasi kegiatan.', points: 5 }, // Benar
      { text: 'B. Linda berhak mengatur jadwal.', points: 3 },
      { text: 'C. Linda memimpin rapat tim.', points: 1 },
      { text: 'D. Linda menyusun rencana kerja.', points: 2 },
      { text: 'E. Linda membuat laporan keuangan.', points: 4 },
    ],
  },
  {
    question: 'Jika tugas pengelolaan data diserahkan ke Agung, maka...',
    answers: [
      { text: 'A. Agung membuat rekap data.', points: 5 }, // Benar
      { text: 'B. Agung menyusun laporan keuangan.', points: 2 },
      { text: 'C. Agung menulis laporan harian.', points: 1 },
      { text: 'D. Agung bertanggung jawab atas keamanan data.', points: 4 },
      { text: 'E. Agung menentukan strategi tim.', points: 3 },
    ],
  },
  {
    question: 'Jika Dwi berperan sebagai moderator, maka...',
    answers: [
      { text: 'A. Dwi memimpin rapat.', points: 5 }, // Benar
      { text: 'B. Dwi memberikan keputusan.', points: 3 },
      { text: 'C. Dwi menyusun jadwal kegiatan.', points: 1 },
      { text: 'D. Dwi menyampaikan informasi.', points: 4 },
      { text: 'E. Dwi bertanggung jawab atas hasil akhir.', points: 2 },
    ],
  },
  {
    question: 'Jika tugas pengaturan waktu diberikan ke Arif, maka...',
    answers: [
      { text: 'A. Arif menyusun jadwal kegiatan.', points: 5 }, // Benar
      { text: 'B. Arif menentukan peran tiap anggota.', points: 3 },
      { text: 'C. Arif membuat laporan evaluasi.', points: 1 },
      { text: 'D. Arif bertugas sebagai moderator.', points: 2 },
      { text: 'E. Arif menyampaikan informasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Rina menjadi penanggung jawab keuangan, maka...',
    answers: [
      { text: 'A. Rina menyusun laporan keuangan.', points: 5 }, // Benar
      { text: 'B. Rina menentukan jadwal.', points: 3 },
      { text: 'C. Rina menjadi moderator.', points: 1 },
      { text: 'D. Rina berhak memutuskan hasil akhir.', points: 4 },
      { text: 'E. Rina mengatur strategi.', points: 2 },
    ],
  },
  {
    question: 'Jika Tono bertugas membuat laporan evaluasi, maka...',
    answers: [
      { text: 'A. Tono menyusun laporan evaluasi.', points: 5 }, // Benar
      { text: 'B. Tono mengatur strategi tim.', points: 2 },
      { text: 'C. Tono memimpin diskusi.', points: 1 },
      { text: 'D. Tono bertanggung jawab atas dokumentasi.', points: 4 },
      { text: 'E. Tono menentukan jadwal.', points: 3 },
    ],
  },
  {
    question: 'Jika Hana menjadi penyusun strategi, maka...',
    answers: [
      { text: 'A. Hana menyusun strategi kegiatan.', points: 5 }, // Benar
      { text: 'B. Hana membuat dokumentasi.', points: 1 },
      { text: 'C. Hana menyusun laporan keuangan.', points: 3 },
      { text: 'D. Hana memimpin diskusi.', points: 4 },
      { text: 'E. Hana bertugas sebagai koordinator.', points: 2 },
    ],
  },
  {
    question: 'Jika Edo bertanggung jawab pada evaluasi akhir, maka...',
    answers: [
      { text: 'A. Edo menyusun laporan evaluasi.', points: 5 }, // Benar
      { text: 'B. Edo menentukan jadwal.', points: 2 },
      { text: 'C. Edo mengatur logistik.', points: 3 },
      { text: 'D. Edo membuat dokumentasi.', points: 1 },
      { text: 'E. Edo bertanggung jawab pada komunikasi.', points: 4 },
    ],
  },

  {
    question: 'Jika Andi bertugas sebagai penilai kualitas, maka...',
    answers: [
      { text: 'A. Andi harus mengevaluasi hasil pekerjaan.', points: 5 }, // Benar
      { text: 'B. Andi membuat jadwal kerja.', points: 2 },
      { text: 'C. Andi memimpin diskusi.', points: 1 },
      { text: 'D. Andi menentukan strategi tim.', points: 3 },
      { text: 'E. Andi membuat dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Budi bertanggung jawab sebagai pengarah, maka...',
    answers: [
      { text: 'A. Budi memimpin arah diskusi.', points: 5 }, // Benar
      { text: 'B. Budi bertugas menyampaikan hasil diskusi.', points: 3 },
      { text: 'C. Budi menjadi koordinator lapangan.', points: 1 },
      { text: 'D. Budi menulis laporan keuangan.', points: 2 },
      { text: 'E. Budi menyusun dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Siti bertugas meninjau hasil akhir, maka...',
    answers: [
      { text: 'A. Siti harus membuat laporan evaluasi.', points: 5 }, // Benar
      { text: 'B. Siti bertugas memimpin diskusi.', points: 3 },
      { text: 'C. Siti menyusun jadwal kegiatan.', points: 1 },
      { text: 'D. Siti bertanggung jawab pada komunikasi.', points: 2 },
      { text: 'E. Siti berperan sebagai pencatat.', points: 4 },
    ],
  },
  {
    question: 'Jika Intan bertugas menyusun proposal, maka...',
    answers: [
      { text: 'A. Intan bertanggung jawab pada pengajuan ide.', points: 5 }, // Benar
      { text: 'B. Intan membuat laporan akhir.', points: 2 },
      { text: 'C. Intan mengatur waktu diskusi.', points: 1 },
      { text: 'D. Intan menentukan kualitas hasil kerja.', points: 3 },
      { text: 'E. Intan berperan sebagai moderator.', points: 4 },
    ],
  },
  {
    question: 'Jika Amir sebagai penanggung jawab lapangan, maka...',
    answers: [
      { text: 'A. Amir mengatur koordinasi lapangan.', points: 5 }, // Benar
      { text: 'B. Amir menyusun jadwal kerja.', points: 1 },
      { text: 'C. Amir menentukan strategi.', points: 2 },
      { text: 'D. Amir membuat laporan evaluasi.', points: 3 },
      { text: 'E. Amir bertugas menyampaikan informasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Tino bertugas pada penyusunan anggaran, maka...',
    answers: [
      { text: 'A. Tino bertanggung jawab atas keuangan.', points: 5 }, // Benar
      { text: 'B. Tino mengatur waktu diskusi.', points: 2 },
      { text: 'C. Tino menjadi moderator.', points: 1 },
      { text: 'D. Tino mengarahkan strategi.', points: 3 },
      { text: 'E. Tino menyusun dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Nina menjadi pengawas pelaksanaan, maka...',
    answers: [
      { text: 'A. Nina memantau jalannya kegiatan.', points: 5 }, // Benar
      { text: 'B. Nina bertanggung jawab pada keuangan.', points: 1 },
      { text: 'C. Nina membuat dokumentasi.', points: 3 },
      { text: 'D. Nina menyusun jadwal kegiatan.', points: 4 },
      { text: 'E. Nina memimpin diskusi.', points: 2 },
    ],
  },
  {
    question: 'Jika Ali berperan sebagai penentu kebijakan, maka...',
    answers: [
      { text: 'A. Ali membuat keputusan penting.', points: 5 }, // Benar
      { text: 'B. Ali bertugas mencatat hasil diskusi.', points: 2 },
      { text: 'C. Ali menyusun laporan keuangan.', points: 1 },
      { text: 'D. Ali bertanggung jawab pada komunikasi.', points: 4 },
      { text: 'E. Ali mengarahkan logistik.', points: 3 },
    ],
  },
  {
    question: 'Jika Sarah bertugas sebagai koordinator tim, maka...',
    answers: [
      { text: 'A. Sarah mengatur pembagian tugas.', points: 5 }, // Benar
      { text: 'B. Sarah menyusun anggaran.', points: 3 },
      { text: 'C. Sarah membuat dokumentasi kegiatan.', points: 1 },
      { text: 'D. Sarah mengevaluasi hasil akhir.', points: 2 },
      { text: 'E. Sarah memimpin rapat.', points: 4 },
    ],
  },
  {
    question: 'Jika Yanto bertugas membuat agenda, maka...',
    answers: [
      { text: 'A. Yanto menentukan jadwal kegiatan.', points: 5 }, // Benar
      { text: 'B. Yanto menyusun strategi pelaksanaan.', points: 4 },
      { text: 'C. Yanto mengatur logistik.', points: 2 },
      { text: 'D. Yanto mencatat hasil diskusi.', points: 1 },
      { text: 'E. Yanto bertanggung jawab pada komunikasi.', points: 3 },
    ],
  },
  {
    question: 'Jika peran evaluator dipegang oleh Dedi, maka...',
    answers: [
      { text: 'A. Dedi harus mengevaluasi hasil kerja tim.', points: 5 }, // Benar
      { text: 'B. Dedi menyusun anggaran.', points: 2 },
      { text: 'C. Dedi bertugas mengatur jadwal.', points: 1 },
      { text: 'D. Dedi memimpin diskusi.', points: 3 },
      { text: 'E. Dedi membuat dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Fina menjadi penyusun laporan, maka...',
    answers: [
      { text: 'A. Fina bertanggung jawab menyusun laporan akhir.', points: 5 }, // Benar
      { text: 'B. Fina bertugas menentukan strategi.', points: 3 },
      { text: 'C. Fina memimpin diskusi.', points: 1 },
      { text: 'D. Fina mengatur keuangan.', points: 4 },
      { text: 'E. Fina menjadi moderator.', points: 2 },
    ],
  },
  {
    question: 'Jika Tania bertugas sebagai pemimpin diskusi, maka...',
    answers: [
      { text: 'A. Tania bertanggung jawab memimpin arah diskusi.', points: 5 }, // Benar
      { text: 'B. Tania menyusun laporan akhir.', points: 3 },
      { text: 'C. Tania menentukan jadwal kegiatan.', points: 2 },
      { text: 'D. Tania menjadi koordinator lapangan.', points: 4 },
      { text: 'E. Tania bertanggung jawab pada keuangan.', points: 1 },
    ],
  },
  {
    question: 'Jika peran pengatur logistik diserahkan kepada Wawan, maka...',
    answers: [
      { text: 'A. Wawan bertanggung jawab atas logistik kegiatan.', points: 5 }, // Benar
      { text: 'B. Wawan menyusun jadwal kegiatan.', points: 3 },
      { text: 'C. Wawan menjadi pemimpin diskusi.', points: 1 },
      { text: 'D. Wawan mengevaluasi hasil kerja.', points: 2 },
      { text: 'E. Wawan membuat dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika tugas pelaporan anggaran diserahkan kepada Joko, maka...',
    answers: [
      {
        text: 'A. Joko bertanggung jawab menyusun laporan keuangan.',
        points: 5,
      }, // Benar
      { text: 'B. Joko mengatur strategi tim.', points: 2 },
      { text: 'C. Joko menjadi moderator.', points: 1 },
      { text: 'D. Joko menyusun jadwal kegiatan.', points: 3 },
      { text: 'E. Joko bertanggung jawab pada dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Hana menjadi koordinator komunikasi, maka...',
    answers: [
      {
        text: 'A. Hana bertanggung jawab menyampaikan informasi kepada tim.',
        points: 5,
      }, // Benar
      { text: 'B. Hana bertugas menyusun anggaran.', points: 1 },
      { text: 'C. Hana mengevaluasi hasil kerja.', points: 3 },
      { text: 'D. Hana menentukan jadwal kegiatan.', points: 2 },
      { text: 'E. Hana membuat laporan evaluasi.', points: 4 },
    ],
  },

  {
    question: 'Jika Joko bertugas sebagai pengelola waktu, maka...',
    answers: [
      {
        text: 'A. Joko menentukan durasi rapat dan waktu istirahat.',
        points: 5,
      }, // Benar
      { text: 'B. Joko mengawasi pelaksanaan kegiatan.', points: 3 },
      { text: 'C. Joko menyusun anggaran proyek.', points: 2 },
      { text: 'D. Joko memimpin diskusi.', points: 1 },
      { text: 'E. Joko bertanggung jawab pada komunikasi tim.', points: 4 },
    ],
  },
  {
    question: 'Jika tugas kontrol kualitas diberikan kepada Rini, maka...',
    answers: [
      {
        text: 'A. Rini mengawasi dan memeriksa hasil akhir proyek.',
        points: 5,
      }, // Benar
      { text: 'B. Rini mengatur jadwal kerja tim.', points: 3 },
      { text: 'C. Rini bertugas mengelola anggaran.', points: 2 },
      { text: 'D. Rini menyusun laporan evaluasi.', points: 1 },
      { text: 'E. Rini membuat dokumentasi kegiatan.', points: 4 },
    ],
  },
  {
    question:
      'Jika Dodi bertanggung jawab pada pemilihan metode kerja, maka...',
    answers: [
      {
        text: 'A. Dodi mengarahkan tim dalam pemilihan strategi yang tepat.',
        points: 5,
      }, // Benar
      { text: 'B. Dodi membuat laporan kegiatan.', points: 3 },
      { text: 'C. Dodi bertugas mengelola waktu kerja.', points: 1 },
      { text: 'D. Dodi menyusun anggaran proyek.', points: 2 },
      { text: 'E. Dodi memimpin diskusi tim.', points: 4 },
    ],
  },
  {
    question:
      'Jika Anita berperan sebagai penanggung jawab dokumentasi, maka...',
    answers: [
      {
        text: 'A. Anita menyusun dan mengelola semua dokumentasi kegiatan.',
        points: 5,
      }, // Benar
      { text: 'B. Anita menentukan anggaran kegiatan.', points: 3 },
      { text: 'C. Anita bertanggung jawab atas komunikasi tim.', points: 2 },
      { text: 'D. Anita memimpin rapat koordinasi.', points: 1 },
      { text: 'E. Anita menyusun laporan evaluasi akhir.', points: 4 },
    ],
  },
  {
    question: 'Jika Reza bertugas memimpin rapat, maka...',
    answers: [
      {
        text: 'A. Reza mengarahkan jalannya diskusi dan pengambilan keputusan.',
        points: 5,
      }, // Benar
      { text: 'B. Reza menyusun rencana kerja tim.', points: 2 },
      { text: 'C. Reza mengelola anggaran proyek.', points: 3 },
      {
        text: 'D. Reza bertanggung jawab pada pengawasan kegiatan.',
        points: 1,
      },
      { text: 'E. Reza mendokumentasikan hasil rapat.', points: 4 },
    ],
  },
  {
    question: 'Jika Hana diberi tugas untuk mengevaluasi hasil akhir, maka...',
    answers: [
      {
        text: 'A. Hana bertugas menilai hasil pekerjaan dan memberi masukan.',
        points: 5,
      }, // Benar
      { text: 'B. Hana mengatur jadwal rapat.', points: 3 },
      { text: 'C. Hana membuat laporan keuangan.', points: 2 },
      { text: 'D. Hana memimpin diskusi tim.', points: 1 },
      { text: 'E. Hana bertanggung jawab atas dokumentasi.', points: 4 },
    ],
  },
  {
    question: 'Jika tugas koordinasi antara tim diberikan pada Arif, maka...',
    answers: [
      {
        text: 'A. Arif memastikan komunikasi antara tim berjalan dengan baik.',
        points: 5,
      }, // Benar
      { text: 'B. Arif menyusun laporan keuangan.', points: 2 },
      {
        text: 'C. Arif bertanggung jawab atas dokumentasi kegiatan.',
        points: 1,
      },
      { text: 'D. Arif mengelola anggaran proyek.', points: 3 },
      { text: 'E. Arif membuat jadwal kegiatan.', points: 4 },
    ],
  },
  {
    question: 'Jika Tia bertugas sebagai pemimpin tim, maka...',
    answers: [
      {
        text: 'A. Tia memimpin tim dalam pengambilan keputusan penting.',
        points: 5,
      }, // Benar
      { text: 'B. Tia bertanggung jawab atas dokumentasi.', points: 3 },
      { text: 'C. Tia menyusun jadwal kegiatan.', points: 2 },
      { text: 'D. Tia memimpin rapat evaluasi.', points: 4 },
      { text: 'E. Tia mengelola anggaran proyek.', points: 1 },
    ],
  },
  {
    question: 'Jika tugas komunikasi eksternal diberikan kepada Dita, maka...',
    answers: [
      {
        text: 'A. Dita bertanggung jawab untuk menjaga hubungan dengan pihak luar.',
        points: 5,
      }, // Benar
      { text: 'B. Dita memimpin rapat internal tim.', points: 3 },
      { text: 'C. Dita menyusun anggaran kegiatan.', points: 1 },
      { text: 'D. Dita mengatur jadwal rapat.', points: 2 },
      { text: 'E. Dita mendokumentasikan kegiatan tim.', points: 4 },
    ],
  },
  {
    question: 'Jika Ivan bertugas dalam hal logistik, maka...',
    answers: [
      {
        text: 'A. Ivan mengatur persiapan dan kebutuhan logistik untuk kegiatan.',
        points: 5,
      }, // Benar
      { text: 'B. Ivan membuat laporan keuangan.', points: 2 },
      { text: 'C. Ivan memimpin rapat koordinasi.', points: 3 },
      { text: 'D. Ivan bertanggung jawab pada evaluasi akhir.', points: 1 },
      { text: 'E. Ivan menyusun strategi tim.', points: 4 },
    ],
  },
  {
    question: 'Jika Rina bertanggung jawab atas tugas analisis, maka...',
    answers: [
      {
        text: 'A. Rina melakukan analisis terhadap data dan hasil kerja.',
        points: 5,
      }, // Benar
      {
        text: 'B. Rina bertanggung jawab pada pengelolaan anggaran.',
        points: 3,
      },
      { text: 'C. Rina menyusun dokumentasi kegiatan.', points: 1 },
      { text: 'D. Rina memimpin diskusi tim.', points: 4 },
      { text: 'E. Rina mengelola logistik kegiatan.', points: 2 },
    ],
  },
  {
    question: 'Jika Ari bertugas sebagai pengatur strategi tim, maka...',
    answers: [
      {
        text: 'A. Ari mengarahkan tim untuk menentukan pendekatan yang tepat.',
        points: 5,
      }, // Benar
      { text: 'B. Ari membuat laporan keuangan proyek.', points: 3 },
      { text: 'C. Ari menyusun jadwal kegiatan.', points: 2 },
      { text: 'D. Ari memimpin diskusi evaluasi.', points: 1 },
      { text: 'E. Ari mendokumentasikan kegiatan tim.', points: 4 },
    ],
  },
  {
    question: 'Jika tugas pembuatan laporan diserahkan pada Rudi, maka...',
    answers: [
      {
        text: 'A. Rudi bertanggung jawab untuk menyusun laporan kegiatan.',
        points: 5,
      }, // Benar
      { text: 'B. Rudi mengatur waktu diskusi tim.', points: 2 },
      { text: 'C. Rudi menentukan strategi pelaksanaan.', points: 3 },
      { text: 'D. Rudi bertugas memimpin rapat.', points: 1 },
      { text: 'E. Rudi mengelola anggaran kegiatan.', points: 4 },
    ],
  },
  {
    question:
      'Jika Fajar bertanggung jawab atas evaluasi performa tim, maka...',
    answers: [
      {
        text: 'A. Fajar menilai kinerja anggota tim dan memberikan masukan.',
        points: 5,
      }, // Benar
      { text: 'B. Fajar mengatur logistik kegiatan.', points: 3 },
      { text: 'C. Fajar bertugas membuat laporan keuangan.', points: 1 },
      { text: 'D. Fajar menyusun jadwal kegiatan.', points: 2 },
      { text: 'E. Fajar memimpin rapat koordinasi.', points: 4 },
    ],
  },
  {
    question: 'Jika Tika bertugas sebagai pemimpin proyek, maka...',
    answers: [
      {
        text: 'A. Tika memimpin proyek dan mengarahkan setiap langkah tim.',
        points: 5,
      }, // Benar
      { text: 'B. Tika mengawasi semua kegiatan administratif.', points: 2 },
      {
        text: 'C. Tika membuat keputusan akhir tentang pelaksanaan.',
        points: 3,
      },
      {
        text: 'D. Tika bertanggung jawab pada evaluasi hasil akhir.',
        points: 4,
      },
      { text: 'E. Tika menyusun laporan kegiatan.', points: 1 },
    ],
  },
];

// Mengisi soal ke dalam form
var quizForm = document.getElementById('quiz-form');

for (var index = 0; index < questions.length; index++) {
  var q = questions[index];
  var questionBlock = document.createElement('div');
  questionBlock.classList.add('question4');

  questionBlock.innerHTML = '<p>' + (index + 66) + '. ' + q.question + '</p>';

  for (var i = 0; i < q.answers.length; i++) {
    var isChecked =
      localStorage.getItem('question4' + index) == q.answers[i].points;
    questionBlock.innerHTML += `
            <label>
                <input type="radio" name="question4${index}" value="${
      q.answers[i].points
    }" ${isChecked ? 'checked' : ''} required>
                ${q.answers[i].text}
            </label><br>
        `;
  }
  // Menambahkan penjelasan
  // Ambil jawaban yang sudah disimpan sebelumnya

  // Menambahkan penjelasan setelah soal
  if (q.explanation) {
    var explanationBlock = document.createElement('div');
    explanationBlock.classList.add('explanation');
    explanationBlock.innerHTML = `<p>${q.explanation}</p>`;
    questionBlock.appendChild(explanationBlock);
  }

  quizForm.appendChild(questionBlock);
}
// Menyimpan jawaban yang dipilih ke localStorage

// Saat tombol submit ditekan, simpan skor di localStorage dan pindah ke halaman hasil

function saveScore4() {
  var totalScore = 0;
  for (var index = 0; index < questions.length; index++) {
    var selectedAnswer = document.querySelector(
      'input[name="question4' + index + '"]:checked'
    );
    if (selectedAnswer) {
      totalScore += parseInt(selectedAnswer.value);
      localStorage.setItem('question4' + index, selectedAnswer.value);
    }
  }
  localStorage.setItem('totalscore4', totalScore);
}
// Fungsi yang memanggil saveScore3 ketika terjadi perubahan pilihan
quizForm.addEventListener('change', saveScore4);
function next() {
  saveScore4();

  window.location.href = 'hasil.html';
}
function goToMM() {
  saveScore4();

  window.location.href = 'tiumm.html';
}
function goToPagem() {
  saveScore4();

  window.location.href = 'vol2.html';
}
function goToTkp() {
  saveScore4();

  window.location.href = '2tiu.html';
}
// Memuat jawaban yang dipilih saat halaman dimuat

// Fungsi untuk menampilkan soal dan penjelasan

// TIMER & LANJUTAN
let countdownDuration = 110 * 60; // 110 menit dalam detik
let countdown;

function startCountdown() {
  countdownDuration = localStorage.getItem('remainingTime');
  if (!countdownDuration) {
    countdownDuration = 110 * 60; // Set waktu awal jika tidak ada
    localStorage.setItem('remainingTime', countdownDuration);
  } else {
    countdownDuration = parseInt(countdownDuration);
  }
  countdown = setInterval(() => {
    if (countdownDuration <= 0) {
      clearInterval(countdown);
      alert('Waktu habis!');
      return;
    }

    countdownDuration--;
    localStorage.setItem('remainingTime', countdownDuration);
    updateDisplay();
  }, 1000);

  updateDisplay();
}
function updateDisplay() {
  let hours = Math.floor(countdownDuration / 3600);
  let minutes = Math.floor((countdownDuration % 3600) / 60);
  let seconds = countdownDuration % 60;
  document.getElementById('countdown').innerText = `${String(hours).padStart(
    2,
    '0'
  )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

window.addEventListener('load', quizForm);
window.addEventListener('load', saveScore4());
window.addEventListener('load', startCountdown);
