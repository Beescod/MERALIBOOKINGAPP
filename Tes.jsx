const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  const isMobile = window.innerWidth <= 768;

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className={`sticky top-0 flex h-screen items-center overflow-hidden ${isMobile ? "disable-scroll-for-mobile" : ""}`}>
        {isMobile ? (
          /* Static View for Mobile */
          <div>
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </div>
        ) : (
          /* Motion Effect for Desktop */
          <motion.div style={{ x }} className="flex">
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
