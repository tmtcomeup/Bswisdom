import React from 'react';
import { FileText, Download, Mail } from 'lucide-react';

interface DonationReceiptProps {
  donationData: {
    name: string;
    email: string;
    amount: number;
    date: string;
    transactionId: string;
  };
  onClose: () => void;
}

const DonationReceipt: React.FC<DonationReceiptProps> = ({ donationData, onClose }) => {
  const { name, email, amount, date, transactionId } = donationData;

  const handleDownload = () => {
    // In a real implementation, this would generate a PDF receipt
    console.log('Downloading receipt:', donationData);
    alert('Receipt download functionality will be implemented soon.');
  };

  const handleEmail = () => {
    // In a real implementation, this would email the receipt
    console.log('Emailing receipt to:', email);
    alert(`Receipt will be emailed to ${email} shortly.`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <FileText className="h-12 w-12 text-green-600 mx-auto mb-2" />
        <h2 className="text-2xl font-bold text-gray-900">Donation Receipt</h2>
        <p className="text-green-600 font-medium">Tax Deductible</p>
      </div>

      <div className="border-t border-b border-gray-200 py-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Donor Name</p>
            <p className="font-medium">{name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Donation Date</p>
            <p className="font-medium">{date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Amount</p>
            <p className="font-medium text-lg">${amount.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Transaction ID</p>
            <p className="font-medium text-xs">{transactionId}</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-600 text-sm">
          This receipt confirms that <span className="font-medium">{name}</span> made a tax-deductible donation of <span className="font-medium">${amount.toFixed(2)}</span> to BSwisdom.org on <span className="font-medium">{date}</span>.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          BSwisdom.org is a registered 501(c)(3) non-profit organization.
        </p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDownload}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
        >
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </button>
        <button
          onClick={handleEmail}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
        >
          <Mail className="h-4 w-4 mr-2" />
          Email Receipt
        </button>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 text-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DonationReceipt;