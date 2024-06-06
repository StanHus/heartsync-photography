window.onload = function () {
  const images = [
    {
      alt: "Photo by Andrew S on Unsplash",
      src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
      text: "Text for Andrew S on Unsplash",
      children: [
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
        {
          alt: "Photo by Andrew S on Unsplash",
          src: "https://unsplash.com/photos/ouo1hbizWwo/download?&w=1280",
          text: "Text for Andrew S on Unsplash",
        },
      ],
    },
    {
      alt: "Photo by Eric Ward on Unsplash",
      src: "https://unsplash.com/photos/ISg37AI2A-s/download?&w=1280",
      text: "Text for Eric Ward on Unsplash",
    },
    {
      alt: "Photo by Jack Catalano on Unsplash",
      src: "https://unsplash.com/photos/6aY_0S-epZQ/download?&w=1280",
      text: "Text for Jack Catalano on Unsplash",
    },
    {
      alt: "Photo by Krista Mangulsone on Unsplash",
      src: "https://unsplash.com/photos/9gz3wfHr65U/download?&w=1280",
      text: "Text for Krista Mangulsone on Unsplash",
    },
    {
      alt: "Photo by James Barker on Unsplash",
      src: "https://unsplash.com/photos/v3-zcCWMjgM/download?&w=1280",
      text: "Text for James Barker on Unsplash",
    },
    {
      alt: "Photo by Ludemeula Fernandes on Unsplash",
      src: "https://unsplash.com/photos/9UUoGaaHtNE/download?&w=1280",
      text: "Text for Ludemeula Fernandes on Unsplash",
    },
    {
      alt: "Photo by Bonnie Kittle on Unsplash",
      src: "https://unsplash.com/photos/MUcxe_wDurE/download?&w=1280",
      text: "Text for Bonnie Kittle on Unsplash",
    },
  ];

  const slider = document.getElementById("slider");

  images.map((image, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cm-slider__item";
    itemDiv.setAttribute("data-slide-index", index);

    const imgElement = document.createElement("img");
    imgElement.className = "cm-slider__image";
    imgElement.alt = image.alt;
    imgElement.src = image.src;

    const textDiv = document.createElement("div");
    textDiv.className = "cm-slider__text";
    const textSpan = document.createElement("span");
    textSpan.textContent = image.text;
    textSpan.className = "heading";
    // create icon-close
    const closeIcon = document.createElement("i");
    closeIcon.className = "icon-close";
    closeIcon.innerHTML = "&times;";

    textDiv.appendChild(textSpan);
    textDiv.appendChild(closeIcon);

    if (image.children) {
      image.children.map((child) => {
        const image = document.createElement("img");
        image.className = "child-image";
        image.src = child.src;
        image.alt = child.alt;
        textDiv.appendChild(image);
      });
    }

    itemDiv.appendChild(imgElement);
    itemDiv.appendChild(textDiv);
    slider.appendChild(itemDiv);
  });

  const cmSliderWrapper = document.querySelector(".cm-slider__wrapper");
  const getWindowWidth = () =>
    window.innerWidth || document.documentElement.clientWidth;
  const getWindowHeight = () =>
    window.innerHeight || document.documentElement.clientHeight;
  const getWidthAdjustment = () =>
    (getWindowWidth() - cmSliderWrapper.offsetWidth) / 2;
  const isTouchScreenOnly = () => !window.matchMedia("(hover: hover)").matches;
  let isScrollingEnabled = true;

  const enableScrolling = () => {
    isScrollingEnabled = true;
    // remove the black background from the body
    const blackBackground = document.querySelector(".black-background");
    if (blackBackground) blackBackground.remove();
  };

  const disableScrolling = () => {
    isScrollingEnabled = false;
    // append a black background to the body
    const blackBackground = document.createElement("div");
    blackBackground.classList.add("black-background");
    // document.body.appendChild(blackBackground);
    // add event listener to remove the black background when clicked
    blackBackground.addEventListener("click", () => {
      blackBackground.remove();
      enableScrolling();
    });
  };

  cmSliderWrapper.onmousemove = (e) => {
    if (isTouchScreenOnly() || !isScrollingEnabled) return;
    let percentage =
      ((e.clientX - getWidthAdjustment()) / cmSliderWrapper.offsetWidth) * 100;
    percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;
    let cmSlider = document.querySelector(".cm-slider");
    let animateDuration = 800;
    if (typeof userTabbed !== "undefined" && userTabbed) {
      animateDuration = 300;
      userTabbed = false;
    }
    cmSlider.animate(
      {
        transform: `translate(${-percentage}%, -50%)`,
      },
      {
        duration: animateDuration,
        fill: "forwards",
      }
    );
    for (const image of cmSlider.getElementsByClassName("cm-slider__image")) {
      image.animate(
        {
          objectPosition: `${percentage}% center`,
        },
        {
          duration: animateDuration,
          fill: "forwards",
        }
      );
    }
    if (
      typeof nudgeSliderScrollPosition !== "undefined" &&
      nudgeSliderScrollPosition
    )
      nudgeSliderScrollPosition();
  };

  const isInViewport = (rect) =>
    rect.top >= -rect.height &&
    rect.left >= -rect.width &&
    rect.bottom <= getWindowHeight() + rect.height &&
    rect.right <= getWindowWidth() + rect.width;

  cmSliderWrapper.addEventListener("scroll", () => {
    if (!isTouchScreenOnly() || !isScrollingEnabled) return;
    let cmSlider = document.querySelector(".cm-slider");
    for (const image of cmSlider.getElementsByClassName("cm-slider__image")) {
      let rect = image.getBoundingClientRect();
      if (isInViewport(rect)) {
        let percentage =
          ((rect.x + rect.width) / (getWindowWidth() + rect.width)) * 100;
        image.style.objectPosition = `${percentage}% center`;
      }
    }
  });

  cmSliderWrapper.dispatchEvent(new Event("scroll"));

  let wasTouchScreenOnly = isTouchScreenOnly();
  window.addEventListener("resize", () => {
    if (wasTouchScreenOnly && isTouchScreenOnly()) return;
    wasTouchScreenOnly = isTouchScreenOnly();
    if (!isTouchScreenOnly()) return;
    let cmSlider = document.querySelector(".cm-slider");
    cmSlider.parentNode.replaceChild(cmSlider.cloneNode(true), cmSlider);
  });

  let prevActiveElement = document.activeElement;
  let userTabbed = false;
  let userMouseDown = 0;

  const onFocusChange = () => {
    if (userMouseDown > 0) return;
    let currentActiveElement = document.activeElement;
    if (prevActiveElement === currentActiveElement) return;
    prevActiveElement = currentActiveElement;
    if (!currentActiveElement.classList.contains("cm-slider__link")) return;
    if (isTouchScreenOnly()) {
      currentActiveElement.scrollIntoView({
        behavior: "auto",
        block: "center",
        inline: "center",
      });
      return;
    }
    userTabbed = true;
    const siblingCount = currentActiveElement.parentElement.children.length;
    const currentIndex = parseInt(currentActiveElement.dataset.slideIndex);
    const sliderWidth = cmSliderWrapper.offsetWidth;
    const calcX =
      getWidthAdjustment() +
      (currentIndex + 0.5) * (sliderWidth / siblingCount);
    const calcY = getWindowHeight() / 2;
    cmSliderWrapper.scrollIntoView({
      behavior: "auto",
      block: "center",
      inline: "center",
    });
    cmSliderWrapper.dispatchEvent(
      new MouseEvent("mousemove", {
        view: window,
        bubbles: true,
        clientX: calcX,
        clientY: calcY,
      })
    );
  };

  window.addEventListener("focus", onFocusChange, true);
  window.addEventListener("blur", onFocusChange, true);

  const onMouseDown = () => {
    userMouseDown++;
  };
  const onMouseUp = () => {
    userMouseDown--;
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 9) userMouseDown = 0;
  };

  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);
  window.addEventListener("keydown", onKeyDown);

  const getScrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop;

  const nudgeSliderScrollPosition = () => {
    if (isTouchScreenOnly()) return;
    let rect = cmSliderWrapper.getBoundingClientRect();
    if (!isInViewport(rect)) return;
    const percentageInViewport = 0.33;
    const nudgeRange = rect.height * percentageInViewport;
    if (Math.abs(rect.top) > nudgeRange) return;
    let distance = rect.top / 10;
    const currentScrollPosition = getScrollPosition();
    window.scrollBy({
      top: distance,
      behavior: "instant",
    });
    if (currentScrollPosition === getScrollPosition()) {
      cmSliderWrapper.scrollIntoView({
        behavior: "instant",
        block: "center",
        inline: "center",
      });
    }
  };

  function collapse(item) {
    enableScrolling();
    // show all items
    document.querySelectorAll(".cm-slider__item").forEach((otherItem) => {
      otherItem.style.display = "block";
    });
  }

  function toggleExpand(item) {
    const isExpanded = item.classList.toggle("expanded");
    if (isExpanded) {
      disableScrolling();
      // hide all other items except the expanded one
      document.querySelectorAll(".cm-slider__item").forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.style.display = "none";
        }
      });
    } else {
      collapse();
    }
  }

  // Add functionality to expand card on click
  document.querySelectorAll(".cm-slider__item").forEach((item) => {
    item.addEventListener("click", () => {
      toggleExpand(item);
    });
  });

  document.querySelectorAll("nav a.active").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
};
