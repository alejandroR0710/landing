import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import ContactPage from "../pages/ContactPage"
import ServicesPage from "../pages/ServicesPage"
import ProjectsPage from "../pages/ProjectsPage"
// import TestimonialsPage from "../pages/TestimonialsPage"
import FAQsPage from "../pages/FAQsPage"
import NotFoundPage from "../pages/NotFoundPage"
import { ProviderApp } from "../context/ContextApp"
import Header from "../components/Header"
import FooterPage from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const RouterApp = () => {
  return (
    <ProviderApp>
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/projects" component={ProjectsPage} />
            {/* <Route path="/testimonials" component={TestimonialsPage} /> */}
            <Route path="/faqs" component={FAQsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
          <FooterPage />
        </ScrollToTop>
      </Router>
    </ProviderApp>
  )
}

export default RouterApp
