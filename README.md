# HERIGO - Google Maps style + đầy đủ tính năng web cũ

Bản này giữ giao diện bản đồ kiểu Google Maps, màu sắc kem/nâu giống HERIGO ban đầu, đồng thời thêm lại đầy đủ các tính năng của web cũ:

- Bản đồ di sản tương tác
- Tìm kiếm, lọc địa danh, định vị, vừa khung
- Khung thông tin địa điểm cạnh bản đồ
- Chỉ đường bằng Google Maps
- Xem VR/Street View 360° dạng popup và dạng tab riêng
- Đặt vé, giỏ vé demo và xác nhận thanh toán
- Marketplace đặt hướng dẫn viên, lọc theo trạng thái/chuyên môn/giá
- AI Guide mô phỏng chat hỏi đáp di sản
- Heritage Match tạo lịch trình theo sở thích
- Ảnh thật tự tải từ Wikipedia

## Cách chạy localhost

```bash
cd herigo_ggmap_style
python -m http.server 8000
```

Mở:

```text
http://localhost:8000
```

Nếu trình duyệt còn dùng cache cũ, bấm `Ctrl + F5`.


## VR 360° live update

- Tab VR 360° hiển thị Street View trực tiếp trong web.
- Nút Xem 360° ở khung địa điểm mở popup VR trực tiếp.
- Có nút mở toàn màn hình bằng Google Maps nếu muốn xem lớn hơn.


## Cập nhật menu

- Đã bỏ nút `VR 360°` khỏi thanh menu trên cùng.
- Chức năng xem VR 360° vẫn còn ở nút `Xem 360°` trong khung thông tin địa điểm.


## Cập nhật khung thông tin địa điểm

- Khi bấm địa điểm/marker, thông tin hiện ở panel bên phải giống panel AI Guide, Vé, Hướng dẫn viên.
- Khung thông tin cũ ở cạnh dưới đã được ẩn.
- Mỗi địa điểm có gallery 3-4 ảnh thật tải từ Wikipedia/Wikimedia.


## Cập nhật phân loại

- Đã bỏ nút `Vừa khung`.
- Thêm các mục phân loại mới: Di sản nổi bật, UNESCO, Miễn phí, Có vé, Gần Hồ Gươm, Check-in, Gia đình.
- Bộ lọc hiện dựa trên cả `category`, `tags`, giá vé và rating của địa điểm.


## Cập nhật logo

- Đã thay logo chữ `H` bằng ảnh logo Herigo bạn vừa gửi.
- File logo được lưu trong thư mục `assets/herigo-logo.jpg`.


## Sửa lỗi số lượng địa danh

- Đã chèn lại đúng 20 địa danh mới vào mảng `places`.
- Tổng số địa danh hiện tại trong `script.js`: 8.


## Cập nhật thanh bên trái

- Giữ lại logo Herigo ở đầu thanh bên.
- Xóa nút `Vị trí của tôi`.
- Xóa nút `Vừa khung`.
- Đổi dòng phụ `Heritage Travel Guide` thành `Bản đồ di sản tương tác`.


## Cập nhật panel thông tin địa điểm

- Đổi tiêu đề panel từ `Thông tin di sản` thành tên địa danh đang chọn.
- Xóa nút `Đặt vé` trong panel địa điểm.
- Đổi nút `Xem 360°` thành `VR 360`.


## Cập nhật thao tác trên bản đồ

- Khôi phục lại 2 nút ở góc trên bên phải của bản đồ:
  - `Định vị`
  - `Vừa khung`
- Khi bấm trực tiếp vào marker/địa điểm trên bản đồ, web sẽ mở luôn panel thông tin bên phải.
- Không cần bấm nút `Xem thông tin` trong popup nhỏ nữa.


## Khôi phục thanh tính năng

- Đã khôi phục các nút `Bản đồ`, `AI Guide`, `Vé`, `Hướng dẫn viên`, `Match`.
- Vẫn giữ yêu cầu trước đó: không đưa `VR 360°` vào thanh menu.
- Khi bấm địa điểm trên bản đồ, panel thông tin vẫn mở trực tiếp.


## Cập nhật popup nhỏ trên bản đồ

- Khi bấm vào marker/địa danh trên bản đồ, ngoài panel thông tin bên phải còn hiện thêm popup nhỏ ngay tại điểm trên bản đồ.
- Popup nhỏ có ảnh, tên địa danh, rating, giờ mở cửa, thời gian gợi ý và nút `Xem chi tiết`.
- Vẫn giữ hành vi mở luôn panel thông tin, không cần bấm thêm.


## Cập nhật popup nhỏ

- Đã xóa nội dung thời gian gợi ý như `45 phút` khỏi popup nhỏ trên marker.
- Popup nhỏ hiện chỉ còn ảnh, tên địa danh, rating, giờ mở cửa và nút `Xem chi tiết`.


## Cập nhật popup nhỏ

- Đã xóa nút `Xem chi tiết` khỏi popup nhỏ trên marker.
- Popup nhỏ hiện chỉ còn: ảnh, tên địa danh, rating và giờ mở cửa.


## Cập nhật Heritage Match

- Đã đổi thuật toán gợi ý để dùng toàn bộ danh sách địa danh thay vì chỉ lấy vài điểm cố định trong từng sở thích.
- Thuật toán mới chấm điểm theo sở thích, category, tags, giá vé, thời lượng gợi ý và rating.
- Sau khi chấm điểm, hệ thống có bước đa dạng hóa theo loại địa điểm và khu vực để tránh lịch trình bị lặp quá nhiều điểm cùng nhóm.
- Kết quả giờ có thể gợi ý kết hợp nhiều loại điểm hơn như lịch sử, bảo tàng, tâm linh, biểu tượng, khu Hồ Tây, Ba Đình, trung tâm hoặc ngoại thành.


## Cập nhật phần Hướng dẫn viên

- Đã xóa nhãn `Marketplace` ở đầu panel.
- Đã xóa dòng mô tả `Marketplace hướng dẫn viên giúp người dùng chọn guide theo trạng thái, chuyên môn và giá.`


## Cập nhật hướng dẫn viên

- Đã thêm 4 hướng dẫn viên mới:
  - Ngọc Linh
  - Anh Tuấn
  - Minh Châu
  - Hoàng Nam
- Tổng số hướng dẫn viên hiện tại: 8.


## Cập nhật popup VR 360

- Đã thêm phần chú thích của địa danh ở bên dưới khung VR 360.
- Chú thích sẽ tự đổi theo địa danh đang được chọn trong popup.
