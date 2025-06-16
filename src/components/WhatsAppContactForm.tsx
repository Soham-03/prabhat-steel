import { motion } from "framer-motion";
import { useState } from "react";

export function WhatsAppContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'Select a product'
  });

  const products = [
    "Stainless Steel Products",
    "MS & GI Coated Products",
    "Aluminium Products",
    "Duplex Steel Products",
    "Super Duplex Steel Products",
    "Alloy Steel Products",
    "Brass & Copper Products",
    "Carbon Steel Products",
    "Tool Steel Products",
    "Hastelloy Products"
  ];

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateWhatsAppLink = () => {
    if (!formData.name || !formData.phone || formData.product === 'Select a product') {
      return '#';
    }

    const message = `Hello Prabhat Steel, I am ${formData.name} (${formData.phone}). I am interested in your ${formData.product} and would like to know more details.`;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/918369657425?text=${encodedMessage}`;
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <label htmlFor="name" className="block text-[#FBF8F3]/70 mb-2">Your Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#222222] border border-[#333333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all duration-300"
            placeholder="John Doe"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <label htmlFor="phone" className="block text-[#FBF8F3]/70 mb-2">Phone Number*</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-[#222222] border border-[#333333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all duration-300"
            placeholder="+91 ‭8369657425‬"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <label htmlFor="product" className="block text-[#FBF8F3]/70 mb-2">Product Interest*</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full bg-[#222222] border border-[#333333] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all duration-300 appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2325D366'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '3rem'
            }}
          >
            <option disabled>Select a product</option>
            {products.map((product, index) => (
              <option key={index} value={product}>{product}</option>
            ))}
          </select>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-6"
      >
        <div className="p-4 bg-[#222222] rounded-lg mb-6">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
            </svg>
            Message Preview
          </h3>
          <p className="text-[#FBF8F3]/70 text-sm">
            {formData.name && formData.phone && formData.product !== 'Select a product'
              ? `Hello Prabhat Steel, I am ${formData.name} (${formData.phone}). I am interested in your ${formData.product} and would like to know more details.`
              : "Complete the form to see your message preview."}
          </p>
        </div>

        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full flex items-center justify-center gap-2 ${formData.name && formData.phone && formData.product !== 'Select a product'
              ? 'bg-[#25D366] hover:bg-[#20BD5A] cursor-pointer'
              : 'bg-[#25D366]/50 cursor-not-allowed'
            } text-white px-6 py-3 rounded-full font-medium transition-all duration-300`}
          onClick={(e) => {
            if (!formData.name || !formData.phone || formData.product === 'Select a product') {
              e.preventDefault();
              alert('Please fill in all required fields.');
            }
          }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with Us on WhatsApp
        </a>

        <p className="text-center text-[#FBF8F3]/60 text-sm mt-4">
          By clicking the button, you'll be redirected to WhatsApp with a pre-filled message
        </p>
      </motion.div>

      {/* Benefits of WhatsApp Contact */}
      <motion.div
        className="mt-8 pt-8 border-t border-[#333333]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-semibold mb-4">Why Contact Us on WhatsApp?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Quick Response",
              description: "Get immediate attention from our product specialists"
            },
            {
              title: "Share Media",
              description: "Easily send images of your requirements or project"
            },
            {
              title: "24/7 Access",
              description: "Connect with us anytime, even outside business hours"
            },
            {
              title: "Track Conversation",
              description: "Keep a record of all discussions for future reference"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 bg-[#25D366]/20 rounded-full p-1">
                <svg className="w-3 h-3 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium">{benefit.title}</h4>
                <p className="text-[#FBF8F3]/60 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}