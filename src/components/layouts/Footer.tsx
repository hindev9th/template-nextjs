import { Wallet } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#28392e] bg-[#0d1c12] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary text-2xl"><Wallet /></span>
              <span className="text-xl font-bold">ExpenseManager</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Cách thông minh nhất để theo dõi chi tiêu cá nhân và chia hóa đơn nhóm. Dành cho quản lý tài chính hiện đại.
            </p>
            <div className="flex gap-4 mt-2">
              <a className="text-slate-400 hover:text-white transition-colors" href="#">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
              </a>
              <a className="text-slate-400 hover:text-white transition-colors" href="#">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white">Sản phẩm</h3>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Tính năng</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Giá cả</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Bảo mật</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Tích hợp</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white">Công ty</h3>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Về chúng tôi</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Tuyển dụng</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Blog</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Liên hệ</a>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white">Pháp lý</h3>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Quyền riêng tư</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Điều khoản</a>
            <a className="text-sm text-slate-400 hover:text-primary transition-colors" href="#">Chính sách Cookie</a>
          </div>
        </div>
        <div className="border-t border-[#28392e] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 ExpenseManager Inc.</p>
          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-xs text-slate-500">
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}