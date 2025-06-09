import React from 'react';
import { FileText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center space-x-4 mb-8">
        <FileText className="h-8 w-8 text-primary-600" />
        <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <p className="text-gray-600 mb-6">
          Last Updated: January 1, 2023
        </p>

        <div className="prose prose-blue max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to BSwisdom.org ("we," "our," or "us"). By accessing or using our website, services, or products, you agree to be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully before using our services.
          </p>

          <h2>2. Services</h2>
          <p>
            BSwisdom.org provides professional services including but not limited to academic writing assistance, business planning, legal document preparation, website development, and other professional services as described on our website.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>
            By using our services, you agree to:
          </p>
          <ul>
            <li>Provide accurate and complete information when requested</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not infringe on intellectual property rights</li>
            <li>Not use our services for academic dishonesty or plagiarism</li>
            <li>Maintain the confidentiality of your account information</li>
          </ul>

          <h2>4. Payment Terms</h2>
          <p>
            Payment for services is due at the time of ordering unless otherwise specified. We accept major credit cards and other payment methods as indicated on our website. All prices are in US dollars unless otherwise specified.
          </p>

          <h2>5. Refund Policy</h2>
          <p>
            We strive to provide high-quality services. If you are not satisfied with our services, please contact us within 7 days of delivery. Refunds may be issued at our discretion based on the circumstances and nature of the service provided.
          </p>

          <h2>6. Intellectual Property</h2>
          <p>
            Upon full payment, you receive a non-exclusive license to use the deliverables for your personal or business purposes. We retain intellectual property rights to our methodologies, processes, and proprietary systems.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, BSwisdom.org shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>

          <h2>8. Confidentiality</h2>
          <p>
            We respect your privacy and maintain strict confidentiality regarding your personal information and project details. Please refer to our Privacy Policy for more information on how we collect, use, and protect your data.
          </p>

          <h2>9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law principles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;