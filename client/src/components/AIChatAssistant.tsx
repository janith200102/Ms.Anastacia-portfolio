import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm Ms. Anastacia's virtual assistant. How can I help you with your voice-over or event needs?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages, isTyping]);

  const getBotResponse = (userText: string) => {
    const text = userText.toLowerCase();
    
    if (text.includes("price") || text.includes("rate") || text.includes("cost") || text.includes("charges")) {
      return "My rates depend on the project type and length. Please contact me on WhatsApp for a custom quote!";
    }
    
    if (text.includes("contact") || text.includes("number") || text.includes("whatsapp") || text.includes("email")) {
      return "You can reach me via WhatsApp at 076 65 11 237 or email ms.anastacia99@gmail.com.";
    }
    
    if (text.includes("service") || text.includes("hosting") || text.includes("voice") || text.includes("work")) {
      return "I offer Event Hosting, Commercial Voice Overs, Dubbing, and Documentary Narration. Check out my Portfolio page!";
    }
    
    if (text.includes("location") || text.includes("where") || text.includes("place")) {
      return "I am based in Sri Lanka and available for island-wide events.";
    }
    
    if (text.includes("hello") || text.includes("hi")) {
      return "Hello! I'm Ms. Anastacia's virtual assistant. How can I help you with your voice-over or event needs?";
    }

    return "I'm not sure about that, but I'd love to chat! <a href='https://wa.me/94766511237' target='_blank' style='color: #D4AF37; text-decoration: underline;'>Click here to message me on WhatsApp</a>.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5 z-[1000]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4"
          >
            <Card className="w-[320px] sm:w-[380px] h-[500px] flex flex-col shadow-2xl border-primary/20 bg-background/95 backdrop-blur-md">
              <CardHeader className="bg-primary p-4 rounded-t-lg flex flex-row items-center justify-between space-y-0">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1.5 rounded-full">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white text-sm font-display tracking-wide">
                    Anastacia AI Assistant
                  </CardTitle>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-white hover:bg-white/20 h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardHeader>
              
              <CardContent className="flex-1 p-4 overflow-hidden">
                <ScrollArea ref={scrollAreaRef} className="h-full pr-4">
                  <div className="flex flex-col gap-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                            msg.sender === "user"
                              ? "bg-primary text-white rounded-tr-none"
                              : "bg-muted text-foreground rounded-tl-none border border-border"
                          }`}
                          dangerouslySetInnerHTML={{ __html: msg.text }}
                        />
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted text-foreground rounded-2xl rounded-tl-none px-4 py-2 text-sm border border-border flex gap-1">
                          <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce"></span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex w-full items-center gap-2"
                >
                  <Input
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-muted/50 border-primary/20 focus-visible:ring-primary h-9"
                  />
                  <Button type="submit" size="icon" className="h-9 w-9 shrink-0">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 ${
          isOpen ? "bg-muted text-foreground border-border" : "bg-primary text-white"
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
