/* Reduce the translateY distance for fade-up animation */
[data-aos="fade-up"] {
  transform: translateY(10px);
  opacity: 0;
}

[data-aos="fade-up"].aos-animate {
  transform: translateY(0); /* End position */
  opacity: 1; /* Fully visible */
}
