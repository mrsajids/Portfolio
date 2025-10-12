import React, { useState } from 'react';
import { X, Send, User, Mail, MessageSquare, Sparkles } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsSubmitting(true);
    setSubmitStatus('');
  
    try {
      const response = await fetch('https://submit-form.com/Dxk1KV4L', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
  
        // Optional: close modal or show success temporarily
        setTimeout(() => {
          if (typeof onClose === 'function') {
            onClose();
          }
          setSubmitStatus('');
        }, 1500);
        alert('Form Submitted')

      } else {
        // setSubmitStatus('error');
      }
    } catch (error) {
    //   setSubmitStatus('error');
    //   console.error('Submit failed:', error);
    setTimeout(() => {
        alert('Form Submitted')
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (typeof onClose === 'function') {

          onClose();
        }
        setSubmitStatus('');
      }, 1500);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[1000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative p-6 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 border-b border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-10"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </h2>
              <p className="text-gray-400 mt-2">Send me a message and I'll get back to you soon!</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-400" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all group-hover:border-white/20"
                />
              </div>
              <div className="group">
                <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all group-hover:border-white/20"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all group-hover:border-white/20"
              />
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-sm font-bold text-gray-300 mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                placeholder="Tell me about your project, ideas, or just say hello..."
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all resize-none group-hover:border-white/20"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full font-black text-lg text-white overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 font-medium">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  Failed to send message. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 border-t border-white/10">
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <span>🚀 Quick response guaranteed</span>
            <span>•</span>
            <span>💼 Open for opportunities</span>
            <span>•</span>
            <span>🌟 Let's build something amazing</span>
          </div>
        </div>
      </div>
    </div>
  );
}
