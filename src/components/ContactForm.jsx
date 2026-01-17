import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

export function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const messageText = formData.get("message");

    if (!name || name.trim().length < 2) {
      newErrors.name = "Please enter your name (at least 2 characters)";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!messageText || messageText.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters)";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setMessage("");

    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setMessage("Please fix the errors below");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xrbeeaea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Message sent successfully! I'll get back to you soon.");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container">
      <Card className="text-left mb-6 mt-8 animate-on-scroll animate-fade-in-up card-hover">
        <form className="mt-8" onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Send me a message!</CardTitle>
            <CardDescription>
              <p className="mb-2 mt-4">
                Dropping a line to say hi, or see if we can build something
                amazing together? I'd love to hear from you!
              </p>
              <p>
                Fill in your info in the form below and I look forward to
                hearing from you!
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="md:flex md:justify-between md:items-start">
              <div className="mb-4 flex-1 md:mr-4">
                <Label htmlFor="contact-name">
                  Your name
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="mt-2"
                  name="name"
                  aria-required="true"
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-red-600 dark:text-red-400 mt-1" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="mb-4 flex-1">
                <Label htmlFor="contact-email">
                  Your email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="mt-2"
                  name="email"
                  aria-required="true"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-600 dark:text-red-400 mt-1" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-2">
              <Label htmlFor="contact-message">
                Your message
              </Label>
              <Textarea
                id="contact-message"
                placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
                required
                className="mt-2"
                name="message"
                aria-required="true"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="text-sm text-red-600 dark:text-red-400 mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex-col items-center gap-4">
            <Button type="submit" disabled={status === "submitting"} aria-busy={status === "submitting"} className="button-press">
              {status === "submitting" ? "Sending..." : "Shoot me a message"}
            </Button>
            {message && status !== "error" && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}
                role="status"
                aria-live="polite"
              >
                {message}
              </p>
            )}
            {message && status === "error" && Object.keys(errors).length === 0 && (
              <p
                className="text-sm text-red-600 dark:text-red-400"
                role="alert"
              >
                {message}
              </p>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
