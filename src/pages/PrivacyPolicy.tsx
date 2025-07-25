const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                subscribe to our newsletter, attend events, or contact us. This may include your name, 
                email address, phone number, mailing address, and other contact information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Send you newsletters and updates about school events</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process donations and alumni contributions</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information with 
                trusted service providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">5. Cookies and Tracking</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance your experience. 
                You can choose to disable cookies through your browser settings, though this may affect 
                the functionality of our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your personal information</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">7. Children's Privacy</h2>
              <p>
                Our website is not intended for children under 13. We do not knowingly collect personal 
                information from children under 13. If you believe we have collected such information, 
                please contact us immediately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p><strong>Titchfield High School</strong></p>
                <p>Port Antonio, Portland, Jamaica</p>
                <p>Email: info@titchfieldhigh.edu.jm</p>
                <p>Phone: (876) 993-2556</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;