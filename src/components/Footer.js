import Socials from './Socials';

function Footer() {
  return (
    <footer>
      <div>Empowering African businesses & NGOs with AI Automation.</div>
      {/* Animated Social Links */}
      <Socials />
      <div style={{ fontSize: '0.85em', marginTop: 4 }}>
        &copy; {new Date().getFullYear()} AutoMinds Africa
      </div>
    </footer>
  );
}
export default Footer;
