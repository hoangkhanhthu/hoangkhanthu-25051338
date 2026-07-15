import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  FolderTree, Search, Sparkles, Users, Wand2, ShieldCheck, ArrowUp, GraduationCap,
  Mail, Calendar, BookOpen, Target, Lightbulb, CheckCircle2, ChevronDown, Award,
  Palette, BrainCircuit, FileText, Image as ImageIcon, Video, LinkIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
});

/* -------------------- Data -------------------- */

const NAV = [
  { id: "hero", label: "Trang chủ" },
  { id: "about", label: "Giới thiệu" },
  { id: "overview", label: "Hành trình" },
  { id: "projects", label: "Dự án" },
  { id: "evidence", label: "Minh chứng" },
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
    title: "Bài tập 1 – Thao tác cơ bản với tệp tin và thư mục",
    icon: FolderTree,
    progress: 100,
    tags: ["Quản lý dữ liệu", "File Explorer", "Cloud Drive"],
    goal: "Biết tạo thư mục, lưu trữ tài liệu khoa học, đặt tên tệp nhất quán và quản lý dữ liệu học tập lâu dài.",
    process: [
      "Tạo thư mục chính cho môn học: NMCNS_2026.",
      "Chia thành các nhóm con: Bài tập / Tài liệu tham khảo / Hình ảnh minh chứng / Sản phẩm cuối kỳ.",
      "Đặt tên file theo quy tắc: NMCNS_Bai01_QuanLyTep_2026_v1.pdf.",
      "Đồng bộ song song trên File Explorer và Google Drive để tránh mất mát dữ liệu.",
    ],
    tools: ["File Explorer (Windows)", "Google Drive", "OneDrive"],
    evidence: "Ảnh chụp màn hình cấu trúc thư mục & sơ đồ phân cấp dữ liệu.",
    analysis: [
      "Cấu trúc theo chủ đề giúp truy xuất dữ liệu nhanh, tránh thất lạc khi khối lượng bài tăng.",
      "Quy tắc đặt tên MonHoc_Bai_ChuDe_Nam_Phienban giúp phân biệt phiên bản, hỗ trợ theo dõi tiến trình chỉnh sửa.",
      "Sao lưu trên cloud giúp truy cập ở nhiều thiết bị, giảm rủi ro mất dữ liệu vật lý.",
    ],
    lesson: [
      "Quản lý dữ liệu khoa học là kỹ năng nền tảng của công dân số.",
      "Một cấu trúc thư mục tốt tiết kiệm rất nhiều thời gian khi ôn tập và làm dự án dài hạn.",
    ],
  },
  {
    id: "p2",
    tag: "Nhiệm vụ 02",
    title: "Bài tập 2 – Tìm kiếm và đánh giá thông tin học thuật",
    icon: Search,
    progress: 100,
    tags: ["Google Scholar", "Toán tử tìm kiếm", "Đánh giá nguồn"],
    goal: "Sử dụng linh hoạt hơn 4 toán tử tìm kiếm nâng cao và đánh giá độ tin cậy của các nguồn học thuật.",
    process: [
      "Chọn chủ đề: 'Ứng dụng AI tạo sinh trong giáo dục đại học'.",
      "Áp dụng 6 toán tử: site: , filetype: , intitle: , \"từ khóa chính xác\", OR, - , after: .",
      "So sánh kết quả giữa Google Search, Google Scholar và cổng thông tin trường đại học.",
      "Lập bảng đánh giá nguồn theo 6 tiêu chí trước khi trích dẫn.",
    ],
    tools: ["Google Search", "Google Scholar", "Cổng dữ liệu VNU", "Zotero"],
    evidence: "Ảnh chụp kết quả tìm kiếm + bảng đánh giá nguồn.",
    analysis: [
      "Toán tử site:edu.vn giúp lọc nhanh các nguồn từ trường đại học Việt Nam.",
      "filetype:pdf trả về báo cáo học thuật thay vì bài blog phổ thông.",
      "OR mở rộng phạm vi, còn dấu - loại bỏ chủ đề không liên quan (vd: -quảng_cáo).",
      "Nguồn từ tổ chức học thuật, có tác giả rõ ràng và năm công bố gần đây được ưu tiên hơn.",
    ],
    lesson: [
      "Tìm kiếm là một chiến lược, không đơn thuần là gõ từ khóa.",
      "Kiểm chứng chéo nhiều nguồn giúp giảm sai lệch và tin giả.",
    ],
  },
  {
    id: "p3",
    tag: "Nhiệm vụ 03",
    title: "Bài tập 3 – Viết Prompt hiệu quả cho các tác vụ học tập",
    icon: Sparkles,
    progress: 100,
    tags: ["Prompt Engineering", "ChatGPT", "Gemini"],
    goal: "Thiết kế prompt rõ ràng để AI trả lời chính xác và có cấu trúc phục vụ học tập.",
    process: [
      "Viết prompt ban đầu ngắn gọn, chung chung.",
      "Viết prompt cải tiến với đủ 5 thành phần: Vai trò – Bối cảnh – Nhiệm vụ – Định dạng đầu ra – Tiêu chí đánh giá.",
      "Chạy song song 2 prompt trên cùng một mô hình AI và so sánh kết quả.",
      "Đánh giá kết quả theo 6 tiêu chí và ghi nhận điểm cải thiện.",
    ],
    tools: ["ChatGPT", "Gemini", "Claude"],
    evidence: "Ảnh chụp 2 phiên bản prompt và câu trả lời tương ứng của AI.",
    analysis: [
      "Prompt cải tiến giúp AI hiểu ngữ cảnh cụ thể, sinh nội dung có cấu trúc rõ ràng.",
      "Việc chỉ định vai trò ('Bạn là giảng viên môn công nghệ số...') giảm câu trả lời chung chung.",
      "Yêu cầu định dạng (bảng, gạch đầu dòng) giúp kiểm soát chất lượng đầu ra.",
      "AI phản hồi tốt hơn khi prompt cung cấp đủ ngữ cảnh — cơ chế dựa trên xác suất token có điều kiện.",
    ],
    lesson: [
      "Muốn AI trả lời tốt, cần đặt câu hỏi tốt.",
      "Prompt Engineering là kỹ năng cốt lõi của người học trong thời đại AI.",
    ],
  },
  {
    id: "p4",
    tag: "Nhiệm vụ 04",
    title: "Bài tập 4 – Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    icon: Users,
    progress: 100,
    tags: ["Trello", "Notion", "Quản lý dự án"],
    goal: "Lập kế hoạch, phân công công việc và theo dõi tiến độ nhóm bằng công cụ trực tuyến.",
    process: [
      "Tạo bảng Kanban trên Trello với 4 cột: Chưa làm / Đang làm / Hoàn thành / Cần chỉnh sửa.",
      "Phân công nhiệm vụ theo thế mạnh của từng thành viên, có hạn hoàn thành và người phụ trách.",
      "Sử dụng Google Sheets để tổng hợp tiến độ và ghi chú phản hồi.",
      "Họp nhóm 2 lần/tuần để cập nhật trạng thái và xử lý vướng mắc.",
    ],
    tools: ["Trello", "Notion", "Google Sheets", "Microsoft Planner"],
    evidence: "Ảnh chụp bảng Kanban và bảng phân công công việc nhóm.",
    analysis: [
      "Công cụ trực tuyến giúp minh bạch tiến độ, mỗi thành viên biết rõ trách nhiệm của mình.",
      "Trạng thái công việc giúp phát hiện sớm việc bị chậm để hỗ trợ kịp thời.",
      "Ghi chú phản hồi trực tiếp trên nhiệm vụ giúp giảm cuộc họp không cần thiết.",
    ],
    lesson: [
      "Làm việc nhóm hiệu quả cần kế hoạch rõ ràng và công cụ hỗ trợ phù hợp.",
      "Công cụ số nâng cao tính trách nhiệm cá nhân và khả năng phối hợp tập thể.",
    ],
  },
  {
    id: "p5",
    tag: "Nhiệm vụ 05",
    title: "Bài tập 5 – Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    icon: Wand2,
    progress: 100,
    tags: ["Canva", "CapCut", "DALL·E", "Infographic"],
    goal: "Ứng dụng AI tạo sinh để sản xuất sản phẩm nội dung số phục vụ học tập.",
    process: [
      "Bước 1 – Lên ý tưởng: chọn chủ đề 'AI có trách nhiệm trong sinh viên'.",
      "Bước 2 – Viết kịch bản bằng ChatGPT, chỉnh sửa lại để phù hợp ngôn ngữ cá nhân.",
      "Bước 3 – Sinh hình ảnh minh họa bằng DALL·E, chọn lọc bản chất lượng cao.",
      "Bước 4 – Dựng video ngắn bằng CapCut, ghép giọng đọc AI.",
      "Bước 5 – Kiểm tra chất lượng, chỉnh sửa thủ công và hoàn thiện sản phẩm.",
    ],
    tools: ["ChatGPT", "Canva", "CapCut", "DALL·E", "Gemini"],
    evidence: "Video ngắn dưới 5 phút / infographic / poster đính kèm.",
    analysis: [
      "AI tăng tốc quy trình từ ý tưởng đến sản phẩm, nhưng chưa thay thế được tư duy biên tập.",
      "Con người giữ vai trò then chốt trong lựa chọn thông điệp, kiểm chứng và cá nhân hóa nội dung.",
      "Sản phẩm cuối phải mang dấu ấn cá nhân, không sao chép nguyên xi từ AI.",
    ],
    lesson: [
      "AI là công cụ hỗ trợ sáng tạo, không thay thế hoàn toàn tư duy cá nhân.",
      "Người học cần biết chọn lọc, biên tập và chịu trách nhiệm với nội dung mình tạo ra.",
    ],
  },
  {
    id: "p6",
    tag: "Nhiệm vụ 06",
    title: "Bài tập 6 – Sử dụng AI có trách nhiệm trong học tập & nghiên cứu",
    icon: ShieldCheck,
    progress: 100,
    tags: ["Đạo đức AI", "Học thuật", "Bộ nguyên tắc"],
    goal: "Hiểu các vấn đề đạo đức khi sử dụng AI và xây dựng bộ nguyên tắc cá nhân có thể áp dụng lâu dài.",
    process: [
      "Nghiên cứu chính sách sử dụng AI của trường đại học và các tổ chức học thuật quốc tế.",
      "Phân tích 6 nhóm vấn đề: đạo văn, phụ thuộc AI, sai lệch thông tin, thiên kiến thuật toán, quyền riêng tư, gian lận học thuật.",
      "Xây dựng bộ 7 nguyên tắc cá nhân sử dụng AI.",
      "Thử áp dụng nguyên tắc vào 5 tác vụ thực tế trong học kỳ và tự đánh giá.",
    ],
    tools: ["Tài liệu học thuật", "Quy định VNU", "UNESCO AI Ethics"],
    evidence: "Ảnh bộ nguyên tắc cá nhân và bảng phân tích rủi ro đạo đức AI.",
    analysis: [
      "AI mang lại cơ hội lớn nhưng cũng tạo rủi ro về liêm chính học thuật nếu bị lạm dụng.",
      "Sinh viên cần phát triển năng lực tự đánh giá, phản biện và kiểm chứng nguồn AI.",
      "Sử dụng AI có trách nhiệm giúp bảo vệ tính trung thực và chất lượng học tập bền vững.",
    ],
    lesson: [
      "Trách nhiệm số là kỹ năng sống còn trong thời đại AI.",
      "Dùng AI đúng cách giúp người học phát triển tư duy độc lập chứ không phụ thuộc.",
    ],
  },
];

const SEARCH_SOURCES = [
  { src: "UNESCO Report on Generative AI in Education", author: "UNESCO", year: 2023, trust: "Rất cao", reason: "Tổ chức quốc tế, quy trình phản biện chặt", limit: "Tổng quát, ít số liệu Việt Nam" },
  { src: "Bài báo Journal of Educational Technology", author: "Springer Nature", year: 2024, trust: "Cao", reason: "Có peer-review, chỉ số ảnh hưởng cao", limit: "Truy cập trả phí" },
  { src: "Cổng thông tin ĐHQGHN", author: "VNU", year: 2025, trust: "Cao", reason: "Nguồn chính thống trong nước", limit: "Chỉ phản ánh góc nhìn của VNU" },
  { src: "Blog cá nhân về AI", author: "Không rõ", year: 2024, trust: "Thấp", reason: "Cập nhật nhanh, dễ đọc", limit: "Không kiểm chứng, có thể sai lệch" },
];

const PROMPT_COMPARE = [
  { crit: "Độ rõ ràng", before: "Chung chung, mơ hồ", after: "Cụ thể từng phần: vai trò, bối cảnh, nhiệm vụ" },
  { crit: "Vai trò", before: "Không chỉ định", after: "'Bạn là giảng viên môn Công nghệ số...'" },
  { crit: "Bối cảnh", before: "Thiếu", after: "Đối tượng: sinh viên năm 1, mục đích: ôn tập" },
  { crit: "Yêu cầu đầu ra", before: "Không định dạng", after: "Bảng 3 cột + kết luận dưới 100 từ" },
  { crit: "Mức độ chính xác", before: "Trả lời lan man", after: "Bám sát chủ đề, ít lạc đề" },
  { crit: "Kiểm soát kết quả", before: "Khó tái lập", after: "Có tiêu chí đánh giá kèm theo" },
];

const TEAM_TABLE = [
  { member: "Hoàng Khánh Thư", task: "Điều phối chung, viết báo cáo tổng hợp", due: "20/12", status: "Hoàn thành", note: "Kiểm tra chéo với các thành viên" },
  { member: "Thành viên A", task: "Thu thập tài liệu, dựng slide", due: "15/12", status: "Hoàn thành", note: "Bổ sung nguồn học thuật" },
  { member: "Thành viên B", task: "Thiết kế infographic bằng Canva", due: "18/12", status: "Đang làm", note: "Cần chỉnh màu theo bộ nhận diện" },
  { member: "Thành viên C", task: "Kiểm tra phản biện, hiệu đính", due: "22/12", status: "Chưa làm", note: "Bắt đầu sau khi có bản v1" },
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

const EVIDENCE = [
  { icon: FolderTree, title: "Cấu trúc thư mục học tập", desc: "Sơ đồ phân cấp và quy tắc đặt tên tệp." },
  { icon: Search, title: "Kết quả tìm kiếm học thuật", desc: "Ảnh chụp toán tử nâng cao và bảng đánh giá nguồn." },
  { icon: Sparkles, title: "So sánh Prompt AI", desc: "Prompt ban đầu và prompt cải tiến, kết quả đối chiếu." },
  { icon: Users, title: "Bảng quản lý công việc nhóm", desc: "Kanban trên Trello & bảng phân công Google Sheets." },
  { icon: Video, title: "Sản phẩm AI tạo sinh", desc: "Video ngắn / infographic hoàn thiện phục vụ học tập." },
  { icon: ShieldCheck, title: "Bộ nguyên tắc AI cá nhân", desc: "7 nguyên tắc và phân tích rủi ro đạo đức." },
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
                { id: "evidence", label: "Minh chứng" },
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
            <div className="aspect-square rounded-2xl bg-gradient-hero grid place-items-center mb-5">
              <div className="w-28 h-28 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground text-3xl font-bold shadow-pink">HT</div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-blue-deep">Hoàng Khánh Thư</h3>
              <p className="text-sm text-muted-foreground mt-1">MSV 25051338 · Lớp KTQT 11</p>
              <p className="text-sm text-muted-foreground">Khoa Kinh tế Quốc tế</p>
              <p className="text-sm text-muted-foreground">Trường Đại học Kinh tế – ĐHQGHN</p>
              <a href="mailto:25051338@vnu.edu.vn" className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
                <Mail className="w-4 h-4" /> 25051338@vnu.edu.vn
              </a>
            </div>
          </div>

          <div className="md:col-span-2 grid gap-6">
            <InfoCard icon={GraduationCap} title="Ngành học & Lớp" color="blue">
              Ngành Kinh tế Quốc tế, lớp KTQT 11, khoa Kinh tế Quốc tế – Trường Đại học Kinh tế, ĐHQGHN.
            </InfoCard>
            <InfoCard icon={Palette} title="Sở thích cá nhân" color="pink">
              Học công nghệ số, khám phá AI, sáng tạo nội dung, quản lý dữ liệu học thuật và làm việc nhóm.
            </InfoCard>
            <InfoCard icon={Target} title="Mục tiêu Portfolio" color="blue">
              <ul className="space-y-1.5 list-disc pl-5">
                <li>Hệ thống hóa toàn bộ các bài tập cuối kỳ trong một sản phẩm số duy nhất.</li>
                <li>Chứng minh năng lực sử dụng công cụ số và AI có trách nhiệm trong học tập.</li>
                <li>Lưu trữ sản phẩm cá nhân để dễ dàng truy cập, chia sẻ và phát triển trong tương lai.</li>
                <li>Rèn luyện kỹ năng trình bày, phân tích, phản biện và tự đánh giá bản thân.</li>
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

        {/* Extra data cards for select projects */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <DataCard title="Bảng đánh giá nguồn (Bài tập 2)" icon={Search}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-blue-deep border-b border-border">
                    <th className="py-2 pr-3">Nguồn</th><th className="py-2 pr-3">Tác giả</th><th className="py-2 pr-3">Năm</th><th className="py-2 pr-3">Tin cậy</th><th className="py-2 pr-3">Lý do</th><th className="py-2">Hạn chế</th>
                  </tr>
                </thead>
                <tbody>
                  {SEARCH_SOURCES.map((s, i) => (
                    <tr key={i} className="border-b border-border/60">
                      <td className="py-2 pr-3 font-medium">{s.src}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{s.author}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{s.year}</td>
                      <td className="py-2 pr-3"><span className={`px-2 py-0.5 rounded-full text-xs ${s.trust === "Thấp" ? "bg-pink-soft text-blue-deep" : "bg-blue-soft text-blue-deep"}`}>{s.trust}</span></td>
                      <td className="py-2 pr-3 text-muted-foreground">{s.reason}</td>
                      <td className="py-2 text-muted-foreground">{s.limit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataCard>

          <DataCard title="So sánh Prompt (Bài tập 3)" icon={Sparkles}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-blue-deep border-b border-border">
                    <th className="py-2 pr-3">Tiêu chí</th><th className="py-2 pr-3">Prompt ban đầu</th><th className="py-2">Prompt cải tiến</th>
                  </tr>
                </thead>
                <tbody>
                  {PROMPT_COMPARE.map((r, i) => (
                    <tr key={i} className="border-b border-border/60">
                      <td className="py-2 pr-3 font-medium">{r.crit}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{r.before}</td>
                      <td className="py-2 text-foreground">{r.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataCard>

          <DataCard title="Bảng phân công nhóm (Bài tập 4)" icon={Users}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-blue-deep border-b border-border">
                    <th className="py-2 pr-3">Thành viên</th><th className="py-2 pr-3">Nhiệm vụ</th><th className="py-2 pr-3">Hạn</th><th className="py-2 pr-3">Trạng thái</th><th className="py-2">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {TEAM_TABLE.map((r, i) => (
                    <tr key={i} className="border-b border-border/60">
                      <td className="py-2 pr-3 font-medium">{r.member}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{r.task}</td>
                      <td className="py-2 pr-3 text-muted-foreground">{r.due}</td>
                      <td className="py-2 pr-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          r.status === "Hoàn thành" ? "bg-blue-soft text-blue-deep"
                          : r.status === "Đang làm" ? "bg-pink-soft text-blue-deep"
                          : "bg-muted text-muted-foreground"
                        }`}>{r.status}</span>
                      </td>
                      <td className="py-2 text-muted-foreground">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataCard>

          <DataCard title="Bộ nguyên tắc sử dụng AI cá nhân (Bài tập 6)" icon={ShieldCheck}>
            <ol className="space-y-2">
              {AI_PRINCIPLES.map((p, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold grid place-items-center shrink-0">{i + 1}</span>
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ol>
          </DataCard>
        </div>
      </Section>

      {/* EVIDENCE GALLERY */}
      <Section id="evidence" eyebrow="Minh chứng" title="Thư viện minh chứng học tập" desc="Bộ sưu tập trực quan các minh chứng cho từng bài tập. Bạn có thể thay các placeholder bằng ảnh thật.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVIDENCE.map((e, i) => {
            const Ic = e.icon;
            return (
              <div key={i} className="reveal group bg-white rounded-3xl border border-border overflow-hidden shadow-soft hover:-translate-y-1 hover:shadow-pink transition-all">
                <div className="aspect-video bg-gradient-hero relative overflow-hidden">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur grid place-items-center shadow-soft">
                      <Ic className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 text-xs text-muted-foreground border border-border">
                    Thay bằng minh chứng thật
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-blue-deep">{e.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                    Xem chi tiết <LinkIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Kỹ năng" title="Bảng tổng hợp kỹ năng đạt được" desc="Tổng hợp năng lực số hình thành qua 6 nhiệm vụ, kèm mức độ thành thạo và ứng dụng thực tế.">
        <div className="grid md:grid-cols-2 gap-5">
          {SKILLS.map((s, i) => (
            <div key={i} className="reveal bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-pink transition-all">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-blue-deep">{s.name}</h4>
                <span className="text-sm font-semibold text-primary">{s.level}%</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-3 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-gradient-primary rounded-full transition-all duration-700" style={{ width: `${s.level}%` }} />
              </div>
              <p className="mt-3 text-xs text-muted-foreground"><b className="text-foreground">Ứng dụng:</b> {s.apply}</p>
            </div>
          ))}
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
          <DetailBlock icon={ImageIcon} title="Sản phẩm / Minh chứng">
            <div className="p-4 rounded-xl bg-gradient-hero border border-dashed border-border text-center text-sm text-muted-foreground">
              <FileText className="w-6 h-6 mx-auto mb-2 text-primary" />
              {project.evidence}
              <div className="mt-1 text-xs italic">(Thay bằng minh chứng thật)</div>
            </div>
          </DetailBlock>
          <DetailBlock icon={BrainCircuit} title="Phân tích kết quả">
            <ul className="list-disc pl-5 space-y-1.5">{project.analysis.map((a, i) => <li key={i}>{a}</li>)}</ul>
          </DetailBlock>
          <DetailBlock icon={Lightbulb} title="Bài học rút ra">
            <ul className="list-disc pl-5 space-y-1.5">{project.lesson.map((l, i) => <li key={i}>{l}</li>)}</ul>
          </DetailBlock>
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
