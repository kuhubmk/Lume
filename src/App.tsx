import React from 'react';
import { Video, BarChart2, Download, Upload, Crown, LogIn } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Video className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">VideoAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">上传视频</a>
            <a href="#" className="text-gray-600 hover:text-blue-600">会员</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              登录 / 注册
            </button>
          </div>
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            让视频焕发新生
          </h1>
          <p className="text-xl text-gray-600">
            上传、分析、重构，轻松完成！
          </p>
        </div>

        {/* Feature Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<Upload className="h-12 w-12 text-blue-600" />}
            title="上传视频"
            description="轻松上传您的视频文件，支持多种格式。"
          />
          <FeatureCard
            icon={<BarChart2 className="h-12 w-12 text-blue-600" />}
            title="分析视频"
            description="使用先进的AI技术分析视频内容和结构。"
          />
          <FeatureCard
            icon={<Download className="h-12 w-12 text-blue-600" />}
            title="下载结果"
            description="获取详细的分析报告和优化后的视频文件。"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 w-full md:w-auto">
            快速注册
          </button>
          <button className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition duration-300 flex items-center justify-center w-full md:w-auto">
            <Crown className="mr-2" />
            成为会员
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; 2024 VideoAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default App;