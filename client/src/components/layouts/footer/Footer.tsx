import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-bold text-primary mb-4">Savory Bites</h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Serving culinary masterpieces that delight the senses. Visit us for an unforgettable dining experience where passion meets flavor.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full"><i className="lucide-instagram"></i></Button>
              <Button variant="outline" size="icon" className="rounded-full"><i className="lucide-twitter"></i></Button>
              <Button variant="outline" size="icon" className="rounded-full"><i className="lucide-facebook"></i></Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a></li>
              <li><a href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Opening Hours</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>10AM - 10PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10AM - 11PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>10AM - 9PM</span></li>
            </ul>
          </div>

        </div>
      </div>
      
      <Separator />
      
      <div className="container mx-auto px-4 py-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
        <div>
          &copy; {new Date().getFullYear()} Savory Bites Restaurant. All rights reserved.
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
