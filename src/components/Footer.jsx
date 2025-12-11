import { Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
    

      {/* Bottom Footer Line */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="text-center md:text-left">
              Registered under Codetrain Foundation Ghana | © 2025 Codetrain Foundation
            </div>
            <div>
              <a 
                href="#privacy" 
                className="hover:text-orange-400 transition-colors duration-200"
              >
                Privacy & Transparency Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}