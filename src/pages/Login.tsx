import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    // Simulate authentication
    const users = JSON.parse(localStorage.getItem('outthink_users') || '[]');
    
    if (isLogin) {
      const user = users.find((u: any) => u.email === formData.email && u.password === formData.password);
      if (user) {
        localStorage.setItem('outthink_current_user', JSON.stringify(user));
        toast({
          title: "Success",
          description: "Login successful!"
        });
        navigate('/');
      } else {
        toast({
          title: "Error",
          description: "Invalid credentials",
          variant: "destructive"
        });
      }
    } else {
      const existingUser = users.find((u: any) => u.email === formData.email);
      if (existingUser) {
        toast({
          title: "Error",
          description: "User already exists",
          variant: "destructive"
        });
        return;
      }
      
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      
      users.push(newUser);
      localStorage.setItem('outthink_users', JSON.stringify(users));
      localStorage.setItem('outthink_current_user', JSON.stringify(newUser));
      
      toast({
        title: "Success",
        description: "Account created successfully!"
      });
      navigate('/');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <div className="w-full max-w-md relative z-10">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <Card className="backdrop-blur-sm bg-white/80 border-purple-200 shadow-2xl transition-all duration-500 hover:shadow-3xl">
          <CardHeader className="text-center">
            <img 
              src=" src/Logo.png" 
              alt="Outthink Academy" 
              className="h-12 w-auto mx-auto mb-4 transition-transform duration-300 hover:scale-110"
            />
            <CardTitle className="text-2xl font-bold text-gray-900">
              {isLogin ? 'Welcome Back' : 'Join Outthink Academy'}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {isLogin ? 'Sign in to continue learning' : 'Create your account to start'}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
              </div>

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <Button
                  variant="link"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setFormData({ email: "", password: "", confirmPassword: "", name: "" });
                  }}
                  className="p-0 ml-1 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
