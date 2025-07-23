import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building2, Factory, Globe, Send, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    enquiryType: '',
    message: ''
  });

  const offices = [
    {
      icon: Factory,
      title: 'Manufacturing Office',
      location: 'Noida',
      address: ' D-14, 1st Floor, Sector 10, Noida - 201301',
      phone: '+91 7004303889',
      email: 'info@shiningcarz.com'
    },
    {
      icon: Building2,
      title: 'Corporate Office',
      location: 'Gurgaon',
      address: 'Golf Course Road, Opp. metro pillar no. 175,Sec-54, Gurgaon - 122002',
      phone: '+917840014904',
      email: ' info@shiningcarz.com'
    },
    {
      icon: Globe,
      title: 'Regional Office',
      location: 'Jaipur',
      address: '1 - 466, Chitrakoot Marg, SanjayNagar,Jaipur - 302021',
      phone: '+91 7840014904',
      email: 'info@shiningcarz.com'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      company: formData.company,
      message: formData.message,
      enquiryType: formData.enquiryType,
    };
    console.log('Sending to API:', body);
    try {
      const response = await fetch('https://autocare-server-240327296577.europe-west1.run.app/api/superAdmin/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        toast
        ({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          enquiryType: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.error || "Failed to send message.",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again later.",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Get in
            <span className="block gold-gradient bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to transform your vehicle? Contact us today and experience the Shining Carz difference.
          </p>
        </div>

        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div key={office.title} className="luxury-card p-6 shine-effect text-center">
              <div className="inline-flex p-4 rounded-full gold-gradient mb-4">
                <office.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">{office.title}</h3>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-semibold">{office.location}</span>
                </div>
                <p className="text-sm">{office.address}</p>
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">{office.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">{office.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="luxury-card p-8">
            <h3 className="text-2xl font-bold font-playfair mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-background/50 border-accent/30"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-background/50 border-accent/30"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-background/50 border-accent/30"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-background/50 border-accent/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Enquiry Type *</label>
                <Select onValueChange={(value) => handleInputChange('enquiryType', value)}>
                  <SelectTrigger className="bg-background/50 border-accent/30">
                    <SelectValue placeholder="Select enquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">Car Service</SelectItem>
                    <SelectItem value="products">Products</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="support">Customer Support</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="bg-background/50 border-accent/30 min-h-[120px]"
                  placeholder="Tell us about your requirements..."
                  required
                />
              </div>

              <Button type="submit" className="luxury-button w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Map */}
          <div className="luxury-card p-8">
            <h3 className="text-2xl font-bold font-playfair mb-6">Find Us</h3>
            <div className="relative h-[400px] bg-muted/20 rounded-lg overflow-hidden">
              {/* Placeholder for Google Map - you would integrate Google Maps API here */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="text-center">
                  <iframe
                      title="Shining Carz Location"
                      src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d219.19841592141137!2d77.50869218380157!3d28.47428636036136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d28.474303748731323!2d77.50893090039455!5e0!3m2!1sen!2sin!4v1751834578232!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 , overflow: "hidden", minHeight: '400px', height: '100%', minWidth: '600px', width: '100%' }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  {/* <h4 className="text-xl font-bold mb-2">Corporate Headquarters</h4>
                  <p className="text-foreground/70">567 Business Plaza, NYC, NY 10001</p>
                  <Button className="luxury-button mt-4">
                    Open in Maps
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;