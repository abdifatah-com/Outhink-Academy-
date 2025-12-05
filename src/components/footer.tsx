import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const handleSocialClick = (platform: string) => {
    alert(`Follow Outthink Academy on ${platform}! Social links coming soon.`);
  };

  const handleContactClick = (method: string) => {
    if (method === 'email') {
      window.location.href = 'mailto:info@outthinkacademy.com';
    } else {
      alert(`Contact information: ${method} - Details coming soon!`);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src=" src/Logo.png" 
                alt="Outthink Academy Logo" 
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Outthink Academy
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering learners worldwide with cutting-edge skills and knowledge 
              for the digital future. Think beyond limits.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleSocialClick('Facebook')}
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Instagram')}
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#courses" className="hover:text-purple-400 transition-colors cursor-pointer">All Courses</a></li>
              <li><a href="#features" className="hover:text-purple-400 transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" onClick={() => alert('Instructors page coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Instructors</a></li>
              <li><a href="#" onClick={() => alert('Success stories coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Success Stories</a></li>
              <li><a href="#" onClick={() => alert('Blog coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" onClick={() => alert('Help Center coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Help Center</a></li>
              <li><a href="#" onClick={() => handleContactClick('contact')} className="hover:text-purple-400 transition-colors cursor-pointer">Contact Us</a></li>
              <li><a href="#" onClick={() => alert('Privacy Policy coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Privacy Policy</a></li>
              <li><a href="#" onClick={() => alert('Terms coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Terms of Service</a></li>
              <li><a href="#" onClick={() => alert('Refund Policy coming soon!')} className="hover:text-purple-400 transition-colors cursor-pointer">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <button 
                onClick={() => handleContactClick('email')}
                className="flex items-center space-x-3 hover:text-purple-400 transition-colors text-left"
              >
                <Mail className="w-5 h-5 text-purple-400" />
                <span>info@outthinkacademy.com</span>
              </button>
              <button 
                onClick={() => handleContactClick('phone')}
                className="flex items-center space-x-3 hover:text-purple-400 transition-colors text-left"
              >
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+252 636472317</span>
              </button>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span> Hargeisa SOmaliland </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Outthink Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
