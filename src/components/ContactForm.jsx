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
  return (
    <div class="container">
      <Card className="text-left mb-6 mt-8">
        <form
          class="mt-8"
          action="https://formspree.io/f/xrbeeaea"
          method="POST"
        >
          <CardHeader>
            <CardTitle>Send me a message!</CardTitle>
            <CardDescription>
              <p class="mb-2 mt-4">
                Dropping a line to say hi, or see if we can build something
                amazing together? I’d love to hear from you!
              </p>
              <p>
                Fill in your info in the form below and I look forward to
                hearing from you!
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="md:flex md:justify-between md:items-center">
              <div class="mb-4">
                <Label htmlFor="contact-name">
                  Your name
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="mt-2 md:w-72"
                  name="name"
                  aria-required="true"
                />
              </div>
              <div class="mb-4">
                <Label htmlFor="contact-email">
                  Your email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="mt-2 md:w-72"
                  name="email"
                  aria-required="true"
                />
              </div>
            </div>
            <div class="mb-2">
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
              />
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button type="submit">Shoot me a message</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
