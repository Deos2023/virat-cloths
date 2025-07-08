

"use client"
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaShoppingBag,
  FaIndianRupeeSign,
  FaRupeeSign,
} from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { MdEmail, MdOutlineExpandMore } from 'react-icons/md';
import Image from 'next/image';


const ViratClothes = () => {
  const [showMoreProducts, setShowMoreProducts] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const testimonialRef = useRef(null);

  

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      comment: 'Excellent collection of traditional sarees at affordable prices. Highly recommended!',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ananya Das',
      comment: 'Found some rare vintage pieces for my collection. The quality is superb.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Rina Banerjee',
      comment: 'Friendly staff and great prices. Will definitely shop here again.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Mousumi Roy',
      comment: 'Authentic traditional wear with reasonable pricing. Loved my purchase!',
      rating: 4,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/918100551766?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="font-sans bg-amber-50 text-gray-800">
      <Head>
        <title>Virat Clothes - Traditional Clothing Store in Kolkata</title>
        <meta
          name="description"
          content="Virat Clothes offers authentic traditional sarees and clothing in Kolkata. Visit us near Kalighat Mandir for the best deals on quality fabrics."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
     
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-amber-800 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <Image
      src="/bg.jpg"
      alt="Traditional Saree Background"
      fill
      className="object-cover"
      priority={true} // Important for above-the-fold images
      quality={75}   // Optimizes image quality
      sizes="100vw"  // Full viewport width
    />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Preserving Tradition Through Clothing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Authentic traditional sarees and clothing at affordable prices in Kolkata
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center space-x-2"
            >
              <FaShoppingBag />
              <span>Shop Now</span>
            </a>
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-amber-800 px-6 py-3 rounded-lg font-medium transition flex items-center justify-center space-x-2"
            >
              <FaWhatsapp />
              <span>Contact Us</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">About Virat Clothes</h2>
      <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
    </motion.div>

    <div className="flex flex-col md:flex-row items-center gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        {/* Changed to aspect ratio container */}
        <div className="relative aspect-[4/3] md:aspect-[3/4] w-full rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/img/1 (22).jpeg" // Double check this path is correct
            alt="Virat Clothes Store Interior"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h3 className="text-2xl font-semibold text-amber-800 mb-4">
          Your Trusted Traditional Clothing Store
        </h3>
        <p className="text-gray-700 mb-4">
          Located in the heart of Kolkata near the historic Kalighat Mandir, Virat Clothes has been
          serving customers with authentic traditional sarees and clothing for years. We take pride in
          offering quality fabrics that celebrate India&apos;s rich textile heritage.
        </p>
        <p className="text-gray-700 mb-4">
          Our collection includes a wide range of traditional wear from various regions of India, carefully
          selected to meet the needs of modern women who appreciate traditional craftsmanship.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <div className="bg-amber-100 px-4 py-2 rounded-lg flex items-center space-x-2">
            <GiClothes className="text-amber-700" />
            <span>Authentic Fabrics</span>
          </div>
          <div className="bg-amber-100 px-4 py-2 rounded-lg flex items-center space-x-2">
            <FaRupeeSign className="text-amber-700" />
            <span>Affordable Prices</span>
          </div>
          <div className="bg-amber-100 px-4 py-2 rounded-lg flex items-center space-x-2">
            <FaMapMarkerAlt className="text-amber-700" />
            <span>Prime Location</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* What We Sell Section */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-amber-700 text-4xl mb-4">
                <GiClothes />
              </div>
              <h3 className="text-xl font-semibold mb-3">Traditional Sarees</h3>
              <p className="text-gray-700">
                From Banarasi to Kanjivaram, we offer a wide variety of authentic traditional sarees that
                showcase India&apos;s textile diversity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-amber-700 text-4xl mb-4">
                <GiClothes />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vintage Collections</h3>
              <p className="text-gray-700">
                Rare and vintage pieces for collectors and those who appreciate the craftsmanship of bygone
                eras.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-amber-700 text-4xl mb-4">
                <GiClothes />
              </div>
              <h3 className="text-xl font-semibold mb-3">Affordable Options</h3>
              <p className="text-gray-700">
                Quality traditional wear at prices that won&apos;t break the bank, making heritage accessible to
                everyone.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Why Choose Virat Clothes</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-amber-50 p-6 rounded-lg border border-amber-200"
            >
              <div className="text-amber-700 text-3xl mb-3">
                <FaRupeeSign  />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-gray-700">
                We offer the best prices for authentic traditional clothing in Kolkata.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-amber-50 p-6 rounded-lg border border-amber-200"
            >
              <div className="text-amber-700 text-3xl mb-3">
                <GiClothes />
              </div>
              <h3 className="text-lg font-semibold mb-2">Authentic Collections</h3>
              <p className="text-gray-700">
                Genuine traditional wear sourced directly from weavers and artisans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-amber-50 p-6 rounded-lg border border-amber-200"
            >
              <div className="text-amber-700 text-3xl mb-3">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-700">
                Conveniently located near Kalighat Mandir, easily accessible to all.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-amber-50 p-6 rounded-lg border border-amber-200"
            >
              <div className="text-amber-700 text-3xl mb-3">
                <FaStar />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Our happy customers are our best advertisement. Your satisfaction is guaranteed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
     <section id="products" className="py-16 bg-amber-100">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Collection</h2>
      <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
    </motion.div>

    {/* Generate image array */}
    {(() => {
      const images = Array.from({ length: 31 }, (_, i) => `/img/1 (${i + 1}).jpeg`);
      
      return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.slice(0, showMoreProducts ? images.length : 12).map((image, index) => (
              <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.05 }}
  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
>
  <div className="h-48 relative overflow-hidden"> {/* Added 'relative' here */}
    <Image
      src={image}
      alt={`Traditional clothing ${index + 1}`}
      fill
      className="object-cover hover:scale-105 transition duration-500"
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
      loading={index < 4 ? 'eager' : 'lazy'}
    />
  </div>
</motion.div>
            ))}
          </div>

          {images.length > 12 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowMoreProducts(!showMoreProducts)}
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-lg font-medium transition flex items-center mx-auto space-x-2"
              >
                <span>{showMoreProducts ? 'Show Less' : 'Show More'}</span>
                <MdOutlineExpandMore
                  className={`transition-transform ${showMoreProducts ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </>
      );
    })()}
  </div>
</section>
 <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden shadow-xl"
          >
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.567200778309!2d88.3412946!3d22.5204159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277941ab957e7%3A0x5d26a4a849567b1!2sVirat%20Clothes!5e0!3m2!1sen!2sin!4v1751970521903!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
              title="New Wings Foundation Location"
            ></iframe>
          </motion.div>
      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                ref={testimonialRef}
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-amber-50 p-8 rounded-lg shadow-md">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6">&quot;{testimonial.comment}&quot;</p>
                      <p className="font-semibold text-amber-800">— {testimonial.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition"
            >
              <FaChevronLeft className="text-amber-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-100 transition"
            >
              <FaChevronRight className="text-amber-700" />
            </button>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-amber-700' : 'bg-amber-300'}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-amber-300 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-amber-300 mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p>
                      Shyama Prasad Mukherjee Rd, near Kalighat Mandir,
                      <br />
                      Anami Sangha, Kalighat, Kolkata,
                      <br />
                      West Bengal 700026
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-amber-300">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p>8100551766</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-amber-300">
                    <MdEmail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p>ambaliyadayaram@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Business Hours</h4>
                <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                <p>Sunday: 11:00 AM - 6:00 PM</p>
              </div>

              <div className="mt-8">
                <a
                  href="https://wa.me/918100551766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition inline-flex items-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded bg-amber-900 border border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition w-full"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Explore Our Collection?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Visit our store in Kalighat or contact us today to find your perfect traditional outfit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#contact"
                className="bg-white hover:bg-gray-100 text-amber-800 px-6 py-3 rounded-lg font-medium transition"
              >
                Contact Us
              </a>
              <a
                href="tel:8100551766"
                className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center space-x-2"
              >
                <FaPhone />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      {/* Brand Info */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center space-x-3 mb-4">
          <GiClothes className="text-3xl text-amber-300" />
          <span className="text-2xl font-bold">Virat Clothes</span>
        </div>
        <p className="text-amber-200 text-center md:text-left">
          Your trusted source for authentic traditional clothing in Kolkata since 2010.
        </p>
      </div>

      {/* Quick Links */}
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4 text-amber-300">Quick Links</h3>
        <ul className="space-y-2 text-center">
          <li><a href="#home" className="hover:text-amber-300 transition">Home</a></li>
          <li><a href="#products" className="hover:text-amber-300 transition">Collections</a></li>
          <li><a href="#contact" className="hover:text-amber-300 transition">Contact</a></li>
          <li><a href="#testimonials" className="hover:text-amber-300 transition">Testimonials</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-xl font-semibold mb-4 text-amber-300">Contact Us</h3>
        <div className="space-y-2 text-center md:text-right">
          <p className="flex items-center justify-center md:justify-end space-x-2">
            <FaMapMarkerAlt className="text-amber-300" />
            <span>Kalighat, Kolkata - 700026</span>
          </p>
          <p className="flex items-center justify-center md:justify-end space-x-2">
            <FaPhone className="text-amber-300" />
            <a href="tel:8100551766" className="hover:text-amber-300">8100551766</a>
          </p>
          <p className="flex items-center justify-center md:justify-end space-x-2">
            <FaEnvelope className="text-amber-300" />
            <a href="mailto:ambaliyadayaram@gmail.com" className="hover:text-amber-300">ambaliyadayaram@gmail.com</a>
          </p>
        </div>
      </div>
    </div>

    {/* Social Links */}
    <div className="flex justify-center space-x-6 mb-8">
      <a
        href="https://wa.me/918100551766"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </a>
      <a
        href="mailto:ambaliyadayaram@gmail.com"
        className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition"
        aria-label="Email"
      >
        <FaEnvelope className="text-xl" />
      </a>
      <a 
        href="tel:8100551766"
        className="bg-amber-800 hover:bg-amber-700 p-3 rounded-full transition"
        aria-label="Phone"
      >
        <FaPhone className="text-xl" />
      </a>
    </div>

    {/* Copyright and Credits */}
    <div className="border-t border-amber-800 pt-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-amber-200 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Virat Clothes. All rights reserved.
        </p>
        <p className="text-xs text-amber-400">
          Website developed and maintained by{' '}
          <a 
            href="https://digitalexposure.co.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-amber-300 hover:underline"
          >
            Digital Exposure Online Services
          </a>
        </p>
      </div>
      <p className="text-xs text-amber-400 mt-2 text-center">
        Shyama Prasad Mukherjee Rd, near Kalighat Mandir, Anami Sangha, Kalighat, Kolkata, West Bengal 700026
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default ViratClothes;