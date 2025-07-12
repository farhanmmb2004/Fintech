import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Smartphone, CreditCard, Plane, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Checkbox } from '@/components/ui/checkbox.jsx';


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    mobileNo: '',
    password: '',
    remember: false
  });
    const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      remember: checked
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home'); 
    console.log('Login attempt:', formData);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-red-700 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Side - Hero Content */}
        <div className="text-white space-y-8 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-red-600 font-bold text-xl">S</span>
            </div>
            <div>
              <span className="text-2xl font-bold">saral</span>
              <span className="text-2xl font-bold text-orange-300">money</span>
              <div className="text-xs opacity-80">bank in your hands</div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              RECHARGE & PAY BILLS
            </h1>
            <p className="text-lg lg:text-xl opacity-90 max-w-lg">
              Simplest and fastest way to recharge and pay bills for all your mobile, DTH, 
              and other utilities at a single location.
            </p>
          </div>

          {/* Service Icons */}
          <div className="flex space-x-12 pt-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                <Smartphone className="w-8 h-8" />
              </div>
              <div className="text-sm font-medium">
                Recharge & Bill Payments
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                <Plane className="w-8 h-8" />
              </div>
              <div className="text-sm font-medium">
                Travel Bookings
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                <Gift className="w-8 h-8" />
              </div>
              <div className="text-sm font-medium">
                Many More..
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            {/* Logo in form */}
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="w-6 h-6 bg-red-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-red-600">saral</span>
                <span className="text-xl font-bold text-orange-500">money</span>
                <div className="text-xs text-gray-500">bank in your hands</div>
              </div>
            </div>

            {/* Form Title */}
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">
              Login to Saral Technology<br />
              Services Private Limited
            </h2>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mobile Number Input */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="tel"
                  name="mobileNo"
                  placeholder="Mobile No"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {/* Remember & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.remember}
                    onCheckedChange={handleCheckboxChange}
                    className="border-gray-300"
                  />
                  <label htmlFor="remember" className="text-sm text-gray-600">
                    Remember
                  </label>
                </div>
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors"
                >
                  Forgot Password
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
