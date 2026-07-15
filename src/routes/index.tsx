import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FolderTree, Search, Sparkles, Users, Wand2, ShieldCheck, ArrowUp, GraduationCap,
  Mail, Calendar, BookOpen, Target, Lightbulb, CheckCircle2, ChevronDown, Award,
  Palette, BrainCircuit, FileText, Image as ImageIcon, Video, LinkIcon, Quote, Heart, Flower2,
} from "lucide-react";

import studentPhoto from "@/assets/student.jpg.asset.json";
import bai1Img1 from "@/assets/bai1/img1.png.asset.json";
import bai1Img2 from "@/assets/bai1/img2.png.asset.json";
import bai1Img3 from "@/assets/bai1/img3.png.asset.json";
import bai1Img4 from "@/assets/bai1/img4.png.asset.json";
import bai1Img5 from "@/assets/bai1/img5.png.asset.json";
import bai1Img6 from "@/assets/bai1/img6.png.asset.json";
import bai1Img7 from "@/assets/bai1/img7.png.asset.json";
import bai1Img8 from "@/assets/bai1/img8.png.asset.json";
import bai1Img9 from "@/assets/bai1/img9.png.asset.json";
import bai1Img10 from "@/assets/bai1/img10.png.asset.json";
import bai1Img11 from "@/assets/bai1/img11.png.asset.json";
import bai1Img12 from "@/assets/bai1/img12.png.asset.json";
import bai1Img13 from "@/assets/bai1/img13.png.asset.json";
import bai1Img14 from "@/assets/bai1/img14.png.asset.json";
import bai1Img15 from "@/assets/bai1/img15.png.asset.json";
import bai1Report from "@/assets/bai1/report.docx.asset.json";
import bai3Img1 from "@/assets/bai3/img1.png.asset.json";
import bai3Img2 from "@/assets/bai3/img2.png.asset.json";
import bai3Img3 from "@/assets/bai3/img3.png.asset.json";
import bai3Img4 from "@/assets/bai3/img4.png.asset.json";
import bai3Img5 from "@/assets/bai3/img5.png.asset.json";
import bai3Img6 from "@/assets/bai3/img6.png.asset.json";
import bai3Img7 from "@/assets/bai3/img7.png.asset.json";
import bai3Img8 from "@/assets/bai3/img8.png.asset.json";
import bai3Img9 from "@/assets/bai3/img9.png.asset.json";
import bai3Img10 from "@/assets/bai3/img10.png.asset.json";
import bai3Img11 from "@/assets/bai3/img11.png.asset.json";
import bai3Img12 from "@/assets/bai3/img12.png.asset.json";
import bai3Img13 from "@/assets/bai3/img13.png.asset.json";
import bai3Img14 from "@/assets/bai3/img14.png.asset.json";
import bai3Img15 from "@/assets/bai3/img15.png.asset.json";
import bai3Img16 from "@/assets/bai3/img16.png.asset.json";
import bai3Img17 from "@/assets/bai3/img17.png.asset.json";
import bai3Img18 from "@/assets/bai3/img18.png.asset.json";
import bai3Img19 from "@/assets/bai3/img19.png.asset.json";
import bai3Report from "@/assets/bai3/report.docx.asset.json";
import bai4Img1 from "@/assets/bai4/img1.png.asset.json";
import bai4Img2 from "@/assets/bai4/img2.png.asset.json";
import bai4Img3 from "@/assets/bai4/img3.png.asset.json";
import bai4Img4 from "@/assets/bai4/img4.png.asset.json";
import bai4Img5 from "@/assets/bai4/img5.png.asset.json";
import bai4Report from "@/assets/bai4/report.pdf.asset.json";
import bai5Img1 from "@/assets/bai5/img1.png.asset.json";
import bai5Img2 from "@/assets/bai5/img2.png.asset.json";
import bai5Img3 from "@/assets/bai5/img3.png.asset.json";
import bai5Img4 from "@/assets/bai5/img4.png.asset.json";
import bai5Img5 from "@/assets/bai5/img5.png.asset.json";
import bai5Img6 from "@/assets/bai5/img6.png.asset.json";
import bai5Report from "@/assets/bai5/report.docx.asset.json";
import bai6Img1 from "@/assets/bai6/img1.png.asset.json";
import bai6Report from "@/assets/bai6/report.docx.asset.json";
import bai2Img1 from "@/assets/bai2/img01.png.asset.json";
import bai2Img2 from "@/assets/bai2/img02.png.asset.json";
import bai2Img3 from "@/assets/bai2/img03.png.asset.json";
import bai2Img4 from "@/assets/bai2/img04.png.asset.json";
import bai2Img5 from "@/assets/bai2/img05.png.asset.json";
import bai2Img6 from "@/assets/bai2/img06.png.asset.json";
import bai2Img7 from "@/assets/bai2/img07.png.asset.json";
import bai2Img8 from "@/assets/bai2/img08.png.asset.json";
import bai2Img9 from "@/assets/bai2/img09.png.asset.json";
import bai2Img10 from "@/assets/bai2/img10.png.asset.json";
import bai2Report from "@/assets/bai2/report.zip.asset.json";

const BAI1_IMAGES = [
  bai1Img1, bai1Img2, bai1Img3, bai1Img4, bai1Img5, bai1Img6, bai1Img7, bai1Img8,
  bai1Img9, bai1Img10, bai1Img11, bai1Img12, bai1Img13, bai1Img14, bai1Img15,
].map((a) => a.url);

const BAI3_IMAGES = [
  bai3Img1, bai3Img2, bai3Img3, bai3Img4, bai3Img5, bai3Img6, bai3Img7, bai3Img8, bai3Img9, bai3Img10,
  bai3Img11, bai3Img12, bai3Img13, bai3Img14, bai3Img15, bai3Img16, bai3Img17, bai3Img18, bai3Img19,
].map((a) => a.url);

const BAI2_IMAGES = [
  bai2Img1, bai2Img2, bai2Img3, bai2Img4, bai2Img5,
  bai2Img6, bai2Img7, bai2Img8, bai2Img9, bai2Img10,
].map((a) => a.url);

const BAI4_IMAGES = [bai4Img1, bai4Img2, bai4Img3, bai4Img4, bai4Img5].map((a) => a.url);

const BAI5_IMAGES = [bai5Img1, bai5Img2, bai5Img3, bai5Img4, bai5Img5, bai5Img6].map((a) => a.url);
const BAI6_IMAGES = [bai6Img1].map((a) => a.url);

const EVIDENCE_FILES: Record<string, { url: string; name: string }> = {
  p1: { url: bai1Report.url, name: "Bài 1 – Báo cáo thao tác Windows.docx" },
  p2: { url: bai2Report.url, name: "Bài 2 – Nguồn học thuật Logistics (ZIP)" },
  p3: { url: bai3Report.url, name: "Bài 3 – Báo cáo Prompt Engineering.docx" },
  p4: { url: bai4Report.url, name: "Bài 4 – Báo cáo hợp tác trực tuyến.pdf" },
  p5: { url: bai5Report.url, name: "Bài 5 – Báo cáo AI tạo sinh.docx" },
  p6: { url: bai6Report.url, name: "Bài 6 – Báo cáo sử dụng AI có trách nhiệm.docx" },
};




export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

/* -------------------- Data -------------------- */

const NAV = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "overview", label: "Hành trình" },
  { id: "projects", label: "Dự án" },
  { id: "skills", label: "Kỹ năng" },
  { id: "conclusion", label: "Tổng kết" },
];

const TASKS = [
  { icon: FolderTree, title: "Quản lý tệp & thư mục", short: "Tổ chức dữ liệu học tập khoa học, đặt tên nhất quán." },
  { icon: Search, title: "Tìm kiếm học thuật", short: "Sử dụng toán tử nâng cao và đánh giá độ tin cậy nguồn." },
  { icon: Sparkles, title: "Viết Prompt hiệu quả", short: "Thiết kế prompt có vai trò, bối cảnh, tiêu chí đầu ra." },
  { icon: Users, title: "Hợp tác trực tuyến", short: "Quản lý dự án nhóm bằng công cụ số minh bạch." },
  { icon: Wand2, title: "Sáng tạo nội dung với AI", short: "Ứng dụng AI tạo sinh để sản xuất sản phẩm số." },
  { icon: ShieldCheck, title: "AI có trách nhiệm", short: "Xây dựng bộ nguyên tắc đạo đức khi sử dụng AI." },
];

const PROJECTS = [
  {
    id: "p1",
    tag: "Nhiệm vụ 01",
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục trên Windows",
    icon: FolderTree,
    progress: 100,
    tags: ["File Explorer", "Copy · Cut · Paste", "Recycle Bin"],
    goal: "Thành thạo 12 thao tác nền tảng trên File Explorer (Windows): tạo – đổi tên – sao chép – di chuyển – xóa – khôi phục tệp/thư mục, đặt nền cho việc quản lý dữ liệu học tập cá nhân.",
    process: [
      "Mở File Explorer bằng tổ hợp phím Windows + E, truy cập ổ đĩa không phải hệ thống (ổ D: hoặc E:); nếu chỉ có ổ C: thì vào thư mục Documents.",
      "Chuột phải vào khoảng trống → New → Folder, đặt tên thư mục là 'ThucHanh_HoangKhanhThu' và Enter.",
      "Vào thư mục vừa tạo, chuột phải → New → Text Document, đặt tên 'GhiChu.txt'.",
      "Chuột phải vào 'GhiChu.txt' → Rename, đổi tên thành 'GhiChuQuanTrong.txt' (rèn thao tác đổi tên đúng chuẩn).",
      "Tạo thư mục con 'TaiLieu' bên trong 'ThucHanh_HoangKhanhThu'.",
      "Copy & Paste: chọn 'GhiChuQuanTrong.txt' → Ctrl+C, mở 'TaiLieu' → Ctrl+V để có bản sao trong thư mục con.",
      "Cut & Paste: quay lại thư mục cha, chọn tệp → Ctrl+X, dán vào một thư mục khác để di chuyển tệp.",
      "Xóa mềm: chọn tệp → phím Delete để đưa vào Recycle Bin; xóa vĩnh viễn: Shift + Delete (có cảnh báo).",
      "Khôi phục: mở Recycle Bin trên màn hình nền → chuột phải vào 'GhiChuQuanTrong.txt' → Restore để tệp quay về vị trí cũ.",
    ],
    tools: ["Windows File Explorer", "Recycle Bin", "Phím tắt Ctrl+C/V/X, Shift+Del", "Google Drive (đồng bộ song song)"],
    evidence: "15 ảnh chụp màn hình lần lượt cho từng bước: mở File Explorer, tạo thư mục, tạo/đổi tên tệp, copy–cut–paste, xóa – xóa vĩnh viễn và khôi phục từ Recycle Bin.",
    analysis: [
      "Đặt tên thư mục theo cấu trúc 'ThucHanh_<Họ tên>' giúp cá nhân hóa và tránh trùng lặp khi chia sẻ dữ liệu trong nhóm.",
      "Phân biệt rõ Delete (có Recycle Bin bảo vệ) với Shift + Delete (bỏ qua Recycle Bin) là kỹ năng phòng tránh mất dữ liệu vô ý.",
      "Copy tạo bản sao, Cut di chuyển – hiểu bản chất giúp tránh lỗi 'mất tệp gốc' khi chuyển tài liệu học tập.",
      "Recycle Bin đóng vai trò 'lớp an toàn' – nên kiểm tra trước khi làm sạch máy để không xóa nhầm bài tập quan trọng.",
    ],
    lesson: [
      "Quản lý tệp tin là kỹ năng số nền tảng của mọi công dân số – làm càng sớm, càng chuẩn thì càng tiết kiệm thời gian về sau.",
      "Mỗi thao tác nhỏ (đổi tên, di chuyển, xóa) đều gắn với một nguyên tắc lớn: nhất quán – có thể phục hồi – có thể chia sẻ.",
    ],
  },
  {
    id: "p2",
    tag: "Nhiệm vụ 02",
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật về FDI & Logistics",
    icon: Search,
    progress: 100,
    tags: ["Google Scholar", "Toán tử tìm kiếm", "FDI · Logistics", "Peer-review"],
    goal: "Chọn chủ đề 'Vai trò của hạ tầng logistics trong thu hút FDI vào Việt Nam', sử dụng ≥ 4 toán tử tìm kiếm nâng cao và đánh giá 4 nguồn học thuật theo bộ tiêu chí thống nhất.",
    process: [
      "Xác định từ khóa lõi: 'FDI', 'logistics infrastructure', 'Vietnam', 'transport infrastructure'.",
      "Áp dụng toán tử nâng cao: intitle:\"FDI\" logistics Vietnam · filetype:pdf · site:scholar.google.com · \"foreign direct investment\" AND logistics · after:2018 · -blog để loại nguồn phổ thông.",
      "So sánh kết quả giữa Google Search, Google Scholar và cổng dữ liệu của các trường Đại học (VNU HCM, Quy Nhơn University, UEL).",
      "Chọn 4 nguồn tiêu biểu, đối chiếu theo 6 tiêu chí: loại nguồn – tác giả/cơ quan xuất bản – phương pháp nghiên cứu – trích dẫn chuẩn APA – tính cập nhật – xếp hạng độ tin cậy.",
    ],
    tools: ["Google Scholar", "Google Search (toán tử nâng cao)", "Cổng dữ liệu VNU, UEL, Quy Nhơn Univ.", "Zotero (quản lý trích dẫn)"],
    evidence: "Ảnh chụp truy vấn nâng cao trên Google Scholar và bảng đánh giá 4 nguồn học thuật kèm trích dẫn APA đầy đủ.",
    analysis: [
      "Bài báo 'The role of logistics infrastructure to attract FDI in Vietnam' (Hoàng Mạnh Hùng & cs., Quy Nhơn Univ., 2019) – dữ liệu bảng 2005–2016, độ tin cậy cao nhưng đã cần cập nhật.",
      "Nghiên cứu 'Impact of FDI on Logistics Transport Development – HCM Case' (Vũ Thị Kim Hạnh, UEL, 2021) – hồi quy đa biến, dữ liệu mới hơn, mang tính địa phương hóa.",
      "'The Role of Transport Infrastructure in Attracting FDI' (Nguyễn T.D. et al., Tạp chí Kinh tế & Ngân hàng châu Á, 2022) – mô hình GMM, dữ liệu tỉnh/thành, độ tin cậy cao.",
      "'Integrating FDI, institutions, ICT and logistics' (T. D. Lưu, VNU HCM) – phương pháp fsQCA, cách tiếp cận đa chiều, phù hợp bổ sung góc nhìn thể chế – công nghệ.",
    ],
    lesson: [
      "Toán tử tìm kiếm là 'ngôn ngữ' để trò chuyện với công cụ – biết dùng đúng sẽ tiết kiệm hàng giờ đọc thô.",
      "Một nguồn học thuật đáng tin phải hội đủ: tác giả – cơ quan xuất bản – phương pháp – tính cập nhật, không chỉ dựa vào 'trông có vẻ chuyên nghiệp'.",
    ],
  },
  {
    id: "p3",
    tag: "Nhiệm vụ 03",
    title: "Bài tập 3 – Viết Prompt hiệu quả với chủ đề 'Bẫy thu nhập trung bình'",
    icon: Sparkles,
    progress: 100,
    tags: ["Prompt Engineering", "Role Prompting", "Chain-of-Thought", "Few-shot"],
    goal: "Thiết kế 3 cấp độ prompt (cơ bản → cải tiến → nâng cao) cho cùng một khái niệm kinh tế học 'Bẫy thu nhập trung bình' và phân tích lý do prompt càng cấu trúc, đầu ra AI càng chất lượng.",
    process: [
      "Tác vụ 1 – Tóm tắt văn bản kinh tế vĩ mô: đưa AI đoạn tin về thắt chặt tiền tệ của Fed và yêu cầu tóm tắt 3 gạch đầu dòng, giữ nguyên số liệu.",
      "Tác vụ 2a – Prompt cơ bản: 'Giải thích khái niệm Bẫy thu nhập trung bình?' → AI trả lời chung chung, thiếu cấu trúc.",
      "Tác vụ 2b – Prompt cải tiến: yêu cầu tổng quát – súc tích – dễ hiểu, có 3 phần: định nghĩa, nguyên nhân cốt lõi, biểu hiện chính.",
      "Tác vụ 2c – Prompt nâng cao: gán vai trò 'Giáo sư Kinh tế học Phát triển', dùng chain-of-thought (chuỗi nguyên nhân) + phép so sánh sinh học/đời sống + trích chuẩn Ngân hàng Thế giới + few-shot ví dụ nước cụ thể.",
      "Chạy đối chiếu 3 prompt trên cùng mô hình, ghi nhận đầu ra và chấm điểm theo 5 tiêu chí: rõ ràng – học thuật – có ví dụ – dễ ứng dụng – dễ tái lập.",
    ],
    tools: ["ChatGPT", "Gemini", "Claude", "Bảng so sánh Excel/Sheets"],
    evidence: "Ảnh chụp 3 phiên bản prompt & đầu ra AI tương ứng, kèm bảng chấm điểm 5⭐ cho prompt nâng cao.",
    analysis: [
      "Sự mơ hồ vs sự cụ thể: prompt cơ bản để lại quá nhiều 'khoảng trống tự do', buộc AI phải tự đoán ý định người dùng.",
      "Role prompting ('Bạn là Giáo sư Kinh tế học Phát triển') kích hoạt tầng từ vựng chuyên ngành, đầu ra mang sắc thái học thuật rõ nét.",
      "Cấu trúc hóa (bullet, tiêu đề, số bước) ngăn AI 'viết tràn dòng', giúp nội dung dễ quét mắt và dễ chấm điểm.",
      "Chain-of-thought yêu cầu AI trình bày logic từng bước – rất hữu ích với các khái niệm nhiều tầng nguyên nhân như bẫy thu nhập trung bình.",
    ],
    lesson: [
      "Nguyên tắc 'Ràng buộc & Loại trừ': ngoài việc nói AI cần làm gì, hãy nêu rõ điều KHÔNG được làm (không suy diễn, không ví dụ quá phức tạp).",
      "Module hóa câu lệnh bằng dấu phân tách [ ], --- , \" \" giúp AI phân biệt rõ đâu là chỉ dẫn, đâu là dữ liệu thô.",
      "Cung cấp đối tượng thụ hưởng (sinh viên năm nhất vs nghiên cứu sinh) là 'công tắc' điều chỉnh độ khó của câu trả lời.",
    ],
  },
  {
    id: "p4",
    tag: "Nhiệm vụ 04",
    title: "Bài tập 4 – Hợp tác trực tuyến làm Infographic về Liên minh giai cấp, tầng lớp ở Việt Nam",
    icon: Users,
    progress: 100,
    tags: ["Trello", "Google Docs", "Google Drive", "Google Meet", "Canva"],
    goal: "Trong 1 tuần, phối hợp nhóm tạo một infographic về 'Tính tất yếu và nội dung liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH ở Việt Nam' – rèn kỹ năng phân công, cộng tác tài liệu và kiểm soát phiên bản.",
    process: [
      "Chọn bộ 5 công cụ: Trello (quản lý dự án) · Google Docs (soạn thảo) · Google Drive (lưu trữ) · Google Meet (họp) · Canva (thiết kế infographic).",
      "Trello: tạo bảng 3 cột 'Checklist – Tạo file – Chỉnh sửa & hoàn thiện', gán người phụ trách + deadline + nhãn ưu tiên cho từng thẻ.",
      "Google Docs: chia mục theo thành viên, bật Suggesting Mode để không sửa trực tiếp bản gốc, dùng Comment để thảo luận và gán nhiệm vụ.",
      "Google Meet: 1 buổi họp chính thức + 1 buổi điểm danh nhanh 10–15 phút mỗi ngày để cập nhật tiến độ.",
      "Canva: cùng thiết kế infographic từ template, xuất PDF/PNG; lưu tất cả bản dựng lên Google Drive theo thư mục phân loại.",
    ],
    tools: ["Trello ⭐⭐⭐⭐ (4/5)", "Google Docs ⭐⭐⭐⭐⭐ (5/5)", "Google Drive ⭐⭐⭐⭐ (4.5/5)", "Google Meet ⭐⭐⭐⭐ (4/5)", "Canva ⭐⭐⭐⭐ (4/5)"],
    evidence: "Ảnh chụp bảng Trello 3 cột, tài liệu Google Docs với Suggesting Mode, infographic Canva bản cuối và lịch họp Google Meet.",
    analysis: [
      "Thách thức 1 – Phân công & theo dõi: ban đầu vài thành viên chưa quen Trello, thẻ không cập nhật đúng hạn → khắc phục bằng cách thống nhất quy tắc 'mỗi thẻ có 1 người phụ trách + deadline + trạng thái' ngay trong buổi họp Meet đầu tiên.",
      "Thách thức 2 – Soạn thảo chung: 2 người vô tình sửa cùng một đoạn trên Google Docs gây mất dữ liệu → khắc phục bằng 3 quy tắc: mỗi người 1 mục riêng, bật Suggesting Mode, dùng Comment để trao đổi.",
      "Trello mạnh về tính linh hoạt, ứng dụng di động, nhưng báo cáo cơ bản – phù hợp dự án quy mô nhỏ.",
      "Canva dễ dùng, thư viện phong phú, nhưng dễ trùng ý tưởng do template chung – nhóm chủ động tùy biến màu và bố cục.",
    ],
    lesson: [
      "Công cụ chỉ phát huy hiệu quả khi nhóm THỐNG NHẤT QUY TẮC dùng nó ngay từ buổi họp đầu tiên.",
      "Kiểm soát phiên bản (Suggesting Mode + Comment) quan trọng không kém việc viết nội dung – nó bảo vệ công sức của cả nhóm.",
      "Kết hợp 'họp chính thức + điểm danh nhanh' giữ nhịp dự án tốt hơn nhiều so với chỉ nhắn tin không đồng bộ.",
    ],
  },
  {
    id: "p5",
    tag: "Nhiệm vụ 05",
    title: "Bài tập 5 – AI tạo sinh hỗ trợ bài thuyết trình 'Kho hàng thông minh IoT + AI'",
    icon: Wand2,
    progress: 100,
    tags: ["ChatGPT", "DALL·E", "Canva AI", "IoT · Logistics"],
    goal: "Ứng dụng ba công cụ AI tạo sinh (ChatGPT · DALL·E · Canva AI) để sản xuất bài thuyết trình 7 slide về 'Hệ thống tự động hóa quản lý kho hàng thông minh dựa trên IoT và AI'.",
    process: [
      "ChatGPT – nội dung: prompt 'Viết nội dung gọn gàng, chia theo 7 slide… giọng văn kỹ thuật nhưng dễ hiểu, phù hợp bài thuyết trình giải pháp công nghệ.'",
      "Rút gọn câu văn dài của AI thành bullet 3–5 mục, bổ sung số liệu thực tế (độ chính xác 99,9%, giảm 40% thời gian vận chuyển) để tăng tính thuyết phục.",
      "DALL·E – hình ảnh: prompt mô tả 'kho hàng thông minh, robot AGV, kệ đa tầng có đèn LED hologram, cảm biến laser mạng nơ-ron, tông xanh dương – cyan – bạc'.",
      "Hậu kỳ ảnh trong Canva: cắt cúp tập trung robot AGV, tăng tương phản, đồng bộ tông cyan; tách icon hộp hàng & sóng IoT để tái sử dụng làm điểm nhấn slide.",
      "Canva AI – bố cục: đề xuất layout công nghệ hiện đại, phối màu, biểu tượng và căn chỉnh; tổng hợp 7 slide cuối cùng và xuất PDF thuyết trình.",
    ],
    tools: ["ChatGPT (kịch bản 7 slide)", "DALL·E (hình minh họa)", "Canva AI (bố cục & thiết kế)"],
    evidence: "5 ảnh AI (4 ảnh nội dung ChatGPT + 1 ảnh minh họa DALL·E) và bản PDF 7 slide hoàn thiện trên Canva.",
    analysis: [
      "ChatGPT tạo được khung 7 slide logic (giới thiệu – thực trạng – giải pháp – kiến trúc – lợi ích – định hướng) nhưng cần biên tập ngôn ngữ và bổ sung số liệu để tránh cảm giác 'AI viết'.",
      "DALL·E tạo hình minh họa rất trực quan, tuy nhiên bản gốc có nhiều chi tiết nhiễu ở rìa – phải hậu kỳ trong Canva mới đạt tính chuyên nghiệp.",
      "Canva AI mạnh ở khâu bố cục và phối màu, giúp giữ bộ nhận diện đồng nhất giữa các slide.",
      "AI tăng tốc mạnh mẽ khâu ý tưởng và tài nguyên, nhưng KHÔNG thay thế được quyết định biên tập của con người.",
    ],
    lesson: [
      "AI là 'bộ khuếch đại năng lực', không phải người thay ta làm bài – vai trò tổng biên tập luôn phải là con người.",
      "Một sản phẩm số chất lượng cần 3 lớp: (1) nội dung do AI phác thảo, (2) số liệu thực do người dùng bổ sung, (3) thiết kế do người dùng tinh chỉnh.",
    ],
  },
  {
    id: "p6",
    tag: "Nhiệm vụ 06",
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập & nghiên cứu",
    icon: ShieldCheck,
    progress: 100,
    tags: ["Đạo đức AI", "Chính sách VNU", "Liêm chính học thuật"],
    goal: "Nghiên cứu chính sách AI của các trường đại học (VNU, ĐH Bách khoa Hà Nội, ĐH Kinh tế Quốc dân), rút ra bài học và xây dựng bộ 7 nguyên tắc cá nhân dùng AI có trách nhiệm.",
    process: [
      "Nghiên cứu định hướng của VNU: từ năm học 2025–2026 triển khai học phần 'Công nghệ số và Trí tuệ nhân tạo' cho sinh viên năm nhất, nhấn mạnh trung thực – minh bạch – liêm chính học thuật.",
      "So sánh với ĐH Bách khoa Hà Nội (AI theo hướng kỹ thuật – nghiên cứu chuyên sâu) và ĐH Kinh tế Quốc dân (AI hỗ trợ phân tích dữ liệu kinh tế).",
      "Thực hiện nhiệm vụ minh chứng: thuyết trình 'Hệ thống tự động hóa quản lý kho hàng thông minh IoT + AI' với sự hỗ trợ của ChatGPT, DALL·E, Canva AI – ghi rõ vai trò AI ở từng khâu.",
      "Ghi lại 6 prompt đã dùng, mô tả cách chỉnh sửa và tích hợp đầu ra AI vào bài thuyết trình cuối cùng.",
      "Rút bộ 7 nguyên tắc cá nhân về AI có trách nhiệm và tự đánh giá theo từng nguyên tắc.",
    ],
    tools: ["Tài liệu VNU, HUST, NEU", "ChatGPT / DALL·E / Canva AI", "Khung UNESCO AI Ethics"],
    evidence: "Bảng đối sánh chính sách AI của 3 trường, danh sách 6 prompt kèm phân tích đầu ra và bộ 7 nguyên tắc cá nhân dán ở góc học tập.",
    analysis: [
      "VNU khuyến khích dùng AI trong học tập nhưng yêu cầu trung thực, minh bạch và liêm chính học thuật – đây là ràng buộc mềm nhưng có tính bắt buộc trong đánh giá.",
      "Mỗi trường triển khai AI khác nhau theo thế mạnh chuyên môn – sinh viên phải chủ động đọc quy định của trường mình chứ không thể mặc định.",
      "Nếu được hướng dẫn đúng, AI giúp sinh viên nâng cao tự học, tư duy phản biện, giải quyết vấn đề; nếu lạm dụng sẽ làm suy giảm năng lực cá nhân.",
      "Người học vẫn phải giữ vai trò chủ động: AI là công cụ hỗ trợ – KHÔNG phải người thay mình học.",
    ],
    lesson: [
      "AI có trách nhiệm = biết dùng đúng lúc + biết công khai + biết chịu trách nhiệm cuối cùng.",
      "Bộ nguyên tắc cá nhân cần được cập nhật mỗi kỳ, vì công cụ AI và quy định của trường đều thay đổi rất nhanh.",
    ],
  },
];

const SEARCH_SOURCES = [
  { src: "The role of logistics infrastructure to attract FDI in Vietnam", author: "Hoàng Mạnh Hùng & cs. – Quy Nhơn Univ.", year: 2019, trust: "Cao", reason: "Bài báo khoa học, phân tích dữ liệu bảng 2005–2016, mô hình panel", limit: "Dữ liệu đã cần cập nhật thêm giai đoạn sau 2016" },
  { src: "Impact of FDI on Logistics Transport Development: HCM Case", author: "Vũ Thị Kim Hạnh – UEL", year: 2021, trust: "Cao", reason: "Khoa học, hồi quy đa biến, cập nhật tương đối mới", limit: "Phạm vi chỉ TP.HCM, khó khái quát cả nước" },
  { src: "The Role of Transport Infrastructure in Attracting FDI in Vietnam", author: "Nguyễn T.D. et al. – Tạp chí Kinh tế & Ngân hàng châu Á", year: 2022, trust: "Cao", reason: "Mô hình GMM, dữ liệu tỉnh/thành, khá mới", limit: "Truy cập một phần trả phí" },
  { src: "Integrating FDI, institutions, ICT and logistics", author: "T. D. Lưu – VNU HCM", year: 2023, trust: "Cao", reason: "Khoa học quốc tế, phương pháp fsQCA, tiếp cận đa chiều", limit: "Kỹ thuật fsQCA khó với người mới, cần đọc thêm phương pháp luận" },
];

const PROMPT_COMPARE = [
  { crit: "Chủ đề áp dụng", before: "Giải thích khái niệm 'Bẫy thu nhập trung bình?'", after: "Vai trò: Giáo sư Kinh tế học Phát triển – phân tích 'Bẫy thu nhập trung bình' theo 4 mục" },
  { crit: "Định hình vai trò", before: "Không chỉ định", after: "'Bạn là Giáo sư Kinh tế học Phát triển' → kích hoạt từ vựng học thuật" },
  { crit: "Cấu trúc đầu ra", before: "1 đoạn văn ngắn, mơ hồ", after: "Định nghĩa chuẩn WB + phép so sánh sinh học + chuỗi nguyên nhân + ví dụ nước cụ thể" },
  { crit: "Chain-of-thought", before: "Không yêu cầu", after: "'Giải thích logic từng bước dẫn dắt quốc gia rơi vào bẫy'" },
  { crit: "Ràng buộc & Loại trừ", before: "Không nêu", after: "'Không tự ý suy diễn ngoài văn bản', 'Tránh ví dụ quá phức tạp'" },
  { crit: "Đánh giá kết quả", before: "1⭐ – trả lời chung chung, dễ trùng bách khoa", after: "5⭐ – chuyên sâu, chuẩn học thuật, có lời giải thích logic bám thực tế" },
];


const AI_PRINCIPLES = [
  "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
  "Luôn kiểm chứng thông tin do AI cung cấp từ ít nhất 2 nguồn độc lập.",
  "Ghi rõ khi có sử dụng AI trong quá trình học tập, nghiên cứu.",
  "Không nhập dữ liệu cá nhân hoặc thông tin nhạy cảm vào công cụ AI.",
  "Không sao chép nguyên văn nội dung AI khi chưa kiểm tra và chỉnh sửa.",
  "Sử dụng AI để hỗ trợ tư duy, không thay thế tư duy cá nhân.",
  "Chịu trách nhiệm cuối cùng với sản phẩm học tập của bản thân.",
];

const EVIDENCE_ITEMS: Record<string, string[]> = {
  p1: [
    "Thanh Taskbar & thanh tìm kiếm Windows",
    "Cửa sổ File Explorer – PC này",
    "Tạo file văn bản GhiChu.txt trên Desktop",
    "Mở file GhiChu.txt bằng Notepad",
    "Đổi tên file thành GhiChuQuanTrong.txt",
    "Tạo thư mục mới TaiLieu",
    "Menu chuột phải – lệnh Copy tệp tin",
    "Dán (Paste) file vào thư mục TaiLieu",
    "Kết quả: file nằm trong thư mục TaiLieu",
    "Thao tác cắt (Cut) – di chuyển file",
    "Xóa file bằng phím Delete",
    "Mở Recycle Bin – thùng rác Windows",
    "Khôi phục (Restore) file đã xóa",
    "Kiểm tra file khôi phục thành công",
    "Tổng kết các thao tác quản lý tệp tin",
  ],
  p2: Array.from({ length: 10 }, (_, i) => `Minh chứng nguồn học thuật Logistics – Ảnh ${String(i + 1).padStart(2, "0")}`),
  p3: Array.from({ length: 19 }, (_, i) => `Minh chứng Prompt Engineering – Ảnh ${String(i + 1).padStart(2, "0")}`),

  p4: Array.from({ length: 5 }, (_, i) => `Minh chứng hợp tác trực tuyến – Ảnh ${String(i + 1).padStart(2, "0")}`),

  p5: Array.from({ length: 6 }, (_, i) => `Minh chứng AI tạo sinh – Ảnh ${String(i + 1).padStart(2, "0")}`),

  p6: ["Minh chứng sử dụng AI có trách nhiệm – Ảnh 01"],
};
const __END_AI_PRINCIPLES__ = true;
void __END_AI_PRINCIPLES__;



const SKILLS = [
  { name: "Quản lý tệp và dữ liệu số", level: 90, desc: "Tổ chức, đặt tên và sao lưu dữ liệu học tập khoa học.", apply: "Áp dụng trong mọi môn học và dự án cá nhân." },
  { name: "Tìm kiếm thông tin học thuật", level: 88, desc: "Dùng toán tử nâng cao trên Google Scholar, cổng học liệu.", apply: "Viết tiểu luận, làm nghiên cứu khoa học." },
  { name: "Đánh giá độ tin cậy nguồn", level: 85, desc: "Đối chiếu tác giả, năm, cơ quan xuất bản, hạn chế nguồn.", apply: "Đọc báo cáo kinh tế, dữ liệu thương mại quốc tế." },
  { name: "Viết Prompt hiệu quả", level: 92, desc: "Thiết kế prompt có vai trò, bối cảnh, tiêu chí đầu ra.", apply: "Ôn tập, tóm tắt tài liệu, hỗ trợ nghiên cứu." },
  { name: "Làm việc nhóm trực tuyến", level: 87, desc: "Quản lý Kanban, phân công, theo dõi tiến độ.", apply: "Dự án môn học, hoạt động câu lạc bộ." },
  { name: "Sáng tạo nội dung số bằng AI", level: 84, desc: "Sản xuất infographic, video ngắn có kịch bản.", apply: "Bài thuyết trình, truyền thông sự kiện." },
  { name: "Sử dụng AI có trách nhiệm", level: 95, desc: "Áp dụng bộ nguyên tắc cá nhân trong mọi tác vụ.", apply: "Học tập, thi cử, nghiên cứu khoa học." },
  { name: "Tự đánh giá và cải thiện", level: 88, desc: "Nhìn lại quy trình, rút bài học và điều chỉnh.", apply: "Phát triển năng lực học tập suốt đời." },
];


/* -------------------- Component -------------------- */

function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showTop, setShowTop] = useState(false);
  const [openProject, setOpenProject] = useState<string | null>("p1");

  // Reveal on scroll + active nav + back-to-top
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    const sectionIds = NAV.map((n) => n.id);
    const onScroll = () => {
      setShowTop(window.scrollY > 400);
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-bold shadow-soft">HT</span>
            <span className="font-display font-semibold text-blue-deep hidden sm:block">Portfolio · Khánh Thư</span>
          </button>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === n.id
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => scrollTo("about")}
            className="md:hidden px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium"
          >
            Menu
          </button>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-pink-soft blur-3xl opacity-70" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-soft blur-3xl opacity-70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-border text-sm text-blue-deep font-medium mb-6">
              <Sparkles className="w-4 h-4" /> Portfolio kỹ thuật số cá nhân
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-deep leading-tight">
              Portfolio Kỹ thuật số <span className="italic text-primary">cá nhân</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
              Hành trình học tập môn <b>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</b> — lưu trữ, trình bày và
              tự đánh giá quá trình học tập thông qua các sản phẩm số đã hoàn thành.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { id: "about", label: "Giới thiệu" },
                { id: "projects", label: "Dự án học tập" },
                
                { id: "conclusion", label: "Tổng kết" },
              ].map((b) => (
                <button
                  key={b.id}
                  onClick={() => scrollTo(b.id)}
                  className="px-5 py-2.5 rounded-full bg-white border border-border text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
                >
                  {b.label}
                </button>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 6 dự án hoàn thành</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Mục tiêu Xuất sắc</div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary rotate-6 shadow-pink" />
              <div className="absolute inset-0 rounded-[2rem] bg-white border border-border shadow-soft p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center text-primary-foreground text-xl font-bold">HT</div>
                  <BrainCircuit className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Sinh viên</div>
                  <div className="text-2xl font-display font-semibold text-blue-deep mt-1">Hoàng Khánh Thư</div>
                  <div className="text-sm text-muted-foreground mt-1">Khoa Kinh tế Quốc tế · KTQT 11</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[FolderTree, Search, Sparkles, Users, Wand2, ShieldCheck].map((Ic, i) => (
                    <div key={i} className={`aspect-square rounded-xl grid place-items-center ${i % 2 === 0 ? "bg-blue-soft" : "bg-pink-soft"}`}>
                      <Ic className="w-5 h-5 text-blue-deep" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="Giới thiệu" title="About Me" desc="Card cá nhân giới thiệu ngắn gọn về mục tiêu học tập và định hướng phát triển năng lực số.">
        <div className="grid md:grid-cols-3 gap-6 reveal">
          <div className="md:col-span-1 bg-white rounded-3xl p-6 border border-border shadow-soft">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-5 shadow-pink ring-4 ring-pink-soft ring-offset-2 ring-offset-white">
              <img src={studentPhoto.url} alt="Hoàng Khánh Thư" className="w-full h-full object-cover" />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-deep">Hoàng Khánh Thư</h3>
              <p className="text-sm text-muted-foreground mt-1">MSV 25051338</p>
              <a href="mailto:25051338@vnu.edu.vn" className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                <Mail className="w-4 h-4" /> 25051338@vnu.edu.vn
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-border space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <GraduationCap className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <div>
                  <p className="font-medium text-blue-deep">Ngành Kinh tế Quốc tế</p>
                  <p className="text-muted-foreground">Lớp KTQT 11 · Khoa Kinh tế Quốc tế</p>
                  <p className="text-muted-foreground">Trường Đại học Kinh tế – ĐHQGHN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 grid gap-6">

            <InfoCard icon={Target} title="Mục tiêu học tập" color="blue">
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Nắm vững nền tảng công nghệ số và ứng dụng AI có trách nhiệm trong học tập, nghiên cứu.</li>
                <li>Rèn luyện tư duy phản biện, kỹ năng tìm kiếm – đánh giá nguồn học thuật và trình bày khoa học.</li>
                <li>Xây dựng thói quen học tập chủ động, biến mỗi bài tập thành một sản phẩm số hoàn chỉnh.</li>
                <li>Đạt kết quả học tập xuất sắc, chinh phục học bổng và cơ hội trao đổi quốc tế.</li>
                <li>Định hướng phát triển năng lực số phục vụ ngành Kinh tế Quốc tế trong bối cảnh chuyển đổi số.</li>
              </ul>
            </InfoCard>

            <InfoCard icon={Heart} title="Sở thích cá nhân" color="pink">
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Yêu màu hồng pastel, sưu tầm sticker, sổ tay và những món đồ handmade dễ thương.</li>
                <li>Nghe nhạc acoustic, xem phim chữa lành và viết nhật ký mỗi tối để cân bằng cảm xúc.</li>
                <li>Đọc sách về kinh tế quốc tế, thương mại – logistics và các câu chuyện truyền cảm hứng.</li>
                <li>Khám phá công cụ AI mới, thiết kế infographic – slide – portfolio số bằng Canva, Figma.</li>
                <li>Đi cà phê cùng bạn bè, chụp ảnh, cắm hoa và nấu những món bánh ngọt nhỏ xinh.</li>
                <li>Tham gia hoạt động nhóm, câu lạc bộ, kết nối cộng đồng học tập và chia sẻ kiến thức.</li>
              </ul>
            </InfoCard>

            <InfoCard icon={GraduationCap} title="Mục tiêu Portfolio" color="blue">
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Hệ thống hóa toàn bộ 6 bài tập cuối kỳ trong một sản phẩm số duy nhất, trực quan và dễ theo dõi.</li>
                <li>Chứng minh năng lực sử dụng công cụ số và AI có trách nhiệm trong học tập.</li>
                <li>Lưu trữ sản phẩm cá nhân để dễ dàng truy cập, chia sẻ với thầy cô, bạn bè và nhà tuyển dụng tương lai.</li>
                <li>Rèn luyện kỹ năng trình bày, phân tích, phản biện và tự đánh giá bản thân.</li>
                <li>Tạo nền móng cho một "hồ sơ số" cá nhân, tiếp tục cập nhật trong suốt hành trình đại học.</li>
              </ul>
            </InfoCard>

          </div>


        </div>
      </Section>

      {/* OVERVIEW / TIMELINE */}
      <Section id="overview" eyebrow="Tổng quan dự án" title="Hành trình 6 nhiệm vụ học tập" desc="Sơ đồ hành trình từ kỹ năng nền tảng đến năng lực sử dụng AI có trách nhiệm.">
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-pink-strong to-primary/40" />
          <div className="space-y-8">
            {TASKS.map((t, i) => {
              const Icon = t.icon;
              const left = i % 2 === 0;
              return (
                <div key={i} className={`reveal md:grid md:grid-cols-2 md:gap-8 items-center ${left ? "" : "md:[direction:rtl]"}`}>
                  <div className={`md:[direction:ltr] ${left ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white border border-border text-xs uppercase tracking-widest text-primary font-semibold shadow-sm`}>
                      Nhiệm vụ 0{i + 1}
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-blue-deep">{t.title}</h3>
                    <p className="mt-2 text-muted-foreground">{t.short}</p>
                    <button
                      onClick={() => { scrollTo("projects"); setOpenProject(`p${i + 1}`); }}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      Xem chi tiết <ChevronDown className="w-4 h-4 -rotate-90" />
                    </button>
                  </div>
                  <div className="md:[direction:ltr] flex md:justify-start justify-center mt-4 md:mt-0 relative">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-primary grid place-items-center shadow-pink z-10 ${left ? "md:-ml-10" : "md:-mr-10 md:ml-auto"}`}>
                      <Icon className="w-9 h-9 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Dự án" title="6 dự án học tập chi tiết" desc="Mỗi dự án được trình bày theo cấu trúc thống nhất: mục tiêu · quá trình · công cụ · minh chứng · phân tích · bài học.">
        <div className="space-y-5">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} open={openProject === p.id} onToggle={() => setOpenProject(openProject === p.id ? null : p.id)} />
          ))}
        </div>

      </Section>


      {/* SKILLS */}
      <Section id="skills" eyebrow="Kỹ năng" title="Bảng tổng hợp kỹ năng đạt được" desc="Trực quan hóa 8 năng lực số dưới dạng sơ đồ mạng nhện (radar chart), giúp so sánh mức độ thành thạo giữa các nhóm kỹ năng một cách khoa học.">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 reveal bg-white rounded-3xl border border-border shadow-soft p-6 md:p-8">
            <SkillsRadar />
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-primary/30 border border-primary" /> Vùng năng lực đạt được</span>
              <span className="inline-flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-pink-strong" /> Điểm mốc kỹ năng</span>
              <span className="inline-flex items-center gap-2"><span className="w-3 h-[2px] bg-muted-foreground/40" /> Vòng chuẩn 20 · 40 · 60 · 80 · 100%</span>
            </div>
          </div>
          <ol className="lg:col-span-2 space-y-3 reveal">
            {SKILLS.map((s, i) => (
              <li key={i} className="bg-white rounded-2xl p-4 border border-border shadow-soft hover:shadow-pink transition-all">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold grid place-items-center shrink-0">{i + 1}</span>
                    <h4 className="font-semibold text-blue-deep text-sm">{s.name}</h4>
                  </div>
                  <span className="text-sm font-bold text-primary tabular-nums">{s.level}%</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
                <p className="mt-1 text-xs text-muted-foreground"><b className="text-foreground">Ứng dụng:</b> {s.apply}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>


      {/* CONCLUSION */}
      <Section id="conclusion" eyebrow="Tổng kết" title="Nhìn lại hành trình & định hướng phía trước" desc="Tự đánh giá quá trình học tập, những khó khăn đã vượt qua và định hướng áp dụng kỹ năng số trong tương lai.">
        <div className="reveal bg-white rounded-3xl border border-border shadow-soft p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shrink-0">
              <BookOpen className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-lg text-foreground leading-relaxed italic">
              "Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các sản phẩm học tập mà còn nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI có trách nhiệm. Portfolio giúp em hiểu rằng trong môi trường học tập hiện đại, công nghệ không chỉ là công cụ hỗ trợ mà còn là phương tiện để người học thể hiện năng lực, sự sáng tạo và thái độ học tập nghiêm túc."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <ConclusionBlock icon={Lightbulb} title="Trải nghiệm & tâm đắc" color="blue" items={[
              "Học cách nhìn công nghệ như một quy trình chứ không chỉ một công cụ.",
              "Biết cách 'đối thoại' với AI thông qua kỹ thuật viết Prompt.",
              "Thấy rõ giá trị của việc lưu trữ dữ liệu học tập một cách khoa học.",
              "Tâm đắc nhất với bộ nguyên tắc sử dụng AI có trách nhiệm — kim chỉ nam học tập lâu dài.",
            ]} />
            <ConclusionBlock icon={Target} title="Khó khăn đã gặp" color="pink" items={[
              "Khó sắp xếp nội dung Portfolio sao cho khoa học và mạch lạc.",
              "Khó đánh giá độ tin cậy của thông tin giữa hàng loạt nguồn.",
              "Khó viết prompt đủ rõ ràng để AI trả lời chính xác.",
              "Khó cân bằng giữa việc dùng AI hỗ trợ và giữ tư duy độc lập.",
            ]} />
            <ConclusionBlock icon={CheckCircle2} title="Cách khắc phục" color="blue" items={[
              "Lập kế hoạch chi tiết trước khi thực hiện từng bài.",
              "Kiểm chứng thông tin bằng nhiều nguồn, đối chiếu chéo.",
              "So sánh nhiều phiên bản prompt để tìm cấu trúc tối ưu.",
              "Chủ động chỉnh sửa, cá nhân hóa mọi sản phẩm AI trước khi nộp.",
            ]} />
            <ConclusionBlock icon={Award} title="Định hướng tương lai" color="pink" items={[
              "Tiếp tục dùng Portfolio làm nơi lưu trữ sản phẩm học tập lâu dài.",
              "Ứng dụng kỹ năng số vào học tập, nghiên cứu và công việc.",
              "Sử dụng AI như một cộng sự học tập có trách nhiệm.",
              "Không ngừng cập nhật kiến thức mới về công nghệ và đạo đức AI.",
            ]} />
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gradient-primary grid place-items-center text-primary-foreground font-bold">HT</span>
              <span className="font-display font-semibold text-blue-deep">Portfolio Kỹ thuật số</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
            </p>
          </div>
          <div className="text-sm">
            <h5 className="font-semibold text-blue-deep mb-2">Sinh viên</h5>
            <p className="text-muted-foreground">Hoàng Khánh Thư</p>
            <p className="text-muted-foreground">MSV 25051338 · Lớp KTQT 11</p>
            <p className="text-muted-foreground">Khoa Kinh tế Quốc tế – ĐH Kinh tế, ĐHQGHN</p>
          </div>
          <div className="text-sm">
            <h5 className="font-semibold text-blue-deep mb-2">Môn học</h5>
            <p className="text-muted-foreground">Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</p>
            <p className="text-muted-foreground flex items-center gap-2 mt-1"><Calendar className="w-4 h-4" /> Năm học 2025 – 2026</p>
            <a href="mailto:25051338@vnu.edu.vn" className="mt-1 inline-flex items-center gap-2 text-primary hover:underline">
              <Mail className="w-4 h-4" /> 25051338@vnu.edu.vn
            </a>
          </div>
        </div>
        <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
          © 2026 Hoàng Khánh Thư · Portfolio học tập cá nhân
        </div>
      </footer>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-pink hover:scale-110 transition-transform"
          aria-label="Về đầu trang"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

/* -------------------- Reusable pieces -------------------- */

function Section({
  id, eyebrow, title, desc, children,
}: { id: string; eyebrow: string; title: string; desc: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-primary">{eyebrow}</div>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-blue-deep">{title}</h2>
          <p className="mt-3 text-muted-foreground">{desc}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children, color }: { icon: any; title: string; children: React.ReactNode; color: "blue" | "pink" }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-pink transition-all">
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-xl grid place-items-center ${color === "blue" ? "bg-blue-soft" : "bg-pink-soft"}`}>
          <Icon className="w-5 h-5 text-blue-deep" />
        </div>
        <h4 className="font-semibold text-blue-deep">{title}</h4>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function ProjectCard({ project, open, onToggle }: { project: typeof PROJECTS[number]; open: boolean; onToggle: () => void }) {
  const Icon = project.icon;
  return (
    <div className="reveal bg-white rounded-3xl border border-border overflow-hidden shadow-soft">
      <button onClick={onToggle} className="w-full text-left p-6 md:p-7 flex gap-5 items-start hover:bg-muted/40 transition-colors">
        <div className="w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shrink-0 shadow-pink">
          <Icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary">{project.tag}</div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-deep mt-1">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{project.goal}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="px-2.5 py-0.5 rounded-full bg-blue-soft text-blue-deep text-xs font-medium">{t}</span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-primary" style={{ width: `${project.progress}%` }} />
            </div>
            <span className="text-xs text-muted-foreground">{project.progress}% hoàn thành</span>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="px-6 md:px-7 pb-7 grid lg:grid-cols-2 gap-6 border-t border-border">
          <DetailBlock icon={Target} title="Mục tiêu">{project.goal}</DetailBlock>
          <DetailBlock icon={CheckCircle2} title="Quá trình thực hiện">
            <ol className="list-decimal pl-5 space-y-1.5">{project.process.map((p, i) => <li key={i}>{p}</li>)}</ol>
          </DetailBlock>
          <DetailBlock icon={Wand2} title="Công cụ sử dụng">
            <div className="flex flex-wrap gap-2">{project.tools.map((t) => <span key={t} className="px-3 py-1 rounded-full bg-pink-soft text-blue-deep text-xs font-medium">{t}</span>)}</div>
          </DetailBlock>
          <DetailBlock icon={FileText} title="Mô tả minh chứng">
            <p className="text-sm text-muted-foreground leading-relaxed">{project.evidence}</p>
          </DetailBlock>

          <DetailBlock icon={BrainCircuit} title="Phân tích kết quả">
            <ul className="list-disc pl-5 space-y-1.5">{project.analysis.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </DetailBlock>
          <DetailBlock icon={Lightbulb} title="Bài học rút ra">
            <ul className="list-disc pl-5 space-y-1.5">{project.lesson.map((l, i) => <li key={i}>{l}</li>)}</ul>
          </DetailBlock>
          {project.id === "p2" && (
            <div className="lg:col-span-2">
              <DetailBlock icon={Search} title="Bảng đánh giá nguồn">
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-blue-soft/40">
                      <tr className="text-left text-blue-deep">
                        <th className="py-2 px-3">Nguồn</th><th className="py-2 px-3">Tác giả</th><th className="py-2 px-3">Năm</th><th className="py-2 px-3">Tin cậy</th><th className="py-2 px-3">Lý do</th><th className="py-2 px-3">Hạn chế</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SEARCH_SOURCES.map((s, i) => (
                        <tr key={i} className="border-t border-border/60">
                          <td className="py-2 px-3 font-medium text-foreground">{s.src}</td>
                          <td className="py-2 px-3">{s.author}</td>
                          <td className="py-2 px-3">{s.year}</td>
                          <td className="py-2 px-3"><span className="px-2 py-0.5 rounded-full text-xs bg-blue-soft text-blue-deep">{s.trust}</span></td>
                          <td className="py-2 px-3">{s.reason}</td>
                          <td className="py-2 px-3">{s.limit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DetailBlock>
            </div>
          )}
          {project.id === "p3" && (
            <div className="lg:col-span-2">
              <DetailBlock icon={Sparkles} title="So sánh Prompt ban đầu và Prompt cải tiến">
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-sm">
                    <thead className="bg-pink-soft/40">
                      <tr className="text-left text-blue-deep">
                        <th className="py-2 px-3">Tiêu chí</th><th className="py-2 px-3">Prompt ban đầu</th><th className="py-2 px-3">Prompt cải tiến</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PROMPT_COMPARE.map((r, i) => (
                        <tr key={i} className="border-t border-border/60">
                          <td className="py-2 px-3 font-medium text-foreground">{r.crit}</td>
                          <td className="py-2 px-3">{r.before}</td>
                          <td className="py-2 px-3 text-foreground">{r.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DetailBlock>
            </div>
          )}
          {project.id === "p6" && (
            <div className="lg:col-span-2">
              <DetailBlock icon={ShieldCheck} title="Bộ 7 nguyên tắc sử dụng AI cá nhân">
                <ol className="grid sm:grid-cols-2 gap-3">
                  {AI_PRINCIPLES.map((p, i) => (
                    <li key={i} className="flex gap-3 items-start p-3 rounded-xl bg-blue-soft/30 border border-border">
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold grid place-items-center shrink-0">{i + 1}</span>
                      <span className="text-sm text-foreground">{p}</span>
                    </li>
                  ))}
                </ol>
              </DetailBlock>
            </div>
          )}

          {EVIDENCE_ITEMS[project.id] && (
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-pink-200/70 bg-gradient-to-br from-pink-50/60 via-white to-blue-50/60 p-5 md:p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-pink-soft grid place-items-center">
                    <ImageIcon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-blue-deep">Minh chứng</h4>
                  <span className="ml-auto text-xs text-muted-foreground">
                    {EVIDENCE_ITEMS[project.id].length} ảnh minh chứng
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {EVIDENCE_ITEMS[project.id].map((caption, i) => {
                    const imgUrl = project.id === "p1" ? BAI1_IMAGES[i] : project.id === "p3" ? BAI3_IMAGES[i] : project.id === "p4" ? BAI4_IMAGES[i] : project.id === "p5" ? BAI5_IMAGES[i] : project.id === "p6" ? BAI6_IMAGES[i] : undefined;
                    return (
                    <figure
                      key={i}
                      className="group bg-white rounded-2xl border border-border overflow-hidden shadow-soft hover:shadow-pink transition-shadow"
                    >
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-soft/40 via-white to-pink-soft/40 grid place-items-center overflow-hidden">
                        {imgUrl ? (
                          <img
                            src={imgUrl}
                            alt={caption}
                            loading="lazy"
                            className="w-full h-full object-contain bg-white p-2 group-hover:scale-[1.03] transition-transform"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:24px_24px] text-primary/20" />
                            <div className="relative flex flex-col items-center gap-2 text-primary/70">
                              <ImageIcon className="w-10 h-10" />
                              <span className="text-[11px] uppercase tracking-widest font-semibold">
                                Ảnh {String(i + 1).padStart(2, "0")}
                              </span>
                            </div>
                          </>
                        )}
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur text-[10px] font-semibold text-blue-deep border border-border">
                          {project.tag} · Ảnh {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <figcaption className="p-3 text-sm text-blue-deep font-medium leading-snug">
                        {caption}
                      </figcaption>
                    </figure>
                    );
                  })}
                </div>
                {EVIDENCE_FILES[project.id] && (
                  <a
                    href={EVIDENCE_FILES[project.id].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-3 rounded-xl border border-pink-200 bg-white hover:bg-pink-50/50 px-4 py-3 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-soft grid place-items-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-blue-deep truncate">
                        {EVIDENCE_FILES[project.id].name}
                      </div>
                      <div className="text-xs text-muted-foreground">Nhấn để mở / tải xuống tệp minh chứng gốc</div>
                    </div>
                    <LinkIcon className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

      )}

    </div>
  );
}

function DetailBlock({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-primary" />
        <h5 className="font-semibold text-blue-deep">{title}</h5>
      </div>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

function DataCard({ title, icon: Icon, children }: { title: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="reveal bg-white rounded-3xl border border-border p-6 shadow-soft">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center">
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
        <h4 className="font-semibold text-blue-deep">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function ConclusionBlock({ icon: Icon, title, items, color }: { icon: any; title: string; items: string[]; color: "blue" | "pink" }) {
  return (
    <div className={`rounded-2xl p-5 border border-border ${color === "blue" ? "bg-blue-soft/40" : "bg-pink-soft/40"}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-primary" />
        <h4 className="font-semibold text-blue-deep">{title}</h4>
      </div>
      <ul className="space-y-1.5 text-sm text-foreground">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2"><span className="text-primary mt-1">•</span><span>{it}</span></li>
        ))}
      </ul>
    </div>
  );
}

function SkillsRadar() {
  const size = 560;
  const cx = size / 2;
  const cy = size / 2;
  const r = 200;
  const n = SKILLS.length;
  const rings = [20, 40, 60, 80, 100];

  const angleFor = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const point = (i: number, pct: number) => {
    const a = angleFor(i);
    const rr = (r * pct) / 100;
    return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)] as const;
  };

  const polygonPoints = SKILLS.map((s, i) => point(i, s.level).join(",")).join(" ");

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-auto text-primary" role="img" aria-label="Sơ đồ mạng nhện kỹ năng số">
        <defs>
          <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </radialGradient>
        </defs>

        {/* Rings */}
        {rings.map((pct) => {
          const pts = Array.from({ length: n }, (_, i) => point(i, pct).join(",")).join(" ");
          return (
            <polygon
              key={pct}
              points={pts}
              fill="none"
              stroke="currentColor"
              strokeOpacity={pct === 100 ? 0.35 : 0.15}
              strokeWidth={pct === 100 ? 1.2 : 1}
              className="text-muted-foreground"
            />
          );
        })}

        {/* Axes + labels */}
        {SKILLS.map((s, i) => {
          const [x, y] = point(i, 100);
          const [lx, ly] = point(i, 118);
          const a = angleFor(i);
          const cos = Math.cos(a);
          const anchor = cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle";
          return (
            <g key={i}>
              <line x1={cx} y1={cy} x2={x} y2={y} stroke="currentColor" strokeOpacity={0.15} className="text-muted-foreground" />
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                dominantBaseline="middle"
                className="fill-blue-deep"
                style={{ fontSize: 12, fontWeight: 600 }}
              >
                <tspan x={lx} dy="0">{`${i + 1}. ${s.name.split(" ").slice(0, 3).join(" ")}`}</tspan>
                <tspan x={lx} dy="14" className="fill-muted-foreground" style={{ fontSize: 11, fontWeight: 400 }}>
                  {s.name.split(" ").slice(3).join(" ") || "\u00A0"}
                </tspan>
              </text>
            </g>
          );
        })}

        {/* Ring % labels */}
        {rings.map((pct) => (
          <text
            key={pct}
            x={cx + 4}
            y={cy - (r * pct) / 100}
            className="fill-muted-foreground"
            style={{ fontSize: 9 }}
          >
            {pct}
          </text>
        ))}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="url(#radarFill)"
          stroke="currentColor"
          strokeWidth={2}
        />

        {/* Data points */}
        {SKILLS.map((s, i) => {
          const [x, y] = point(i, s.level);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={5} className="fill-pink-strong" stroke="white" strokeWidth={2} />
              <text
                x={x}
                y={y - 10}
                textAnchor="middle"
                className="fill-blue-deep"
                style={{ fontSize: 10, fontWeight: 700 }}
              >
                {s.level}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
