
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Sending message:', message);
      // Backend integration point for chatbot
      setMessage('');
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#7CB518] hover:bg-[#6BA015] text-white rounded-full w-16 h-16 shadow-lg hover:scale-110 transition-all duration-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 animate-scale-in">
          {/* Header */}
          <div className="bg-[#001F54] text-white p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#7CB518] rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <h3 className="font-bold">WEDESIHOMES Assistant</h3>
                <p className="text-sm text-gray-300">Online • Ready to help!</p>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="h-64 p-4 overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi there! I'm here to help you find the perfect student accommodation. 
                What can I assist you with today?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 border-gray-300 focus:border-[#7CB518] focus:ring-[#7CB518]"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-[#7CB518] hover:bg-[#6BA015] text-white px-3"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
