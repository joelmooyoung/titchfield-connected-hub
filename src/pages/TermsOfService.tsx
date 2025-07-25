const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground space-y-6">
            <p className="text-muted-foreground text-lg mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Titchfield High School website, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Titchfield 
                High School's website for personal, non-commercial transitory viewing only. This is 
                the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">3. Disclaimer</h2>
              <p>
                The materials on Titchfield High School's website are provided on an 'as is' basis. 
                Titchfield High School makes no warranties, expressed or implied, and hereby disclaims 
                and negates all other warranties including without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">4. Limitations</h2>
              <p>
                In no event shall Titchfield High School or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on the website, 
                even if Titchfield High School or its authorized representative has been notified orally 
                or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Titchfield High School's website could include technical, 
                typographical, or photographic errors. Titchfield High School does not warrant that 
                any of the materials on its website are accurate, complete, or current. The school 
                may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">6. Links</h2>
              <p>
                Titchfield High School has not reviewed all of the sites linked to our website and 
                is not responsible for the contents of any such linked site. The inclusion of any 
                link does not imply endorsement by the school of the site. Use of any such linked 
                website is at the user's own risk.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">7. Modifications</h2>
              <p>
                Titchfield High School may revise these terms of service for its website at any time 
                without notice. By using this website, you are agreeing to be bound by the then current 
                version of these terms of service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">8. User Conduct</h2>
              <p>You agree not to use the website to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, or offensive content</li>
                <li>Interfere with or disrupt the website's functionality</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">9. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                of Jamaica and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that state or location.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-primary">10. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;