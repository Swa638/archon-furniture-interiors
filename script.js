function inspiration(category, title, photoId, alt, position = "center") {
  return {
    title,
    category,
    src: `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=1200&q=84`,
    alt: `Illustrative ${alt}`,
    position
  };
}

const inspirationImages = [
  inspiration("Modular Kitchens", "Warm wood and clean lines", "photo-1556911220-e15b29be8c8f", "modern kitchen with warm wood cabinets"),
  inspiration("Modular Kitchens", "A light-filled kitchen", "photo-1600607687939-ce8a6c25118c", "contemporary kitchen with a central island"),
  inspiration("Modular Kitchens", "Calm, considered cabinetry", "photo-1600566753086-00f18fb6b3ea", "modular kitchen cabinets and counter"),
  inspiration("Modular Kitchens", "A welcoming place to gather", "photo-1600585154340-be6161a56a0c", "spacious kitchen with natural finishes"),

  inspiration("Kitchen Fittings", "Everyday details", "photo-1556912172-45b7abe8b7e1", "kitchen cabinetry and fittings"),
  inspiration("Kitchen Fittings", "Thoughtful storage", "photo-1600566753190-17f0baa2a6c3", "kitchen storage with considered finishes"),
  inspiration("Kitchen Fittings", "A practical kitchen workspace", "photo-1618220179428-22790b461013", "bright kitchen interior and cabinets"),

  inspiration("Home Interiors", "A softer place to land", "photo-1600210492486-724fe5c67fb0", "comfortable living room interior"),
  inspiration("Home Interiors", "Restful bedroom layers", "photo-1505693416388-ac5ce068fe85", "bedroom with a thoughtfully furnished bed"),
  inspiration("Home Interiors", "A fresh take on living", "photo-1600210491892-03d54c0aaf87", "modern lounge with coordinated furnishings"),
  inspiration("Home Interiors", "A home in warm neutrals", "photo-1616486338812-3dadae4b4ace", "serene bedroom with wood furniture"),
  inspiration("Home Interiors", "Rooms that work together", "photo-1600607687920-4e2a09cf159d", "welcoming open-plan home interior"),

  inspiration("Wardrobes", "Bedroom storage, thoughtfully done", "photo-1595428774223-ef52624120d2", "bedroom with built-in wardrobe storage"),
  inspiration("Wardrobes", "A quieter kind of order", "photo-1598928506311-c55ded91a20c", "wardrobe and bedroom storage inspiration"),

  inspiration("Office Furniture", "A brighter workday", "photo-1497366754035-f200968a6e72", "bright office desks and workstations"),
  inspiration("Office Furniture", "Space to focus", "photo-1497366216548-37526070297c", "modern office workstation and desks"),
  inspiration("Office Furniture", "A place to share ideas", "photo-1497366811353-6870744d04b2", "collaborative office and meeting furniture"),
  inspiration("Office Furniture", "Room for a bigger picture", "photo-1497366858526-0766cadbe8fa", "professional meeting room table and chairs"),
  inspiration("Office Furniture", "An organised workspace", "photo-1524758631624-e2822e304c36", "work desk and office furniture"),

  inspiration("School Furniture", "A classroom ready to learn", "photo-1509062522246-3755977927d7", "classroom desks and chairs for students"),
  inspiration("School Furniture", "A bright learning space", "photo-1580582932707-520aed937b7b", "classroom desks arranged for learning"),
  inspiration("School Furniture", "Room for young minds", "photo-1503676260728-1c00da094a0b", "students working at classroom tables"),
  inspiration("School Furniture", "Learning side by side", "photo-1427504494785-3a9ca7044f45", "students in a classroom with desks"),

  inspiration("Sofas", "An easy place to gather", "photo-1555041469-a586c61ea9bc", "contemporary sofa and living room"),
  inspiration("Sofas", "A softer silhouette", "photo-1550254478-ead40cc54513", "upholstered sofa in a modern home"),
  inspiration("Sofas", "Make space to settle in", "photo-1540574163026-643ea20ade25", "comfortable sofa seating and cushions"),
  inspiration("Sofas", "A little room for everyone", "photo-1550581190-9c1c48d21d6c", "inviting fabric sofa and lounge"),
  inspiration("Sofas", "A chair of your own", "photo-1567538096630-e0c55bd6374c", "modern upholstered occasional chair"),

  inspiration("Custom Furniture", "Made-to-order dining", "photo-1617806118233-18e1de247200", "custom dining table and chairs"),
  inspiration("Custom Furniture", "A bed with presence", "photo-1616594039964-ae9021a400a0", "wooden bed and bedroom furniture"),
  inspiration("Custom Furniture", "Furniture with room to store", "photo-1598300056393-4aac492f4344", "custom storage furniture in a bedroom"),
  inspiration("Custom Furniture", "A personal finishing touch", "photo-1615874694520-474822394e73", "made-to-order bedroom furniture and cabinetry")
];

const confirmedProjectImages = [];

const galleryGrid = document.querySelector("#gallery-grid");
const realProjectGrid = document.querySelector("#real-project-grid");
const projectGalleryEmpty = document.querySelector("#project-gallery-empty");
const projectGalleryStatus = document.querySelector(".reference-status");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxCaption = document.querySelector("#lightbox-caption");
const lightboxCount = document.querySelector("#lightbox-count");
const filters = document.querySelectorAll(".filter-button");
let visibleImages = inspirationImages;
let currentImageIndex = 0;

function createGalleryCard(image, index, images, confirmed) {
  const card = document.createElement("article");
  card.className = "gallery-card";

  const photoButton = document.createElement("button");
  photoButton.type = "button";
  photoButton.className = "gallery-photo-trigger";
  photoButton.setAttribute("aria-label", `View ${confirmed ? "Archon project" : "inspiration"}: ${image.title}`);
  const photo = document.createElement("img");
  photo.src = image.src;
  photo.alt = image.alt;
  photo.loading = "lazy";
  photo.decoding = "async";
  photo.style.objectPosition = image.position || "center";
  photoButton.append(photo);

  const label = document.createElement("span");
  label.className = "gallery-label";
  label.textContent = confirmed ? "CONFIRMED ARCHON PROJECT" : "ILLUSTRATIVE INSPIRATION";

  const caption = document.createElement("span");
  caption.className = "gallery-caption";
  caption.innerHTML = `<span>${image.category}</span><strong>${image.title}</strong><i aria-hidden="true">↗</i>`;

  const actions = document.createElement("span");
  actions.className = "gallery-card-actions";

  const customise = document.createElement("button");
  customise.type = "button";
  customise.className = "gallery-customise";
  customise.textContent = "Customise this design";
  customise.addEventListener("click", () => {
    const type = document.querySelector("#custom-furniture-type");
    const description = document.querySelector("#custom-description");
    const formCategory = {
      "Modular Kitchens": "Modular kitchens and kitchen cabinets",
      "Kitchen Fittings": "Modular kitchens and kitchen cabinets",
      "Home Interiors": "Other custom furniture",
      "Wardrobes": "Wardrobes and storage cabinets",
      "Office Furniture": "Office desks and workstations",
      "School Furniture": "School benches and desks",
      "Sofas": "Custom sofas and sofa sets",
      "Custom Furniture": "Other custom furniture"
    };
    type.value = formCategory[image.category] || "Other custom furniture";
    description.value = `I'm interested in the "${image.title}" design shown in the ${image.category} inspiration gallery.`;
    document.querySelector("#custom-furniture").scrollIntoView({ behavior: "smooth" });
    document.querySelector("#custom-name").focus({ preventScroll: true });
  });

  const enquire = document.createElement("button");
  enquire.type = "button";
  enquire.className = "gallery-enquire";
  enquire.textContent = "Enquire on WhatsApp";
  enquire.addEventListener("click", () => openWhatsApp([
    "Hello Archon Furniture & Interiors, I'd like to enquire about a design.",
    `Furniture type: ${image.category}`,
    `Design reference: ${image.title} (illustrative inspiration, not a confirmed Archon project).`,
    "Could we discuss a customised option and quote?"
  ].join("\n")));

  actions.append(customise, enquire);
  photoButton.addEventListener("click", () => openLightbox(index, images));
  card.append(photoButton, label, caption, actions);
  return card;
}

function renderGallery(category = "All") {
  visibleImages = category === "All"
    ? inspirationImages
    : inspirationImages.filter((image) => image.category === category);
  const projects = category === "All"
    ? confirmedProjectImages
    : confirmedProjectImages.filter((image) => image.category === category);

  galleryGrid.replaceChildren(...visibleImages.map((image, index) =>
    createGalleryCard(image, index, visibleImages, false)
  ));
  realProjectGrid.replaceChildren(...projects.map((image, index) =>
    createGalleryCard(image, index, projects, true)
  ));
  realProjectGrid.hidden = projects.length === 0;
  projectGalleryEmpty.hidden = projects.length > 0;
  projectGalleryStatus.textContent = projects.length
    ? `${projects.length} CONFIRMED PROJECT${projects.length === 1 ? "" : "S"}`
    : "PROJECT PHOTOS NOT AVAILABLE";
}

function openLightbox(index, images) {
  visibleImages = images;
  currentImageIndex = index;
  updateLightbox();
  lightbox.showModal();
  document.body.classList.add("dialog-open");
}

function updateLightbox() {
  const image = visibleImages[currentImageIndex];
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxImage.classList.remove("zoomed");
  const imageType = confirmedProjectImages.includes(image) ? "Confirmed Archon project" : "Illustrative inspiration";
  lightboxCaption.textContent = `${image.category} · ${image.title} · ${imageType}`;
  lightboxCount.textContent = `${String(currentImageIndex + 1).padStart(2, "0")} / ${String(visibleImages.length).padStart(2, "0")}`;
}

function changeLightboxImage(direction) {
  currentImageIndex = (currentImageIndex + direction + visibleImages.length) % visibleImages.length;
  updateLightbox();
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle("active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    renderGallery(button.dataset.filter);
  });
});

document.querySelector(".lightbox-close").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev").addEventListener("click", () => changeLightboxImage(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => changeLightboxImage(1));
document.querySelector(".lightbox-zoom").addEventListener("click", (event) => {
  const zoomed = lightboxImage.classList.toggle("zoomed");
  event.currentTarget.textContent = zoomed ? "Zoom −" : "Zoom +";
  event.currentTarget.setAttribute("aria-label", zoomed ? "Reset image zoom" : "Zoom image");
});
lightbox.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  lightboxImage.classList.remove("zoomed");
  document.querySelector(".lightbox-zoom").textContent = "Zoom +";
});
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") changeLightboxImage(-1);
  if (event.key === "ArrowRight") changeLightboxImage(1);
});

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navigation.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

document.querySelectorAll(".service-ask").forEach((button) => {
  button.addEventListener("click", () => {
    const message = `Hello Archon Furniture & Interiors, I'm interested in ${button.dataset.service}. Could we discuss this?`;
    openWhatsApp(message);
  });
});

function openWhatsApp(message) {
  window.open(`https://wa.me/919175932993?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = [
    "Hello Archon Furniture & Interiors, I'd like to enquire.",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Interested in: ${data.get("service")}`,
    data.get("message") ? `Project details: ${data.get("message")}` : ""
  ].filter(Boolean).join("\n");
  openWhatsApp(message);
});

const customPhoneInput = document.querySelector("#custom-phone");
customPhoneInput.addEventListener("input", () => customPhoneInput.setCustomValidity(""));

document.querySelector("#custom-furniture-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const phone = customPhoneInput;
  const phoneDigits = phone.value.replace(/\D/g, "");
  phone.setCustomValidity(phoneDigits.length >= 7 && phoneDigits.length <= 15 ? "" : "Enter a phone number with 7 to 15 digits.");
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const referencePhoto = data.get("referencePhoto");
  const message = [
    "Hello Archon Furniture & Interiors, I'd like to request a custom furniture quote.",
    `Name: ${data.get("customerName").trim()}`,
    `Phone: ${data.get("customerPhone").trim()}`,
    `Furniture type: ${data.get("furnitureType")}`,
    `Preferred dimensions: ${data.get("dimensions").trim() || "Not specified"}`,
    `Colour/material preferences: ${data.get("preferences").trim() || "Not specified"}`,
    `Quantity: ${data.get("quantity")}`,
    `Budget range (optional): ${data.get("budget").trim() || "Not specified"}`,
    `Design description / special requirements: ${data.get("description").trim() || "Not specified"}`,
    referencePhoto.size > 0
      ? `Reference photo selected: ${referencePhoto.name}. Please attach this photo manually in WhatsApp; this form cannot transfer image attachments.`
      : "If you have a reference photo, please attach it manually in WhatsApp.",
    "Please confirm material, design feasibility, pricing, and timelines during our discussion."
  ].join("\n");
  openWhatsApp(message);
});

const heroSlideData = [
  {
    src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2200&q=88",
    alt: "Illustrative modern kitchen with warm wood cabinetry"
  },
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=88",
    alt: "Illustrative premium living room with comfortable furniture"
  },
  {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=2200&q=88",
    alt: "Illustrative bedroom with a full-height wardrobe"
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2200&q=88",
    alt: "Illustrative contemporary sofa in a thoughtfully furnished room"
  },
  {
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=88",
    alt: "Illustrative modern home interior with coordinated furnishings"
  }
];

const heroSection = document.querySelector(".hero");
const heroImageLayers = [...document.querySelectorAll(".hero-slide")];
const heroIndicators = [...document.querySelectorAll(".hero-indicator")];
const heroCurrentCount = document.querySelector("#hero-current");
const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let activeHeroIndex = 0;
let activeHeroLayer = 0;
let heroRotationTimer;
let readyHeroSlides = [];

function preloadHeroImage(slide) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => {
      console.error(`Unable to load hero image: ${slide.src}`);
      resolve(false);
    };
    image.src = slide.src;
  });
}

function showHeroSlide(index) {
  const slideIndex = readyHeroSlides.indexOf(index);
  if (slideIndex === -1 || index === activeHeroIndex) return;

  const nextLayer = 1 - activeHeroLayer;
  const imageLayer = heroImageLayers[nextLayer];
  imageLayer.style.backgroundImage = `url("${heroSlideData[index].src}")`;
  heroSection.setAttribute("aria-label", heroSlideData[index].alt);

  requestAnimationFrame(() => {
    heroImageLayers[activeHeroLayer].classList.remove("is-active");
    imageLayer.classList.add("is-active");
    activeHeroLayer = nextLayer;
    activeHeroIndex = index;
    heroCurrentCount.textContent = String(slideIndex + 1).padStart(2, "0");
    heroIndicators.forEach((indicator) => {
      const selected = Number(indicator.dataset.heroIndex) === index;
      indicator.classList.toggle("active", selected);
      indicator.setAttribute("aria-pressed", String(selected));
    });
  });
}

function stopHeroRotation() {
  window.clearInterval(heroRotationTimer);
  heroRotationTimer = undefined;
}

function startHeroRotation() {
  stopHeroRotation();
  if (reducedMotionPreference.matches || document.hidden || readyHeroSlides.length < 2) return;

  heroRotationTimer = window.setInterval(() => {
    const currentPosition = readyHeroSlides.indexOf(activeHeroIndex);
    const nextPosition = (currentPosition + 1) % readyHeroSlides.length;
    showHeroSlide(readyHeroSlides[nextPosition]);
  }, 4500);
}

heroSection.addEventListener("mouseenter", stopHeroRotation);
heroSection.addEventListener("mouseleave", startHeroRotation);
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopHeroRotation();
  else startHeroRotation();
});
reducedMotionPreference.addEventListener("change", startHeroRotation);

heroIndicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    showHeroSlide(Number(indicator.dataset.heroIndex));
    startHeroRotation();
  });
});
document.querySelectorAll("[data-hero-step]").forEach((button) => {
  button.addEventListener("click", () => {
    const currentPosition = readyHeroSlides.indexOf(activeHeroIndex);
    if (currentPosition === -1 || readyHeroSlides.length < 2) return;
    const direction = Number(button.dataset.heroStep);
    const nextPosition = (currentPosition + direction + readyHeroSlides.length) % readyHeroSlides.length;
    showHeroSlide(readyHeroSlides[nextPosition]);
    startHeroRotation();
  });
});

Promise.all(heroSlideData.map((slide) => preloadHeroImage(slide))).then((loadedSlides) => {
  readyHeroSlides = loadedSlides.flatMap((loaded, index) => loaded ? [index] : []);
  heroIndicators.forEach((indicator) => {
    indicator.disabled = !readyHeroSlides.includes(Number(indicator.dataset.heroIndex));
  });
  if (readyHeroSlides.length) {
    const firstSlideIndex = readyHeroSlides[0];
    const firstLayer = heroImageLayers[0];
    firstLayer.style.backgroundImage = `url("${heroSlideData[firstSlideIndex].src}")`;
    firstLayer.classList.add("is-active");
    heroSection.setAttribute("aria-label", heroSlideData[firstSlideIndex].alt);
    activeHeroIndex = firstSlideIndex;
    activeHeroLayer = 0;
    heroCurrentCount.textContent = String(readyHeroSlides.indexOf(firstSlideIndex) + 1).padStart(2, "0");
    heroIndicators.forEach((indicator) => {
      const selected = Number(indicator.dataset.heroIndex) === firstSlideIndex;
      indicator.classList.toggle("active", selected);
      indicator.setAttribute("aria-pressed", String(selected));
    });
    startHeroRotation();
  }
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
renderGallery();
