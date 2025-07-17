import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FormLobby from "./pages/multiform/FormLobby";
import { formConfig } from "./utilits/formConfig";
import PersonalForm from "./pages/multiform/formsgroup/PersonalForm";
import EducationForm from "./pages/multiform/formsgroup/EducationForm";
import AddressForm from "./pages/multiform/formsgroup/AddressForm";
import EmploymentForm from "./pages/multiform/formsgroup/EmploymentForm";
import ReviewSubmitForm from "./pages/multiform/formsgroup/ReviewSubmitForm";
import ContactForm from "./pages/multiform/formsgroup/ContactForm";
import FeedbackForm from "./pages/multiform/formsgroup/FeedbackForm";
import RegistrationForm from "./pages/multiform/formsgroup/RegistrationForm";
import LoginForm from "./pages/multiform/formsgroup/LoginForm";
import DocumentUploadForm from "./pages/multiform/formsgroup/DocumentUploadForm";
import SurveyForm from "./pages/multiform/formsgroup/SurveyForm";
import BookingForm from "./pages/multiform/formsgroup/BookingForm";
import PaymentForm from "./pages/multiform/formsgroup/PaymentForm";
import NewsletterForm from "./pages/multiform/formsgroup/NewsletterForm";
import React from "react";

function App() {
  const formName = {
    PersonalForm,
    EducationForm,
    AddressForm,
    EmploymentForm,
    ReviewSubmitForm,
    ContactForm,
    FeedbackForm,
    RegistrationForm,
    LoginForm,
    DocumentUploadForm,
    SurveyForm,
    BookingForm,
    PaymentForm,
    NewsletterForm,
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/formsviews" element={<FormLobby />} />

          {formConfig.map((item) => (
            <Route
              key={item.id}
              path={`/pages/multiform/formsgroup/${item.component}`}
              element={
                formName[item.component] ? (
                  React.createElement(formName[item.component])
                ) : (
                  <div>Form Not Found</div>
                )
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
