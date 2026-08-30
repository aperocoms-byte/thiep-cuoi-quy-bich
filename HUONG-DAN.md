# 💌 Thiệp cưới online — Hướng dẫn sử dụng

Trang thiệp được viết mới hoàn toàn (code riêng), tông **trắng – be – đỏ đô**.
Chạy bằng 1 file `index.html`, không cần cài đặt gì.

---

## 📁 Có gì trong thư mục này

| File / thư mục | Dùng để làm gì |
|---|---|
| `index.html` | **Trang thiệp chính.** Mọi thông tin sửa trong khối `CONFIG` ở gần cuối file. |
| `tao-link.html` | Công cụ tạo **link mời riêng cho từng khách** + tin nhắn gửi Zalo/Messenger. |
| `apps-script.gs` | Code lưu xác nhận tham dự (RSVP) vào Google Sheet — miễn phí. |
| `assets/images/` | Nơi bỏ ảnh cưới + ảnh QR ngân hàng. |
| `assets/music/` | Nơi bỏ file nhạc nền `.mp3`. |

Chưa có ảnh thật thì trang vẫn chạy bình thường — chỗ ảnh sẽ hiện ô be “chưa có ảnh”.

---

## ✍️ Bước 1 — Sửa thông tin của bạn

Mở `index.html` bằng **VS Code** (hoặc TextEdit), kéo xuống tìm dòng:

```
const CONFIG = {
```

Sửa các mục trong đó rồi **lưu lại** (⌘S). Các mục quan trọng:

| Mục | Ý nghĩa |
|---|---|
| `groom` / `bride` | Tên chú rể, cô dâu và tên bố mẹ hai bên |
| `weddingISO` | Ngày giờ cưới — dùng cho **đồng hồ đếm ngược**. Giữ đúng dạng `2026-12-07T11:00:00+07:00` |
| `dateLabel` | Ngày hiển thị trên thiệp (viết sao cũng được) |
| `events` | 3 sự kiện: Vu quy / Thành hôn / Tiệc cưới — giờ, địa điểm, **link Google Maps** |
| `timeline` | Lịch trình các mốc giờ trong ngày cưới |
| `gifts` | Ngân hàng, chủ tài khoản, số tài khoản, ảnh QR |
| `storyText` | Đoạn “Chuyện chúng mình” |
| `wishes` | Vài lời chúc hiện sẵn trong sổ lưu bút |

> **Lấy link Google Maps:** mở Google Maps → tìm địa điểm → bấm **Chia sẻ** → **Sao chép liên kết** → dán vào `map:`.

---

## 🖼️ Bước 2 — Bỏ ảnh vào

Chép ảnh vào thư mục `assets/images/` và **đặt tên đúng như trong CONFIG**:

- `hero.jpg` — ảnh lớn ở đầu trang (ảnh dọc đẹp nhất, tỉ lệ 3:4)
- `story.jpg` — ảnh ở phần “Chuyện chúng mình”
- `1.jpg` … `8.jpg` — album ảnh
- `qr-groom.png`, `qr-bride.png` — mã QR ngân hàng (chụp/tải từ app ngân hàng)

Muốn nhiều/ít ảnh album hơn thì thêm bớt dòng trong `gallery: [...]`.

💡 **Nén ảnh trước khi dùng** để trang mở nhanh trên 4G: vào https://squoosh.app,
kéo ảnh vào, xuất lại dưới ~300 KB mỗi tấm.

---

## 🎵 Bước 3 — Nhạc nền (tuỳ chọn)

Bỏ file `.mp3` vào `assets/music/`, rồi sửa dòng `music: "assets/music/nhac-nen.mp3"`.
Không muốn có nhạc thì để `music: ""` — nút nhạc sẽ tự ẩn.

> Trình duyệt trên điện thoại chặn tự phát nhạc, nên nhạc chỉ bật khi khách bấm **“Mở thiệp”** — điều này là bình thường.
> Nhớ dùng nhạc bạn có quyền sử dụng để tránh rắc rối bản quyền.

---

## ☁️ Bước 4 — Đưa trang lên mạng (MIỄN PHÍ)

### Cách dễ nhất: **Netlify Drop** — kéo thả, không cần tài khoản, 30 giây

1. Vào https://app.netlify.com/drop
2. Kéo **cả thư mục `Thiep Cuoi`** thả vào ô giữa trang.
3. Xong! Bạn nhận được link dạng `https://ten-ngau-nhien.netlify.app`
4. Muốn đổi tên link cho đẹp (`minhanh-thuha.netlify.app`): đăng ký tài khoản miễn phí →
   **Site configuration → Change site name**.

### Cách khác: **GitHub Pages**
Tạo repo mới → upload các file → **Settings → Pages → Branch: main** → link là
`https://têntàikhoản.github.io/tênrepo/`.

Cả hai đều **miễn phí vĩnh viễn** và đủ dùng cho hàng nghìn lượt xem.

---

## 👤 Bước 5 — Tạo link riêng cho từng khách mời

Đây là phần “điền tên khách mời” bạn cần.

1. Mở file `tao-link.html` (nhấp đúp là mở bằng trình duyệt).
2. Dán **địa chỉ trang thiệp** vừa có ở bước 4 vào ô đầu tiên.
3. Dán **danh sách khách mời**, mỗi người một dòng.
4. Bấm **Tạo link** → mỗi khách có một link riêng.
5. Bấm **Copy tin nhắn** ở từng dòng → dán vào Zalo / Messenger gửi cho khách.

Khách mở link sẽ thấy ngay: *“Trân trọng kính mời — **Anh Nguyễn Văn A**”*,
và tên đó cũng được điền sẵn vào form xác nhận tham dự.

> Nguyên lý: link có dạng `...?guest=Anh%20Nguyễn%20Văn%20A`.
> Bạn có thể tự sửa tên trong link bất cứ lúc nào.
> Ai mở link trơn (không có tên) sẽ thấy “Quý khách” — vẫn dùng tốt.

---

## 📋 Bước 6 — Nhận xác nhận tham dự vào Google Sheet

Mặc định form vẫn chạy và hiện lời cảm ơn, nhưng **chưa lưu dữ liệu ở đâu cả**.
Muốn nhận được danh sách khách xác nhận:

1. Mở file `apps-script.gs`, làm theo 6 bước ghi ở đầu file (khoảng 5 phút).
2. Copy URL nhận được, dán vào `index.html` tại dòng:
   ```
   rsvpEndpoint: "",     →     rsvpEndpoint: "https://script.google.com/macros/s/..../exec",
   ```
3. Từ đó, mỗi khách bấm gửi là một dòng mới xuất hiện trong Google Sheet của bạn:
   thời gian, tên, có/không tham dự, khách của nhà trai hay nhà gái, số người, lời chúc.

---

## ✅ Kiểm tra trước khi gửi khách

- [ ] Tên cô dâu chú rể, tên bố mẹ hai bên đã đúng
- [ ] Ngày giờ, địa chỉ 3 sự kiện đã đúng; bấm **Xem bản đồ** ra đúng chỗ
- [ ] Đồng hồ đếm ngược chạy đúng số ngày còn lại
- [ ] Số tài khoản & ảnh QR đúng người
- [ ] Mở thử trên **điện thoại** (gửi link cho chính mình trước)
- [ ] Gửi thử 1 link có tên cho người thân, nhờ bấm **xác nhận tham dự** xem có về Sheet không

---

Chúc hai bạn trăm năm hạnh phúc! ♥
