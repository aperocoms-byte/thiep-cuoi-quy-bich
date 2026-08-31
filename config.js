/* ============================================================
   CONFIG — TOÀN BỘ NỘI DUNG THIỆP CƯỚI
   ------------------------------------------------------------
   Bạn KHÔNG cần sửa file này bằng tay.
   Hãy nháy đúp vào file  MO-BANG-SUA.command  ở thư mục này,
   bảng điều khiển sẽ mở ra cho bạn chỉnh mọi thứ bằng chuột.
   ============================================================ */
window.CONFIG = {

  /* --- 1. CÔ DÂU & CHÚ RỂ ------------------------------------------ */
  groom: { name: "Khắc Quý",  full: "Nguyễn Khắc Quý", dad: "Ông Nguyễn Khắc Khoa", mom: "Bà Hoàng Thị Nhị",
           addr: "Xóm 2, Thôn Vạn Đồn, Xã Đông Thụy Anh, Tỉnh Hưng Yên" },
  bride: { name: "Ngọc Bích", full: "Hoàng Thị Ngọc Bích", dad: "Ông Hoàng Văn Luân",   mom: "Bà Hà Thị Oanh",
           addr: "Xóm Phố, Thôn Bến, Xã Tân Sơn, Tỉnh Bắc Ninh" },
  monogram: "Q & B",

  /* --- 2. NGÀY GIỜ -------------------------------------------------- */
  weddingISO  : "2026-09-20T13:00:00+07:00",
  dateLabel   : "Chủ Nhật · 20 . 09 . 2026",
  lunarLabel  : "Tức ngày 10 tháng 8 năm Bính Ngọ",
  rsvpDeadline: "10.09.2026",

  /* --- 3. MÀN PHONG BÌ (ảnh đầu tiên) ------------------------------- */
  envImage    : "assets/images/envelope.jpg",
  envLine1    : "Ngày chung đôi",
  envDateLabel: "19/9 - 20/9/2026",
  envSealTop  : 70.8,
  envTextTop  : 26,

  /* --- 4. ẢNH ------------------------------------------------------- */
  heroPhoto : "assets/images/hero.jpg",
  storyPhoto: "assets/images/story.jpg",
  heroPos   : "center 26%",
  gallery   : [
    { src:"assets/images/1.jpg", pos:"center 30%" },
    { src:"assets/images/2.jpg", pos:"center 28%" },
    { src:"assets/images/3.jpg", pos:"center 32%" },
    { src:"assets/images/4.jpg", pos:"center 26%" },
    { src:"assets/images/5.jpg", pos:"center 62%" }
  ],

  /* --- 5. CHUYỆN CHÚNG MÌNH ----------------------------------------- */
  storyText: "Chúng mình đến với nhau không bằng điều gì to tát — chỉ là những buổi tan làm " +
             "đi chung một đoạn đường, những bữa cơm nấu vội, và thói quen kể cho nhau nghe " +
             "chuyện của một ngày rất đỗi bình thường. Rồi một hôm cả hai cùng nhận ra: " +
             "người mình muốn kể chuyện cùng mỗi tối, hoá ra là người mình muốn đi cùng cả đời. " +
             "Ngày 20.09.2026, chúng mình về chung một nhà — và sẽ thật trọn vẹn nếu có bạn ở đó.",

  /* --- 6. KHỐI LỜI MỜI ---------------------------------------------- */
  invite: {
    lead      : "Trân trọng kính mời quý vị<br>tới dự Lễ Thành Hôn của",
    timeValue : "13<span style=\"font-size:.6em\">h</span>00 &nbsp;|&nbsp; 20.09.2026",
    locLabel  : "Địa điểm",
    locName   : "Tư gia nhà trai",
    locAddr   : "Xóm 2, Thôn Vạn Đồn, Xã Đông Thụy Anh, Tỉnh Hưng Yên",
    locMap    : "https://www.google.com/maps/search/?api=1&query=20.5946700,106.5741880",
    locBtn    : "Xem bản đồ"
  },

  /* --- 7. CÁC SỰ KIỆN CƯỚI ------------------------------------------ */
  events: [
    { title:"Lễ Vu Quy", who:"Nhà gái",
      when:"06:00 · Chủ Nhật, 20.09.2026",
      lunar:"Tức ngày 10 tháng 8 năm Bính Ngọ",
      place:"Tại tư gia nhà gái",
      addr:"Xóm Phố, Thôn Bến, Xã Tân Sơn, Tỉnh Bắc Ninh",
      map:"https://www.google.com/maps/search/?api=1&query=21.5977250,106.5911640" },

    { title:"Lễ Thành Hôn", who:"Nhà trai",
      when:"13:00 · Chủ Nhật, 20.09.2026",
      lunar:"Tức ngày 10 tháng 8 năm Bính Ngọ",
      place:"Tại tư gia nhà trai",
      addr:"Xóm 2, Thôn Vạn Đồn, Xã Đông Thụy Anh, Tỉnh Hưng Yên",
      map:"https://www.google.com/maps/search/?api=1&query=20.5946700,106.5741880" },

    { title:"Tiệc Nhà Gái", who:"Bữa cơm thân mật",
      when:"16:00 · Thứ Bảy, 19.09.2026",
      lunar:"Tức ngày 9 tháng 8 năm Bính Ngọ",
      place:"Tại tư gia nhà gái",
      addr:"Xóm Phố, Thôn Bến, Xã Tân Sơn, Tỉnh Bắc Ninh",
      map:"https://www.google.com/maps/search/?api=1&query=21.5977250,106.5911640" },

    { title:"Tiệc Nhà Trai", who:"Bữa cơm thân mật",
      when:"17:00 · Thứ Bảy, 19.09.2026",
      lunar:"Tức ngày 9 tháng 8 năm Bính Ngọ",
      place:"Tại tư gia nhà trai",
      addr:"Xóm 2, Thôn Vạn Đồn, Xã Đông Thụy Anh, Tỉnh Hưng Yên",
      map:"https://www.google.com/maps/search/?api=1&query=20.5946700,106.5741880" }
  ],

  /* --- 8. LỊCH TRÌNH NGÀY CƯỚI -------------------------------------- */
  timeline: [
    { t:"06:00", d:"Lễ Vu Quy tại tư gia nhà gái — Thôn Bến, Xã Tân Sơn, Bắc Ninh" },
    { t:"08:30", d:"Nhà trai xin dâu, đoàn rước dâu khởi hành về Hưng Yên" },
    { t:"11:00", d:"Đón dâu về tới tư gia nhà trai — Thôn Vạn Đồn, Đông Thụy Anh" },
    { t:"13:00", d:"Lễ Thành Hôn — nghi thức chính thức tại tư gia nhà trai" },
    { t:"14:00", d:"Dùng tiệc, chụp ảnh lưu niệm cùng cô dâu chú rể" }
  ],

  /* --- 9. MỪNG CƯỚI (để gifts: [] nếu muốn ẩn) ---------------------- */
  gifts: [
    { side:"Chú rể", bank:"TPBank",
      owner:"NGUYEN KHAC QUY", acc:"02336471301", qr:"assets/images/qr-quy.png" },
    { side:"Cô dâu", bank:"TPBank",
      owner:"HOANG THI NGOC BICH", acc:"04485121601", qr:"assets/images/qr-bich.png" }
  ],

  /* --- 10. NHẠC NỀN --------------------------------------------------
     Dùng file mp3 đặt trong assets/music/ — chạy được trên mọi trình duyệt.
     Chỉ dùng nhạc bạn có quyền sử dụng, vì trang này công khai trên Internet.
     musicStart / musicEnd: giây, để cắt đoạn. Để 0 cả hai là phát cả bài. */
  music     : "",
  youtubeId : "lEH2pVsHJg4",
  musicStart: 113,
  musicEnd  : 0,

  /* --- 11. RSVP ------------------------------------------------------ */
  rsvpEndpoint: "",

  /* --- 12. LỜI CHÚC HIỂN THỊ SẴN ------------------------------------- */
  wishes: [
    { by:"Gia đình hai bên", msg:"Chúc Khắc Quý và Ngọc Bích trăm năm hạnh phúc, đầu bạc răng long!" }
  ],

  /* --- 13. GIAO DIỆN: FONT, MÀU, BỀ NGANG ---------------------------- */
  theme: {
    fontDisplay: "Cormorant Garamond",   /* tên cô dâu chú rể, tiêu đề lớn */
    fontSerif  : "Lora",                 /* chữ trang trọng, ngày tháng */
    fontScript : "Dancing Script",       /* chữ viết tay */
    fontSans   : "Be Vietnam Pro",       /* chữ nội dung */
    scale      : 100,                    /* cỡ chữ toàn trang, % */
    maxWidth   : 640,                    /* bề ngang tối đa của thiệp, px */
    petals     : true,                   /* hiệu ứng cánh hoa rơi */
    colors: {
      cream  :"#FDFAF5", beige  :"#F1E6D6", beige2:"#E4D3BC", beige3:"#CDB79A",
      red    :"#A32A2A", redDeep:"#7A1B1B", redSoft:"#C96A63",
      gold   :"#BC9A5F", ink    :"#3B2F28", muted :"#8B7768"
    }
  },

  /* --- 14. BỐ CỤC: BẬT/TẮT VÀ SẮP XẾP TỪNG MỤC ----------------------
     Đổi thứ tự các dòng dưới đây là đổi thứ tự các mục trên thiệp.
     on:false  =  ẩn mục đó đi. */
  sections: [
    { id:"hero",      on:true, title:"Chúng tôi sắp kết hôn" },
    { id:"invite",    on:true, eyebrow:"Date & Time", title:"Thời gian" },
    { id:"countdown", on:true, eyebrow:"Còn lại", title:"Đếm ngược tới ngày vui", script:false,
      lead:"Sự hiện diện của quý vị là niềm vinh hạnh lớn nhất đối với gia đình chúng tôi trong ngày trọng đại này." },
    { id:"band1",     on:true, title:"Chuyện chúng mình" },
    { id:"story",     on:true, eyebrow:"Our story", title:"Chuyện chúng mình", script:true },
    { id:"family",    on:true, eyebrow:"Hai gia đình", title:"Trân trọng báo hỷ", script:false },
    { id:"events",    on:true, eyebrow:"Chương trình", title:"Sự kiện cưới", script:false },
    { id:"timeline",  on:true, eyebrow:"Timeline", title:"Lịch trình ngày cưới", script:true },
    { id:"band2",     on:true, title:"20 . 09 . 2026" },
    { id:"gallery",   on:true, eyebrow:"Album", title:"Khoảnh khắc của chúng tôi", script:false },
    { id:"gifts",     on:true, eyebrow:"Hộp mừng cưới", title:"Gửi lời chúc phúc", script:true,
      lead:"Nếu ở xa không thể đến chung vui, bạn có thể gửi lời chúc và món quà tinh thần đến chúng tôi qua thông tin bên dưới." },
    { id:"rsvp",      on:true, eyebrow:"R.S.V.P", title:"Xác nhận tham dự", script:false },
    { id:"wishes",    on:true, eyebrow:"Sổ lưu bút", title:"Lời chúc từ mọi người", script:true },
    { id:"footer",    on:true, title:"Thank you",
      lead:"Cảm ơn bạn đã dành thời gian đọc thiệp mời này.<br>Chúng tôi rất mong được gặp bạn trong ngày hạnh phúc." }
  ]
};
