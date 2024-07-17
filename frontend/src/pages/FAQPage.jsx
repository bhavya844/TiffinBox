const FAQ = [
  {
    question: "What is a tiffin service?",
    answer:
      "A tiffin service is a meal delivery service that provides home-cooked meals delivered to your doorstep. Our platform connects customers with local tiffin service providers who prepare delicious and nutritious meals.",
  },
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply sign up on our website, browse the available tiffin providers, select your preferred meal plan, and place your order. You can choose from a variety of meal options.",
  },
  {
    question: "What are the requirements to become a provider?",
    answer:
      "To become a provider, you must have a certified kitchen, adhere to food safety and hygiene standards, and be able to provide consistent, high-quality meals. You will also need to provide valid identification and relevant licenses.",
  },
  {
    question: "How do I manage my orders and menu?",
    answer:
      "Once registered, you will have access to your provider dashboard where you can manage your orders, update your menu, and set your availability. Our platform makes it easy to track orders and communicate with customers.",
  },
];

function FAQPage() {
  return (
    <div className="flex flex-col items-center">
      <section className="max-w-5xl overflow-hidden rounded-md shadow-md hero h-96 bg-bgFaq">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl">/FAQ</h1>
            <p className="mb-5">
              Welcome to our FAQ page! Here you'll find answers to the most
              common questions about our tiffin service. If you can't find the
              answer you're looking for, please don't hesitate to contact us.
            </p>
            <a href="#questions" className="btn btn-secondary text-slate-200">
              Questions
            </a>
          </div>
        </div>
      </section>
      <section
        id="questions"
        className="flex flex-col w-full max-w-2xl gap-8 p-4 py-32"
      >
        <h1 className="text-3xl font-bold text-center capitalize">
          General Questions
        </h1>
        <div className="w-full join join-vertical">
          {FAQ.map((field) => {
            return (
              <div
                key={field.question}
                className="border collapse collapse-arrow join-item border-base-300"
              >
                <input type="radio" name="my-accordion-4" />
                <div className="text-xl font-medium collapse-title">
                  {field.question}
                </div>
                <div className="collapse-content">
                  <p>{field.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
