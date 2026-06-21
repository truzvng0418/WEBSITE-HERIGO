const places = [
  // --- DI SẢN LÕI / CŨ ---
  {
    id: "hoang-thanh",
    name: "Hoàng thành Thăng Long",
    category: "Lịch sử",
    address: "19C Hoàng Diệu, Ba Đình, Hà Nội",
    lat: 21.035781,
    lng: 105.840052,
    rating: 4.6,
    hours: "08:00 - 17:00",
    price: 30000,
    tip: "90 phút",
    wikiTitle: "Hoàng_thành_Thăng_Long",
    tags: ["Di sản nổi bật", "UNESCO", "Lịch sử", "Kiến trúc", "Có vé", "Di tích quốc gia đặc biệt"],
    description: "Quần thể di tích gắn với lịch sử kinh thành Thăng Long, phù hợp để khám phá chiều sâu văn hóa và kiến trúc cổ."
  },
  {
    id: "van-mieu",
    name: "Văn Miếu - Quốc Tử Giám",
    category: "Lịch sử",
    address: "58 Quốc Tử Giám, Đống Đa, Hà Nội",
    lat: 21.028672,
    lng: 105.835585,
    rating: 4.5,
    hours: "08:00 - 17:00",
    price: 30000,
    tip: "60 phút",
    wikiTitle: "Văn_Miếu_–_Quốc_Tử_Giám",
    tags: ["Di sản nổi bật", "Giáo dục", "Nho học", "Check-in", "Có vé", "Di tích quốc gia đặc biệt"],
    description: "Biểu tượng truyền thống hiếu học của Việt Nam, nổi bật với bia tiến sĩ, hồ Văn và không gian kiến trúc cổ."
  },
  {
    id: "hoan-kiem",
    name: "Hồ Hoàn Kiếm & Phố cổ",
    category: "Biểu tượng",
    address: "Quận Hoàn Kiếm, Hà Nội",
    lat: 21.028779,
    lng: 105.852572,
    rating: 4.7,
    hours: "Cả ngày",
    price: 0,
    tip: "45 phút",
    wikiTitle: "Hồ_Hoàn_Kiếm",
    tags: ["Di sản nổi bật", "Biểu tượng", "Đi bộ", "Ảnh đẹp", "Check-in", "Miễn phí", "Gần Hồ Gươm", "Phố cổ Hà Nội"],
    description: "Không gian trung tâm văn hóa lịch sử của Hà Nội, gắn liền with nhịp sống 36 phố phường cổ kính."
  },
  {
    id: "den-ngoc-son",
    name: "Đền Ngọc Sơn và cầu Thê Húc",
    category: "Đền/ Chùa",
    address: "Đảo Ngọc, Hồ Hoàn Kiếm, Hà Nội",
    lat: 21.030724,
    lng: 105.852328,
    rating: 4.4,
    hours: "08:00 - 18:00",
    price: 30000,
    tip: "30 phút",
    wikiTitle: "Đền_Ngọc_Sơn",
    tags: ["Di sản nổi bật", "Tâm linh", "Hồ Gươm", "Cầu Thê Húc", "Check-in", "Có vé", "Gần Hồ Gươm", "Di tích quốc gia đặc biệt"],
    description: "Ngôi đền nằm trên đảo Ngọc Hồ Gươm, thờ thánh Văn Xương và Đức thánh Trần Hưng Đạo."
  },
  {
    id: "chua-mot-cot",
    name: "Chùa Một Cột",
    category: "Đền/ Chùa",
    address: "Phố Chùa Một Cột, Ba Đình, Hà Nội",
    lat: 21.035861,
    lng: 105.833642,
    rating: 4.3,
    hours: "07:00 - 18:00",
    price: 0,
    tip: "25 phút",
    wikiTitle: "Chùa_Một_Cột",
    tags: ["Di sản nổi bật", "Phật giáo", "Kiến trúc", "Biểu tượng", "Miễn phí", "Lịch sử"],
    description: "Liên Hoa Đài với kiến trúc độc bản mô phỏng đóa sen nở trên cột đá giữa hồ linh thiêng."
  },
  {
    id: "bao-tang-dan-toc",
    name: "Bảo tàng Dân tộc học Việt Nam",
    category: "Bảo tàng",
    address: "Nguyễn Văn Huyên, Cầu Giấy, Hà Nội",
    lat: 21.040491,
    lng: 105.798192,
    rating: 4.5,
    hours: "08:30 - 17:30",
    price: 40000,
    tip: "120 phút",
    wikiTitle: "Bảo_tàng_Dân_tộc_học_Việt_Nam",
    tags: ["Bảo tàng", "Văn hóa", "Gia đình", "Có vé"],
    description: "Bảo tàng trưng bày văn hóa, đời sống sinh hoạt của 54 dân tộc anh em trên khắp mọi miền đất nước."
  },
  {
    id: "nha-tu-hoa-lo",
    name: "Di tích Nhà tù Hỏa Lò",
    category: "Lịch sử",
    address: "1 Hỏa Lò, Hoàn Kiếm, Hà Nội",
    lat: 21.025282,
    lng: 105.846422,
    rating: 4.5,
    hours: "08:00 - 17:00",
    price: 30000,
    tip: "75 phút",
    wikiTitle: "Nhà_tù_Hỏa_Lò",
    tags: ["Di sản nổi bật", "Lịch sử", "Trưng bày", "Audio guide", "Có vé"],
    description: "Di tích minh chứng lịch sử cách mạng, nơi giam cầm các chiến sĩ yêu nước thời kỳ kháng chiến chống Pháp."
  },
  {
    id: "lang-bac",
    name: "Lăng Chủ tịch Hồ Chí Minh",
    category: "Lịch sử",
    address: "2 Hùng Vương, Ba Đình, Hà Nội",
    lat: 21.036902,
    lng: 105.834667,
    rating: 4.5,
    hours: "Theo lịch mở cửa",
    price: 0,
    tip: "60 phút",
    wikiTitle: "Lăng_Chủ_tịch_Hồ_Chí_Minh",
    tags: ["Di sản nổi bật", "Ba Đình", "Lịch sử", "Trang nghiêm", "Miễn phí"],
    description: "Nơi an nghỉ vĩnh hằng của vị lãnh tụ kính yêu của dân tộc tại trung tâm Quảng trường Ba Đình."
  },
  {
    id: "phu-chu-tich",
    name: "Khu lưu niệm Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch",
    category: "Lịch sử",
    address: "Số 1 Bách Thảo, Ba Đình, Hà Nội",
    lat: 21.038561,
    lng: 105.835439,
    rating: 4.6,
    hours: "07:30 - 16:00",
    price: 40000,
    tip: "60 phút",
    wikiTitle: "Khu_di_tích_Phủ_Chủ_tịch",
    tags: ["Lịch sử", "Ba Đình", "Di tích quốc gia đặc biệt", "Có vé"],
    description: "Nơi Bác Hồ từng sống và làm việc, bao gồm nhà sàn, ao cá, vườn cây và cung điện Phủ Chủ tịch kiến trúc Pháp."
  },
  {
    id: "chua-tran-quoc",
    name: "Chùa Trấn Quốc",
    category: "Đền/ Chùa",
    address: "Đường Thanh Niên, Tây Hồ, Hà Nội",
    lat: 21.047933,
    lng: 105.836676,
    rating: 4.5,
    hours: "07:30 - 18:00",
    price: 0,
    tip: "45 phút",
    wikiTitle: "Chùa_Trấn_Quốc",
    tags: ["Di sản nổi bật", "Chùa", "Phật giáo", "Tâm linh", "Check-in", "Miễn phí", "Gần Hồ Tây", "Thăng Long Tứ Trấn"],
    description: "Ngôi cổ tự lâu đời nhất Thăng Long với bảo tháp lục độ lục giác đỏ rực rỡ bên bờ Hồ Tây thanh tịnh."
  },
  {
    id: "phu-tay-ho",
    name: "Phủ Tây Hồ",
    category: "Đền/ Chùa",
    address: "52 Đặng Thai Mai, Tây Hồ, Hà Nội",
    lat: 21.058902,
    lng: 105.826665,
    rating: 4.5,
    hours: "06:00 - 20:00",
    price: 0,
    tip: "45 phút",
    wikiTitle: "Phủ_Tây_Hồ",
    tags: ["Di sản nổi bật", "Tâm linh", "Miễn phí", "Gần Hồ Tây"],
    description: "Nơi thờ tín ngưỡng thờ Mẫu Liễu Hạnh nằm trên bán đảo nghiêng mình ra lòng Hồ Tây lộng gió."
  },
  {
    id: "den-quan-thanh",
    name: "Đền Quán Thánh",
    category: "Đền/ Chùa",
    address: "Đường Thanh Niên, Ba Đình, Hà Nội",
    lat: 21.043083,
    lng: 105.838094,
    rating: 4.4,
    hours: "08:00 - 17:00",
    price: 10000,
    tip: "35 phút",
    wikiTitle: "Đền_Quán_Thánh",
    tags: ["Di sản nổi bật", "Tâm linh", "Lịch sử", "Có vé", "Gần Hồ Tây", "Thăng Long Tứ Trấn"],
    description: "Ngôi đền trấn phương Bắc của kinh thành, nổi tiếng với pho tượng đồng đen Huyền Thiên Trấn Vũ khổng lồ."
  },
  {
    id: "cot-co-ha-noi",
    name: "Cột cờ Hà Nội & Cửa Bắc",
    category: "Lịch sử",
    address: "28A Điện Biên Phủ, Ba Đình, Hà Nội",
    lat: 21.031928,
    lng: 105.839754,
    rating: 4.5,
    hours: "08:00 - 17:00",
    price: 20000,
    tip: "30 phút",
    wikiTitle: "Cột_cờ_Hà_Nội",
    tags: ["Di sản nổi bật", "Lịch sử", "Biểu tượng", "Check-in", "Có vé", "Cửa Bắc"],
    description: "Kỳ đài lịch sử kiên cường và di tích Chính Bắc Môn còn in hằn vết đạn pháo của thực dân Pháp."
  },
  {
    id: "bao-tang-my-thuat",
    name: "Bảo tàng Mỹ thuật Việt Nam",
    category: "Bảo tàng",
    address: "66 Nguyễn Thái Học, Ba Đình, Hà Nội",
    lat: 21.030367,
    lng: 105.837204,
    rating: 4.4,
    hours: "08:30 - 17:00",
    price: 40000,
    tip: "90 phút",
    wikiTitle: "Bảo_tàng_Mỹ_thuật_Việt_Nam",
    tags: ["Bảo tàng", "Nghệ thuật", "Văn hóa", "Gia đình", "Có vé"],
    description: "Kho tàng lưu giữ tinh hoa mỹ thuật, hội họa, điêu khắc dân tộc từ thời tiền sử đến đương đại."
  },
  {
    id: "nha-hat-lon",
    name: "Nhà hát Lớn Hà Nội",
    category: "Biểu tượng",
    address: "1 Tràng Tiền, Hoàn Kiếm, Hà Nội",
    lat: 21.024303,
    lng: 105.85708,
    rating: 4.6,
    hours: "Theo lịch sự kiện",
    price: 0,
    tip: "30 phút",
    wikiTitle: "Nhà_hát_Lớn_Hà_Nội",
    tags: ["Di sản nổi bật", "Biểu tượng", "Kiến trúc Pháp", "Check-in", "Miễn phí", "Gần Hồ Gươm"],
    description: "Công trình kiến trúc tân cổ điển mô phỏng nhà hát Opéra Garnier Paris đầy tráng lệ giữa lòng thủ đô."
  },
  {
    id: "nha-tho-lon",
    name: "Nhà thờ Lớn Hà Nội",
    category: "Biểu tượng",
    address: "40 Nhà Chung, Hoàn Kiếm, Hà Nội",
    lat: 21.028748,
    lng: 105.848873,
    rating: 4.5,
    hours: "Theo giờ lễ",
    price: 0,
    tip: "30 phút",
    wikiTitle: "Nhà_thờ_Lớn_Hà_Nội",
    tags: ["Di sản nổi bật", "Biểu tượng", "Kiến trúc Pháp", "Check-in", "Miễn phí", "Gần Hồ Gươm"],
    description: "Nhà thờ lâu đời mang đậm phong cách kiến trúc Gothic phục hưng with những mảng tường rêu phong cổ kính."
  },
  {
    id: "o-quan-chuong",
    name: "Ô Quan Chưởng",
    category: "Lịch sử",
    address: "Phố Ô Quan Chưởng, Hoàn Kiếm, Hà Nội",
    lat: 21.035049,
    lng: 105.850975,
    rating: 4.2,
    hours: "Cả ngày",
    price: 0,
    tip: "20 phút",
    wikiTitle: "Ô_Quan_Chưởng",
    tags: ["Di sản nổi bật", "Lịch sử", "Phố cổ", "Check-in", "Miễn phí", "Gần Hồ Gươm"],
    description: "Cửa ô duy nhất còn sót lại nguyên vẹn của la thành Thăng Long xưa, mang đậm ký ức thời gian."
  },
  {
    id: "cho-dong-xuan",
    name: "Chợ Đồng Xuân",
    category: "Biểu tượng",
    address: "Đồng Xuân, Hoàn Kiếm, Hà Nội",
    lat: 21.038118,
    lng: 105.849785,
    rating: 4.1,
    hours: "06:00 - 18:00",
    price: 0,
    tip: "60 phút",
    wikiTitle: "Chợ_Đồng_Xuân",
    tags: ["Biểu tượng", "Phố cổ", "Ẩm thực", "Mua sắm", "Miễn phí", "Gần Hồ Gươm"],
    description: "Trung tâm giao thương sầm uất lâu đời nhất khu băm sáu phố phường, nổi tiếng với ngõ ẩm thực đa dạng."
  },
  {
    id: "cau-long-bien",
    name: "Cầu Long Biên",
    category: "Biểu tượng",
    address: "Cầu Long Biên, Hoàn Kiếm/Long Biên, Hà Nội",
    lat: 21.040001,
    lng: 105.856069,
    rating: 4.5,
    hours: "Cả ngày",
    price: 0,
    tip: "45 phút",
    wikiTitle: "Cầu_Long_Biên",
    tags: ["Di sản nổi bật", "Biểu tượng", "Lịch sử", "Check-in", "Miễn phí"],
    description: "Cây cầu thép chứng nhân lịch sử bắc qua sông Hồng, do kiến trúc sư người Pháp thiết kế cuối thế kỷ XIX."
  },
  {
    id: "ho-tay",
    name: "Hồ Tây",
    category: "Biểu tượng",
    address: "Quận Tây Hồ, Hà Nội",
    lat: 21.054286,
    lng: 105.819454,
    rating: 4.6,
    hours: "Cả ngày",
    price: 0,
    tip: "90 phút",
    wikiTitle: "Hồ_Tây",
    tags: ["Di sản nổi bật", "Biểu tượng", "Đi bộ", "Ảnh đẹp", "Miễn phí", "Gần Hồ Tây", "Check-in"],
    description: "Gương hồ nước ngọt lớn nhất thành phố, điểm ngắm hoàng hôn buông xuống lãng mạn bậc nhất thủ đô."
  },
  {
    id: "bao-tang-phu-nu",
    name: "Bảo tàng Phụ nữ Việt Nam",
    category: "Bảo tàng",
    address: "36 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội",
    lat: 21.020803,
    lng: 105.854764,
    rating: 4.6,
    hours: "08:00 - 17:00",
    price: 40000,
    tip: "90 phút",
    wikiTitle: "Bảo_tàng_Phụ_nữ_Việt_Nam",
    tags: ["Di sản nổi bật", "Bảo tàng", "Văn hóa", "Gia đình", "Có vé", "Gần Hồ Gươm"],
    description: "Nơi tôn vinh và lưu giữ những hiện vật, câu chuyện hào hùng về người phụ nữ Việt Nam qua các thời kỳ lịch sử."
  },
  {
    id: "bao-tang-lich-su",
    name: "Bảo tàng Lịch sử Quốc gia",
    category: "Bảo tàng",
    address: "1 Tràng Tiền, Hoàn Kiếm, Hà Nội",
    lat: 21.024177,
    lng: 105.859209,
    rating: 4.4,
    hours: "08:00 - 17:00",
    price: 40000,
    tip: "120 phút",
    wikiTitle: "Bảo_tàng_Lịch_sử_quốc_gia",
    tags: ["Di sản nổi bật", "Bảo tàng", "Lịch sử", "Văn hóa", "Có vé", "Gần Hồ Gươm"],
    description: "Hệ thống trưng bày hiện vật quý hiếm, đồ sộ từ thời tiền sơ sử, dựng nước đến triều đại phong kiến cuối cùng."
  },

  // --- 🆕 ĐỊA DANH MỚI & NGOẠI THÀNH QUAY LẠI ---
  {
    id: "co-loa",
    name: "Thành Cổ Loa",
    category: "Lịch sử",
    address: "Cổ Loa, Đông Anh, Hà Nội",
    lat: 21.115316,
    lng: 105.872523,
    rating: 4.4,
    hours: "08:00 - 17:00",
    price: 10000,
    tip: "120 phút",
    wikiTitle: "Cổ_Loa",
    tags: ["Di sản nổi bật", "Lịch sử", "Khảo cổ", "Có vé", "Gia đình", "Di tích quốc gia đặc biệt"],
    description: "Tòa thành ốc cổ đại gắn liền với truyền thuyết nỏ thần An Dương Vương, Mị Châu - Trọng Thủy."
  },
  {
    id: "den-hai-ba-trung",
    name: "Đền Hai Bà Trưng Mê Linh",
    category: "Đền/ Chùa",
    address: "Hạ Lôi, Mê Linh, Hà Nội",
    lat: 21.164947,
    lng: 105.737954,
    rating: 4.5,
    hours: "07:00 - 18:00",
    price: 0,
    tip: "60 phút",
    wikiTitle: "Đền_Hai_Bà_Trưng_(Mê_Linh)",
    tags: ["Tâm linh", "Lịch sử", "Miễn phí", "Gia đình", "Di tích quốc gia đặc biệt"],
    description: "Quần thể đền thờ uy nghiêm tưởng niệm hai vị nữ anh hùng vĩ đại đầu tiên của dân tộc."
  },
  {
    id: "den-phu-dong",
    name: "Đền Phù Đổng (Đền Gióng Gia Lâm)",
    category: "Đền/ Chùa",
    address: "Phù Đổng, Gia Lâm, Hà Nội",
    lat: 21.054321,
    lng: 105.954711,
    rating: 4.5,
    hours: "07:30 - 17:30",
    price: 0,
    tip: "50 phút",
    wikiTitle: "Đền_Phù_Đổng",
    tags: ["Tâm linh", "Lịch sử", "Miễn phí", "Di tích quốc gia đặc biệt"],
    description: "Nơi khai sinh và thờ phụng đức Thánh Gióng - Phù Đổng Thiên Vương, biểu tượng bất diệt cho tinh thần chống giặc."
  },
  {
    id: "chua-thay",
    name: "Chùa Thầy Sài Sơn",
    category: "Đền/ Chùa",
    address: "Sài Sơn, Quốc Oai, Hà Nội",
    lat: 20.970902,
    lng: 105.640344,
    rating: 4.5,
    hours: "07:00 - 18:00",
    price: 10000,
    tip: "90 phút",
    wikiTitle: "Chùa_Thầy",
    tags: ["Di sản nổi bật", "Chùa", "Phật giáo", "Tâm linh", "Có vé", "Gia đình", "Di tích quốc gia đặc biệt"],
    description: "Ngôi cổ tự tựa lưng vào núi đá, gắn với cuộc đời vị thiền sư Từ Đạo Hạnh và nghệ thuật rối nước."
  },
  {
    id: "den-soc",
    name: "Khu di tích Đền Sóc",
    category: "Đền/ Chùa",
    address: "Vệ Linh, Sóc Sơn, Hà Nội",
    lat: 21.257635,
    lng: 105.849607,
    rating: 4.5,
    hours: "07:00 - 18:00",
    price: 0,
    tip: "120 phút",
    wikiTitle: "Đền_Sóc",
    tags: ["Di sản nổi bật", "Tâm linh", "Lịch sử", "Miễn phí", "Gia đình", "Di tích quốc gia đặc biệt"],
    description: "Quần thể núi rừng đại ngàn, nơi Thánh Gióng cởi giáp sắt bay về trời sau khi phá tan giặc Ân."
  },
  {
    id: "chua-tay-phuong",
    name: "Chùa Tây Phương",
    category: "Đền/ Chùa",
    address: "Thạch Xá, Thạch Thất, Hà Nội",
    lat: 20.994729,
    lng: 105.583458,
    rating: 4.6,
    hours: "07:00 - 18:00",
    price: 10000,
    tip: "75 phút",
    wikiTitle: "Chùa_Tây_Phương",
    tags: ["Chùa", "Phật giáo", "Kiến trúc", "Có vé", "Gia đình"],
    description: "Kiệt tác nghệ thuật điêu khắc gỗ Việt Nam với hệ thống 18 pho tượng vị La Hán sinh động tinh xảo."
  },
  {
    id: "den-voi-phuc",
    name: "Đền Voi Phục",
    category: "Đền/ Chùa",
    address: "Kim Mã, Ba Đình, Hà Nội",
    lat: 21.031521,
    lng: 105.814233,
    rating: 4.4,
    hours: "08:00 - 17:00",
    price: 0,
    tip: "30 phút",
    wikiTitle: "Đền_Voi_Phục",
    tags: ["Tâm linh", "Lịch sử", "Miễn phí", "Thăng Long Tứ Trấn"],
    description: "Ngôi đền trấn phía Tây Thăng Long, thờ hoàng tử Linh Lang Đại Vương với đôi voi đá quỳ trang nghiêm."
  },
  {
    id: "bao-tang-ho-chi-minh",
    name: "Bảo tàng Hồ Chí Minh",
    category: "Bảo tàng",
    address: "19 Ngọc Hà, Ba Đình, Hà Nội",
    lat: 21.035122,
    lng: 105.832791,
    rating: 4.5,
    hours: "08:00 - 16:30",
    price: 40000,
    tip: "90 phút",
    wikiTitle: "Bảo_tàng_Hồ_Chí_Minh",
    tags: ["Bảo tàng", "Lịch sử", "Văn hóa", "Có vé"],
    description: "Khối kiến trúc bông sen trắng nghệ thuật, trưng bày hàng vạn tư liệu lịch sử về cuộc đời vị lãnh tụ vĩ đại."
  },
  {
    id: "bao-tang-ha-noi",
    name: "Bảo tàng Hà Nội",
    category: "Bảo tàng",
    address: "Phạm Hùng, Nam Từ Liêm, Hà Nội",
    lat: 21.011894,
    lng: 105.787611,
    rating: 4.3,
    hours: "08:00 - 17:00",
    price: 0,
    tip: "90 phút",
    wikiTitle: "Bảo_tàng_Hà_Nội",
    tags: ["Bảo tàng", "Kiến trúc", "Miễn phí", "Check-in"],
    description: "Thiết kế kim tự tháp ngược vô cùng ấn tượng, nơi lưu trữ những ký ức, hiện vật ngàn năm văn hiến của thủ đô."
  },
  {
    id: "lang-to-he-xuan-la",
    name: "Làng nặn tò he Xuân La",
    category: "Làng nghề",
    address: "Phượng Dực, Phú Xuyên, Hà Nội",
    lat: 20.735112,
    lng: 105.864719,
    rating: 4.5,
    hours: "Cả ngày",
    price: 0,
    tip: "120 phút",
    wikiTitle: "Tò_he",
    tags: ["Làng nghề", "Văn hóa", "Miễn phí", "Gia đình"],
    description: "Làng nghề nặn tò he duy nhất tại Việt Nam, thổi hồn sắc màu dân gian vào những khối bột gạo mộc mạc."
  },
  {
    id: "lang-giay-do-buoi",
    name: "Làng làm giấy dó Bưởi vùng Kẻ Bưởi",
    category: "Làng nghề",
    address: "Vùng Kẻ Bưởi, Tây Hồ, Hà Nội",
    lat: 21.045621,
    lng: 105.804712,
    rating: 4.2,
    hours: "08:00 - 17:00",
    price: 0,
    tip: "60 phút",
    wikiTitle: "Giấy_dó",
    tags: ["Làng nghề", "Lịch sử", "Miễn phí"],
    description: "Vùng đất danh tiếng xưa chuyên sản xuất loại giấy dó thủ công bền bỉ, phục vụ viết sắc phong và tranh dân gian."
  },
  {
    id: "lang-gom-bat-trang",
    name: "Làng gốm Bát Tràng",
    category: "Làng nghề",
    address: "Bát Tràng, Gia Lâm, Hà Nội",
    lat: 20.973562,
    lng: 105.914781,
    rating: 4.6,
    hours: "Cả ngày",
    price: 0,
    tip: "180 phút",
    wikiTitle: "Bát_Tràng",
    tags: ["Di sản nổi bật", "Làng nghề", "Kiến trúc", "Check-in", "Miễn phí", "Gia đình"],
    description: "Cơ sở sản xuất gốm sứ truyền thống rực rỡ, nổi bật với trung tâm tinh hoa làng nghề kiến trúc xoáy ấn tượng."
  },
  {
    id: "lang-lua-van-phuc",
    name: "Làng lụa Vạn Phúc",
    category: "Làng nghề",
    address: "Vạn Phúc, Hà Đông, Hà Nội",
    lat: 20.978561,
    lng: 105.774211,
    rating: 4.5,
    hours: "Cả ngày",
    price: 0,
    tip: "90 phút",
    wikiTitle: "Làng_lụa_Vạn_Phúc",
    tags: ["Làng nghề", "Mua sắm", "Check-in", "Miễn phí"],
    description: "Cái nôi dệt lụa tơ tằm lừng danh Đông Dương, rực rỡ với con đường ô che nắng sắc màu."
  },
  {
    id: "lang-non-chuong",
    name: "Làng nón Chuông Phương Trung",
    category: "Làng nghề",
    address: "Phương Trung, Thanh Oai, Hà Nội",
    lat: 20.854122,
    lng: 105.724781,
    rating: 4.4,
    hours: "Cả ngày",
    price: 0,
    tip: "120 phút",
    wikiTitle: "Làng_Chuông",
    tags: ["Làng nghề", "Văn hóa", "Miễn phí"],
    description: "Địa danh chuyên làm nón lá truyền thống, nơi gìn giữ nét duyên mộc mạc của tà áo dài Việt Nam."
  },
  {
    id: "nha-co-ma-may",
    name: "Nhà cổ Mã Mây",
    category: "Nhà cổ",
    address: "87 Mã Mây, Hoàn Kiếm, Hà Nội",
    lat: 21.034561,
    lng: 105.852431,
    rating: 4.4,
    hours: "08:00 - 20:00",
    price: 10000,
    tip: "40 phút",
    wikiTitle: "Phố_Mã_Mây",
    tags: ["Nhà cổ", "Phố cổ", "Có vé", "Gần Hồ Gươm"],
    description: "Ngôi nhà truyền thống dạng hình ống đặc trưng thế kỷ XIX, tái hiện trọn vẹn nếp sinh hoạt xưa của thương nhân Hà Thành."
  },
  {
    id: "lang-co-duong-lam",
    name: "Làng cổ Đường Lâm",
    category: "Nhà cổ",
    address: "Sơn Tây, Hà Nội",
    lat: 21.156478,
    lng: 105.474468,
    rating: 4.4,
    hours: "08:00 - 17:00",
    price: 20000,
    tip: "180 phút",
    wikiTitle: "Đường_Lâm",
    tags: ["Di sản nổi bật", "Nhà cổ", "Lịch sử", "Kiến trúc", "Có vé", "Gia đình"],
    description: "Bảo tàng sống về làng quê Bắc Bộ với cổng làng cổ, cây đa, bến nước và hệ thống nhà đá ong hàng trăm năm tuổi."
  },
  {
    id: "lang-cuu",
    name: "Nhà cổ làng Cựu",
    category: "Nhà cổ",
    address: "Làng Cựu, Phú Xuyên, Hà Nội",
    lat: 20.764122,
    lng: 105.884219,
    rating: 4.3,
    hours: "Cả ngày",
    price: 0,
    tip: "90 phút",
    wikiTitle: "Làng_Cựu",
    tags: ["Nhà cổ", "Kiến trúc", "Miễn phí"],
    description: "Ngôi làng cổ kính độc đáo mang phong cách kiến trúc kết hợp nửa Pháp thuộc, nửa Á Đông vô cùng lộng lẫy và hoài cổ."
  },
  {
    id: "nha-co-hang-dao",
    name: "Nhà cổ di tích Hàng Đào",
    category: "Nhà cổ",
    address: "Phố Hàng Đào, Hoàn Kiếm, Hà Nội",
    lat: 21.031981,
    lng: 105.851941,
    rating: 4.2,
    hours: "08:00 - 17:00",
    price: 0,
    tip: "30 phút",
    wikiTitle: "Phố_Hàng_Đào",
    tags: ["Nhà cổ", "Phố cổ", "Miễn phí", "Gần Hồ Gươm"],
    description: "Di tích kiến trúc đô thị cổ cổ kính nấp mình giữa tuyến phố buôn bán sầm uất bậc nhất khu phố cổ."
  },
  {
    id: "nha-co-hang-ngang",
    name: "Nhà cổ 48 Hàng Ngang",
    category: "Nhà cổ",
    address: "48 Hàng Ngang, Hoàn Kiếm, Hà Nội",
    lat: 21.033122,
    lng: 105.851721,
    rating: 4.4,
    hours: "08:00 - 17:00",
    price: 0,
    tip: "45 phút",
    wikiTitle: "Hàng_Ngang",
    tags: ["Nhà cổ", "Lịch sử", "Phố cổ", "Miễn phí", "Gần Hồ Gươm"],
    description: "Nơi Chủ tịch Hồ Chí Minh đã viết nên bản Tuyên ngôn Độc lập khai sinh ra nước Việt Nam Dân chủ Cộng hòa."
  },
  {
    id: "nha-co-hang-bac",
    name: "Nhà cổ di tích Hàng Bạc",
    category: "Nhà cổ",
    address: "Phố Hàng Bạc, Hoàn Kiếm, Hà Nội",
    lat: 21.033671,
    lng: 105.852991,
    rating: 4.3,
    hours: "Cả ngày",
    price: 0,
    tip: "30 phút",
    wikiTitle: "Hàng_Bạc",
    tags: ["Nhà cổ", "Phố cổ", "Miễn phí", "Gần Hồ Gươm"],
    description: "Kiến trúc nhà hộp rêu phong, chứng nhân của phố nghề kim hoàn chế tác bạc Thăng Long sầm uất thuở xưa."
  }
];

const filterDefinitions = [
  { label: "Tất cả", match: () => true },
  { label: "Di sản nổi bật", match: (place) => place.tags.includes("Di sản nổi bật") || place.rating >= 4.6 },
  { label: "UNESCO", match: (place) => place.tags.includes("UNESCO") },
  { label: "Lịch sử", match: (place) => place.category === "Lịch sử" || place.tags.includes("Lịch sử") },
  { label: "Biểu tượng", match: (place) => place.category === "Biểu tượng" || place.tags.includes("Biểu tượng") },
  { label: "Đền/ Chùa", match: (place) => place.category === "Đền/ Chùa" || place.tags.includes("Phật giáo") || place.tags.includes("Tâm linh") },
  { label: "Bảo tàng", match: (place) => place.category === "Bảo tàng" },
  { label: "Làng nghề", match: (place) => place.category === "Làng nghề" },
  { label: "Nhà cổ", match: (place) => place.category === "Nhà cổ" },
  { label: "Miễn phí", match: (place) => place.price === 0 || place.tags.includes("Miễn phí") },
  { label: "Có vé", match: (place) => place.price > 0 || place.tags.includes("Có vé") },
  { label: "Gần Hồ Gươm", match: (place) => place.tags.includes("Gần Hồ Gươm") || place.tags.includes("Hồ Gươm") },
  { label: "Check-in", match: (place) => place.tags.includes("Check-in") },
  { label: "Gia đình", match: (place) => place.tags.includes("Gia đình") }
];

function matchesCurrentFilter(place) {
  const filter = filterDefinitions.find((item) => item.label === state.category);
  return filter ? filter.match(place) : true;
}

const vrViewpoints = {
  "hoang-thanh": { lat: 21.035781, lng: 105.840052, heading: 15, pitch: 0, zoom: 0 },
  "van-mieu": { lat: 21.028672, lng: 105.835585, heading: 40, pitch: 0, zoom: 0 },
  "hoan-kiem": { lat: 21.028779, lng: 105.852572, heading: 120, pitch: 0, zoom: 0 },
  "den-ngoc-son": { lat: 21.030724, lng: 105.852328, heading: 70, pitch: 0, zoom: 0 },
  "chua-mot-cot": { lat: 21.035861, lng: 105.833642, heading: 20, pitch: 0, zoom: 0 },
  "bao-tang-dan-toc": { lat: 21.040491, lng: 105.798192, heading: 90, pitch: 0, zoom: 0 },
  "nha-tu-hoa-lo": { lat: 21.025282, lng: 105.846422, heading: 10, pitch: 0, zoom: 0 },
  "lang-bac": { lat: 21.036902, lng: 105.834667, heading: 180, pitch: 0, zoom: 0 },
  "phu-chu-tich": { lat: 21.038561, lng: 105.835439, heading: 90, pitch: 0, zoom: 0 },
  "chua-tran-quoc": { lat: 21.047933, lng: 105.836676, heading: 220, pitch: 0, zoom: 0 },
  "phu-tay-ho": { lat: 21.058902, lng: 105.826665, heading: 120, pitch: 0, zoom: 0 },
  "den-quan-thanh": { lat: 21.043083, lng: 105.838094, heading: 220, pitch: 0, zoom: 0 },
  "cot-co-ha-noi": { lat: 21.031928, lng: 105.839754, heading: 120, pitch: 0, zoom: 0 },
  "bao-tang-my-thuat": { lat: 21.030367, lng: 105.837204, heading: 80, pitch: 0, zoom: 0 },
  "nha-hat-lon": { lat: 21.024303, lng: 105.857080, heading: 300, pitch: 0, zoom: 0 },
  "nha-tho-lon": { lat: 21.028748, lng: 105.848873, heading: 260, pitch: 0, zoom: 0 },
  "o-quan-chuong": { lat: 21.035049, lng: 105.850975, heading: 100, pitch: 0, zoom: 0 },
  "cho-dong-xuan": { lat: 21.038118, lng: 105.849785, heading: 210, pitch: 0, zoom: 0 },
  "cau-long-bien": { lat: 21.040001, lng: 105.856069, heading: 80, pitch: 0, zoom: 0 },
  "ho-tay": { lat: 21.054286, lng: 105.819454, heading: 160, pitch: 0, zoom: 0 },
  "bao-tang-phu-nu": { lat: 21.020803, lng: 105.854764, heading: 260, pitch: 0, zoom: 0 },
  "bao-tang-lich-su": { lat: 21.024177, lng: 105.859209, heading: 230, pitch: 0, zoom: 0 },
  
  // VR Ngoại thành & Điểm mới
  "co-loa": { lat: 21.115316, lng: 105.872523, heading: 180, pitch: 0, zoom: 0 },
  "den-hai-ba-trung": { lat: 21.164947, lng: 105.737954, heading: 140, pitch: 0, zoom: 0 },
  "den-phu-dong": { lat: 21.054321, lng: 105.954711, heading: 120, pitch: 0, zoom: 0 },
  "chua-thay": { lat: 20.970902, lng: 105.640344, heading: 240, pitch: 0, zoom: 0 },
  "den-soc": { lat: 21.257635, lng: 105.849607, heading: 210, pitch: 0, zoom: 0 },
  "chua-tay-phuong": { lat: 20.994729, lng: 105.583458, heading: 160, pitch: 0, zoom: 0 },
  "den-voi-phuc": { lat: 21.031521, lng: 105.814233, heading: 90, pitch: 0, zoom: 0 },
  "bao-tang-ho-chi-minh": { lat: 21.035122, lng: 105.832791, heading: 180, pitch: 0, zoom: 0 },
  "bao-tang-ha-noi": { lat: 21.011894, lng: 105.787611, heading: 45, pitch: 0, zoom: 0 },
  "lang-to-he-xuan-la": { lat: 20.735112, lng: 105.864719, heading: 0, pitch: 0, zoom: 0 },
  "lang-giay-do-buoi": { lat: 21.045621, lng: 105.804712, heading: 180, pitch: 0, zoom: 0 },
  "lang-gom-bat-trang": { lat: 20.973562, lng: 105.914781, heading: 135, pitch: 0, zoom: 0 },
  "lang-lua-van-phuc": { lat: 20.978561, lng: 105.774211, heading: 270, pitch: 0, zoom: 0 },
  "lang-non-chuong": { lat: 20.854122, lng: 105.724781, heading: 90, pitch: 0, zoom: 0 },
  "nha-co-ma-may": { lat: 21.034561, lng: 105.852431, heading: 110, pitch: 0, zoom: 0 },
  "lang-co-duong-lam": { lat: 21.156478, lng: 105.474468, heading: 120, pitch: 0, zoom: 0 },
  "lang-cuu": { lat: 20.764122, lng: 105.884219, heading: 60, pitch: 0, zoom: 0 },
  "nha-co-hang-dao": { lat: 21.031981, lng: 105.851941, heading: 30, pitch: 0, zoom: 0 },
  "nha-co-hang-ngang": { lat: 21.033122, lng: 105.851721, heading: 180, pitch: 0, zoom: 0 },
  "nha-co-hang-bac": { lat: 21.033671, lng: 105.852991, heading: 240, pitch: 0, zoom: 0 }
};

function getVRViewpoint(place) {
  const custom = vrViewpoints[place.id] || {};
  return {
    lat: custom.lat ?? place.lat,
    lng: custom.lng ?? place.lng,
    heading: custom.heading ?? 0,
    pitch: custom.pitch ?? 0,
    zoom: custom.zoom ?? 0
  };
}

const state = {
  selectedPlace: null,
  category: "Tất cả",
  query: "",
  markers: new Map(),
  userMarker: null,
  imageCache: new Map()
};

const $ = (selector) => document.querySelector(selector);

const map = L.map("map", {
  zoomControl: false,
  minZoom: 9
}).setView([21.0307, 105.84], 11);

L.control.zoom({ position: "bottomright" }).addTo(map);

L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors © CARTO"
}).addTo(map);

const defaultIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="width:34px;height:34px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#a86318;border:3px solid white;box-shadow:0 8px 18px rgba(15,23,42,.25);display:grid;place-items:center;"><span style="transform:rotate(45deg);color:white;font-weight:900;font-size:12px;">H</span></div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 34],
  popupAnchor: [0, -30]
});

const activeIcon = L.divIcon({
  className: "custom-marker active",
  html: `<div style="width:42px;height:42px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#f59e0b;border:3px solid white;box-shadow:0 12px 24px rgba(15,23,42,.3);display:grid;place-items:center;"><span style="transform:rotate(45deg);color:white;font-weight:900;font-size:13px;">★</span></div>`,
  iconSize: [42, 42],
  iconAnchor: [21, 42],
  popupAnchor: [0, -36]
});

function currency(value) {
  if (!value) return "Miễn phí";
  return value.toLocaleString("vi-VN") + "đ";
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filteredPlaces() {
  const q = normalize(state.query.trim());
  return places.filter((place) => {
    const matchCategory = matchesCurrentFilter(place);
    const haystack = normalize([place.name, place.category, place.address, place.tags.join(" "), place.description].join(" "));
    return matchCategory && (!q || haystack.includes(q));
  });
}

function initCategories() {
  const categories = filterDefinitions.map((item) => item.label);
  const container = $("#categoryChips");
  container.innerHTML = categories.map((cat) => `<button class="chip ${cat === state.category ? "active" : ""}" data-category="${cat}">${cat}</button>`).join("");
  container.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    state.category = chip.dataset.category;
    initCategories();
    renderPlaces();
    renderMarkers();
    fitVisiblePlaces();
  });
}

function renderMarkerPopupContent(place, imageUrl = "") {
  const imageBlock = imageUrl
    ? `<div class="popup-card-image" style="background-image:url('${imageUrl.replace(/'/g, "%27")}')"></div>`
    : `<div class="popup-card-image popup-card-image--placeholder"><span>Đang tải ảnh...</span></div>`;

  return `
    <div class="popup-card popup-card-rich">
      ${imageBlock}
      <strong>${place.name}</strong>
      <div class="popup-card-meta">
        <span class="popup-chip">★ ${place.rating}</span>
        <span class="popup-chip">🕘 ${place.hours}</span>
      </div>
    </div>
  `;
}

function renderMarkers() {
  state.markers.forEach((marker) => marker.remove());
  state.markers.clear();

  filteredPlaces().forEach((place) => {
    const marker = L.marker([place.lat, place.lng], {
      icon: state.selectedPlace?.id === place.id ? activeIcon : defaultIcon
    }).addTo(map);

    marker.bindPopup(
      renderMarkerPopupContent(place, state.imageCache.get(place.id) || ""),
      { closeButton: true, offset: [0, -8], className: "heritage-map-popup" }
    );

    marker.on("click", () => selectPlace(place, false, true));

    loadWikiImage(place).then((imageUrl) => {
      if (!imageUrl) return;
      if (state.markers.get(place.id) === marker) {
        marker.setPopupContent(renderMarkerPopupContent(place, imageUrl));
      }
    });

    state.markers.set(place.id, marker);
  });
}

async function loadWikiImage(place) {
  if (state.imageCache.has(place.id)) return state.imageCache.get(place.id);
  const fallback = "";
  try {
    const url = `https://vi.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(place.wikiTitle)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Không tải được ảnh Wikipedia");
    const data = await response.json();
    const image = data?.thumbnail?.source || data?.originalimage?.source || fallback;
    state.imageCache.set(place.id, image);
    return image;
  } catch (error) {
    console.warn(error);
    state.imageCache.set(place.id, fallback);
    return fallback;
  }
}

async function loadWikiImages(place, limit = 4) {
  const cacheKey = `${place.id}:gallery`;
  if (state.imageCache.has(cacheKey)) return state.imageCache.get(cacheKey);

  const unique = [];
  const addImage = (url) => {
    if (!url || url.includes(".svg") || unique.includes(url)) return;
    unique.push(url);
  };

  try {
    const mediaUrl = `https://vi.wikipedia.org/api/rest_v1/page/media-list/${encodeURIComponent(place.wikiTitle)}`;
    const response = await fetch(mediaUrl);
    if (response.ok) {
      const data = await response.json();
      const items = Array.isArray(data.items) ? data.items : [];
      items.forEach((item) => {
        const original = item?.original?.source;
        const thumb = item?.thumbnail?.source;
        const srcset = Array.isArray(item?.srcset) ? item.srcset[item.srcset.length - 1]?.src : "";
        addImage(original || srcset || thumb);
      });
    }
  } catch (error) {
    console.warn("Không tải được danh sách ảnh Wikipedia", error);
  }

  const summaryImage = await loadWikiImage(place);
  addImage(summaryImage);

  const finalImages = unique.slice(0, limit);
  state.imageCache.set(cacheKey, finalImages);
  return finalImages;
}

function renderGalleryLoading() {
  return `
    <div class="place-hero-gallery">
      <div class="place-main-photo">
        <div class="image-loading">Đang tải 3-4 ảnh thật từ Wikipedia/Wikimedia...</div>
      </div>
      <div class="place-thumbs">
        <div class="place-thumb-btn"></div>
        <div class="place-thumb-btn"></div>
        <div class="place-thumb-btn"></div>
        <div class="place-thumb-btn"></div>
      </div>
    </div>
  `;
}

function bindPlaceGallery(images) {
  const main = $("#placeMainPhoto");
  const buttons = document.querySelectorAll("[data-gallery-img]");
  if (!main || !buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.dataset.galleryImg;
      main.style.backgroundImage = `url("${url}")`;
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });
}

function renderGalleryImages(images) {
  if (!images.length) {
    return `
      <div class="place-hero-gallery">
        <div class="place-main-photo">
          <div class="gallery-fallback">Chưa tìm thấy ảnh Wikimedia cho địa điểm này.</div>
        </div>
      </div>
    `;
  }

  const thumbs = images.map((image, index) => `
    <button
      class="place-thumb-btn ${index === 0 ? "active" : ""}"
      data-gallery-img="${image}"
      style="background-image:url('${image.replace(/'/g, "%27")}')"
      aria-label="Xem ảnh ${index + 1}">
    </button>
  `).join("");

  return `
    <div class="place-hero-gallery">
      <div class="place-main-photo" id="placeMainPhoto" style="background-image:url('${images[0].replace(/'/g, "%27")}')"></div>
      <div class="place-thumbs">${thumbs}</div>
      <p class="place-gallery-note">Ảnh được tải trực tiếp từ Wikipedia/Wikimedia. Bấm ảnh nhỏ để đổi ảnh lớn.</p>
    </div>
  `;
}

async function renderPlaceInfoPanel(place) {
  setFeatureTab("map");
  const panel = $("#featurePanel");
  panel.classList.add("open");

  $("#featureKicker").textContent = "Địa điểm";
  $("#featureTitle").textContent = place.name;

  featureBody(`
    <div class="place-info-panel">
      ${renderGalleryLoading()}
      <div class="place-info-title-row">
        <div>
          <span class="feature-kicker">${place.category}</span>
          <h3>${place.name}</h3>
          <p class="place-info-address">${place.address}</p>
        </div>
      </div>
      <div class="feature-card-meta">
        <span class="pill">★ ${place.rating}</span>
        <span class="pill sage">${place.category}</span>
        <span class="pill">🎟 ${currency(place.price)}</span>
      </div>
      <div class="place-info-actions">
        <button class="feature-button" id="placePanelDirections">↗ Chỉ đường</button>
        <button class="feature-button secondary" id="placePanelZoom">＋ Phóng tới</button>
      </div>
      <div class="place-info-description">${place.description}</div>
      <div class="place-stats-grid">
        <div class="place-stat">
          <span>Giờ mở cửa</span>
          <strong>${place.hours}</strong>
        </div>
        <div class="place-stat">
          <span>Giá vé</span>
          <strong>${currency(place.price)}</strong>
        </div>
        <div class="place-stat">
          <span>Gợi ý</span>
          <strong>${place.tip}</strong>
        </div>
      </div>
    </div>
  `);

  $("#placePanelDirections").addEventListener("click", openDirections);
  $("#placePanelZoom").addEventListener("click", () => map.flyTo([place.lat, place.lng], 17));

  const images = await loadWikiImages(place, 4);
  const body = $("#featurePanelBody");
  const gallery = body.querySelector(".place-hero-gallery");
  if (gallery) {
    gallery.outerHTML = renderGalleryImages(images);
    bindPlaceGallery(images);
  }
}

async function renderPlaces() {
  const list = $("#placesList");
  const visible = filteredPlaces();
  $("#resultCount").textContent = `${visible.length} địa điểm`;

  if (!visible.length) {
    list.innerHTML = `<div class="empty">Không tìm thấy địa điểm phù hợp.</div>`;
    return;
  }

  list.innerHTML = visible.map((place) => `
    <button class="place-card ${state.selectedPlace?.id === place.id ? "active" : ""}" data-id="${place.id}">
      <div class="place-thumb" id="thumb-${place.id}"></div>
      <div>
        <h3>${place.name}</h3>
        <p>${place.address}</p>
        <div class="card-tags">
          <span class="rating">★ ${place.rating}</span>
          <span>${place.category}</span>
          <span>${currency(place.price)}</span>
        </div>
      </div>
    </button>
  `).join("");

  list.querySelectorAll(".place-card").forEach((card) => {
    card.addEventListener("click", () => {
      const place = places.find((item) => item.id === card.dataset.id);
      selectPlace(place, true);
      closeSidebarOnMobile();
    });
  });

  visible.forEach(async (place) => {
    const image = await loadWikiImage(place);
    const thumb = $(`#thumb-${place.id}`);
    if (thumb && image) thumb.style.backgroundImage = `url("${image}")`;
  });
}

function selectPlaceById(id, shouldZoom) {
  const place = places.find((item) => item.id === id);
  if (place) selectPlace(place, shouldZoom);
}
window.selectPlaceById = selectPlaceById;

async function selectPlace(place, shouldZoom = true, openMiniPopup = false) {
  state.selectedPlace = place;
  renderMarkers();
  renderPlaces();

  const marker = state.markers.get(place.id);
  if (openMiniPopup && marker) {
    marker.openPopup();
  }
  if (shouldZoom) {
    map.flyTo([place.lat, place.lng], 16, { duration: 0.7 });
  }

  renderPlaceInfoPanel(place);
  if (featureState?.current === "ai") {
    renderAIGuide();
  }
}

function fitVisiblePlaces() {
  const visible = filteredPlaces();
  if (!visible.length) return;
  const bounds = L.latLngBounds(visible.map((place) => [place.lat, place.lng]));
  map.fitBounds(bounds.pad(0.18), { animate: true });
}

function getStreetViewEmbedUrl(place) {
  const vr = getVRViewpoint(place);
  return `https://www.google.com/maps?layer=c&cbll=${vr.lat},${vr.lng}&cbp=11,${vr.heading},${vr.pitch},0,0&output=svembed`;
}

function getStreetViewFullUrl(place) {
  const vr = getVRViewpoint(place);
  return `https://www.google.com/maps?layer=c&cbll=${vr.lat},${vr.lng}&cbp=11,${vr.heading},${vr.pitch},0,0`;
}

function openDirections() {
  if (!state.selectedPlace) return showToast("Hãy chọn một địa điểm trước.");
  const { lat, lng } = state.selectedPlace;
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;
  window.open(url, "_blank", "noopener");
}

function openVRPlaceListModal() {
  const box = document.createElement("div");
  box.className = "vr-modal vr-place-modal";
  box.innerHTML = `
    <h2>Chọn địa danh để xem VR 360</h2>
    <div class="vr-modal-place-list">
      ${places.map((place) => `
        <button class="vr-modal-place-item" data-vr-modal-place="${place.id}">
          <div class="vr-modal-place-thumb" id="vr-modal-thumb-${place.id}"></div>
          <div>
            <strong>${place.name}</strong>
            <span>${place.category} · ${place.address}</span>
          </div>
        </button>
      `).join("")}
    </div>
  `;

  openModal(box);

  document.querySelectorAll("[data-vr-modal-place]").forEach((button) => {
    button.addEventListener("click", () => {
      const place = places.find((item) => item.id === button.dataset.vrModalPlace);
      if (!place) return;
      state.selectedPlace = place;
      closeModal();
      selectPlace(place, true, true);
      setTimeout(openVRModal, 180);
    });
  });

  places.forEach(async (place) => {
    const image = await loadWikiImage(place);
    const thumb = $(`#vr-modal-thumb-${place.id}`);
    if (thumb && image) thumb.style.backgroundImage = `url("${image}")`;
  });
}

function openVRModal() {
  if (!state.selectedPlace) return showToast("Hãy chọn một địa điểm trước.");
  const place = state.selectedPlace;
  const template = $("#vrTemplate").content.cloneNode(true);

  template.querySelector("#vrTitle").textContent = "VR 360° Khám phá không gian ảo";

  const placeSelect = template.querySelector("#vrModalPlaceSelect");
  placeSelect.innerHTML = places.map((item) => `
    <option value="${item.id}" ${item.id === place.id ? "selected" : ""}>${item.name}</option>
  `).join("");

  const embedUrl = getStreetViewEmbedUrl(place);
  const streetViewUrl = getStreetViewFullUrl(place);

  template.querySelector("#vrFrame").src = embedUrl;
  template.querySelector("#openStreetView").href = streetViewUrl;
  template.querySelector("#vrCaptionTitle").textContent = place.name;
  template.querySelector("#vrCaptionText").textContent = `${place.description} Điểm xem 360° đã được tối ưu gần vị trí/cổng vào của địa danh.`;

  placeSelect.addEventListener("change", (event) => {
    const nextPlace = places.find((item) => item.id === event.target.value);
    if (!nextPlace) return;
    state.selectedPlace = nextPlace;
    openVRModal();
  });

  openModal(template);
}

function openTicketModal() {
  if (!state.selectedPlace) return showToast("Hãy chọn một địa điểm trước.");
  const place = state.selectedPlace;
  const template = $("#ticketTemplate").content.cloneNode(true);

  let qty = 1;
  const price = place.price || 0;

  const updateTotal = () => {
    template.querySelector("#ticketQty").textContent = qty;
    template.querySelector("#ticketTotal").textContent = currency(price * qty);
  };

  template.querySelector("#ticketPlaceName").textContent = place.name;
  template.querySelector("#ticketPriceText").textContent = `Giá vé: ${currency(price)} / người`;
  template.querySelector("#visitDate").valueAsDate = new Date();
  template.querySelector("#qtyMinus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    updateTotal();
  });
  template.querySelector("#qtyPlus").addEventListener("click", () => {
    qty += 1;
    updateTotal();
  });
  template.querySelector("#confirmTicket").addEventListener("click", () => {
    closeModal();
    showToast(`Đã tạo yêu cầu đặt ${qty} vé cho ${place.name}.`);
  });

  updateTotal();
  openModal(template);
}

function openModal(contentNode) {
  $("#modalContent").innerHTML = "";
  $("#modalContent").appendChild(contentNode);
  $("#modalBackdrop").hidden = false;
}

function closeModal() {
  $("#modalBackdrop").hidden = true;
  $("#modalContent").innerHTML = "";
}

function locateUser() {
  if (!navigator.geolocation) {
    showToast("Trình duyệt không hỗ trợ định vị.");
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latlng = [position.coords.latitude, position.coords.longitude];
      if (state.userMarker) state.userMarker.remove();
      state.userMarker = L.circleMarker(latlng, {
        radius: 9,
        color: "#2563eb",
        fillColor: "#3b82f6",
        fillOpacity: 0.9,
        weight: 3
      }).addTo(map).bindPopup("Vị trí của bạn");

      map.flyTo(latlng, 15);
      showToast("Đã định vị vị trí hiện tại.");
    },
    () => showToast("Không lấy được vị trí. Hãy cấp quyền định vị cho trình duyệt.")
  );
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function closeSidebarOnMobile() {
  if (window.matchMedia("(max-width: 920px)").matches) {
    $("#sidebar").classList.remove("open");
  }
}

$("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderPlaces();
  renderMarkers();
});

$("#clearSearch").addEventListener("click", () => {
  state.query = "";
  $("#searchInput").value = "";
  renderPlaces();
  renderMarkers();
  fitVisiblePlaces();
});

$("#btnDirections").addEventListener("click", openDirections);
$("#btnVR").addEventListener("click", openVRModal);
$("#btnBook").addEventListener("click", openTicketModal);
$("#btnZoom").addEventListener("click", () => {
  if (!state.selectedPlace) return showToast("Hãy chọn một địa điểm trước.");
  map.flyTo([state.selectedPlace.lat, state.selectedPlace.lng], 17);
});

$("#btnLocateMap").addEventListener("click", locateUser);
$("#modalClose").addEventListener("click", closeModal);
$("#modalBackdrop").addEventListener("click", (event) => {
  if (event.target.id === "modalBackdrop") closeModal();
});
$("#openSidebar").addEventListener("click", () => $("#sidebar").classList.add("open"));
$("#closeSidebar").addEventListener("click", () => $("#sidebar").classList.remove("open"));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    $("#sidebar").classList.remove("open");
  }
});

initCategories();
renderPlaces();
renderMarkers();
fitVisiblePlaces();

setTimeout(() => selectPlace(places[0], false), 400);

window.addEventListener("load", () => {
  setTimeout(() => map.invalidateSize(), 150);
  setTimeout(() => map.invalidateSize(), 700);
});
window.addEventListener("resize", () => {
  setTimeout(() => map.invalidateSize(), 150);
});

const guides = [
  {
    id: "mai-anh",
    name: "Mai Anh",
    level: "Chuyên gia cao cấp",
    status: "Đang rảnh",
    price: 350000,
    rating: 4.9,
    icon: "👩‍🏫",
    skills: ["Hoàng thành", "Văn Miếu", "Lịch sử triều đại"],
    description: "Hướng dẫn viên chuyên tuyến di sản trung tâm Hà Nội, phù hợp tour gia đình và học sinh."
  },
  {
    id: "duc-minh",
    name: "Đức Minh",
    level: "Giá tốt",
    status: "Đang rảnh",
    price: 220000,
    rating: 4.7,
    icon: "🧑‍🎓",
    skills: ["Phố cổ", "Hồ Gươm", "Ẩm thực"],
    description: "Phong cách kể chuyện trẻ trung, có thể kết hợp tham quan và trải nghiệm món địa phương."
  },
  {
    id: "thu-ha",
    name: "Thu Hà",
    level: "Chuyên gia cao cấp",
    status: "Bận",
    price: 420000,
    rating: 5.0,
    icon: "👩‍💼",
    skills: ["Bảo tàng", "Dân tộc học", "Văn hóa"],
    description: "Phù hợp tour chuyên sâu về văn hóa, bảo tàng và trải nghiệm học thuật."
  },
  {
    id: "quang-huy",
    name: "Quang Huy",
    level: "Giá tốt",
    status: "Đang rảnh",
    price: 250000,
    rating: 4.8,
    icon: "🧑‍🦱",
    skills: ["Nhiếp ảnh", "Check-in", "Tour đêm"],
    description: "Gợi ý góc chụp đẹp, phù hợp nhóm bạn trẻ hoặc khách thích check-in."
  },
  {
    id: "ngoc-linh",
    name: "Ngọc Linh",
    level: "Chuyên gia cao cấp",
    status: "Đang rảnh",
    price: 390000,
    rating: 4.9,
    icon: "👩‍🎨",
    skills: ["Mỹ thuật", "Kiến trúc Pháp", "Bảo tàng"],
    description: "Phù hợp tour bảo tàng, kiến trúc Pháp và các điểm check-in văn hóa quanh trung tâm Hà Nội."
  },
  {
    id: "anh-tuan",
    name: "Anh Tuấn",
    level: "Giá tốt",
    status: "Đang rảnh",
    price: 240000,
    rating: 4.8,
    icon: "🧑‍🏫",
    skills: ["Cầu Long Biên", "Phố cổ", "Tour đi bộ"],
    description: "Hướng dẫn viên thân thiện, phù hợp tour đi bộ phố cổ, Hồ Gươm, Ô Quan Chưởng và Cầu Long Biên."
  },
  {
    id: "minh-chau",
    name: "Minh Châu",
    level: "Chuyên gia cao cấp",
    status: "Đang rảnh",
    price: 450000,
    rating: 5.0,
    icon: "👩‍💻",
    skills: ["UNESCO", "Hoàng thành", "Lịch sử Thăng Long"],
    description: "Chuyên kể chuyện lịch sử theo tuyến Hoàng thành Thăng Long, Văn Miếu và các di tích thời Thăng Long."
  },
  {
    id: "quoc-bao",
    name: "Bác Quốc Bảo",
    level: "Chuyên gia cao cấp",
    status: "Đang rảnh",
    price: 400000,
    rating: 4.9,
    icon: "👨‍🎨",
    skills: ["Nhà cổ", "Mã Mây", "Thành Cổ Loa", "Kiến trúc cổ"],
    description: "Cựu kiến trúc sư am hiểu sâu sắc về kết cấu nhà gỗ ba gian, nhà ống cổ và khảo cổ học thành lũy."
  },
  {
    id: "hoai-thanh",
    name: "Hoài Thanh",
    level: "Giá tốt",
    status: "Đang rảnh",
    price: 230000,
    rating: 4.8,
    icon: "👩‍🌾",
    skills: ["Làng nghề", "Bát Tràng", "Vạn Phúc", "Trải nghiệm"],
    description: "Chuyên dẫn các tuyến làng nghề thủ công truyền thống, hỗ trợ kết nối workshop tự làm sản phẩm."
  }
];

const matchInterests = [
  { id: "history", label: "Lịch sử", places: ["hoang-thanh", "van-mieu", "nha-tu-hoa-lo", "co-loa"] },
  { id: "spiritual", label: "Tâm linh", places: ["den-ngoc-son", "chua-mot-cot", "chua-tran-quoc", "phu-tay-ho", "chua-thay"] },
  { id: "museum", label: "Bảo tàng", places: ["bao-tang-dan-toc", "bao-tang-my-thuat", "bao-tang-lich-su", "bao-tang-ho-chi-minh", "bao-tang-ha-noi"] },
  { id: "photo", label: "Chụp ảnh", places: ["hoan-kiem", "nha-hat-lon", "nha-tho-lon", "lang-gom-bat-trang", "lang-lua-van-phuc"] },
  { id: "family", label: "Gia đình", places: ["bao-tang-dan-toc", "lang-gom-bat-trang", "lang-to-he-xuan-la", "chua-thay"] },
  { id: "free", label: "Tiết kiệm", places: ["hoan-kiem", "chua-mot-cot", "lang-bac", "phu-tay-ho"] },
  { id: "short", label: "Đi nhanh", places: ["chua-mot-cot", "den-ngoc-son", "o-quan-chuong", "nha-co-ma-may"] },
  { id: "deep", label: "Khám phá sâu", places: ["hoang-thanh", "van-mieu", "co-loa", "lang-co-duong-lam"] },
  { id: "craft", label: "Làng nghề", places: ["lang-gom-bat-trang", "lang-lua-van-phuc", "lang-to-he-xuan-la", "lang-non-chuong", "lang-giay-do-buoi"] },
  { id: "old-house", label: "Nhà cổ", places: ["nha-co-ma-may", "lang-co-duong-lam", "lang-cuu", "nha-co-hang-dao", "nha-co-hang-ngang", "nha-co-hang-bac"] }
];

function getContextPromptsForPlace(place) {
  if (!place) {
    return ["Hãy chọn một địa điểm trên bản đồ để xem gợi ý nhanh theo ngữ cảnh."];
  }
  const basePrompts = [
    "Địa điểm này có gì nổi bật?",
    "Nên đi cùng điểm nào gần đây?",
    "Có cần mua vé không?",
    "Mất bao lâu để tham quan?"
  ];
  const placeName = normalize(place.name);

  if (placeName.includes("hoang thanh")) {
    return [
      "Hoàng thành Thăng Long có gì nổi bật?",
      "Nên đi cùng điểm nào gần Hoàng thành?",
      "Hoàng thành có cần mua vé không?",
      "Tham quan Hoàng thành mất bao lâu?"
    ];
  }
  if (placeName.includes("van mieu")) {
    return [
      "Văn Miếu - Quốc Tử Giám có gì nổi bật?",
      "Nên đi cùng điểm nào gần Văn Miếu?",
      "Văn Miếu có cần mua vé không?",
      "Tham quan Văn Miếu mất bao lâu?"
    ];
  }
  return basePrompts;
}

function getNearbyPlaces(place, limit = 4) {
  if (!place) return [];
  const distanceScore = (other) => {
    const dx = place.lat - other.lat;
    const dy = place.lng - other.lng;
    return Math.sqrt(dx * dx + dy * dy);
  };
  return places
    .filter((item) => item.id !== place.id)
    .map((item) => ({ place: item, distance: distanceScore(item) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map((item) => item.place);
}

function makePlaceLink(place) {
  return `[[place:${place.id}|${place.name}]]`;
}

function linkifyPlaces(text) {
  let output = String(text);
  output = output.replace(/\[\[place:([^|\]]+)\|([^\]]+)\]\]/g, (_match, id, label) => {
    return `<button type="button" class="ai-place-link" data-ai-place="${id}">${escapeHtml(label)}</button>`;
  });

  places
    .slice()
    .sort((a, b) => b.name.length - a.name.length)
    .forEach((place) => {
      const escapedName = place.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(`(^|[^>\\wÀ-ỹ])(${escapedName})(?=[^<\\wÀ-ỹ]|$)`, "g");
      output = output.replace(regex, (match, prefix, label) => {
        if (match.includes("data-ai-place")) return match;
        return `${prefix}<button type="button" class="ai-place-link" data-ai-place="${place.id}">${escapeHtml(label)}</button>`;
      });
    });
  return output;
}

function renderAiText(text) {
  return linkifyPlaces(escapeHtml(text)).replace(/\n/g, "<br>");
}

function pickTopPlacesByIntent(intent, limit = 4) {
  const scored = places.map((place) => {
    const text = normalize(`${place.name} ${place.category} ${place.address} ${place.tags.join(" ")} ${place.description}`);
    let score = 0;

    if (intent === "history") {
      if (place.category === "Lịch sử") score += 5;
      if (text.includes("lich su") || text.includes("di san") || text.includes("co dai")) score += 3;
    }
    if (intent === "photo") {
      if (text.includes("check-in") || text.includes("anh dep") || text.includes("bieu tuong") || text.includes("lang nghe")) score += 5;
      if (place.rating >= 4.5) score += 2;
    }
    if (intent === "free") {
      if (place.price === 0) score += 7;
      if (text.includes("mien phi")) score += 2;
    }
    if (intent === "museum") {
      if (place.category === "Bảo tàng") score += 7;
    }
    if (intent === "spiritual") {
      if (place.category === "Đền/ Chùa") score += 6;
      if (text.includes("tam linh") || text.includes("phat giao")) score += 3;
    }
    if (intent === "family") {
      if (text.includes("gia dinh") || place.category === "Làng nghề" || place.category === "Bảo tàng") score += 5;
    }
    if (intent === "ticket") {
      if (place.price > 0) score += 5;
    }
    score += Math.max(0, place.rating - 4) * 1.2;
    return { place, score };
  });

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.place);
}

function formatPlaceList(items) {
  if (!items.length) return "Mình chưa tìm được địa điểm phù hợp trong dữ liệu hiện tại.";
  return items.map((place, index) => {
    const ticket = place.price > 0 ? currency(place.price) : "Miễn phí";
    return `${index + 1}. ${makePlaceLink(place)} — ${place.category}, ${ticket}, gợi ý ${place.tip}`;
  }).join("\n");
}

function buildItinerary(type) {
  const routes = {
    halfday: [
      places.find((p) => p.id === "van-mieu"),
      places.find((p) => p.id === "hoang-thanh"),
      places.find((p) => p.id === "hoan-kiem")
    ].filter(Boolean),
    full: [
      places.find((p) => p.id === "hoang-thanh"),
      places.find((p) => p.id === "van-mieu"),
      places.find((p) => p.id === "nha-tu-hoa-lo"),
      places.find((p) => p.id === "hoan-kiem"),
      places.find((p) => p.id === "lang-gom-bat-trang")
    ].filter(Boolean),
    budget: [
      places.find((p) => p.id === "hoan-kiem"),
      places.find((p) => p.id === "nha-tho-lon"),
      places.find((p) => p.id === "o-quan-chuong"),
      places.find((p) => p.id === "chua-tran-quoc")
    ].filter(Boolean),
    family: [
      places.find((p) => p.id === "bao-tang-dan-toc"),
      places.find((p) => p.id === "lang-gom-bat-trang"),
      places.find((p) => p.id === "hoan-kiem")
    ].filter(Boolean)
  };

  const labels = {
    halfday: "Lịch trình nửa ngày",
    full: "Lịch trình 1 ngày tinh hoa",
    budget: "Lịch trình tiết kiệm",
    family: "Lịch trình gia đình & làng nghề"
  };

  const times = {
    halfday: ["08:30", "10:00", "11:15"],
    full: ["08:30", "10:15", "13:30", "15:30", "17:00"],
    budget: ["08:30", "09:30", "10:45", "15:00"],
    family: ["08:30", "13:30", "16:30"]
  };

  const route = routes[type] || routes.full;
  return `${labels[type] || labels.full}:\n` + route.map((place, index) => {
    return `${times[type][index] || ""} — ${makePlaceLink(place)}: ${place.description}`;
  }).join("\n");
}

function findPlaceFromQuestion(question) {
  const q = normalize(question);
  return places.find((place) => {
    const name = normalize(place.name);
    const compactName = name.replace(/[^a-z0-9]/g, "");
    const compactQ = q.replace(/[^a-z0-9]/g, "");
    return q.includes(name) || compactQ.includes(compactName);
  });
}

function recommendGuideForQuestion(question) {
  const q = normalize(question);
  let filtered = guides;

  if (q.includes("gia tot") || q.includes("re") || q.includes("tiet kiem")) {
    filtered = guides.filter((guide) => guide.level === "Giá tốt");
  } else if (q.includes("chuyen gia") || q.includes("sau") || q.includes("lich su")) {
    filtered = guides.filter((guide) => guide.level === "Chuyên gia cao cấp");
  } else if (q.includes("dang ranh") || q.includes("ranh")) {
    filtered = guides.filter((guide) => guide.status === "Đang rảnh");
  }

  return filtered
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map((guide, index) => `${index + 1}. ${guide.name} — ${guide.level}, ${guide.status}, ★ ${guide.rating}, ${currency(guide.price)}/tour`)
    .join("\n");
}

const featureState = {
  current: "map",
  ticketCart: new Map(),
  guideFilter: "Tất cả",
  selectedInterests: new Set(),
  aiMessages: [
    {
      role: "ai",
      text: "Xin chào, mình là HERI AI. Bạn có thể hỏi về giờ mở cửa, các làng nghề, nhà cổ, đặt vé, VR 360° hoặc gợi ý lịch trình văn hóa nội/ngoại thành."
    }
  ]
};

function setFeatureTab(feature) {
  document.querySelectorAll(".feature-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.feature === feature);
  });
}

function openFeature(feature) {
  featureState.current = feature;
  setFeatureTab(feature);

  if (feature === "vr") {
    const panel = $("#featurePanel");
    panel.classList.remove("open");
    panel.classList.remove("vr-center-mode");
    if (state.selectedPlace) {
      openVRModal();
    } else {
      openVRPlaceListModal();
    }
    return;
  }

  const panel = $("#featurePanel");
  if (feature === "map") {
    panel.classList.remove("open");
    panel.classList.remove("vr-center-mode");
    setTimeout(() => map.invalidateSize(), 100);
    return;
  }

  panel.classList.add("open");
  const titles = {
    ai: ["AI Guide", "Trợ lý hỏi đáp di sản"],
    experiences: ["Trải nghiệm", "Trải nghiệm tại điểm"],
    tickets: ["Đặt vé", "Chọn vé tham quan"],
    guides: ["", "Đặt hướng dẫn viên"],
    vr: ["VR 360", "Khám phá không gian ảo"],
    match: ["Heritage Match", "Tạo lịch trình theo sở thích"]
  };

  $("#featureKicker").textContent = titles[feature][0];
  $("#featureTitle").textContent = titles[feature][1];

  if (feature === "ai") renderAIGuide();
  if (feature === "experiences") renderExperiences();
  if (feature === "tickets") renderTickets();
  if (feature === "guides") renderGuides();
  if (feature === "vr") renderVRHub();
  if (feature === "match") renderMatch();
}

function featureBody(html) {
  $("#featurePanelBody").innerHTML = html;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function aiAnswer(question) {
  const q = normalize(question);
  const selected = findPlaceFromQuestion(question) || state.selectedPlace;

  if (selected && (q.includes("dia diem nay") || q.includes("co gi noi bat") || q.includes("noi bat") || q.includes("gioi thieu"))) {
    return `${makePlaceLink(selected)} nổi bật vì: ${selected.description}\n\nThông tin nhanh: ${selected.category}, ★ ${selected.rating}, giá vé ${currency(selected.price)}, gợi ý tham quan ${selected.tip}.`;
  }
  if (selected && (q.includes("di cung") || q.includes("gan day") || q.includes("gan do") || q.includes("ket hop") || q.includes("cung diem"))) {
    const nearby = getNearbyPlaces(selected, 4);
    return `Bạn có thể kết hợp ${makePlaceLink(selected)} với các điểm gần đây:\n${formatPlaceList(nearby)}`;
  }
  if (q.includes("mo cua") || q.includes("gio") || q.includes("may gio")) {
    if (selected) {
      return `${makePlaceLink(selected)} hoạt động vào khung giờ: ${selected.hours}. Vé: ${currency(selected.price)}.`;
    }
    return "Bạn hãy chọn hoặc nhắc tên một địa điểm cụ thể để mình tra cứu khung giờ mở cửa nhé.";
  }
  if (q.includes("lang nghe") || q.includes("to he") || q.includes("bat trang") || q.includes("van phuc")) {
    const craftPlaces = places.filter(p => p.category === "Làng nghề");
    return `Các làng nghề truyền thống đặc sắc trên hệ thống:\n${formatPlaceList(craftPlaces)}`;
  }
  if (q.includes("nha co") || q.includes("ma may") || q.includes("lang cuu")) {
    const housePlaces = places.filter(p => p.category === "Nhà cổ");
    return `Danh sách các ngôi nhà cổ, phố cổ hoài niệm trên bản đồ:\n${formatPlaceList(housePlaces)}`;
  }
  if (q.includes("1 ngay") || q.includes("mot ngay") || q.includes("lich trinh")) {
    return buildItinerary("full");
  }
  if (q.includes("sinh vien") || q.includes("tiet kiem") || q.includes("mien phi")) {
    return `Gợi ý các điểm tham quan miễn phí dành cho bạn:\n${formatPlaceList(pickTopPlacesByIntent("free", 5))}`;
  }
  if (q.includes("huong dan") || q.includes("guide")) {
    return `Một số hướng dẫn viên phù hợp cho lộ trình của bạn:\n${recommendGuideForQuestion(question)}\n\nBạn có thể mở tab Hướng dẫn viên để đặt chỗ trực tiếp.`;
  }
  if (selected) {
    return `${makePlaceLink(selected)}: ${selected.description}\nGiờ mở cửa: ${selected.hours}. Giá vé: ${currency(selected.price)}. Gợi ý tham quan: ${selected.tip}.`;
  }
  return "Mình là trợ lý di sản HERI AI. Bạn có thể hỏi mình về thông tin các di tích đặc biệt, bảo tàng, làng nghề nghệ thuật cổ truyền hoặc nhà cổ Hà Nội.";
}

function renderAIGuide() {
  const messages = featureState.aiMessages.map((msg) => `
    <div class="ai-msg ${msg.role === "user" ? "user" : ""}">
      <div class="ai-avatar">${msg.role === "user" ? "Bạn" : "✦"}</div>
      <div class="ai-bubble">${msg.role === "user" ? escapeHtml(msg.text) : renderAiText(msg.text)}</div>
    </div>
  `).join("");

  const selected = state.selectedPlace;
  const contextPrompts = getContextPromptsForPlace(selected);
  const contextTitle = selected ? `Gợi ý nhanh cho ${selected.name}` : "Gợi ý nhanh theo ngữ cảnh";

  featureBody(`
    <p class="feature-intro">Chọn một địa điểm trên bản đồ, AI Guide sẽ gợi ý câu hỏi phù hợp với địa điểm đó.</p>
    <div class="ai-context-box">
      <strong>${contextTitle}</strong>
      <div class="prompt-row">
        ${contextPrompts.map((prompt) => {
          const disabled = !selected && prompt.startsWith("Hãy chọn");
          return `<button class="prompt-chip" data-prompt="${prompt}" ${disabled ? "disabled" : ""}>${prompt}</button>`;
        }).join("")}
      </div>
    </div>
    <div class="ai-window" id="aiWindow">${messages}</div>
    <form class="ai-form" id="aiForm">
      <input id="aiInput" placeholder="Ví dụ: Làng nghề gốm Bát Tràng có gì nổi bật?" autocomplete="off" />
      <button class="feature-button" type="submit">Gửi</button>
    </form>
  `);

  const aiWindow = $("#aiWindow");
  aiWindow.scrollTop = aiWindow.scrollHeight;

  document.querySelectorAll(".prompt-chip").forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.disabled) sendAIMessage(button.dataset.prompt);
    });
  });

  $("#aiForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = $("#aiInput");
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    sendAIMessage(text);
  });
}

function sendAIMessage(text) {
  featureState.aiMessages.push({ role: "user", text });
  featureState.aiMessages.push({ role: "ai", text: aiAnswer(text) });
  renderAIGuide();
}

const experiences = [
  { id: "exp-1", name: "Tour đêm “Tinh hoa đạo học” - Văn miếu", price: 199000, desc: "Trải nghiệm không gian Văn Miếu lung linh về đêm kết hợp công nghệ trình chiếu 3D Mapping đỉnh cao." },
  { id: "exp-2", name: "Tour đêm giải mã Hoàng thành - Hoàng thành Thăng Long", price: 300000, desc: "Hành trình giải mã các cổ vật, hiện vật hoàng cung và thưởng thức trà cung đình dưới ánh rằm." },
  { id: "exp-3", name: "Tự làm sản phẩm gốm - Làng gốm Bát tràng", price: 80000, desc: "Trở thành nghệ nhân gốm thực thụ, tự tay nhào nặn và tạo hình sản phẩm trên bàn xoay truyền thống." },
  { id: "exp-4", name: "Workshop sơn mài - Hạ Thái", price: 250000, desc: "Tìm hiểu nghệ thuật sơn mài truyền thống và tự tay trang trí một tác phẩm lưu niệm mang về." },
  { id: "exp-5", name: "Tour Đêm nhà tù Hỏa lò", price: 399000, desc: "Hành trình tâm linh đầy xúc động, tái hiện chân thực tinh thần bất khuất của các chiến sĩ yêu nước." },
  { id: "exp-6", name: "Workshop Tự tay làm quạt giấy - Làng quạt Chàng Sơn", price: 70000, desc: "Lắng nghe nghệ nhân chia sẻ, tự tay tạo hình, dán nan tre và vẽ họa tiết nghệ thuật lên chiếc quạt giấy dore truyền thống." },
  { id: "exp-7", name: "Trải nghiệm Nhuộm tơ tằm thủ công - Làng lụa Vạn Phúc", price: 150000, desc: "Tham gia vào quy trình nấu sợi, quay tơ và tự tay nhuộm màu tự nhiên cho một tấm lụa nhỏ mang đậm dấu ấn cá nhân." }
];

function renderExperiences() {
  featureBody(`
    <p class="feature-intro">Khám phá các hoạt động văn hóa nghệ thuật đặc sắc và đặt lịch tham gia trực tiếp.</p>
    <div style="display: grid; gap: 12px;">
      ${experiences.map((exp) => `
        <div class="feature-card">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
            <div style="flex: 1;">
              <h3 style="margin: 0 0 6px 0; font-size: 16px; color: #26170f;">${exp.name}</h3>
              <p style="margin: 0; font-size: 13px; color: #6f5848; line-height: 1.45;">${exp.desc}</p>
              <div style="margin-top: 8px;">
                <span class="pill" style="background: #dfe8dc; color: #27735f; font-weight: 800;">⚡ Đặt ngay</span>
                <!-- Sửa lỗi: Đổi từ place.price thành exp.price để hiển thị chuẩn xác giá tiền -->
                <span class="pill" style="font-weight: 800;">💰 ${currency(exp.price)}</span>
              </div>
            </div>
            <button class="feature-button" data-book-exp="${exp.id}" style="padding: 0 14px; min-height: 36px; font-size: 13px; flex-shrink: 0;">
              Đặt chỗ
            </button>
          </div>
        </div>
      `).join("")}
    </div>
  `);

  document.querySelectorAll("[data-book-exp]").forEach((button) => {
    button.addEventListener("click", () => {
      const exp = experiences.find((item) => item.id === button.dataset.bookExp);
      if (!exp) return;
      showConfirm(
        "Xác nhận đặt trải nghiệm",
        `Bạn đang tạo yêu cầu đăng ký tham gia: "${exp.name}". Tổng chi phí dự kiến: ${currency(exp.price)}.`,
        () => showToast(`Đã gửi yêu cầu đặt thành công: ${exp.name}`)
      );
    });
  });
}

function renderTickets() {
  Array.from(featureState.ticketCart.keys()).forEach((id) => {
    const place = places.find((item) => item.id === id);
    if (!place || place.price <= 0) featureState.ticketCart.delete(id);
  });

  const paidPlaces = places.filter((place) => place.price > 0);
  const rows = paidPlaces.map((place) => {
    const qty = featureState.ticketCart.get(place.id) || 0;
    return `
      <div class="feature-card">
        <div class="ticket-row">
          <div>
            <h3>${place.name}</h3>
            <p>${place.address}</p>
            <div class="feature-card-meta">
              <span class="pill">🎟 ${currency(place.price)}</span>
              <span class="pill sage">⏱ ${place.tip}</span>
            </div>
          </div>
          <div class="ticket-qty">
            <button data-ticket-minus="${place.id}">−</button>
            <strong>${qty}</strong>
            <button data-ticket-plus="${place.id}">+</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  const total = Array.from(featureState.ticketCart.entries()).reduce((sum, [id, qty]) => {
    const place = places.find((item) => item.id === id);
    return sum + (place ? place.price * qty : 0);
  }, 0);

  const count = Array.from(featureState.ticketCart.values()).reduce((sum, qty) => sum + qty, 0);

  featureBody(`
    <p class="feature-intro">Chọn số lượng vé theo từng địa danh.</p>
    <div class="ticket-grid">${rows || `<div class="empty-feature">Hiện chưa có địa điểm nào cần mua vé.</div>`}</div>
    <div class="total-bar">
      <div>
        <small>Tổng tiền</small>
        <strong style="display:block;font-size:20px">${currency(total)}</strong>
      </div>
      <button class="feature-button" id="checkoutTickets" ${count ? "" : "disabled"}>Thanh toán</button>
    </div>
  `);

  document.querySelectorAll("[data-ticket-plus]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.ticketPlus;
      featureState.ticketCart.set(id, (featureState.ticketCart.get(id) || 0) + 1);
      renderTickets();
    });
  });

  document.querySelectorAll("[data-ticket-minus]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.ticketMinus;
      const next = Math.max(0, (featureState.ticketCart.get(id) || 0) - 1);
      if (next === 0) featureState.ticketCart.delete(id);
      else featureState.ticketCart.set(id, next);
      renderTickets();
    });
  });

  $("#checkoutTickets").addEventListener("click", () => {
    if (!count) return;
    showConfirm(
      "Xác nhận đặt vé",
      `Bạn đang đặt ${count} vé với tổng tiền ${currency(total)}. Đây là demo, chưa kết nối thanh toán thật.`,
      () => {
        featureState.ticketCart.clear();
        renderTickets();
        showToast("Đã xác nhận đặt vé demo.");
      }
    );
  });
}

function renderGuides() {
  const filters = ["Tất cả", "Đang hoạt động", "HDV chuyên nghiệp", "HDV tại điểm", "Giá tốt"];
  
  if (!filters.includes(featureState.guideFilter)) {
    featureState.guideFilter = "Tất cả";
  }

  const filtered = guides.filter((guide) => {
    if (featureState.guideFilter === "Tất cả") return true;
    if (featureState.guideFilter === "Đang hoạt động") return guide.status === "Đang rảnh";
    if (featureState.guideFilter === "HDV chuyên nghiệp") return guide.level === "Chuyên gia cao cấp";
    if (featureState.guideFilter === "Giá tốt") return guide.level === "Giá tốt";
    if (featureState.guideFilter === "HDV tại điểm") {
      return guide.skills.includes("Hoàng thành") || 
             guide.skills.includes("Văn Miếu") || 
             guide.skills.includes("Bảo tàng") || 
             guide.skills.includes("Nhà cổ") || 
             guide.skills.includes("Làng nghề");
    }
    return true;
  });

  featureBody(`
    <div class="filter-row">
      ${filters.map((filter) => `<button class="filter-chip ${filter === featureState.guideFilter ? "active" : ""}" data-guide-filter="${filter}">${filter}</button>`).join("")}
    </div>
    <div style="height:12px"></div>
    <div class="guide-grid">
      ${filtered.map((guide) => `
        <div class="feature-card">
          <div class="guide-card-head">
            <div class="guide-avatar">${guide.icon}</div>
            <div>
              <h3>${guide.name}</h3>
              <p>${guide.description}</p>
            </div>
          </div>
          <div class="feature-card-meta">
            <span class="pill">★ ${guide.rating}</span>
            <span class="pill sage">${guide.status === "Đang rảnh" ? "Đang hoạt động" : "Bận"}</span>
            <span class="pill">${guide.level}</span>
            <span class="pill">${currency(guide.price)}/tour</span>
          </div>
          <p><strong>Chuyên môn:</strong> ${guide.skills.join(", ")}</p>
          <div style="height:10px"></div>
          <button class="feature-button" data-book-guide="${guide.id}">Đặt hướng dẫn viên</button>
        </div>
      `).join("")}
    </div>
  `);

  document.querySelectorAll("[data-guide-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      featureState.guideFilter = button.dataset.guideFilter;
      renderGuides();
    });
  });

  document.querySelectorAll("[data-book-guide]").forEach((button) => {
    button.addEventListener("click", () => {
      const guide = guides.find((item) => item.id === button.dataset.bookGuide);
      showConfirm(
        "Xác nhận đặt hướng dẫn viên",
        `Bạn muốn đặt ${guide.name} cho tour HERIGO. Giá demo: ${currency(guide.price)}/tour.`,
        () => showToast(`Đã gửi yêu cầu đặt hướng dẫn viên ${guide.name}.`)
      );
    });
  });
}

function renderVRHub(selectedId = state.selectedPlace?.id || null) {
  if (!selectedId) {
    featureBody(`
      <p class="feature-intro">Chọn một địa danh để mở VR 360.</p>
      <div class="vr-place-list">
        ${places.map((place) => `
          <button class="vr-place-item" data-vr-place="${place.id}">
            <div class="vr-place-thumb" id="vr-thumb-${place.id}"></div>
            <div>
              <strong>${place.name}</strong>
              <span>${place.category} · ${place.address}</span>
            </div>
          </button>
        `).join("")}
      </div>
    `);

    document.querySelectorAll("[data-vr-place]").forEach((button) => {
      button.addEventListener("click", () => {
        const place = places.find((item) => item.id === button.dataset.vrPlace);
        if (!place) return;
        state.selectedPlace = place;
        selectPlace(place, true, true);
        openFeature("vr");
        renderVRHub(place.id);
      });
    });

    places.forEach(async (place) => {
      const image = await loadWikiImage(place);
      const thumb = $(`#vr-thumb-${place.id}`);
      if (thumb && image) thumb.style.backgroundImage = `url("${image}")`;
    });
    return;
  }

  const place = places.find((item) => item.id === selectedId) || places[0];
  const embedUrl = getStreetViewEmbedUrl(place);
  const streetViewUrl = getStreetViewFullUrl(place);

  featureBody(`
    <div class="vr-select-row">
      <select class="feature-select" id="vrPlaceSelect">
        ${places.map((item) => `<option value="${item.id}" ${item.id === place.id ? "selected" : ""}>${item.name}</option>`).join("")}
      </select>
      <button class="feature-button secondary" id="vrZoomToPlace">Phóng tới</button>
    </div>
    <div class="feature-card vr-live-card">
      <div class="vr-live-head">
        <span class="vr-inline-badge">◉ LIVE 360°</span>
        <h3>${place.name}</h3>
        <div class="feature-card-meta">
          <span class="pill">${place.category}</span>
          <span class="pill sage">${place.address}</span>
        </div>
        <p class="vr-note">
          Có thể xoay, kéo, phóng to/thu nhỏ trực tiếp trong khung bên dưới. Nếu điểm này chưa có panorama công khai, Google sẽ hiển thị vị trí Street View gần nhất.
        </p>
      </div>
      <div class="vr-live-frame">
        <iframe src="${embedUrl}" title="VR 360 ${place.name}" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="vr-live-actions">
        <button class="feature-button secondary" id="vrBackToList">Danh sách địa danh</button>
        <button class="feature-button" id="openVRPopup">Mở popup VR</button>
        <a class="feature-button secondary" href="${streetViewUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;text-decoration:none">Mở toàn màn hình</a>
      </div>
    </div>
  `);

  $("#vrPlaceSelect").addEventListener("change", (event) => {
    const nextPlace = places.find((item) => item.id === event.target.value);
    if (nextPlace) state.selectedPlace = nextPlace;
    renderVRHub(event.target.value);
  });
  $("#vrZoomToPlace").addEventListener("click", () => {
    selectPlace(place, true, true);
    showToast(`Đã phóng tới ${place.name}.`);
  });
  $("#vrBackToList").addEventListener("click", () => {
    state.selectedPlace = null;
    renderVRHub(null);
  });
  $("#openVRPopup").addEventListener("click", () => {
    state.selectedPlace = place;
    openVRModal();
  });
}

function renderMatch() {
  featureBody(`
    <p class="feature-intro">Chọn ít nhất 2 sở thích, sau đó bấm tạo lịch trình.</p>
    <div class="interest-grid">
      ${matchInterests.map((interest) => `<button class="interest-chip ${featureState.selectedInterests.has(interest.id) ? "active" : ""}" data-interest="${interest.id}">${interest.label}</button>`).join("")}
    </div>
    <div style="display:flex;gap:10px;margin-top:14px;flex-wrap:wrap">
      <button class="feature-button" id="generateMatch">Tạo lịch trình phù hợp</button>
      <button class="feature-button secondary" id="resetMatch">Làm lại</button>
    </div>
    <div class="match-result" id="matchResult">${renderMatchResult(false)}</div>
  `);

  document.querySelectorAll("[data-interest]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.interest;
      if (featureState.selectedInterests.has(id)) featureState.selectedInterests.delete(id);
      else featureState.selectedInterests.add(id);
      renderMatch();
    });
  });

  $("#generateMatch").addEventListener("click", () => {
    $("#matchResult").innerHTML = renderMatchResult(true);
  });
  $("#resetMatch").addEventListener("click", () => {
    featureState.selectedInterests.clear();
    renderMatch();
  });
}

function getPlaceArea(place) {
  const text = normalize(`${place.address} ${place.tags.join(" ")}`);
  if (text.includes("hoan kiem") || text.includes("ho guom") || text.includes("pho co")) return "Trung tâm / Hồ Gươm";
  if (text.includes("tay ho") || text.includes("ho tay")) return "Hồ Tây";
  if (text.includes("ba dinh")) return "Ba Đình";
  if (text.includes("cau giay")) return "Cầu Giấy";
  if (text.includes("dong anh")) return "Đông Anh";
  if (text.includes("me linh")) return "Mê Linh";
  if (text.includes("gia lam") || text.includes("bat trang")) return "Gia Lâm";
  if (text.includes("soc son")) return "Sóc Sơn";
  if (text.includes("quoc oai") || text.includes("thach that")) return "Phía Tây Hà Nội";
  if (text.includes("phu xuyen")) return "Phú Xuyên";
  if (text.includes("thanh oai")) return "Thanh Oai";
  if (text.includes("ha dong")) return "Hà Đông";
  if (text.includes("son tay")) return "Sơn Tây";
  return "Hà Nội";
}

function getInterestScore(place, selectedIds) {
  const text = normalize(`${place.name} ${place.category} ${place.address} ${place.tags.join(" ")} ${place.description}`);
  let score = 0;

  selectedIds.forEach((id) => {
    if (id === "history") {
      if (place.category === "Lịch sử" || place.tags.includes("Di tích quốc gia đặc biệt")) score += 6;
      if (text.includes("lich su") || text.includes("di tich")) score += 4;
    }
    if (id === "spiritual") {
      if (place.category === "Đền/ Chùa") score += 6;
      if (text.includes("tam linh") || text.includes("phat giao")) score += 4;
    }
    if (id === "museum") {
      if (place.category === "Bảo tàng") score += 7;
    }
    if (id === "photo") {
      if (text.includes("check-in") || text.includes("anh dep") || place.category === "Làng nghề") score += 5;
    }
    if (id === "family") {
      if (text.includes("gia dinh") || place.category === "Làng nghề") score += 5;
    }
    if (id === "free") {
      if (place.price === 0) score += 7;
    }
    if (id === "short") {
      const minutes = Number.parseInt(place.tip, 10) || 60;
      if (minutes <= 45) score += 6;
    }
    if (id === "deep") {
      const minutes = Number.parseInt(place.tip, 10) || 60;
      if (minutes >= 90) score += 5;
    }
    if (id === "craft") {
      if (place.category === "Làng nghề") score += 8;
      if (text.includes("lang nghe") || text.includes("thu cong")) score += 4;
    }
    if (id === "old-house") {
      if (place.category === "Nhà cổ") score += 8;
      if (text.includes("nha co") || text.includes("pho co")) score += 4;
    }
  });

  score += Math.max(0, place.rating - 4) * 1.5;
  return score;
}

function buildDiverseMatchRoute() {
  const selectedIds = Array.from(featureState.selectedInterests);
  
  let candidates = places
    .map((place) => ({
      place,
      baseScore: getInterestScore(place, selectedIds),
      area: getPlaceArea(place)
    }))
    .filter((item) => item.baseScore > 0);

  if (!candidates.length) return [];

  const chosen = [];
  const usedCategories = new Map();
  const usedAreas = new Map();

  candidates.sort((a, b) => b.baseScore - a.baseScore);
  const first = candidates.shift();
  chosen.push(first.place);
  usedCategories.set(first.place.category, 1);
  usedAreas.set(first.area, 1);

  while (chosen.length < 5 && candidates.length) {
    let bestIndex = -1;
    let bestValue = -Infinity;
    const lastChosenPlace = chosen[chosen.length - 1];

    for (let i = 0; i < candidates.length; i++) {
      const item = candidates[i];
      const categoryCount = usedCategories.get(item.place.category) || 0;
      const areaCount = usedAreas.get(item.area) || 0;

      let penalty = categoryCount * 3.0;

      const dx = lastChosenPlace.lat - item.place.lat;
      const dy = lastChosenPlace.lng - item.place.lng;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const distanceBonus = distance < 0.1 ? 2.5 : 0;
      const areaBonus = item.area === getPlaceArea(lastChosenPlace) ? 1.5 : 0;

      const value = item.baseScore + distanceBonus + areaBonus - penalty;

      if (value > bestValue) {
        bestValue = value;
        bestIndex = i;
      }
    }

    if (bestIndex !== -1) {
      const selected = candidates.splice(bestIndex, 1)[0];
      chosen.push(selected.place);
      usedCategories.set(selected.place.category, (usedCategories.get(selected.place.category) || 0) + 1);
      usedAreas.set(selected.area, (usedAreas.get(selected.area) || 0) + 1);
    } else {
      break;
    }
  }

  return chosen;
}

function renderMatchResult(force) {
  if (!force) {
    return `<div class="empty-feature">Chưa có lịch trình. Hãy chọn sở thích của bạn.</div>`;
  }
  if (featureState.selectedInterests.size < 2) {
    return `<div class="empty-feature">Hãy chọn ít nhất 2 sở thích để HERIGO tạo lịch trình phù hợp hơn.</div>`;
  }

  const chosen = buildDiverseMatchRoute();
  if (!chosen.length) {
    return `<div class="empty-feature">Chưa tìm được lịch trình phù hợp. Hãy thử chọn thêm sở thích khác.</div>`;
  }

  const times = ["08:30", "10:30", "13:00", "15:00", "16:30"];

  return `
    <div class="feature-card">
      <h3>Lịch trình di sản tổng hợp mới</h3>
      <p>Hệ thống tự động cân đối lộ trình giữa nội đô và vùng phụ cận nhằm đảm bảo tính đa dạng văn hóa.</p>
      <div style="height:12px"></div>
      <div class="timeline">
        ${chosen.map((place, index) => `
          <div class="timeline-item">
            <div class="timeline-time">${times[index] || "17:00"}</div>
            <div>
              <strong>${place.name}</strong>
              <p>${place.description}</p>
              <div class="feature-card-meta">
                <span class="pill">${place.category}</span>
                <span class="pill sage">${getPlaceArea(place)}</span>
                <span class="pill">${currency(place.price)}</span>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
      <div style="height:12px"></div>
      <button class="feature-button" id="fitMatchRoute">Xem tuyến trên bản đồ</button>
    </div>
  `;
}

function showConfirm(title, message, onConfirm) {
  const box = document.createElement("div");
  box.className = "ticket-modal";
  box.innerHTML = `
    <h2>${escapeHtml(title)}</h2>
    <p class="muted">${escapeHtml(message)}</p>
    <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:18px;flex-wrap:wrap">
      <button class="feature-button secondary" id="confirmCancel">Đóng</button>
      <button class="feature-button" id="confirmOk">Xác nhận</button>
    </div>
  `;
  openModal(box);
  $("#confirmCancel").addEventListener("click", closeModal);
  $("#confirmOk").addEventListener("click", () => {
    closeModal();
    if (typeof onConfirm === "function") onConfirm();
  });
}

document.querySelectorAll(".feature-tab").forEach((tab) => {
  tab.addEventListener("click", () => openFeature(tab.dataset.feature));
});

$("#featureClose")?.addEventListener("click", () => openFeature("map"));

document.addEventListener("click", (event) => {
  if (event.target?.dataset?.aiPlace) {
    const place = places.find((item) => item.id === event.target.dataset.aiPlace);
    if (place) selectPlace(place, true, true);
  }
  if (event.target?.dataset?.popupPlace) {
    const place = places.find((item) => item.id === event.target.dataset.popupPlace);
    if (place) selectPlace(place, false, true);
  }
  if (event.target?.id === "fitMatchRoute") {
    const routePlaces = buildDiverseMatchRoute();
    if (routePlaces.length) {
      const bounds = L.latLngBounds(routePlaces.map((place) => [place.lat, place.lng]));
      map.fitBounds(bounds.pad(0.2), { animate: true });
      openFeature("map");
    }
  }
});

if ($("#btnResetMap")) $("#btnResetMap").addEventListener("click", fitVisiblePlaces);
