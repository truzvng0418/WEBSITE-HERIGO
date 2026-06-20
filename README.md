# HERIGO - Google Maps style + đầy đủ tính năng 

# BÁO CÁO CHỨC NĂNG WEBSITE HERIGO

## Bản đồ di sản tương tác

## 1. Giới thiệu chung

HERIGO là một website bản đồ di sản tương tác, được xây dựng nhằm hỗ trợ người dùng khám phá các địa danh văn hóa, lịch sử, bảo tàng, chùa, đền, miếu và các biểu tượng nổi bật tại Hà Nội. Website được thiết kế theo phong cách gần giống Google Maps, kết hợp với các tính năng mở rộng như AI Guide, đặt vé tham quan, hướng dẫn viên, VR 360 và gợi ý lịch trình theo sở thích.

Mục tiêu chính của website là giúp người dùng dễ dàng tìm kiếm, xem thông tin, xem ảnh, mở chỉ đường, khám phá không gian ảo và lên kế hoạch tham quan các địa danh di sản một cách trực quan.

Website sử dụng giao diện màu kem, nâu vàng và phong cách di sản, tạo cảm giác cổ điển, gần gũi với chủ đề văn hóa - du lịch.

---

## 2. Mục tiêu của website

Website HERIGO được phát triển với các mục tiêu chính sau:

* Tạo một bản đồ tương tác giúp người dùng khám phá các địa danh di sản tại Hà Nội.
* Cung cấp thông tin chi tiết cho từng địa danh như tên, địa chỉ, mô tả, giờ mở cửa, giá vé và hình ảnh.
* Hỗ trợ tìm kiếm và lọc địa danh theo nhiều nhóm khác nhau.
* Cho phép người dùng xem VR 360 trực tiếp thông qua Google Street View.
* Hỗ trợ đặt vé tham quan ở dạng demo.
* Cung cấp danh sách hướng dẫn viên để người dùng lựa chọn.
* Tích hợp AI Guide để hỗ trợ hỏi đáp theo địa điểm đang chọn.
* Tạo lịch trình tham quan tự động dựa trên sở thích của người dùng.

---

## 3. Công nghệ sử dụng

Website được xây dựng bằng các công nghệ web cơ bản, dễ chạy trên localhost hoặc GitHub Pages.

### 3.1. HTML

HTML được sử dụng để xây dựng cấu trúc chính của website, bao gồm:

* Thanh bên trái chứa logo, tìm kiếm, bộ lọc và danh sách địa danh.
* Khu vực bản đồ chính.
* Thanh chức năng phía trên bản đồ.
* Các popup và modal như VR 360, đặt vé, xác nhận đặt hướng dẫn viên.
* Panel hiển thị thông tin địa danh và các tính năng phụ.

### 3.2. CSS

CSS được dùng để thiết kế giao diện, bao gồm:

* Theme màu kem, nâu vàng phù hợp với chủ đề di sản.
* Giao diện bản đồ dạng web app.
* Card địa danh.
* Popup nhỏ trên bản đồ.
* Panel chức năng bên phải.
* Modal VR 360.
* Responsive layout cho màn hình nhỏ.

### 3.3. JavaScript

JavaScript được sử dụng để xử lý toàn bộ tương tác của website, bao gồm:

* Khởi tạo bản đồ.
* Hiển thị marker địa danh.
* Tìm kiếm và lọc địa danh.
* Mở panel thông tin.
* Tải ảnh từ Wikipedia/Wikimedia.
* Xử lý AI Guide.
* Xử lý giỏ vé.
* Xử lý hướng dẫn viên.
* Tạo lịch trình Heritage Match.
* Mở Google Maps chỉ đường.
* Mở VR 360 bằng Google Street View.

### 3.4. Leaflet và OpenStreetMap

Website sử dụng Leaflet kết hợp với bản đồ nền OpenStreetMap/CARTO để hiển thị bản đồ tương tác mà không cần Google Maps API key. Điều này giúp website có thể chạy miễn phí trên localhost và GitHub Pages.

### 3.5. Google Maps / Street View

Google Maps được sử dụng cho hai chức năng chính:

* Mở chỉ đường đến địa danh.
* Hiển thị VR 360 thông qua Google Street View.

### 3.6. Wikipedia/Wikimedia

Ảnh địa danh được tải từ Wikipedia/Wikimedia để giúp website có hình ảnh thật, tăng tính trực quan cho người dùng.

---

## 4. Tổng quan giao diện

Website có bố cục chính gồm hai phần:

### 4.1. Thanh bên trái

Thanh bên trái gồm:

* Logo HERIGO.
* Dòng mô tả “Bản đồ di sản tương tác”.
* Ô tìm kiếm địa danh.
* Các nút phân loại địa danh.
* Danh sách kết quả địa danh.

Thanh bên trái có thể cuộn để xem nhiều địa danh. Mỗi địa danh trong danh sách hiển thị:

* Ảnh đại diện.
* Tên địa danh.
* Địa chỉ.
* Rating.
* Loại địa danh.
* Giá vé.

### 4.2. Khu vực bản đồ

Khu vực chính của website là bản đồ tương tác. Trên bản đồ có các marker đại diện cho từng địa danh. Khi bấm vào marker, website hiển thị popup nhỏ tại vị trí đó và đồng thời mở panel thông tin địa danh.

### 4.3. Thanh chức năng phía trên bản đồ

Thanh chức năng nằm ở phía trên bên phải bản đồ, gồm các mục:

* Bản đồ
* AI Guide
* Vé
* Hướng dẫn viên
* VR 360
* Match

Mỗi nút mở một chức năng riêng, giúp người dùng thao tác nhanh mà không cần rời khỏi bản đồ.

---

## 5. Chức năng bản đồ di sản tương tác

### 5.1. Hiển thị bản đồ

Website hiển thị bản đồ khu vực Hà Nội với các marker của địa danh. Người dùng có thể kéo, phóng to, thu nhỏ bản đồ để xem các khu vực khác nhau.

### 5.2. Marker địa danh

Mỗi địa danh được thể hiện bằng một marker màu nâu vàng. Khi người dùng bấm vào marker:

* Popup nhỏ hiện ngay trên bản đồ.
* Popup hiển thị ảnh, tên địa danh, rating và giờ mở cửa.
* Panel thông tin chi tiết của địa danh được mở.
* Marker được làm nổi bật để thể hiện địa danh đang chọn.

### 5.3. Popup nhỏ trên bản đồ

Popup nhỏ giúp người dùng xem nhanh thông tin mà không cần mở sâu. Nội dung popup gồm:

* Ảnh địa danh.
* Tên địa danh.
* Rating.
* Giờ mở cửa.

Popup này được thiết kế giống card nhỏ, tạo cảm giác gần giống Google Maps.

### 5.4. Panel thông tin địa danh

Khi chọn một địa danh, panel thông tin sẽ hiển thị ở cạnh bản đồ. Panel gồm:

* Tên địa danh.
* Gallery ảnh thật từ Wikipedia/Wikimedia.
* Ảnh lớn và các ảnh nhỏ để chuyển ảnh.
* Loại địa danh.
* Địa chỉ.
* Rating.
* Giá vé.
* Nút chỉ đường.
* Nút phóng tới.
* Mô tả địa danh.
* Giờ mở cửa.
* Giá vé.
* Thời lượng tham quan gợi ý.

### 5.5. Chỉ đường

Nút “Chỉ đường” mở Google Maps với điểm đến là địa danh đang chọn. Người dùng có thể dùng Google Maps để xem đường đi thực tế.

### 5.6. Phóng tới

Nút “Phóng tới” giúp bản đồ zoom gần vào địa danh đang chọn. Chức năng này giúp người dùng xác định chính xác vị trí của địa danh trên bản đồ.

---

## 6. Chức năng tìm kiếm địa danh

Website có ô tìm kiếm ở thanh bên trái. Người dùng có thể nhập tên địa danh hoặc từ khóa liên quan.

Ví dụ:

* Hoàng thành
* Văn Miếu
* Bảo tàng
* Hồ Gươm
* Chùa
* Lịch sử

Kết quả tìm kiếm sẽ được lọc trực tiếp trong danh sách và trên bản đồ. Những địa danh không phù hợp sẽ được ẩn đi.

Chức năng tìm kiếm hỗ trợ tiếng Việt có dấu và không dấu, giúp người dùng dễ tìm kiếm hơn.

---

## 7. Chức năng phân loại địa danh

Website cung cấp nhiều nút phân loại để người dùng lọc địa danh nhanh hơn.

Các nhóm phân loại gồm:

* Tất cả
* Di sản nổi bật
* UNESCO
* Lịch sử
* Biểu tượng
* Đền/miếu
* Chùa
* Bảo tàng
* Miễn phí
* Có vé
* Gần Hồ Gươm
* Check-in
* Gia đình

Bộ lọc không chỉ dựa vào loại địa danh mà còn dựa vào tags, giá vé và rating. Điều này giúp kết quả lọc linh hoạt hơn.

Ví dụ:

* Chọn “Miễn phí” sẽ hiển thị các địa danh không cần mua vé.
* Chọn “Có vé” sẽ hiển thị các địa danh có giá vé.
* Chọn “Check-in” sẽ hiển thị các địa điểm phù hợp để chụp ảnh.
* Chọn “UNESCO” sẽ hiển thị địa danh có liên quan đến UNESCO.

---

## 8. Dữ liệu địa danh

Website hiện có khoảng 28 địa danh tại Hà Nội và vùng lân cận. Một số địa danh tiêu biểu gồm:

* Hoàng thành Thăng Long
* Văn Miếu - Quốc Tử Giám
* Hồ Hoàn Kiếm
* Đền Ngọc Sơn
* Chùa Một Cột
* Bảo tàng Dân tộc học Việt Nam
* Nhà tù Hỏa Lò
* Lăng Chủ tịch Hồ Chí Minh
* Chùa Trấn Quốc
* Phủ Tây Hồ
* Đền Quán Thánh
* Cột cờ Hà Nội
* Nhà hát Lớn Hà Nội
* Nhà thờ Lớn Hà Nội
* Ô Quan Chưởng
* Chợ Đồng Xuân
* Cầu Long Biên
* Hồ Tây
* Làng cổ Đường Lâm
* Thành Cổ Loa
* Chùa Thầy
* Chùa Tây Phương
* Đền Sóc
* Bảo tàng Phụ nữ Việt Nam
* Bảo tàng Lịch sử Quốc gia

Mỗi địa danh có các dữ liệu:

* ID
* Tên địa danh
* Loại địa danh
* Địa chỉ
* Tọa độ latitude/longitude
* Rating
* Giờ mở cửa
* Giá vé
* Thời gian tham quan gợi ý
* Wikipedia title để tải ảnh
* Tags phân loại
* Mô tả địa danh

---

## 9. Chức năng AI Guide

AI Guide là tính năng hỗ trợ người dùng hỏi đáp về địa danh và hành trình tham quan.

### 9.1. Gợi ý nhanh theo ngữ cảnh

AI Guide thay đổi câu hỏi gợi ý theo địa danh đang được chọn. Nếu chưa chọn địa danh, AI Guide sẽ yêu cầu người dùng chọn một địa điểm trên bản đồ.

Ví dụ nếu người dùng chọn Hoàng thành Thăng Long, AI Guide sẽ gợi ý các câu hỏi như:

* Hoàng thành Thăng Long có gì nổi bật?
* Nên đi cùng điểm nào gần Hoàng thành?
* Hoàng thành có cần mua vé không?
* Tham quan Hoàng thành mất bao lâu?

Nếu người dùng chọn Văn Miếu - Quốc Tử Giám, AI Guide sẽ gợi ý các câu hỏi riêng cho Văn Miếu.

### 9.2. Trả lời theo địa điểm đang chọn

AI Guide có thể trả lời các câu hỏi theo địa danh đang chọn, ví dụ:

* Địa điểm này có gì nổi bật?
* Nên đi cùng điểm nào gần đây?
* Có cần mua vé không?
* Mất bao lâu để tham quan?
* Giờ mở cửa là khi nào?
* Giá vé bao nhiêu?
* Có thể xem VR 360 không?
* Có thể mở chỉ đường không?

### 9.3. Gợi ý địa danh có thể bấm được

Khi AI Guide gợi ý một địa danh, tên địa danh trong câu trả lời có thể bấm được. Khi người dùng bấm vào tên địa danh:

* Bản đồ sẽ phóng tới địa danh đó.
* Marker của địa danh được chọn.
* Panel thông tin địa danh được mở.
* Popup nhỏ trên bản đồ hiện tại điểm đó.

Tính năng này giúp AI Guide liên kết trực tiếp với bản đồ, tạo trải nghiệm thông minh và liền mạch hơn.

### 9.4. Hỗ trợ nhiều loại câu hỏi

AI Guide có thể xử lý nhiều kiểu câu hỏi khác nhau:

* Gợi ý địa điểm lịch sử.
* Gợi ý điểm check-in.
* Gợi ý bảo tàng.
* Gợi ý điểm tâm linh.
* Hỏi về giá vé.
* Hỏi về giờ mở cửa.
* Hỏi về địa điểm gần đó.
* Hỏi về hướng dẫn viên.
* Hỏi về VR 360.
* Hỏi về chỉ đường.

---

## 10. Chức năng Vé

Mục “Vé” cho phép người dùng chọn số lượng vé tham quan cho các địa danh có thu phí.

### 10.1. Danh sách địa danh có vé

Website chỉ hiển thị những địa danh có giá vé lớn hơn 0. Các địa danh miễn phí không xuất hiện trong mục này để tránh dư thừa.

Mỗi card vé gồm:

* Tên địa danh.
* Địa chỉ.
* Giá vé.
* Thời lượng tham quan gợi ý.
* Nút tăng/giảm số lượng vé.

### 10.2. Tính tổng tiền

Khi người dùng tăng hoặc giảm số lượng vé, website tự động tính tổng tiền. Tổng tiền được hiển thị ở cuối panel vé.

### 10.3. Thanh toán demo

Nút “Thanh toán” mở luồng xác nhận demo. Chức năng này mô phỏng quy trình đặt vé nhưng chưa kết nối cổng thanh toán thật.

---

## 11. Chức năng Hướng dẫn viên

Mục “Hướng dẫn viên” hiển thị danh sách các hướng dẫn viên du lịch.

### 11.1. Danh sách hướng dẫn viên

Mỗi hướng dẫn viên có thông tin:

* Tên.
* Mức độ chuyên môn.
* Trạng thái.
* Giá theo tour.
* Rating.
* Kỹ năng/chuyên môn.
* Mô tả ngắn.

### 11.2. Bộ lọc hướng dẫn viên

Người dùng có thể lọc hướng dẫn viên theo:

* Tất cả hướng dẫn viên
* Đang rảnh
* Chuyên gia cao cấp
* Giá tốt

### 11.3. Đặt hướng dẫn viên

Người dùng có thể bấm “Đặt hướng dẫn viên” để mở popup xác nhận. Đây là luồng demo mô phỏng việc gửi yêu cầu đặt guide.

### 11.4. Dữ liệu hướng dẫn viên

Website hiện có nhiều hướng dẫn viên, ví dụ:

* Mai Anh
* Đức Minh
* Thu Hà
* Quang Huy
* Ngọc Linh
* Anh Tuấn
* Minh Châu
* Hoàng Nam

Các hướng dẫn viên có chuyên môn khác nhau như lịch sử, bảo tàng, phố cổ, ẩm thực, kiến trúc Pháp, UNESCO và ngoại thành Hà Nội.

---

## 12. Chức năng VR 360

VR 360 cho phép người dùng xem không gian 360 độ của địa danh bằng Google Street View.

### 12.1. Nút VR 360 trên thanh chức năng

Nút “VR 360” nằm trên thanh chức năng cạnh bản đồ. Khi bấm vào, website mở popup VR 360.

### 12.2. Popup VR 360

Popup VR 360 gồm:

* Tiêu đề “VR 360° Khám phá không gian ảo”.
* Thanh lựa chọn địa danh.
* Khung xem Street View 360.
* Chú thích địa danh.
* Nút mở Street View toàn màn hình.

### 12.3. Thanh lựa chọn địa danh

Người dùng có thể chọn địa danh khác ngay trong popup VR 360 mà không cần đóng popup.

Khi chọn địa danh mới:

* VR 360 tự động đổi sang địa danh đó.
* Chú thích địa danh cũng thay đổi theo.

### 12.4. Chú thích địa danh

Bên dưới khung VR 360 có phần chú thích gồm:

* Tên địa danh.
* Mô tả địa danh.

Phần này giúp người dùng hiểu rõ hơn về địa điểm đang xem.

### 12.5. Mở Street View toàn màn hình

Nút “Mở Street View toàn màn hình” mở Google Maps/Street View ở tab mới, giúp người dùng xem không gian 360 với kích thước lớn hơn.

---

## 13. Chức năng Heritage Match

Heritage Match là chức năng tạo lịch trình tham quan theo sở thích của người dùng.

### 13.1. Chọn sở thích

Người dùng có thể chọn các sở thích như:

* Lịch sử
* Tâm linh
* Bảo tàng
* Chụp ảnh
* Gia đình
* Tiết kiệm
* Đi nhanh
* Khám phá sâu

### 13.2. Tạo lịch trình phù hợp

Sau khi chọn ít nhất 2 sở thích, người dùng bấm “Tạo lịch trình phù hợp”. Website sẽ tạo một lịch trình gợi ý.

### 13.3. Thuật toán gợi ý

Thuật toán Heritage Match sử dụng toàn bộ danh sách địa danh để chấm điểm. Việc chấm điểm dựa trên:

* Sở thích người dùng đã chọn.
* Loại địa danh.
* Tags của địa danh.
* Giá vé.
* Thời lượng tham quan.
* Rating.
* Khu vực địa lý.

Sau khi chấm điểm, hệ thống có bước đa dạng hóa để tránh lịch trình bị lặp quá nhiều địa điểm cùng loại. Ví dụ, lịch trình không chỉ toàn bảo tàng hoặc toàn địa điểm lịch sử mà có thể kết hợp nhiều nhóm như lịch sử, biểu tượng, bảo tàng, tâm linh và check-in.

### 13.4. Xem tuyến trên bản đồ

Sau khi tạo lịch trình, người dùng có thể bấm nút “Xem tuyến trên bản đồ”. Bản đồ sẽ tự động zoom để hiển thị các địa điểm trong lịch trình.

---

## 14. Chức năng hình ảnh thật

Website tải ảnh địa danh từ Wikipedia/Wikimedia.

### 14.1. Ảnh đại diện

Mỗi card địa danh ở thanh bên trái có ảnh đại diện.

### 14.2. Gallery trong panel thông tin

Mỗi địa danh có gallery gồm khoảng 3-4 ảnh thật. Người dùng có thể bấm vào ảnh nhỏ để đổi ảnh lớn.

### 14.3. Ảnh trong popup nhỏ

Popup nhỏ trên bản đồ cũng hiển thị ảnh của địa danh, giúp người dùng nhận diện địa điểm nhanh hơn.

---

## 15. Chức năng chỉ đường

Khi người dùng bấm nút “Chỉ đường”, website mở Google Maps với tọa độ của địa danh đang chọn.

Chức năng này giúp người dùng dễ dàng di chuyển từ vị trí hiện tại đến địa danh, đặc biệt hữu ích khi sử dụng trên điện thoại.

---

## 16. Giao diện và trải nghiệm người dùng

Website được thiết kế theo hướng:

* Dễ nhìn.
* Dễ thao tác.
* Gần giống trải nghiệm Google Maps.
* Có màu sắc phù hợp chủ đề di sản.
* Tách rõ các chức năng.
* Các popup, panel và card có bo góc mềm.
* Bản đồ là trung tâm của trải nghiệm.

Website cũng hỗ trợ responsive để có thể sử dụng trên màn hình nhỏ.

---

## 17. Ưu điểm của website

Website HERIGO có nhiều ưu điểm:

* Giao diện trực quan, hiện đại.
* Bản đồ tương tác dễ sử dụng.
* Có nhiều dữ liệu địa danh.
* Có ảnh thật từ Wikipedia/Wikimedia.
* Có AI Guide hỗ trợ hỏi đáp.
* Có VR 360 tích hợp trực tiếp.
* Có chức năng đặt vé demo.
* Có marketplace hướng dẫn viên.
* Có Heritage Match tạo lịch trình theo sở thích.
* Chạy được bằng HTML, CSS, JavaScript thuần.
* Có thể chạy trên localhost hoặc GitHub Pages.

---

## 18. Hạn chế hiện tại

Dù website đã có nhiều chức năng, vẫn còn một số hạn chế:

* AI Guide hiện là mô phỏng bằng JavaScript, chưa kết nối AI thật.
* Đặt vé mới là demo, chưa có thanh toán thật.
* Hướng dẫn viên là dữ liệu mẫu, chưa có hệ thống tài khoản thật.
* VR 360 phụ thuộc vào dữ liệu Street View của Google.
* Một số địa danh có thể không có ảnh Wikipedia đầy đủ.
* Giá vé và giờ mở cửa chỉ là dữ liệu demo, cần cập nhật từ nguồn chính thức nếu triển khai thực tế.
* Chưa có backend để lưu đặt vé, lịch sử người dùng hoặc tài khoản.

---

## 19. Hướng phát triển trong tương lai

Website có thể phát triển thêm các tính năng sau:

* Kết nối AI thật để trả lời linh hoạt hơn.
* Thêm backend để lưu dữ liệu đặt vé.
* Thêm đăng nhập người dùng.
* Tích hợp thanh toán online.
* Tạo hệ thống quản lý hướng dẫn viên.
* Cho phép người dùng lưu lịch trình yêu thích.
* Thêm đánh giá và bình luận địa danh.
* Tích hợp GPS để gợi ý địa điểm gần vị trí người dùng.
* Thêm tuyến đường tự động giữa các địa danh.
* Thêm dữ liệu thời gian mở cửa và giá vé từ nguồn chính thức.
* Tối ưu giao diện mobile tốt hơn.

---

## 20. Kết luận

HERIGO là một website bản đồ di sản tương tác có nhiều tính năng hữu ích cho việc khám phá các địa danh văn hóa, lịch sử và du lịch tại Hà Nội. Website không chỉ hiển thị bản đồ và thông tin địa danh mà còn tích hợp thêm AI Guide, đặt vé, hướng dẫn viên, VR 360 và gợi ý lịch trình thông minh.

Với giao diện giống Google Maps kết hợp phong cách màu sắc di sản, HERIGO mang lại trải nghiệm trực quan, dễ sử dụng và phù hợp với mục tiêu quảng bá du lịch văn hóa. Đây là một nền tảng có tiềm năng phát triển thành ứng dụng hỗ trợ du lịch di sản hoàn chỉnh trong tương lai.

