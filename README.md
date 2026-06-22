BÁO CÁO WEBSITE HERIGO
1. Giới thiệu chung
HERIGO là một nền tảng web ứng dụng bản đồ tương tác chuyên sâu, được thiết kế nhằm số hóa, bảo tồn và quảng bá các giá trị văn hóa, lịch sử, bảo tàng, làng nghề nghệ thuật cổ truyền và hệ thống nhà cổ di sản tại khu vực Hà Nội. Giao diện ứng dụng được tối ưu hóa theo mô hình trải nghiệm scannable quen thuộc của Google Maps, giúp người dùng dễ dàng định vị địa lý, tra cứu tư liệu, xem không gian ảo và lên lịch trình tham quan một cách trực quan.
Website sử dụng ngôn ngữ thiết kế Warm Cream Theme độc bản. Sự kết hợp hài hòa giữa các gam màu kem, nâu đất (#a86318), vàng di sản (#c7852a) và sắc xanh nhạt (#dfe8dc) tạo nên một không gian hoài cổ, ấm áp nhưng không kém phần hiện đại, rất phù hợp với chủ đề du lịch di sản văn hóa.
2. Mục tiêu của website
Số hóa di sản: Thiết lập hệ thống cơ sở dữ liệu và bản đồ trực quan cho 21 địa danh văn hóa tiêu biểu bao gồm cả khu vực lõi nội đô và các vùng làng cổ, làng nghề phụ cận ngoài ngoại thành.
Cung cấp tư liệu số: Cung cấp đầy đủ thông tin thực tế cho từng địa điểm: Tên gọi, biểu giá, khung giờ hoạt động, thời lượng tham quan khuyến nghị kèm mô tả tóm tắt chiều sâu văn hóa.
Tích hợp giải pháp mở rộng: Hỗ trợ du khách tối đa thông qua các tiện ích hỏi đáp thông minh (AI Guide), đăng ký dịch vụ (Vé tham quan, Workshop Trải nghiệm tại điểm, Hướng dẫn viên), và khám phá không gian ảo VR 360°.
Tối ưu hóa hành trình: Hỗ trợ thuật toán lập lịch trình tự động thông minh giúp cân bằng và đa dạng hóa điểm đến dựa trên tập sở thích cá nhân của người dùng.
3. Công nghệ và Thư viện sử dụng
Dự án được xây dựng hoàn toàn dựa trên nền tảng công nghệ web lõi (Vanilla Web Stack), giúp tối ưu hóa hiệu năng, chạy mượt mà trên môi trường Localhost lẫn GitHub Pages mà không cần cấu hình Backend phức tạp:
HTML5 & CSS3: Thiết lập cấu trúc App-Shell phân tách không gian khoa học; ứng dụng các kỹ thuật biến CSS Custom Properties, Flexbox, và Grid để đáp ứng giao diện Responsive linh hoạt trên mọi kích cỡ màn hình.
JavaScript (ES6+): Ngôn ngữ xử lý toàn bộ logic nghiệp vụ, quản lý trạng thái ứng dụng (state), xử lý chuỗi chuẩn hóa tiếng Việt, tính toán ma trận lịch trình và điều khiển tương tác giao diện real-time.
Leaflet.js & CARTO (Voyager Tiles): Thư viện bản đồ mở mã nguồn tự do, cho phép hiển thị bản đồ tương tác, quản lý Marker, lớp bản đồ và thu phóng vùng nhìn tự động mà hoàn toàn không cần sử dụng Google Maps API Key trả phí.
Wikipedia REST API: Khai thác cổng API Summary và Media-list công khai để tìm nạp tự động, lưu bộ nhớ đệm (imageCache) và hiển thị hệ thống ảnh tư liệu thực tế từ Wikimedia một cách chính xác.
Google Maps Gateway: Sử dụng cơ chế nhúng truyền thống output=svembed của Google để tải mượt mà kho dữ liệu Street View toàn cảnh mà không bị dính cơ chế chặn API Key.
4. Tổng quan cấu trúc giao diện (App-Shell Layout)
Ứng dụng được chia làm 2 khu vực chính hiển thị song song rất trực quan trên màn hình:
4.1. Thanh bên trái (Sidebar Controller)
Khối nhận diện thương hiệu: Nổi bật với ảnh Logo HERIGO bo góc mềm mại nằm cạnh tiêu đề và mô tả dự án. Trên thiết bị di động, khối này tích hợp nút đóng nhanh để nhường không gian cho bản đồ.
Hộp tìm kiếm Real-time: Ô nhập liệu hỗ trợ tìm kiếm trực tiếp theo tên di sản, địa chỉ hoặc thẻ tags phân loại.
Thanh phân loại nhanh (Category Chips): Hệ thống các nút bấm bộ lọc ngang cho phép chuyển đổi nhanh trạng thái hiển thị của bản đồ theo các nhóm: Tất cả, Di sản nổi bật, UNESCO, Lịch sử, Biểu tượng, Đền/ Chùa, Bảo tàng, Làng nghề, Nhà cổ, Miễn phí, Có vé, Gần Hồ Gươm, Check-in, Gia đình.
Danh sách địa danh kết quả: Danh sách hiển thị các thẻ địa điểm (Place Card) có thể cuộn dọc, tích hợp ảnh thumbnail thu nhỏ, điểm đánh giá sao, danh mục lõi và biểu giá vé.
4.2. Khu vực chính (Main Map Area)
Bản đồ nền: Chiếm trọn không gian bên phải hiển thị các Marker di sản. Marker ở trạng thái bình thường có màu nâu đất (#a86318) chữ "H", khi được click chọn sẽ chuyển sang màu vàng (#f59e0b) biểu tượng ngôi sao "★" lớn hơn nổi bật.
Thanh Tabs tính năng (Feature Nav): Cổng điều hướng gồm 7 tab chức năng được thiết kế bo tròn lơ lửng trên góc phải bản đồ: Bản đồ, AI Guide, Trải nghiệm, Vé, Hướng dẫn viên, VR 360, Match.
Bảng nội dung tính năng (Feature Panel): Bảng trượt mở rộng ở cạnh phải bản đồ chuyên dùng để kết xuất toàn bộ nội dung, biểu mẫu, khung nhìn trực tiếp của tab chức năng đang chọn hoặc dùng để hiển thị Bảng thông tin chi tiết của địa điểm.
5. Chi tiết các phân hệ chức năng cốt lõi
5.1. Phân hệ Bản đồ & Bảng thông tin chi tiết (Place Info Panel)
Khi người dùng click vào một thẻ địa điểm ở thanh bên trái hoặc click vào Marker trên bản đồ, hệ thống sẽ tự động bay tới tiêu điểm và mở bảng thông tin chuyên sâu:
Wikipedia Photo Gallery: Tự động kết nối API tải 4 bức ảnh thật chất lượng cao từ tư liệu Wikipedia. Tích hợp hiệu ứng click ảnh nhỏ đổi ảnh lớn trực quan.
Hành động điều hướng: Cung cấp nút "↗ Chỉ đường" kết nối API định vị Google Maps để chỉ đường lái xe thực tế và nút "＋ Phóng tới" để tự động thu phóng bản đồ cận cảnh (zoom level 17).
Bảng thông số cấu trúc: Kết xuất 3 khối thông tin đồng bộ về khung giờ đóng/mở cửa, giá vé thực tế, và thời gian lưu trú khuyến nghị.
5.2. Chức năng phân loại gộp "Đền/ Chùa" tối ưu
Để tối giản giao diện và đồng bộ hành vi tìm kiếm tâm linh của du khách, hệ thống đã gộp các nhóm nhỏ cũ thành một danh mục lớn duy nhất mang tên Đền/ Chùa. Bộ lọc này tự động quét các thuộc tính danh mục gốc cùng các thẻ mảng tag Phật giáo hoặc Tâm linh để hiển thị chính xác các không gian cổ kính như Đền Ngọc Sơn, Chùa Một Cột, Chùa Trấn Quốc, Phủ Tây Hồ, Chùa Thầy...
5.3. Chức năng Trợ lý ảo thông minh (AI Guide)
Gợi ý nhanh theo ngữ cảnh (Contextual Prompts): Khi chọn một địa điểm cụ thể (Ví dụ: Hoàng Thành hoặc Văn Miếu), AI Guide sẽ tự động thay đổi các nút bấm câu hỏi mẫu sao cho khớp riêng với di tích đó (Ví dụ: "Nên đi cùng điểm nào gần Hoàng thành?").
Văn bản liên kết động (ai-place-link): Trong câu trả lời văn bản tự động của AI, tên của các địa danh di sản khác sẽ tự động được chuyển đổi thành các nút bấm gạch chân có thể tương tác. Khi click vào tên địa điểm này, bản đồ sẽ tự động bay đến di tích đó và kích hoạt mở bảng thông tin chi tiết ngay lập tức.
5.4. Chức năng Đăng ký "Trải nghiệm tại điểm"
Đây là phân hệ tính năng độc đáo giúp số hóa các hoạt động, workshop nghệ thuật đặc sắc, cung cấp 7 dịch vụ thực tế kèm giá đặt chỗ demo rõ ràng:
Tour đêm “Tinh hoa đạo học” - Văn miếu (199.000đ).
Tour đêm giải mã Hoàng thành - Hoàng thành Thăng Long (300.000đ).
Tự làm sản phẩm gốm - Làng gốm Bát tràng (80.000đ).
Workshop sơn mài - Hạ Thái (250.000đ).
Tour Đêm nhà tù Hỏa lò (399.000đ).
Workshop Tự tay làm quạt giấy - Làng quạt Chàng Sơn (70.000đ).
Trải nghiệm Nhuộm tơ tằm thủ công - Làng lụa Vạn Phúc (150.000đ).
Mỗi thẻ dịch vụ tích hợp nút "Đặt chỗ" kích hoạt hộp thoại xác nhận tổng chi phí và gửi yêu cầu thành công dưới dạng thông báo Toast thời gian thực.
5.5. Chức năng Marketplace Hướng dẫn viên chuẩn hóa
Hiển thị danh sách 9 hướng dẫn viên lõi am hiểu sâu sắc về văn hóa thủ đô (được bổ sung thêm nhân sự chuyên sâu như bác Quốc Bảo về Nhà cổ và bạn Hoài Thanh về Làng nghề). Hệ thống nút bấm bộ lọc được cấu hình viết hoa trang trọng và chuẩn hóa logic lọc chính xác theo ảnh minh họa:
Tất cả: Hiển thị toàn bộ nhân sự.
Đang hoạt động: Chỉ lọc ra các HDV có trạng thái thực tế là Đang rảnh.
HDV chuyên nghiệp: Lọc ra nhân sự thuộc phân khúc Chuyên gia cao cấp.
HDV tại điểm: Thuật toán tự động tìm kiếm các HDV sở hữu từ khóa kỹ năng gắn liền cố định với các di tích lõi như Hoàng thành, Văn Miếu, Bảo tàng, Nhà cổ hoặc Làng nghề.
Giá tốt: Lọc ra phân khúc hướng dẫn viên có biểu giá cạnh tranh, tối ưu chi phí.
5.6. Chức năng Không gian ảo VR 360°
Khung nhìn Live 360°: Nhúng khung iframe Street View toàn cảnh công khai của Google một cách mượt mà. Người dùng có thể kéo chuột xoay lật, thu phóng không gian ảo trực tiếp bên trong bảng tính năng.
Dropdown chuyển đổi: Tích hợp thanh lựa chọn thả xuống cho phép người dùng đổi nhanh góc nhìn sang các địa danh khác mà không cần đóng tab.
Bảng chú thích di sản: Kết xuất khối tiêu đề và đoạn văn bản mô tả ngắn gọn ngay bên dưới khung nhìn để tăng tính giáo dục tư liệu.
5.7. Chức năng Lập lịch trình Heritage Match đa dạng hơn
Mở rộng phạm vi sở thích: Người dùng có thể lựa chọn tổ hợp gồm 10 sở thích khác nhau, bao gồm hai mục sở thích mới được bổ sung là Làng nghề (craft) và Nhà cổ (old-house).
Thuật toán gom cụm địa lý (Geo-clustering): Hệ thống tự động phân loại vùng địa lý cho 21 địa điểm (Trung tâm, Ba Đình, Hồ Tây, Cầu Giấy, Đông Anh, Mê Linh, Gia Lâm, Sóc Sơn, Phú Xuyên, Thanh Oai, Hà Đông, Sơn Tây). Khi người dùng bấm tạo lịch trình, thuật toán sẽ lấy điểm có điểm sở thích cao nhất làm gốc, sau đó tính toán khoảng cách vector tọa độ (lat/lng) và cộng điểm thưởng hành trình (distanceBonus, areaBonus) cho các di tích tiếp theo nằm trong cùng khu vực hoặc có khoảng cách địa lý cực gần.
Ma trận điểm phạt trùng lặp: Áp dụng điểm phạt penalty lũy tiến đối với các địa điểm có cùng loại danh mục di sản di chuyển liên tiếp, đảm bảo lịch trình 5 mốc thời gian gợi ý luôn đan xen phong phú, khoa học và thực tế về mặt giao thông di chuyển.
6. Kết luận và Hướng phát triển tương lai
Hệ thống website HERIGO hiện tại đã hoạt động cực kỳ ổn định, giải quyết triệt để các lỗi cú pháp chuỗi, thiếu dấu ngăn cách mảng, lỗi sai định danh ID hay lỗi trắng màn hình hiển thị. Bộ mã nguồn hiện tại đạt độ tối ưu cao về mặt Front-end, đảm bảo tính liên kết chặt chẽ giữa bản đồ và các bảng tương tác dịch vụ.
Hướng phát triển trong tương lai: Tích hợp cơ sở dữ liệu Backend (Node.js & MongoDB) để lưu trữ tài khoản du khách, lưu lịch sử vé tham quan, kết nối các mô hình ngôn ngữ lớn (LLM OpenAI/Gemini API) để làm sống động tính năng hỏi đáp của AI Guide, và tích hợp cổng thanh toán trực tuyến thực tế (MoMo/ZaloPay) để hoàn thiện luồng trải nghiệm người dùng.



