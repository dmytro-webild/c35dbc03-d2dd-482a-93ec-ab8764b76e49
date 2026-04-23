"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from "@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen";
import HeroOverlayTestimonial from "@/components/sections/hero/HeroOverlayTestimonial";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import TeamCardSix from "@/components/sections/team/TeamCardSix";
import TeamCardOne from "@/components/sections/team/TeamCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import { Apple, Users, ShoppingBasket, Award } from "lucide-react";

export default function KingsMarketPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            brandName="Kings Market"
            navItems={[
              { name: "Departments", id: "services" },
              { name: "Our Story", id: "about" },
              { name: "Community", id: "team" },
              { name: "Testimonials", id: "testimonials" },
              { name: "Order Online", id: "contact" },
            ]}
            button={{ text: "Get Directions", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroOverlayTestimonial
            tag="Open Now — Closes at 9 PM"
            tagIcon={Apple}
            title="Premium Essentials, Rooted in the Mission"
            description="From California's finest farmers to your kitchen table. Discover quality produce, artisanal goods, and neighborhood hospitality at 2398 Bryant St."
            buttons={[
              { text: "Browse Departments", href: "#services" },
              { text: "Weekly Specials", href: "#about" },
            ]}
            buttonAnimation="slide-up"
            imageSrc="http://img.b2bpic.net/free-photo/young-woman-with-dyed-hair-near-shop_23-2149488672.jpg"
            imageAlt="Kings Market storefront on Bryant Street"
            showDimOverlay={true}
            textPosition="bottom"
            testimonials={[
              {
                name: "Elena R.",                handle: "Local Resident",                testimonial: "The selection of local produce is unmatched. It's the heart of our neighborhood!",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-shopping-buying-consumer-goods_23-2151669840.jpg"},
              {
                name: "Marcus T.",                handle: "Chef",                testimonial: "I source all my fresh ingredients from here. Simply the best quality in SF.",                rating: 5,
                imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-with-plate_23-2148471884.jpg"},
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            tag="Our Heritage"
            tagIcon={Users}
            tagAnimation="slide-up"
            title="More than just a market — a cornerstone of the Mission District since 1988."
            description="Sourcing with integrity, supporting our California growers."
            subdescription="Visit us daily from 8 AM to 9 PM"
            icon={Award}
            imageSrc="http://img.b2bpic.net/free-photo/african-american-man-displaying-bio-fruits-vegetables-small-business-farming-shop-locally-grown-seasonal-products-female-client-looking-colorful-fresh-natural-produce-farmers-market_482257-66031.jpg"
            mediaAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>

        <div id="services" data-section="services">
          <FeatureCardNineteen
            tag="Our Departments"
            title="Curated for Quality"
            description="Everything you need for a premium pantry experience."
            textboxLayout="default"
            useInvertedBackground={false}
            features={[
              { tag: "Farm Fresh", title: "Produce", subtitle: "Local Harvest", description: "Hand-picked fruits and vegetables from California's best family farms.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-vegetable_140725-103354.jpg" },
              { tag: "Expertly Cut", title: "Deli", subtitle: "Ready-to-Eat", description: "Premium meats, imported cheeses, and house-made salads daily.", imageSrc: "http://img.b2bpic.net/free-photo/assorted-ingredients-around-chalkboard_23-2147930036.jpg" },
              { tag: "Essentials", title: "Pantry", subtitle: "Artisan Goods", description: "Small-batch staples, pantry basics, and local organic products.", imageSrc: "http://img.b2bpic.net/free-photo/person-with-donated-food_23-2148613172.jpg" },
              { tag: "Crafted", title: "Artisans", subtitle: "Local Finds", description: "Handmade chocolates, baked goods, and unique kitchen treasures.", imageSrc: "http://img.b2bpic.net/free-photo/glass-jars-with-different-kinds-jam-berries-supermarket-shelves-grocery-store-homemade-canning-products-made-with-love_627829-8314.jpg" },
            ]}
          />
        </div>

        <div id="why-us" data-section="why-us">
          <TeamCardSix
            title="Why The Neighborhood Loves Us"
            description="Commitment to community and quality excellence."
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            members={[
              { id: "1", name: "California Sourced", role: "Direct-from-farm produce delivered every single morning.", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-holding-tomatoes-basket_23-2149893532.jpg" },
              { id: "2", name: "Neighborhood Focus", role: "We champion local artisans and support small makers.", imageSrc: "http://img.b2bpic.net/free-photo/vendor-carrying-lemons-customers_482257-102023.jpg" },
              { id: "3", name: "Premium Quality", role: "Every item on our shelves is hand-selected for excellence.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-female-cook-cleaning-tangerines-dark-surface_179666-44540.jpg" },
            ]}
          />
        </div>

        <div id="team" data-section="team">
          <TeamCardOne
            tag="Community News"
            title="Meet Our Vendors"
            description="Highlights from this week's community events and spotlighted local producers."
            animationType="slide-up"
            gridVariant="uniform-all-items-equal"
            members={[
              { id: "1", name: "Mission Farmers", role: "Partnering for 10+ years.", imageSrc: "http://img.b2bpic.net/free-photo/senior-man-young-woman-buying-organic-bio-products_482257-77601.jpg" },
              { id: "2", name: "Artisan Bakers", role: "Fresh sourdough daily.", imageSrc: "http://img.b2bpic.net/free-photo/warm-round-bread-wrapped-cloth_23-2148438643.jpg" },
              { id: "3", name: "Community Events", role: "Sponsoring Bryant St block parties.", imageSrc: "http://img.b2bpic.net/free-photo/multicultural-volunteers-teaming-up-serve-hot-meals-food-drive-embodying-spirit-volunteering-giving-back-community-african-american-homeless-man-receiving-donated-fruits_482257-72609.jpg" },
            ]}
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            cardTag="Customer Stories"
            cardTitle="Join the thousands of happy shoppers who make Kings Market their go-to."
            cardAnimation="slide-up"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Sarah J.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-vegetables-grocery-bag-home_1301-7675.jpg" },
              { id: "2", name: "Mike D.", imageSrc: "http://img.b2bpic.net/free-photo/handsome-male-traveler-local-outdoor-place_23-2149016728.jpg" },
              { id: "3", name: "Amy L.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-woman-looking-lemons_23-2148238100.jpg" },
              { id: "4", name: "Leo B.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-male-gardener-wearing-gardening-hat-holds-vegetable-basket_141793-116143.jpg" },
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            tag="FAQ"
            title="Common Questions"
            description="Everything you need to know about shopping with us."
            faqsAnimation="slide-up"
            faqs={[
              { id: "1", title: "Do you offer delivery?", content: "Yes, we partner with local delivery services to get your groceries from our store to your door." },
              { id: "2", title: "Are you open on holidays?", content: "Check our live status in the top bar for special holiday hours." },
              { id: "3", title: "Can I pick up my order?", content: "Certainly! Order online and we'll have it ready for curbside pickup at our Bryant St entrance." },
              { id: "4", title: "Do you carry local gluten-free products?", content: "We have a dedicated selection of GF staples from SF-based bakers." },
            ]}
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            title="Find Us or Order Now"
            description="2398 Bryant St, San Francisco, CA. Get in touch or browse our local delivery inventory."
            imageSrc="http://img.b2bpic.net/free-photo/travel-composition-with-slate_23-2147982057.jpg"
            inputs={[
              { name: "name", type: "text", placeholder: "Full Name" },
              { name: "email", type: "email", placeholder: "Email Address" },
            ]}
            buttonText="Get Directions"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterSimple
            columns={[
              { title: "Shop", items: [{ label: "Produce" }, { label: "Deli" }, { label: "Pantry" }] },
              { title: "Store", items: [{ label: "Our Story" }, { label: "Events" }, { label: "Careers" }] },
              { title: "Contact", items: [{ label: "(415) 555-0123" }, { label: "info@kingsmarket.sf" }] },
            ]}
            bottomLeftText="© 2025 Kings Market"
            bottomRightText="San Francisco, CA"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}