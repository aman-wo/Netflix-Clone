import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css"
const Footer = () => {
  return (
    <div>
      <div className="footer_outer_container">
        <div className="footeer_inner_container">
          <div className="footer_icons">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preference</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
              <li>Media center</li>
              <li>privacy</li>
              <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='service_code'>
            <p>Service Code</p>
          </div>
          <div className='copy-write'>
@copy; 1997-2025 Netflix, Inc.
          </div>
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "20px", color: "#aaa" }}>
        <a
          href="https://www.flaticon.com/free-icons/netflix"
          title="Netflix icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netflix icons created by Freepik - Flaticon
        </a>
      </footer>
    </div>
  );
}

export default Footer
