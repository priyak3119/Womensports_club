import React, { useState, ChangeEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "../../styles/FeedbackWidget.css";

const FeedbackWidget: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [rating, setRating] = useState<number>(0);
  const [feedbackText, setFeedbackText] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const { lang } = useLanguage();
  const isArabic = lang === "ar";

  const handleNext = (): void => {
    if (step === 2 && rating === 0) {
      alert(isArabic ? "يرجى اختيار التقييم" : "Please select a rating");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = (): void => {
    setStep(step - 1);
  };

  const handleSubmit = (): void => {
    console.log({ rating, feedbackText, mobile });
    alert(isArabic ? "تم إرسال الملاحظات. شكراً لك!" : "Feedback submitted. Thank you!");
    setStep(1);
    setRating(0);
    setFeedbackText("");
    setMobile("");
  };

  const handleFeedbackChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setFeedbackText(e.target.value);
  };

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setMobile(e.target.value);
  };

  return (
    <div className="feedback-widget" dir={isArabic ? "rtl" : "ltr"}>
      {step === 1 && (
        <button className="start-btn" onClick={() => setStep(2)}>
          ⭐
        </button>
      )}

      {step === 2 && (
        <div className="rating-step">
          <h3>{isArabic ? "كيف تقيم موقعنا؟" : "How would you rate our website?"}</h3>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={i <= rating ? "star selected" : "star"}
                onClick={() => setRating(i)}
              >
                ★
              </span>
            ))}
          </div>
          <div className="step-buttons">
            <button onClick={handlePrevious}>{isArabic ? "السابق" : "Previous"}</button>
            <button onClick={handleNext}>{isArabic ? "التالي" : "Next"}</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="feedback-step">
          <h3>{isArabic ? "أي ملاحظات أخرى؟" : "Any other feedback?"}</h3>
          <textarea
            placeholder={isArabic ? "ملاحظاتك" : "Your feedback"}
            value={feedbackText}
            onChange={handleFeedbackChange}
          />
          <input
            type="text"
            placeholder={isArabic ? "رقم الجوال (اختياري)" : "Mobile number (optional)"}
            value={mobile}
            onChange={handleMobileChange}
          />
          <div className="step-buttons">
            <button onClick={handlePrevious}>{isArabic ? "السابق" : "Previous"}</button>
            <button onClick={handleSubmit}>{isArabic ? "إرسال" : "Submit"}</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackWidget;