/**
 * LƯU XÁC NHẬN THAM DỰ (RSVP) VÀO GOOGLE SHEET — HOÀN TOÀN MIỄN PHÍ
 *
 * Cách dùng (làm 1 lần, ~5 phút):
 *  1. Vào https://sheets.new  → đặt tên bảng, ví dụ "RSVP Đám cưới".
 *  2. Menu:  Tiện ích mở rộng → Apps Script.
 *  3. Xoá hết code mẫu, dán TOÀN BỘ file này vào, bấm Lưu.
 *  4. Bấm Triển khai (Deploy) → Lượt triển khai mới → chọn loại "Ứng dụng web".
 *       - Thực thi với tư cách: Tôi
 *       - Người có quyền truy cập: Bất kỳ ai        <-- QUAN TRỌNG
 *     Bấm Triển khai → Cấp quyền (chọn tài khoản → Nâng cao → Đi tới ... → Cho phép).
 *  5. Copy "URL ứng dụng web" (dạng https://script.google.com/macros/s/..../exec)
 *  6. Mở index.html, dán URL đó vào dòng:   rsvpEndpoint: "",
 */

var SHEET_NAME = 'RSVP';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = getSheet_();
    var d = {};
    try { d = JSON.parse(e.postData.contents); } catch (err) { d = e.parameter || {}; }

    sheet.appendRow([
      new Date(),
      d.name      || '',
      d.attend    || '',
      d.side      || '',
      d.guests    || '',
      d.message   || '',
      d.guestLink || ''
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/** Mở URL bằng trình duyệt để xem nhanh danh sách đã nhận (dạng JSON). */
function doGet() {
  var rows = getSheet_().getDataRange().getValues();
  return json_({ ok: true, count: Math.max(0, rows.length - 1), rows: rows });
}

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Thời gian', 'Tên khách', 'Tham dự', 'Khách của', 'Số người', 'Lời chúc', 'Tên trên link']);
    sh.getRange('A1:G1').setFontWeight('bold').setBackground('#F1E6D6');
    sh.setFrozenRows(1);
    sh.setColumnWidth(1, 150); sh.setColumnWidth(2, 180); sh.setColumnWidth(6, 320);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
