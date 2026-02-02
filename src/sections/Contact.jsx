import React, { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent! (Frontend demo - no actual email sent)");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/1mhmd1",
      icon: <Github size={24} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mohammad-salim-33ab82361",
      icon: <Linkedin size={24} />,
    },
    {
      name: "Email",
      url: "mailto:Mohammad.salim.2003@gmail.com",
      icon: <Mail size={24} />,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-2xl text-primary drop-shadow-[0_0_10px_hsl(120_100%_50%/0.5)] mb-12">
          <span className="text-muted-foreground">&gt;</span> contact
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="border border-border bg-card p-4 shadow-[inset_0_0_30px_hsl(120_100%_50%/0.05)]">
            <div className="font-terminal text-xl mb-6">
              <span className="text-primary">$</span> ./send-message.sh
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-terminal text-muted-foreground block mb-2">
                  <span className="text-primary">&gt;</span> name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border p-3 font-terminal text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your name..."
                />
              </div>

              <div>
                <label className="font-terminal text-muted-foreground block mb-2">
                  <span className="text-primary">&gt;</span> email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border p-3 font-terminal text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your email..."
                />
              </div>

              <div>
                <label className="font-terminal text-muted-foreground block mb-2">
                  <span className="text-primary">&gt;</span> message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-background border border-border p-3 font-terminal text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full font-terminal text-lg py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />[ Send Message ]
              </button>
            </form>
          </div>

          {}
          <div className="border border-border bg-card p-4 shadow-[inset_0_0_30px_hsl(120_100%_50%/0.05)]">
            <div className="font-terminal text-xl mb-6">
              <span className="text-primary">$</span> cat social-links.txt
            </div>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-border hover:border-primary hover:bg-secondary/30 transition-all group"
                >
                  <div className="text-muted-foreground group-hover:text-primary transition-colors">
                    {link.icon}
                  </div>
                  <span className="font-terminal text-lg text-muted-foreground group-hover:text-primary transition-colors">
                    {link.name}
                  </span>
                  <span className="ml-auto font-terminal text-muted-foreground text-sm">
                    [open]
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-4 border border-border">
              <div className="font-terminal text-muted-foreground">
                <span className="text-primary">&gt;</span> Looking forward to
                connecting!
              </div>
              <div className="font-terminal text-primary mt-2">
                <span className="animate-[blink_1s_infinite]">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
