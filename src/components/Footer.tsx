import { Link } from "react-router-dom";
import logo from "figma:asset/90dc3d8718a048a0031c229e17b5fa5befd53cdc.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 glass">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://i.imgur.com/MhlFhqY.png"
                alt="CuffWay Logo"
                className="h-25 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Developing innovative medical devices to prevent airway injuries during endotracheal intubation.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} CuffWay. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="text-sm font-semibold mb-4">References</h3>
            <ul className="space-y-3 text-xs text-muted-foreground leading-relaxed">
              <li>
                <sup>1</sup>{" "}
                <a 
                  href="https://doi.org/10.1097/CCM.0000000000004015" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Shinn, J. R., Kimura, K. S., Campbell, B. R., Sun Lowery, A., Wootten, C. T., Garrett, C. G., Francis, D. O., Hillel, A. T., Du, L., Casey, J. D., Ely, E. W., & Gelbard, A. (2019). Incidence and Outcomes of Acute Laryngeal Injury After Prolonged Mechanical Ventilation. <i>Critical care medicine, 47</i>(12), 1699–1706.
                </a>
              </li>
              <li>
                <sup>2</sup>{" "}
                <a 
                  href="https://doi.org/10.1177/175045891102101103" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Sultan, P., Carvalho, B., Cregg, R., & Rose, B. (2011). Endotracheal Tube Cuff Pressure Monitoring: A Review of the Evidence. <i>Journal of Perioperative Practice, 21</i>(11), 379-86.
                </a>
              </li>
              <li>
                <sup>3</sup>{" "}
                <a 
                  href="https://doi.org/10.4187/respcare.10632" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Miller, A. G., et al. (2023). Enhancing respiratory therapists' well-being: Battling burnout in respiratory care. <i>Respiratory Care, 68</i>(5), 692–705.
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            CuffWay is an early-stage medical device company. Our device is currently in development and not yet approved for clinical use.
          </p>
        </div>
      </div>
    </footer>
  );
}