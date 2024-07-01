# MOHON DIBACA TERLEBIH DAHULU 🙏🙏🙏

# ONIC-consultation

ONIC Consultation merupakan website sebagai marketplace bagi para konsultan IT

# DISCLAIMER

1. Semua endpoint backend sudah kelar secara keseluruhan, kecuali live chat dan payment gateway.
   Untuk front end, live chat, dan payment gateway nya saya tidak mampu menyelesaikannya karena keterbatasan waktu dan tadi sempat ketiduran 5 jam, jadi saya rugi 5 jam buat mengerjakannya 😭
2. Saya tidak paham cara pakai bootstrap, jadi saya memilih untuk pure pakai html css dalam ejs
3. Tidak semua front-end kelar, namun saya berusaha sebaik mungkin dengan waktu yang ada
4. Saya tidak mengimplementasikan responsivitas karena keterbatasan waktu

# HOW TO RUN THE APP

1. npm install
2. docker-compose up
3. nodemon start

# LINK COLLECTION POSTMAN

https://app.getpostman.com/join-team?invite_code=666d046b4d753458280a41542acbfc6e&target_code=f53b82b28854c614acac144693113d5e

# TOTAL ENDPOINT

Total 38 endpoint
Hanya saja endpoint invoices, tags, dan service tags belum saya tes di postman, namun sudah saya cek secara komprehensif itu akan
bekerja sebagaimana yang saya inginkan

# INTERAKTIFITAS

1. Mohon maaf sejauh ini saya belum bisa berbuat banyak terkait interaktifitas web saya, yang interaktif hanyalah home page yang bisa mengklik button log-in atau sign-up untuk menuju page login dan sign up. Interaktif di sini maksud saya adalah bukan tidak bisa mengisi form, tapi dia itu belum saya pasangin sebuah utility gitu, terutama di login dan signup

2. Bila ingin melihat atau mengakses front end yang saya buat, bisa nanti setelah server dirun akses beberapa link berikut
   a. http://localhost:3000/ => ini adalah home page
   b. http://localhost:3000/auth/sign-up-selection => ini adalah page untuk user memilih mau sign up sebagai role apa
   c. http://localhost:3000/auth/log-in-selection => ini adalah page untuk user memilih mau log in sebagai role apa
   d. http://localhost:3000/auth/user/login => page login user
   e. http://localhost:3000/auth/consultant/login => page login consultant
   f. http://localhost:3000/auth/user/register => page register user
   g. http://localhost:3000/auth/consultant/register => page register consultant
   h. http://localhost:3000/wtf => jika ingin melihat not found
   i. http://localhost:3000/users => ketika user sesudah berhasil login
