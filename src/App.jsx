import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MapPin,
  MessageCircle,
  Mail,
  Scissors,
  Shirt,
  Users,
  Sparkles,
} from "lucide-react";
import "./App.css";

function FacebookIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.3V13h2.8v8h3.4z" />
    </svg>
  );
}

function InstagramIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="18" cy="6" r="1" fill="currentColor" />
    </svg>
  );
}

const phoneNumber = "918139804969";
const businessEmail = "threadzlinedesignsandfabrics@gmail.com";
const instagramUrl = "https://www.instagram.com/threadzline_/";
const facebookUrl = "https://www.facebook.com/share/1GnjiMry1q/?mibextid=wwXIfr";
const exactMapUrl = "https://www.google.com/maps/dir/?api=1&destination=10.154319,76.293834"
const services = [
  {
    number: "01",
    icon: <Scissors />,
    image: "/images/bulk-manufacturing.jpg",
    title: "Bulk Garment Manufacturing",
    description:
      "Stitching and production support for clothing brands and businesses. We can work with your fabric and designs or handle complete garment production.",
  },
  {
    number: "02",
    icon: <Shirt />,
    image: "/images/uniforms.jpg",
    title: "Uniform Stitching",
    description:
      "Custom stitching for school, college, corporate and sports uniforms, including bulk uniform orders.",
  },
  {
    number: "03",
    icon: <Sparkles />,
    image: "/images/wedding-wear.jpg",
    title: "Wedding & Occasion Wear",
    description:
      "Customised wedding and engagement outfits, including lehengas, lachas and gowns.",
  },
  {
    number: "04",
    icon: <Users />,
    image: "/images/custom-clothing.jpg",
    title: "Ladies, Men's & Kids Wear",
    description:
      "Stitching services for different styles and age groups, with customised options based on your requirements.",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const workVideos = [
  { title: "Bulk Stitching in Action",src: "/videos/threadzline-work-1.mp4"},
  { title: "Inside Our Stitching Unit",src: "/videos/threadzline-work-2.mp4"},
  { title: "A Closer Look at Our Work", src: "/videos/threadzline-work-3.mp4" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const whatsappLink = (message) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Threadzline Designs and Fabrics"
            className="brand-logo"
          />
          <span className="brand-sub">DESIGNS & FABRICS</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink("Hello, I would like to enquire about your services.")}
            target="_blank"
            rel="noreferrer"
            className="nav-contact"
            onClick={closeMenu}
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">THREADZLINE DESIGNS & FABRICS</p>

            <h1>
              Where Fabric
              <br />
              Meets <span>Artistry.</span>
            </h1>

            <p className="hero-description">
              Your stitching and garment manufacturing partner. From bulk
              production for brands to customised outfits, we bring your ideas
              to life, one stitch at a time.
            </p>

            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                Explore Our Services <ArrowUpRight size={17} />
              </a>

              <a
                href={whatsappLink("Hello, I would like to discuss a stitching order.")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Enquire Now
              </a>
            </div>

            <div className="hero-note">
              <span></span> Serving customers across Kerala
            </div>
          </div>

          <div className="hero-decoration">
  <div className="hero-logo-circle">
    <img src="/images/logo.png" alt="Threadzline Logo" />
  </div>
  <p>QUALITY NEVER GOES OUT OF STYLE</p>
</div>
        </section>

        {/* ABOUT */}
        <section className="about section-padding" id="about">
          <div className="section-label">01 — ABOUT US</div>

          <div className="about-content">
            <div>
              <h2>
                Stitching ideas
                <br />
                into <span>reality.</span>
              </h2>
            </div>

            <div className="about-text">
              <p>
                At Threadzline Designs & Fabrics, we provide garment stitching
                and manufacturing services for individuals, businesses and
                clothing brands.
              </p>

              <p>
                Whether you need customised outfits, uniforms or bulk garment
                production, we work with your requirements to deliver garments
                that match your designs and expectations.
              </p>

              <p>
                From customer-provided fabrics and designs to complete garment
                production, we aim to make the process simple and convenient.
              </p>
            </div>

            <div className="about-image">
              <img
                src="/images/about-work.jpg"
                alt="Garment tailor working at a sewing machine"
                loading="lazy"
              />
              <span>CRAFTED WITH CARE</span>
            </div>
          </div>

          <div className="about-highlight">
            <div>
              <span className="highlight-number">01</span>
              <p>Customised Orders</p>
            </div>
            <div>
              <span className="highlight-number">02</span>
              <p>Bulk Stitching</p>
            </div>
            <div>
              <span className="highlight-number">03</span>
              <p>Brand Manufacturing</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services section-padding" id="services">
          <div className="section-label">02 — WHAT WE DO</div>

          <div className="section-heading">
            <div>
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                Stitching solutions for individuals, businesses and brands.
              </p>
            </div>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <img
                  className="service-image"
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
                <div className="service-card-content">
                <div className="service-top">
                  <span>{service.number}</span>
                  <div className="service-icon">{service.icon}</div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a
                  href={whatsappLink(
                    `Hello, I would like to enquire about ${service.title}.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="service-link"
                >
                  Enquire about this <ArrowUpRight size={16} />
                </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* STATEMENT */}
        <section className="statement">
          <p className="eyebrow">OUR APPROACH</p>
          <h2>
            Every thread
            <br />
            tells a <span>story.</span>
          </h2>
          <p>
            Thoughtful stitching. Customised designs. Garments made with care.
          </p>
        </section>

        {/* OUR WORK */}
        <section className="work section-padding" id="work">
          <div className="section-label">03 — OUR WORK</div>

          <div className="work-content">
            <div>
              <h2>
                Made with
                <br />
                <span>care & detail.</span>
              </h2>
            </div>

            <div className="work-details">
              <p>
                Every order has its own requirements, designs and details. From
                customised outfits and occasion wear to bulk garment manufacturing,
                we bring ideas to life through quality stitching.
              </p>
              <p className="work-note">
                Explore our Instagram page to discover our latest creations,
                completed orders and work in progress.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="work-instagram-link"
                aria-label="Explore Threadzline's work on Instagram"
              >
                <InstagramIcon size={19} />
                Explore Our Work on Instagram
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>

          <div className="work-gallery-heading">
            <p className="section-label">A GLIMPSE INTO OUR WORK</p>
            <h3>Craftsmanship <span>in motion.</span></h3>
          </div>

          <div className="work-video-grid">
            {workVideos.map((video) => (
              <article className="work-video-card" key={video.src}>
                <video controls preload="metadata" playsInline>
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support HTML video.
                </video>
                <h4>{video.title}</h4>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact section-padding" id="contact">
          <div className="section-label">04 — GET IN TOUCH</div>

          <div className="contact-heading">
            <h2>
              Have a project
              <br />
              in <span>mind?</span>
            </h2>
            <p>
              Tell us what you have in mind. Let's discuss your stitching or
              manufacturing requirements.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div>
                  <span>CALL US</span>
                  <a href="tel:+918139804969">+91 81398 04969</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div>
                  <span>EMAIL US</span>
                  <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div>
                  <span>VISIT US</span>
                  <p>
                    Kunnukara Town,Near Ahana Auditorium
                    <br />
                    North Paravur, Ernakulam,
                    <br />
                    Kerala – 683578
                  </p>
                  <a
                    className="map-directions-link"
                    href={exactMapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open exact location in Google Maps <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MessageCircle />
                </div>
                <div>
                  <span>SERVICE AREA</span>
                  <p>All districts across Kerala</p>
                </div>
              </div>

              <a
                href={whatsappLink("Hello Threadzline, I would like to enquire about your services.")}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary whatsapp-button"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline instagram-button"
              >
                <InstagramIcon size={18} /> Follow us on Instagram
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline facebook-button"
              >
                <FacebookIcon size={18} /> Follow us on Facebook
              </a>
            </div>

            <div className="map-container">
              <iframe
  src="https://maps.google.com/maps?q=10.154319,76.293834&z=17&output=embed"
  width="100%"
  height="350"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-brand">
          THREADZLINE
          <span>DESIGNS & FABRICS</span>
        </a>

        <p>Stitching ideas into reality.</p>

        <div className="footer-socials">
          <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon size={19} />
            Instagram
          </a>
          <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon size={19} />
            Facebook
          </a>
          <a href={`mailto:${businessEmail}`} aria-label="Email Threadzline">
            <Mail size={19} />
            Email
          </a>
          <a
            href={whatsappLink("Hello Threadzline, I would like to enquire about your services.")}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={19} />
            WhatsApp
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-credits">
            <span>© {new Date().getFullYear()} Threadzline Designs & Fabrics. All Rights Reserved.</span>
            <span>Website Designed &amp; Developed by Sidaan Siddiqu.</span>
          </div>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <a
        className="floating-facebook"
        href={facebookUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow Threadzline on Facebook"
      >
        <FacebookIcon size={24} />
      </a>

      <a
        className="floating-instagram"
        href={instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Follow Threadzline on Instagram"
      >
        <InstagramIcon size={24} />
      </a>

      <a
        className="floating-whatsapp"
        href={whatsappLink("Hello Threadzline, I would like to enquire about your services.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Threadzline on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}

export default App;