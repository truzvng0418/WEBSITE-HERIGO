BÁO CÁO WEBSITE HERIGO
Chủ đề: Bản đồ di sản tương tác Hà Nội
Tên website: HERIGO
Khẩu hiệu: Khám phá di sản
1. Giới thiệu chung
HERIGO là một website bản đồ di sản tương tác được xây dựng nhằm số hóa, giới thiệu và quảng bá các giá trị văn hóa, lịch sử, bảo tàng, làng nghề truyền thống và nhà cổ tại khu vực Hà Nội. Website hướng tới trải nghiệm giống các nền tảng bản đồ hiện đại: người dùng có thể tìm kiếm địa điểm, xem thông tin chi tiết, định vị trên bản đồ, mở không gian VR 360°, đặt vé, đặt trải nghiệm và tạo lịch trình tham quan theo sở thích. 
Điểm nổi bật của HERIGO là kết hợp giữa bản đồ số và nội dung du lịch văn hóa. Thay vì chỉ hiển thị vị trí địa lý, website còn cung cấp mô tả di sản, giờ mở cửa, giá vé, thời lượng tham quan gợi ý, ảnh tư liệu và các dịch vụ đi kèm. Giao diện sử dụng phong cách Warm Cream Theme với tông màu kem, nâu đất, vàng di sản và xanh nhạt, tạo cảm giác hoài cổ nhưng vẫn hiện đại, phù hợp với chủ đề du lịch văn hóa. 
2. Mục tiêu của website
Mục tiêu chính của HERIGO là tạo ra một nền tảng trực quan để người dùng khám phá hệ thống di sản Hà Nội. Website phục vụ bốn nhóm mục tiêu lớn: số hóa dữ liệu di sản, cung cấp thông tin tham quan, hỗ trợ trải nghiệm du lịch mở rộng và tối ưu hóa hành trình cá nhân hóa. Theo mô tả dự án, hệ thống hướng tới việc xây dựng cơ sở dữ liệu bản đồ cho các địa danh văn hóa tiêu biểu, cung cấp tên địa điểm, giá vé, giờ hoạt động, thời lượng tham quan và mô tả văn hóa. 
Website cũng tích hợp nhiều tiện ích bổ trợ như AI Guide, đặt vé, workshop trải nghiệm, đặt hướng dẫn viên và khám phá VR 360°. Những tính năng này giúp HERIGO không chỉ là bản đồ tra cứu, mà còn là một nền tảng hỗ trợ lập kế hoạch tham quan hoàn chỉnh. 
3. Đối tượng người dùng
Website phù hợp với nhiều nhóm người dùng khác nhau. Khách du lịch có thể dùng HERIGO để tìm điểm tham quan, xem giá vé, giờ mở cửa và chỉ đường. Học sinh, sinh viên có thể sử dụng website để tìm hiểu các di tích lịch sử, bảo tàng và làng nghề truyền thống. Gia đình có thể lọc các điểm đến phù hợp, dễ đi, có hoạt động trải nghiệm. Ngoài ra, hướng dẫn viên, đơn vị du lịch và nhà quản lý văn hóa cũng có thể dùng nền tảng này như một bản mẫu để phát triển sản phẩm du lịch số.
4. Công nghệ sử dụng
HERIGO được xây dựng bằng nền tảng web cơ bản gồm HTML5, CSS3 và JavaScript ES6+, không cần backend phức tạp. Điều này giúp website dễ chạy trên localhost hoặc triển khai lên GitHub Pages. Về bản đồ, website sử dụng Leaflet.js kết hợp bản đồ nền mở, cho phép hiển thị marker, phóng to, thu nhỏ và điều hướng bản đồ mà không phụ thuộc vào Google Maps API trả phí. 
Hệ thống còn sử dụng Wikipedia REST API để lấy ảnh tư liệu thực tế từ Wikimedia và có cơ chế nhúng Street View thông qua Google Maps Gateway để hiển thị không gian ảo VR 360°. Đây là lựa chọn phù hợp cho một dự án demo hoặc sản phẩm học thuật vì giảm chi phí vận hành nhưng vẫn tạo được trải nghiệm tương tác phong phú. 
5. Cấu trúc giao diện
Giao diện website được chia thành hai khu vực chính. Bên trái là Sidebar Controller, gồm logo HERIGO, tên thương hiệu, ô tìm kiếm, bộ lọc danh mục và danh sách kết quả địa điểm. Trong mã HTML, phần sidebar có ô tìm kiếm với placeholder “Tìm địa điểm, di sản, bảo tàng...” và vùng placesList để hiển thị danh sách địa điểm. 
Bên phải là Main Map Area, nơi hiển thị bản đồ chính, thanh điều hướng tính năng và các bảng thông tin nổi. Thanh tính năng gồm 7 tab: Bản đồ, AI Guide, Trải nghiệm, Vé, Hướng dẫn viên, VR 360 và Match.  Khi người dùng chọn một địa điểm, website mở bảng thông tin chi tiết với ảnh, tên địa điểm, mô tả, giờ mở cửa, giá vé, gợi ý thời lượng tham quan và các nút thao tác như “Chỉ đường”, “Xem 360°”, “Đặt vé” và “Phóng tới”. 
6. Dữ liệu địa điểm
Dữ liệu chính của website được lưu trong file JavaScript dưới dạng mảng places. Mỗi địa điểm có các trường như id, name, category, address, lat, lng, rating, hours, price, tip, wikiTitle, tags và description. 
Qua kiểm tra mã nguồn hiện tại, hệ thống đang có dữ liệu mở rộng với 42 địa điểm thuộc 6 nhóm chính: Lịch sử, Biểu tượng, Đền/Chùa, Bảo tàng, Làng nghề và Nhà cổ. Các địa điểm tiêu biểu gồm Hoàng thành Thăng Long, Văn Miếu - Quốc Tử Giám, Hồ Hoàn Kiếm, Đền Ngọc Sơn, Chùa Một Cột, Nhà tù Hỏa Lò, Bảo tàng Dân tộc học, Cầu Long Biên, Làng gốm Bát Tràng, Làng lụa Vạn Phúc, Nhà cổ Mã Mây và Làng cổ Đường Lâm. 
7. Các chức năng chính
7.1. Bản đồ tương tác
Chức năng bản đồ là trung tâm của HERIGO. Người dùng có thể xem các marker di sản, chọn địa điểm trên bản đồ hoặc trong danh sách, sau đó website tự động đưa bản đồ đến vị trí tương ứng. Các nút “Định vị” và “Vừa khung” giúp người dùng nhanh chóng xác định vị trí hiện tại hoặc đưa bản đồ về vùng hiển thị phù hợp. 
7.2. Tìm kiếm và lọc danh mục
Website hỗ trợ tìm kiếm theo thời gian thực. Khi người dùng nhập từ khóa vào ô tìm kiếm, hệ thống cập nhật lại danh sách địa điểm và marker trên bản đồ. Ngoài ra, các chip danh mục giúp lọc địa điểm theo nhóm như UNESCO, Lịch sử, Biểu tượng, Đền/Chùa, Bảo tàng, Làng nghề, Nhà cổ, Miễn phí, Có vé, Gần Hồ Gươm, Check-in và Gia đình. 
7.3. Bảng thông tin địa điểm
Khi chọn một địa điểm, bảng thông tin chi tiết hiển thị hình ảnh, danh mục, tên địa điểm, địa chỉ, mô tả, giờ mở cửa, giá vé và thời lượng tham quan gợi ý. Người dùng có thể bấm “Chỉ đường” để mở hướng dẫn di chuyển, bấm “Xem 360°” để mở không gian Street View, bấm “Đặt vé” để mở form đặt vé và bấm “Phóng tới” để zoom bản đồ tới địa điểm. 
7.4. AI Guide
AI Guide là trợ lý hỏi đáp di sản. Tính năng này có các câu hỏi gợi ý theo ngữ cảnh, đặc biệt khi người dùng đã chọn một địa điểm. Người dùng có thể hỏi về giờ mở cửa, địa điểm miễn phí, làng nghề, nhà cổ, lịch trình một ngày hoặc hướng dẫn viên phù hợp. Trong mã nguồn, AI Guide hoạt động theo cơ chế phản hồi rule-based, tức là dựa trên từ khóa trong câu hỏi để sinh câu trả lời phù hợp. 
7.5. Trải nghiệm tại điểm
HERIGO có phân hệ đặt trải nghiệm văn hóa với 7 dịch vụ demo: tour đêm Văn Miếu, tour đêm Hoàng thành Thăng Long, tự làm gốm Bát Tràng, workshop sơn mài Hạ Thái, tour đêm Nhà tù Hỏa Lò, workshop làm quạt giấy Chàng Sơn và trải nghiệm nhuộm tơ tằm Vạn Phúc. Mỗi dịch vụ có tên, mô tả, giá và nút “Đặt chỗ”. 
7.6. Đặt vé tham quan
Website có modal đặt vé với các trường chọn ngày tham quan, họ tên, số điện thoại, số lượng vé và tổng tiền. Đây là luồng đặt vé demo, giúp mô phỏng trải nghiệm thương mại điện tử trong ngành du lịch văn hóa. 
7.7. Marketplace hướng dẫn viên
HERIGO có danh sách 9 hướng dẫn viên demo, mỗi người có tên, cấp độ, trạng thái, giá tour, điểm đánh giá, kỹ năng và mô tả. Người dùng có thể lọc hướng dẫn viên theo trạng thái hoặc phân khúc, sau đó bấm “Đặt hướng dẫn viên” để gửi yêu cầu. 
7.8. VR 360°
Tính năng VR 360° sử dụng iframe nhúng Google Maps preview, cho phép người dùng xem không gian toàn cảnh của địa điểm. Giao diện VR có dropdown để chuyển địa điểm, khung xem trực tiếp, phần chú thích và nút mở Street View toàn màn hình. 
7.9. Heritage Match
Heritage Match là chức năng tạo lịch trình theo sở thích. Thuật toán chọn các địa điểm phù hợp dựa trên điểm sở thích, khu vực địa lý và mức độ đa dạng danh mục. Trong mã nguồn, hệ thống chọn 5 mốc thời gian trong ngày và áp dụng điểm thưởng cho địa điểm gần nhau, cùng khu vực, đồng thời trừ điểm nếu các địa điểm liên tiếp bị trùng loại danh mục. 
8. Thiết kế giao diện và trải nghiệm người dùng
HERIGO có phong cách thiết kế nhất quán với chủ đề di sản. CSS sử dụng các biến màu như --bg, --surface, --brand, --brand-2, --heritage, --sage để tạo hệ màu kem, nâu đất, vàng di sản và xanh nhạt. 
Giao diện cũng có tính responsive. Ở màn hình nhỏ hơn 920px, sidebar chuyển thành bảng trượt, topbar di động xuất hiện và drawer thông tin địa điểm chuyển sang bố cục một cột để dễ đọc trên điện thoại.  Logo HERIGO được tích hợp bằng ảnh herigo-logo.jpg, có fallback sang SVG nếu ảnh chính không tải được; CSS cũng tối ưu kích thước logo để hiển thị rõ trong sidebar. 
9. Ưu điểm của website
HERIGO có nhiều ưu điểm nổi bật. Thứ nhất, ý tưởng rõ ràng và có tính ứng dụng cao, tập trung vào số hóa di sản Hà Nội. Thứ hai, giao diện thân thiện, dễ sử dụng, mô phỏng thói quen dùng bản đồ của người dùng phổ thông. Thứ ba, dữ liệu địa điểm phong phú, có đầy đủ vị trí, giờ mở cửa, giá vé, mô tả và gợi ý thời lượng tham quan. Thứ tư, website tích hợp nhiều tính năng mở rộng như AI Guide, đặt vé, đặt trải nghiệm, hướng dẫn viên và VR 360°, giúp sản phẩm có chiều sâu hơn một bản đồ thông thường.
Về kỹ thuật, dự án sử dụng Vanilla Web Stack nên nhẹ, dễ triển khai, không yêu cầu backend và phù hợp với GitHub Pages. Việc dùng Leaflet thay cho bản đồ trả phí cũng giúp giảm chi phí và tăng tính độc lập của dự án. 
10. Hạn chế hiện tại
Website hiện vẫn mang tính demo nên còn một số hạn chế. Chức năng đặt vé, đặt trải nghiệm và đặt hướng dẫn viên mới dừng ở mô phỏng, chưa có cơ sở dữ liệu, tài khoản người dùng, hệ thống quản trị, thanh toán thực tế hay xác nhận đơn hàng qua email/SMS. AI Guide hiện là dạng phản hồi theo luật và từ khóa, chưa phải AI sử dụng mô hình ngôn ngữ lớn. Dữ liệu giá vé và giờ mở cửa cần được kiểm chứng, cập nhật thường xuyên từ nguồn chính thức nếu triển khai thực tế.
Ngoài ra, website phụ thuộc vào các nguồn bên ngoài như Wikipedia/Wikimedia và Google Street View nên hình ảnh hoặc khung VR có thể thay đổi tùy khả năng tải dữ liệu. Một điểm cần lưu ý là tài liệu README mô tả mục tiêu ban đầu là 21 địa danh, trong khi mã nguồn hiện tại đã mở rộng dữ liệu lên 42 địa điểm; vì vậy báo cáo kỹ thuật và tài liệu mô tả nên được đồng bộ lại.  
11. Định hướng phát triển
Trong tương lai, HERIGO có thể phát triển thành một nền tảng du lịch di sản hoàn chỉnh bằng cách bổ sung backend như Node.js và MongoDB để lưu tài khoản, lịch sử đặt vé, dữ liệu người dùng và nội dung địa điểm. Dự án cũng có thể tích hợp LLM như OpenAI hoặc Gemini để nâng cấp AI Guide thành trợ lý hỏi đáp thông minh hơn, có khả năng trả lời tự nhiên, đề xuất lịch trình cá nhân hóa và hỗ trợ đa ngôn ngữ. 
Ngoài ra, website có thể tích hợp thanh toán trực tuyến như MoMo hoặc ZaloPay, thêm hệ thống đánh giá địa điểm, bản đồ tuyến đường thực tế, chế độ PWA để dùng như ứng dụng di động, trang quản trị CMS để cập nhật địa điểm, và phiên bản tiếng Anh để phục vụ khách du lịch quốc tế. 
12. Kết luận
HERIGO là một website có ý tưởng tốt, giao diện đẹp và chức năng phong phú, phù hợp với định hướng chuyển đổi số trong lĩnh vực du lịch văn hóa. Dự án đã kết hợp hiệu quả bản đồ tương tác, dữ liệu di sản, ảnh tư liệu, VR 360°, đặt vé, đặt trải nghiệm, hướng dẫn viên và gợi ý lịch trình. Với nền tảng kỹ thuật gọn nhẹ, dễ triển khai và có khả năng mở rộng, HERIGO có tiềm năng phát triển thành một sản phẩm hỗ trợ du khách khám phá di sản Hà Nội một cách trực quan, hiện đại và giàu giá trị giáo dục.
