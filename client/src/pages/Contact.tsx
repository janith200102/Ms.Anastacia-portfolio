import { PageTransition } from "@/components/PageTransition";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@shared/routes";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Mail, Phone } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  return (
    <PageTransition className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-primary font-medium tracking-widest uppercase mb-2">Get in Touch</h2>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Let's Collaborate
              </h1>
              <p className="text-muted-foreground text-lg">
                Ready to elevate your brand with a professional voice? Contact me today for bookings and inquiries.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">WhatsApp</p>
                  <a 
                    href="https://wa.me/94766511237" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl text-white font-medium hover:text-primary transition-colors"
                  >
                    076 65 11 237
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                  <a 
                    href="mailto:ms.anastacia99@gmail.com" 
                    className="text-xl text-white font-medium hover:text-primary transition-colors"
                  >
                    ms.anastacia99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Facebook</p>
                  <p className="text-xl text-white font-medium">Ms.Anastacia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-secondary/30 p-8 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm">
            <Form {...form}>
              <form 
                action="https://formspree.io/f/xykkkkag"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            name="name"
                            placeholder="John Doe" 
                            className="bg-background/50 border-white/10 text-white focus:border-primary" 
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            name="email"
                            type="email"
                            placeholder="john@example.com" 
                            className="bg-background/50 border-white/10 text-white focus:border-primary" 
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          name="subject"
                          placeholder="Project Inquiry" 
                          className="bg-background/50 border-white/10 text-white focus:border-primary" 
                          value={field.value || ''} 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          name="message"
                          placeholder="Tell me about your project..." 
                          className="min-h-[120px] bg-background/50 border-white/10 text-white focus:border-primary" 
                          required
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary text-primary-foreground font-bold text-lg hover:bg-yellow-400"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
