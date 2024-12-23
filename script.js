const perfumeData = {
    fresh: {
      light: "Embark Goa - Fresh bergamot and mint notes.",
      moderate: "Dolce & Gabbana Light Blue - Crisp citrus and green apple.",
      strong: "Chanel Chance Eau Fraiche - Bright citrus and woody base."
    },
    floral: {
      light: "Daisy by Marc Jacobs - Subtle violet and strawberry.",
      moderate: "Gucci Bloom - Jasmine and tuberose bouquet.",
      strong: "Miss Dior Blooming Bouquet - Intense rose and peony."
    },
    woody: {
      light: "Santal 33 by Le Labo - Soft sandalwood and iris.",
      moderate: "Tom Ford Oud Wood - Rich oud and cedar.",
      strong: "Byredo Super Cedar - Bold cedar and musk."
    },
    oriental: {
      light: "Prada Candy - Warm caramel and vanilla.",
      moderate: "YSL Black Opium - Sweet coffee and vanilla.",
      strong: "Mugler Alien - Bold amber and jasmine."
    }
  };
  
  document.getElementById("recommendBtn").addEventListener("click", () => {
    const scentType = document.getElementById("scentType").value;
    const intensity = document.getElementById("intensity").value;
  
    const recommendation = perfumeData[scentType][intensity];
  
    const recommendationText = document.getElementById("recommendation");
    recommendationText.textContent = recommendation;
  
    const resultSection = document.getElementById("resultSection");
    resultSection.style.display = "block";
  
    // Add Fade-In Animation to the Result Section
    resultSection.style.animation = "fadeIn 1s ease-in";
  });
  